/**
 * Componet que represnt une card
 */
import react from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css";
export default function Card(props){

    return (

    <div className={"card"} >
        <img className={"card-img-top"} src={props.image}  alt={"Card image cap"} />
            <div className={"card-body"}>
                <h5 className={"card-title"}>{props.title}</h5>
                <p className={"card-text"}>{props.description}</p>
                <a href={"#"} className={"btn btn-primary"}>Afficher Props</a>
            </div>
        </div>
    )
}