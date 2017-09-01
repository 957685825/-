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
			<router-link to="MusemClassfication?type=yjsj&tittle=研究书籍">
				<div class="exhibitBtn">
					<div class="ggjzbtnBox">
						研究/书籍	
					</div>
					<div class="imgBox">
						<img src="../../../../assets/img/yjsj.png" alt="" />
					</div>
				</div>
			</router-link>
			<router-link to="MusemClassfication?type=jzzx&tittle=讲座咨询">
				<div class="exhibitBtn">
					<div class="ggjzbtnBox">
						讲座咨询
					</div>
					<div class="imgBox">
						<img src="../../../../assets/img/jzzx.png" alt="" />
					</div>
				</div>
			</router-link>
			<router-link to="MusemClassfication?type=wqhg&tittle=往期回顾">
				<div class="exhibitBtn">
					<div class="ggjzbtnBox">
						往期回顾
					</div>
					<div class="imgBox">
						<img src="../../../../assets/img/wqhg.png" alt="" />
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>