function addTax (subtotal, taxRate) {
	var total = subtotal * (1 + (taxRate/100));
	var total = Math.round( total * 10) / 10;
	console.log(typeof total);
	return total;
}