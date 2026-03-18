import knex from "knex";
import { Pool } from 'pg'
import 'dotenv/config';

const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: { rejectUnauthorized: false },
    },
});

const pool = new Pool({

    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false }
});

const results = await pool.query('select * from products where id = 2')
console.log(results.rows);

// db("products")
//     .then((rows) => console.log(rows))

// db("products")
//     .select("id", "price", "name")
//     .where({ id: 2 })
//     .then((rows) => console.log(rows))
//     .catch((err) => console.log(err));

// db("products")
//     .insert({ name: "iphone19", price: 222 })
//     .then((rows) => console.log(rows))
//     .catch((err) => console.log(err));

// db("products")
//     .insert([
//         { name: "iPhone14", price: 333 },
//         { name: "iPhone15", price: 444 },
//     ])
//     .returning('*')
//     .then((rows) => console.log(rows))
//     .catch((err) => console.log(err));

// db("products")
//     .update({ price: 6599 }, ["id", "price"])
//     .where({ id: 8 })
//     // .returning('*')
//     .then((rows) => console.log(rows))
//     .catch((err) => console.log(err));

// db("products")
//     .where({ id: 3 })
//     .del()
//     .returning("*")
//     .then((rows) => console.log(rows))
//     .catch((err) => console.log(err));
