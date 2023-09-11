import { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import moviesData from "../Data";

const One = ({movies}) => {

  const navigate = useNavigate();
  let {id} = useParams()
 const [film,setFilm]=useState({})
console.log(film)
useEffect((movies)=>{
    const movieDetails = moviesData.find((el)=>el.id==id)
    setFilm(movieDetails)

}
,[id]
)
  return (
    <div>


<div>
<link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet"/>

<div id="title">
<h1> {film.title} Movie trailer</h1>
</div>
  
<div id="center">
<img src="https://jpsentry.net/wp-content/uploads/2018/01/487619252.jpg"/>
</div>

<div id="video">
<iframe width="220" height="120" src={film.trailer} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


<button onClick={()=>navigate('/')}>Home</button>
    </div>
</div>

</div>

  )
}

export default One