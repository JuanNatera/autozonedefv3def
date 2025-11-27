import Navbar from "@/components/navbar";
import Image from "next/image";
import styles from "../cart/cart.module.css";
import {SearchForm} from "../forms/search-form"
import CarritoDeleteForm from "../forms/carritodelete-form"
import {CarritoPurchaseForm} from "../forms/carritopurchase-form"
import {getCarrito} from "../lib/productsapi";


export default async function CartPage() {
  let Totalprice = 0
  let data: { productId: number; quantity: 1}[] = [];
  
  const products = await getCarrito();
  console.log(products)

  if (products && Array.isArray(products)) {
      data = products.map((product: any) => ({
      productId: product.product.id, // o product.product.id si tu estructura es {product: {...}}
      quantity: 1
    }));
  }

  console.log(data);

  if (Array.isArray(products)) {
    Totalprice = products.reduce((sum, p) => sum + p.product.price, 0);
  }
  console.log(Totalprice)

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div id={styles.searchbar}>
          <div id={styles.searchitems}><SearchForm/></div>
        </div>

        
        <div id={styles.cartsec}>
          <div id={styles.cartproductdiv}>

          {!Array.isArray(products) ? (
            <div className={styles.productcontainer}><p>No se encontraron productos</p></div>
          ) : (
            products.map((product: any) => (
              <div key={product.id} className={styles.cartproducts}>
                <img src={product.product.image} alt="" />
                <div className={styles.productsinformation}>
                  <h1>{product.product.name}</h1>
                  <p className={styles.productprice}>{product.product.price} COP</p>
                  <CarritoDeleteForm id={product.id} />
                </div>
              </div>
            ))
          )}

          </div>

          <div id={styles.cartresumediv}>
            <div id={styles.resumediv}>
              <h1>Resumen de compra</h1>
              <div id={styles.resumedetails}>
                <h1>Total: {Totalprice} COP</h1>
              </div>
              <div id={styles.comprarbutton}><CarritoPurchaseForm cartItems={data}/></div>
            </div>
          </div>


        </div>
        
{/* 

        <div id={styles.bestsellerscontainer}>

          <div className={styles.bestsellersproductdiv}>
            <img src="/imagen.png" alt="" />
            <div className={styles.bestsellersproductinfo}>
              <h1>Luces exploradoras</h1>
              <p>$10.000 COP</p>
            </div>
          </div>

          <div className={styles.bestsellersproductdiv}>
            <img src="/imagen.png" alt="" />
            <div className={styles.bestsellersproductinfo}>
              <h1>Luces exploradoras</h1>
              <p>$10.000 COP</p>
            </div>
          </div>

          <div className={styles.bestsellersproductdiv}>
            <img src="/imagen.png" alt="" />
            <div className={styles.bestsellersproductinfo}>
              <h1>Luces exploradoras</h1>
              <p>$10.000 COP</p>
            </div>
          </div>

          <div className={styles.bestsellersproductdiv}>
            <img src="/imagen.png" alt="" />
            <div className={styles.bestsellersproductinfo}>
              <h1>Luces exploradoras</h1>
              <p>$10.000 COP</p>
            </div>
          </div>

          <div className={styles.bestsellersproductdiv}>
            <img src="/imagen.png" alt="" />
            <div className={styles.bestsellersproductinfo}>
              <h1>Luces exploradoras</h1>
              <p>$10.000 COP</p>
            </div>
          </div>

        </div>

        <p className={styles.sectitle}>Productos relacionados</p> */}


        













      </main>
    </div>
  );
}
