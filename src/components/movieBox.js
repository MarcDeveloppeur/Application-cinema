import React from 'react';
import './componentsCss/movieBox.css';

function MovieBox(props) {
    const APIimage="https://image.tmdb.org/t/p/w1280";
  return (
    <div className="boxContainer">
          <img src={props.imageUrl} alt="image d'un film" className="imageBox"/>
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
