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

	/**
	 * Store the main body of the page
	 * @type {node}
	 */
	var page = document.getElementsByClassName("page")[0];

	/**
	 * Store the students and the student list
	 * @type {node}
	 */
	var studentItem = document.getElementsByClassName("student-item");
	/**
	 * Create a pagination button for each 10 students in the page
	 */
	var createButton = function () {

		/**
		 * Create and store the elements of buttons
		 */
		var pagination = document.createElement("div")
		var ul = document.createElement("ul");

		pagination.className = "pagination";

		page.appendChild(pagination);
		pagination.appendChild(ul);

		var paginationNumber = 0;

		for (i = 0; i <= studentItem.length; i = i + 10) {

			var li 	= document.createElement("li");
			var a 	= document.createElement("a");
			
			ul.appendChild(li);
			li.appendChild(a);

			paginationNumber = paginationNumber + 1

			a.setAttribute("href", "#");
			a.innerText = paginationNumber;
		}
	}

	var createPlaceHolder = function () {
		var pageHeader = document.getElementsByClassName("page-header")[0];

		var studentSearch = document.createElement("div");
		studentSearch.className = "student-search";

		var input = document.createElement("input");
		input.setAttribute("placeholder", "Search for students...");

		var searchButton = document.createElement("button");
		searchButton.innerText = "Search";

		pageHeader.appendChild(studentSearch);
		studentSearch.appendChild(input);
		studentSearch.appendChild(searchButton);		
	}

	var displayStudents = function () {

		for (var i = 0; i < studentItem.length; i++) {
			studentItem[i].style.display = "none";
		}

		for (var i = 0; i <= 10; i++) {
			studentItem[i].style.display = "block";
		}

		var buttons = document.querySelectorAll(".pagination a");
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", function () {
				console.log("click");
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

	var searchStudent = function () {
		var searchInput = document.querySelector(".student-search input");
		var searchButton = document.querySelector(".student-search button");
		var studentName = document.querySelectorAll(".student-item h3");
		searchButton.addEventListener("click", function (st) {

			var str = searchInput.value;
			console.log(str);
			for (var i = 0; i < studentItem.length; i++) {
				studentItem[i].style.display = "none";
			}
			for (var i = 0; i < studentName.length; i++) {
				var name = studentName[i].innerText;
				var reg = new RegExp(str, "gi");
				if (name.match(reg)) {
					studentItem[i].style.display = "block";
				}
			}

		})

		console.log(searchInput);
	}
	
	createButton();
	createPlaceHolder();
	displayStudents();
	searchStudent();
});