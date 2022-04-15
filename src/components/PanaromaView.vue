<template>
	<div>
		<div class="container d-flex justify-content-center w-100 my-5">
			<div class="d-flex justify-content-center pano_link">
				<a
					href="https://roundme.com/tour/563030/view/1834700"
					target="_blank"
					rel="noopener noreferrer"
					class="btn-animated"
					><span></span>
					<span></span>
					<span></span>
					<span></span>Virtual olamga marhamat</a
				>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'panaromaView',
};
</script>
<style scoped>
.pano_link a {
	position: relative;
	padding: 20px 30px;
	z-index: 1;
	color: #ad8585;
	margin: 12px;
	display: inline-block;
	overflow: hidden;
	letter-spacing: 2.5px;
	text-align: center;
	text-transform: uppercase;
	text-decoration: none;
}
.btn-animated::before {
	content: '';
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background-color: #ad8585;
	opacity: 0.2;
	-webkit-transition: 0.2s opacity ease-in-out;
	transition: 0.2s opacity ease-in-out;
	z-index: -1;
}
.btn-animated:hover::before {
	opacity: 1 !important;
}
.btn-animated:hover {
	color: white !important;
}
.btn-animated span:nth-child(1) {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 2px;
	background: linear-gradient(to left, rgba(43, 8, 8, 0), #ad8585);
	animation: 2s animateTop linear infinite;
}

.btn-animated span:nth-child(3) {
	bottom: 0px;
	left: 0px;
	width: 100%;
	height: 2px;
	background: linear-gradient(to right, rgba(43, 8, 8, 0), #ad8585);
	animation: 2s animateBottom linear infinite;
}

.btn-animated span {
	position: absolute;
}
.btn-animated:hover span {
	color: white;
}
@keyframes animateTop {
	0% {
		width: 100%;
	}
	100% {
		width: 0%;
	}
}

@keyframes animateBottom {
	0% {
		width: 0%;
	}
	100% {
		width: 100%;
	}
}
</style>
