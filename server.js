const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000; // Je kunt elke beschikbare poort gebruiken

// Functie om een nieuwe MySQL-verbinding te maken
function createDBConnection() {
  return mysql.createConnection({
    host: 'ID324796_s24css.db.webhosting.be',
    user: 'ID324796_s24css',
    password: 'v9Q3rQ75Wi6ikN4svT42',
    database: 'ID324796_s24css',
    connectTimeout: 20000, // Pas de waarde aan indien nodig
  });
}

// Initiële MySQL-verbinding
let db = createDBConnection();

// Verbind met MySQL
function connectToDatabase() {
  db = createDBConnection();

  db.connect((err) => {
    if (err) {
      console.error('MySQL verbindingsfout:', err);
      setTimeout(connectToDatabase, 2000); // Probeer opnieuw na 2 seconden
    } else {
      console.log('Verbonden met MySQL-database');
    }
  });

  // Behandel MySQL-verbindingsfouten
  db.on('error', (err) => {
    console.error('MySQL verbindingsfout:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      // Probeer opnieuw verbinding te maken als de verbinding is verbroken
      connectToDatabase();
    } else {
      throw err;
    }
  });
}

// Schakel CORS in
app.use(cors());

// Voorbeeld van een GET-endpoint voor de root-URL
app.get('/', (req, res) => {
  res.send('Welkom bij de root-URL!');
});

// Voorbeeld van een GET-endpoint voor /api/products
app.get('/api/products', (req, res) => {
  console.log('Verzoek ontvangen op /api/products');

  const query = 'SELECT * FROM products';

  db.query(query, (err, results) => {
    if (err) {
      console.error('MySQL-queryfout:', err);
      res.status(500).send('Interne serverfout');
    } else {
      console.log('Queryresultaten:', results);
      res.json(results);
    }
  });
});

// Endpoint for fetching newsletter data
app.get('/api/newsletter', (req, res) => {
  console.log('Verzoek ontvangen op /api/newsletter');

  const query = 'SELECT * FROM newsletter';

  db.query(query, (err, results) => {
    if (err) {
      console.error('MySQL-queryfout:', err);
      res.status(500).send('Interne serverfout');
    } else {
      console.log('Queryresultaten:', results);
      res.json(results);
    }
  });
});

// Voorbeeld van een GET-endpoint voor /api/users
app.get('/api/users', (req, res) => {
  console.log('Verzoek ontvangen op /api/users');

  const query = 'SELECT * FROM users';

  db.query(query, (err, results) => {
    if (err) {
      console.error('MySQL-queryfout:', err);
      res.status(500).send('Interne serverfout');
    } else {
      console.log('Queryresultaten:', results);
      res.json(results);
    }
  });
});

// Voorbeeld van een GET-endpoint voor /api/genders
app.get('/api/genders', (req, res) => {
  console.log('Verzoek ontvangen op /api/genders');

  const query = 'SELECT * FROM genders';

  db.query(query, (err, results) => {
    if (err) {
      console.error('MySQL-queryfout:', err);
      res.status(500).send('Interne serverfout');
    } else {
      console.log('Queryresultaten:', results);
      res.json(results);
    }
  });
});

// Start de server
app.listen(port, () => {
  console.log(`Server draait op poort ${port}`);
  connectToDatabase(); // Maak verbinding met MySQL wanneer de server start
});
