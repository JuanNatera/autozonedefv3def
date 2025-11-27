import Navbar from "@/components/navbar";
import Image from "next/image";
import styles from "../productsearch/productsearch.module.css";
import {getProducts, getProductsSearch} from "../lib/productsapi";
import {SearchForm} from "../forms/search-form"
import Link from "next/link";


export default async function CartPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>
}) {

  const params = await searchParams;
  const name = params.name ?? "";
  const products = await getProductsSearch(name);
  let cantresultados = 0
  if (products){
    cantresultados = products.length
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div id={styles.searchbar}>
          <div id={styles.searchitems}> <SearchForm/> </div>
        </div>

        <div id={styles.searchmenucontainer}>

          <div id={styles.searchoptions}>
            <h1>{name}</h1>
            <p>{cantresultados} resultados</p>
          </div>

          <div id={styles.productslistcontainer}>

          {!Array.isArray(products) ? (
            <div className={styles.productcontainer}><p>No se encontraron productos</p></div>
          ) : (
            products.map((product: any) => (
              <Link key={product.id} href={`/product?name=${encodeURIComponent(product.id)}`}>
              <div  className={styles.productcontainer}>
                  <div className={styles.productimagen}><img src={product.image} alt="" /></div>
                  
                  <div className={styles.productifocontainer}> <h1>{product.name} cd</h1> <p>{product.price} COP</p> <p>vendido por: {product.seller} </p> <p>{product.condition} </p></div>
                
              </div>
              </Link>
            ))
          )}

            
          </div>
        </div>
        














      </main>
    </div>
  );
}
