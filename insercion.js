console.log("[5, 3, 8, 4, 10, 15, 20, 7, 99, 100]");
const meterarreglado = arr => {
    const l = arr.length;
    let j, temporal;
    
    for (let i = 1; i < l; i++) {
        j = i;
        temporal = arr[i];
        while (j > 0 && arr[j - 1] > temporal) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temporal;
        console.log(`Pasada ${i}`);
        console.log(`${arr}`);
    }
    return arr;
}

const arr = [5, 3, 8, 4, 10, 15, 20, 7, 99, 100];

function mostrarResultado() {
    const resultado = meterarreglado(arr);
    document.getElementById("resultado").textContent = `Resultado final: ${resultado}`;
}
