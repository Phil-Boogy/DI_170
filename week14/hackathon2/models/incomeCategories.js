import pool from "../db.js";

export const getAllIncomeCategories = () => {
    return pool.query(`
        SELECT id, name
        FROM income_categories
        `)
};

export const createNewIncomeCategory = (categoryName) => {
    return pool.query(`
        insert into income_categories (name) values ($1) returning *`, [categoryName]
    );
};

export const editIncomeCategory = (id, categoryName) => {
    return pool.query(`
        UPDATE income_categories
        SET name = $1
        WHERE id = $2
        RETURNING *
        `, [categoryName, id]);
};

export const deleteIncomeCategory = (id) => {
    return pool.query(`
        DELETE FROM income_categories
        WHERE id = $1
        RETURNING *`,
        [id]);
};