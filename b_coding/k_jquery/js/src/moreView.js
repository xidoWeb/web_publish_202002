(function($){
	var content = $('.content');

	var sampleCode = '<div class="person">\
											<div class="img"><img src="" alt=""></div>\
											<dl>\
												<dt>name</dt><dd class="peopleName">xido lee</dd>\
												<dt>email</dt><dd class="email">xidoweb@gmail.com</dd>\
											</dl>\
										</div>';

  // content.append(sampleCode);

	$.ajax({
		url:"../data/people.json",
	}).done(function(data){
		console.log(data);
		var i=0;
		var person ;
		for(; i<20; i++){
			content.append(sampleCode);
			person = $('.person');
			person.eq(i).find('.peopleName').text( data[i].name );
			person.eq(i).find('.email').text( data[i].email );
		}



	});



})(jQuery);