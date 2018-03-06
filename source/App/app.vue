<template>
	<div id="vue">
		<h1>Hello, {{ framework }}</h1>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				framework: "Demonstration"
			}
		}
	}
</script>

<style lang="scss" scoped>

	h1{
		color:teal;
		box-shadow: 0px 1px 0px;
	}	
</style>