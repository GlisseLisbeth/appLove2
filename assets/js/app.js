window.addEventListener('load',function(){
  document.getElementById('modal').style.display="none";
});

var img=document.querySelector('.content-box-work');

img.addEventListener('click',function(event){
  event.preventDefault();
  console.log(event.target.src);
  document.getElementById('img-modal').src = event.target.src;
  document.getElementById('img-modal').style.border="10px solid white";
  document.getElementById('modal').style.display = "block";
});
