// 

(function($){
	var vb = $('#viewBox');
	
	for(var i=0; i<5; i++){
		vb.append('<p><span>'+i+'</span><span>2</span><span>3</span></p>');
	}
	
	var p = vb.find('p');

  p.css({'width':'50px', 
			  'margin':'10px',
			  'backgroundColor':'#a5c',
				'color':'#fff', 
			  'float':'left'});

p.on('click', function(){
	$(this)
	.animate({'background-color':'#7af'});

  $(this).find('span').on('click', function(){
		$(this).css({'border':'2px solid #333'});
	})
});


})(jQuery);
