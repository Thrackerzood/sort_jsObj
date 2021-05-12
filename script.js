
let shop =  {
   getTitle(){return 0},
   getPages(){return 0},
   getAuthor(){return 0},
   getPrice(){return 0},
   getSize(){return 0},
   getAge(){return 0},
   getWeight(){return 0},
   getName(){return 0}
}

class Book {
   constructor (title,pages,author,price) {
      this.title = title;
      this.pages = pages;
      this.author = author;
      this.price = price;
   }
}

Object.assign(Book.prototype, shop);
Book.prototype.getTitle = function(){return this.title;}
Book.prototype.getPages = function(){return this.pages;}
Book.prototype.getAuthor = function(){return this.author;}
Book.prototype.getPrice = function(){return this.price;}

class Toy {
   constructor(name,price,age){
      this.name = name;
      this.price = price;
      this.age = age;
   }
}

Object.assign(Toy.prototype, shop);
Toy.prototype.getPrice = function(){return this.price;}
Toy.prototype.getAge = function(){return this.age;}
Toy.prototype.getName = function(){return this.name;}

class Fruit {
   constructor(name,price,weight){
      this.name = name;
      this.price = price;
      this.weight = weight;
   }
}

Object.assign(Fruit.prototype, shop);
Fruit.prototype.getPrice = function(){return this.price;}
Fruit.prototype.getWeight = function(){return this.weight;}
Fruit.prototype.getName = function(){return this.name;}

let listBook = [];
let listToy = [];
let listFruit = [];

listBook.push(new Book('книга 1', 101, 'Пушкин',401));
listBook.push(new Book('книга 2', 102, 'Пушкин',402));
listBook.push(new Book('книга 3', 103, 'Пушкин',403));
listBook.push(new Book('книга 4', 104, 'Пушкин',404));

listToy.push(new Toy('игрушка 1', 101,501));
listToy.push(new Toy('игрушка 2', 102,502));
listToy.push(new Toy('игрушка 3', 103,503));
listToy.push(new Toy('игрушка 4', 104,504));

listFruit.push(new Fruit('фрукт 1', 181,1));
listFruit.push(new Fruit('фрукт 2', 182,2));
listFruit.push(new Fruit('фрукт 3', 183,3));
listFruit.push(new Fruit('фрукт 4', 184,4));


let sorts1 = document.querySelector('.sort1');
let sorts2 = document.querySelector('.sort2');

function sorters1() {
  listBook.sort((a, b) => b.getPrice() - a.getPrice()); 
}
function sorters2() {
   listBook.sort((a, b) => a.getPrice() - b.getPrice());
}

let sortAndRebuild1 = () => {sorters1();buildBookList(listBook);};
let sortAndRebuild2 = () => {sorters2();buildBookList(listBook);};

let buildBookList = (listBook) => {
    let divi = document.querySelector('.divi');
    divi.innerHTML = '';
    
    for (bodyBook of listBook) {
      let newDiv = document.createElement('div');
      let newDivText = document.createElement('div');
      let newDivPrice = document.createElement('div');
      newDivText.textContent += bodyBook.title;
      newDivPrice.textContent += bodyBook.price;
      newDiv.classList.add('newBook');
      newDivText.classList.add('newBookText');
      newDivPrice.classList.add('newBookPrice');
      divi.append(newDiv);
      newDiv.append(newDivText);
      newDiv.append(newDivPrice);
    };
};

sorts1.addEventListener('click', sortAndRebuild1);
sorts2.addEventListener('click', sortAndRebuild2);
buildBookList(listBook);