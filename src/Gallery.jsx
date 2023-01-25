import PhotoAlbum from "react-photo-album";

import {photos, kitchenphotos, bathroomphotos, otherphotos} from "/home/mackgrissom/code/MackGrissom/tw-precision/src/components/Photos.jsx"


const kitchenGallery = <PhotoAlbum layout="rows" photos={kitchenphotos} />; 
const bathroomGallery = <PhotoAlbum layout="rows" photos={bathroomphotos} />; 
const otherGallery = <PhotoAlbum layout="rows" photos={otherphotos} />; 


export default {kitchenGallery, bathroomGallery, otherGallery}