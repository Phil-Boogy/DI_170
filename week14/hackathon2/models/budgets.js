import pool from "../db.js";

export const getAllBudgets = () => {
    return pool.query(`
        SELECT budget.id, expense_categories.name AS category, budget.amount, budget.month
        FROM budget
        JOIN expense_categories ON budget.category_id = expense_categories.id
    `);
};

export const createNewBudget = (category_id, amount, month) => {
    return pool.query(`
        insert into budget (category_id, amount, month) values ($1, $2, $3) returning *`, [category_id, amount, month])
};

export const editBudget = (id, category_id, amount, month) => {
    return pool.query(`
        UPDATE budget
        SET category_id = $1, amount = $2, month = $3
        WHERE id = $4
        RETURNING *`, [category_id, amount, month, id])
};

export const deleteBudget = (id) => {
    return pool.query(` 
        DELETE FROM budget
        WHERE id = $1
        RETURNING *`,
        [id])
};