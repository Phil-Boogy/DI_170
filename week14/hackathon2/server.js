import express from "express";
import path from "path";
import expensesRouter from "./routes/expenses.js";
import incomeRouter from "./routes/income.js"
import incomeCategoriesRouter from "./routes/incomeCategories.js"
import expenseCategoriesRouter from "./routes/expenseCategories.js"

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use("/api/expenses", expensesRouter);
app.use("/api/income", incomeRouter);
app.use("/api/income_categories", incomeCategoriesRouter);
app.use("/api/expense_categories", expenseCategoriesRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`running on port ${PORT}`));