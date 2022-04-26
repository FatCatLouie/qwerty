
//===================
// Приборные функции
//===================

function initPribor(id,p){
	var obj=document.getElementById(id);
	console.log(obj.contentDocument.defaultView);
	obj.addEventListener("load",qwerty(),false);
}

function qwerty(){		
		p.obj=document.getElementById(id);			
		p.view=this.contentDocument.defaultView;	
		p.view.init(p.params);
	}