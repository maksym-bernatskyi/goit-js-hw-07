import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const mainGalleryList = document.querySelector('.gallery');

const createGalleryItemsMarkup = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}" onclick="event.preventDefault()">
  <img class="gallery__image" src="${preview}"  alt="Image description" title="${description}"/>
</a>`).join('');

mainGalleryList.innerHTML = createGalleryItemsMarkup;

let lightbox =  new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 500, captionPosition: 'top', });