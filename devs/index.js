window.onload = function() {
	var lang = navigator.language;
	var q1h1 = document.getElementById("q1h1");
	var r1h1 = document.getElementById("r1h1");
	var q2h1 = document.getElementById("q2h1");
	var r2h1 = document.getElementById("r2h1");
	var q3h1 = document.getElementById("q3h1");
	var r3h1 = document.getElementById("r3h1");
	
	var res1 = "Appers Devs is a network of developers who work at Appers developing what they propose, such as programs, applications, websites and among other sectors that involve programming. Appers Devs has a team specialized in each development sector, such as Java or C++ if it's for Android app development; Node.js, JavaScript, HTML and CSS for website development; and Python or C/C++ for creating programs.";
	
	var res2 = "You can create a desktop program, a website, or even a mobile app. You can create many things with Appers Devs, it depends on your preference, if you want an app, or a website or anything else that has programming involved, easy or difficult, we can help you.";
	
	var res3 = "It's simple! Just click on the button below and start the your so dreamed plan realization.";
	
	lang = lang.split("-")[0];
	if (lang === "pt") {
		q3h1.innerHTML = "• Como contratar a Appers Devs?";
	    q2h1.innerHTML = "• No que a Appers Devs pode me ajudar?";
	    res3 = "É simples! Basta clicar no botão abaixo e comece a realização o seu sonho tão sonhado.";
	    res2 = "Você pode criar um programa de computador, um website ou até mesmo um aplicativo para dispositivos móveis. Você pode criar várias coisas com a Appers Devs, isso depende de sua preferência, se você quiser um app, ou um site ou qualquer outra coisa que contém programação envolvida, fácil ou difícil, podemos te ajudar.";
		res1 = "A Appers Devs é uma rede de desenvolvedores que trabalham na Appers desenvolvendo o que os propõem, como programas, aplicativos, websites e entre outros setores que envolvem programação. A Appers Devs tem uma equipe especializada em cada setor de desenvolvimento, como para Java ou C++ se for para desenvolvimento de apps para Android; Node.js, JavaScript, HTML e CSS para desenvolvimento de websites; e Python ou C/C++ para criação de programas.";
		document.title = "Conheça nossos devs";
		q1h1.innerHTML = "• O que é Appers Devs?";
	} else if (lang === "es") {
		q3h1.innerHTML = "• Cómo contratar Appers Devs?";
		q2h1.innerHTML = "• En qué me puede ayudar Appers Devs?";
		res3 = "Es simple! Simplemente haga clic en el botón a continuación y comience a realizar su sueño tan esperado.";
		res2 = "Puede crear un programa de escritorio, un sitio web o incluso una aplicación móvil. Puede crear muchas cosas con Appers Devs, depende de su preferencia, si desea una aplicación, un sitio web o cualquier otra cosa que tenga programación involucrada, fácil o difícil, podemos ayudarlo.";
		res1 = "Appers Devs es una red de desarrolladores que trabajan en Appers desarrollando lo que ellos proponen, como programas, aplicaciones, sitios web y entre otros sectores que involucran la programación. Appers Devs cuenta con un equipo especializado en cada sector de desarrollo, como Java o C++ si se trata de desarrollo de apps para Android; Node.js, JavaScript, HTML y CSS para el desarrollo de sitios web; y Python o C/C++ para crear programas.";
		document.title = "Conoce a nuestros devs";
		q1h1.innerHTML = "• Qué es Appers Devs?";
	}
	
	r3h1.innerHTML = res3;
	r2h1.innerHTML = res2;
	r1h1.innerHTML = res1;
}