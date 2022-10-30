function wakeMe() {
    var ciclos = [];
    var stringHora = document.getElementById("inputHora").value;
    var inputHora = stringHora.split(':');
    var horaCompleta = new Date();


    horaCompleta.setHours(Number(inputHora[0]));
    horaCompleta.setMinutes(Number(inputHora[1]));

    for (i = 0; i < 6; i++) {
        if (i == 0) {
            //revisar ciclos de sueño y horas de inicio
            horaCompleta.setHours(horaCompleta.getHours() - 4);
            horaCompleta.setMinutes(horaCompleta.getMinutes() - 15);
        } else {
            horaCompleta.setHours(horaCompleta.getHours() - 1);
            horaCompleta.setMinutes(horaCompleta.getMinutes() - 45);
        }
        ciclos.push(`${horaCompleta.getHours().toString().padStart(2, '0')}:${horaCompleta.getMinutes().toString().padStart(2, '0')}`);


    }
    printResults(ciclos);

}

/** 
 * 
 * @param {string[]} ciclos 
 */

function printResults(ciclos) {
    $("#results").remove();
    $("#main").after(`<div class="container center" id="results"><table>
 <tr><td colspan="2">${ciclos[3]}</td><td colspan="2">${ciclos[2]}</td></tr>
 <tr><td>${ciclos[0]}</td>
 <td>${ciclos[1]}</td>
 <td>${ciclos[4]}</td>
 <td>${ciclos[5]}</td></tr>
 </table></div>`)


}
function sleepNow() {

    var ciclos = [];
    var horaActual = new Date();
    var time = horaActual.getHours() + ":" + horaActual.getMinutes();
    for (i = 0; i < 6; i++) {
        if (i == 0) {
            horaActual.setHours(horaActual.getHours() + 4);
            horaActual.setMinutes(horaActual.getMinutes() + 45);

        } else {
            horaActual.setHours(horaActual.getHours() + 1);
            horaActual.setMinutes(horaActual.getMinutes() + 45);
        }
        ciclos.push(`${horaActual.getHours().toString().padStart(2, '0')}:${horaActual.getMinutes().toString().padStart(2, '0')}`);
    }
    printResults(ciclos);



}