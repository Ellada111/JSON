// Задание: Счетчик нажатий

// const countOne = document.getElementById('count');
// const btn = document.getElementById('btn');
// const count = localStorage.getItem('counterValue') || 0;
// countOne.textContent = count;
// btn.addEventListener('click', function() {
//     count++;
//     countOne.textContent = count;
//     localStorage.setItem('counterValue', count);
// });







// Создание списка покупок
const list = document.getElementById('list');
const add = document.getElementById('add');
const itemList = document.getElementById('item-list');

// Получаем список покупок из localStorage, если он есть
// const savedItemss = localStorage.getItem('shoppingList') || [];
 const savedItemss = JSON.parse(localStorage.getItem('shopping')); 

add.addEventListener('click', function() {
    const newItem = list.value.trim();
    
    // if (newItem !== '') {
    //     const listItem = document.createElement('li');
    //     listItem.textContent = newItem;
    //     itemList.appendChild(listItem);
        
        // Добавляем новый продукт в список покупок и сохраняем в localStorage
        savedItemss.push(newItem);
        localStorage.setItem('shopping', JSON.stringify(savedItemss));

//         // Очищаем поле ввода
          itemInput.value = '';
    
});

    
       
       
    
  