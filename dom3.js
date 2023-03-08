//QUERYSELECTOR-->only CSS
//var changecol2=document.querySelector('.list-group-item:nth-child(2)');//list-group-item:first-child//list-group-item:last-child
//changecol2.style.backgroundColor='green';
//var line3=document.querySelector('.list-group-item:nth-child(3)');
//line3.style.color='white';

//QUERYSELECTORALL-->class,id,tag,anything
var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}
var changecol=document.querySelectorAll('li')
changecol[1].style.color='green'