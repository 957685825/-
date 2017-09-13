<template>
	<!--基本陈列-->
	<div id="jbclClassification" >
		<div class="contents">
			<div class="leftBox">
				<div class="tittle">
					<p>{{tittle}}</p>
					
				</div>
			</div>
			<div class="rightBox">
				<div v-for='itme in dataList' class="btnList"  @click="gotoDetails(itme.id,itme.title)">
					<div class="mask"></div>
					<img :src="itme.image" alt="" />
					<p>{{itme.title.length>10?itme.title.substring(0,10).concat("..."):itme.title}}</p>
				</div>
				
			</div>
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
		   gotoDetails (id,titt){
		   		location.href = '#MusemDetails?id='+id+'&tittle='+titt+'&type='+this.tittle
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
	    		Api.pulpit.pulpitList(jsons).then(res=>{
	    			this.dataList = res.data.List
	    			console.log(res)
	    		},err=>{})
	    }
  }
</script>