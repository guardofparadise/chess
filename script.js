let chess = [
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
];

function draw() {
	let out = '';

	document.querySelector('#field').innerHTML = '';
	let m = 0;
	for(let i = 0; i < chess.length; i++) {
		let arr = chess[i];
		for(let k = 0; k < arr.length; k++) {
			if(m % 2 == 0) {
				document.querySelector('#field').innerHTML += '<div class="chess-block bg-black" data-x="' + k + '" data-y="' + i + '"></div>';
			} else {
				document.querySelector('#field').innerHTML += '<div class="chess-block" data-x="' + k + '" data-y="' + i + '"></div>';
			}
			m++;
		}
		m++;
	}
	document.querySelectorAll('.chess-block').forEach(el => el.onclick = horse)
}

function activate(var_x, num_x, var_y, num_y,cond) {
	if(cond === 1) {
		document.querySelector(`.chess-block[data-x="${(var_x + num_x)}"][data-y="${(var_y + num_y)}"]`).classList.add('active');	
	} else if(cond === 2) {
		document.querySelector(`.chess-block[data-x="${(var_x + num_x)}"][data-y="${(var_y - num_y)}"]`).classList.add('active');	
	} else if(cond === 3) {
		document.querySelector(`.chess-block[data-x="${(var_x - num_x)}"][data-y="${(var_y + num_y)}"]`).classList.add('active');	
	} else if(cond === 4) {
		document.querySelector(`.chess-block[data-x="${(var_x - num_x)}"][data-y="${(var_y - num_y)}"]`).classList.add('active');	
	} else {
		console.log('wrong argument')
	}

}

function horse() {
	document.querySelectorAll('.chess-block').forEach(el => {
		el.classList.remove('active');
		el.classList.remove('green');
	})

	let x = parseInt(this.dataset.x);
	let y = parseInt(this.dataset.y);

	this.classList.add('green');

	(x + 2 < 8 && y + 1 < 8)   && activate(x, 2, y, 1, 1);
	(x + 2 < 8 && y - 1 >= 0)  && activate(x, 2, y, 1, 2);
	(x + 1 < 8 && y + 2 < 8)   && activate(x, 1, y, 2, 1);
	(x - 1 >= 0 && y + 2 < 8)  && activate(x, 1, y, 2, 3);
	(x - 2 >= 0 && y + 1 < 8)  && activate(x, 2, y, 1, 3);
	(x - 2 >= 0 && y - 1 >= 0) && activate(x, 2, y, 1, 4);
	(x + 1 < 8 && y - 2 >= 0)  && activate(x, 1, y, 2, 2);
	(x - 1 >= 0 && y - 2 >= 0) && activate(x, 1, y, 2, 4);

}

draw();