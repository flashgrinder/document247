document.addEventListener('DOMContentLoaded', function () {

	let burgerMenu = document.querySelector('.burger-menu');
	let headerMenu = document.querySelector('.header__menu');

	function showHeaderMenu() {
		headerMenu.classList.toggle('header__menu_active');
	}

    burgerMenu.addEventListener('click', showHeaderMenu);
});