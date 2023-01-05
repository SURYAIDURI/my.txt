var itemList = document.querySelector('#items');
parentElement
 console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
 console.log(itemList.parentElement.parentElement.parentElement);


 FirstChild
 console.log(itemList.firstChild);
 firstElementChild
 console.log(itemList.firstElementChild);
 itemList.firstElementChild.textContent = 'Hello 1';


  nextSibling
 console.log(itemList.nextSibling);
 nextElementSibling
 console.log(itemList.nextElementSibling);


 previousSibling
console.log(itemList.previousSibling);
previousElementSibling
/console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

var newsource =  document.createElement('source');

// Add class
newsource.className= 'hello';

// Add id
newsource.id = 'hello1';

// Add attr
newsource.setAttribute('title', 'Hello Source');

// Create text node
var newsourceText = document.createTextNode('Hello World');

// Add text to souurce
newsource.appendChild(newsourceText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newsourceText);

newsource.style.fontSize = '30px';

container.insertBefore(newsourceText, h1);