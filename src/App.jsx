import React,{useState} from 'react'
import Result from './components/Result'
import axios from 'axios'

const App = () => {
  const [movies, setMovies] = useState([]);
  return (
    <div className='max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3'>
      <input type="search" className='w-full border border-black rounded text-slate-400 p-4' />
      <Result movies={movies}/>
    </div>
  )
}

export default App