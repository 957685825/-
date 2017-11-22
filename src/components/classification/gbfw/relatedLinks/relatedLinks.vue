<template>
	<div id="relatedLinks">
		<div class="contents">
			<div class="box tell" @click="updata('12360')">
				<img :src="imgUrl+'/img/12306.png'"/>
			</div>
			<div class="box hgfb" @click="updata('zghg')">
				<img :src="imgUrl+'/img/hgfb.png'" alt="" />
			</div>
			<div class="box jys" @click="updata('jys')">
				<img :src="imgUrl+'/img/jys.png'" alt="" />
			</div>
			<div class="box hgzz" @click="updata('zghgzz')">
				<img :src="imgUrl+'/img/zz.png'" alt="" />
			</div>
		</div>
		<div class="alertBox" v-show="showBool == true">
			<div class="abouts">
				<div class="contents">
					<div class="topBox">
						<div class="imgBox">
							<img :src="data.imgUrl"/>
						</div>
						<div class="nameBox">
							<h1>{{data.name}}</h1>
							<p v-show="data.numner != ''">微信号：{{data.numner}}</p>
						</div>
					</div>
					<div class="gnjs">
						<p>功能介绍</p><p>{{data.gnjs}}</p>
					</div>
					<div class="gnjs">
						<p v-show="data.zhzt != ''">账号主体</p><p>{{data.zhzt}}</p>
					</div>
				</div>
				<div class="fnbtn" @click="close">
					返回
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
	     		imgUrl:Api.STATIC_SERVER_HOST,
	     		list:'',
	     		dataList:[{
	     					'id':'zghgzz',
		     				'imgUrl':'http://haiguan.artup.com/img/zghgzzs.png',
		     				'name':'中国海关杂志',
		     				'numner':'ccmagazine',
		     				'gnjs':'为通关者创造财富',
		     				'zhzt':'《中国海关》杂志社'
	     				   },
	     				   {
	     				   	'id':'jys',
		     				'imgUrl':'http://haiguan.artup.com/img/jys.jpg',
		     				'name':'《金钥匙》杂志',
		     				'numner':'goldenkey2002',
		     				'gnjs':'发布海关人文艺作品,共建海关人精神家园',
		     				'zhzt':''
	     				   },
	     				   {
	     				   	'id':'zghg',
		     				'imgUrl':'http://haiguan.artup.com/img/zghg.png',
		     				'name':'海关发布',
		     				'numner':'haiguanfabu',
		     				'gnjs':'海关总署官方信息平台',
		     				'zhzt':'中华人民共和国海关总署办公厅'
	     				   },
	     				   {
	     				   	'id':'12360',
		     				'imgUrl':'http://haiguan.artup.com/img/12360.JPG',
		     				'name':'12360海关热线',
		     				'numner':'',
		     				'gnjs':'12360全国海关24小时通关服务热线官方微信',
		     				'zhzt':'中华人民共和国海关总署'
	     				   }],
	     				   data:'',
	     				   showBool:false
	     				
	      }	
	   	},
	   	methods: {
          updata(id){
          	for(var i=0;i<this.dataList.length;i++){
          		if(this.dataList[i].id == id){
          			this.data = this.dataList[i]
          		}
          	}
          	this.showBool = true
          },
          close(){
          	this.showBool = false
          }
        },
	   	 mounted(){
	    		

	    }
	}
</script>