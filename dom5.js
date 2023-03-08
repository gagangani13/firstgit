
var itemlist=document.getElementById('items');
var form=document.getElementById('addForm');
var filter=document.getElementById('filter')

form.addEventListener('submit',addItem);
//delete event
itemlist.addEventListener('click',removeitem);
filter.addEventListener('keyup',fiteritem);


function addItem(e){
    e.preventDefault();

var newItem=document.getElementById('item').value;
var newItem2=document.getElementById('item2').value;
var li=document.createElement('li')
li.className='list-group-item'
li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(" "+newItem2));
itemlist.appendChild(li);

var delbut=document.createElement('button');
var editbut=document.createElement('button');
delbut.className='btn btn-danger btn-sm float-right delete ml-2'
editbut.className='btn btn-normal btn-sm float-right edit'
var deltext=document.createTextNode('X')
delbut.appendChild(deltext)
editbut.appendChild(document.createTextNode('EDIT'))
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

function fiteritem(e){
    var text=e.target.value.toLowerCase();
    var items=itemlist.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
        var itemname2=item.childNodes[1].textContent;
        if(itemname.toLowerCase().indexOf(text)!=-1||itemname2.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';    
        }else{
            item.style.display='none';
        }
    })
}