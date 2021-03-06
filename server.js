const db = require('./db/connection');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');


const PORT = process.env.PORT || 3001;
const app = express();


// express middleware
app.use(express.urlencoded({ extend: false }));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);


//default response for any other request (Not Found).  must be last route.  will override others if on top
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});