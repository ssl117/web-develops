function calcInvestMensual(){

	let inv_inicial = +document.getElementById("inv_inicial").value;
	let inv_mensual = +document.getElementById("inv_mensual").value;
	let tiempo_anual = +document.getElementById("tiempo_anual").value;
	
	const int_rate_anual = 0.06;
	const int_rate_mensual = int_rate_anual / 12;
	
	let inv_total = inv_inicial + inv_mensual * 12 * tiempo_anual;
	
	let inv_total_anual = inv_inicial

	let interes_total = 0;

	for(let i = 0; i < tiempo_anual; i++){
		for(let j = 0; j < 12; j++){
			inv_total_anual += inv_mensual;
			let int_mensual = inv_total_anual * int_rate_mensual;
			inv_total_anual += int_mensual;
			interes_total += int_mensual;
		}
	}

	let inv_acumulada = inv_total + interes_total;

	let perc_int_inv = (interes_total / inv_acumulada) * 100;

	document.getElementById("inv-total").innerHTML = 'USD ' + inv_total.toLocaleString('de-DE', {maximumFractionDigits:2});
	document.getElementById("interes-total").innerHTML = 'USD ' + interes_total.toLocaleString('de-DE', {maximumFractionDigits:2});
	document.getElementById("inv-acumulada").innerHTML = 'USD ' + inv_acumulada.toLocaleString('de-DE', {maximumFractionDigits:2});
	document.getElementById("perc-rentabilidad").innerHTML = perc_int_inv.toFixed(2) + '%';

}