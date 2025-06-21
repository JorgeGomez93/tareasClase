# Composicion secuencial

# Ejercicio 1
nombre = input("Por favor ingrese su nombre: ")
print(f"¡Hola, {nombre}! Encantado de conocerte.")

# Ejercicio 2
lado_A = float(input("Por favor ingrese la longitud del lado A del rectangulo: "))
lado_B = float(input("Por favor ingrese la longitud del lado B del rectangulo: "))
area = lado_A * lado_B
print(f"el area del rectangulo es: {area}")

# Ejercicio 3
horas = float(input("Ingrese la cantidad de horas a convertir en minutos: "))
minutos = horas * 60
print(f"{horas} horas son: {minutos} minutos")

#  Composición Condicional

# Ejercicio 1
numEntero = int(input("Por favor ingrese un numero entero: "))
if numEntero % 2 != 0:
    print(f"el numero {numEntero} es Impar")
else:
    print(f"el numero {numEntero} es Par")

# Ejercicio 2
numUno = float(input("Por favor ingrese el primer número: "))
numDos = float(input("Por favor ingrese el segundo número: "))
if numUno == numDos:
    print(f"los numeros {numUno} y {numDos} son iguales")
elif numUno > numDos:
    print(f"el numero {numUno} es mayor que {numDos}")
else:
    print(f"el numero {numDos} es mayor que {numUno}")

# Ejercicio 3
password = "python123"
passwordUser = input("Por favor ingrese la contraseña: ")
if passwordUser == password:
    print(f"Acceso concedido")
else:
    print(f"Acceso denegado")

# Ejercicio 4
lado_A = float(input("Por favor ingrese la longitud del lado A del triangulo: "))
lado_B = float(input("Por favor ingrese la longitud del lado B del triangulo: "))
lado_C = float(input("Por favor ingrese la longitud del lado C del triangulo: "))

if lado_A == lado_B and lado_B == lado_C:
    print("el triangulo es equilátero")
elif lado_A == lado_B or lado_A == lado_C or lado_B == lado_C:
    print("el triangulo es isóceles")
else:
    print("el triangulo es escaleno")

# Composición Iterativa
# Ejercicio 1

for i in range(5):
    print(i + 1)

# Ejercicio 2
cont = 10
while cont != 0:
    print(cont)
    cont -= 1

# Ejercicio 3
suma = 0
numEntero = int(input("Por favor ingrese un numero entero positivo: "))

if numEntero < 0:
    print("inserta un número válido")
else:
    for i in range(numEntero):
        suma += i + 1
    print(f"la suma es: {suma}")

# Ejercicio 4
mensaje = input("Por favor ingrese un mensaje: ")
repetir = int(input("Por favor ingrese un numero de veces a repetir el mensaje: "))

for i in range(repetir):
    print(mensaje)

# Ejercicio 5
import random

numUSuario = 0
numAleatorio = random.randint(1, 10)
print(numAleatorio)


while numUSuario != numAleatorio:
    numUSuario = int(input("Adivina el número oculto: "))
    if numUSuario > numAleatorio:
        print("tu número es mayor al oculto")
    elif numUSuario < numAleatorio:
        print("tu número es menor al oculto")
    else:
        print("FELICIDADES lo has consegido")

# Composición Modular (Funciones)


# Ejercicio 1
def saludar(nombre):
    print(f"¡Hola, {nombre}! Bienvenido")


saludar("jorge")


# Ejercicio 2
def sumar(num1, num2):
    return num1 + num2


print(f"{sumar(5,6)}")


# Ejercicio 3
def imprimir_n_veces(mensaje, veces):
    for i in range(veces):
        print(mensaje)


imprimir_n_veces("¡Hola Jorge!", 5)


# Ejercicio 4
def es_mayor_de_edad(edad):
    return edad >= 18


edad = int(input("Introduzca la edad: "))
if es_mayor_de_edad(edad):
    print("Es mayor de edad")
else:
    print("Es menor de edad")

# Ejercicio Integrador (Pequeño Proyecto)
def calcular_promedio(lista_notas):
    promedio = 0
    for i in range(len(lista_notas)):
        promedio += lista_notas[i]
    promedio /= len(lista_notas)

    return promedio


def obtener_calificacion_texto(promedio):
    if promedio >= 5:
        return "Aprobado"
    else:
        return "Suspendido"


numMaterias = int(input("Inserte el número de materias: "))
lista_notas = []


for i in range(numMaterias):
    nota = float(input(f"ingrese la nota de la materia {i+1}: "))
    lista_notas.append(nota)

print(
    f"promedio: {calcular_promedio(lista_notas)} {obtener_calificacion_texto(calcular_promedio(lista_notas))}"
)
