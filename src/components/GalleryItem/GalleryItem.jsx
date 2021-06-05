import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css'

function GalleryItem ({image, getImageList}) {
    //State variable to toggle the description on and off
    const [showDescription, setShowDescription] = useState(false);

    const handleLike = () => {
        console.log('In handleLike');

        const newCount = image.likes + 1;

        const data = {
            likes: newCount
        }

        axios.put( `/gallery/like/${image.id}`, data )
        .then( response => {
            console.log( response );

            getImageList();
        })
        .catch( err => {
            console.log( err ); 
        })
        // you left off: create the put request in gallery.router.js
    }

    return (
        <div>
              { showDescription ? (
                <div className="item" onClick={() => setShowDescription(!showDescription)}>
                    <p>{image.description}</p>
                </div>
            ) : (
                <div>
                    {/*
                    if showDescription is true, show image
                    */}
                    <img className="image" onClick={() => setShowDescription(!showDescription)} src={image.path}></img>
                <section>
                    <button onClick={handleLike} key={image.id}>Like</button>
                    <p>{image.likes} people like this!</p>
                </section>
                </div>
            )}
           
        </div>
    )
}

export default GalleryItem;