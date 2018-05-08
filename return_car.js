function autoInit() {
	var inputKeyUp = document.getElementById('returnInput');
	var inputButton = document.getElementById('returnButton');

	inputKeyUp.addEventListener('keyup', function(e) {
		if (e.keyCode == 13){
			if (inputKeyUp.value.length !== 0) {
            	if(inputKeyUp.value >= 7264 && inputKeyUp.value <= 7354) {alert('The return mileage has been accepted, please return the key to the respective storage locker. Redirecting to main menu.');document.location.href = 'menu.html';}
            	else{alert('There seems to be an issue with the the amount of miles accumulated in regardes to amount of time spent going out, an error report has been made for the adminstrator to check.');}
        	} else {
        		alert('Please provide a return mileage.')
        	}
        }
	});

	inputButton.addEventListener('click', function(e) {
		if (inputKeyUp.value.length !== 0) {
            if(inputKeyUp.value >= 7264 && inputKeyUp.value <= 7354) {alert('The return mileage has been accepted, please return the key to the respective storage locker. Redirecting to main menu.'); document.location.href = 'menu.html';}
            else{alert('There seems to be an issue with the the amount of miles accumulated in regardes to amount of time spent going out, an error report has been made for the adminstrator to check.');}
        } else {
        	alert('Please provide a return mileage.')
        }
	});
}