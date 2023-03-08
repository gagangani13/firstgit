//console.dir(document)//EXAMINE THE DOCUMENT OBJECT
//console.log(document.URL)
//console.log(document.title)
//document.title='ITEMS'
//console.log(document.head);
//console.log(document.all);
//document.all[10].textContent='Items'//dont use this method bcz the line number will be changing

//GET ELEMENT BY ID//
var titlenew= document.getElementById('header-title');
var headernew=document.getElementById('main-header');

//console.log(titlenew)
//titlenew.textContent='lister item'
//titlenew.innerText='goodbye cheta'
//console.log(titlenew.textContent)
//console.log(titlenew.innerText)//shows what is actually displayed
//titlenew.innerHTML='<h1>Gani<\h1>'
headernew.style.borderBottom='solid 3px #000'
document.all[14].style.color='green'