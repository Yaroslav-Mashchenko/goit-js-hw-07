const categoriesList = document.getElementById('categories');


const categoriesItems = categoriesList.querySelectorAll('li.item');


console.log(`Number of categories ${categoriesItems.length}`);


categoriesItems.forEach(item => {
    
    const categoryName = item.querySelector('h2').textContent;
    
    const subcategories = item.querySelectorAll('ul > li');
    
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${subcategories.length}`);
});