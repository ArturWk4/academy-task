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

	let item;
	let btn;
	for(let i = 0; i < buttons.length - 1; ++i) {
		buttons[i].addEventListener('click', function() {
			item = products[i].cloneNode(true);
			btn = item.querySelector('button');
			btn.textContent = 'Удалить';
			//btn.remove();
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

	for(let i = 0; i < buttons.length; ++i) {

	}

	open.addEventListener('click', openCart);
	btnClose.addEventListener('click', closeCart);

	// доп задание закину чуть позже
});