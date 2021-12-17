Skip to content
Pull requests
Issues
Marketplace
Explore
@edsonDeCavalho
edsonDeCavalho /
reactTD
Public

Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights

Settings

reactTD / pages / index.js /
@edsonDeCavalho
edsonDeCavalho Creation d 'un component Grid pour mettre des cards.
Latest commit a2ee50d 2 days ago
History
1 contributor
98 lines(89 sloc) 3.16 KB
/**
 * Exercice 1 TD React
 * Edson De Carvalho
 */

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../components/Card"
import Grid from "../components/Grid";





export default function Home() {
    /**
     * Declaration des variable
     */
    const [count, setCount] = useState(0)
    const [todoList, setTodoList] = useState([])
    const [inter, setInter] = useState(" ")
    const [disable, setDisable] = useState(true);
    const [editableTodo, setEditableTodo] = useState(null);
    /**
     * Fuction pour desable un input text
     * @param item
     * @param index
     */
    const editTask = (item, index) => {
        setEditableTodo(index)
    }
    const hanleChange = (e) => {
        let newTodoList = [...todoList]
        newTodoList[editableTodo] = e.target.value
        setTodoList(prevArray => [...prevArray, e.target.value])
        setTodoList(newTodoList)
    }
    /*Utilisation de useEffect*/
    useEffect(() => {
        console.log("modification")
    }, [todoList]);

    useEffect(() => {
        localStorage.setItem("todos", todoList)
        let historique = localStorage.getItem("todos")
    }, [todoList]);
    return ( <
        div className = { styles.container } >
        <
            Head >
            <
                title > Create Next App < /title> <
            meta name = "description"
                 content = "Generated by create next app" / >
            <
                link rel = "icon"
                     href = "/favicon.ico" / >
        <
        /Head>

        <
            main className = { styles.main } >
            <
                div classNme = { styles.header } >
                <
                    h1 className = { styles.title } >
                    Hello Edson <
        /h1> <
        /div> <
            h3 > count: { count } < /h3> <
            button onClick = {
            () => setCount(count + 1) } > Button < /button> <
            input type = "text"
                  onChange = { event => setInter(event.target.value) }
        /> <
            button onClick = {
            () => setTodoList([...todoList, inter]) } > Button < /button>

            { /*Boucle d'affichage de elemnts*/ } {
            todoList.length > 0 && (
                todoList.map((todo, i) => {
                    return ( <
                        div key = { i } >
                        <
                            p > { todo } < /p> <
                        input type = 'text'
                              onChange = { e => hanleChange(e) }
                              value = { todo }
                              disabled = { editableTodo === i ? false : true }
                    /> <
                        button onClick = {
                        () => editTask(todo, i) } > Edit < /button> <
                        button onClick = {() => setTodoList(prevArray => prevArray.filter(item => prevArray.indexOf(item) !== i)) } > Supprimer < /button> <
                            /div>)
                }))
        } <
            Card title = { "Edson" }
                 description = { "Edson trés cool" }
                 image = "icon.png" / >
            <
                Grid / >
        <
                /main> <
        footer className = { styles.footer } >
        <
            a
            href = "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target = "_blank"
            rel = "noopener noreferrer" >
            Powered by { ' ' } <
            span className = { styles.logo } >
                <
                    Image src = "/vercel.svg"
                          alt = "Vercel Logo"
                          width = { 72 }
                          height = { 16 }
                /> <
            /span> <
            /a> <
            /footer> <
            /div>
)
}

©
2021 GitHub, Inc.

Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About

Loading complete


/**
* Componet que represnt une grille de Cards
*/
import react from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css";
import films from "./data/films.json";
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

        const elements = [1,2,3,4,5,4,7,8,9,10,11,12];

        return (
            <div className={"container"}>

                <div className={"row"}>
                    {elements.map((value, index) => {
                        return <div key={index} className={"col-lg-2"}><Card title={index} description={"Avec ses deux amies"}  note={index}/></div>
                    })}

                </div>

            </div>
        )
    }