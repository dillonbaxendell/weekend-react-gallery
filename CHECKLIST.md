### CHECKLIST

## Setup

***There is no database component to base mode. All data is stored in an array on the server. Before you get started, add a few images to the `public/images` folder and modify the `server/modules/data.js` to include an `id`, `title`, `description` and `path for` each of your images. Each `id` should be a unique number (e.g. 1, 2, 3...).***

    [] Add images to `public/images` folder 
    [] Modify the `server/modules/data.js` to include:
        [] `id` (This should be a unique number)
        [] `title`
        [] `description`
        [] `path for`
    
    [X] run `npm install`
    [X] npm install nodemon --global
    [X] npm run server works
    [X] npm run client works


## Base Mode

Create Components:
    [] `App` component
    [] `GalleryList` component
        - This represents the gallery of images
    [] `GalleryItem` component
        - This represents a single image in the gallery with the ability to:
            [] Click the image to toggle the description
            [] Like the image

**App**
[X] App function created

[] Any state variables needed ?

[X] useEffect is created and imported
    Inside useEffect should be:
    [X] a function that gets the data (getImageList) ?

[X] return created with initial html

[X] export default App;

**GalleryList**
[] GalleryList Folder created inside components
[] GalleryList.jsx created inside GalleryList folder
[] GalleryList function created

[] GalleryList html created
    [] .map through array list
    [] creates another component called GalleryItem


**GalleryItem**
[] GalleryItem Folder created inside components
[] GalleryItem.jsx created inside GalleryItem folder
[] GalleryItem function created

[] Update the `GalleryList` to use this component to display an image.
    [] created inside GalleryList.jsx (in return html)

[] Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
    [] state variable showDisplay created with setShowDescription 
    [] handleDisplay




    