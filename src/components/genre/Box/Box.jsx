import image1 from './Images/1.png'



export default function Box({data,selectedMovie,setSelectedMovie}) {

    function handleSelection(){
        if(selectedMovie.includes(data.category)){  // if this movie is already added just filter it out 
            setSelectedMovie(selectedMovie.filter((item)=>item !== data.category))
        }else{//if not selected add it to the state
            setSelectedMovie((prev)=>[...prev,data.category]);
        }
    }
    
  return (
    <div style={{borderColor:`${selectedMovie.includes(data.category) ? 'green':'black'}`,backgroundColor:data.color}}
      className=" border-4 rounded-xl text-[white]  text-2xl p-3 h-[161px] w-[10.5vw] relative -[1600px]:h[250px]"
      onClick={handleSelection}
      id="color_box"
    > 
      <p>{data.category}</p>
      {/* {handleImage} */}
      <img src={image1} alt="error" className="  mt-4 flex items-center   " />
    </div>
  );
}

