<template>
	<div class="loader"></div>
</template>

<script>
export default {
	name: 'Loader',
};
</script>

<style scoped>
.loader {
	border: 8px solid var(--primary-color);
	border-top: 8px solid var(--loader-color);
	border-right: 8px solid var(--loader-color);
	border-bottom: 8px solid var(--loader-color);
	border-radius: 50%;
	width: 70px;
	height: 70px;
	animation: spin 2s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
