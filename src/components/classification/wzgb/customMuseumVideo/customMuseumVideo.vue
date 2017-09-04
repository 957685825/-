<template>
	<!--基本陈列-->
	<div id="jbclClassification" >
		<div class="contents">
			<div class="leftBox">
				<div class="tittle">
					<p>关博影像</p>
				</div>
			</div>
			<div class="rightBox">
				<a :href="hostUrl+itme.filePath" v-for="itme in dataList">
					<div class="btnList">
						<img src="../../../../assets/img/abjj.png" alt="" />
						<p>{{itme.fileDisplayName}}</p>
						<!--<span>3:11</span>-->
					</div>
				</a>
	
			</div>
		</div>
	</div>
</template>

<script>
  	import Api from '../../../../api.js'
  	import fiter from '../../../../filter.js'
	
	export default {
	    data () {
	      return {
	     		dataList: [],
	     		hostUrl: '',
	     		
	      }	
	   	},
	    components:{ //在再这里要注入我的组件
	      
	    },
	    methods: {
		 
	    },
	    created(){//只执行一次
	    },
	    mounted(){
	    		Api.museumVideo.videoList().then(res=>{
	    			this.hostUrl = res.data.url
	    			this.dataList = res.data.List
	    			console.log(res)
	    		},err=>{})
	    		

	    }
  }
</script>