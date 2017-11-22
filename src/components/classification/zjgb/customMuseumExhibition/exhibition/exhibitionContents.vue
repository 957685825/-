<template>
	<div id="exhibitionContent">
		<div class="imgBox">
			<!--<div class="swipeDiv">-->
				<mt-swipe  :auto="8000" :show-indicators="false">
					<mt-swipe-item v-for='(itme,index) in imgList'>
						<img :src="hostUrl+itme" style="width: 100%;height: 100%;"/>
						<div class="lbwz"><p>{{index+1}} /<span>{{imgList.length}}</span></p></div>
					</mt-swipe-item>

				</mt-swipe>
			<!--</div>-->
			<!--<img :src="hostUrl+dataList.imgUrl" alt="" />-->
		</div>
		<div class="contentBox">
			<div class="textBoxList">
				<h2>{{dataList.exhibitName}}</h2>
				<div class="texBox">
					<p> <span>展览时间</span>：{{dataList.startTime}}-{{dataList.endTime}}</p>
					<p> <span>展览地点</span>：{{dataList.address}}　</p>
					<p> <span>展览介绍</span>：{{selectBool==true?selectBoolTrueText:selectBoolFalseText}}</p>
					<p @click="selectFn" v-show="selectBoolFalseText.length > 1 || selectBoolFalseText.length > 1">{{selectBtnText}}</p>
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
					<div class="showImgBox" v-show="index<3" v-for="(itme,index) in dataList.recommendList">
						<div class="showImg" @click="gotoDetails(itme.artId)">
							<img :src="hostUrl+itme.artImgUrl"/>
						</div>
						<div class="textBox">{{itme.artName.length>5?itme.artName.substring(0,5).concat('...'):itme.artName}}</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="videoBox" v-show="dataList.videoImgUrl != ''">
			<div class="spbg">
				<!--<img class="spBtn" @click="videoPlay($event)" :src="imgUrl+'/img/spbtm.png'"/>-->
				<video  controls="controls" :src="videoUrl+dataList.videoImgUrl"  width="100%" height="100%" :poster="videoImgUrl+dataList.videoImgUrl+'?second=1&width=1000&height=564'" id="video">
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
	     		imgUrl:Api.STATIC_SERVER_HOST,
			  	videoUrl:'',
			    videoImgUrl:'',
			  	imgList:''
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
					this.videoUrl = res.data.videoUrl
                    this.videoImgUrl = res.data.videoImgUrl
	    			this.dataList = res.data.result
					this.imgList = res.data.imgList
                    this.selectBoolTrueText =  res.data.result.description
					console.log(res)
					if(res.data.result.description.length > 100){
                        this.selectBoolFalseText = res.data.result.description.substr(0,100).concat('....')

					}else{
					    this.selectBool = true
					}

	    		},err=>{})
	    		

	    }
  }
</script>