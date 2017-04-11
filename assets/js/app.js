window.addEventListener('load',function(){
  document.getElementById('modal').style.display="none";
});

var img=document.querySelector('.content-box-work');
img.addEventListener('click',function(event){
    event.preventDefault();
    if(event.target.tagName == "IMG"){
      document.getElementById('img-modal').src = event.target.src;
      document.getElementById('modal').style.display = "block";
    }
  });

var close=document.getElementById('close');
close.addEventListener('click', function(){
  document.getElementById('modal').style.display = "none";
});
