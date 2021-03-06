/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";

import "./Orders.css";
import Order from "./Order";
import { database } from "../../firebase";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState();

  useEffect(() => {
    if (user) {
      database
        .Collection("users")
        .doc(user?.uid)
        .Collection("orders")
        .orderBY("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
