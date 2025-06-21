# Ejercicio 3: Composición Iterava (20 puntos)

num = int(input("Introduce un número entero posivo: "))

if num <= 0:
    print(f"Error: Inserta un número entero positivo.")
else:
    for i in range(10):
        print(f"{num} x {i+1} = {num*(i+1)}")
