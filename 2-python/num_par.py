num1 = int(input("Inserte el primer número: "))
num2 = int(input("Inserte el segundo número: "))

def num_par(num):
    if num % 2 == 0:
        return True
    else:
        return False


if num_par(num1) and num_par(num2):
    print(f"Número {num1} y {num2} son pares")
elif num_par(num1) and not num_par(num2):
    print(f"Número {num1} es par")
elif num_par(num2) and not num_par(num1):
    print(f"Número {num2} es par")
else:
    print(f"Número {num1} y {num2} son impares")
