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



}
let app = new App();

console.log(app.sumatoriaSerieUno(6));
console.log(app.sumatoriaSerieUno(8));

console.log(app.sumatoriaSerieDos(6));
console.log(app.sumatoriaSerieDos(1));
