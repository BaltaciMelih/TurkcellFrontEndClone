var items = ['item 1','item 2','item 3','item 4']

var list = document.querySelector('#myList');


items.forEach(function(item){
    
    CreateItem(item);

});



    
list.addEventListener('click',function(item){
    if(item.target.tagName=='LI')(
        item.target.classList.toggle('checked')
    );

    console.log(item.target.tagName);
    
});

document.querySelector('#btnCreate').onclick=function(){
    varitem= document.querySelector('txtItem').value;
    if(item===''){
        alert('lütfen bir deger giriniz');
        return;
    }
    CreateItem(item);
};

function CreateItem(item){
    var li =document.createElement ('li');
    var t =document.createTextNode(item);

    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li);

    var span =document.createElement ('span');
    var text =document.createTextNode('x');
    span.className='close';
    span.appendChild(text);
    li.appendChild(span);
    span.onclick = function(){
        var li =this.parentElement;
        li.style.display='none';
    }
}
