import react from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css";
import Card from "./Card"
import React from "react";

export default function eDNavBar(props){
    return ( <div className={"col-xs-12"}>
        <nav className={"navbar navbar-light bg-light justify-content-between"}>
            <a className={"navbar-brand"}>Navbar</a>
            <form className={"form-inline"}>
                    <button className={"btn btn-outline-success my-2 my-sm-0"} >Search</button>
            </form>
        </nav>
        </div>)
}