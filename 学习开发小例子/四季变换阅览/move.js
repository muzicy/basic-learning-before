// JavaScript Document

function move(ele,xfinal,yfinal,speed){
  	if(!document.getElementById) return false;
	var oElem=document.getElementById('img');
	if(oElem.movement) clearTimeout(oElem.movement);
	//console.log(oElem);
	var xpos=parseInt(oElem.style.left);
	var ypos=parseInt(oElem.style.top);
	//console.log(oElem.nodeName);
	
	if(xpos==xfinal && ypos==yfinal){ 
	  return true;
	}
	if(xpos>xfinal){
	  var speed=Math.ceil((xpos-xfinal)/10);
	  xpos-=speed;
	  //conlose.log(spos);
	}
	if(xpos<xfinal){
	  var speed=Math.ceil((xfinal-xpos)/10);
	  xpos+=speed;
	  //conlose.log(spos);
	}
	if(ypos>yfinal){
	   var speed=Math.ceil((ypos-yfinal)/10);
	  ypos-=speed;	
	}
	
	if(ypos<yfinal){
	  var speed=Math.ceil((ypos-yfinal)/10);
	  ypos+=speed;	
	}
	oElem.style.left=xpos+'px';
	oElem.style.top=ypos+'px';
	
	//var repeat="move("+ele+","+xfinal+","+yfinal+","+speed+")";
	oElem.movement=setTimeout(function(){
				move(ele,xfinal,yfinal,speed); 		
			   },30);	
}

