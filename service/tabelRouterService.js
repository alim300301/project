const db = require('../db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const rows = await db.query(
        `SELECT id, judul, penulis, penerbit, tanggal_rilis, url_baca FROM buku`
    );
    const data = helper.CekRow(rows);
}