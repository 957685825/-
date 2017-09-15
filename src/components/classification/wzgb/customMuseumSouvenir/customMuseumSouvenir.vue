<template>
	<div id="souvenir">
		<div id="customMuseumSouvenir" >
			<div class="log">
				<img :src="imgUrl+'/img/g.png'" alt="">
			</div>
			<div class="add">
				<img id="browseButton" :src="imgUrl+'/img/jh.png'" alt="">
				<input type="file" name="imgOne" class="imgOne" @change="updataOne"  />
			</div>
			<div class="xzxb">
				选择性别&nbsp;: <input  class="radio" type="radio" checked name="sex" data="男">&nbsp;男 <input  class="radio" type="radio" data="女" name="sex">&nbsp;女
			</div>
			<div class="sczp">
				<img :src="imgUrl+'/img/sczp.png'" alt="">
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
		<div id="customMuseumSouvenirTwo">
			<div class="log">
				<img :src="imgUrl+'/img/g.png'" alt="">
			</div>
			<div class="photoBox">
				<img :src="imgUrl+'/img/222000.png'" alt="">
			</div>
			<div class="texts">
				中国海关博物馆&nbsp;&nbsp;服装制式2012-2017
			</div>
			<div class="sczpewm" @click="addImg">
				<img :src="imgUrl+'/img/ewms.png'" alt="">
			</div>
			<div class="sczp" @click="addImg">
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
				}]

            }
        },
        methods: {
            addImg() {
                this.sheetVisible =true
			},
            updataOne() {
                if ($('.imgOne').get(0).files[0].type.indexOf("image") != -1) {
                    //得到文件之前要new一个fileReader对象
                    var fd = new FileReader()
                    //fd.readAsDataURL()里面的参数必须是 ev.dataTransfer.files里面的对象
                    fd.readAsDataURL($('.imgOne').get(0).files[0])
                    fd.onload = function () {
                        //fd.result 得到上传图片的banse64地址
						if(fd.result){
						   alert('上传成功')
						   var sex = $('input:radio:checked').attr('data')


							alert(sex)
						}

                    }
                }else{
                    alert('上传图片不符合规则，请重新上传')
				}
			},
            updataTwo(){
                if ($('.imgTwo').get(0).files[0].type.indexOf("image") != -1) {
                    //得到文件之前要new一个fileReader对象
                    var fd = new FileReader();
                    //fd.readAsDataURL()里面的参数必须是 ev.dataTransfer.files里面的对象
                    fd.readAsDataURL($('.imgTwo').get(0).files[0])
                    fd.onload = function () {
                        //fd.result 得到上传图片的banse64地址
                        if(fd.result){
                            alert('上传成功')
                            var sex = $('input:radio:checked').attr('data')
                            alert(sex)
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