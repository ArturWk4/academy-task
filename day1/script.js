(function myApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа");

	(function showSkills() {
		let skills = ["JS", "C++", "Java", "React", "Photoshop", "SQL"];
		for(let i = 0; i < skills.length; ++i) {
			document.write("Я владею " + skills[i] + "<br>");
		}

	})();

	setTimeout(function() {
		if(age > 18) {
			alert(name + " совершеннолетний!");
		} else {
			alert(name + " несовершеннолетний!");
		}
	}, 500);

	(function calcPow(arg) {
		console.log("Число " + arg + "в квадрате == " + arg * arg);
	})(4);

})("Артур", 17);