# TuBoliranaDigital

## 📋 Descripción
TuBoliranaDigital es una aplicación web para jugar a la bolirana de forma digital.  
Se compone de un **frontend** estático (HTML/CSS/JS) y un **backend** construido con FastAPI y MongoDB.  
Cada usuario se registra con email, username y password; al registrarse recibe un avatar aleatorio de Rick & Morty y su puntuación inicial en 0.  

---

## 🛠 Instalación y ejecución

### Requisitos
- Python 3.10+
- MongoDB (instalado y corriendo en `localhost:27017`)
- Node.js (opcional, solo si usas Live Server u otro servidor local)

### Pasos

```bash
# 1. Clona el repositorio
git clone <URL_DEL_REPOSITORIO>
cd <CARPETA_DEL_PROYECTO>

# 2. Crea y activa el entorno virtual
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

# 3. Instala dependencias
pip install -r requirements.txt

# 4. Inicia el servidor FastAPI (con recarga automática)
uvicorn main:app --reload

# 5. Abre el frontend
#   – Puedes usar Live Server en VS Code o abrir directamente los archivos HTML
#   – Por ejemplo: abre index.html o play.html en el navegador

Endpoints principales:

Usuarios (/jugadores)

	POST /jugadores/

		Registra un jugador nuevo

		Body JSON: { "email", "username", "password" }

		Respuesta: datos del jugador (sin contraseña), con avatar aleatorio y puntuacion_total: 0

	GET /jugadores/

		Lista todos los jugadores

	GET /jugadores/{id}

		Devuelve un jugador por su ID

	GET /jugadores?username=<nombre>

		Filtra jugadores por username

	PUT /jugadores/{id}

		Actualiza campos (username, email, avatar) validando duplicados

	DELETE /jugadores/{id}

		Elimina un jugador


Autenticación (/auth)
	
	POST /auth/login

		Login real con email + password

		Body JSON: { "email", "password" }

		Respuesta: { "id", "username", "avatar" }, almacena en localStorage

Ranking (/ranking)
	GET /ranking?limit=10

	Devuelve el top N jugadores ordenados por puntuacion_total

	Cada objeto incluye posicion, username, puntuacion_total, avatar


Flujo de ejecución (resumen cronológico)

	Registro (POST /jugadores/):

		Valida que email y username sean únicos

		Hashea la contraseña con bcrypt

		Inicializa puntuacion_total = 0

		Llama a la API de Rick & Morty para asignar un avatar aleatorio

		Inserta el jugador en MongoDB y devuelve el documento (sin contraseña)

	Login (POST /auth/login):

		Busca al usuario por email

		Verifica la contraseña contra el hash

		Devuelve id, username y avatar

		Frontend guarda estos datos en localStorage

	Ranking (GET /ranking):

		Consulta MongoDB por jugadores con puntuacion_total

		Ordena de mayor a menor

		Calcula posición con enumerate

		Devuelve el top N

	Frontend:

		script.js: carga navbar y footer dinámicamente

		registro.js: maneja el formulario de registro (POST /jugadores/)

		login.js: maneja el formulario de login (POST /auth/login)

		ranking.js: pobla la tabla de ranking (GET /ranking)