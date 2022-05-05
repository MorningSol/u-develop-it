const mysql = require('mysql2');

const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extend: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MySQL password
        password: 'Lupin613!618',
        database: 'election'
    },
    console.log('Connected to the election database.')
);






db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});


//default response for any other request (Not Found).  must be last route.  will override others if on top
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});