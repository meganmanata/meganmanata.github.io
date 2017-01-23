// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth

// $('#first').click(function (){
// 	$('#bigimage').attr('src', 'img/1.jpg')
// 	console.log(this)
// })

// $('#second').click(function (){
// 	$('#bigimage').attr('src', 'img/2.jpg')
// })

// $('#third').click(function (){
// 	$('#bigimage').attr('src', 'img/3.jpg')
// })

// $('#fourth, h1').click(fourthImage);

// function fourthImage () {
// 	$('#bigimage').attr('src', 'img/4.jpg')
// }

$('.thumb').click(function (){
	console.log($(this).attr('src'))

	var image = ($(this).attr('src'))
	$('#bigimage').attr('src', image)

	// OR

	// $('#bigimage').attr('src', $(this).attr('src'))

})
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
