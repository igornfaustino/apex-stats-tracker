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
							<p>{{ profileData.segments[1].metadata.name }}</p>
						</li>
						<li
							v-for="stat in profileData.segments[1].stats"
							:key="stat.displayname"
						>
							<h4>{{ stat.displayName }}</h4>
							<p>
								{{ stat.displayValue }}
								<span>({{ stat.percentile }}%)</span>
							</p>
						</li>
					</ul>
				</div>
				<div class="legend-image">
					<img :src="profileData.segments[1].metadata.tallImageUrl" />
					<button type="button" class="btn">
						Choose other legend
					</button>
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
			const errorTok = error.response.data.split(':');
			this.error =
				errorTok.length > 1
					? errorTok[1].replace(/"/g, '')
					: errorTok[0];
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
	background-image: linear-gradient(#444, #1b0a10);
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
a,
.btn {
	display: inline-block;
	margin-top: 2rem;
	border: #fff 2px solid;
	padding: 0.5rem 0.8rem;
}
.btn:hover,
a:hover {
	border: #ccc 2px solid;
	color: #ccc;
}
.btn {
	display: block;
	margin: auto;
	font-size: 1.6rem;
}
.platform-avatar {
	width: 40px;
	margin-right: 0.7rem;
}
img {
	width: 100%;
}
.grid {
	display: flex;
	justify-content: center;
}
.space-between {
	justify-content: space-between;
}
li {
	/* background: rgba(0, 0, 0, 0.6); */
	border-left: 10px solid var(--border-color);
	border-top: 2px solid var(--border-color);
	border-bottom: 2px solid var(--border-color);
	padding: 1rem;
	margin-bottom: 0.7rem;
	border-radius: 0px 0px 0px 15px;
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
.legend-image {
	border: 2px solid var(--border-color);
	padding: 20px;
	max-width: 50%;
}
@media (max-width: 700px) {
	h1 {
		font-size: 1.5rem;
		display: block;
		text-align: center;
	}
	/* .platform-avatar {
		display: none;
	} */
	.grid {
		flex-direction: column-reverse;
		justify-content: space-between;
	}
	.legend-image {
		grid-column: 1;
		max-width: 100%;
	}
	li {
		border-right: 2px solid var(--border-color);
	}
	li p {
		font-size: 1.5rem;
	}
}
</style>
