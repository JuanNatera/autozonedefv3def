"use client"
import Image from "next/image";
import "../forms/searchformstyles.css";
import { useForm } from "react-hook-form";
import {getProductsSearch} from "../lib/productsapi";
import { useRouter } from "next/navigation";

export function SearchForm(){

    const{ register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {

        const query = data.Searchparm;
        router.push(`/productsearch?name=${encodeURIComponent(query)}`);
      });

    return(
        <form id="searchform" onSubmit={onSubmit}>
            <button><Image className="searchitem1" src="/search.png" alt="lupa" width={25} height={25} /></button>
            <input className="searchitem1" id="inputsearch" type="text" placeholder="Buscar" {...register('Searchparm')}/>
        </form>
    );
}

