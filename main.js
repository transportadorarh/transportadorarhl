$(window).scroll(function(){
		if($(this).scrollTop() > 40){
			$('.navbar-inverse').css({"background":"#3b3d40", "margin-top":"0px"});
			$('.navbar-inverse').addClass('compact');
		}if($(this).scrollTop() < 40){
			$('.navbar-inverse').css({"background":"transparent", "margin-top":"30px"});
			$('.navbar-inverse').removeClass('compact');
		}
	});

// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".loader").fadeOut("slow");
		$(".titulo-pagina").addClass("animated fadeInDown");
		$("section#empresa .paragraphs").addClass("animated fadeInDownLit");
		$("section#servicos .col-md-6").addClass("animated fadeInDownLit");
		$("section#pracas-atendidas #pracas-interna").addClass("animated fadeInDownLit");
		$("section#frota .margin-top").addClass("animated fadeInDownLit");
		$("section#unidades .text").addClass("animated fadeInDownLit");
		$("section#contato .form-contato").addClass("animated fadeInDownLit");
	});


	document.addEventListener("DOMContentLoaded", function () {
		const counters = document.querySelectorAll('.counter');
		const speed = 500; // Velocidade do contador (maior = mais lento)
	
		const animateCounters = () => {
			counters.forEach(counter => {
				// Inicializa o contador com "+"
				counter.innerText = "+0";
	
				const updateCount = () => {
					const target = +counter.getAttribute('data-target');
					const count = +counter.innerText.replace('+', ''); // Remove o "+" para contagem
	
					// Determine a quantidade a ser adicionada a cada iteração
					const increment = target / speed;
	
					if (count < target) {
						// Atualiza o contador
						counter.innerText = `+${Math.ceil(count + increment)}`; // Adiciona "+" ao número
						setTimeout(updateCount, 1);
					} else {
						counter.innerText = `+${target}`; // Garante que o valor final é o target
					}
				};
	
				// Adiciona o evento de scroll para animar
				const handleScroll = () => {
					const rect = counters[0].getBoundingClientRect();
					if (rect.top < window.innerHeight) {
						updateCount();
						window.removeEventListener('scroll', handleScroll);
					}
				};
	
				window.addEventListener('scroll', handleScroll);
			});
		};
	
		animateCounters();
	});
	
	
