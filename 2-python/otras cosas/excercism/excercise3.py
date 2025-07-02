def exchange_money(budget, exchange_rate):
    return budget / exchange_rate


# print(exchange_money(127.5, 1.2))


def get_change(budget, exchanging_value):
    return budget - exchanging_value


# print(get_change(127.5, 120))


def get_value_of_bills(denomination, number_of_bills):

    return int(denomination * number_of_bills)


# print(get_value_of_bills(7.5, 3))


def get_number_of_bills(amount, denomination):
    return int(amount // denomination)


# print(get_number_of_bills(127.5, 5))


def get_leftover_of_bills(amount, denomination):
    total = amount%denomination
    return total

# print(get_leftover_of_bills(127.5, 20))

def exchangeable_value(budget, exchange_rate, spread, denomination):
    spread_float = exchange_rate*(spread/100)
    # print(f" el spread en flotante es: {spread_float}")
    total = round((spread_float + exchange_rate),2)
    # print(f" la tasa de cambio real seria: {exchange_rate} + {spread_float} = {total}")
    exchanged = round(exchange_money(budget, total),2)
    # print(exchanged)

    return (get_number_of_bills(exchanged,denomination)*denomination)

# print(exchangeable_value(127.25, 1.20, 10, 20))
# print(exchangeable_value(127.25, 1.20, 10, 5))
#buget = monto a cambiar
#exchange_rate = tasa de cambio
#spread = comisión de la cabina
#denomination = valor de un solo billete
#return: int - valor máximo que puedes obtener.