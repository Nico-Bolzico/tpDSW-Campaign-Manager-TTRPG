import { z } from "zod";

export const createPersonajeSchema = z.object({
  //.optional() permite que el valor sea undefined
  tipo: z.enum(["jugable", "no_jugable"]),
  nombre: z.string().min(1).max(100),
  descripcion: z.string().optional(),
  especie: z.string().optional(),
  clase: z.string().optional(),
  imagenId: z.number().int().positive().optional(),
  armadura: z.string().optional(),
  iniciativa: z.number().int().optional(),
  velocidad: z.number().int().optional(),
  vidaMax: z.number().int().positive().optional(),
  manaMax: z.number().int().nonnegative().optional(),
  estadoAgresion: z.enum(["hostil", "neutral", "amistoso"]).optional(),
  // usuarioId NO va acá: sale del usuario autenticado, nunca del body
});

export const updatePersonajeSchema = createPersonajeSchema
  .omit({ tipo: true })
  .partial();

export type CreatePersonajeDTO = z.infer<typeof createPersonajeSchema>;
export type UpdatePersonajeDTO = z.infer<typeof updatePersonajeSchema>;
