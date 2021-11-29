let userInput = prompt("Введите строку");

String.prototype.getVowels = function() {
    const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
    const array = this.toLowerCase().split("");
    const count = array.reduce((sum, item) => sum + vowels.includes(item), 0);
    return count;
};

console.log(userInput.getVowels());
