//TODO: Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.
//? Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
//? Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().
//? Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//? Додай мінімальне оформлення галереї флексбоксами через CSS класи. 

// ---------------------- Create arr & Search Elements -------------------------------
//* Create images arr 
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

//* Find gallery list 
const galleryList = document.querySelector('.gallery');
galleryList.classList.add('gallery-list');
// ---------------------- /Create arr & Search Elements -------------------------------


// ---------------------- Function: Solution 1 -------------------------------
//* Function
// const createGalleryItems = imagesArr => {
//   imagesArr.forEach(element => {
//     const currentListItem = document.createElement('li');
//     currentListItem.classList.add('list-item');

//     const currentImage = document.createElement('img');
//     currentImage.src = element.url;
//     currentImage.alt = element.alt;
//     currentImage.classList.add('list-image');

//     currentListItem.append(currentImage);
//     galleryList.append(currentListItem);
//   });
// };

// createGalleryItems(images);
// ---------------------- /Function -------------------------------

// ---------------------- Function: Solution 2(best) -------------------------------
const createGalleryItems = imagesArr => {
  return `
    <li class="gallery-item">
        <img class = "list-image" src="${imagesArr.url}" alt="${imagesArr.alt}">
    </li>
  `;
}

const galleryCardsTemplate = images.map(image => createGalleryItems(image)).join('');
galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);
// ---------------------- /Function -------------------------------