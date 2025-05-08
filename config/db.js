import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "labsys",
});

db.connect((err) => {
  if (err) {
    console.error("Gagal konek ke database:", err.message);
  } else {
    console.log("Berhasil konek ke database MySQL");
  }
});

export default db;
