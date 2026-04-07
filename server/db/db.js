const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Shreyash@09',
    database: 'vitto_data'
})

module.exports = pool