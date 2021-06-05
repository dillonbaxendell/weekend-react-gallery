import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

function GalleryList ({imageList, getImageList}) {
    // Loop and render the imageList
    return (
        <div className="gallery-list-flex">
            {imageList.map( image => {
                console.log(image);

                return (
                    <GalleryItem getImageList={getImageList} key={image.id} image={image} />
                )
            })}

        </div>
    )
}

export default GalleryList;