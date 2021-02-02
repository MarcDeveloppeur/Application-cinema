import React,{useState,useEffect} from 'react';
import './style/style.css';
import MovieBox from './components/movieBox';


const movies=[
     {
       imageUrl:"./assets/Lighthouse.jpg",
       title:'Premier film',
       note:4,
       description:"bla bla bla bla bla ffffffffffff ffffffffffffff fffffffffff ffffffffffffff hhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhh hhhhhhhhhh eeeeeeeeeeee eeeeeeeeeee eeeeeeeeeee eeeeeeee eeeeeeeeeeee eeeeeeeeeeeee"
    },
    {
      imageUrl:"./assets/Lighthouse.jpg",
      title:'le dernier train pour boussan episode 2 partie 1 episode 1 et demi',
      note:8,
      description:"bla bla bla bla bla"
   },
   {
     imageUrl:"./assets/Lighthouse.jpg",
     title:'Premier film',
     note:4,
     description:"bla bla bla bla bla ffffffffffff ffffffffffffff fffffffffff ffffffffffffff hhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhh hhhhhhhhhh eeeeeeeeeeee eeeeeeeeeee eeeeeeeeeee eeeeeeee eeeeeeeeeeee eeeeeeeeeeeee"
  },
  {
    imageUrl:"./assets/Lighthouse.jpg",
    title:'Premier film',
    note:4,
    description:"bla bla bla bla bla ffffffffffff ffffffffffffff fffffffffff ffffffffffffff hhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhh hhhhhhhhhh eeeeeeeeeeee eeeeeeeeeee eeeeeeeeeee eeeeeeee eeeeeeeeeeee eeeeeeeeeeeee"
 },
 {
   imageUrl:"./assets/Lighthouse.jpg",
   title:'Premier film',
   note:4,
   description:"bla bla bla bla bla ffffffffffff ffffffffffffff fffffffffff ffffffffffffff hhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhh hhhhhhhhhh eeeeeeeeeeee eeeeeeeeeee eeeeeeeeeee eeeeeeee eeeeeeeeeeee eeeeeeeeeeeee"
},
{
  imageUrl:"./assets/Lighthouse.jpg",
  title:'Premier film',
  note:2,
  description:"bla bla bla bla bla ffffffffffff ffffffffffffff fffffffffff ffffffffffffff hhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhh hhhhhhhhhh eeeeeeeeeeee eeeeeeeeeee eeeeeeeeeee eeeeeeee eeeeeeeeeeee eeeeeeeeeeeee"
},
]
function App() {
  const [search,setSearch]=useState("");
  const [data,setData]=useState([]);

  //Afficher tous les nouveautés lorsque la page est chargée

   useEffect(()=>{
     fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
     .then((res)=>res.json())
     .then((resultat)=>{
       setData(resultat.results);
       console.log(resultat.results);
       console.log(resultat.backdrop_path);
     });
   },[]);

//rechercher les films avec l'api de themoviedb quand on clique sur le bouton recherche

  const rechercher=(e)=>{
    e.preventDefault();
    fetch('https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='+search)
    .then((res)=>res.json())
    .then((data)=>{
      setData(data.results);
    })
  }
  return (
    <div className="container">
        <div className="navigateur">
            <form onSubmit={rechercher}>
                 <input type="text" className="barRecherche" placeholder="Recherche" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                 <button type="submit" className="searchButton"><i className="fa fa-search"></i></button>
             </form>
        </div>
        <div className="containtBlock">
            {data.map((movie,id)=><MovieBox key={id} pathImage={movie.poster_path} title={movie.original_title} note={movie.vote_average} description={movie.overview}/>)}
        </div>
    </div>
  );
}

export default App;
