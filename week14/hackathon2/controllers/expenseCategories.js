import { getAllExpenseCategories, createNewExpenseCategory, editExpenseCategory, deleteExpenseCategory } from "../models/expenseCategories.js";

export const getExpenseCategories = async (req, res) => {
    try {
        const result = await getAllExpenseCategories();
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
};

export const createExpenseCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const result = await createNewExpenseCategory(name);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
};

export const editSavedExpenseCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const result = await editExpenseCategory(id, name);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "somethin' ain't right" });
    }
};

export const deleteSavedExpenseCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteExpenseCategory(id);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "aww shucks" });
    }
};