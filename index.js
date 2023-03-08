
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
    var arr=new Array
    arr.push(names,email,time)
    localStorage.setItem(mobile,arr)
}

    