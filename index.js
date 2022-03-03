const cantPalabras = (palabras)=>{
    return palabras.length
}


function showPalabras(texto,time=1000,cb){
    const separarPalabras = texto.split(' ');
    let count = 0;
    return new Promise((resolve)=>{
        const intervalo = setInterval(()=>{
            if(count>=separarPalabras.length){
                clearInterval(intervalo)
                resolve(cb(separarPalabras))
            }else{
                console.log(`${separarPalabras[count]}`);
                count++;
            }
        },time);
    });
}


const ejecutar = async()=>{
    let contador = 0
    let a = await showPalabras("buenos dias me da 1 pan",4000,cantPalabras)
    contador = contador +a;
    let b = await showPalabras("harder better faster stronger",2000,cantPalabras)
    contador = contador +b;
    let c = await showPalabras("take no prisioners",3000,cantPalabras)
    contador = contador +c;
    console.log(`Proceso terminado ${contador}`)
}

ejecutar()