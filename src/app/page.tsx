
import Image from "next/image";
import styles from "./page.module.css";
import {getProducts, getProductsSearch} from "./lib/productsapi";
import {useForm} from 'react-hook-form'
import {SearchForm} from "./forms/search-form"
import Link from "next/link";

export default async function Home() {
  const products = await getProducts()

  
  let limitedProducts = products
  if (products.length > 10) {
    limitedProducts = products.slice(0, 10);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div id={styles.searchbar}>
          <div id={styles.searchitems}> < SearchForm /> </div>
        </div>

        <div id={styles.bannercontainer}>
          <div id={styles.bannerinfo}>
            <h1>AutoZone</h1>
            <p>for all cars</p>
            <div id={styles.bannerinfobutton}><p>Quiénes somos</p></div>
          </div>
          <img src="/info_part.png" alt="" />
        </div>

        <div id={styles.categoriescontainer}>
          <Link href={`/productsearch?name=${encodeURIComponent("rines")}`}><div className={styles.categoriesdiv}><img src="/categoria_1.png" alt="" /> <div className={styles.categoriestitle}>Rines</div></div> </Link>
          <Link href={`/productsearch?name=${encodeURIComponent("aceite")}`}><div className={styles.categoriesdiv}><img src="/categoria_2.png" alt="" /> <div className={styles.categoriestitle}>Aceites</div></div></Link>
          <Link href={`/productsearch?name=${encodeURIComponent("escape")}`}><div className={styles.categoriesdiv}><img src="/categoria_3 (3).png" alt="" /> <div className={styles.categoriestitle}>Escapes</div></div></Link>
          <Link href={`/productsearch?name=${encodeURIComponent("velocimetro")}`}><div className={styles.categoriesdiv}><img src="/categoria_3 (2).png" alt="" /> <div className={styles.categoriestitle}>Velocimetros</div></div></Link>
          <Link href={`/productsearch?name=${encodeURIComponent("pantalla")}`}><div className={styles.categoriesdiv}><img src="/categoria_3 (1).png" alt="" /> <div className={styles.categoriestitle}>Pantallas</div></div></Link>
        </div>

        <p className={styles.sectitle}>Categorías</p>

        <div id={styles.bestsellerscontainer}>

            {Array.isArray(products) && limitedProducts.map((product: any) => (
              
              <div key={product.id} className={styles.bestsellersproductdiv}>
                <Link href={`/product?name=${encodeURIComponent(product.id)}`}>
                  <img src={product.image} alt="" />
                  <div className={styles.bestsellersproductinfo}>
                    <h1>{product.name}</h1>
                    <p>{product.price} COP</p>
                  </div>
                </Link>
              </div>
            ))}


        </div>

        <p className={styles.sectitle}>Productos más vendidos</p>


        <div id={styles.ads}>
          <img src="/Frame 5 (1).png" alt="" />
        </div>











    
      </main>
    </div>
  );
}
