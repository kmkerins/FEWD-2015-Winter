var $input,
	$output,
	$button;

$(document).ready(function() {
	$input = $("#input");
	$output = $("#output");
	$button = $("#button");

	$button.on("click", onButtonClick);
});

functon onButtonClick(e) {
	// 1: get value of input
	var value = $input.val();

	//2: evaluate input
	try {
		value = eval(value);
	} catch(exception) {
		value = 0;
	}
	if (isNAN(value)) {
		value = 0
	}

	//3: update output with result
	$output.val(value);
}