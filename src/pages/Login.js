import React from 'react'
import Navbar from '../component/Navbar'

const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="row d-flex justify-content-center">
                <form className="col-md-5 mt-5 shadow p-3">
                
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="pass" required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpass" required/>
                    </div>

                    <div className="mb-2">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" required/>
                                <label htmlFor="check">I accept your policies and cookies</label>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <button type="submit" className="btn btn-primary form-control">Send</button>
                    </div>

                </form>

            </div>
    </>
  )
}

export default Login