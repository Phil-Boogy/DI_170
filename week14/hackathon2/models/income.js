import pool from "../db.js";

export const getAllIncomes = () => {
    return pool.query(
        `SELECT income.id, income_categories.name AS category, income.description, income.amount, income.created_at 
        FROM income
        JOIN income_categories ON income.category_id = income_categories.id`
    );
};

export const createNewIncome = (category_id, description, amount) => {
    return pool.query(
        `insert into income (category_id, description, amount)values ($1, $2, $3) returning *`, [category_id, description, amount],
    );
};

export const editIncome = (id, category_id, description, amount) => {
    return pool.query(
        `UPDATE income
        SET category_id = $1, description = $2, amount = $3
        WHERE id = $4
        RETURNING *`,
        [category_id, description, amount, id]
    );
};

export const deleteIncome = (id) => {
    return pool.query(`
        DELETE FROM income
        WHERE id = $1
        RETURNING *`,
        [id]);
};