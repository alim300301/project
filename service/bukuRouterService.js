const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const rows = await db.query(
        `SELECT id, judul, penulis, penerbit, tanggal_rilis, url_baca FROM buku`
    );
    const data = helper.CekRow(rows);
    return{
        data
    };
}
async function create(dataBuku) {
    try {
      const result = await db.query(
        `INSERT INTO buku (judul, penulis, penerbit, tanggal_rilis, url_baca) VALUES
        ('${dataBuku.judul}', '${dataBuku.penulis}', '${dataBuku.penerbit}', '${dataBuku.tanggal_rilis}', '${dataBuku.url_baca}')`
      );
      if (result.affectedRows) {
        return { message: "Tambah Data Buku Sukses"}
      } else {
        return {message: "Gagal Tambah Data Buku"}
      }
    } catch (error) {
      return {message: "Error Tambah Data Buku"}
    }
  }
  
async function update(id, dataBuku) {
    try {
        const result = await db.query(
        );
            `UPDATE buku SET id="${dataBuku.id}", judul="${dataBuku.judul}", penulis="${dataBuku.penulis}",
            penerbit="${dataBuku.penerbit}", tanggal_rilis="${dataBuku.tanggal_rilis}", url_baca="${dataBuku.url_baca}" WHERE id=${id}`
        if (result.affectedRows) {
            return {message: "UPDATE data Buku Berhasil"}
        } else {
            return { message: "Gagal UPDATE data Buku"}
        }
    } catch (error) {
        return {message: "Error UPDATE data Buku"}
    }
}
async function hapus (id) {
    try {
        const result = await db.query(
            `DELETE FROM buku WHERE id=${id}`
        )
        if (result.affectedRows) {
            return {message: "Hapus data Buku Berhasil"} 
        } else {
            return { message: "Gagal Hapus Data Buku"}
        }
    } catch (error) {
    return {message: "Error saat hapus data Buku"}
    }
}
module.exports = {getMultiple, create, update, hapus};