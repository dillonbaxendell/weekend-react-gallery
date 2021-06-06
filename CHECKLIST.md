### CHECKLIST

## Setup

***There is no database component to base mode. All data is stored in an array on the server. Before you get started, add a few images to the `public/images` folder and modify the `server/modules/data.js` to include an `id`, `title`, `description` and `path for` each of your images. Each `id` should be a unique number (e.g. 1, 2, 3...).***

    [X] Add images to `public/images` folder 
    [X] Modify the `server/modules/data.js` to include:
        [X] `id` (This should be a unique number)
        [X] `title`
        [X] `description`
        [X] `path for`
    
    [X] run `npm install`
    [X] npm install nodemon --global
    [X] npm run server works
    [X] npm run client works


## Base Mode

Create Components:
    [X] `App` component
    [X] `GalleryList` component
        - This represents the gallery of images
    [X] `GalleryItem` component
        - This represents a single image in the gallery with the ability to:
            [X] Click the image to toggle the description
            [X] Like the image

**App**
[X] App function created

[] Any state variables needed ?

[X] useEffect is created and imported
    Inside useEffect should be:
    [X] a function that gets the data (getImageList) ?

[X] return created with initial html

[X] export default App;

**GalleryList**
[X] GalleryList Folder created inside components
[X] GalleryList.jsx created inside GalleryList folder
[X] GalleryList function created

[X] GalleryList html created
    [X] .map through array list
    [X] creates another component called GalleryItem


**GalleryItem**
[X] GalleryItem Folder created inside components
[X] GalleryItem.jsx created inside GalleryItem folder
[X] GalleryItem function created

[X] Update the `GalleryList` to use this component to display an image.
    [X] created inside GalleryList.jsx (in return html)

[X] Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
    [X] state variable showDisplay created with setShowDescription 
    [X] handleDisplay




    