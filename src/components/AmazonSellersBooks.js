import React from 'react'
import "./AmazonSellersBooks.css"

function AmazonSellersBooks({ position, image, title, author }) {
    return (
        <div className="book-selling">
            <p className="position">{position}</p>
            <img src={image} alt={title} />
            <div className="book-selling__info">
                <h3>{title}</h3>
                <h4>{author}</h4>
            </div>
            <p className="colon">:</p>
        </div>
    )
}

export default AmazonSellersBooks
