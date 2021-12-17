/**
 * Componet que represnt une card
 */
import react from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css";



export default function Card(props) {
    const showPros = (e) => {
        console.log(props.title)
        console.log(props.description)
        console.log(props.note)
    }
    return (

        <div className={"card"} >
            <div className={"card-body"}>
                <img className={"card-img-top"} src="../public/" alt={"Card image cap"}/>
                <h5 className={"card-title"}>{props.title}</h5>
                <p className={"card-text"}>{props.description}</p>
                <p className={"card-text"}>Note : {props.note}</p>
                <buuton onClick={(e) => showPros(props)} className={"btn btn-primary"}>Afficher Props</buuton>
            </div>
        </div>
    )
}