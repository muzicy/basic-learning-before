// JavaScript Document
function change(){
	
 // var oBox=document.getElementById('box');
//  var oImg=document.getElementById('img');
 // console.log(oImg.nodeName);
  var aA=document.getElementsByTagName('a');
  var oUl=document.getElementById('ul1');
  var oBox=document.createElement('div');
  oBox.id='box';

  
  var oImg=document.createElement('img');
  oImg.setAttribute('id','img');
  oImg.src='../img/四季变换/initpintu_副本.jpg';
  oImg.style.position='absolute';
  oImg.style.left='0';
  oImg.style.top='0';
  oBox.appendChild(oImg); 
  
  //document.body.appendChild(oBox);
 insertAfter(oBox,oUl);

//  alert(oBox.parentNode.nodeName);
  
  document.getElementsByTagName('body')[0].appendChild(oBox);
  
  
  for(var i=0;i<aA.length;i++){
	clearTimeout(oImg.movement);
	aA[i].index=i;
	
	aA[i].onmouseover=function (){
		//console.log(this.index);
	  	move('img',this.index*(-210),0,30);
	}  
  }
};

function insertAfter(newElement,targetElement){
  var parent=targetElement.parentNode;
  if(parent.lastNode==targetElement){
	parent.appendChild(newElement);  
  } else {
	parent.insertBefore(newElement,targetElement.nextSibling);  
  }
};

addEventLoad(change);