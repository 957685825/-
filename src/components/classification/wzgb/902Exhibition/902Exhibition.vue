<template>
	<div id="Exhibition">
		<router-link to='exhibitionContent902'>
			<div class="chuanCang zt">
				<span>船舱</span>
				<img :src="imgUrl+'/img/hys001.png'"/>

			</div>
		</router-link>
		<router-link to='exhibitionContent902'>
			<div class="huiyishi zt">
				<span>会议室</span>
				<img :src="imgUrl+'/img/hys001.png'"/>
			</div>
		</router-link>		
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
	    		

	    }
	}
</script>