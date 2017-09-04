<template>
	<div id="colectionList">
		<div class="content">
			<div class="listBox" v-for="itme in dataList" @click="gotoDeatils(itme.artId)">
				<div id="diamond">
					<img class="zsj"  :src="imgUrl+'/img/zsj_03.png'"/>
					<div class="mask">
					</div>
					<img :src="hostUrl+itme.artImgUrl"/>
					<img class="yxj" :src="imgUrl+'/img/yxj_03.png'" alt="" />
				</div>
				<div class="tittle">
					{{itme.artName}}
				</div>
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
	     		imgUrl:Api.STATIC_SERVER_HOST
	     		
	      }	
	   	},
	    components:{ //在再这里要注入我的组件
	      
	    },
	    methods: {
		 gotoDeatils(id){
		 	location.href='#collectionDetails?artId='+id
		 }
	    },
	    created(){//只执行一次
	    },
	    mounted(){

	    		if(this.$route.query.exId){
	    			var jsons = {
	    				'exId':this.$route.query.exId
	    			}
	    		}else{
	    			var jsons = {}
	    		}
	    		Api.collection.collectionList(jsons).then(res=>{
	    			this.hostUrl = res.data.url
	    			this.dataList = res.data.list
	    			console.log(res)
	    		},err=>{})
	    		

	    }
  }
</script>