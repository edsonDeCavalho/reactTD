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

    const elements = [1, 2, 3, 4, 5, 4, 7, 8, 9, 10, 11, 12];
    const newdata = films.map((data) => {
            return (
                <div  key={data.id} className={"col-lg-2"}><Card title={data.title}  description={"Avec ses deux amies"} note={data.vote_average}/></div>
            )
        }
    )
    return(<div className={"container"}>
        <div className={"row"}>
            {newdata}
        </div>
    </div>
    )

}