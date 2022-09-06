import math

# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def greaterNumber(numA, numB):
    if numA > numB or numA == numB:
        return numA
    else:
        return numB


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def listAverage(list):
    sum = 0
    for number in list:
        sum += number
    return sum / len(list)


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
def squareGenerator(num):
    lines = 0

    while lines != num:
        print(num * "*")
        lines += 1


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".
def biggerWordInArray(list):
    biggerWord = ""

    for word in list:
        if len(word) > len(biggerWord):
            biggerWord = word

    return biggerWord


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).
def paintTin(squares):
    liters = squares / 3
    tins = math.ceil(liters / 18)
    return (tins, tins * 80)


# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.
def triangleCheck(sideA, sideB, sideC):
    if sideA + sideB < sideC:
        return "It's not a triangle."
    elif sideA == sideB and sideB == sideC:
        return "Equilateral Triangle."
    elif sideA == sideB or sideB == sideC or sideC == sideA:
        return "Isosceles Triangle."
    else:
        return "Scalene Triangle."
