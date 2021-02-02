import React from 'react';
import './componentsCss/movieBox.css';

function MovieBox(props) {
    const APIimage="https://image.tmdb.org/t/p/w1280";
  return (
    <div className="boxContainer">
          <img src={props.pathImage?(APIimage+props.pathImage):"https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"} alt="image d'un film" className="imageBox"/>
          <div className="about">
               <p className="movieTitle">
                   {props.title}
               </p>
               <p className={props.note<4?'bad movieNote':props.note>7?'good movieNote':'enaugh movieNote'}>
                   {props.note}
               </p>
          </div>
          <div className="movieDescription">
                    <p className="description">  {props.description}</p>
          </div>
    </div>
  );
}

export default MovieBox;
