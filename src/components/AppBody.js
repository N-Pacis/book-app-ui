import React from 'react'
import AmazonSellers from './AmazonSellers'
import "./AppBody.css"
import BestSellers from './BestSellers'
import Recommendations from "./Recommendations"

function AppBody() {
    return (
        <div className="app-body">
            <BestSellers />
            <div className="best-books">
                <Recommendations />
                <AmazonSellers />
            </div>
        </div>
    )
}

export default AppBody
