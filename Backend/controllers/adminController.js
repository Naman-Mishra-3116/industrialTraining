import { AdminUser } from "../models/AdminSchema.js";
import jwt from "jsonwebtoken";

export const addAdminFunction = async function (req, res) {
  try {
  } catch (error) {}
};

export const loginFunction = async function (req, res) {
  try {
    const { email, password } = req.body;

    const user = await AdminUser.findOne({ email });

    if (!user) {
      return res.status(200).json({
        message: "Please check email once user not found",
        success: true,
        error: false,
      });
    }

    const token = jwt.sign(
      { name: user.username, id: user._id, email: user.email },
      "thisissecret",
      {
        expiresIn: "15d",
      }
    );
    if (password === user.password) {
      res.status(200).json({
        message: "Logged in Successfully",
        success: true,
        error: false,
        token,
        user: user.username,
        email: user.email,
        id: user._id,
      });
    }
  } catch (err) {
    res.status(200).json({ message: err.message, success: false, error: true });
  }
};
