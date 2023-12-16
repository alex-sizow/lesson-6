<script setup>
import { ref } from 'vue';

const tasks = ref([
	{ id: 1, text: 'Build' },
	{ id: 2, text: 'Read' },
	{ id: 3, text: 'Write' },
]);

const inputText = ref('');

const addTask = () => {
	const text = inputText.value;
	if (text === '') {
		return;
	}

	const idDate = new Date().getTime();
	tasks.value.push({ id: idDate, text: text });
	inputText.value = '';
};

const removeTask = id => {
	tasks.value = tasks.value.filter(task => task.id !== id);
};
</script>

<template>
	<div class="container">
		<h1>TODO list</h1>
		<input
			type="text"
			v-model="inputText" />
		<button
			class="button"
			@click="addTask">
			Добавить
		</button>
		<ul>
			<li
				v-for="task in tasks"
				:key="task.id">
				{{ task.text }}
				<button @click="removeTask(task.id)">❌</button>
			</li>
		</ul>
	</div>
</template>

<style scoped>
* {
	margin: 0;
	padding: 0;
	border: 0;
	list-style: none;
}

.container {
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;
	padding-top: 100px;
	color: white;
}

h1 {
	font-size: 30px;
}

ul {
	font-size: 24px;
	display: flex;
	flex-direction: column;
	gap: 15px;
}

ul > li {
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
}

ul > li > button {
	background-color: rgb(57, 52, 52);
	position: absolute;
	right: 12px;
	font-size: 24px;
}

.button {
	width: 280px;
	padding: 15px 30px;
	background-color: bisque;
	color: black;
	font-size: 27px;
	border-radius: 16px;
	transition: all 0.3s ease;
}

.button:active {
	transition: all 0.3s ease;
	background-color: rgb(249, 200, 139);
	scale: 0.9;
}

input {
	background-color: aliceblue;
	color: black;
	padding: 10px 20px;
	box-sizing: border-box;
	width: 280px;
	min-height: 61px;
	border-radius: 16px;
	font-size: 23px;
}
</style>
