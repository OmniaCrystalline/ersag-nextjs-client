/** @format */

export const handleLogin = async (data) => {
  const res = await fetch("api/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};

export const handleSignup = async (data) => {
  const res = await fetch("api/signup", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};

export const handleHistory = async (data) => {
  const res = await fetch("api/history", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};

export const handleOrder = async (data) => {
  const res = await fetch("api/order", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};

export const handleUpdateUser = async (_id, data) => {
  const res = await fetch("api/update-user", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(_id, data),
  });
  const resData = await res.json();
  return resData;
};

export const handleOrderSend = async (user, order) => {
  const res = await fetch("api/send-order", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(user, order),
  });
  const resData = await res.json();
  return resData;
};
