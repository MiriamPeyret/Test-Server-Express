const express = require('express');
const morgan = require('morgan') //Morgan es un registrador en cualquier solicitud que se realice genera registros automaticamente 
const app = express();

//requiriendo rutas
const routes = require('./routes');
const routesApi = require('./routes-api')  //aqui se requiere y se crea la instancia


//settings
app.set('AppName','Mi primer server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')



//middleware información que reciben del navegador
// middleware es una función que se puede ejecutar antes o después del manejo de una ruta, la cual tiene acceso al objeto Request, Response y la función next().
// son utilizadas para verificar niveles de acceso antes de entrar en una ruta, manejo de errores, validación de datos, etc.
//middleware morgan
app.use(morgan('combined'));//muestra dia, hora metodo de la petición etc, mucho más detalle

//rutas 
 //requerir las rutas que estan en el directorio ./ routes() require('./routes');) --> se realiza por un middleware
app.use(routes); //esta es mi ruta inicial la primera que se responde
app.use('/api',routesApi); // primero se accede a /api y despues a las rutas

//si no se encuentra la ruta anterior entonces se manda el siguiente mensaje 
app.get('*', (re,res) =>{
    res.end('Archivo no encontrado')
})

app.listen(3000, ()=>{ // se realiza un callback cuando el servidor levanta en el puerto 3000 luego vamos a ejecutar una función
    console.log('servidor funcionando')
    console.log('Nombre de la app:' , app.get('AppName'));
    


});