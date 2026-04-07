# Propuesta TP DSW

## Grupo

### Integrantes
- 52285 - Gregoret, Agustín
- 53081 - Huanambal, Ivo
- 53742 - Bolzico, Nicolás
- 53952 - Cabrera, Martín Leonel

### Repositorios
- frontend app
- backend app  

> Nota: Si se utiliza un monorepo, indicar un solo link con **fullstack app**.

---

## Tema

### Descripción
Aplicación web orientada a la gestión de campañas de juegos de rol de mesa (TTRPG), que permite a usuarios crear campañas, administrar personajes y centralizar la información del juego.  

El sistema facilita la organización de partidas, el seguimiento del progreso de los personajes y la interacción entre jugadores y directores de juego.

---

## Modelo

> *(Agregar aquí diagrama: DER, modelo de dominio o clases. Puede ser imagen o Mermaid)*

---

## Alcance Funcional

### Regularidad

#### CRUD Simple
- CRUD Usuario
- CRUD Campaña
- CRUD Personaje
- CRUD Objeto
- CRUD Dependiente  

**Dependencias:**
- CRUD Objeto → depende de CRUD CatObjeto  
- CRUD Evento → depende de CRUD Campaña  

---

#### Listado + Detalle

1. **Listado de campañas**
   - Filtro: estado  
   - Muestra: nombre de la campaña + usuario master + imagen  
   - Detalle: interfaz para unirse y entrar a la sesión  

2. **Listado de personajes no jugables (NPC)**
   - Condición: pertenecen a al menos un evento de una campaña  
   - Filtro: estadoAgresión  
   - Muestra: nombre + descripción  
   - Detalle: todos los atributos  

---

#### CUU / Epic

- Unir usuario a campaña  
- Comenzar campaña y activar un evento  

---

## Aprobación Directa

### CRUD Simple
- CRUD Usuario  
- CRUD Campaña  
- CRUD Participación  
- CRUD Personaje  
- CRUD Jugable  
- CRUD NoJugable  
- CRUD Objeto  
- CRUD CatObjeto  
- CRUD Rasgo  
- CRUD Acción  
- CRUD Estadística  
- CRUD Evento  

---

### CUU / Epic

- Crear un personaje con sus atributos, habilidades, estadísticas y objetos  
- Incorporar un usuario a una campaña (pública o privada)  
- Activar un evento en una campaña y consultar el estado actual de los personajes participantes  
- Modificar atributos y agregar/eliminar objetos de un personaje durante una campaña  

---

## Alcance Adicional Voluntario

### Listados

3. **Listado de objetos de un personaje**
   - Filtro: categoría  
   - Muestra: nombre + valor  
   - Detalle: descripción + imagen (si posee)  

---

### CUU / Epic

- Invitar a un usuario a una campaña privada y confirmar su ingreso  
- Asignar un personaje existente a una campaña  
- Envío de invitación o notificación de incorporación a campaña por email  

---

## Correcciones

> *(Completar con observaciones del docente si las hay)*
