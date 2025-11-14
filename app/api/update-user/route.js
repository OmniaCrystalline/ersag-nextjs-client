/** @format */

import { NextResponse } from "next/server";
import User from "../../../lib/mongo/models.user.auth";
import dbConnect from "@/lib/mongo/connect";

export async function POST(req) {
  const body = await req.json();
  try {
    await dbConnect();
    const res = await User.findOneAndUpdate({ _id: body._id }, body.data, {
      new: true,
    });
    return NextResponse.json({
      data: res,
      stus: 200,
      message: "Успішно оновлено!",
    });
  } catch (error) {
    return NextResponse.json({
      data: error.message,
      status: 500,
      message: error.message,
    });
  }
}
