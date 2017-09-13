<template>
	<div id="wcShow">
		<div class="wcLogo">
			<img :src="imgUrl+'/img/wctb.png'"/>
		</div>
		<div class="wcsdBtn">
			文创商店&nbsp;&nbsp;>>
		</div>
		<div class="yqts">微店为第三方平台运营，与海关博物馆无关。</div>
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