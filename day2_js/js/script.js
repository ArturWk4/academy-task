let receveButton = document.getElementById("receive");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close");
let textArea = document.getElementsByTagName('textarea')[0];
let nameInput = document.querySelector('.contactform_name');
let phoneInput = document.getElementById('inputPhone');
let emailInput = document.getElementById('inputEmail');

let name = '';
let phone = '';
let email = '';

receveButton.addEventListener('click', function() {
	modal.style.display = 'block';
});


closeBtn.addEventListener('click', function() {
	modal.style.display = 'none';
});


nameInput.addEventListener('input', function() {
	name = nameInput.value;
});

phoneInput.addEventListener('input', function() {
	phone = phoneInput.value;
});

emailInput.addEventListener('input', function() {
	textArea.value = "Меня зовут " + name + "; \n"
					+ "Мой телефон " + phone + "; \n"
					+ "Мой email " + emailInput.value;
});

// не смог придумать способа как сделать так, чтоб 
// постепенно данные подгружались в textarea, 
// поэтому придумал такой небольшой лайфхак, 
// который можно счесть за плохой код :(