(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0id3":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"path":"/detail/1","title":"react-native code-push 热更新","date":"2019-04-26","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQACBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAAB5WQdquxVmv/EABsQAAICAwEAAAAAAAAAAAAAAAECAAMREhMi/9oACAEBAAEFAujyskr6m5nVlAvbH//EABYRAQEBAAAAAAAAAAAAAAAAAAABEv/aAAgBAwEBPwGVp//EABgRAAIDAAAAAAAAAAAAAAAAAAACARET/9oACAECAQE/AWWzOT//xAAZEAACAwEAAAAAAAAAAAAAAAAAEAECMSH/2gAIAQEABj8CIwyq4v/EABoQAQEBAQADAAAAAAAAAAAAAAEAEUExUeH/2gAIAQEAAT8hU889SUm84yfYzAOPCxr/2gAMAwEAAgADAAAAEHAv/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAB/9oACAEDAQE/EA12F//EABYRAAMAAAAAAAAAAAAAAAAAABARIf/aAAgBAgEBPxBKB//EABoQAQADAQEBAAAAAAAAAAAAAAEAESFBMfD/2gAIAQEAAT8QwMLrFJEaVpT2Wco+ORajvN2CG7B2PZfSf//Z","aspectRatio":1.6,"src":"/static/90acab8182be9be58d90f635d317f380/14b42/featured.jpg","srcSet":"/static/90acab8182be9be58d90f635d317f380/f836f/featured.jpg 200w,\\n/static/90acab8182be9be58d90f635d317f380/2244e/featured.jpg 400w,\\n/static/90acab8182be9be58d90f635d317f380/14b42/featured.jpg 800w,\\n/static/90acab8182be9be58d90f635d317f380/47498/featured.jpg 1200w,\\n/static/90acab8182be9be58d90f635d317f380/7f945/featured.jpg 1440w","sizes":"(max-width: 800px) 100vw, 800px"}}}},"timeToRead":3,"excerpt":"1. 安装 CodePush CLI 2. 注册 CodePush 账号 ⚠️ 这里会弹出一个网页选择 github 授权， 注册成功后会得到一个 key , 将 key 复制到终端回车 3. 添加 ios 平台应用 得到下面的两个 key ， 后面会用到 ios 4. 添加 android 平台应用 得到的东西和 ios 一样 进入 https://appcenter.ms…"}}]}}}')},"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),f=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),m=function(e){var t=f(e),a=A(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,v=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function C(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(L,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),L=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,f=e.loading,u=e.draggable,A=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":A,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:f,draggable:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=A(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,v=e.itemProp,y=e.loading,C=e.draggable,B=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,o.default)({opacity:B?1:0,transition:N?"opacity "+E+"ms":"none"},d),x="boolean"==typeof h?"lightgray":h,z={transitionDelay:E+"ms"},V=(0,o.default)({opacity:this.state.imgLoaded?0:1},N&&z,{},d,{},u),k={title:t,alt:this.state.isVisible?"":a,style:V,className:A,itemProp:v};if(p){var Q=p,P=g(p);return l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),x&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&z)}),P.base64&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:k,imageVariants:Q,generateSources:R}),P.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:k,imageVariants:Q,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(Q),l.default.createElement(L,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:C})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:y},P,{imageVariants:Q}))}}))}if(m){var F=m,M=g(m),T=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete T.display,l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},x&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:x,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},N&&z)}),M.base64&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:k,imageVariants:F,generateSources:R}),M.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:k,imageVariants:F,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(F),l.default.createElement(L,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:C})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:y},M,{imageVariants:F}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});N.propTypes={resolutions:O,sizes:x,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=N;t.default=z},CPBc:function(e,t,a){},L9e7:function(e,t,a){"use strict";a.r(t);var r=a("0id3"),i=a("q1tI"),n=a.n(i),s=a("vrFN"),d=a("Zttt"),o=a("Wbzz"),l=a("9eSz"),c=a.n(l),f=(a("k5no"),["🦑","🦐","🦀","🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥒","🌶","🌽","🥕","🥔","🥐","🍠","🍞","🥖","🥨","🧀","🥚","🥞","🥓","🥩","🍗","🍖","🌭","🍔","🍟","🍕","🥪","🌮","🌯","🥘","🥗","🍝","🥫","🥘","🍜","🍲","🍝","🍛","🍣","🍱","🥟","🍤","🍚","🍥","🥠","🍢","🍡","🍧","🍨","🍦","🥧","🍰","🎂","🍮","🍭","🍬","🍫","🍿","🍩","🍪","🌰","🍯","🥛","🍼️","🍵","🥤","🍶","🍺","🍻","🍷","🥃","🍸","🍹","🍾","🥡"]),u=["#42b983","#33A5FF","#B03734","#2EAFB0","#6EC1C2","#ED9EC7","#FCA650","#3F7CFF","#93C0A4","#EA7E5C","#F5CE50","#465975","#FFDD4D","#7F2B82","#4b4b4b","#E41A6A"],A=function(e){var t=e.edge.node,a=t.frontmatter,r=t.timeToRead,i=t.excerpt,s=a.path,d=a.title,l=a.date,A=(a.cover,a.featuredImage);console.log("%c 🍜 featuredImage: ","font-size:20px;background-color: #ED9EC7;color:#fff;",A);var g=Math.floor(Math.random()*f.length),p=Math.floor(Math.random()*u.length);return n.a.createElement("div",{to:s,className:"post-item"},n.a.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column"}},n.a.createElement("h2",null,f[g],n.a.createElement(o.Link,{style:{color:u[p]},to:s}," ",d," ")),n.a.createElement("div",{className:"post-content-preview"},i),n.a.createElement("p",{className:"post-meta"},"发布于 ",l," 预计阅读需要 ",r," 分钟")),A&&A.childImageSharp&&A.childImageSharp.fluid&&n.a.createElement(c.a,{fluid:A.childImageSharp.fluid}))},g=(a("CPBc"),function(e){var t=e.img;return n.a.createElement("div",{className:"banner"},n.a.createElement("div",{className:"banner-box"},n.a.createElement("img",{src:t,alt:""})))});t.default=function(e){var t=r.data;return n.a.createElement(d.a,null,n.a.createElement(s.a,{title:"博客列表"}),n.a.createElement(g,{img:"https://pic2.zhimg.com/80/8962c3db4c22682ddda5c2c6a8c5680f_1440w.jpg"}),n.a.createElement("div",{className:"content"},t&&t.allMarkdownRemark.edges.map((function(e){return n.a.createElement(A,{key:e.node.frontmatter.path,edge:e})}))))}},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,d=function(e,t,a,r){var i=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),d+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},k5no:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-posts-js-1614690e9de20afb06e4.js.map