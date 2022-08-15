import { useEffect } from "react";

function Photos() {
    useEffect(() => {
        photoGenerator(photos);
    });

    const photos = [
        'https://images.unsplash.com/photo-1659849025892-f9318988ad00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1659923183026-0721b7b6b053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1659962350526-fde20cde04cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1659359148424-78c78a583d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
        'https://images.unsplash.com/photo-1660121022318-3cb0f06e54ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1660041128546-bbb424728221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1658779675654-afd2165ba366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1984&q=80',
        'https://images.unsplash.com/photo-1659605199215-83f8b3a8b5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80',
        'https://images.unsplash.com/photo-1659482023691-04d925fb35fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
    ];

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