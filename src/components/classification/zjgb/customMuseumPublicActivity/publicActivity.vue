<template>
	<!--展览展讯-->
	<div id="exhibition">
		<div class="swipeDiv">
			<mt-swipe  :auto="4000" :show-indicators="false">
			  <mt-swipe-item v-for='itme in list'>
			  	<img :src="hostUrl+itme.filePath" style="width: 100%;height: 100%;"/>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="exhibitList">
			<router-link to="MusemClassfication?type=hdzx&tittle=活动咨询">
				<div class="exhibitBtn">
					<div class="gghdBtnBox">
						活动咨询	
					</div>
					<div class="imgBox">
						<img :src="imgUrl+'/img/zlzx1_03.jpg'" alt="" />
					</div>
				</div>
			</router-link>
			<router-link to="MusemClassfication?type=hdhg&tittle=活动回顾">
				<div class="exhibitBtn">
					<div class="gghdBtnBox">
						活动回顾
					</div>
					<div class="imgBox">
						<img :src="imgUrl+'/img/zlzx3_03.jpg'" alt="" />
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import Api from '../../../../api.js'
	export default {
		data () {
	      return {
	     		imgUrl:Api.STATIC_SERVER_HOST,
	     		list:''
	     		
	      }	
	   	},
	   	 mounted(){
	    		var jsons = {
	    			'type':this.$route.query.type
	    		}
	    		Api.lunbo.list(jsons).then(res=>{
	    			this.hostUrl = res.data.url
	    			this.list = res.data.List
	    			console.log(this.list)
	    		},err=>{})
	    		

	    }
	}
</script>

<style>
</style>