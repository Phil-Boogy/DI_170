import pool from "../db.js";

export const getAllExpenseCategories = () => {
    return pool.query(`
        SELECT id, name
        FROM expense_categories
        `)
};

export const createNewExpenseCategory = (categoryName) => {
    return pool.query(`
        insert into expense_categories (name) values ($1) returning *`, [categoryName]
    );
};

export const editExpenseCategory = (id, categoryName) => {
    return pool.query(`
        UPDATE expense_categories
        SET name = $1
        WHERE id = $2
        RETURNING *
        `, [categoryName, id]);
};

export const deleteExpenseCategory = (id) => {
    return pool.query(`
        DELETE FROM expense_categories
        WHERE id = $1
        RETURNING *`,
        [id]);
};