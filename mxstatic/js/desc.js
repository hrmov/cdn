		<script>
        var vod_content = document.querySelector(".vod_content span");
        var str = vod_content.innerHTML.trim();
        var shrink = document.querySelector('.shrink')
        if (str.length >= 150) {
            shrink.style.display = 'none'
            vod_content.innerHTML = str.substring(0, 150) + "..." + `<a href="javaScript:;" class="morecontent">展开</a>`;
            var btn = document.getElementsByClassName("morecontent")[0];
            var isOn = false;
            btn.onclick = openClick
        } else {
            shrink.style.display = 'none'
        }
        function openClick() {
            isOn = !isOn;
            var shrink = document.querySelector('.shrink')
            if (isOn == true) {
                vod_content.innerHTML = str;
                shrink.style.display = 'inline'
                shrink.onclick = shrinkClick
            } else {
                vod_content.innerHTML = str.substring(0, 150) + "..." + "";
            }
        }
        function shrinkClick() {
            isOn = !isOn;
            if (isOn == true) {
                vod_content.innerHTML = str;
                shrink.innerHTML = '收起'
            } else {
                vod_content.innerHTML = str.substring(0, 150) + "..."
                shrink.innerHTML = '展开'
            }
        }
      $('.gotodownloadlist').click(function(){$('html,body').animate({scrollTop:$('#download-list').offset().top}, 800);});   
		</script>