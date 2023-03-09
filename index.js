var parentlist=document.querySelector('.addhere')
var btn=document.getElementById('btn');
btn.addEventListener('click',store);
function store(e){
    e.preventDefault();//by adding this the result don't go away ex-dont flash
    //console.log('click')
    document.getElementById('myform').style.backgroundColor='green';
    var names=document.getElementById('Name').value;
    var mobile=document.getElementById('phone').value;
    var email=document.getElementById('mail').value;
    var time=document.getElementById('call').value; 
    var time=document.getElementById('call').value;   
   
    //arr.push(names,email,time)
    //localStorage.setItem(mobile,arr)
    var arr=({
        'name': names,
        'email': email,
        'time': time
    })
    var arr1=mobile
    let sarr=JSON.stringify(arr)
    //let sarr1=JSON.stringify(arr1)
    localStorage.setItem(arr1,sarr)

    var li=document.createElement("li");
    li.className=mobile;
    var addhere=document.querySelector('.addhere');
    var details=document.createTextNode(names+"->"+email+"->"+mobile+"->"+time)
    li.appendChild(details)
    addhere.appendChild(li)
    var delbut=document.createElement("button");
    delbut.className='btn btn-danger'
    delbut.appendChild(document.createTextNode("DELETE"))
    li.appendChild(delbut)
    console.log(li.mobile)
    delbut.addEventListener('click',deleted);
    function deleted(e){
        var locate=e.target.parentElement;
        localStorage.removeItem(locate.className)
        parentlist.removeChild(locate);    
    }  
}
