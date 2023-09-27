// Handle sidebar--show class
// Grab sidebar, btn--close and btn--toggle

function sidebarProject() {
	const sidebar = document.querySelector('.sidebar');
	const closeBtn = document.querySelector('.btn--close');
	const menuBtn = document.querySelector('.btn--toggle');

	function showSidebar() {
		sidebar.classList.contains('sidebar--show') ? sidebar.classList.remove('sidebar--show') : sidebar.classList.add('sidebar--show');
	}

	menuBtn.addEventListener('click', showSidebar);
	closeBtn.addEventListener('click', showSidebar);
}

sidebarProject();
