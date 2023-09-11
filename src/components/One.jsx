import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const One = ({movie}) => {
const navigate=useNavigate()
const  id = useParams();
const [film,setfilm]=useState({})
useEffect(()=>{
const movieDetails =moviedata.find(el=>el.id===id)
setfilm(movieDetails)
},[id])

  return (
    <div>
      <p>{film.description}</p>
      <iframe src={film.tariler} ></iframe>
      <button  onClick={()=>navigate("/")}>go back</button>
    </div>
  )
}

export default One
{}