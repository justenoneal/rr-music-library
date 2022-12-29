import React, { useState } from 'react'

function GalleryItem(props) {
    let [viewDetails, setViewDetails] = useState(false)

    const simpleView = () => {
        return(
            <div>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailedView = () => {
        return(
            <div>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setViewDetails(!viewDetails)} style={{ display: "inline-block" }}>
            {viewDetails ? detailedView() : simpleView}
        </div>
    )
}

export default GalleryItem