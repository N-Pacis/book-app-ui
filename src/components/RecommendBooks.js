import React from 'react'
import "./RecommendBooks.css"
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'

function RecommendBooks({ image, title, author, viewers, plays,rating}) {
    const bookRate = rating;
    return (
        <div className="book">   
            <img src={image} alt={title} />
            <div className="book-info">
                {bookRate  === "0" ? (<><StarBorderIcon/><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></>) : bookRate === "1" ?(<><StarIcon className="shaded"/><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></>) : bookRate=== "2" ? (<><StarIcon className="shaded"/><StarIcon className="shaded"/><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></>) :bookRate=== "3" ? (<><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/><StarBorderIcon /><StarBorderIcon /></>):bookRate=== "4" ? (<><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/><StarBorderIcon /></>):(<><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/><StarIcon className="shaded"/></>)}
                <h3>{title}</h3>
                <p>{author}</p>
                <div className="book-statistics">
                    <VisibilityRoundedIcon />
                    <p>{viewers}</p>
                </div>
                <div className="book-statistics__plays">
                    <PlayArrowRoundedIcon />
                    <p>{plays}</p>
                </div>
            </div>
        </div>
    )
}

export default RecommendBooks
