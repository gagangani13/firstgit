var itemlist=document.querySelector('#items');
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor='green'
//console.log(itemlist.parentElement);
//console.log(itemlist.childNodes)
//console.log(itemlist.children)
//console.log(itemlist.firstChild)
//console.log(itemlist.firstElementChild)
//console.log(itemlist.lastChild)
//console.log(itemlist.lastElementChild)
//console.log(itemlist.nextSibling)
//console.log(itemlist.previousElementSibling)
//itemlist.previousElementSibling.style.color='green'

//create a div
var newDiv=document.createElement('div')
//add class
newDiv.className='hello'
//add Id
newDiv.id='hello1'
//add attributes
newDiv.setAttribute('title','hello div')
//create text node
var newText=document.createTextNode('hello world')
//add text to div
newDiv.appendChild(newText);
//console.log(newDiv)
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1')
container.insertBefore(newDiv,h1)
var newDiv2=document.createElement('div')
newDiv2.className='hello boss'
newDiv2.id='hello bhai'
newDiv2.setAttribute('title','hello world')
var newText2=document.createTextNode('hello world')
newDiv2.appendChild(newText2)
var new2=document.querySelector('.list-group-item:first-child');
itemlist.insertBefore(newDiv2,new2)