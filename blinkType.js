$(
	var startfunction = function() {
		setInterval("checkLocate()", 1000);
	}

	var checkLocate = (function() {
		window.global.meter = getDistance(window.global.rat, window.global.lon);

		led = new VincleLed(100, 0.1);
		led.frequencyL = 100;

		if (window.global.meter <= 1) {
			led.frequencyR = 100;
		};

		else if (window.global.meter < 2) {
			led.frequencyR = 10
		};

		else if (window.global.meter < 3) {
			led.frequencyR =8;
		};

		else if (window.global.meter < 4) {
			led.frequencyR =6;
		};

		else if (window.global.meter < 5) {
			led.frequencyR =5;
		};

		else if (window.global.meter < 6) {
			led.frequencyR =4;
		};

		else if (window.global.meter < 7) {
			led.frequencyR =3;
		};

		else if (window.global.meter < 8) {
			led.frequencyR =1;
		};

		else if (window.global.meter < 9) {
			led.frequencyR =0.5;
		};

		else {
			led.frequencyR = 0.1;
		};

		led.on();
	});
)