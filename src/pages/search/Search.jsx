import React, {useState, useEffect} from 'react';
import axios from "axios";
import styles from "./Search.module.css";
import Image from "../../components/Image/Image";
import lamb from "../../assets/search-lamb-pexels-paul-seling-891607 copy.jpg";
import Pagination from "../../components/Pagination/Pagination";


// api key
const API_KEY = process.env.REACT_APP_API_KEY

const Search = () => {
// state variables:
    // data - list of Bibles, dropdown menu
    // error - for error while fetching data (boolean)
    // loading - for data currently fetched (boolean)
    // searchTerm - current search term user enters
    // Bible - for Bible currently selected by user
    // totalResults - total number of search results for searchTerm
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Jesus');
    const [searchResults, setSearchResults] = useState([])
    const [bible, setBible] = useState('english-standard-version');
    const [totalResults, setTotalResults] = useState(0);

    //async function to fetch a list of Bibles
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

    //function for form submit and search
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${bible}/search`, {
                headers: {
                    'api-key': API_KEY,
                },
                params: {
                    query: searchTerm,
                },
            });
            /*console.log(response.data.data);*/
            setSearchResults(response.data.data.verses);
            /*console.log(response.data.data.total)*/
            setTotalResults(response.data.data.total)
        } catch (error) {
            console.error(error)
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    // Pagination
    // state variables for the pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);
    // paginate through list of search results:
    // lastpost = index last post of current page
    // first post = index of first post of current page
    // slice methode gives back a new array containing the posts
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    // variable that should not be displayed yet
    const currentPost = searchResults.slice(firstPostIndex, lastPostIndex);


    return (
        <>
            <div className={styles.outerContainer}>
                <div className={styles.innerContainer}>
                    <div>
                        <form onSubmit={handleSearch} className={styles.formContainer}>
                            <label htmlFor="bible" className={styles.label}>Selecteer een Bijbel:</label>
                            <select
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
                            <label htmlFor="searchTerm" className={styles.label}>Voer een zoekterm in:</label>
                            <input
                                type="text"
                                name="searchTerm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}/>
                            <button type="submit">Zoeken</button>
                        </form>
                        {error &&
                            <span className={styles.errorTekst}>Er is een fout opgetreden: De Bijbeltaal en zoektermtaal dienen overeen te komen. {error.message}</span>}
                        <hr/>
                        {loading && <span className={styles.loadingTekst}>Loading...</span>}
                        {totalResults > 0 && (
                            <p className={styles.results}>Totaal aantal resultaten: <span
                                className={styles.resultsAmount}>{totalResults}</span></p>
                        )}
                        {currentPost.length > 0 && (
                            <ul className={styles.ul}>
                                {currentPost.map((result) =>
                                    <li key={result.id} className={`${styles.list} search-result-item`}>
                                        <span className={styles.reference}>{result.reference}</span>
                                        <span>{result.text}</span>
                                    </li>
                                )}
                            </ul>
                        )}
                        <Pagination
                            totalPost={searchResults.length}
                            postPerPage={postPerPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
            <Image
                src={lamb}
                alt="Afbeelding van schapen"
            />
        </>
    );
};

export default Search;