var itemlist=document.getElementById('items');
var form=document.getElementById('addForm');

form.addEventListener('submit',addItem);
//delete event
itemlist.addEventListener('click',removeitem);


function addItem(e){
    e.preventDefault();

var newItem=document.getElementById('item').value;
var li=document.createElement('li')
li.className='list-group-item'
li.appendChild(document.createTextNode(newItem));
itemlist.appendChild(li);

var delbut=document.createElement('button');
var editbut=document.createElement('button');
delbut.className='btn btn-danger btn-sm float-right delete'
editbut.className='btn btn-normal btn-sm float-right edit'
var deltext=document.createTextNode('X')
delbut.appendChild(deltext)
editbut.appendChild(document.createTextNode('Edit'))
li.appendChild(delbut)
li.appendChild(editbut)
}

function removeitem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemlist.removeChild(li);
      }
    }
}