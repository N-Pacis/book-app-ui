import React from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import "./BestSellers.css"
import BestSellingBooks from './BestSellingBooks';

function BestSellers() {
    return (
        <div>
            <div className="header-title">
                <h3>N.Y. Times Bestsellers</h3>
                <div className="buttons">
                    <button><PlayArrowIcon /> Play</button>
                    <div className="navigate-icon">
                        <NavigateBeforeIcon />
                    </div>
                    <div className="navigate-icon">
                        <NavigateNextIcon />
                    </div>
                </div>
            </div>
            <div className="selling-books">
                <BestSellingBooks
                    title="A Promised Land"
                    author="Barack Obama"
                    image="https://s1.nyt.com/du/books/images/9781524763169.jpg"
                    viewers="1,000,000"
                    minutes="45,200"
                    rating="5"
                />
                <BestSellingBooks
                    title="The History of the Nazi"
                    author="Nikolaus Wachsmann"
                    image="https://images-na.ssl-images-amazon.com/images/I/41WB3rkRZsL._SX329_BO1,204,203,200_.jpg"
                    viewers="700,000"
                    minutes="38,200"
                    rating="3"
                />
                <BestSellingBooks
                    title="Karate Chop"
                    author="Dorthe Nors"
                    image="https://images-na.ssl-images-amazon.com/images/I/31cki+xzybL._SX326_BO1,204,203,200_.jpg"
                    viewers="500,000"
                    minutes="68,200"
                    rating="4"
                />
            </div>
        </div>
    )
}

export default BestSellers
