import { getAllIncomes, createNewIncome, editIncome, deleteIncome } from "../models/income.js";

export const getIncomes = async (req, res) => {
    try {
        const result = await getAllIncomes();
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
};

export const createIncome = async (req, res) => {
    const { category_id, description, amount } = req.body;
    try {
        const result = await createNewIncome(category_id, description, amount)
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "WTF?!?!?!" });
    }
};

export const editSavedIncome = async (req, res) => {
    const { id } = req.params;
    const { category_id, description, amount } = req.body;
    try {
        const result = await editIncome(id, category_id, description, amount);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
};

export const deleteSavedIncome = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteIncome(id);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "aww shucks" });
    }
};