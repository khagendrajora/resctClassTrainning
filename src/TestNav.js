import React from 'react'
import {Link} from 'react-router-dom'
function TestNav() {
  return (
    <>
    <nav>
        <ul>
            <li><Link to='/demo'>FirstPage</Link></li>
            <li><Link to='/khagendra'>SecoondPage</Link></li>
            <li><Link to='/third'>ThirdPage</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default TestNav