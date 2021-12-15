/**
 * Componet que represnt une grille de Cards
 */
import react from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css";
import Card from "./Card"
export default function Grid(props){

    /**
     * Props a envoyer
     * Adresse Image
     * Titre
     * description
     * Prix
     *
     */


    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "} /></div>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "}/></div>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "}/></div>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "}/></div>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "}/></div>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "}/></div>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "}/></div>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "}/></div>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "}/></div>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "}/></div>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "}/></div>
                <div className={"col-lg-2"}><Card description={"Avec ses deux amis Diggy et Jibs, ils jonglent entre musique, lycée et entretiens pour entrer à l'université. Une invitation à une s "}/></div>
            </div>
        </div>
    )
}