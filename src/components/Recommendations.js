import React from 'react'
import RecommendBooks from './RecommendBooks'
import "./recommendations.css"

function Recommendations() {
    return (
        <div className="Recommendations">
            <h2>Reccomendations</h2>
            <div className="Recommendations-books">
                <RecommendBooks
                    image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555075317l/43835525.jpg"
                    rating = "3"
                    title="The Crying Book"
                    author="Heather Christle"
                    viewers="38,456"
                    plays="32,254"
                />
                <RecommendBooks
                    image="https://i.pinimg.com/474x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg"
                    rating = "0"
                    title="The Past Is rising"
                    author="Kathryn Bywaters"
                    viewers="58,456"
                    plays="19,473"
                />
                <RecommendBooks
                    image="https://plan-international.org/sites/default/files/styles/publication_cover/public/field/field_publication_cover/under_seige.jpg?itok=S2nGVwIA"
                    rating = "4"
                    title="Under Siege"
                    author="Plan International"  
                    viewers="68,456"
                    plays="12,254"
                />
                <RecommendBooks
                    image="https://lh3.googleusercontent.com/proxy/jwp0L9GYYvliACaYNgf_9aerjEFBLO1dVq987QX8RlAUwKg5HhxiCTvhtul_TI58DP3tfkhPN0O4BIy11zEP0-dCpuXyqWav6iCpc8GVaeVCPsL-Xupcmo1nCkKa5g88O48tKP6igPXXxm7FsE-hBuzQQOL1woTIZtLU5_Gx7mhdNKaJuBkk"
                    rating="1"
                    title="Faerie Born"
                    author="Alice Kasey"
                    viewers="78,456"
                    plays="51,915"
                />
                <RecommendBooks
                    image="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4059/9781405939300.jpg"
                    rating="5"
                    title="Lovely Wife"
                    author="Samatha Downing"
                    viewers="32,200"
                    plays="42,254"
                />
                <RecommendBooks
                    image="https://images-na.ssl-images-amazon.com/images/I/317aochWOUL._SX332_BO1,204,203,200_.jpg"
                    rating="4"
                    title="Beautiful Gravity"
                    author="Martin Hyatt"
                    viewers="35,426"
                    plays="40,204"
                />
            </div>
        </div>
    )
}

export default Recommendations
