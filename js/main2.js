var oBtn = document.getElementById("qiao");
var spanNum = document.getElementById("gongde");
oBtn.count = 0; //count既不是全局变量 也不是私有变量 只是oBtn的私有属性
oBtn.onclick = function() {
    spanNum.innerHTML = ++ this.count;
    //count保持不变 不销毁 --->在上次的结果上进行累加
	
	var audio = new Audio("audio/muyu.mp3");
	audio.play();
				
	$("#jiayi").show();
	setTimeout(function() { $("#jiayi").hide(); }, 600);
}
