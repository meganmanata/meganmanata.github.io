$('#fight').click(attack)

function attack () {
	
	// console.log(attack)
	$('.guys').attr('src', 'img/sci_fight_web.png');

	var inp = $('.left').val();
	//$('.left').val(parseInt(inp));
	
	var out;

	// console.log(inp, isNaN(inp));
	// console.log(isNaN(" "))

	if (isNaN(parseFloat(inp))){
		out = "Error!";
	}

	else {
		out = (inp-32)/1.8;
		out = out.toFixed(2);
	}

	$('.right').val( out );

	if ((parseFloat(inp)) > 70) {
		$('background').attr('src', 'weather-hot.png');
	} else {
		$('background').css('background', 'blue');
	}
	console.log()
}

$('#fightCtoF').click(attack2)

function attack2 () {
	
	// console.log(attack)
	$('.guys').attr('src', 'img/sci_fight_web.png');

	var inp = $('.right').val();
	//$('.left').val(parseInt(inp));
	
	var out;

	// console.log(inp, isNaN(inp));
	// console.log(isNaN(" "))

	if (isNaN(parseFloat(inp))){
		out = "Error!";
	}

	else{
		out = (inp*1.8)+32;
		out = out.toFixed(2);
	}

	$('.left').val( out );


}

$('#clear').click(reset)

function reset () {
	
	$('.left').val(" ");
	$('.right').val(" ");

	$('.guys').attr('src', 'img/sci_posing_web.png');
}

// $('#fight').click(bg-change)

// function bg-change
	
// 		if (inp > 70) {
// 		$('background').attr('src', 'weather-hot.png');
// 	} else {
// 		$('background').css('background', 'blue');
// 	}
// console.log(bg-change);