<template>
	<!--基本陈列-->
	<div id="jbclClassification">
		<div class="contents">
			<div class="leftBox">
				<div class="tittle">
					<p>{{tittle}}</p>
				</div>
			</div>
			<div class="rightBox">
				<div v-for='itme in dataList' class="btnList"  @click="gotoDetails(itme.exhibitId)">
					<div class="mask"></div>
					<img :src="hostUrl+itme.imgUrl" alt="" />
					<p>{{itme.exhibitName}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  	import Api from '../../../../../api.js'
	
	export default {
	    data () {
	      return {
	     		dataList: [],
	     		tittle: '',
	     		hostUrl: ''
	      }	
	   	},
	    components:{ //在再这里要注入我的组件
	      
	    },
	    methods: {
		   gotoDetails (id){
		   		location.href = '#exhibitionContent?id='+id
		   }
	    },
	    created(){//只执行一次
            window.document.title = this.$route.query.tittle
	    },
	    mounted(){
	    		this.tittle = this.$route.query.tittle
	    		var jsons = {
	    			'type':this.$route.query.type
	    		}
	    		Api.exhibition.exhibitList(jsons).then(res=>{
	    			this.dataList = res.data.lists
	    			this.hostUrl = res.data.url
	    			console.log(res.data)
	    		},err=>{})
	    }
  }
</script>