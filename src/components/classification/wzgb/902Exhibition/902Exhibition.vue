<template>
	<div id="Exhibition">
		<router-link to='exhibitionContent902'>
			<div class="chuanCang">
				<img :src="imgUrl+'/img/chuancang.png'"/>
			</div>
		</router-link>
		<router-link to='exhibitionContent902'>
			<div class="huiyishi">
				<img :src="imgUrl+'/img/huiyishi.png'"/>	
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