const MOVIES =[{
    id:0,
    category:'Action',
},{
    id:1,
    category:'Drama',
    
},{
    id:2,
    category:'Romance',
},{
    id:3,
    category:'Thriller',
},{
    id:4,
    category:'Western',
},{
    id:5,
    category:'Horror',
},{
    id:6,
    category:'Fantasy',
},{
    id:7,
    category:'Fiction',
},{
    id:8,
    category:'Music',
},];
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import Box from "./Box/Box.jsx";
import Chip from "./Box/Chip.jsx";
import warning from '../../assets/Vector.png'

export default function Genre(){
    const navigate  = useNavigate();
    const [selectedMovie,setSelectedMovie] = useState([]);
    function handleNavigate(){
       if (selectedMovie.length <3) return;
       localStorage.setItem("selectedMovies",JSON.stringify(selectedMovie));
        navigate('/movies');
    }
    console.log(selectedMovie);
    return(
        <div className=' flex flex-row'>
            <div className='basis-2/5 p-20 ' >
                <h1 className="font-single text-6xl text-[#72DB73]" > Super app</h1>
                <p className='font-roboto my-11 text-6xl font-bold '>Choose your entertainment category</p>
                <div class='flex flex-row gap-4'> 
                    {selectedMovie.length > 0 ? selectedMovie.map((movie,index)=>{
                        return(
                            <Chip 
                                selectedMovie={movie}
                                setSelectedMovie={setSelectedMovie}
                                key={index} 
                                
                            />
                        );
                    } ): null}
                    
                </div>
                <p className='text-[#FF0000] font-roboto text-lg my-11 flex gap-4 items-center ' >
                    {selectedMovie.length < 3 ? <img src={warning} alt="error" />:null }
                    {selectedMovie.length < 3 ? " Minimum 3 category required":null }
                </p>
            </div>
            
            <div className='basis-3/5  grid grid-cols-3 gap-x-2 gap-y-2' >
                {MOVIES.map((movie)=>{
                    return <Box 
                      selectedMovie={selectedMovie} 
                      setSelectedMovie={setSelectedMovie} 
                      key={movie.id} data={movie} />
                })}

            </div>
            <button className=' text-white w-max py-2 px-5 text-lg font-DmSans rounded-full bg-[#148A08] fixed bottom-14 right-28' onClick={handleNavigate}>Next Page</button> 
        </div>
    )
}