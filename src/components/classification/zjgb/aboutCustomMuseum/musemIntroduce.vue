<template>
	<div id="musemIntroduce">
		<!--<div class="imgBox">-->
			<!--<img src="../../../../assets/img/anjj0.png"/>-->
		<!--</div>-->
		<div class="textBox" v-html="dataList">
		</div>
	</div>
</template>
<script>
    import Api from '@/api.js'

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

        },
        created(){//只执行一次
			window.document.title = this.$route.query.tittle
        },
        mounted(){
            var jsons = {
                'type':this.$route.query.type
            }
            Api.about.museumAbout(jsons).then(res=>{
                this.dataList = res.data.info.data.content
                //this.hostUrl = res.data.url
                console.log(res.data)
            },err=>{})
        }
    }
</script>