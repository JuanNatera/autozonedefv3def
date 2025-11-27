import Navbar from "@/components/navbar";
import Image from "next/image";
import styles from "../product/product.module.css";
import {SearchForm} from "../forms/search-form"
import {CarritoForm} from "../forms/carrito-form"
import {CarritoPurchaseForm} from "../forms/carritopurchase-form"
import {getProductsID, getProductsSearch} from "../lib/productsapi";
import { addToCart } from "../lib/productsapi";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>
}) {

  const idprd = (await searchParams).name ?? "0";
  
  const id = parseInt(idprd)
  console.log("ID recibido:", id);
  const product = await getProductsID(id);
  let data: { productId: number; quantity: 1}[] = [];
  data = [
    {
      productId: product.id,
      quantity: 1
    }
  ];

  async function handleAdd() {
    try {
      const response = await addToCart(id, 1);
      console.log("Carrito actualizado:", response);
      alert("Producto agregado al carrito");
    } catch (error) {
      console.error(error);
      alert("Error al agregar al carrito");
    }
  }


  return (
    

    <div className={styles.page}>
      <main className={styles.main}>

        <div id={styles.searchbar}>
          <div id={styles.searchitems}><SearchForm/></div>
        </div>

        <div id={styles.productcontainer}>
          <div id={styles.productinfo}>

            <div id={styles.productimageandprice}>
              <img src={product.image} alt="" />
              <div id={styles.producttitleprice}>
                <h1>{product.name}</h1>
                <p>{product.price} COP</p>
                <p>vendido por: {product.seller} </p>
              </div>
            </div>

            <div id={styles.productpaycart}>
              <div id={styles.comprarbtns}>
                <div id={styles.comprarbutton}><CarritoPurchaseForm cartItems={data}/></div>
                <div id={styles.carritobutton}><CarritoForm id={product.id}/></div>
              </div>
            </div>

          </div>
          <div id={styles.productdesc}>
            <h1>Descripción</h1>
            <p>{product.description}</p>
          </div>
        </div>
        


        













      </main>
    </div>
  );
}
