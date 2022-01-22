import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const mainGalleryList = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

mainGalleryList.insertAdjacentHTML('beforeend', itemsMarkup);

mainGalleryList.addEventListener('click', onImageClick);

function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
    }).join('');
}

function onImageClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);
    instance.show();
}