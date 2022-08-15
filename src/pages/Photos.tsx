import { useEffect } from "react";
import { photos } from "../data/photos";

function Photos() {
    useEffect(() => {
        photoGenerator(photos);
    });

    const photoGenerator = (photos: string[]) => {
        const gallery = document.querySelector('#gallery');
        for(let i = 0; i < photos.length; i++) {
            const photo = document.createElement('div');
            photo.style.cssText = `background: url(${photos[i]}); background-size: cover; background-position: center; height: 600px;`;
            gallery?.insertAdjacentElement('beforeend', photo);
        } 
    }

    
    return (
        <div className="pt-[56px] min-h-screen grid grid-cols-3" id='gallery'></div>
    )
}

export default Photos;