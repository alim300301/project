const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const rows = await db.query(
        `SELECT id, nama, alamat, no_telepon, email, password FROM users`
    );
    const data = helper.CekRow(rows);
    return{
        data
    };
}
async function create(dataUsers) {
    try {
      const result = await db.query(
        `INSERT INTO users (nama, alamat, no_telepon, email, password) VALUES
        ('${dataUsers.nama}', '${dataUsers.alamat}', '${dataUsers.no_telepon}', '${dataUsers.email}', '${dataUsers.password}')`
      );
      if (result.affectedRows) {
        return { message: "Tambah Data users Sukses"}
      } else {
        return {message: "Gagal Tambah Data users"}
      }
    } catch (error) {
      return {message: "Error Tambah Data users"}
    }
  }
  
async function update(id, dataUsers) {
    try {
        const result = await db.query(
            `UPDATE users SET id="${dataUsers.id}", nama="${dataUsers.nama}", alamat="${dataUsers.alamat}",
            no_telepon="${dataUsers.no_telepon}", email="${dataUsers.email}", password="${dataUsers.password}" WHERE id=${id}`
            );
        if (result.affectedRows) {
            return {message: "UPDATE data users Berhasil"}
        } else {
            return { message: "Gagal UPDATE data users"}
        }
    } catch (error) {
        return {message: "Error UPDATE data users"}
    }
}
async function hapus (id) {
    try {
        const result = await db.query(
            `DELETE FROM users WHERE id=${id}`
        )
        if (result.affectedRows) {
            return {message: "Hapus data users Berhasil"} 
        } else {
            return { message: "Gagal Hapus Data users"}
        }
    } catch (error) {
    return {message: "Error saat hapus data users"}
    }
}
module.exports = {getMultiple, create, update, hapus};