
class Animal {
  constructor(_name, _age, _voice) {
    this.name=_name;
    this.age=_age;
    this.voice=_voice;
    this.show=function(){
        alert(this.name + "  " + this.age + "  " + this.voice + "  ");
    }
  }
}

var Cow = new Animal("Cow","10","Moo");
var Dog = new Animal("Dog","5","Gav");
var Cat = new Animal("Cat","1","Meow");

Cow.show();
Dog.show();
Cat.show();

function addCount(otherCount) {
    let userInput = prompt("Для того,чтобы добавить лошадь нажмите 0, чтобы Ворону - нажмите 1");
 if (userInput === "0" ){
    var Horse = new Animal("Horse","7","Brr")
    Horse.show()}
 else {var Vorona = new Animal("Vorona","2","Car")
    Vorona.show() };
 }


addCount();






