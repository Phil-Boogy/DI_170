import pool from "../db.js";

export const getAllExpenses = () => {
    return pool.query(`
    SELECT expenses.id, expense_categories.name AS category, expenses.description, expenses.amount, expenses.created_at 
    FROM expenses
    JOIN expense_categories ON expenses.category_id = expense_categories.id
  `);
};

export const createNewExpense = (category_id, description, amount) => {
    return pool.query(
        `insert into expenses (category_id, description, amount)values ($1, $2, $3) returning *`, [category_id, description, amount],
    );
};

export const editExpense = (id, category_id, description, amount) => {
    return pool.query(
        `UPDATE expenses
        SET category_id = $1, description = $2, amount = $3
        WHERE id = $4
        RETURNING *`,
        [category_id, description, amount, id]
    );
};

export const deleteExpense = (id) => {
    return pool.query(
        `DELETE FROM expenses
        WHERE id = $1
        RETURNING *`,
        [id]
    );
};