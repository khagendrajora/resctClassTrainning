import React from 'react'

const DealsSide = () => {
    return (
        <>
            <h4>Categories</h4>
            <form action="">

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                    <label for="flexCheckDefault" className="form-check-label"> Mobile</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                    <label for="flexCheckDefault" className="form-check-label"> Laptop</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                    <label for="flexCheckDefault" className="form-check-label"> Fashion</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                    <label for="flexCheckDefault" className="form-check-label"> Books</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                    <label for="flexCheckDefault" className="form-check-label"> Camera</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                    <label for="flexCheckDefault" className="form-check-label"> Arts and Crafts</label>
                </div>
                <a href="#" className="text-decoration-none">See more category</a>
            </form>
            <h5>Deal Type</h5>
            <a href="#" className="text-decoration-none"> Deal of the Day</a> <br />
            <a href="#" className="text-decoration-none"> Lightening Deals</a> <br />
            <a href="#" className="text-decoration-none"> Saving & Sales</a> <br />
            <a href="#" className="text-decoration-none"> Prime early access Deals</a> <br />

            <h5 className="mt-2">Availability</h5>
            <a href="#" className="text-decoration-none"> Clear</a>
            <form action="">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                    <label for="flexCheckDefault" className="form-check-label"> Active</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                    <label for="flexCheckDefault" className="form-check-label">Upcoming</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                    <label for="flexCheckDefault" className="form-check-label">Missed</label>
                </div>
            </form>
        </>
    )
}

export default DealsSide