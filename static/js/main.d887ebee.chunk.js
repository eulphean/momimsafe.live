(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,i){},101:function(e,t,i){},221:function(e,t){},224:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(63),s=i.n(o),r=(i(100),i(101),i(3)),d=i(4),p=i(12),c=i(5),l=i(6),h=i(2),u="#055A85",m="#D0011B",f="#FCF0E1",x="#02293C",b="8px",g="12px",y="16px",w="20px",v="24px",T="28px",j="32px",S="36px",O="40px",k="44px",C="48px",E="52px",I="56px",z="60px",D="4px",R="8px",F="12px",B="20px",M="28px",L="36px",A="52px",U="bebas_neueregular",P="bilboregular",N="open_sanslight",V=i(7),H=0,Q=1,W={container:{display:"flex",alignItems:"center",justifyContent:"center",background:u,color:f,fontFamily:U,fontSize:w,letterSpacing:"1px",zIndex:"30","@media (min-width: 600px)":{fontSize:v},"@media (min-width: 900px)":{fontSize:v}},fadeInDown:{animationName:h.a.keyframes(V.fadeInDown,"fadeInDown"),animationDuration:"1s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},fadeOutUp:{animationName:h.a.keyframes(V.fadeOutUp,"fadeOutUp"),animationDuration:"1s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},fadeInUp:{animationName:h.a.keyframes(V.fadeInUp,"fadeInUp"),animationDuration:"1s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},fadeOutDown:{animationName:h.a.keyframes(V.fadeOutDown,"fadeOutUp"),animationDuration:"1s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},bottomCircle:{height:"45px",width:"90px",borderRadius:" 0 0 90px 90px","@media (min-width: 450px)":{},"@media (min-width: 600px)":{fontSize:v,height:"50px",width:"100px",borderRadius:" 0 0 100px 100px"},"@media (min-width: 750px) and (orientation: portrait)":{fontSize:j,height:"70px",width:"140px",borderRadius:" 0px 0px 140px 140px"},"@media (min-width: 900px)":{fontSize:j,height:"70px",width:"140px",borderRadius:" 0px 0px 140px 140px"},"@media (min-width: 900px) and (orentiation: portrait)":{fontSize:O,height:"80px",width:"160px",borderRadius:" 0px 0px 160px 160px"},"@media (min-width: 1200px)":{fontSize:k,height:"90px",width:"180px",borderRadius:" 0px 0px 180px 180px"},"@media (min-width: 1400px)":{},"@media (min-width: 1700px)":{}},topCircle:{height:"45px",width:"90px",borderRadius:"90px 90px 0 0","@media (min-width: 450px)":{},"@media (min-width: 600px)":{fontSize:v,height:"50px",width:"100px",borderRadius:" 100px 100px 0px 0px"},"@media (min-width: 750px) and (orientation: portrait)":{fontSize:j,height:"70px",width:"140px",borderRadius:" 140px 140px 0px 0px"},"@media (min-width: 900px)":{fontSize:j,height:"70px",width:"140px",borderRadius:" 140px 140px 0px 0px"},"@media (min-width: 900px) and (orientation: portrait)":{fontSize:O,height:"80px",width:"160px",borderRadius:" 160px 160px 0px 0px"},"@media (min-width: 1200px)":{fontSize:k,height:"90px",width:"180px",borderRadius:" 180px 180px 0px 0px"},"@media (min-width: 1400px)":{},"@media (min-width: 1700px)":{}}},X=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={},n}return Object(d.a)(i,[{key:"render",value:function(){var e,t;this.props.shape===H?(e=W.topCircle,t=this.props.show?W.fadeInUp:!1===this.props.show?W.fadeOutDown:{}):(e=W.bottomCircle,t=this.props.show?W.fadeInDown:!1===this.props.show?W.fadeOutUp:{});var i=[W.container,e,t,this.props.style];return a.a.createElement("div",{onClick:this.handleClick.bind(this),style:i},this.props.children)}},{key:"handleClick",value:function(){this.props.onClick(this.props.children)}}]),i}(a.a.Component),_=Object(h.a)(X),J=i(22),G=i.n(J),Y={container:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start",margin:F,zIndex:"15","@media (min-width: 600px)":{margin:B},"@media (min-width: 750px)":{margin:M},"@media (min-width: 1200px)":{margin:A}},fadeIn:{animationName:h.a.keyframes(V.fadeIn,"fadeIn"),animationDuration:"3s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},infoContainer:{display:"flex",flexDirection:"column",zIndex:"15",justifyContent:"center",alignItems:"flex-end"},labelContainer:{backgroundColor:m,borderRadius:"5px",padding:D,zIndex:"15","@media (min-width: 900px)":{padding:R}},textStyle:{fontFamily:U,fontSize:y,color:f,letterSpacing:"1px","@media (min-width: 450px)":{},"@media (min-width: 600px)":{fontSize:w},"@media (min-width: 750px) and (orientation: portrait)":{fontSize:v},"@media (min-width: 900px) and (orientation: portrait)":{fontSize:j},"@media (min-width: 1200px)":{fontSize:S},"@media (min-width: 1400px)":{},"@media (min-width: 1700px)":{}},infoColor:{color:f},smallMargin:{marginTop:D}},q=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={time:G.a.tz("America/Chicago").format("h:mm:ss a"),date:G.a.tz("America/Chicago").format("LL")},setInterval(n.updateDateTime.bind(Object(p.a)(n)),1e3),n}return Object(d.a)(i,[{key:"render",value:function(){var e=[Y.textStyle,Y.infoColor];return a.a.createElement("div",{style:Y.container},a.a.createElement("div",{style:[Y.labelContainer,Y.textStyle,Y.fadeIn]},"LIVE"),a.a.createElement("div",{style:Y.infoContainer},a.a.createElement("div",{style:[Y.smallMargin,e,Y.fadeIn]},"CHICAGO, USA"),a.a.createElement("div",{style:[e,Y.fadeIn]},this.state.date),a.a.createElement("div",{style:[e,Y.fadeIn]},this.state.time)))}},{key:"updateDateTime",value:function(){this.setState({time:G.a.tz("America/Chicago").format("h:mm:ss a"),date:G.a.tz("America/Chicago").format("LL")})}}]),i}(a.a.Component),K=Object(h.a)(q),Z={container:{display:"flex",width:"100%",height:"50px","@media (min-width: 750px) and (orientation: portrait)":{height:"60px"},"@media (min-width: 1200px)":{height:"70px"},"@media (min-width: 1400px)":{height:"80px"}},textArea:{width:"100%",fontSize:y,padding:F,fontFamily:U,color:u,letterSpacing:"1px","@media (min-width: 750px) and (orientation: portrait)":{fontSize:w},"@media (min-width: 1200px)":{fontSize:v},"@media (min-width: 1400px)":{fontSize:T}}},$=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={value:""},n}return Object(d.a)(i,[{key:"render",value:function(){return a.a.createElement("div",{style:Z.container},a.a.createElement("textarea",{style:Z.textArea,outline:"none",maxLength:"500",value:this.state.value,onChange:this.onChange.bind(this),placeholder:"Type your message..."}))}},{key:"onChange",value:function(e){this.setState({value:e.target.value})}},{key:"clearContent",value:function(){this.setState({value:""})}},{key:"getContent",value:function(){return this.state.value}}]),i}(a.a.Component),ee=Object(h.a)($);function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function ie(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var ne,ae=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("path",{d:"M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"}))),oe=a.a.createElement("g",null),se=a.a.createElement("g",null),re=a.a.createElement("g",null),de=a.a.createElement("g",null),pe=a.a.createElement("g",null),ce=a.a.createElement("g",null),le=a.a.createElement("g",null),he=a.a.createElement("g",null),ue=a.a.createElement("g",null),me=a.a.createElement("g",null),fe=a.a.createElement("g",null),xe=a.a.createElement("g",null),be=a.a.createElement("g",null),ge=a.a.createElement("g",null),ye=a.a.createElement("g",null),we=function(e){var t=e.svgRef,i=e.title,n=ie(e,["svgRef","title"]);return a.a.createElement("svg",te({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492 492",style:{enableBackground:"new 0 0 492 492"},xmlSpace:"preserve",ref:t},n),i?a.a.createElement("title",null,i):null,ae,oe,se,re,de,pe,ce,le,he,ue,me,fe,xe,be,ge,ye)},ve=a.a.forwardRef((function(e,t){return a.a.createElement(we,te({svgRef:t},e))})),Te=(i.p,0),je=1,Se=0,Oe=1,ke=2,Ce={container:{},overlay:{position:"fixed",top:"0px",bottom:"0px",left:"0px",right:"0px",background:x,zIndex:"-999"},fadeIn:{animationName:h.a.keyframes({from:{opacity:"0%"},to:{opacity:"50%"}},"fadesIn"),animationDuration:"0.5s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},fadeOut:{animationName:h.a.keyframes({from:{opacity:"50%"},to:{opacity:"0%"}},"fadesOut"),animationDuration:"1s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},fadeOutUp:{animationName:h.a.keyframes(V.fadeOutUp,"fadeOutUp"),animationDuration:"1s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},fadeOutDown:{animationName:h.a.keyframes(V.fadeOutDown,"fadeOutDown"),animationDuration:"1s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},fadeInDown:{animationName:h.a.keyframes(V.fadeInDown,"fadeInDown"),animationDuration:"1s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},fadeInUp:{animationName:h.a.keyframes(V.fadeInUp,"fadeInUp"),animationDuration:"1s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},showOverlay:{zIndex:"998"},contentContainer:{position:"fixed",zIndex:"-999",top:"0px",bottom:"0px",display:"flex",alignItems:"center",justifyContent:"center"},showContent:{zIndex:"999"},content:{display:"flex",flexDirection:"column",alignItems:"center",zIndex:"2",borderRadius:b,background:u,color:f,paddingLeft:F,paddingRight:F,overflow:"scroll",maxWidth:"calc(100% - 50px)",maxHeight:"calc(100% - 100px)","@media (min-width: 600px)":{paddingLeft:B,paddingRight:B,maxWidth:"calc(100% - 100px)",maxHeight:"calc(100% - 100px)"},"@media (min-width: 750px)":{maxWidth:"calc(100% - 150px)",maxHeight:"calc(100% - 100px)"},"@media (min-width: 900px)":{paddingLeft:L,paddingRight:L},"@media (min-width: 1200px)":{paddingLeft:A,paddingRight:A,maxWidth:"calc(100% - 300px)",maxHeight:"calc(100% - 100px)"}},title:{marginTop:B,fontFamily:P,fontSize:k,"@media (min-width: 750px)":{fontSize:C},"@media (min-width: 900px)":{fontSize:E},"@media (min-width: 1200px)":{fontSize:I},"@media (min-width: 1400px)":{fontSize:z}},body:{marginTop:F,justifyContent:"center",fontFamily:N,fontSize:y},mediaQueryOnText:{"@media (min-width: 750px) and (orientation: portrait)":{fontSize:w},"@media (min-width: 900px)":{fontSize:w},"@media (min-width: 1200px)":{fontSize:v},"@media (min-width: 1400px)":{fontSize:T}},iconContainer:{display:"flex",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",borderRadius:y,padding:D,backgroundColor:f,right:b,marginRight:"-"+g,"@media (min-width: 600px)":{marginRight:"-"+w},"@media (min-width: 900px)":{marginRight:"-"+S},"@media (min-width: 1200px)":{marginRight:"-"+E}},icon:{height:g,width:g,fill:u,"@media (min-width: 750px)":{height:y,width:y},"@media (min-width: 1200px)":{height:v,width:v},"@media (min-width: 1400px)":{height:j,width:j}},buttonContainer:{marginTop:B,marginBottom:L,background:f,fontFamily:U,fontSize:y,color:u,letterSpacing:"1px"},input:{display:"flex",flexDirection:"row",width:"100%",marginTop:D},sendButtonContainer:{background:f,fontFamily:U,fontSize:y,color:u,letterSpacing:"1.5px",marginLeft:D}},Ee=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={isVisible:!1,popupState:ke},n.textInput=a.a.createRef(),n.content=a.a.createRef(),n}return Object(d.a)(i,[{key:"render",value:function(){var e,t,i;return this.state.isVisible?(e=[Ce.overlay,Ce.showOverlay],this.state.popupState===Se?e=[e,Ce.fadeIn]:this.state.popupState===Oe&&(e=[e,Ce.fadeOut])):e=Ce.overlay,this.props.type===Te?(t=this.getAboutContent(),this.state.isVisible?(i=[Ce.contentContainer,Ce.showContent],this.state.popupState===Se?i=[i,Ce.fadeInDown]:this.state.popupState===Oe&&(i=[i,Ce.fadeOutUp])):i=Ce.contentContainer):(t=this.getSendContent(),this.state.isVisible?(i=[Ce.contentContainer,Ce.showContent],this.state.popupState===Se?i=[i,Ce.fadeInUp]:this.state.popupState===Oe&&(i=[i,Ce.fadeOutDown])):i=Ce.contentContainer),a.a.createElement("div",{onTouchStart:this.handleOnTouch.bind(this),style:Ce.container},a.a.createElement("div",{style:e}),a.a.createElement("div",{onAnimationEnd:this.contentAnimationEnd.bind(this),style:i},t))}},{key:"contentAnimationEnd",value:function(){this.state.isVisible&&this.state.popupState===Oe&&this.setState({isVisible:!1,popupState:ke})}},{key:"getCloseButton",value:function(){var e=[Ce.buttonContainer,Ce.mediaQueryOnText];return a.a.createElement("button",{style:e,onClick:this.hidePopup.bind(this)},"CLOSE")}},{key:"getIconButton",value:function(){return a.a.createElement("div",{style:Ce.iconContainer,onClick:this.hidePopup.bind(this)},a.a.createElement(ve,{style:Ce.icon}))}},{key:"getAboutContent",value:function(){var e=this.getCloseButton(),t=this.getIconButton(),i=[Ce.body,Ce.mediaQueryOnText];return a.a.createElement("div",{ref:this.content,style:Ce.content},t,a.a.createElement("div",{style:Ce.title},"Mom I'm Safe"),a.a.createElement("div",{style:i},"This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is ab This is project is abThis is project is abThis is project is ab is project is abThis is project is ab is project is abThis is project is ab is project is abThis is project is ab is project is abThis is project is abis project is abThis is project is ab2 ject is abThis is project is ab2 ject is abThis is project is ab2 ject is abThis  abThis  abThis abThis abThis abThis abThis This abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThis"),e)}},{key:"getSendContent",value:function(){var e=this.getCloseButton(),t=this.getIconButton(),i=[Ce.sendButtonContainer,Ce.mediaQueryOnText],n=[Ce.body,Ce.mediaQueryOnText];return a.a.createElement("div",{ref:this.content,style:Ce.content},t,a.a.createElement("div",{style:Ce.title},"Send Some Love"),a.a.createElement("div",{style:Ce.input},a.a.createElement(ee,{ref:this.textInput}),a.a.createElement("button",{onClick:this.handleSendMessage.bind(this),style:i},"SEND")),a.a.createElement("div",{style:n},"This project is send send sensd. This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd."),e)}},{key:"showPopup",value:function(){this.content.current.scrollTop=0,this.setState({isVisible:!0,popupState:Se})}},{key:"hidePopup",value:function(e){e.stopPropagation(),this.setState({popupState:Oe}),this.props.onClose()}},{key:"handleOnTouch",value:function(e){e.stopPropagation()}},{key:"handleSendMessage",value:function(e){e.stopPropagation(),this.textInput.current.clearContent();var t=this.textInput.current.getContent();this.props.onSend(t),this.hidePopup(e)}}]),i}(a.a.Component),Ie=Object(h.a)(Ee),ze=i(14),De=i(92),Re=i.n(De),Fe={container:{position:"fixed",top:"0px",bottom:"0px",left:"0px",right:"0px",zIndex:"10"},flipInX:{animationName:h.a.keyframes(V.fadeInLeft,"flipInX"),animationDuration:"3s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},canvas:{height:"100vh",width:"100vw"},overlay:(ne={background:"rgb(252,240,225)"},Object(ze.a)(ne,"background","linear-gradient(356deg, rgba(252,240,225,1) 0%, rgba(5,90,133,1) 100%)"),Object(ze.a)(ne,"opacity","20%"),Object(ze.a)(ne,"position","absolute"),Object(ze.a)(ne,"top","0px"),Object(ze.a)(ne,"bottom","0px"),Object(ze.a)(ne,"left","0px"),Object(ze.a)(ne,"right","0px"),ne)},Be=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={},n.container=a.a.createRef(),n.canvas=a.a.createRef(),n}return Object(d.a)(i,[{key:"componentDidMount",value:function(){this.player=new Re.a.VideoElement(this.container.current,"ws://radiant-oasis-49153.herokuapp.com/",{canvas:this.canvas.current},{audio:!1})}},{key:"render",value:function(){var e=[Fe.container,Fe.flipInX];return a.a.createElement("div",{style:e,ref:this.container},a.a.createElement("div",{style:Fe.overlay}),a.a.createElement("canvas",{style:Fe.canvas,ref:this.canvas}))}}]),i}(a.a.Component),Me=Object(h.a)(Be),Le=i(93),Ae=i(94),Ue=i.n(Ae),Pe=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={},n.socket=Ue()("http://localhost:5000/app",{reconnection:!0,reconnectionDelay:500,reconnectionAttempts:1/0}),n.socket.once("connect",n.subscribe.bind(Object(p.a)(n))),n}return Object(d.a)(i,[{key:"render",value:function(){return null}},{key:"subscribe",value:function(){console.log("Connected"),this.socket.on("time",this.logTime.bind(this)),this.socket.on("image",this.props.newImageCbk.bind(this)),this.socket.on("disconnect",this.disconnect.bind(this))}},{key:"disconnect",value:function(){console.log("Socket Server Disconnected.")}},{key:"logTime",value:function(e){console.log("Socket Connection Alive: "+e)}},{key:"sendMessage",value:function(e){var t=new Date,i={message:e,date:t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),time:t.toLocaleTimeString()};console.log("Emitting Write Payload"),this.socket.emit("writePayload",i)}}]),i}(a.a.Component),Ne=(Object(h.a)(Pe),{container:{},topButton:{display:"flex",alignItems:"center",position:"absolute",margin:"auto",top:"-5px",left:"0px",right:"0px",opacity:"90%"},bottomButton:{display:"flex",alignItems:"center",position:"absolute",margin:"auto",left:"0px",right:"0px",bottom:"-5px",opacity:"90%"}}),Ve=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={imageSrc:"",popupType:Te,showButtons:""},n.websocket=a.a.createRef(),n.popupRef=a.a.createRef(),n.timeoutDuration=3e3,n.buttonTimeout=setTimeout(n.hideButtons.bind(Object(p.a)(n)),n.timeoutDuration),n}return Object(d.a)(i,[{key:"render",value:function(){return a.a.createElement("div",{onTouchStart:this.onTouch.bind(this),style:Ne.container},a.a.createElement(K,null),a.a.createElement(Me,{ref:this.videoStream}),a.a.createElement(Ie,{ref:this.popupRef,onClose:this.handlePopupClose.bind(this),onSend:this.handleSendMessage.bind(this),type:this.state.popupType}),a.a.createElement(_,{key:"About",show:this.state.showButtons,onClick:this.handleClick.bind(this),shape:Q,style:Ne.topButton},"About"),a.a.createElement(_,{key:"Send",show:this.state.showButtons,onClick:this.handleClick.bind(this),shape:H,style:Ne.bottomButton},"Send"))}},{key:"onStreamImage",value:function(e){var t="data:image/jpeg;base64,"+e;this.setState({imageSrc:t})}},{key:"emitMessage",value:function(e){this.websocket.current.sendMessage(e)}},{key:"handlePopupClose",value:function(){this.setState({showButtons:!0}),this.buttonTimeout=setTimeout(this.hideButtons.bind(this),this.timeoutDuration)}},{key:"handleClick",value:function(e){clearTimeout(this.buttonTimeout);var t="About"===e?Te:je;this.setState({popupType:t,showButtons:!1}),this.popupRef.current.showPopup()}},{key:"onTouch",value:function(){clearTimeout(this.buttonTimeout),this.buttonTimeout=setTimeout(this.hideButtons.bind(this),this.timeoutDuration),this.setState({showButtons:!0})}},{key:"hideButtons",value:function(){this.setState({showButtons:!1})}},{key:"handleSendMessage",value:function(e){}}]),i}(a.a.Component),He=Object(h.a)(Object(Le.withOrientationChange)(Ve)),Qe=i(42);s.a.render(a.a.createElement(Qe.a,null,a.a.createElement(He,null)),document.getElementById("root"))},95:function(e,t,i){e.exports=i(224)}},[[95,1,2]]]);
//# sourceMappingURL=main.d887ebee.chunk.js.map