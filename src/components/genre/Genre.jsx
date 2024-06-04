const MOVIES =[{
    id:0,
    category:'Action',
    color:'#FF5209',
    image:'image1'
},{
    id:1,
    category:'Drama',
    color:'#D7A4FF',
    image:'image2'

    
},{
    id:2,
    category:'Romance',
    color: '#148A08',
    image:'image3'

},{
    id:3,
    category:'Thriller',
    color: '#84C2FF',
    image:'image4'

},{
    id:4,
    category:'Western',
    color: '#902500',
    image:'image5'

},{
    id:5,
    category:'Horror',
    color: '#7358FF',
    image:'image6'

},{
    id:6,
    category:'Fantasy',
    color: '#FF4ADE',
    image:'image7'

},{
    id:7,
    category:'Fiction',
    color: '#E61E32',
    image:'image8'

},{
    id:8,
    category:'Music',
    color: '#6CD061',
    image:'image9'

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
        <div className=' flex flex-row h-[100vh] bg-black items-center justify-center' >
            <div className='basis-2/5/ pl-32 xl:pl-36  ' >
                <h1 className="font-single text-6xl text-[#72DB73] font-medium 2xl:mt-5 2xl:mb-12  " > Super app</h1>
                <p className='font-roboto w-[500px]  text-5xl font-bold text-white mb-10 leading-[70px]  2xl:text-6xl 2xl:leading-[80px]  '>Choose your entertainment category</p>
                <div className='flex flex-row gap-4 flex-wrap 2xl:w-[400px]'> 
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
                    {selectedMovie.length <= 3 ? <img src={warning} alt="error" />:null }
                    {selectedMovie.length <= 3 ? " Minimum 3 category required":null }
                </p>
            </div>
            <div className='basis-3/5 justify-center items-center relative '>
               <div className='flex flex-row-3  flex-wrap w-[600px] gap-x-6 gap-y-5 justify-center 2xl:ml-[8vw] max-2xl:w-[800px]  ' >
                    {MOVIES.map((movie)=>{
                        return <Box 
                        selectedMovie={selectedMovie} 
                        setSelectedMovie={setSelectedMovie} 
                        key={movie.id} data={movie}
                        
                        />
                    })}

                </div>
                
            </div>
            <button className=' text-white w-max py-2 px-5 text-lg font-DmSans rounded-full bg-[#148A08] fixed bottom-[5vh] right-[12vw]' onClick={handleNavigate}>Next Page</button> 
        </div>
    )
}