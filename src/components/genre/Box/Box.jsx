
export default function Box({data,selectedMovie,setSelectedMovie}) {
    function handleSelection(){
        if(selectedMovie.includes(data.category)){  // if this movie is already added just filter it out 
            setSelectedMovie(selectedMovie.filter((item)=>item !== data.category))
        }else{//if not selected add it to the state
            setSelectedMovie((prev)=>[...prev,data.category]);
        }
    }
  return (
    <div style={{
        border:`4px solid ${selectedMovie.includes(data.category) ? 'green':'black'}`,
        padding: '10px',
        margin:'10px',
        width:'100px',
        height:'100px',
        display:'inline-block',
        color:'black'
      }}
      onClick={handleSelection}
    >
      {data.category}
    </div>
  );
}

