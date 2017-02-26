// JavaScript Document

function move(xfinal,yfinal,speed){
 
 var oBox=document.getElementById('box');
 var xpos=parseInt(oBox.offsetLeft);
 var ypos=parseInt(oBox.offsetTop);
 //console.log(xpos);
 //console.log(ypos);
 if(xpos<=xfinal && ypos>=yfinal){
   return true;	 
 }
 if(xpos<xfinal){
   xpos+=speed;
   oBox.style.left=xpos+'px';
 }
 if(ypos<yfinal){
	ypos+=speed;
   oBox.style.top=ypos+'px';	 
 }
 
 //var repeat="move("+xfinal+","+yfinal+","+speed+")";
 
 movement=setTimeout(function(){
		  move(400,500,10);					  
		 },1000);
};

window.onload=function(){
	move(400,500,10);
}