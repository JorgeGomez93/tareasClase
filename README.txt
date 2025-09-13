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