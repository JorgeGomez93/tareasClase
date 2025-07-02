numAsteriscos = int(input("Inserta el tamaño del triangulo: "))
opuesto = numAsteriscos

for i in range(1, numAsteriscos + 1):
    espacios = " " * (opuesto - 1)
    asteriscos = "*" * (2 * i - 1)
    print(espacios + asteriscos)
    opuesto -= 1
