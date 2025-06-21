# Ejercicio 4: Programa Complejo (40 puntos)

# Función que gestiona el proceso de cobro
def cobrar(producto, precio):
    dinero = 0 # Acumulador del dinero insertado
    valor = 0 # Variable para almacenar el valor insertado por el usuario

     # Bucle para asegurarse que el usuario introduce una cantidad válida inicialmente (> 0 €)
    while float(valor)<=0:
        print(f"Ha seleccionado {producto} ({precio}€)")
        valor = input(
            f"Por favor, inserte dinero.\n Cantidad actual: 0.00€ \nIntroduzca moneda (0.50, 1.00, 2.00) o salir: "
        )
        if float(valor) <= 0:
            print("Error: introduzca valores mayores a cero")

    # Verifica si el usuario decide salir
    if valor == "salir":
        print("usuario a decidido salir")
    else:
        # Bucle para continuar insertando dinero hasta alcanzar el precio
        while valor != "salir":
            dinero += float(valor)
            print(f"Ha seleccionado {producto} ({precio}€)")
            print(f"cantidad actual: {dinero}€")

            # Si no ha llegado al precio, pide más dinero
            if dinero < precio:
                valor = input(f"Introduzca moneda (0.50, 1.00, 2.00) o salir: ")
            else:
                break # Sale si se alcanza el precio suficiente

        # Verifica si el usuario sale durante el segundo bucle    
        if valor == "salir":
            print("usuario a decidido salir")
        else:
            # Compra exitosa: entrega producto y muestra cambio
            print(
                f"¡Compra exitosa! Aquí tiene su {producto}. Su cambio es: {dinero-precio}€"
            )

opc = 0 # Variable que controla la opción del menú principal

# Bucle principal del programa
while opc != 4:
    # Muestra el menú de productos
    print(
        "--- MÁQUINA EXPENDEDORA ---\n"
        "   1. Agua (1.00€)\n"
        "   2. Refresco (1.50€)\n"
        "   3. Zumo (2.00€)\n"
        "   4. Salir"
    )

    # Solicita opción al usuario
    opc = int(input("Seleccione un producto (1-4): "))

    # Usa match-case para determinar qué producto fue elegido
    match opc:
        case 1:
            cobrar("agua", 1)
        case 2:
            cobrar("refresco", 1.5)

        case 3:
            cobrar("Zumo", 2)
        case 4:
            print("Gracias por usar nuestra Maquina Expendedora")
        case _:
            print("Por favor seleccione una opcion válida")
