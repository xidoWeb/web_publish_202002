// dom_dropDown.js

var domDropDown = document.getElementsByClassName('drop_menu')[0];
var domDt = document.getElementsByTagName('dt');
var domDd = document.getElementsByTagName('dd');

var i = 0;
for(; i < domDt.length ; i++){
	domDt[i].setAttribute('tabindex', '0');
}

var DomDdFn = function( action ){
	var j=0;
	for(; j< domDd.length; j++){
		domDd[j].style.display = action;
	}
};

// DomDdFn('block');

domDropDown.addEventListener('click', function(){ DomDdFn('block'); });
domDropDown.addEventListener('mouseleave', function(){ DomDdFn('none'); });
domDt[0].addEventListener('focus', function(){ DomDdFn('block'); });
