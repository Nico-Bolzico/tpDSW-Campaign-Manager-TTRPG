import { personajeRepository } from "./personaje.repository";
import { CreatePersonajeDTO, UpdatePersonajeDTO } from "./personaje.dto";
import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";  
import { ForbiddenError, NotFoundError } from "../../lib/errors";

export const personajeService = {
  async create(data: CreatePersonajeDTO, usuarioId: number) {
    if (data.imagenId) {
      const imagen = await prisma.imagen.findUnique({ where: { id: data.imagenId } });
      if (!imagen) throw new NotFoundError("La imagen indicada no existe");
    }
    return personajeRepository.create(data, usuarioId);
  },

  async update(id: number, data: UpdatePersonajeDTO, usuarioId: number) {
    const personaje = await personajeRepository.findById(id);
    if (!personaje) throw new NotFoundError("Personaje no encontrado");

    // Autorización por fila: no alcanza con estar logueado
    if (personaje.usuarioId !== usuarioId) {
      throw new ForbiddenError("Solo el creador puede modificar este personaje");
    }

    return personajeRepository.update(id, data);
  },

async getOne(id: number) {
  const personaje = await personajeRepository.findById(id);
  if (!personaje) throw new NotFoundError("Personaje no encontrado");
  return personaje;
},

  getMisPersonajes(usuarioId: number) {
    return personajeRepository.findByUsuario(usuarioId, "jugable");
  },
  
  async delete(id: number, usuarioId: number) {
    const personaje = await personajeRepository.findById(id);
    if (!personaje) throw new NotFoundError("Personaje no encontrado");
    if (personaje.usuarioId !== usuarioId) {
      throw new ForbiddenError("Solo el creador puede eliminar este personaje");
    }

    // Acá va la transacción si hay que limpiar huérfanos (objetos/rasgos específicos de campaña que queden sin PersonajeCampana asociado)
    return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.personaje.delete({ where: { id } });
      // ... chequeo de huérfanos si aplica
    });
  },

};