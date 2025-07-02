print("Lista de precios:")
print("   -Niños menores de 2 años viajan gratis")
print("   -Niños entre 3 y 12 años pagan tarifa de niño")
print("   -El resto paga tarifas de adultos, mayores de 12 años")

ban = True

while ban:
    edad = int(input("Introduzca la edad del pasajero: "))

    if 0 <= edad <= 2:
        print("El niño viaja gratis")
    elif 3 <= edad <= 12:
        print("El niño paga tarifa de niño")
    elif edad >12:
        print("el pasajero paga tarifa de adulto")
    else:
        print("por favor introduzca una edad valida")

    opc = input("¿Desea comprar otro pasaje? (y/n)")
    if opc == "y":
        continue
    else:
        ban = False
print("Gracias por Preferirnos, Feliz Viaje")
