document.addEventListener("DOMContentLoaded", function(event) { 
	// Problème
	// =============
	// 
	// Définition du problème.
	// ------------------------------------------------------
	// 
	// La navigation à travers la page n'est pas facile à cause du trop grand nombre d'élèves listé.
	// 
	// Résolution du problème.
	// ------------------------------------------------------
	// 
	// Au vue du grand nombre d'étudiant lister dans la page web,
	// il serait intéressant de procurer une pagination afin d'en faciliter la navigation
	// 
	// Planification
	// =============

	// Selectionner tous les élèves de la page
	var studentItem = document.getElementsByClassName("student-item");
	var studentList = document.getElementsByClassName("student-list");
	var page = document.getElementsByClassName("page")[0];

	var createButton = function () {
		var pagination	= document.createElement("div")
		var ul			= document.createElement("ul");

		pagination.className = "pagination";

		page.appendChild(pagination);
		pagination.appendChild(ul);

		var paginationCounter = 0;

		for (i = 0; i <= studentItem.length; i = i + 10) {
		// 	Procurer une pagination pour chaque 10 élèves dans la page
			var li 	= document.createElement("li");
			var a 	= document.createElement("a");
			
			ul.appendChild(li);
			li.appendChild(a);

			paginationCounter = paginationCounter + 1

			a.innerText = paginationCounter;
		}
	}

	var displayStudents = function (studentList) {
		// Quand je clique sur un bouton de la pagination
		var buttons = document.querySelectorAll(".pagination a");
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", function () {
				var linkNumber = this.innerText;
				var studentToHide = document.querySelectorAll(".student-item");
				for (var i = 0; i < studentToHide.length; i++) {
					studentToHide[i].style.display = "none";
				}
				var studentsToDisplay = [].slice.call(document.querySelectorAll(".student-item"));
				var displayStudents = studentsToDisplay.splice((linkNumber - 1) * 10, 10)
				for (var i = 0; i < displayStudents.length; i++) {
					displayStudents[i].style.display = "block";
				}
			})
		}
	}																																																																																																				 																													

	createButton();
	displayStudents(studentList);
});