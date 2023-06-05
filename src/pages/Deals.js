import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Card from  '../component/Card'
import DealsSide from '../component/DealsSide'

const Deals = () => {
    return (
    <>
            <Navbar />
            <div class="container-fluid">
                <div class="row d-flex justify-content-evenly">
                    <h3>Deals and Promotion</h3>
                    <span>Shop Today’s Deals, Lightning Deals, and limited-time discounts</span>

                    <div class="col-md-2 p-3 shadow-lg custom-sidebar">
                    <DealsSide/>
                                    </div>
                                    <div class="col-md-9">
                                        
                                        <Card/>
                                        </div>
                                        </div>
                                        </div>
                                        <Footer />
                                    </>
                                    )
}

                                    export default Deals