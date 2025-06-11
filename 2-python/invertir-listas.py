lista = []
opc = 0

while True:

    opc = int(input('1. agregar elemento a la lista\n'
          '2. salir\n'))
    if opc == 1:
        elemento = input("ingresa un elemento: ")
        lista.append(elemento)
    if opc == 2:
        break

lista.reverse()

print(lista)
