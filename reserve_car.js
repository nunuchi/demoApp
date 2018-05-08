function autoInit() {
	var reserveClick = document.getElementById('reserveClick');
	var cancelClick = document.getElementById('cancelClick');
	var acceptClick = document.getElementById('acceptClick');
	var declineClick = document.getElementById('declineClick');
	var selectClick = document.getElementsByClassName('selectClick');
	var iconList = document.getElementsByClassName('iconSlide');
	var	imgList = document.getElementsByClassName('imgSlide');
	var imageModal = document.getElementById('imageModal');

	reserveClick.addEventListener('click', function(event) {
		document.getElementById('carTableDisplay').style.display = "block";
		document.getElementById('reservedTableDisplay').style.display = "none";
		cancelClick.style.borderStyle = 'outset';
		event.target.style.borderStyle = 'inset';
	});

	cancelClick.addEventListener('click', function(event) {
		document.getElementById('carTableDisplay').style.display = "none";
		document.getElementById('reservedTableDisplay').style.display = "block";
		reserveClick.style.borderStyle = 'outset';
		event.target.style.borderStyle = 'inset';
	});

	acceptClick.addEventListener('click', function(event) {
		document.getElementById('userAgreement').style.display = "none"
		alert("You're reservation has been sent!")
	});

	declineClick.addEventListener('click', function(event) {
		document.getElementById('userAgreement').style.display = "none"
	});

	for (var i = 0; i < selectClick.length; i++) {
    	selectClick[i].addEventListener('click', function(event) {
			document.getElementById('userAgreement').style.display = "block"
		});
	}//For End

	for (var i = 0; i < iconList.length; i++) {
    	iconList[i].addEventListener('click', function(event) {  
    		imageModal.style.display = 'block';
		});
	}//For End

	imageModal.addEventListener	('click', function(event) {//Clicking the Modal causes for the collapse of it, closing the image and modal
		imageModal.style.display = 'none';
		for(var i=0; i<document.getElementsByClassName('imgSlide').length; i++)
		{
			document.getElementsByClassName('imgSlide')[i].style.display = "none";
		}
	});
}

function imageModalOpen(num){//Opens the modal and show the specified image in it
	imageModal.style.display = 'block';
	document.getElementsByClassName('imgSlide')[num].style.display = "block";
}//Open Image Modal

function removeTable(item) {
	document.getElementsByClassName('carTable')[1].style.display = 'none';
	alert('You\'re reservation has been canceled.');
}