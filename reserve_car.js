function autoInit() {
	var reserveClick = document.getElementById('reserveClick');
	var cancelClick = document.getElementById('cancelClick');
	var acceptClick = document.getElementById('acceptClick');
	var declineClick = document.getElementById('declineClick');
	var selectClick = document.getElementsByClassName('selectClick');

	reserveClick.addEventListener('click', function(event) {
		document.getElementById('carTableDisplay').style.display = "block";
		document.getElementById('reservedTableDisplay').style.display = "none";
	})

	cancelClick.addEventListener('click', function(event) {
		document.getElementById('carTableDisplay').style.display = "none";
		document.getElementById('reservedTableDisplay').style.display = "block";
	})

	acceptClick.addEventListener('click', function(event) {
		document.getElementById('userAgreement').style.display = "none"
	})

	declineClick.addEventListener('click', function(event) {
		document.getElementById('userAgreement').style.display = "none"
	})

	for (var i = 0; i < selectClick.length; i++) {
    	selectClick[i].addEventListener('click', function(event) {
			document.getElementById('userAgreement').style.display = "block"
		});
	}
	


}
