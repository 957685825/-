<template>
	<div id="exhibitionContent">
		<div class="imgBox">
			<img :src="hostUrl+dataList.imgUrl" alt="" />
		</div>
		<div class="contentBox">
			<div class="textBoxList">
				<h2>{{dataList.exhibitName}}</h2>
				<div class="texBox">
					<p> <span>展览时间</span>：{{dataList.startTime}}-{{dataList.endTime}}</p>
					<p> <span>展览地点</span>：{{dataList.address}}　</p>
					<p> <span>展览介绍</span>：{{selectBool==true?selectBoolTrueText:selectBoolFalseText}}</p>
					<p @click="selectFn">{{selectBtnText}}</p>
				</div>
			</div>
		</div>
		<div class="cpList">
			<div class="cpListContent">
				<div class="leftTittle">
					展览藏品
				</div>
				<div class="rightButton" @click="more(dataList.exhibitId)">
					查看更多
				</div>
				<div class="imgList">
					<div class="showImgBox" v-for="itme in dataList.recommendList">
						<div class="showImg" @click="gotoDetails(itme.artId)">
							<img :src="hostUrl+itme.artImgUrl"/>
						</div>
						<div class="textBox">{{itme.artName}}</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="videoBox">
			<div class="spbg">
				<!--<img class="spBtn" @click="videoPlay($event)" :src="imgUrl+'/img/spbtm.png'"/>-->
				<video  :src="hostUrl+dataList.videoImgUrl" @click="videoStop" width="100%" height="100%" :poster="hostUrl+dataList.imgUrl" id="video">
				</video>
			</div>
		</div>
		<div class="qjbox" style="display: none;">
			<div class="qjbg">
				<img src="../../../../../assets/img/qjbg.png"/>
				<div class="qjbtn">
					进入全景
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  	import Api from '../../../../../api.js'
  	import fiter from '../../../../../filter.js'
	
	export default {
	    data () {
	      return {
	     		dataList: [],
	     		hostUrl: '',
	     		selectBool: false,
	     		selectBtnText: '展开',
	     		selectBoolTrueText: '',
	     		selectBoolFalseText: '',
	     		imgUrl:Api.STATIC_SERVER_HOST
	      }	
	   	},
	    components:{ //在再这里要注入我的组件
	      
	    },
	    methods: {
		  selectFn() {
		  	this.selectBool = !this.selectBool
		  	if(this.selectBool == true){
		  		this.selectBtnText = '收起'
		  	}else{
		  		this.selectBtnText = '展开'
		  	}
		  },
		  videoPlay(event) {
		  	//let video=document.getElementById("video")
		  	$('#video')[0].play()
		  	$(event.target).hide()
		  	
		  },
		  videoStop(){
		  	//let video=document.getElementById("video")
		  	$('#video')[0].pause()
		  	$('.spBtn').show()
		  },
		  gotoDetails(id) {
		  	location.href='#collectionDetails?artId='+id
		  },
		  more(id) {
		  	location.href='#collectionList?exId='+id
		  }
		  
	    },
	    created(){//只执行一次
	    },
	    mounted(){

	    		var jsons = {
	    			'exhibitId':this.$route.query.id
	    		}
	    		Api.exhibition.exhibitDetails(jsons).then(res=>{
	    			this.hostUrl = res.data.url
	    			this.dataList = res.data.result
	    			this.selectBoolFalseText = res.data.result.description.substr(0,100).concat('....')
	    			this.selectBoolTrueText =  res.data.result.description
				console.log(res)
	    		},err=>{})
	    		

	    }
  }
</script>