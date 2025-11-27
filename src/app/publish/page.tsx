"use client"

import Navbar from "@/components/navbar";
import Image from "next/image";
import styles from "../publish/publish.module.css";
import {SearchForm} from "../forms/search-form"
import {useForm} from 'react-hook-form'
import {createProduct} from "../lib/productsapi";
export default function PublishPage() {

  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit(async data => {
    
    alert(`" ${data.productitle} " publicado correctamente`);
    const newProduct = {
      name: data.productitle,
      price: parseInt(data.producprice),
      brand: data.producbrand,
      condition: data.produccond,
      seller: data.producseller,
      description: data.producdesc,
      image: data.imagelink,
    };

    console.log(newProduct)

    await createProduct(newProduct)

  })

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div id={styles.searchbar}>
          <div id={styles.searchitems}><SearchForm/></div>
        </div>

        <div id={styles.publishcontainer}>

          <form onSubmit={onSubmit}>
            <h1>Publica ahora</h1>

            <div id={styles.uploadform}>
              <p>Sube tu imagen</p>
              <input type="text"  required {...register('imagelink')}/>

              <p>Titulo de producto</p>
              <input type="text" required {...register('productitle')}/>

              <p>Descripción</p>
              <input type="text"  {...register('producdesc')}/>

              <p>Vendedor</p>
              <input type="text"  {...register('producseller')}/>

              <p>Marca</p>
              <input type="text"  {...register('producbrand')}/>

              <p>Condición</p>
              <select id="miSelect" required {...register('produccond')}>
                <option value="">Condición actual</option>
                <option value="used">Usado</option>
                <option value="new">Nuevo</option>
                <option value="refurbished">Reacondicionado</option>
              </select>

              <p>Precio</p>
              <input type="number" min={0} required {...register('producprice')}/>
              <div>
                <button>Publicar</button>
              </div>  

            </div>

          </form>

         
          


        </div>
        


        













      </main>
    </div>
  );
}
