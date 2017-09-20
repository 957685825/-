function getInfoByUrl(url,urlAll){
	$.ajax({
		url: 'http://192.168.127.23:8080/hgmuseum/iface/jk/getInfo',
		type: 'POST',
		cache: false,
		data: {'url':url},
		dataType:'json',
		success: function(data){
			wx.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: data.appId, // 必填，公众号的唯一标识
				timestamp:data.timestamp, // 必填，生成签名的时间戳
				nonceStr: data.noncestr, // 必填，生成签名的随机串
				signature:data.signature,// 必填，签名，见附录1
				jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			});
			wx.ready(function(){

				//分享到朋友圈
				wx.onMenuShareTimeline({
					title: '海关博物馆', // 分享标题
					link: urlAll, // 分享链接
					imgUrl: 'http://builder.artup.com/test/imgs/bbs/sgjshare.png', // 分享图标
					success: function (res) {
				},
					cancel: function () {
				}
			});
				// 分享到朋友
				wx.onMenuShareAppMessage({
					title: '定制一本专属于宝宝的小时光', // 分享标题
					desc: '小小的时光，记录点滴美好', // 分享描述s
					link: "http://builder.artup.com/test/coupon/xsgindex.html", // 分享链接
					imgUrl: 'http://builder.artup.com/test/imgs/bbs/sgjshare.png', // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function (res) {
						alert('风向成功')
					},
					cancel: function () {
							//用户取消分享后执行的回调函数
					}
				});
			});
			wx.error(function(res){
				alert("分享错误");
			});

		}
	});
}
$(function(){
	var b=document.location.href;
	var d=document.location.href;

	if(b.indexOf("?") != -1){
		b = b.split("?")[0];
	}
	//var c = a+b;

	getInfoByUrl(d,b);
});
