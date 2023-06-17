Algoritmo tienda_cafe
	Escribir 'Cuantos cafes quieres?'
	Leer cantidad
	precio <- 25
	subTotal <- 0
	total <- 0
	Si cantidad>=5 Y cantidad<=10 Entonces
		subTotal <- cantidad*precio
		total <- subTotal-(subTotal*0.20)
		Escribir 'Descuento del 20%, su total a pagar es $', total
	SiNo
		Si cantidad>10 Y cantidad<=20 Entonces
			subTotal <- cantidad*precio
			total <- subTotal-(subTotal*0.40)
			Escribir 'Descuento del 40%, su total a pagar es $', total
		SiNo
			Si cantidad>20 Entonces
				subTotal <- cantidad*precio
				total <- subTotal-(subTotal*0.50)
				Escribir 'Descuento del 50%, su total a pagar es $', total
			SiNo
				total <- cantidad*precio
				Escribir 'Tu total a pagar es $', total, ' no aplica descuento'
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
