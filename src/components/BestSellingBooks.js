import React from 'react'
import "./BestSellingBook.css"
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'

function BestSellingBooks({ title, author, image, viewers, minutes,rating }) {
    const bookRate = rating;
    return (
        <div className="book-div">
            <img src={image} alt={title} />
            <div className="book-div__info">
            {bookRate  === "0" ? (<><StarBorderIcon/><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></>) : bookRate === "1" ?(<><StarIcon className="shaded"/><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></>) : bookRate=== "2" ? (<><StarIcon className="shaded"/><StarIcon className="shaded"/><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></>) :bookRate=== "3" ? (<><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/><StarBorderIcon /><StarBorderIcon /></>):bookRate=== "4" ? (<><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/><StarBorderIcon /></>):(<><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/></>)}
                <h2 className="book-title">{title}</h2>
                <p>{author}</p>
                <div className="book-buttons">
                    <button><VisibilityRoundedIcon />{viewers}</button>
                    <button><PlayArrowRoundedIcon />{minutes}</button>
                </div>
            </div>
        </div>
    )
}

export default BestSellingBooks
