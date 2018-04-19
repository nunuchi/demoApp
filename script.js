
		var modalContent = document.getElementsByClassName('modal-content');

		

		function closeModal() {document.getElementById('theModal').style.display = 'none';}
		function openModal() {
			document.getElementById('theModal').style.display = 'block';
			document.getElementsByClassName('modal-content')[0].style.display = 'none';
			document.getElementsByClassName('modal-content')[1].style.display = 'block';

		}

		function closeMainMenu(){
			document.getElementById('mainMenu').style.display = 'none';
			document.getElementById('carTable').style.display = 'block';
		}

		function openMainMenu(){
			document.getElementById('mainMenu').style.display = 'block';
			document.getElementById('carTable').style.display = 'none';
		}

		function openReturnStuff() {
			document.getElementById('mainMenu').style.display = 'none';
			document.getElementById('returnStuff').style.display = 'block';
		}

		function closeReturnStuff() {
			document.getElementById('mainMenu').style.display = 'block';
			document.getElementById('returnStuff').style.display = 'none';
		}

		console.log('Test');
		var rowSelect = document.getElementsByClassName('carRow');
		console.log(rowSelect[0]);
		for (var i = 0; i< rowSelect.length; i++) {
			rowSelect[i].addEventListener('click', function(){
				rowSelect[i].parentNode.style.backgroundColor = blue;
			});
		}

		function changeTableRow(x) {
		var parent = x.parentNode.parentNode;

			
			parent.style.backgroundColor = 'blue';
		}

	
		

