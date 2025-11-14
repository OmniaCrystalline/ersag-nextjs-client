/** @format */

import { NextResponse } from "next/server";
const bcrypt = require("bcryptjs");
import User from "../../../lib/mongo/models.user.auth";
import dbConnect from "@/lib/mongo/connect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(req) {
  const [body] = await req.json();
  console.log('body', body)
  const { query, password } = body;
  let user = {};

  try {
    await dbConnect();
    query.includes("@")
      ? (user = await User.findOne({ email: query }))
      : (user = await User.findOne({ phone: query }));
  } catch (error) {
    console.log("error", error.message);
    return NextResponse.json(
      {
        message:
          "Помилка запита - користувача з такою поштою або телефоном немає",
      },
      { status: 503 }
    );
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    cookies().set("user", user.name);
    return NextResponse.json({ message: `Успішний вхід!`, status: 200, data: user });
  } else {
    return NextResponse.json({ message: `Пароль невірний!`, status: 503 });
  }
}
