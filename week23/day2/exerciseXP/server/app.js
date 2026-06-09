import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

import userRouter from "./routes/userRouter.js";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_ORIGIN
})
);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});

app.get("/health", (_req, res) => {
    res.json({ status: "OK" });
});

app.use("/api/user", userRouter);
