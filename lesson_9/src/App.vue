<script setup>
import { ref } from 'vue';

const textInput = ref('');

const items = ref([
	{ id: 1, text: 'Read' },
	{ id: 2, text: 'Build' },
	{ id: 3, text: 'Write' },
]);

const addTask = () => {
	const idDate = new Date().getTime();

	if (textInput.value === '') {
		return;
	}

	const text = textInput.value;
	items.value.push({ id: idDate, text: text });
	textInput.value = '';
};

const removeTask = id => {
	items.value = items.value.filter(item => item.id !== id);
};
</script>

<template>
	<div class="container">
		<h1>TODO list</h1>
		<input
			type="text"
			v-model="textInput" />
		<button
			class="button"
			@click="addTask">
			Добавить
		</button>
		<ul>
			<li
				v-for="item in items"
				:key="item.id">
				{{ item.text }}
				<button @click="removeTask(item.id)">❌</button>
			</li>
		</ul>
	</div>
</template>

<style scoped>
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
	padding: 10px 20px;
	box-sizing: border-box;
	width: 280px;
	min-height: 61px;
	border-radius: 16px;
	font-size: 23px;
}
</style>
