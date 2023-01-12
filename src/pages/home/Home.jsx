import React, {useState} from 'react';
import FormInput from "../../components/FormInput/FormInput";
import BasicIntro from "../../components/BasicIntro/BasicIntro";
import {useForm} from "react-hook-form";


const Home = () => {

    return (
        <>
            <BasicIntro
                title="Zoek een Bijbelvers"
                introduction="Welkom op Jubilee BibleApp. Zoek hieronder een Bijbelvers op titel of steekwoord in ruim 40 vertalingen."
            >
                {

                }

            </BasicIntro>


            <section>
                <article>


                </article>
            </section>
            <hr/>
            <section>
                <article>
                    <h2>Bijbeltekst van de dag</h2>
                    <p>insert hier dynamisch de Bijbeltekst</p>
                    <img src="" alt=""/>
                </article>
                <article>
                    <h2>De Bijbel</h2>
                    <p>Achtergrondinformatie</p>
                    <img src="" alt=""/>
                    <button>Lees Meer</button>
                </article>
            </section>
            <hr/>
            <section>
                <article>
                    <a href="">link naar youtubevideo1</a>
                    <h4>Youtube</h4>
                    <p>Videotitel</p>
                </article>
                <article>
                    <a href="">link naar youtubevideo2</a>
                    <h4>Youtube</h4>
                    <p>Videotitel</p>
                </article>
                <article>
                    <a href="">link naar youtubevideo3</a>
                    <h4>Youtube</h4>
                    <p>Videotitel</p>
                </article>
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