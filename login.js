
function initialize() {
	var input = document.getElementById('idNumber');
	var input2 = document.getElementById('pinNumber');
    var loginButton = document.getElementById('loginButton')

	input.addEventListener('keyup', function(event) {
    	if (event.keyCode === 13) {
            if(input.value.length<1||input2.value.length<1) {alert('Please enter an ID and Pin number!');}
    		else {document.location.href = 'menu.html';}
    	}//if (event.keyCode === 13) {
 	});//input.addEventListener('keyup', function(event) {

    loginButton.addEventListener('click', function(event) {
        if(input.value.length<1||input2.value.length<1) {alert('Please enter an ID and Pin number!');
        } else {
            document.location.href = 'menu.html';
        }//else
    });//loginButton.addEventListener('click', function(event) {

	input2.addEventListener('keyup', function(event) {    
    if (event.keyCode === 13) {
            if(input.value.length<1||input2.value.length<1) {alert('Please enter an ID and Pin number!');}
            else {document.location.href = 'menu.html';}
        }//if (event.keyCode === 13)
 });//input2.addEventListener('keyup', function(event) {   
}
	
		

