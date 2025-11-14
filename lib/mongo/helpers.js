/** @format */

//import connectDB from "@/lib/mongo/mongo.connect";
import ErsagProduct from "./models.products";
import { cookies } from "next/headers";
import disconnectDB from "./mongo.disconnect";
const fs = require("fs");
import { revalidatePath } from "next/cache";

export async function addNewProduct(data) {
  "use server";

  const newObj = {};
  for (var [key, val] of data.entries()) {
    if (key !== "img") newObj[key] = val;
    if (key === "img") {
      const file = data.get("img");
      const data1 = await file.arrayBuffer();
      fs.writeFileSync(
        `public/images/${file.name}`,
        Buffer.from(data1),
        (err) => err && console.error(err)
      );

      newObj.img = file.name;
    }
  }
  //await connectDB();
  const response = await ErsagProduct.create(newObj);
  //await disconnectDB();
  if (response) return true;
}

export async function getProductsList() {
  let query = null;
  try {
    query = cookies().get("query");
  } catch (error) {
    console.log("error.message", error.message);
  }
  let data = [];
  if (query?.value === "") {
    await connectDB();
    data = await ErsagProduct.find();
  }
  if (query?.value !== "") {
    const regex = new RegExp(query?.value, "i");
    //await connectDB();
    data = await ErsagProduct.find({
      title: { $regex: regex },
    }).exec();
  }
  return data.map((e) => {
    return {
      ...e._doc,
      _id: e._id.toString(),
    };
  });
}

export async function getOneProduct(_id) {
  const data = await ErsagProduct.find({ _id });
  const [result] = data;
  return { ...result._doc, _id: result._id.toString() };
}

export async function changeProduct(elem, data) {

  const newObj = {};
  for (var [key, val] of data.entries()) {
    if (val !== "" && key !== "img" && !val.includes("$ACTION")) {
      newObj[key] = val;
    }
    if (
      val !== "" &&
      key === "img" &&
      val.size > 0 &&
      !val.includes("$ACTION")
    ) {
      console.log("key===img", key === "img", val.size);
      fs.unlinkSync(`public/images/${elem.img}`);
      const file = data.get("img");
      const data1 = await file.arrayBuffer();
      fs.writeFileSync(
        `public/images/${file.name}`,
        Buffer.from(data1),
        (err) => err && console.error(err)
      );
      newObj.img = file.name;
    }
    console.log("newObj", newObj);

    const newData = await ErsagProduct.findByIdAndUpdate(
      { _id: elem._id },
      newObj,
      { new: true }
    );
    console.log("newData", newData);
    if (newData) return true;
    revalidatePath(`admin/edit-product/${elem._id}`);
    Form.reset();
  }
}

export const findOrdersByEmailOrPhone = async (email, phone) => {
  let result = [];
  if (email && phone) result = await ErsagOrder.find({ email }, { phone });
  if (email && !phone) result = await ErsagOrder.find({ email });
  if (!email && phone) result = await ErsagOrder.find({ phone });
  return result
};

module.exports = {
  getProductsList,
  getOneProduct,
  addNewProduct,
  changeProduct,
  findOrdersByEmailOrPhone,
};
