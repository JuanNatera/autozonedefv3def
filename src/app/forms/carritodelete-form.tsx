"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CarritoDeleteForm({ id }: { id: number }) {
  async function handleDelete() {
    try {
      await fetch(
        `https://backendnestecommercemotorshop-production.up.railway.app/api/shopping-cart/${id}`,
        { method: "DELETE" }
      );
      alert("Producto eliminado");
    } catch (err) {
      console.error(err);
      alert("Error al eliminar el producto");
    }
  }

  return <button onClick={handleDelete}>Eliminar</button>;
}

