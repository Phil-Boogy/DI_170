import { getAllBudgets, createNewBudget, editBudget, deleteBudget } from "../models/budgets";

export const getBudgets = async (req, res) => {
    try {
        const result = await getAllBudgets();
        res.json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Awwww Shoot" })
    }
};

