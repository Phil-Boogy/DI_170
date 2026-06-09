import jwt from "jsonwebtoken";
import * as userModel from "../models/userModel.js";

export async function registerUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "email and password are required" })
        return;
    }
    try {
        const user = await userModel.createUser(email, password);
        res.status(201).json({ message: "user created successfully", user })
    }
    catch (error) {
        console.error(error);
        if (error.code === "23505") {
            res.status(409).json({ message: "Email already exists" });
            return;
        }
        res.status(500).json({ message: "internal server error" });
    }
}

export async function loginUser(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({ message: "email and password are required" })
        return;
    }
    try {
        const user = await userModel.getUserByEmail(email);
        if (!user) {
            res.status(404).json({ message: "user not found" });
            return;
        }
        const ok = await userModel.verifyPassword(password, user.password)
        if (!ok) {
            res.status(401).json({ message: "wrong password" });
            return;
        }
        const SECRET = process.env.JWT_SECRET
        const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET
        const token = jwt.sign({ userID: user.id, email: user.email }, SECRET, {
            expiresIn: "15m",
            algorithm: "HS256",
        });
        res.cookie('access_token', token, {
            httpOnly: true, //not readable by JS XSS safe
            // secure: 
            // path: '/'
            maxAge: 15 * 60 * 1000
        })

        const refreshToken = jwt.sign({ userID: user.id, email: user.email }, REFRESH_SECRET, {
            expiresIn: "7d",
            algorithm: "HS256"
        });
        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 * 7
        })
        res.status(200).json({ user: { id: user.id, email: user.email }, token, refreshToken })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" });
    };

}

export function getProfile(req, res) {
    res.status(200).json({ user: req.user })
}

export function logoutUser(_req, res) {
    res.clearCookie('access_token')
    res.status(200).json({ message: "user successfully logged out" })
}

export async function refreshUserToken(req, res) {
    const token = req.cookies.refresh_token;
    const SECRET = process.env.JWT_SECRET

    if (!token) {
        return res.status(401).json({ message: 'refresh token missing' });
    }

    jwt.verify(token, process.env.JWT_REFRESH_SECRET,
        (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "invalid or expired refresh token" });
            }

            const newAccessToken =
                jwt.sign({ userID: decoded.userID, email: decoded.email }, SECRET, {
                    expiresIn: "15m",
                    algorithm: "HS256"
                });
            res.cookie('access_token', newAccessToken, {
                httpOnly: true,
                maxAge: 15 * 60 * 1000
            })
            res.status(200).json({ user: { id: decoded.userID, email: decoded.email }, newAccessToken })
        })
}
