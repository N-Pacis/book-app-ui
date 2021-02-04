import React from 'react'
import "./AmazonSellers.css"
import AmazonSellersBooks from './AmazonSellersBooks'

function AmazonSellers() {
    return (
        <div className="amazon-sellers">
            <h2>Amazon Bestsellers</h2>
            <div className="amazon-books">
                <AmazonSellersBooks 
                   position="1."
                   title="Beautiful Gravity"
                   image="https://images-na.ssl-images-amazon.com/images/I/317aochWOUL._SX332_BO1,204,203,200_.jpg"
                   author="Martin Hyatt"
                />
                <AmazonSellersBooks 
                   position="2."
                   title="Infinity Reaper"
                    author="Adam Silvera"
                    image="https://d15fwz9jg1iq5f.cloudfront.net/wp-content/uploads/2020/06/18135809/InfinityReaper_final_reveal.jpg"
                />
                <AmazonSellersBooks 
                   position="3."
                   title="Sin Eater"
                   image="https://lithub.com/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi-677x1024.jpg"
                   author="Megan Campisi"
                />
                <AmazonSellersBooks 
                   position="4."
                   title="DragonFly Girl"
                   image="https://i.pinimg.com/originals/d3/43/c3/d343c3285d7cbb7b58f0b93c0d8ebefe.jpg"
                   author="Marti Leimbach"
                />
                <AmazonSellersBooks 
                   position="5."
                   title="Bone Criers Dawn"
                   image="https://d15fwz9jg1iq5f.cloudfront.net/wp-content/uploads/2020/06/21115151/BoneCriersDawn-hc-c.jpg"
                   author="Kathryn Purdie"
                />
            </div>
        </div>
    )
}

export default AmazonSellers
