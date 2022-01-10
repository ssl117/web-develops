function calcFlujoAnual(){

	let ingreso_1 = +document.getElementById("ingreso-1").value;
	let ingreso_2 = +document.getElementById("ingreso-2").value;
	let ingreso_3 = +document.getElementById("ingreso-3").value;

	let gasto_1 = +document.getElementById("gasto-1").value;
	let gasto_2 = +document.getElementById("gasto-2").value;
	let gasto_3 = +document.getElementById("gasto-3").value;

	let tiempo_anual = +document.getElementById("tiempo-flujo").value;

	let perc_ingresos = +document.getElementById("perc-ingresos").value / 100;
	let perc_gastos = +document.getElementById("perc-gastos").value / 100;
	
	let ingresos_totales = 0;
	
	let gastos_totales = 0;

	for(let i = 0; i < tiempo_anual; i++){
		for(let j = 0; j < 12; j++){
			ingresos_totales += ingreso_1;
			ingresos_totales += ingreso_2;
			ingresos_totales += ingreso_3;
			gastos_totales += gasto_1;
			gastos_totales += gasto_2;
			gastos_totales += gasto_3;
		}
	}

	if(perc_ingresos != 0 || perc_gastos != 0){

		let var_perc_ing = perc_ingresos;
		let var_perc_gastos = perc_gastos;

		if(perc_ingresos != 0){
			ingresos_totales = ingresos_totales + ingresos_totales * var_perc_ing;
		}

		if(perc_gastos != 0){
			gastos_totales = gastos_totales * (1 + var_perc_gastos);
		}
	}

	let ahorro_total = ingresos_totales - gastos_totales;

	document.getElementById("ing-totales").innerHTML = 'USD ' + ingresos_totales.toLocaleString('de-DE', {maximumFractionDigits:2});
	document.getElementById("gastos-totales").innerHTML = 'USD ' + gastos_totales.toLocaleString('de-DE', {maximumFractionDigits:2});
	document.getElementById("ahorro-total").innerHTML = 'USD ' + ahorro_total.toLocaleString('de-DE', {maximumFractionDigits:2});
	//document.getElementById("ing-totales").innerHTML = 'USD ' + perc_ingresos.toLocaleString('de-DE', {maximumFractionDigits:2});
	//document.getElementById("gastos-totales").innerHTML = 'USD ' + perc_gastos.toLocaleString('de-DE', {maximumFractionDigits:2});


}