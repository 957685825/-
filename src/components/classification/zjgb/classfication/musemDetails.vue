<template>
	<div id="musemIntroduce">
		<!--<div class="imgBox">
			<img src="../../../../assets/img/anjj0.png"/>
		</div>-->
		<div v-show="!yjsjBool" class="textBox" v-html="dataList.info.data.content">
			<!--<p>中国海关博物馆是中华人民共和国海关总署直属的国家级行业博物馆，位于北京市东城区建国门内大街六号，东接古观象台、西依海关总署机关大楼、北邻东长安街、南近柳罐胡同，为古典园林式建筑。博物馆内设办公室、人事保卫部、藏品管理部、陈列展览部等部门，具有海关文物收藏保护、海关文化展示交流、海关历史研究、爱国主义暨海关职业素质教育等功能</p>
			<p>2002年4月，海关总署党组作出筹建中国海关博物馆的重大决策，2010年3月28日正式在京动工兴建，2013年9月29日面向海关系统内部开放，2014年3月30日正式面向社会开放。博物馆主展区建筑面积约8,000平方米，基本陈列位于主展区一层、二层，包括千秋古关、近代海关、现代海关三个部分。专题展厅和临时展厅位于地下一层。此外还有“海关902”艇专题展厅。</p>
			<p>中国海关博物馆现有藏品18,000余件，其中实物13,000多件、照片5,000多张，涵盖了从战国时期至当代各个历史时期的海关重要文物。其中既有“关”字瓦当、粤海关十两银锭、1894年“中国灯塔图”、大龙邮票、总税务司赫德使用过的邮袋、李鸿章题写的“津海新关”木匾等海关历史文物，也有新中国首任海关总署署长任命书、见证小平南巡讲话的“海关902”艇等当代海关文物，还有海关查获的11世纪观音立像、战国时期青铜剑、雪豹标本、东北虎皮等走私物品。</p>-->
		</div>
		<div class="my-simple-gallery" itemscope  v-for="itme in dataList.info.pic">
			<figure itemscope itemtype="http://schema.org/ImageObject">
				<a :href="hostUrl+itme+'?1000x1000'" itemprop="contentUrl" data-size="640x640">
					<img :src="hostUrl+itme+'?1000x1000'" style="width:100%" itemprop="thumbnail" alt="Image description" />
				</a>
				<!--<figcaption itemprop="caption description">Image caption 1</figcaption>-->
			</figure>
		</div>
		<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

			<!-- Background of PhotoSwipe.
                 It's a separate element, as animating opacity is faster than rgba(). -->
			<div class="pswp__bg"></div>

			<!-- Slides wrapper with overflow:hidden. -->
			<div class="pswp__scroll-wrap">

				<!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->
				<div class="pswp__container">
					<!-- don't modify these 3 pswp__item elements, data is added later on -->
					<div class="pswp__item"></div>
					<div class="pswp__item"></div>
					<div class="pswp__item"></div>
				</div>

				<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
				<div class="pswp__ui pswp__ui--hidden">

					<div class="pswp__top-bar">

						<!--  Controls are self-explanatory. Order can be changed. -->

						<div class="pswp__counter"></div>

						<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

						<button class="pswp__button pswp__button--share" title=""></button>

						<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

						<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

						<!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
						<!-- element will get class pswp__preloader--active when preloader is running -->
						<div class="pswp__preloader">
							<div class="pswp__preloader__icn">
								<div class="pswp__preloader__cut">
									<div class="pswp__preloader__donut"></div>
								</div>
							</div>
						</div>
					</div>

					<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
						<div class="pswp__share-tooltip"></div>
					</div>

					<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
					</button>

					<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
					</button>

					<div class="pswp__caption">
						<div class="pswp__caption__center"></div>
					</div>

				</div>

			</div>

		</div>
		<!--<div  class="textBox" v-for="itme in dataList.info.pic">-->
			<!--<a :href="hostUrl+itme+'?1000x1000'">-->
				<!--<img :src="hostUrl+itme" style="max-width: 100%;"/>-->
			<!--</a>-->
		<!--</div>-->
	</div>
</template>


<script>
    import Api from '../../../../api.js'
    import photoswipe from '../../../../photoswipe.min.js'
    import photoswipeDefault from '../../../../photoswipe-ui-default.min.js'

	export default {
	    data () {
	      return {
	     		dataList: [],
	     		tittle: '',
              yjsjBool:false,
              hostUrl: ''
	      }	
	   	},
	    components:{ //在再这里要注入我的组件
	      
	    },
	    methods: {
		   gotoDetails (){
		   		//location.href = '#MusemPulpitDetails?id='+id
		   }
	    },
	    created(){//只执行一次
            window.document.title = this.$route.query.tittle


	    },
	    mounted(){
	    	
	    		this.tittle = this.$route.query.tittle
				if(this.$route.query.type === '研究 / 书籍'){
					this.yjsjBool = true
				}
	    		var jsons = {
	    			'id':this.$route.query.id
	    		}
	    		Api.pulpit.pulpitDetails(jsons).then(res=>{
	    			this.dataList = res.data
					this.hostUrl = res.data.url
	    			setTimeout(function(){
	    				$('.textBox').children().attr('style','');
	    				//$('.textBox').children().children().attr('style','');
	    			})
	    			console.log(res)
	    		},err=>{})

            var initPhotoSwipeFromDOM = function(gallerySelector) {

                // parse slide data (url, title, size ...) from DOM elements
                // (children of gallerySelector)
                var parseThumbnailElements = function(el) {
                    var thumbElements = el.childNodes,
                        numNodes = thumbElements.length,
                        items = [],
                        figureEl,
                        childElements,
                        linkEl,
                        size,
                        item;

                    for(var i = 0; i < numNodes; i++) {


                        figureEl = thumbElements[i]; // <figure> element

                        // include only element nodes
                        if(figureEl.nodeType !== 1) {
                            continue;
                        }

                        linkEl = figureEl.children[0]; // <a> element

                        size = linkEl.getAttribute('data-size').split('x');

                        // create slide object
                        item = {
                            src: linkEl.getAttribute('href'),
                            w: parseInt(size[0], 10),
                            h: parseInt(size[1], 10)
                        };



                        if(figureEl.children.length > 1) {
                            // <figcaption> content
                            item.title = figureEl.children[1].innerHTML;
                        }

                        if(linkEl.children.length > 0) {
                            // <img> thumbnail element, retrieving thumbnail url
                            item.msrc = linkEl.children[0].getAttribute('src');
                        }

                        item.el = figureEl; // save link to element for getThumbBoundsFn
                        items.push(item);
                    }

                    return items;
                };

                // find nearest parent element
                var closest = function closest(el, fn) {
                    return el && ( fn(el) ? el : closest(el.parentNode, fn) );
                };

                // triggers when user clicks on thumbnail
                var onThumbnailsClick = function(e) {
                    e = e || window.event;
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;

                    var eTarget = e.target || e.srcElement;

                    var clickedListItem = closest(eTarget, function(el) {
                        return el.tagName === 'FIGURE';
                    });

                    if(!clickedListItem) {
                        return;
                    }


                    // find index of clicked item
                    var clickedGallery = clickedListItem.parentNode,
                        childNodes = clickedListItem.parentNode.childNodes,
                        numChildNodes = childNodes.length,
                        nodeIndex = 0,
                        index;

                    for (var i = 0; i < numChildNodes; i++) {
                        if(childNodes[i].nodeType !== 1) {
                            continue;
                        }

                        if(childNodes[i] === clickedListItem) {
                            index = nodeIndex;
                            break;
                        }
                        nodeIndex++;
                    }



                    if(index >= 0) {
                        openPhotoSwipe( index, clickedGallery );
                    }
                    return false;
                };

                // parse picture index and gallery index from URL (#&pid=1&gid=2)
                var photoswipeParseHash = function() {
                    var hash = window.location.hash.substring(1),
                        params = {};

                    if(hash.length < 5) {
                        return params;
                    }

                    var vars = hash.split('&');
                    for (var i = 0; i < vars.length; i++) {
                        if(!vars[i]) {
                            continue;
                        }
                        var pair = vars[i].split('=');
                        if(pair.length < 2) {
                            continue;
                        }
                        params[pair[0]] = pair[1];
                    }

                    if(params.gid) {
                        params.gid = parseInt(params.gid, 10);
                    }

                    if(!params.hasOwnProperty('pid')) {
                        return params;
                    }
                    params.pid = parseInt(params.pid, 10);
                    return params;
                };

                var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
                    var pswpElement = document.querySelectorAll('.pswp')[0],
                        gallery,
                        options,
                        items;

                    items = parseThumbnailElements(galleryElement);

                    // define options (if needed)
                    options = {
                        index: index,

                        // define gallery index (for URL)
                        galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                        getThumbBoundsFn: function(index) {
                            // See Options -> getThumbBoundsFn section of docs for more info
                            var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                                rect = thumbnail.getBoundingClientRect();

                            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                        },

                        // history & focus options are disabled on CodePen
                        // remove these lines in real life:
                        historyEnabled: false,
                        focus: false

                    };

                    if(disableAnimation) {
                        options.showAnimationDuration = 0;
                    }

                    // Pass data to PhotoSwipe and initialize it
                    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                    gallery.init();
                };

                // loop through all gallery elements and bind events
                var galleryElements = document.querySelectorAll( gallerySelector );

                for(var i = 0, l = galleryElements.length; i < l; i++) {
                    galleryElements[i].setAttribute('data-pswp-uid', i+1);
                    galleryElements[i].onclick = onThumbnailsClick;
                }

                // Parse URL and open gallery if it contains #&pid=3&gid=1
                var hashData = photoswipeParseHash();
                if(hashData.pid > 0 && hashData.gid > 0) {
                    openPhotoSwipe( hashData.pid - 1 ,  galleryElements[ hashData.gid - 1 ], true );
                }
            };

// execute above function
            initPhotoSwipeFromDOM('.my-simple-gallery');
	    }
  }
</script>