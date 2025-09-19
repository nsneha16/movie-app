import React, {useEffect, useLayoutEffect, useState } from 'react'
import Search from './components/search';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';

const API_BASE_URL='https://api.themoviedb.org/3';
const API_KEY= import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS={
    method:'GET',
    headers:{
        accept:'application/json',
        Authorization:`Bearer ${API_KEY}`
    }
}

const App = () =>{

    const [searchTerm, setsearchTerm]=useState('');
    const [errorMessage, setErrorMessage]=useState('');
    const [movieList, setmovieList]=useState([]);
    const [isLoading, setisLoading]=useState(false);

    const fetchMovies=async()=>{
        setisLoading(true);      //start loading
        setErrorMessage('');     //no erroe msg
         
        const randompage=Math.floor(Math.random()*20)+1;
        const randomyear=Math.floor(Math.random()*5)+2019;
        console.log(randomyear);
        try{
            // const endpoint=`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`; //exact url path diya h
            // const endpoint=`${API_BASE_URL}/discover/movie`;
            const endpoint=`${API_BASE_URL}/discover/movie?sort_by=popularity.desc&page=${randompage}&primary_release_year=${randomyear}`;
            const response=await fetch(endpoint, API_OPTIONS);    //tmdb ke server ko rqst bhej rhe h with api_options ki bhyi grt rqst kr rhe
            // alert(response, response.status);

            if (!response.ok){
                throw new Error('falied to fetch movies');
            }

            const data=await response.json();
            console.log(data);

            if(data.response=== 'False'){
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setmovieList([]);
                return;

            }
            setmovieList(data.results || []);
            
        }
        catch(error){
            console.log(`ERROR FETCHING MOVIES: ${error}`);
            setErrorMessage(" :( plz try again!");
            console.log(API_KEY);
        }
        finally{
            setisLoading(false);   //stop the loading
        }

    }

    useEffect(()=>{
        fetchMovies();

    }, []);

    return(
        <main>
            <div className='pattern' />
            <div className='wrapper'>
                <header>
                    {/* <img style={{width:'100px'}} src="public\logo.jpg" alt="" /> */}
                    <img style={{width:'400px'}} src="./hero.png" alt="Hero Banner" />
                    <h1>All the <span className='text-gradient'> Movies </span>You, love at one place</h1>
                    <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
                    {/* <h1 className='text-white'>{searchTerm}</h1> */}
                </header>

                <section className='all-movies'>
                    <h2 className='text-white'>ALL MOVIES</h2>
                    

                    {isLoading? <Spinner/>                 
                        : errorMessage?(<p className='text-red-700'>{errorMessage}</p>) 
                        : (<ul>
                            {movieList.map((movie)=>(
                                
                                <MovieCard key={movie.id} movie={movie}/>

                            ))}
                        </ul>
                        )
                    }

                </section>
                
                
                
            </div>
            
        </main>
    )
}

export default App;