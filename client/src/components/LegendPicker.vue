<template>
	<div class="legend-picker">
		<div class="picker">
			<div v-on:click="goLeft">
				<i class="fas fa-chevron-left icon"></i>
			</div>
			<img
				:src="legends[actualLegend].metadata.imageUrl"
				class="legend-img"
			/>
			<div v-on:click="goRight">
				<i class="fas fa-chevron-right icon"></i>
			</div>
		</div>
		<button type="button" class="btn" v-on:click="selectLegend">
			{{ legends[actualLegend].metadata.name }}
		</button>
	</div>
</template>

<script>
export default {
	name: 'LegendPicker',
	props: ['legends', 'activeLegend'],
	data() {
		return {
			actualLegend: this.activeLegend,
		};
	},
	methods: {
		goLeft() {
			this.actualLegend =
				this.actualLegend > 0
					? this.actualLegend - 1
					: this.legends.length - 1;
		},
		goRight() {
			this.actualLegend = (this.actualLegend + 1) % this.legends.length;
		},
		selectLegend() {
			this.$emit('legend', this.actualLegend + 1);
		},
	},
};
</script>

<style scoped>
.legend-picker {
	position: relative;
	height: 100%;
}
.btn:hover,
a:hover {
	border: #ccc 2px solid;
	color: #ccc;
}
.btn {
	position: absolute;
	bottom: 25px;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 2rem;
	border: #fff 2px solid;
	padding: 0.5rem 0.8rem;
	display: block;
	font-size: 1.6rem;
	width: 50%;
}
.picker {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}
.legend-img {
	padding-top: 20px;
	max-height: 400px;
}
.icon {
	cursor: pointer;
	color: var(--border-color);
	font-size: 2rem;
	transition: 100ms all ease-in-out;
}
.icon:hover {
	color: #fff;
}
</style>
