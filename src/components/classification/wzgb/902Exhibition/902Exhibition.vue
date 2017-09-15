<template>
	<div id="Exhibition">
		<router-link to='exhibitionContent902?type=902cc'>
			<div class="chuanCang zt">
				<span>船舱</span>
				<img :src="imgUrl+'/img/hys001.png'"/>
				<img class="hxd hxddh" :src="imgUrl+'/img/tydh.png'" alt="">
			</div>
		</router-link>
		<a href='http://www.artronpano.com/scene/uyFuHuv8BDV38LWWmHAak8GP5w84LfmM/902//tour.html'>
			<div class="huiyishi zt">
				<span>会议室</span>
				<img :src="imgUrl+'/img/hys001.png'"/>
				<img class="hxd hxddh" :src="imgUrl+'/img/tydh.png'" alt="">
			</div>
		</a>
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