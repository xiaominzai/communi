function outReadBar(){
	var num = catid-39;
    $(".list_left_a").eq(num).addClass("sideBar_a_acitve");
    $(".waiji").eq(num).addClass("box-shadow");
    var dom = $(".waiji").eq(num);
    var speed;
    switch(num){
    	case 0: 
    	case 1:
    	case 2:speed = 600;
    	default:speed = 1500;
    }
    $.scrollTo(dom,speed);
}
function inReadBar(){
	var num = catid-32;
	$(".list_left_a").eq(num).addClass("sideBar_a_acitve");
	$(".waiji").eq(num).addClass("box-shadow");

	var dom = $(".list_left_a").eq(num);
	var speed;
	switch(num){
		case 0-2:speed = 500;break;
		default:speed = 1200;
	}
	$.scrollTo(dom,speed);
}
//这是为了侧边栏的选中展示
function readBar(){
	var num;
	if (catid > 22 && catid <= 25) {
		num = catid - 22;
	}else if(catid == 22){
		num = 0;
	}else if(catid == 20 || catid == 21){
		num = catid - 20;
	}else if(catid >= 58 && catid <= 60){
		num = catid - 58;
	}else if(catid >= 62 && catid <= 64){
		num = catid - 62; 
	}else if(catid == 65){
		num = 0;
	}
	$(".list_left_a").eq(num).addClass("sideBar_a_acitve");
}