/**
 * Exercice 1 TD React
 * Edson De Carvalho
 */
import {Navbar} from "react-bootstrap";
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../components/Card";
import Grid from "../components/Grid";
import eDNavBar from "../components/navBar";






export default function Home() {
    /**
     * Declaration des variable
     */
    const [count,setCount]=useState(0)
    const [todoList,setTodoList] = useState([])
    const [inter,setInter] = useState(" ")
    const [disable,setDisable]= useState(true);
    const [editableTodo,setEditableTodo]=useState(null);
    /**
     * Fuction pour desable un input text
     * @param item
     * @param index
     */
    const  editTask =(item,index) => {
        setEditableTodo(index)
    }
        const hanleChange = (e) => {
            let newTodoList = [...todoList]
            newTodoList[editableTodo] = e.target.value
            setTodoList(prevArray => [...prevArray,e.target.value])
            setTodoList(newTodoList)
    }
    /*Utilisation de useEffect*/
    useEffect(()=> {
        console.log("modification")
    },[todoList]);

    useEffect(()=> {
        localStorage.setItem("todos",todoList)
        let historique = localStorage.getItem("todos")
    },[todoList]);
    return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className="container">
              <div className="row">
                  <div className={"col-xs-12"}>
                      <nav className={"navbar navbar-light bg-light justify-content-between"}>
                          <a className={"navbar-brand"}>React Edson</a>
                          <form className={"form-inline"}>
                              <button className={"btn btn-outline-success my-2 my-sm-0"} >Login</button>
                          </form>
                      </nav>
                  </div>
              </div>
              <div className={"row"}> <Grid /></div>
          </div>
      </main>

    </div>
  )
}
