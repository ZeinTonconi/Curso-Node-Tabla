const fs = require('fs');
const colors=require('colors');
/*const crearArchivo = (base) =>{
    console.log('=================');
    console.log('  La Tabla del ',base);
    console.log('=================');
    let salida = "";
    for(let i=1;i<=10;i++){
        salida+=(`${base} x ${i} = ${base*i}\n`);
    }
    const promi=new Promise((resolve,reject)=>{
        fs.writeFile(`tabla-${base}.txt`, salida,(err)=>{
            if(err) reject(err);
            else resolve(`tabla-${base}.txt creado`);
        });
    })
    return promi;
}*/

const crearArchivo = async (base, height,l) =>{
    try{    
        let salida="", consola = "";

        for(let i=1;i<=height;i++){
            consola+=(`${base} ${colors.red("x")} ${i} ${colors.red('=')} ${base*i}\n`);
            salida+=(`${base} x ${i} = ${base*i}\n`);
        }
        if(l){
            console.log('================='.rainbow);
            console.log('  La Tabla del '.cyan,colors.magenta(base));
            console.log('================='.rainbow);
            console.log(consola);
        } 
        fs.writeFileSync(`./Output/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;   
    } catch(err){
        throw err;
    }
}
module.exports= {
    crearArchivo
};