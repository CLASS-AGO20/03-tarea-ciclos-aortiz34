export default class App {

    sumatoriaSerieUno(numero) {
        let suma = 0;
        for (let i  = 1; i <= numero; i ++) {
            suma += 1 / i;
        }
        return suma;
      }



}
let app = new App();

console.log(app.sumatoriaSerieUno(6));
console.log(app.sumatoriaSerieUno(8));
