(function($){
	var audioWrap = $('.media_music');
	var audio;
	var play  = $('.play');
	var pause  = $('.pause');
	var next  = $('.next');
	var prev  = $('.prev');
	var narr  = $('.narr').find('span');
	var btn = $('.btn');

	var aSrc = function(url,m_data){
		audioWrap.children('audio').remove();
		audioWrap.prepend('<audio>\
									 <source src="'+ url + m_data +'.ogg" type="audio/ogg" />\
									 <source src="'+ url + m_data +'.mp3" type="audio/mp3" />\
									 </audio>');
		audio = $(audioWrap).children('audio');
		narr.text(m_data);
	};

	btn.find('button').removeClass('action');
	btn.find('button').eq(1).addClass('action');

	var playList = [];
	playList[0] = 'Pierced_Arrows_-_01_-_Guns_of_Thunder';
	playList[1] = 'Chad_Crouch_-_Algorithms';
	playList[2] = 'Wimps_-_01_-_Monday';
	playList[3] = 'Kai_Engel_-_04_-_Moonlight_Reprise';
	playList[4] = 'Lobo_Loco_-_01_-_Brain_ID_1270';
	playList[5] = 'Chad_Crouch_-_01_-_Headwaters_Instrumental';

var url = '../media/audio/';

var n = 0;
aSrc(url, playList[0]);

play.on('click', function(e){
	e.preventDefault();
	audio[0].play();
	audioWrap.addClass("playing");
	btn.find('button').removeClass('action');
	$(this).addClass('action');
});

pause.on('click', function(e){
	e.preventDefault();
	audio.get(0).pause();
	audioWrap.removeClass("playing");
	btn.find('button').removeClass('action');
	$(this).addClass('action');
});

next.on('click', function(e){
	e.preventDefault();
	if(n >= playList.length-1){			n = 0;		}else{			n+=1;		}
	console.log(n);
	audio[0].pause();
	aSrc(url, playList[n]);
	btn.find('button').removeClass('action');
	$(this).addClass('action');
	var playingHas = audioWrap.hasClass('playing');
	console.log(playingHas);
	if( playingHas ){
		audio[0].play();
		btn.find('button').removeClass('action');
		$('.play').addClass('action');			
	}
});
prev.on('click', function(e){
	e.preventDefault();
	if(n <= 0){			n = playList.length-1;		}else{			n-=1;		}
	audio[0].pause();
	aSrc(url, playList[n]);
	btn.find('button').removeClass('action');
	$(this).addClass('action');
	var playingHas = audioWrap.hasClass('playing');
	console.log(playingHas);
	if( playingHas ){
		audio[0].play();
		btn.find('button').removeClass('action');
		$('.play').addClass('action');			
	}
});


})(jQuery);