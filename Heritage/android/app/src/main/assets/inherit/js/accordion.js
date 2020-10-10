//手风琴
var accor=function(acc,wd,speed,isOpen,isClickOpen){
	var $accor=acc;
	var accorImg=$accor.find('.img_ar img');
	var accorSet=function(){
		var wdC;
		var $accorLi=$accor.find('li');
		var leng=$accorLi.length;
		var wdParent;
		var liOWid;
		var patt1 = new RegExp(/^\d+%$/);
		var isPatt=patt1.test(wd);
		var perc=0;
		if(isPatt){
			perc=wd.replace("%","");
		}
		var widSetInit=function(){
		  wdParent=$accor.width();
		  if(isPatt){
			wd=parseInt(wdParent) * perc/100;
		  }
		  if(wdParent*0.7>wd){
			  wdC=wd;
		  }else{
			  wdC=wdParent*0.7;
		  }
		  $accorLi.find('.img_ar').css({'width':wdC});
		  liOWid=(wdParent-wdC-2)/(leng-1);
		  $accorLi.css({'width':wdParent/leng});
		  if(isOpen){
			 $accorLi.eq(0).addClass('cur').stop(true).animate({width:wdC},speed).siblings().removeClass('cur').stop(true).animate({width:liOWid},speed); 
		  }
		  setTimeout(function () {
			  $accor.css({'height':$accor.height()});
			  $accorLi.find('.img_ar').css({'height':$accor.height()});
		  }, 200);
		}
		widSetInit();
		$(window).resize(function(){
		  $accor.css({'height':'auto'});
		  $accorLi.find('.img_ar').css({'height':'auto'});
		  widSetInit();
		});
		if(isClickOpen){
			$accor.addClass('accorClick');
			$accorLi.children('a').remove();
			$accorLi.on('click',function(){
			   var _index = $(this).index();
			   $(this).addClass('cur').stop(true).animate({width:wdC},speed).siblings().removeClass('cur').stop(true).animate({width:liOWid},speed);
			})
		}else{
			$accor.addClass('accorNoClick');
			$accorLi.hover(function(){
			 var _index = $(this).index();
			 $(this).addClass('cur').stop(true).animate({width:wdC},speed).siblings().removeClass('cur').stop(true).animate({width:liOWid},speed);
			},function(){
			  if(!isOpen){
				  $accorLi.stop(true).animate({'width':wdParent/leng},speed).removeClass('cur');
			  }
			})
		}
	}
	// 判断图片加载的函数
    var accrIsImgLoad = function (_obj) {
        if (_obj.height() === 0) {
            var t_img;
            t_img = setInterval(function () {
                clearInterval(t_img);
                accrIsImgLoad(_obj);
            }, 10);
        } else {
            accorSet(_obj);
        }
    }

    for (var i = 0; i < accorImg.length; i++) {
        var accrImg = $(accorImg[i]);
        var newImg = new Image;
        newImg.index = i;
        accrIsImgLoad($(accorImg[i]));
        newImg.src = accrImg.attr('src');
    }
}