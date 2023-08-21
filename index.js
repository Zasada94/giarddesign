const searchForm = document.getElementById("searchForm");
const searchIcon = document.getElementById("searchIcon");

searchIcon.addEventListener("click", () => {
	searchForm.classList.toggle("active");
});
