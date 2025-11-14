/** @format */

import { NextResponse } from "next/server";
import Order from "../../../lib/mongo/models.order";
import dbConnect from "@/lib/mongo/connect";

export async function POST(req) {
  const body = await req.json();
  console.log("user", body);
  //await dbConnect();
  //const res = await Order.find({ name: body });
  //return NextResponse.json({ message: res });
}
