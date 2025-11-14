/** @format */

import { NextResponse } from "next/server";
import ErsagContact from "@/lib/mongo/models.contact";
import dbConnect from "@/lib/mongo/connect";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, email, phone, message, usedProducts, productsUsed, productsUsedText, likedProducts } = body;

    // Валідація
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Всі обов'язкові поля повинні бути заповнені" },
        { status: 400 }
      );
    }

    // Валідація email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Невірний формат email" },
        { status: 400 }
      );
    }

    // Збереження відгуку в MongoDB
    const contact = new ErsagContact({
      name,
      email,
      phone: phone || "",
      message,
      usedProducts: usedProducts || false,
      productsUsed: productsUsed || [],
      productsUsedText: productsUsedText || "",
      likedProducts: likedProducts || "",
      date: new Date(),
      read: false,
    });

    await contact.save();

    return NextResponse.json(
      {
        message: "Ваше повідомлення успішно відправлено! Ми зв'яжемося з вами найближчим часом.",
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        message: "Помилка відправки повідомлення. Спробуйте ще раз пізніше.",
      },
      { status: 500 }
    );
  }
}

