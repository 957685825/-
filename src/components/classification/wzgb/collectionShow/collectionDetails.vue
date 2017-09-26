<template>
	<div id="collectionDetails" >
		<div class="shwoImgBox">
			<!--:show-indicators="false"-->
			<mt-swipe  :auto="5000" >
				<mt-swipe-item v-for='itme in imgList'>
					<img :src="hostUrl+itme" alt="" />
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="btnBoxList">
			<div class="btnList">
				<ul>
					<li @click="audioPlay(dataList.audioUrl)" class="audioClass">
						<audio id="audio" :src="videoUrl+dataList.audioUrl"></audio>
						<img :src="imgUrl+'/img/yp.png'" alt="" />
						<span>音频</span>
					</li>
					<li @click="gotoVideo(dataList.videoUrl)" class="videoClass">
						<img :src="imgUrl+'/img/sp.png'" alt="" />
						<span>视频</span>
					</li>
					<li @click="goto3D(dataList.url3D)" class="3DClass">
						<img :src="imgUrl+'/img/3d.png'" alt="" />
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
		<div class="shwoImgBox ewm" style="display: none;">
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
                imgUrl:Api.STATIC_SERVER_HOST,
			  	audioBool:false,
              videoUrl:'',
              videoImgUrl:'',
			  imgList:''
	      }	
	   	},
	    components:{ //在再这里要注入我的组件
	      
	    },
	    methods: {
            goto3D(url) {
                if(url){
                    location.href = this.hostUrl + url
                }else{
                    $('.3DClass').css({opacity:'0.5'})
					alert('没有相关内容')

                }

			},
            gotoVideo(url) {
                if(url){
                    location.href = this.videoUrl + url
				}else{
                    $('.videoClass').css({opacity:'0.5'})
                    alert('没有相关内容')

                }

			},
            audioPlay(url) {
                if(url){
                    this.audioBool = !this.audioBool
                    if(this.audioBool == true){
                        $('#audio')[0].play()
                    }else{
                        $('#audio')[0].pause()
                    }
				}else{
                    $('.audioClass').css({opacity:'0.5'})
                    alert('没有相关内容')
                }

			},
			initBtnStyle(dataList){
                if(dataList.audioUrl == ''){
                    $('.audioClass').css({opacity:'0.5'})
                }
                if(dataList.videoUrl == ''){
                    $('.videoClass').css({opacity:'0.5'})
                }
                if(dataList.url3D == ''){
                    $('.3DClass').css({opacity:'0.5'})
                }
			}
	    },
	    created(){//只执行一次
	    },
	    mounted(){

	    		var jsons = {
	    			'artId':this.$route.query.artId
	    		}

	    		Api.collection.collectionDetails(jsons).then(res=>{

					this.imgList = res.data.imgUrl
                    console.log(this.imgList.length)
	    			this.hostUrl = res.data.url
	    			this.dataList = res.data.result
                    this.videoUrl = res.data.videoUrl
                    this.videoImgUrl = res.data.videoImgUrl
					this.initBtnStyle(this.dataList)

	    		},err=>{})

	    }
  }
</script>