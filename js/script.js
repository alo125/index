const text = document.querySelector('.text');
const text2 = document.querySelector('.text-2');

window.addEventListener('scroll', function() {
	var value = window.scrollY;

	text.style.left = value * 0.5 + 'px';
	text2.style.left = -value * 0.5 + 'px';
});