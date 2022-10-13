const mysql = require('mysql')

const conection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'root',
    database: 'watersoft',
    port:'3306'
})

conection.connect(function(error){
    if(error){
        console.log(error)
        return error;
    }
    console.log('Conexión');
});

conection.end();