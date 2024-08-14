import { AdminUser } from "../models/AdminSchema.js";
import jwt from "jsonwebtoken";
import UserSchema from "../models/UserSchema.js";
import DoctorSchema from "../models/DoctorSchema.js";
import BookingSchema from "../models/BookingSchema.js";

export const addAdminFunction = async function (req, res) {
  try {
    const { userId, name, email } = req.user;
    res.status(200).json({ userId, name, email });
  } catch (error) {
    res
      .status(200)
      .json({ message: error.message, success: false, error: true });
  }
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
      process.env.JWT_SECRET,
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
    } else {
      res
        .status(200)
        .json({ message: "Invalid credentials", success: true, error: false });
    }
  } catch (err) {
    res.status(200).json({ message: err.message, success: false, error: true });
  }
};

export const availableUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const isValid = await AdminUser.findOne({ _id: id });
    if (isValid) {
      const result = await UserSchema.find().select("-password");
      console.log(result);
      res.status(200).json({
        message: "Data delivered",
        error: false,
        success: true,
        data: result,
      });
    } else {
      return res.status(200).json({
        message: "You are not authorized",
        success: false,
        error: true,
      });
    }
  } catch (error) {
    res
      .status(200)
      .json({ message: error.message, success: false, error: true });
  }
};

export const availableDoctors = async (req, res) => {
  try {
    const id = req.params.id;
    const isValid = await AdminUser.findOne({ _id: id });
    if (isValid) {
      const result = await DoctorSchema.find().select("-password");
      console.log(result);
      res.status(200).json({
        message: "Data delivered",
        error: false,
        success: true,
        data: result,
      });
    } else {
      return res.status(200).json({
        message: "You are not authorized",
        success: false,
        error: true,
      });
    }
  } catch (error) {
    res
      .status(200)
      .json({ message: error.message, success: false, error: true });
  }
};

export const availableBookings = async (req, res) => {
  try {
    const id = req.params.id;
    const isValid = await AdminUser.findOne({ _id: id });
    if (isValid) {
      const result = await BookingSchema.find();
      console.log(result);
      res.status(200).json({
        message: "Data delivered",
        error: false,
        success: true,
        data: result,
      });
    } else {
      return res.status(200).json({
        message: "You are not authorized",
        success: false,
        error: true,
      });
    }
  } catch (error) {
    res
      .status(200)
      .json({ message: error.message, success: false, error: true });
  }
};
