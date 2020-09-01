
const express = require('express');
const router = express.Router();

// rutas
router.get('/', (req,res) =>{ // request o petición es lo que recibe el servidor y res es lo que envía o responde el servidor 
    //Renderizando una vista 
    res.render('index.ejs');
    //req es la información que el navegador me esta enviando
    //res es el objeto que yo le voy a devolver al navegador
  //  res.end('Hello World')
}) ; 

router.get('/login',(req,res) => { 
    res.render('login');
   // res.end('Aqui va el login')
}) 



//middleware 
// app.use(function(req, res, next ){
//  console.log('request url:' + req.url);
//  next();
// })

// app.use((req, res, next) =>{
//     console.log('ha pasado por esta función');
//     next();
// })

//router es un objeto que estamos exportando
module.exports = router;