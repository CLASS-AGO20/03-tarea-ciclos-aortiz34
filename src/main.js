export default class App {

    sumatoriaSerieUno(numero) {
        let suma = 0;
        for (let i  = 1; i <= numero; i ++) {
            suma += 1 / i;
        }
        return suma;
      }

      sumatoriaSerieDos(numero){
          let suma = 0;
          let i = 1;
          while (i <= numero) {
              if (i % 2 !== 0 && i !== 1){
                  suma -= (1 / i);
              }else {
                  suma += (1 / i);
              }
              i += 1;
          }
          return suma;
      }

      esPrimo(numero){
          let i = 1;
          let suma = 0;
          do {
              if (numero % i === 0){
                suma += 1;
              }
              i++;
          } while (i <= numero);
          if (suma === 2){
            return true;
        }else{
            return false;
        }
      }

      obtenerMultiplos(inicio, fin){
          let resultado = ``;
          let i = inicio;
          do {
              if (i % 3 === 0){
                  resultado += `${i}`;
              }
              i += 1;
          } while (i <= fin);
          return resultado;
      }

      obtenerImpares(numero1, numero2){
          let resultado = ``;
          let q = 0;
          let i;
          if (numero1 > numero2){
            q = numero1;
            numero1 = numero2;
            numero2 = q;
          }
          i = numero2;
          for (i; i >= numero1 ; i--) {
            if (i % 2 !== 0){
                if (resultado == ``){
                    resultado += `${i}`;
                }else{
                    resultado += `,${i}`;
                }
            }
          }
          return resultado;
      }

}
let app = new App();

console.log(app.sumatoriaSerieUno(6));
console.log(app.sumatoriaSerieUno(8));

console.log(app.sumatoriaSerieDos(6));
console.log(app.sumatoriaSerieDos(1));

console.log(app.esPrimo(5));
console.log(app.esPrimo(7));
console.log(app.esPrimo(9));

console.log(app.obtenerMultiplos(10,25));

console.log(app.obtenerImpares(5,10));

