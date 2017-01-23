$('#fight').click(attack)

function attack () {
	
	// console.log(attack)
	$('.guys').attr('src', 'img/sci_fight_web.png');

	var inp = $('.left').val();
	//$('.left').val(parseInt(inp));
	
	var out;

	console.log(inp, isNaN(inp));
	console.log(isNaN(" "))

	if (isNaN(parseFloat(inp))){
		out = "Error!";
	}

	else{
		out = (inp-32)/1.8;
		out = out.toFixed(2);
	}

	$('.right').val( out );


}

$('#fightCtoF').click(attack)

function attack () {
	
	// console.log(attack)
	$('.guys').attr('src', 'img/sci_fight_web.png');

	var inp = $('.right').val();
	//$('.left').val(parseInt(inp));
	
	var out;

	console.log(inp, isNaN(inp));
	console.log(isNaN(" "))

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