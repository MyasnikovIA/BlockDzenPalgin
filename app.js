console.log(window.location.pathname);
if (window.location.hostname === 'dzen.ru') {
    // жду 5 секунд, чтобы все компоненты прогрузились
	const timerId = setTimeout(() => {
		
		// контейнер , в который помещяют рекламу
		if (window.location.pathname.indexOf("video")!==-1) {
			var pleer = document.getElementsByTagName('yaplayertag');
			if (pleer.length>0) {
				pleer[0].childNodes[pleer[0].childNodes.length-1].remove()
			}

			let timerId2 = setTimeout(function tick() {
				var rec2= document.querySelector('[style="width: 100%;"]')
				if (rec2) {
					rec2.remove();
				}
				rec2 = document.querySelector('[class="Modal-Content"]');
				if (rec2) {
					rec2.remove();
				}
				rec2 = document.querySelector('[class="Modal-Overlay"]');
				if (rec2) {
					rec2.remove();
				}
				timerId2 = setTimeout(tick, 1000); 
			}, 1000);
            console.log('Реклама на Yandex Dzen отключена');
			return;
		}


		var rectxt = document.querySelectorAll('[style="width: 100%;"]')
		if (rectxt.length>0) {
			rectxt.forEach(function(el){ 
			    el.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
			})
		}
		
        var rectxt2 = document.querySelectorAll('[style="position: relative; z-index: 0;"]');
		if (rectxt2.length>0) {
			rectxt2[0].remove()
		}

        var rectxt3 = document.querySelectorAll('[style="margin-bottom: 0px;"]');
		if (rectxt3.length>0) {
			rectxt3[0].remove()
		}
		let timerId2 = setTimeout(function tick() {
			var rec2= document.querySelector('[style="width: 100%;"]')
			if (rec2) {
				rec2.remove();
			}
			timerId2 = setTimeout(tick, 1000); 
		}, 1000);
		
		console.log('Реклама на Yandex Dzen отключена');
	}, 3000);
}
if (window.location.hostname === 'music.yandex.ru') {
		let timerId2 = setTimeout(function tick() {
			
			timerId2 = setTimeout(tick, 5000); 
		}, 5000);
}

if (window.location.hostname === 'vk.com') {
		let timerId2 = setTimeout(function tick() {
			var rec2 = document.querySelector('[id="stl_left"]')
			rec2 &&	rec2.remove();
			
			rec2 = document.querySelector('[id="box_layer_bg"]')
			rec2 &&	rec2.remove();
			
			rec2 = document.querySelector('[id="box_layer_wrap"]')
			rec2 &&	rec2.remove();
			
			
			/*
			rec2 = document.querySelector('[id="box_layer_bg"]')
			rec2 &&	rec2.remove();
						
			rec2 = document.querySelector('[aria-label="Закрыть"]')
			rec2 &&	rec2.remove();
			
			rec2 = document.querySelector('[class="popup_box_container UnauthActionBoxContainer"]')
			rec2 &&	rec2.remove();		
			
			rec2 = document.querySelector('[id="box_layer_wrap"]')
			rec2 &&	rec2.remove();
			*/
			timerId2 = setTimeout(tick, 3000); 
		}, 3000);
}

