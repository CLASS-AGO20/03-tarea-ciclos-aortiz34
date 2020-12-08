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
          let resultado;
          do {
              if (numero % 2 !== 0 && numero % 3 !== 0){
                resultado = true;
              }else{
                resultado = false;
              }
              break;
          } while (numero % 1 === 0 && numero % numero === 0);
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