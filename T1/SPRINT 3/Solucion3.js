const individuo1 = 10;
const individuo2 = "10";
const individuo3 = 5;

let igualda = (individuo1 == individuo2);
let igualdadEstricta = (individuo1 === individuo2);
let desigualdad = (individuo1 != individuo3);
let desigualdadEsticta = (individuo1 !== individuo2);
let menorQue = (individuo1 < individuo3);
let menorIgual =(individuo1 <= individuo2);
let mayorQue = (individuo1 > individuo3);
let mayorIgual = (individuo1 >= individuo3);
let and = (individuo1 == individuo2 && individuo1 != individuo3)
let or = (individuo1 == individuo2 || individuo1 <= individuo3)
let negacion = (!(individuo1 > individuo3))


console.log(`Igualdad: ${individuo1} = ${individuo2} = ${igualda}\n
Igualdad estricta: ${individuo1} = ${individuo2} = ${igualdadEstricta} (en este caso no existe igualdad ya que esta igualdad es mas exacta y en el primero es una variable tipo number y la otra es tipo string)\n
Desigualdad: ${individuo1} != ${individuo3} = ${desigualdad}\n
Desigualdad Estricta: ${individuo1} !== ${individuo2} = ${desigualdadEsticta}\n
Menor que: ${individuo1} < ${individuo3} = ${menorQue}\n
Menor que o igual: ${individuo1} <= ${individuo2} = ${menorIgual}\n
Mayor que: ${individuo1} > ${individuo3}  = ${mayorQue}\n
Mayor que o igual: ${individuo1} >= ${individuo3} = ${mayorIgual}\n
AND : ${individuo1} = ${individuo2} y ${individuo1} != ${individuo3} = ${and} (ambos casos deben ser true para que el resultado sea true)\n
OR: ${individuo1} = ${individuo2} o ${individuo1} menor que ${individuo3} = ${or} (con que uno sea true el resultado ya será true)\n
negacion: !(${individuo1} > ${individuo3}) = ${negacion} (Esto te hara que el resultado final será el contrario de la comparación que se de despues del '!')`);

let resultadoDiv = document.getElementById('resultado3');

resultadoDiv.innerHTML = `Igualdad: ${individuo1} = ${individuo2} = ${igualda}<br>
Igualdad estricta: ${individuo1} = ${individuo2} = ${igualdadEstricta} (en este caso no existe igualdad ya que esta igualdad es mas exacta y en el primero es una variable tipo number y la otra es tipo string) <br>
Desigualdad: ${individuo1} != ${individuo3} = ${desigualdad}<br>
Desigualdad Estricta: ${individuo1} !== ${individuo2} = ${desigualdadEsticta}<br>
Menor que: ${individuo1} < ${individuo3} = ${menorQue}<br>
Menor que o igual: ${individuo1} <= ${individuo2} = ${menorIgual}<br>
Mayor que: ${individuo1} > ${individuo3}  = ${mayorQue}<br>
Mayor que o igual: ${individuo1} >= ${individuo3} = ${mayorIgual}<br>
AND : ${individuo1} = ${individuo2} y ${individuo1} != ${individuo3} = ${and} (ambos casos deben ser true para que el resultado sea true)<br>
OR: ${individuo1} = ${individuo2} o ${individuo1} menor que ${individuo3} = ${or} (con que uno sea true el resultado ya será true)<br>
negacion: !(${individuo1} > ${individuo3}) = ${negacion} (Esto te hara que el resultado final será el contrario de la comparación que se de despues del '!')`;
