

export default function Chip({selectedMovie,setSelectedMovie}) {
 function removeSelection(){
    setSelectedMovie((prev)=>prev.filter((item)=>item !== selectedMovie));
 }
  return (
    <div className ="text-white text-lg bg-[#148A08] rounded-[31px] w-max px-5 py-2 font-roboto 2xl:text-2xl" >
          <span>{selectedMovie} &nbsp; <span className='cursor-pointer' onClick={removeSelection}>x</span></span>
    </div>
  )
}


