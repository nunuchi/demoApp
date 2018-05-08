function autoInit() {
	var inputKeyUp = document.getElementById('returnInput');
	var inputButton = document.getElementById('returnButton');

	inputKeyUp.addEventListener('keyup', function(e) {
		if (e.keyCode == 13){
            if(inputKeyUp.value >= 7200 && inputKeyUp.value <= 7300) {alert('ok');}
            else{alert('no');}
        }
	});
}