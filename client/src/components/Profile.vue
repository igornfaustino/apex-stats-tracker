<template>
	<section>
		<div class="loading-area" v-if="loading">
			<Loader />
		</div>

		<div v-if="error">
			<h1>{{ error }}</h1>
			<router-link to="/">Go back</router-link>
		</div>

		<div v-if="profileData" class="container">
			<h1 class="gamertag">
				<img
					:src="profileData.platformInfo.avatarUrl"
					class="platform-avatar"
				/>
				{{ profileData.platformInfo.platformUserId }}
			</h1>
			<div class="grid">
				<div>
					<ul>
						<li>
							<h4>Selected Legend</h4>
							<p>{{ profileData.metadata.activeLegendName }}</p>
						</li>
						<li v-if="profileData.segments[1].stats.seasson2Wins">
							<h4>Seasson 2 Wins</h4>
							<p>
								{{
									profileData.segments[1].stats.seasson2Wins
										.displayValue
								}}
								<span>
									({{
										profileData.segments[1].stats
											.seasson2Wins.percentile
									}})
								</span>
							</p>
						</li>
						<li v-if="profileData.segments[1].stats.level">
							<h4>Apex Level</h4>
							<p>
								{{
									profileData.segments[1].stats.level
										.displayValue
								}}
								<span>
									({{
										profileData.segments[1].stats.level
											.percentile
									}}%)
								</span>
							</p>
						</li>
						<li v-if="profileData.segments[1].stats.kills">
							<h4>Lifetime Kills</h4>
							<p>
								{{
									profileData.segments[1].stats.kills
										.displayValue
								}}
								<span>
									({{
										profileData.segments[1].stats.kills
											.percentile
									}}%)
								</span>
							</p>
						</li>
						<li v-if="profileData.segments[1].stats.damage">
							<h4>Damage Done</h4>
							<p>
								{{
									profileData.segments[1].stats.damage
										.displayValue
								}}
								<span>
									({{
										profileData.segments[1].stats.damage
											.percentile
									}}%)
								</span>
							</p>
						</li>
					</ul>
				</div>
				<div>
					<img :src="profileData.segments[1].metadata.tallImageUrl" />
				</div>
			</div>
			<router-link to="/">Go back</router-link>
		</div>
	</section>
</template>

<script>
import axios from 'axios';
import Loader from './Loader';

export default {
	name: 'Profile',
	components: {
		Loader,
	},
	data() {
		return {
			loading: false,
			error: null,
			profileData: null,
		};
	},
	beforeCreate() {
		document.body.className = 'body-bg-no-image';
	},
	async created() {
		this.loading = true;
		try {
			const response = await axios.get(
				`/api/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`,
			);

			this.profileData = response.data.data;
			console.log(this.profileData);
		} catch (error) {
			this.error = error.response.data.split(':')[1].replace(/"/g, '');
		} finally {
			this.loading = false;
		}
	},
};
</script>

<style scoped>
.loading-area {
	display: flex;
	/* height: 100%; */
	justify-content: center;
	align-items: center;
}
.container {
	background: rgba(0, 0, 0, 0.5);
	color: #fff;
	max-width: 700px;
	margin: 1rem auto;
	padding: 2rem 1.5rem;
	border-radius: 20px;
}
h1.gamertag {
	font-size: 2rem;
	background: rgba(0, 0, 0, 0.6);
	padding: 0.3rem 0.5rem;
	text-align: center;
	border-radius: 20px;
	margin-bottom: 3rem;
	display: flex;
	align-items: center;
}
a {
	display: inline-block;
	margin-top: 2rem;
	border: #fff 2px solid;
	padding: 0.5rem 0.8rem;
}
a:hover {
	border: #ccc 2px solid;
	color: #ccc;
}
.platform-avatar {
	width: 40px;
	margin-right: 0.7rem;
}
img {
	width: 100%;
}
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
}
li {
	background: rgba(0, 0, 0, 0.6);
	padding: 1rem;
	margin-bottom: 0.7rem;
	border-radius: 10px;
}
li p {
	font-size: 2rem;
}
li:first-child p {
	font-size: 1.5rem;
}
li span {
	font-size: 1rem;
	color: #ccc;
}
@media (max-width: 500px) {
	h1 {
		font-size: 1.5rem;
		display: block;
		text-align: center;
	}
	.platform-avatar {
		display: none;
	}
	.grid {
		grid-template-columns: 1fr;
	}
	li p {
		font-size: 1.5rem;
	}
}
</style>
