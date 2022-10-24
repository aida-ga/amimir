const express = require("express"); //importar express
const app = express(); //importar el método principal de express/ tu mejor amigo
app.set('view engine','ejs'); //define el método de visualización(ejs)
app.use(express.urlencoded({extended:false})) //las peticines de formularios no se codifican, para coger datos en el server
var path = require("path") //cambia las rutas relativas por paths
app.use(express.static(path.join(__dirname,'src'))) //a la hora de buscar archivos va directamente a src
app.get("/", (req,res)=>{ //como manejar peticiones

    res.render('index') //express busca directamente en views
})
app.listen(process.env.PORT || 5000); //coge el puerto que tiene asignado el servidor externo para la app- si no coge el 5000