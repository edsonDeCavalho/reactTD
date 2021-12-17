/**
 * Componet que represnt une grille de Cards
 */
import react from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css";
import films from "./data/films2.json";
import Card from "./Card"
import React from "react";
export default function Grid(props) {

    /**
     * Props a envoyer
     * Adresse Image
     * Titre
     * description
     * Prix
     *
     */
    const newdata = films.map((data) => {
            return (
                <div  key={data.id} className={"col-lg-3"}><Card title={data.title}  description={data.overview} note={data.vote_average}/></div>
            )
        }
    )
    return(
            newdata
    )

}