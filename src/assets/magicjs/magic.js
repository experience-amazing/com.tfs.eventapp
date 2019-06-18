var doMagic = function () {
	// var all_elem = document.getElementsByTagName("*");

	//$("#testelem").css("font-size", "1em");
	var all_elem = $(".magic");


	for(var i=0; i < all_elem.length; i++) {
		var classes = all_elem[i].classList;
		applyStyle(classes, all_elem[i]);
	}

	function applyStyle(classes, elem) {
		// debugger;
		$.each(classes, function(index, single_class){
			if(!!checkClass(single_class)){
				var style_attr = single_class.substring(0, single_class.lastIndexOf("_")).replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
				style_attr = style_attr.replace("_", "-");
				var style_value = single_class.substring(single_class.lastIndexOf("_")+1);
				if(style_value.indexOf("|") != -1) {
					style_value = style_value.replace(/\|/g , " ");
				}
				// elem.style[style_attr] = style_value;
				if(!!style_attr) {
					$(elem).css(style_attr, style_value);
				}
			}
		});
	}

	function checkClass(single_class) {
		var class_tester = ["margin", "padding", "color", "font", "height", "text", "width", "display", 
		"position", "float", "clear", "border", "box", "right", "white"];

		for(var i = 0; i < class_tester.length; i++) {
			if(single_class.indexOf(class_tester[i]) != -1) {
				return true;
				break;
			}
		}

		return false;
	}
}


