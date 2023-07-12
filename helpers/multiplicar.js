const fs = require('fs');
const crearArchivo = async(base=3, listar = false, hasta) => {


    
    try {
        let salida='';

        for(let i=1; i<=hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
        }
        if(listar){
            console.log('=====================');
            console.log('   Tabla del:', base);
            console.log('=====================');

            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla_${base}.txt`, salida, (err)=> {
            if(err) throw err;
            console.log(`tabla del ${base}.txt creada`);
        })
        return`Tabla-${base}.txt`
    } catch (err) {
        throw(err);
    }
}
module.exports={
    crearArchivo
}