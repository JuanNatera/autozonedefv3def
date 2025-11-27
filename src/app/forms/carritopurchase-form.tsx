"use client"
import Image from "next/image";
import { useForm } from "react-hook-form";
import {getProductsSearch} from "../lib/productsapi";
import { useRouter } from "next/navigation";
import { createOrder} from "../lib/productsapi";

type Props = {
    cartItems: { productId: number; quantity: number }[];
  };

export function CarritoPurchaseForm({ cartItems }: Props){
    const func = async ()=>{
        try {
            const order = await createOrder(cartItems);
            console.log("Orden creada:", order);
            alert(`Total: ${order.total}`);
            window.location.href = order.init_point;
          } catch (err: any) {
            console.error(err);
            alert(err.message || "Error al crear la orden");
          }
    }


    return(
        <div onClick={() => {func();}}><p>Comprar</p></div>
    );
}

