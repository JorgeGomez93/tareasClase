import random

aleatorio = random.randint(1, 100)

print(aleatorio)

while True:
    numUSer = int(input("Inserta el numero a adivinar: "))
    if numUSer == aleatorio:
        print("Felicidades has adivinado el numero")
        break
    else:
        print("Intenta de nuevo")