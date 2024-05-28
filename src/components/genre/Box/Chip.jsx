

export default function Chip({selectedMovie,setSelectedMovie}) {
 function removeSelection(){
    setSelectedMovie((prev)=>prev.filter((item)=>item !== selectedMovie));
 }
  return (
    <div class="text-white text-lg bg-[#148A08] rounded-[31px] w-max px-5 py-2 font-roboto" >
          <span>{selectedMovie} &nbsp; &nbsp; <span className='cursor-pointer' onClick={removeSelection}>X</span></span>
    </div>
  )
}


