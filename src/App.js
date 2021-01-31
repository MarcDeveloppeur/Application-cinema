import React,{useState} from 'react';
import './style/style.css';
import MovieBox from './components/movieBox';


const movies=[
     {
       imageUrl:"./assets/Lighthouse.jpg",
       title:'Premier film',
       note:4,
       description:"bla bla bla bla bla"
    },
    {
      imageUrl:"./assets/Lighthouse.jpg",
      title:'le dernier train pour boussan episode 2 partie 1 episode 1 et demi',
      note:8,
      description:"bla bla bla bla bla"
   }
]
function App() {
  const [search,setSearch]=useState("");

  const rechercher=(e)=>{
    e.preventDefault();
    console.log('salut!!')
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
            {movies.map((movie,id)=><MovieBox key={id} imageUrl={movie.imageUrl} title={movie.title} note={movie.note} description={movie.description}/>)}
        </div>
    </div>
  );
}

export default App;
