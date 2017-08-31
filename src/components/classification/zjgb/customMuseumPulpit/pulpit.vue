<template>
	<div id="exhibition">
		<div class="swipeDiv">
			<mt-swipe  :auto="4000" :show-indicators="false">
			  <mt-swipe-item style="background: orchid;">1</mt-swipe-item>
			  <mt-swipe-item style="background: orange;">2</mt-swipe-item>
			  <mt-swipe-item style="background: red;">3</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="exhibitList">
			<router-link to="MusemClassfication">
				<div class="exhibitBtn">
					<div class="ggjzbtnBox">
						研究/书籍	
					</div>
					<div class="imgBox">
						<img src="../../../../assets/img/yjsj.png" alt="" />
					</div>
				</div>
			</router-link>
			<div class="exhibitBtn">
				<div class="ggjzbtnBox">
					讲座咨询
				</div>
				<div class="imgBox">
					<img src="../../../../assets/img/jzzx.png" alt="" />
				</div>
			</div>
			<div class="exhibitBtn">
				<div class="ggjzbtnBox">
					往期回顾
				</div>
				<div class="imgBox">
					<img src="../../../../assets/img/wqhg.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>