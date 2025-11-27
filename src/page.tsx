import Navbar from "@/components/navbar";
import Image from "next/image";
import styles from "../productsearch/productsearch.module.css";
import {getProducts} from "./app/lib/productsapi";

export async function CartPage() {

  const products = await getProducts()
  console.log(products)

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div id={styles.searchbar}>
          <div id={styles.searchitems}><Image className={styles.searchitem1} src="/search.png" alt="lupa" width={25} height={25} /><input className={styles.searchitem1} id={styles.inputsearch} type="text" placeholder="Buscar" /></div>
        </div>

        <div id={styles.searchmenucontainer}>

          <div id={styles.searchoptions}>
            <h1>titulo del producto a buscar</h1>
            <p>200 resultados</p>
          </div>

          <div id={styles.productslistcontainer}>
            <div className={styles.productcontainer}>
              <img src="/imagen.png" alt="" />
              <div className={styles.productifocontainer}> <h1>Titulo</h1> <p>$100.000</p></div>
            </div>

            <div className={styles.productcontainer}>
              <img src="/imagen.png" alt="" />
              <div className={styles.productifocontainer}> <h1>Titulo</h1> <p>$100.000</p></div>
            </div>

            <div className={styles.productcontainer}>
              <img src="/imagen.png" alt="" />
              <div className={styles.productifocontainer}> <h1>Titulo</h1> <p>$100.000</p></div>
            </div>

            <div className={styles.productcontainer}>
              <img src="/imagen.png" alt="" />
              <div className={styles.productifocontainer}> <h1>Titulo</h1> <p>$100.000</p></div>
            </div>

            <div className={styles.productcontainer}>
              <img src="/imagen.png" alt="" />
              <div className={styles.productifocontainer}> <h1>Titulo</h1> <p>$100.000</p></div>
            </div>

            <div className={styles.productcontainer}>
              <img src="/imagen.png" alt="" />
              <div className={styles.productifocontainer}> <h1>Titulo</h1> <p>$100.000</p></div>
            </div>

            <div className={styles.productcontainer}>
              <img src="/imagen.png" alt="" />
              <div className={styles.productifocontainer}> <h1>Titulo</h1> <p>$100.000</p></div>
            </div>

            <div className={styles.productcontainer}>
              <img src="/imagen.png" alt="" />
              <div className={styles.productifocontainer}> <h1>Titulo</h1> <p>$100.000</p></div>
            </div>

            <div className={styles.productcontainer}>
              <img src="/imagen.png" alt="" />
              <div className={styles.productifocontainer}> <h1>Titulo</h1> <p>$100.000</p></div>
            </div>

            <div className={styles.productcontainer}>
              <img src="/imagen.png" alt="" />
              <div className={styles.productifocontainer}> <h1>Titulo</h1> <p>$100.000</p></div>
            </div>

          </div>
        </div>
        














      </main>
    </div>
  );
}
