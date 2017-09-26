<template>
	<div id="souvenir">
		<div id="customMuseumSouvenir" v-show="isShowImg == false" >
			<div class="log">
				<img :src="imgUrl+'/img/g.png'" alt="">
			</div>
			<div class="add">
				<div class="kuang">
					<img id="browseButton" :src="imgUrl+'/img/jh.png'" alt="">
					<input type="text" name="userId" value="2165817"/>
					<input type="file" name="imgOne" class="imgOne" @change="updataOne"  />
				</div>
			</div>
			<div class="xzxb">
				选择性别&nbsp;: <input  class="radio" type="radio" checked name="sex" data="男">&nbsp;男 <input  class="radio" type="radio" data="女" name="sex">&nbsp;女
			</div>
			<div class="sczp">
				<img :src="imgUrl+'/img/sczp.png'" alt="">
				<input type="text" name="userId" value="2165817"/>
				<input type="file" name="imgTwo" class="imgTwo" @change="updataTwo"  />
			</div>
			<div class="texts">
				请上传正面、半身证件照
			</div>
			<mt-actionsheet
					:actions="actions"
					v-model="sheetVisible">
			</mt-actionsheet>

		</div>
		<div id="customMuseumSouvenirTwo" v-show="isShowImg == true">
			<div class="log">
				<img :src="imgUrl+'/img/g.png'" alt="">
			</div>
			<div class="photoBox">
				<img :src="photoImgUrl" alt="">
			</div>
			<div class="texts">
				中国海关博物馆&nbsp;&nbsp;服装制式2012-2017
			</div>
			<div class="sczpewm" @click="addImg">
				<img :src="imgUrl+'/img/zghgewm.jpg'" alt="">
			</div>
			<div class="sczp" @click="cxsc">
				<img :src="imgUrl+'/img/cxsc.png'" alt="">
			</div>
			<div class="sczp bctp" @click="addImg">
				<img :src="imgUrl+'/img/bdbc.png'" alt="">
			</div>
		</div>
	</div>
</template>

<script>
    import Api from '../../../../api.js'
    import { Actionsheet } from 'mint-ui';
    import { Indicator } from 'mint-ui';

    export default {
        data () {
            return {
                imgUrl:Api.STATIC_SERVER_HOST,
                list:'',
                sheetVisible:false,
                actions:[{
                    "name":'拍照',
                    'method':function(){

					}
				},{
                    "name":'从本地相册上传',
                    'method':function(){

                    }
				}],
				isShowImg:false,
				photoImgUrl:''

            }
        },
        methods: {
            addImg() {
                this.sheetVisible =true
			},
            cxsc(){
                this.isShowImg = false
				this.photoImgUrl = ''
			},
            updataOne() {
                Indicator.open('加载中...')
                var vm = this
                if ($('.imgOne').get(0).files[0].type.indexOf("image") != -1) {
                    //得到文件之前要new一个fileReader对象
                    var fd = new FileReader()
                    //fd.readAsDataURL()里面的参数必须是 ev.dataTransfer.files里面的对象
                    fd.readAsDataURL($('.imgOne').get(0).files[0])
                    fd.onload = function () {
                        //fd.result 得到上传图片的banse64地址
						if (!fd.result) {
                        } else {
                            var sex = $('input:radio:checked').attr('data')
                            if (sex == '男') {
                                sex = 1
                            } else {
                                sex = 0
                            }
                            vm.isShowImg = true
                            var formData = new FormData();
                            var userId = $("userId").val();
                            formData.append("file", $('.imgOne').get(0).files[0])
                            formData.append("userId", userId)
                            formData.append("sex", sex)
                            console.log(formData)
                            $.ajax({
                                url: 'http://47.94.202.59:9090/faceSwapper/uploadImgOfMultipartFile',
                                type: 'POST',
                                data: formData,
                                // 告诉jQuery不要去处理发送的数据
                                processData: false,
                                // 告诉jQuery不要去设置Content-Type请求头
                                contentType: false,
                                beforeSend: function () {
                                    console.log("正在进行，请稍候");
                                },
                                success: function (responseStr) {
                                    var str = JSON.parse(responseStr)
                                    Indicator.close()
                                    if (str.data.faceSwapperUrl) {
                                        $('.imgOne').val("");
                                        vm.photoImgUrl = str.data.faceSwapperUrl
                                        console.log(str.data)
                                    } else {
                                        $('.imgOne').val("");
                                        alert('不能识别脸部')
                                    }
                                    console.log("成功" + this.photoImgUrl);

                                },
                                error: function (responseStr) {
                                    alert('不能识别脸部')
                                    Indicator.close()
                                }

                            })
//						   Api.face.getFace({originUrl:$('.imgOne').get(0).files[0]}).then(res=>{
//								console.log(res)
//						   },err=>{
//
//						   })
                        }

                    }
                }else{
                    alert('上传图片不符合规则，请重新上传')
				}
			},
            updataTwo(){
                Indicator.open('加载中...')
                var vm = this
                if ($('.imgTwo').get(0).files[0].type.indexOf("image") != -1) {
                    //得到文件之前要new一个fileReader对象
                    var fd = new FileReader();
                    //fd.readAsDataURL()里面的参数必须是 ev.dataTransfer.files里面的对象
                    fd.readAsDataURL($('.imgTwo').get(0).files[0])
                    fd.onload = function () {
                        //fd.result 得到上传图片的banse64地址
                        if(fd.result){
                            var sex = $('input:radio:checked').attr('data')
                            if(sex == '男'){
                                sex = 1
                            }else{
                                sex = 0
                            }
                            vm.isShowImg = true
                            var formData = new FormData();
                            var userId = $("userId").val();
                            formData.append("file",$('.imgTwo').get(0).files[0])
                            formData.append("userId",userId)
                            formData.append("sex",sex)
                            $.ajax({
                                url : 'http://47.94.202.59:9090/faceSwapper/uploadImgOfMultipartFile',
                                type : 'POST',
                                data : formData,
                                // 告诉jQuery不要去处理发送的数据
                                processData : false,
                                // 告诉jQuery不要去设置Content-Type请求头
                                contentType : false,
                                beforeSend:function(){
                                    console.log("正在进行，请稍候");
                                },
                                success : function(responseStr) {
                                    var str = JSON.parse(responseStr)
									console.log(str)
                                    Indicator.close()
                                    //console.log(str)
                                   /// var arr = str.data.originUrl.substring(0,str.data.originUrl.lastIndexOf('/')+1
                                    if(str.data.faceSwapperUrl){
                                        $('.imgTwo').val("");
                                        vm.photoImgUrl =str.data.faceSwapperUrl
                                    }else{
                                        $('.imgTwo').val("");
                                        alert('不能识别脸部')
                                    }
                                    console.log("成功"+str.data);

                                },
                                error : function(responseStr) {
                                    Indicator.close()
                                    alert('不能识别脸部')
                                    console.log("error");
                                }

                            })
                        }


                    }
                }else{
                    alert('上传图片不符合规则，请重新上传')
                }
			},
            changeCheck(){

			}
		},
        mounted(){

        }
    }
</script>