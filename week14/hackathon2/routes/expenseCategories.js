import { Router } from "express";

import { createExpenseCategory, getExpenseCategories, editSavedExpenseCategory, deleteSavedExpenseCategory } from "../controllers/expenseCategories.js";

const router = Router();

router.get("/", getExpenseCategories);
router.post("/", createExpenseCategory);
router.put("/:id", editSavedExpenseCategory);
router.delete("/:id", deleteSavedExpenseCategory);

export default router;