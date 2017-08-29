<template>
	<!--展览展讯-->
	<div id="exhibition">
		<div class="swipeDiv">
			<mt-swipe  :auto="4000" :show-indicators="false">
			  <mt-swipe-item style="background: orchid;">1</mt-swipe-item>
			  <mt-swipe-item style="background: orange;">2</mt-swipe-item>
			  <mt-swipe-item style="background: red;">3</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="exhibitList">
			<router-link to="/exhibitionClassification">
				<div class="exhibitBtn">
					<div class="btnBox">
						基本陈列	
					</div>
					<div class="imgBox">
						<img src="../../../../assets/img/zlzx1_03.jpg" alt="" />
					</div>
				</div>
			</router-link>
			<div class="exhibitBtn">
				<div class="btnBox">
					未来特别展
				</div>
				<div class="imgBox">
					<img src="../../../../assets/img/zlzx3_03.jpg" alt="" />
				</div>
			</div>
			<div class="exhibitBtn">
				<div class="btnBox">
					往期特别展
				</div>
				<div class="imgBox">
					<img src="../../../../assets/img/zlzx2_03.jpg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Swipe, SwipeItem,Indicator } from 'mint-ui';
export default {
  data () {
	    return {
	     
	    }
	 },
    methods:{
		
    },
    mounted(){

	}
}
</script>

<style>
</style>