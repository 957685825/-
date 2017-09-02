<template>
	<div id="collectionDetails">
		<div class="shwoImgBox">
			<div class="imgbox">
				<img :src="hostUrl+dataList.artImgUrl" alt="" />
			</div>
		</div>
		<div class="btnBoxList">
			<div class="btnList">
				<ul>
					<li>
						<img src="../../../../assets/img/yp.png" alt="" />
						<span>音频</span>
					</li>
					<li>
						<img src="../../../../assets/img/sp.png" alt="" />
						<span>视频</span>
					</li>
					<li>
						<img src="../../../../assets/img/3d.png" alt="" />
						<span>3D</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="contentList">
			<div class="contents">
				<h2>{{dataList.artName}}</h2>
				<ul>
					<li>{{dataList.inch}}</li>
					<li>{{dataList.zhidi}}</li>
					<li>{{dataList.year}}</li>
					<li>{{dataList.artDes}}</li>
				</ul>
			</div>
		</div>
		<div class="shwoImgBox ewm">
			<div class="imgbox">
				<img src="../../../../assets/img/ewm.png" alt="" />
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

	    		var jsons = {
	    			'artId':this.$route.query.artId
	    		}

	    		Api.collection.collectionDetails(jsons).then(res=>{
	    			this.hostUrl = res.data.url
	    			this.dataList = res.data.result
	    			console.log(res)
	    		},err=>{})
	    		

	    }
  }
</script>