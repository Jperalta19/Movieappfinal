import React from 'react'

function LastPost(props) {

    const last10Movies = props.movies.slice(-3).reverse();
return (   
    <>
      <h2 className="mb-3">Last 3 Published Movies</h2>
        <ul className="list-group list-group-horizontal" >
          {last10Movies.map( (movie) => (
            <li key={movie.imdbID} className="list-group-item">
            <div className='card' style={{ width: '8rem' }}>
            <img src={movie.Poster} className='card-img-top' alt="imagen"/>
            <div className='card-body'>
              <p className='card-title fs-6'>{movie.Title}</p>
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

export default LastPost
