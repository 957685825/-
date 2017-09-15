<template>
	<div id="musemIntroduce">
		<!--<div class="imgBox">
			<img src="../../../../assets/img/anjj0.png"/>
		</div>-->
		<div class="textBox" v-html="dataList.info.data.content">

		</div>
	</div>
</template>


<script>
  	import Api from '../../../../api.js'
	
	export default {
	    data () {
	      return {
	     		dataList: [],
	     		tittle: ''
	      }	
	   	},
	    components:{ //在再这里要注入我的组件
	      
	    },
	    methods: {
		   gotoDetails (){
		   		//location.href = '#MusemPulpitDetails?id='+id
		   }
	    },
	    created(){//只执行一次
	    },
	    mounted(){
	    	
	    		this.tittle = this.$route.query.tittle
	    		var jsons = {
	    			'id':this.$route.query.id
	    		}
	    		Api.pulpit.pulpitDetails(jsons).then(res=>{
	    			this.dataList = res.data
	    			setTimeout(function(){
	    				$('.textBox').children().attr('style','');
	    				//$('.textBox').children().children().attr('style','');
	    			})
	    			console.log(res)
	    		},err=>{})
	    }
  }
</script>