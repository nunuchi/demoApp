function autoInit() {
	var inputKeyUp = document.getElementById('returnInput');
	var inputButton = document.getElementById('returnButton');
	var initialKeyUp = document.getElementById('initialInput');

	inputKeyUp.addEventListener('keyup', function(e) {
		if (e.keyCode == 13){
			if (inputKeyUp.value.length !== 0 && initialKeyUp.value.length !== 0) {
            	if(parseInt(initialKeyUp.value) == 111222) {
        		alert('It seems like the original mileage is incorrect, an error report has been made and sent to the systems adminstrator.');
        		} else {
            		if (parseInt(inputKeyUp.value) >= parseInt(initialKeyUp.value) && parseInt(inputKeyUp.value) <= parseInt(initialKeyUp.value)+100) {alert('The return mileage has been accepted, please return the key to the respective storage locker. Redirecting to main menu.');document.location.href = 'menu.html';}
            		else {alert('There seems to be an issue with the the amount of miles accumulated in regardes to amount of time spent going out, an error report has been made for the adminstrator to check. Hint: enter a value up to 100 greater than the original!');}
        		}
        	}//if !== 0 end
            else {alert('Please provide both an initial and return mileage.')}
		}
	});

	initialKeyUp.addEventListener('keyup', function(e) {
		if (e.keyCode == 13){
			if (inputKeyUp.value.length !== 0 && initialKeyUp.value.length !== 0) {
                if(parseInt(initialKeyUp.value) == 111222) {
                alert('It seems like the original mileage is incorrect, an error report has been made and sent to the systems adminstrator.');
                } else {
                    if (parseInt(inputKeyUp.value) >= parseInt(initialKeyUp.value) && parseInt(inputKeyUp.value) <= parseInt(initialKeyUp.value)+100) {alert('The return mileage has been accepted, please return the key to the respective storage locker. Redirecting to main menu.');document.location.href = 'menu.html';}
                    else {alert('There seems to be an issue with the the amount of miles accumulated in regardes to amount of time spent going out, an error report has been made for the adminstrator to check. Hint: enter a value up to 100 greater than the original!');}
                }
            }//if !== 0 end
            else {alert('Please provide both an initial and return mileage.')}
		}
	});

	inputButton.addEventListener('click', function(e) {
			if (inputKeyUp.value.length !== 0 && initialKeyUp.value.length !== 0) {
                if(parseInt(initialKeyUp.value) == 111222) {
                alert('It seems like the original mileage is incorrect, an error report has been made and sent to the systems adminstrator.');
                } else {
                    if (parseInt(inputKeyUp.value) >= parseInt(initialKeyUp.value) && parseInt(inputKeyUp.value) <= parseInt(initialKeyUp.value)+100) {alert('The return mileage has been accepted, please return the key to the respective storage locker. Redirecting to main menu.');document.location.href = 'menu.html';}
                    else {alert('There seems to be an issue with the the amount of miles accumulated in regardes to amount of time spent going out, an error report has been made for the adminstrator to check. Hint: enter a value up to 100 greater than the original!');}
                }
            }//if !== 0 end
            else {alert('Please provide both an initial and return mileage.')}
	});
}