import React, {useState} from 'react'

const AllMovies = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

     //Filter movies based on search term
  const filteredMovies = props.movies.filter(movie =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    //Clear search funtion
    const handleClearSearch = () =>{
      setSearchTerm('')   
    }
  return (
    <>
    <h2 className="mb-3">All Movies</h2>
        <div className="mb-3 d-flex">
        <input
            type="text"
            className="form-control"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
        className='btn btn-danger'
        type='button'
        onClick={handleClearSearch}
        disabled={!searchTerm}>
        Clear
        </button>
        </div>
        <ul className="list-group">
        {filteredMovies.map((movie) => (
            <li key={movie.imdbID} className="list-group-item bg-transparent ">
            <div className='card mt-5 ' style={{ width: '20rem' }}>
            <img src={movie.Poster} className='card-img-top' alt="imagen"/>
            <div className='card-body'>
              <h5 className='card-title'>{movie.Title}</h5>
              <p></p>
              <a href='/' className='btn btn-primary'>Wacth</a>
            </div>
            </div>
            </li>
          ))}
        </ul>
      
    </>
  )
}

export default AllMovies
