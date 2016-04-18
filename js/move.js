(function(){
	var now = {row : 1}, last = {row : 0};
	var direction = {up : 1 , down : 2}
	var Animating = false;
	$(document).swipeUp(function(){
		if (Animating) return;
		if (now.row!=3) {
			last.row = now.row;
			now.row = now.row+1;
			pageMove(direction.up);
		};
		
	})
	$(document).swipeDown(function(){
		if(Animating) return;
		if (now.row!=1) {
			last.row = now.row
			now.row = now.row - 1;
			pageMove(direction.down);
		};
	})
	
	function pageMove(d){
		var nowPage = $('.page-' + now.row + '-1');
		var lastPage = $('.page-' + last.row + '-1');
		switch (d){
			case 1:
				moveIn = 'pt-page-moveFromBottom';
				moveOut = 'pt-page-moveToTop';
				break;
			
			case 2:
				moveIn = 'pt-page-moveFromTop';
				moveOut = 'pt-page-moveToBottom';
				break;
			
		}
		Animating = true;
		nowPage.removeClass("hide");
	
		lastPage.addClass(moveOut);
		nowPage.addClass(moveIn);
		setTimeout(function(){
			lastPage.removeClass('page-current');
			lastPage.removeClass(moveOut);
			lastPage.addClass("hide");
			lastPage.find("img").addClass("hide");
			
			nowPage.addClass('page-current');
			nowPage.removeClass(moveIn);
			nowPage.find("img").removeClass("hide");
			
			Animating = false;
		},600)
	}
})();