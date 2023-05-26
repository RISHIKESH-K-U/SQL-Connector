const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost", // Replace with your MySQL server host
  user: "root", // Replace with your MySQL username
  password: "***", // Replace with your MySQL password
  database: "**", // Replace with your MySQL database name
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");

  connection.query("SELECT * FROM ***", (err, results) => {
    //REPLACE *** WITH TABLE NAME
    if (err) {
      console.error("Error executing MySQL query:", err);
      return;
    }
    console.log(results);

    connection.end((err) => {
      if (err) {
        console.error("Error closing MySQL database connection:", err);
        return;
      }
      console.log("Connection closed");
    });
  });
});
