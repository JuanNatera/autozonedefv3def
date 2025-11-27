import Navbar from "@/components/navbar";
import Image from "next/image";
import styles from "../user/user.module.css";
import {SearchForm} from "../forms/search-form"

export default function CartPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div id={styles.searchbar}>
          <div id={styles.searchitems}><SearchForm/></div>
        </div>


        <div id={styles.userinfocontainer}>
          <h1>Información de la cuenta</h1>
          <div id={styles.infodiv}>
            <p>Dirección o lugar de entrega</p>
            <input type="text" placeholder="Calle 45g #14" />
            <div id={styles.locationinfo}>
              <input type="text" placeholder="Atlántico" />
              <input type="text" placeholder="Barranquilla" />
              <input type="text" placeholder="Cevillar" />
            </div>
            <p>Apartamento</p>
            <input type="text" placeholder="101" />
            <p>Datos adicionales</p>
            <input type="text" placeholder="Edificio amarillo" />
          </div>
          <h1>Datos de contacto</h1>
          <div id={styles.contactinfo}>
            <p>Nombre y apellido</p>
            <input type="text" placeholder="Roberto Char" />
            <p>Telefono</p>
            <input type="text" placeholder="3190779790" />
          </div>
          

        </div>
        
        


        













      </main>
    </div>
  );
}
