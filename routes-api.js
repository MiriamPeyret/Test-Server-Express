const express = require('express'); //requerimos express
const router = express.Router(); //requerimos el móduilo de express llamado router y lo asignamos a una constante llamada router

router.get('/', (req, res)=>{ //si piden la ruta inicial a esta ruta se reponde con un json
    res.json({
        miprimerApi:"works!"
    });
})

module.exports = router