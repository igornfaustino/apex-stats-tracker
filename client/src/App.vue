<template>
	<div class="container">
		<Header />
		<router-view />
	</div>
</template>

<script>
import Header from './components/Header';

export default {
	name: 'app',
	components: {
		Header,
	},
};
</script>

<style>
:root {
	--primary-color: #1f212d;
	--secundary-color: #953036;
	--loader-color: #f3f3f3;
	--border-color: rgba(243, 243, 243, 0.6);
}
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
body {
	background: var(--primary-color);
	font-family: Arial, Helvetica, sans-serif;
	color: #fff;
	line-height: 1.6;
	min-height: 100vh;
	display: flex;
	padding-top: 1rem;
	justify-content: center;
}
a {
	color: #fff;
	text-decoration: none;
}
ul {
	list-style: none;
}
.v--modal {
	background: rgba(0, 0, 0, 0.8) !important;
}
.body-bg-no-image {
	background: var(--primary-color);
}
.body-bg-image {
	background: var(--primary-color) url('./assets/pathfinder.png') no-repeat
		top center;
}
.container {
	max-width: 960px;
	width: 100%;
	overflow: auto;
	padding: 0 2rem;
	height: 100%;
}
.form-group {
	margin: 1rem 0;
}
.search {
	background: rgba(0, 0, 0, 0.7);
	border: 4px #fff solid;
	margin-top: 1rem;
	padding: 2rem;
}
input,
select,
textarea {
	display: block;
	width: 100%;
	padding: 0.4rem;
	font-size: 1.2rem;
	border: 1px solid #ccc;
}
.btn {
	display: inline-block;
	background: var(--secundary-color);
	color: #fff;
	padding: 0.4rem 1.3rem;
	border: none;
	cursor: pointer;
	outline: none;
	margin-top: 1rem;
}
@media (max-width: 700px) {
	body {
		background: var(--primary-color);
	}
}
</style>
