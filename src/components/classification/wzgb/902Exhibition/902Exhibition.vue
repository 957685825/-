<template>
	<div id="Exhibition">
		<mt-swipe  :auto="4000" :show-indicators="false">
			  <mt-swipe-item >
			  	<img src="http://haiguan.artup.com/img/902.png" style="width: 100%;height: 100%;"/>
			  	<router-link to='exhibitionContent902?type=902cc'>
					<div class="chuanCang zt">
						<span>902艇</span>
						<img :src="imgUrl+'/img/hys001.png'"/>
						<img class="hxd hxddh" :src="imgUrl+'/img/tydh.png'" alt="">
		
					</div>
				</router-link>
				<router-link to='exhibitionContent902?type=902jst'>
					<div class="jisiting zt">
						<span>缉私艇</span>
						<img :src="imgUrl+'/img/hys001.png'"/>
						<img class="hxd hxddh" :src="imgUrl+'/img/tydh.png'" alt="">
						<img :src="imgUrl+'/img/xxtb.png'" class="jstxt" alt="">
					</div>
				</router-link>
				<a href='http://www.artronpano.com/scene/uyFuHuv8BDV38LWWmHAak8GP5w84LfmM/902/tour.html'>
					<div class="huiyishi zt">
						<span>会议室</span>
						<img :src="imgUrl+'/img/hys001.png'"/>
						<img class="hxd hxddh" :src="imgUrl+'/img/tydh.png'" alt="">
					</div>
				</a>
			  </mt-swipe-item>
			   <mt-swipe-item >
			  	<img src="http://haiguan.artup.com/img/902jst.png" style="width: 100%;height: 100%;"/>
			  	<router-link to='exhibitionContent902?type=902cc'>
					<div class="chuanCang zt">
						<span>902艇</span>
						<img :src="imgUrl+'/img/hys001.png'"/>
						<img class="hxd hxddh" :src="imgUrl+'/img/tydh.png'" alt="">
		
					</div>
				</router-link>
				<router-link to='exhibitionContent902?type=902jst'>
					<div class="jisiting zt">
						<span>缉私艇</span>
						<img :src="imgUrl+'/img/hys001.png'"/>
						<img class="hxd hxddh" :src="imgUrl+'/img/tydh.png'" alt="">
						<img :src="imgUrl+'/img/xxtb.png'" class="jstxt" alt="">
					</div>
				</router-link>
				<a href='http://www.artronpano.com/scene/uyFuHuv8BDV38LWWmHAak8GP5w84LfmM/902/tour.html'>
					<div class="huiyishi zt jsthyshi">
						<span>会议室</span>
						<img :src="imgUrl+'/img/hys001.png'"/>
						<img class="hxd hxddh" :src="imgUrl+'/img/tydh.png'" alt="">
					</div>
				</a>
			  </mt-swipe-item>
		</mt-swipe>
		
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
	    		$('.hxd').css({
					width:'3rem',
					height:'3rem',
                    opacity:1
				})
            

	    }
	}
</script>