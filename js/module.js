var nico  = (function() {
	//Selectors
	var navButtons = document.querySelectorAll('button.nav');
	var timer = document.querySelector('#timer');
	var h = navButtons[0].style.height;
	document.querySelector('.content').style.marginTop = h;
	//Statics
	var vis = ' visually-hidden';
	var act = ' active';
	var spa = ' ';
	var co = '.content.active';
	var navb = 'activeNav';


	//Navigation handlers
	navButtons.forEach(function() {
		this.addEventListener("click",navigation);
	});

	var d = window.setInterval(function() {
		var date = new Date();
		var now = date.toLocaleString();
		timer.innerHTML = now;
	}, 1000);


	function navigation() {
			// navbutton clicked state
			var allactive = document.querySelectorAll('.activeNav'),
			 nove = allactive[0].className.split(spa);
			allactive[0].className = nove[0] + spa + nove[1];
			this.className = this.className + spa + navb;
			//navigation
			var active = document.querySelector(co),
			 more = active.className.split(spa);
			active.className = more[0] + vis;
			var classnames = this.className.split(spa),
			target = document.getElementById(classnames[0]),
			c = target.className.split(spa);
			target.className = c[0] + act;
			//deepLinkModule.linkChange(target);
	}

		// title

	//image fits to screen #responsive

})();

var responsive = (function() {
		var nice = document.querySelector('#lo');
		var image = document.querySelector('#header img');
		var textcontent = document.querySelectorAll('.content');
		var footer = document.querySelector('footer');
		var nav = document.querySelector("#navigator");
		var px = 'px';
		var em = 'em';

		window.onresize = function(event) {
		 	frontimage();
		 	title();
		 	textindent();
		 	footertext();
			textButtonIndent
		 	//onvalueNULL();
    };

    	function title() {
    		var width = document.body.clientWidth,
    		 mid = width / 2,
				 	mid1 = mid - 275;
		 			nice.style.left = mid1.px();
    	}
    	function frontimage() {
    		var width = document.body.clientWidth,
    		height = document.body.clientHeight;
				image.polyStyle({
					width:width,
					height:(250).px(),
					text:"wait a second",
					background:"auqua",
				});
				var f = setTimeout(function() {
						image.src = ('https://unsplash.it/'+(width-4)+'/'+250+'/?random');
				},1000);

    		//image.setColor('abc');
    	}

			function loopthroughPanels(customPadding,customfontsize) {
				textcontent.forEach(function() {
					this.polyStyle({
						padding:customPadding,
						fontSize:customfontsize,
					});
				})
			}

		function textindent() {
    		var width = document.body.clientWidth;
    		if(width > 1000) {
					//console.log("yes");
    			loopthroughPanels((100).px(),(14).px());
    		} else {
    			loopthroughPanels((50).px(),(1.5).em());
					//console.log("no");
    		}
    	};
      //testing my framework
      setTimeout(_=>{
        document.querySelector("#apples").polyStyle({"height":(100).vh()});
      },10000);


			function textButtonIndent() {
				const width = document.body.clientWidth;
				console.log(nav);

				if(width > 1000) {
					nav.polyStyle({
						fontSize:(1.5).em(),
					});
					console.log(nav.firstChild);
				}
			};



    	function shortBodyWidth() {
    		//document.body.clientWidth = window.deviceWidth;
    	}
    	shortBodyWidth();

    	function footertext() {
    		var width = document.body.clientWidth;
				if(width < 400) {
    			footer.style.fontSize = 8.0.px();
    		} else {
    			footer.style.fontSize = 12.0.px();
    		}
    	}


    	title();
    	frontimage();
    	textindent();
    	footertext();
			textButtonIndent();

})();
