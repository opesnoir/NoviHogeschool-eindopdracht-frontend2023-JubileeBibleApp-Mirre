import React, {useEffect, useState} from 'react';
import BasicIntro from "../../components/BasicIntro/BasicIntro";
import {Form, Link} from "react-router-dom";
/*import styles from "../search/Search.module.css";*/
import styles from './Home.module.css';
import axios from "axios";
import TextBox from "../../components/TextBox/TextBox";
import SearchFormInput from "../../components/SearchFormInput/SearchFormInput";
import VideoBox from "../../components/VideoBox/VideoBox";

// api key
const API_KEY = process.env.REACT_APP_API_KEY

const Home = () => {

    const [bible, setBible] = useState();
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Jesus');

    //DUPLICAAT
    useEffect(() => {
        async function fetchData() {
            setError(false)
            try {
                setLoading(true)
                const response = await axios.get(`https://api.scripture.api.bible/v1/bibles`, {
                    // header data and api key
                    headers: {
                        'api-key': API_KEY,
                    },
                    //add params here
                    params: {}
                })
                console.log(response.data.data)
                setData(response.data.data)
            } catch (error) {
                console.error(error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        //invoke function
        void fetchData()
    }, [])

    return (
        <>
            <BasicIntro
                title="Zoek een Bijbelvers"
                introduction="Welkom op Jubilee BibleApp. Zoek hieronder een Bijbelvers op titel of steekwoord in ruim 40 vertalingen. Selecteer een Bijbel, voer een zoekterm in en druk op de button om de resultaten te bekijken"
            >
                {<form action="" className={styles.form}>
                    <label htmlFor="" className={styles.labelOuter}>
                        <label htmlFor="bible" className={styles.label}></label>
                        <select
                            className={styles.select}
                            name="bible"
                            id="bible"
                            value={bible}
                            onChange={(e) => setBible(e.target.value)}>
                            {data.map((b) => (
                                <option key={b.id} value={b.id}>
                                    {b.name}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="searchTerm" className={styles.label}></label>
                        <input
                            className={styles.input}
                            type="text"
                            name="searchTerm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}/>
                        <Link to="/search">
                            <button
                                className={styles.button}
                                type="submit"
                            >Zoeken
                            </button>
                        </Link>
                    </label>
                </form>}
            </BasicIntro>
            <section className={styles.section}>
                  <div className={styles.box}>
                <TextBox
                    className={styles.whiteBox}
                    title="Bijbeltekst van de dag"
                    text="insert hier dynamisch de Bijbeltekst"
                />
                  </div>
                <div className={styles.box}>
                <TextBox
                    className={styles.whiteBox}
                    title="De Bijbel"
                    text="Achtergrondinformatie"
                >
                {<button>Lees Meer</button>}
                </TextBox>
                    </div>
            </section>
            <hr/>
            <section className={styles.video}>
                <VideoBox
                    width="359"
                    height="206"
                    src="https://www.youtube.com/embed/XEjDiMjkVRo"
                    title="What is the Bible"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
                <VideoBox
                    width="359"
                    height="206"
                    src="https://www.youtube.com/embed/7_CGP-12AE0"
                    title="Story of the Bible"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
                <VideoBox
                    width="359"
                    height="206"
                    src="https://www.youtube.com/embed/takEeHtRrMw"
                    title="The New Humanity"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </section>
            <hr/>
            <section>
                <article>
                    <h3>Registratie</h3>
                    <p>Registreer als je Bijbelverzen wil opslaan als favoriet.</p>
                    <button>Registreer</button>
                </article>
                <div>
                    <img src="" alt=""/>
                </div>
                <article>
                    <h3>Aanmelden voor de nieuwbrief</h3>
                    <p>Op de hoogte blijven van ontwikkelingen en contact houden met Jubilee BibleApp? Meld je dan aan voor de nieuwsbrief.</p>
                    <form action="">
                        <label htmlFor="">aanmelden:</label>
                        <input type="email"/>
                    </form>
                    <button>Aanmelden</button>
                </article>
                <div>
                    <img src="" alt=""/>
                </div>
            </section>
            <hr/>
            



        </>
    );
};

export default Home;