<template>
	<div id="exhibition">
		<div class="swipeDiv">
			<mt-swipe  :auto="4000" :show-indicators="false">
			  <mt-swipe-item v-for='itme in list'>
			  	<img :src="hostUrl+itme.filePath" style="width: 100%;height: 100%;"/>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="exhibitList">
			<router-link to="MusemClassfication?type=yjsj&tittle=研究书籍">
				<div class="exhibitBtn">
					<div class="ggjzbtnBox">
						研究/书籍	
					</div>
					<div class="imgBox">
						<img :src="imgUrl+'/img/yjsj.png'" alt="" />
					</div>
				</div>
			</router-link>
			<router-link to="MusemClassfication?type=jzzx&tittle=讲座咨询">
				<div class="exhibitBtn">
					<div class="ggjzbtnBox">
						讲座咨询
					</div>
					<div class="imgBox">
						<img :src="imgUrl+'/img/jzzx.png'" alt="" />
					</div>
				</div>
			</router-link>
			<router-link to="MusemClassfication?type=wqhg&tittle=往期回顾">
				<div class="exhibitBtn">
					<div class="ggjzbtnBox">
						往期回顾
					</div>
					<div class="imgBox">
						<img :src="imgUrl+'/img/wqhg.png'" alt="" />
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

