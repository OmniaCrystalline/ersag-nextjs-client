/** @format */

import { NextResponse } from "next/server";
const bcrypt = require("bcryptjs");
import User from "../../../lib/mongo/models.user.auth";
import dbConnect from "@/lib/mongo/connect";
import { cookies } from "next/headers";

export async function POST(req) {
  const body = await req.json();
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    body.password = hashedPassword;
    body.date = new Date();
    await dbConnect();
    const newUser = await User.create(body);
    console.log('newUser', newUser)
    return NextResponse.json({
      message: `Вітаємо, ${newUser.name}, реєстрація успішна`,
      status: 200,
      data: newUser,
    });
  } catch (err) {
    return NextResponse.json({ message: err.message, status: 500 });
  }
}
