const liItem = document.querySelectorAll('ul li');
const imgItem = document.querySelectorAll('.product img');

liItem.forEach(li => {
   li.addEventListener('click', () => {
    //active
    liItem.forEach(li => {
        li.className = "";
    })
    li.className = "active";

    //Filter
    const value = li.innerText;
    imgItem.forEach(img => {
        img.style.display = 'none';
        if (img.getAttribute('data-filter') == value.toLowerCase() || value == "All") {
            img.style.display = 'block';
        }
    })
   })
});
