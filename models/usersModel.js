import db from "../config/db.js";

export const getAllUsers = (callback) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, results) => {
    callback(err, results);
  });
};

export const getUserById = (id, callback) => {
  const sql = "SELECT * FROM user WHERE ID_User = ?";
  db.query(sql, [id], (err, result) => {
    callback(err, result[0]);
  });
};