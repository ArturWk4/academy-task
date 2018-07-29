window.addEventListener('DOMContentLoaded', function() {
	let products = document.querySelectorAll('.product');
	let buttons = document.getElementsByTagName('button');
	let open = document.getElementsByClassName('open')[0];

	(function createCart() {
		let cart = document.createElement('div');
		let field = document.createElement('div');
		let heading = document.createElement('h2');
		let btnClose = document.createElement('button');

		cart.classList.add('cart');
		field.classList.add('cart-field');
		btnClose.classList.add('close');

		btnClose.textContent = 'Закрыть';
		heading.textContent = 'В нашей корзине: ';

		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(field);
		cart.appendChild(btnClose);
	}());


	let field = document.querySelector('.cart-field');
	let cart = document.querySelector('.cart');
	let btnClose = document.querySelector('.close');

	for(let i = 0; i < buttons.length; ++i) {
		buttons[i].addEventListener('click', function() {
			let item = products[i].cloneNode(true);
			let btn = item.querySelector('button');

			btn.remove();
			field.appendChild(item);
			products[i].remove();

		})
	}

	function openCart() {
		cart.style.display = 'block';
	};

	function closeCart() {
		cart.style.display = 'none';
	};

	open.addEventListener('click', openCart);
	btnClose.addEventListener('click', closeCart);
	// доп задание закину чуть позже
});