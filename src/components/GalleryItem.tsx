// GalleryItem.js
import { useState } from 'react' 

//props 
interface GalleryItemProps {
    item: Song, 
    key: number
}
//item
interface Song {
    trackName: string
    collectionName: string
    artworkUrl100: string
    primaryGenreName: string
    releaseDate: string
}

function GalleryItem(props: GalleryItemProps){
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() =>setView(!view)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
                {view ? detailView() : simpleView()}
        </div>
    )
}

export type {Song}
export default GalleryItem