fetch('https://random-data-api.com/api/food/random_food')
.then((data) => {
    return data.json();
}) 
.then((object) => {
    console.log(object);
    getElement("dish").innerHTML = object.dish;
    getElement("description").innerHTML = object.description;
    getElement("ingredient").innerHTML = object.ingredient;
    getElement("measurement").innerHTML = object.measurement;
})


function getElement(id) {
    return document.getElementById(id);
}


