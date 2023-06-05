import axios from 'axios'
import React, { useState, useEffect } from 'react'

const DataFetch = () => {
  const [posts, setPost] = useState([])
  const [limit, setLimit] = useState(20)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res.data)
        setPost(res.data)
      })

      .catch((error) => console.log(error))
  }, [])
  return (
    <>
      <div className='containor-fluid'>
        <div className='row d-flex'>
          {posts.slice(0, limit).map((p) => (
            <div className='col-md-3 shadow-lg' key={p.id}>
              <h1 className='text-muted'>{p.title}</h1>
              <p>{p.body}</p>
            </div>

          ))}
          {/* <div className='d-flex justify-content-center'> */}

          {limit < posts.length &&
            <div className='col-6'>
              <button className='btn btn-warning' onClick={() => setLimit(limit + 25)}>Load More</button>
            </div>
          }




          {limit > 20 &&
            <div className='col-6'>
              <button className='btn btn-danger' onClick={() => setLimit(limit - 2)}>Load less</button>
            </div>
          }


          {/* </div> */}

        </div>
      </div>


    </>
  )
}

export default DataFetch