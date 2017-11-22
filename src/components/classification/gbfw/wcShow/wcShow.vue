<template>
	<div id="wcShow">
		<div class="wcLogo">
			<img :src="imgUrl+'/img/wctb.png'"/>
		</div>
		<div class="wcsdBtn">
			文创商店&nbsp;&nbsp;>>
		</div>

		<div class="yqts">网店为第三方平台运营，网店建设中，敬请期待。</div>
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