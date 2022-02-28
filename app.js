const toggle = document.querySelector('#toggle');
const toggleBtn = document.querySelector('#toggle-btn');
const basicPrice = document.querySelector('#basicPrice');
const profPrice = document.querySelector('#profPrice');
const masterPrice = document.querySelector('#masterPrice');

toggle.addEventListener('click', () => {
	toggleBtn.classList.toggle('toggle-container--box--move');
	if (toggleBtn.classList.contains('toggle-container--box--move')) {
		basicPrice.textContent = '$19.99';
		profPrice.textContent = '$24.99';
		masterPrice.textContent = '$39.99';
	} else {
		basicPrice.textContent = '$199.99';
		profPrice.textContent = '$249.99';
		masterPrice.textContent = '$399.99'
	}
});