/** @format */

import { NextResponse } from "next/server";
import ErsagOrder from "../../../lib/mongo/models.order";
import dbConnect from "@/lib/mongo/connect";

export async function POST(req) {
  //user, order
  const body = await req.json();
  const { user, order } = body;
  try {
    await dbConnect();
    const res = await ErsagOrder.create({
      date: new Date(),
      name: user.name,
      phone: user.phone,
      email: user.email,
      order,
      fond: user?.fond || false,
    });
    return NextResponse.json({
      data: res,
      status: 200,
      message: "Прийнято, очікуйте дзвінка менеджера!",
    });
  } catch (error) {
    return NextResponse.json({
      data: error.message,
      status: 500,
      message: error.message,
    });
  }
}
