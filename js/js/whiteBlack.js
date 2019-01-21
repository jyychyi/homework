function whiteBlack(data) {

	var i, len, red, green, blue, alpha, average;

	for(i = 0, len = data.length; i < len; i += 4) {
		red = data[i];
		green = data[i + 1];
		blue = data[i + 2];
		alpha = data[i + 3];

		average = Math.floor((red + green + blue) / 3);

		data[i] = average;
		data[i + 1] = average;
		data[i + 2] = average;
	}
	return data;
}