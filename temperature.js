"use strict"

function calculate() {

	var result;
	var original = document.getElementById("original");
	var temp = original.value;
	var regexp = /-?[0-9]*\.?[0-9]*[a-zA-Z]+/
  
        var m = temp.match(regexp);
        m = m[0];
  
        if (m) {
           var num = m.substring(m.length-1, 0);
           var type = m.substring(1, m.length-1);
           num = parseFloat(num);
           if (type == 'c' || type == 'C') {
              result = (num * 9/5)+32;
              result = result;
              converted.innerHTML = result + 'F';
          } else {
              result = (num - 32)*5/9;
              result = 	result;
              converted.innerHTML = result + 'C';
          }
	}else {
	  converted.innerHTML = "ERROR! Try something like '-4.2' instead";
	}
}
