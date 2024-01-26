const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000; // Je kunt elke beschikbare poort gebruiken

// Functie om een nieuwe MySQL-verbinding te maken
function createDBConnection() {
  return mysql.createConnection({
    host: "ID324796_s24css.db.webhosting.be",
    user: "ID324796_s24css",
    password: "v9Q3rQ75Wi6ikN4svT42",
    database: "ID324796_s24css",
    connectTimeout: 20000, // Pas de waarde aan indien nodig
  });
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Initiële MySQL-verbinding
let db = createDBConnection();

// Verbind met MySQL
function connectToDatabase() {
  db = createDBConnection();

  db.connect((err) => {
    if (err) {
      console.error("MySQL verbindingsfout:", err);
      setTimeout(connectToDatabase, 2000); // Probeer opnieuw na 2 seconden
    } else {
      console.log("Verbonden met MySQL-database");
    }
  });

  // Behandel MySQL-verbindingsfouten
  db.on("error", (err) => {
    console.error("MySQL verbindingsfout:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
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
app.get("/", (req, res) => {
  res.send("Welkom bij de root-URL!");
});

// Voorbeeld van een GET-endpoint voor /api/products
app.get("/api/products", (req, res) => {
  console.log("Verzoek ontvangen op /api/products");

  const query = "SELECT * FROM products";

  db.query(query, (err, results) => {
    if (err) {
      console.error("MySQL-queryfout:", err);
      res.status(500).send("Interne serverfout");
    } else {
      console.log("Queryresultaten:", results);
      res.json(results);
    }
  });
});

// Endpoint for fetching newsletter data
app.get("/api/newsletter", (req, res) => {
  console.log("Verzoek ontvangen op /api/newsletter");

  const query = "SELECT * FROM newsletter";

  db.query(query, (err, results) => {
    if (err) {
      console.error("MySQL-queryfout:", err);
      res.status(500).send("Interne serverfout");
    } else {
      console.log("Queryresultaten:", results);
      res.json(results);
    }
  });
});

// GET-endpoint voor /api/users
app.get("/api/users", (req, res) => {
  console.log("Verzoek ontvangen op /api/users");

  const query = "SELECT * FROM users";

  db.query(query, (err, results) => {
    if (err) {
      console.error("MySQL-queryfout:", err);
      res.status(500).send("Interne serverfout");
    } else {
      console.log("Queryresultaten:", results);
      res.json(results);
    }
  });
});

// GET-endpoint voor /api/users
app.get("/api/users/account", (req, res) => {
  console.log("Verzoek ontvangen op /api/users/account");

  const query = "SELECT * FROM userAccount";

  db.query(query, (err, results) => {
    if (err) {
      console.error("MySQL-queryfout:", err);
      res.status(500).send("Interne serverfout");
    } else {
      console.log("Queryresultaten:", results);
      res.json(results);
    }
  });
});

// GET-endpoint voor /api/products
app.get("/api/products", (req, res) => {
  console.log("Verzoek ontvangen op /api/products");

  const query = 'SELECT * FROM products WHERE gender = "Heren";';

  db.query(query, (err, results) => {
    if (err) {
      console.error("MySQL-queryfout:", err);
      res.status(500).send("Interne serverfout");
    } else {
      console.log("Queryresultaten:", results);
      res.json(results);
    }
  });
});

// GET-endpoint voor /api/products Heren
app.get("/api/productsh", (req, res) => {
  console.log("Verzoek ontvangen op /api/products");

  const query = 'SELECT * FROM products WHERE gender IN ("Heren", "Unisex");';

  db.query(query, (err, results) => {
    if (err) {
      console.error("MySQL-queryfout:", err);
      res.status(500).send("Interne serverfout");
    } else {
      console.log("Queryresultaten:", results);
      res.json(results);
    }
  });
});

// GET-endpoint voor /api/products Kids
app.get("/api/productsk", (req, res) => {
  console.log("Verzoek ontvangen op /api/products");

  const query = 'SELECT * FROM products WHERE gender IN ("Kids-B", "Kids-G");';

  db.query(query, (err, results) => {
    if (err) {
      console.error("MySQL-queryfout:", err);
      res.status(500).send("Interne serverfout");
    } else {
      console.log("Queryresultaten:", results);
      res.json(results);
    }
  });
});

// GET-endpoint voor /api/products Dames
app.get("/api/productsd", (req, res) => {
  console.log("Verzoek ontvangen op /api/products");

  const query = 'SELECT * FROM products WHERE gender IN ("Dames", "Unisex");';

  db.query(query, (err, results) => {
    if (err) {
      console.error("MySQL-queryfout:", err);
      res.status(500).send("Interne serverfout");
    } else {
      console.log("Queryresultaten:", results);
      res.json(results);
    }
  });
});

// POST-endpoint voor /api/users register
app.post("/api/usersregister", (req, res) => {
  console.log("Verzoek ontvangen op /api/usersregister");

  const userData = req.body;

  const query = "INSERT INTO users SET ?";

  db.query(query, userData, (err, results) => {
    if (err) {
      console.error("MySQL-queryfout:", err);
      res.status(500).send("Interne serverfout");
    } else {
      console.log("Gebruiker succesvol toegevoegd:", results);
      res.json({
        message: "Gebruiker succesvol toegevoegd",
        userId: results.insertId,
      });
    }
  });
});

// POST-endpoint voor /api/products (add product)
app.post("/api/products", (req, res) => {
  console.log("Verzoek ontvangen op /api/products (POST)");

  const productData = req.body;

  const query =
    "INSERT INTO products (name, description, price, image, gender, stock, category_id, weight, brand, Soort) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    query,
    [
      productData.name,
      productData.description,
      productData.price,
      productData.image,
      productData.gender,
      productData.stock,
      productData.category_id,
      productData.weight,
      productData.brand,
      productData.Soort,
    ],
    (err, results) => {
      if (err) {
        console.error("MySQL-queryfout:", err);
        res.status(500).send("Interne serverfout");
      } else {
        console.log("Product succesvol toegevoegd:", results);
        res.json({
          message: "Product succesvol toegevoegd",
          productId: results.insertId,
        });
      }
    }
  );
});

app.post("/api/users", (req, res) => {
  console.log("Verzoek ontvangen op /api/users (POST)");

  const userData = req.body;

  const query =
    "INSERT INTO users (first_name, last_name, birthday, streetname, houseNumber, postalcode, city, country, email, phone, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    query,
    [
      userData.first_name,
      userData.last_name,
      userData.birthday,
      userData.streetname,
      userData.houseNumber,
      userData.postalcode,
      userData.city,
      userData.country,
      userData.email,
      userData.phone,
      userData.username,
      userData.password,
    ],
    (err, results) => {
      if (err) {
        console.error("MySQL-queryfout:", err);
        res.status(500).send("Interne serverfout");
      } else {
        console.log("Product succesvol toegevoegd:", results);
        res.json({
          message: "Product succesvol toegevoegd",
          productId: results.insertId,
        });
      }
    }
  );
});

app.get("/api/userAccounts", (req, res) => {
  console.log("Verzoek ontvangen op /api/users");

  const query = "SELECT * FROM userAccounts"; 

  db.query(query, (err, results) => {
    if (err) {
      console.error("MySQL-queryfout:", err);
      res.status(500).send("Interne serverfout");
    } else {
      console.log("Queryresultaten:", results);
      res.json(results);
    }

  });
  });

// Start de server
app.listen(port, () => {
  console.log(`Server draait op poort ${port}`);
  connectToDatabase(); // Maak verbinding met MySQL wanneer de server start
});
