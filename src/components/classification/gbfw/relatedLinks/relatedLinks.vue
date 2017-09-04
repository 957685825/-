<template>
	<div id="relatedLinks">
		<div class="contents">
			<div class="box tell">
				<img :src="imgUrl+'/img/12306.png'"/>
			</div>
			<div class="box hgfb">
				<img :src="imgUrl+'/img/hgfb.png'" alt="" />
			</div>
			<div class="box jys">
				<img :src="imgUrl+'/img/jys.png'" alt="" />
			</div>
			<div class="box hgzz">
				<img :src="imgUrl+'/img/zz.png'" alt="" />
			</div>
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
	    		

	    }
	}
</script>