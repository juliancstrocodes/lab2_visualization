// TODO: load the dataset
let attractions;
fetch("attractions.json")
	.then((response) => response.json())
	.then((data) => {
		attractions = data;
		filterData();
	});

function filterData(category) {
	let filteredCat;
	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
	if (category != undefined) {
		filteredCat = attractions.filter((attraction) => {
			return attraction.Category === category;
		});
	} else {
		filteredCat = attractions;
	}
	let mostVisited = filteredCat.sort((a, b) => b.Visitors - a.Visitors);
	mostVisited = mostVisited.slice(0, 5);

	renderBarChart(mostVisited);
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
const dropdown = document.querySelector("#attraction-category");

dropdown.addEventListener("change", (e) => {
	let currentSelection = e.target.value;
	filterData(currentSelection);
});
