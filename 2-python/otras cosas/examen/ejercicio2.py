# Ejercicio 2: Composición Condicional (20 puntos)

nota = float(input("Introduce la calificación (0-100): "))



if nota >= 0 and nota < 50:
    print(f"Tu calificación es: Suspenso")
elif nota >= 50 and nota < 70:
    print(f"Tu calificación es: Aprobado")
elif nota >= 70 and nota < 90:
    print(f"Tu calificación es: Notable")
elif nota >= 90 and nota <= 100:
    print(f"Tu calificación es: Sobresaliente")
else:
    print(f"Error: La calificación debe estar entre 0 y 100.")
