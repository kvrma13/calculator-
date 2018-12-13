$(document).ready(function(){
	$("#add").on("click",function(){
	var num1 = Number($('#num1').val())
	var num2 = Number($('#num2').val())
	var answer = num1 + num2

	$("#answer").text(answer)
	})

})

$(document).ready(function(){
	$("#sub").on("click",function(){
	var num1 = Number($('#num1').val())
	var num2 = Number($('#num2').val())
	var answer = num1 - num2

	$("#answer").text(answer)
	})

})

	$(document).ready(function(){
	$("#multi").on("click",function(){
	var num1 = Number($('#num1').val())
	var num2 = Number($('#num2').val())
	var answer = num1 * num2

	$("#answer").text(answer)
	})

})
$(document).ready(function(){
	$("#div").on("click",function(){
	var num1 = Number($('#num1').val())
	var num2 = Number($('#num2').val())
	var answer = num1 / num2

	$("#answer").text(answer)
	})

})
