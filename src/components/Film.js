import React from 'react'
import '../App.css';
function Film(props) {
  return (
    <div className='Movie'>
    <img src={props.Poster} alt="" srcset="" />
    <p>{props.Title}</p>
    <p>{props.Year}</p>
    <p>{props.Runtime}</p>
  
    </div>
  )
}

export default Film