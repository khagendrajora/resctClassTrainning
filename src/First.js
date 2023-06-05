import React from 'react'
import TestNav from './TestNav'

const First = () => {
  return (
    <>
    <TestNav/>
   
    <h1>Hello React</h1>
    <hr/>
    <h2>Heading two</h2>
    <input type={"text"} placeholder="enter name"></input>
    <button className='btn btn-primary'>Demo</button>
    <button className='btn btn-danger'>Demo</button>
    <button className='btn btn-success'>Demo</button>
    <button className='btn btn-warning'>Demo</button>
    <button className='btn btn-outline-info'>Demo</button>

    <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<div className="card" style={{width: "18rem"}}>
  <img src="/p.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    </>
  )
}

export default First
