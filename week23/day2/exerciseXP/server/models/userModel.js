import { pool } from "../config/db.js";
import bcrypt from "bcrypt";

/** create a user */
export async function createUser(email, password) {
    const hashed = await bcrypt.hash(password, 10);
    const { rows } = await pool.query(
        `INSERT INTO usersJWT (email, password)
     VALUES ($1, $2)
     RETURNING id, email`,
        [email.toLowerCase(), hashed],
    );
    return rows[0];
}

/** look up a user by email */
export async function getUserByEmail(email) {
    const { rows } = await pool.query(
        `SELECT id, email, password FROM usersJWT WHERE email = $1`,
        [email.toLowerCase()],
    );
    return rows[0];
}

/** verify password with bcrypt */
export async function verifyPassword(plainPassword, storedPassword) {
    return bcrypt.compare(plainPassword, storedPassword);
}

/** list all users */
export async function listUsers() {
    const { rows } = await pool.query(
        `SELECT id, email, created_at FROM usersJWT ORDER BY id`,
    );
    return rows;
}