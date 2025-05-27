price_initial= float(input("inserta el el precio de la compra sin iva: "))
percent_of_discount = float(input("inserte el porcentaje de descuento: "))
final_price = -price_initial*(percent_of_discount/100) + price_initial
print(f"El precio final de la compra es: {final_price}")