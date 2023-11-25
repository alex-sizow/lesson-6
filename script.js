const a = 'Привет мир!!!';

const b = 5;
const c = 7;

let name = '';

let input = document.getElementById('myInput').value;

function toggleName(string) {
	name = string;
}

function info(string) {
	alert(`Hello World! ${string} ${name} ${inputValue}`);
}

function inputAlert() {
	alert(document.getElementById('myInput').value);
}
