import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
   
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
         
            </div>
        </div>   
    )

    return (
        <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
            
            {newsArticle("SEAN LIEBEL is back", "Top news - 2000 readers")}
            {newsArticle("Coronavirus: USA updates", "Top news - 900 readers")}
            {newsArticle("Tesla hits new highs", "Cars & auto - 320 readers")}
            {newsArticle("Bitcoin Breaks $48K", "Crypto - 9000 readers")}
            {newsArticle("Is Redux too good?", "Code - 900 readers")}
            {newsArticle("SEAN programming launches new business?!", "Top news - 9500 readers")}
        </div>
    )
}

export default Widgets
