import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList ({imageList, getImageList}) {
    // Loop and render the imageList
    return (
        <div>
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