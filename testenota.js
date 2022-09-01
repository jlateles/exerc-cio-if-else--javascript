/*
imprimir:
'Excelente' se a pontuação for superior a 80
'Muito bom' se a pontuação estiver na faixa de 60 até 80 (60 e 80 incluídos)
'Não desista' se a pontuação for abaixo de 60
*/

let nota = '80'

if(nota > 80){
  console.log('Excelente')
} else if (nota >= 60 && nota <= 80){
  console.log('Muito bom')
} else {
  console.log('Não desista')
}