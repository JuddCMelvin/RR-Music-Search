// Gallery.js
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem, {Song} from './GalleryItem'

//props 
interface GalleryProps {
    data: Song[]
}
function Gallery(){
    const data = useContext(DataContext)
    
    const display = data.map((item: Song,index: number) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery