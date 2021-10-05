const fs = require('fs');


const crearArchivo = (base = 5, listar, hasta) => {

  
    return new Promise(( resolve, reject) => {

        try {
            console.log("========================");
            console.log('     Tabla del: ',base);
            console.log("========================");
        
            let salida = '';
    
            for (let i=1; i<=hasta; i++){
                salida += `${base} x ${i} = ${base*i}\n`;
            }
            
            if (listar) console.log(salida);
    
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
            resolve(`tabla-${base}.txt`);
        } catch (error) {
            throw error;
        }
       
    });
   

  
}

module.exports = {
    crearArchivo
}