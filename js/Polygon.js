var Polygon = (function polygonFactory() {
  "use Strict";
  with(document) {
  polygonFactory.selectorsModule = {
    polyRow:querySelectorAll(".Poly_Row"),
    polyButton:querySelectorAll(".Poly_Button"),
    polyTable:querySelectorAll(".Poly_Table")
  };
};
  polygonFactory.exports = {};
  polygonFactory.defaultSettings = {
    row:{
      display:"inline-block",
      //position:"inherit",
      margin:"0",
      padding:"20 0 0 0",
      width:"50%",
      height:"100px",
      background:"yellow",
      textAlign:"center",
    },
    button:{

    },
    table:{

    },
  };

  polygonFactory.exports.toggle = function(callbackObject,ratio){
    if(ratio % 2 == 0) {
      callback1.call();
    } else {
      callback2.call();
    }
  };

  Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

  Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
  }
  NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
  }

  Element.prototype.polyStyle = function(styleObject) {
		var m = this;
    if(styleObject.length <= 1) {
      console.log("hi");
      var frag;
      for(var a in styleObject) {
        let b = styleObject[a].toString();
        frag = b;
      }
      eval("m.style."+a+"="+frag+";");
    } else {
      for(var prop in styleObject) {
  			var b = styleObject[prop].toString();
  			eval("m.style."+prop+"="+'b'+";");
   		}
    }
  };

  Array.prototype.hasNext = function(i) {
    if(typeof this[i+1] == 'undefined') {
      return false;
    } else  {
      return true;
    }
  };

  NodeList.prototype.forEach = function(callback) {
    for(var i = 0; i < this.length; i++) {
      callback.call(this[i],i);
    }
  };

  NodeList.prototype.forEachElementListener = function(event,callback) {
    this.forEach(function() {
      this.addEventListener(event, callback);
    });
  };

  Element.prototype.setColor = function(color) {
		this.style.background = color;
	};
	Number.prototype.percent = function() {
		return (this + "%");
	};

	Number.prototype.vh = function() {
		return (this + "vh");
	};

  Number.prototype.vw = function() {
    return (this + "vw");
  };

	Number.prototype.px = function() {
		return (this + "px");
	};

	Number.prototype.em = function() {
		return (this + "em");
	};

	polygonFactory.exports.random = function() {
		return Math.floor(Math.random() * (255));
	};
	/*
		grid Table returns a Node with a Table custom sized e.g (7,7)
	*/
	polygonFactory.exports.grid = function(x,y) {
		var table = document.createElement("table");
		table.setAttribute("id","grid");
		var rows = {};
		var columns = {};
		for(i=0;i<y;i++){
			rows[i] = document.createElement("tr");
			table.appendChild(rows[i]);
			for(z=0;z<x;z++){
				columns[z] = document.createElement("td");
				rows[i].appendChild(columns[z]);
			}
	  }
    table.style.width =  100.0.percent();
		table.style.height = 100.0.percent();
		return table;
	};


	/*
		You can select one cell out of the grid and manipulate it by simply typing [3,4].grid();
	*/
	Array.prototype.positionGrid = function() {
		var table = document.getElementById("grid");
		var child = table.childNodes;
		var searchedrow = child[this[0]];
		var searchedcol = searchedrow.childNodes;
		var target = searchedcol[this[1]];
		return target;
	};

  polygonFactory.exports.chance = function(chanceCoefficient,callbackFunction) {
    var destiny = false;
    var random = Math.floor(Math.random() * 100) + 1;
    if(random < chanceCoefficient) {
      destiny = true;
      callbackFunction.call(destiny);
    }
  };

  //export {gg};
  try {
    polygonFactory.selectorsModule.polyRow.forEach(function() {
      this.polyStyle(polygonFactory.defaultSettings.row);
    });
    polygonFactory.selectorsModule.polyRow.lastChild.polyStyle({background:"yellow",});
  } catch(error) {
    console.warn("there are currently no div Elments that contain 'Poly_div' in its classnames")
  }

	return polygonFactory.exports;

})();
