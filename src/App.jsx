import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from './components/forms/Form'
import Genre from "./components/genre/Genre"
import Info from "./components/info/Info"
import Movies from "./components/movies/Movies"
import NotFound from "./components/notfound/NotFound"

// import './App.css'

function App() {
return(
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Form/>}/>  
       <Route path='/Genre' element={<Genre/>}/> 
       <Route path='/Info' element={<Info/>}/> 
       <Route path='/Movies' element={<Movies/>}/> 
       <Route path='*' element={<NotFound/>} />
     </Routes> 
   </BrowserRouter>  
)
}

export default App
