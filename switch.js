let numerito=2 // Declaración de la variable numerito y asignación del valor 2


switch(numerito){
    case 1:
        console.log("uno");// Si numerito es igual a 1, se imprime "uno", pero no hay "break", por lo que continúa ejecutando los siguientes casos.
    case 2:
        console.log("dos");
    case 3:
        console.log("tres");
    default:
        console.log("Nada");// Este bloque se ejecuta en cualquier caso, ya que no hay "break" en los casos anteriores.

}
