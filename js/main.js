function qiao() {
                var str = document.getElementById("gongde");
                var num = str.innerText;
                num++;
                str.innerText = num;
				
				var audio = new Audio("audio/muyu.mp3");
				audio.play();
				
				$("#jiayi").show();
				setTimeout(function() { $("#jiayi").hide(); }, 600);
            }

