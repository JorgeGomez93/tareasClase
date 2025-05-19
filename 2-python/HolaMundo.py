import math

"""a = int(input("Inserta el primer número: "))
 b = int(input("Inserta el segundo número: "))
 c = int(input("Inserta el tercer número: "))

 r = int(((c+5)*((b**2)-(3*a*c))*(a**2))/(4*a))
 print(f"el resultado es: {r}")"""

a = int(input("Inserta el primer número a: "))
b = int(input("Inserta el segundo número b: "))

c = a
a = b
b = c

print(f"el valor de a intercambiado es: {a}")
print(f"el valor de b intercambiado es: {b}")

"""
area=pi*r2
longitud=2*pi*r"""

radio = float(input("inserte el radio: "))

area = (math.pi)*(radio**2)
longitud = 2*math.pi*radio

print(f"El area del circulo es: {area}")
print(f"La longitud del circulo es: {longitud}")
