$(document).ready(function () {

	var lights = 'on';

	//click function on #lightswitch

	// toggle classes switch-on & switch-off on lightswitch

	//toggle body a class of lights-off

	$('#lightswitch').click(function () {
		// console.log('click');

		if(lights == 'on') {
			console.log('lights on');

			if (lights == 'on') {
				$('#lightswitch').addClass('switch-off');
				$("#lightswitch").removeClass('switch-on');
				$('body').addClass('lights-off');

				lights = 'off';

			}
			
			


		}
		else {
			$('#lightswitch').removeClass('switch-off');
			$('#lightswitch').addClass('switch-on');
			$('body').removeClass('lights-off');
			lights = 'on';

			console.log('lights off');
		}
		
		// $('#lightswitch').toggleClass('switch-on');
		// $('#lightswitch').toggleClass('switch-off');
		// $('body').toggleClass('switch-off');
		// ALT CODE THAT DOESN'T NEED "removeClass / addClass"


	})

})
