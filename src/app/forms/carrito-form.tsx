"use client"
import Image from "next/image";
import { useForm } from "react-hook-form";
import {getProductsSearch} from "../lib/productsapi";
import { useRouter } from "next/navigation";
import { addToCart } from "../lib/productsapi";

export function CarritoForm({ id}: {id: number}){

    return(
        <div onClick={() => {addToCart(id, 1);}}><p>Agregar al carrito</p></div>
    );
}

