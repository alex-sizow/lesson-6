<script setup>
import { ref } from 'vue';

const list = ref(['Сдать дз', 'Привет']);

const addTask = () => {
	list.value.push('sdfsd');
};
</script>

<template>
	<div class="container">
		<h1>TODO list</h1>
		<input
			type="text"
			id="myInput" />
		<button
			class="button"
			@click="addTask">
			Добавить
		</button>
		<ul id="list">
			<li
				v-for="(item, index) in list"
				:key="index">
				{{ item }}
				<button onclick="list">❌</button>
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	border: 0;
	list-style: none;
}

.container {
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	align-items: center;
}

body {
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;
	padding-top: 100px;
	color: white;
}

ul {
	font-size: 24px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	li {
		background-color: rgb(57, 52, 52);
		padding: 12px;
		border-radius: 10px;
		box-sizing: border-box;
		width: 280px;
		display: flex;
		align-items: center;
		min-height: 61px;
		height: auto;
		position: relative;
		button {
			background-color: rgb(57, 52, 52);
			position: absolute;
			right: 12px;
			font-size: 24px;
		}
		.button:active {
			transition: all 0.3s ease;
			background-color: rgb(249, 200, 139);
			scale: 0.9;
		}
	}
}

input {
	padding: 10px 20px;
	box-sizing: border-box;
	width: 280px;
	min-height: 61px;
	border-radius: 16px;
	font-size: 23px;
}
</style>
