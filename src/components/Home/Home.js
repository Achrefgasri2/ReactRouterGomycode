import React from 'react'
import { useState } from 'react'
import MovieAdd from '../AddMovies/AddMovies.js';
import MovieList from '../MovieList/MovieList.js'
import Carousel from '../Carousel/Carousel.js'
const moviess = [
{
    id: 1,
    title: "Sonic Le Hérisson",
    description: "2020",
    posterURL: "https://img4.cdn.cinoche.com/images/6cd2554fc68dc17600c6ed795e8ed5d3.jpg",
    rating: "5",
    trailer:"https://www.youtube.com/embed/szby7ZHLnkA",
  },
  {
    id:2,
    title: "IP MAN 4",
    description: "2019",
    posterURL: "https://upload.wikimedia.org/wikipedia/ar/5/5d/Ip_Man_4_poster.png",
    rating: "5",
    trailer:"https://www.youtube.com/embed/oCBGTCNJW2g",
  },
  {
    id:3,
    title: "Home Alone 2 ",
    description: "1992",
    posterURL: "https://suarbarid.com/storage/home-alone-2-mtrgm/f0b1a92a1b8a/msh-hdh-othmyl-fylm-home-alone-2-lost-in-new-york-mg-n-fsh-r-fushaar.jpg",
    rating: "3",
    trailer:"https://www.youtube.com/embed/5h9VDUNtoto",
  },
  {
    id:4,
    title: "The Secret Life of Pets ",
    description: "2016",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@._V1_.jpg",
    rating: "4",
    trailer:"https://www.youtube.com/embed/i-80SGWfEjM",
  },

  {
    id:5,
    title: "Kung Fu Panda 3",
    description: "2016",
    posterURL: "https://imgsrc.cineserie.com/2016/08/1543363.jpg?ver=1",
    rating: "3",
    trailer:"https://www.youtube.com/embed/fGPPfZIvtCw",
  },
  {
    id:6,
    title: "Ninja Shadow Of A Tear ",
    description: "2013",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTA5MjI3NTE5NzleQTJeQWpwZ15BbWU4MDc2Mjg5ODAx._V1_.jpg",
    rating: "3",
    trailer:"https://www.youtube.com/embed/Dxmal-7WmyA",
  },
  {
    id:7,
    title: "Mr. Bean's Holiday ",
    description: "2007",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTM2NzQ1Mzc4M15BMl5BanBnXkFtZTcwNTk3NjA1MQ@@._V1_FMjpg_UX1000_.jpg",
    rating: "4",
    trailer:"https://www.youtube.com/embed/hSxLUd8aly4",
  },
  { 
    id:8,
    title: "Scooby-Doo The-Movie ",
    description: "2002",
    posterURL: "https://images.moviesanywhere.com/00000e4e3cd05eab110e77008062a9f8/89e0779f-d2c4-4859-9974-7b68bb973932.jpg",
    rating: "4",
    trailer:"https://www.youtube.com/embed/o3dbeI0BU1k",
  },



  {
    id:9,
    title: "Next Gen",
    description: "2018",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTU0MjAwMDkxNV5BMl5BanBnXkFtZTgwMTA4ODIxNjM@._V1_.jpg",
    rating: "2",
    trailer:"https://www.youtube.com/embed/uf3ALGKgpGU",
  },
  {
    id:10,
    title: "The Dark Knight ",
    description: "2008",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    rating: "2",
    trailer:"https://www.youtube.com/embed/EXeTwQWrcwY",
  },

  {
    id:11,
    title: "Alvin And The Chipmunks The Squeakquel ",
    description: "2009",
    posterURL: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/16c2f7c8062753cc80d61f0c87652c0a3ca1734c074b6cd41703d6135376e3c7._RI_V_TTW_.jpg",
    rating: "5",
    trailer:"https://www.youtube.com/embed/HwVzCtRvcyY",
  },
  {
    id:12,
    title: "Spider-Man HomeComing ",
    description: "2017",
    posterURL: "https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_FMjpg_UX1000_.jpg",
    rating: "5",
    trailer:"https://www.youtube.com/embed/n9DwoQ7HWvI",
  },
  {
    id:13,
    title: "Rise of the Guardians",
    description: "2012",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_.jpg",
    rating: "1",
    trailer:"https://www.youtube.com/embed/aPLiBxhoug0",
  },

  {
    id:14,
    title: "Ninja Turtles 2 ",
    description: "2016",
    posterURL: "https://dvdtoile.com/FILMS/72/72872.jpg",
    rating: "5",
    trailer:"https://www.youtube.com/embed/HeaugHGd1Kw",
  },
  {
    id:15,
    title: "Ride Along",
    description: "2014",
    posterURL: "https://old.akwam.link/files/1450191003.jpg",
    rating: "2",
    trailer:"https://www.youtube.com/embed/5klp6rkHIks",
  },
  {
    id:16,
    title: "Pokemon Detective Pikachu",
    description: "2019",
    posterURL: "https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_.jpg",
    rating: "5",
    trailer:"https://www.youtube.com/embed/1roy4o4tqQM",
  },
];
const Home = () => {
    const [title, setTitle] = useState("");
    const [rate, setRate] = useState(0);
  
  
    const [movies, setMovies] = useState(moviess)
    return (
        <div>
            <Carousel /> 
            <div className="Container">
        <MovieList movies={movies}  title={title}  rate={rate}/>
      </div>
      <MovieAdd movies={movies} setMovies={setMovies} />
        </div>
    )
}

export default Home
