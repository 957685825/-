<template>
	<div id="everydayClearance">
		<div class="totalShow">
			总积分：<span>{{totalAll}}分</span>
		</div>
		<div class="dhsm">
			<p class="jsContent">兑换说明&nbsp;: </p>
			<p class="contentss" v-html="contents"></p>
		</div>
	</div>
</template>

<script>
import Api from '../../../../api.js'
	export default {
		data () {
	      return {
	     		imgUrl:Api.STATIC_SERVER_HOST,
	     		list:'',
			    data:'',
			    showBool:false,
			    contents:'',
			    totalAll:''
	     				
	      }	
	   	},
	   	methods: {
          close(){
          	this.showBool = false
          }
        },
	   	 mounted(){
	    		Api.every.tatolContent().then(res=>{
	    			this.contents = res.data.info.data.content
	    			console.log(res)
	    		})
	    		Api.every.tatolALL().then(res=>{
	    			this.totalAll = res.data.totalCredit
	    			console.log(res)
	    		})
	    		

	    }
	}
</script>