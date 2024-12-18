//TODO: З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
//? Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//? Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
//? forEach()

// ---------------------- Search Elements -------------------------------
//* Find elements on page
const categoryItems = document.querySelectorAll('.item');
const categoryTitles = document.querySelectorAll('h2');
const elementsLists = document.querySelectorAll('.item ul');

//* Add classes to elements
categoryTitles.forEach(el => el.classList.add('category-title'));
elementsLists.forEach(el => el.classList.add('element-list'));

//* Find elements on page
const listItems = document.querySelectorAll('.element-list li');

//* Add classes to elements
listItems.forEach(el => el.classList.add('list-item'));
// ---------------------- /Search Elements -------------------------------


// ---------------------- Functions -------------------------------
//* Report about quantity function
const categoriesQuantity = items => (`Number of categories: ${items.length}`);
console.log(categoriesQuantity(categoryItems));

//* Info report about each category
const categoryInfo = items => {
    items.forEach((el) => {
        const currentTitleContent = el.querySelector('h2').textContent;
        const currentElementsLength = el.querySelectorAll('li').length;

        console.log(`Category: ${currentTitleContent}`);
        console.log(`Elements: ${currentElementsLength}`);
    });
};
categoryInfo(categoryItems);
// ---------------------- /Functions -------------------------------