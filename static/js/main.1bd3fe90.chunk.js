(this["webpackJsonpmomimsafe.live"]=this["webpackJsonpmomimsafe.live"]||[]).push([[0],{107:function(e,t,i){e.exports=i(236)},112:function(e,t,i){},113:function(e,t,i){},232:function(e,t){},236:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(72),r=i.n(o),s=(i(112),i(113),i(3)),l=i(4),d=i(17),c=i(5),p=i(6),h=i(2),m="#055A85",u="#D0011B",f="#FCF0E1",g="#02293C",x="#7E8A90",y="#F7C98C",b="#FFFFFF",v="#000000",w="#595959",k="#2D2C2C",S="8px",C="12px",E="16px",O="20px",I="24px",R="28px",D="36px",j="40px",T="44px",z="52px",F="56px",B="64px",M="76px",A="4px",P="8px",L="12px",H="20px",W="28px",N="36px",U="52px",V="bebas_neueregular",Q="bilboregular",_="open_sanslight",q="thermalregular",Y={dark:"0px 2px 4px "+v,darkButton:"0px 0px 3px"+v,darkButtonBig:"0px 1px 5px"+v},X=i(12),J=0,K=1,G={container:{display:"flex",alignItems:"center",justifyContent:"center",background:m,color:f,fontFamily:V,fontSize:j,letterSpacing:"1px",zIndex:"30",cursor:"pointer",margin:A,borderWidth:"3px",borderStyle:"dotted",borderColor:y,"@media (min-width: 750px) and (orientation: portrait)":{fontSize:z},"@media (min-width: 900px)":{fontSize:z},"@media (min-width: 900px) and (orientation: portrait)":{fontSize:B},"@media (min-width: 1200px)":{fontSize:B}},fadeIn:{animationName:h.a.keyframes(X.fadeIn,"fadeIn"),animationDuration:"1.0s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},fadeOut:{animationName:h.a.keyframes(X.fadeOut,"fadeOut"),animationDuration:"1.0s",animationFillMode:"forwards",animationTimingFunction:"ease-out"},bottomCircle:{height:"70px",width:"140px",borderRadius:" 0 0 140px 140px","@media (min-width: 750px) and (orientation: portrait)":{height:"90px",width:"180px",borderRadius:" 0 0 180px 180px"},"@media (min-width: 900px)":{height:"90px",width:"180px",borderRadius:" 0 0 180px 180px"},"@media (min-width: 900px) and (orientation: portrait)":{height:"110px",width:"220px",borderRadius:" 0 0 220px 220px"},"@media (min-width: 1200px)":{height:"110px",width:"220px",borderRadius:" 0 0 220px 220px"}},hide:{visibility:"hidden"},topCircle:{height:"70px",width:"140px",borderRadius:"140px 140px 0 0","@media (min-width: 750px) and (orientation: portrait)":{height:"90px",width:"180px",borderRadius:" 180px 180px 0px 0px"},"@media (min-width: 900px)":{height:"90px",width:"180px",borderRadius:" 180px 180px 0px 0px"},"@media (min-width: 900px) and (orientation: portrait)":{height:"110px",width:"220px",borderRadius:" 220px 220px 0px 0px"},"@media (min-width: 1200px)":{height:"110px",width:"220px",borderRadius:" 220px 220px 0px 0px"}}},Z=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={},n}return Object(l.a)(i,[{key:"render",value:function(){var e,t;this.props.shape===J?(e=G.topCircle,t=this.props.show?G.fadeIn:!1===this.props.show?G.fadeOut:G.hide):(e=G.bottomCircle,t=this.props.show?G.fadeIn:!1===this.props.show?G.fadeOut:G.hide);var i=[G.container,e,t,this.props.style];return a.a.createElement("div",{onClick:this.handleClick.bind(this),style:i},this.props.children)}},{key:"handleClick",value:function(e){this.props.onClick(e,this.props.children)}}]),i}(a.a.Component),$=Object(h.a)(Z),ee=i(104),te=i(18),ie=i(19),ne=i.n(ie),ae={container:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start",margin:L,zIndex:"40","@media (min-width: 600px)":{margin:H},"@media (min-width: 750px)":{margin:W},"@media (min-width: 1200px)":{margin:N}},fadeIn:{animationName:h.a.keyframes(X.fadeIn,"fadeIn"),animationDuration:"3s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},infoContainer:{display:"flex",flexDirection:"column",zIndex:"40",justifyContent:"center",alignItems:"flex-end"},labelContainer:{backgroundColor:u,borderRadius:"5px",padding:A,zIndex:"40","@media (min-width: 900px)":{padding:P}},textStyle:{fontFamily:V,fontSize:E,color:f,letterSpacing:"1px","@media (min-width: 450px)":{},"@media (min-width: 600px)":{fontSize:O},"@media (min-width: 750px) and (orientation: portrait)":{fontSize:O},"@media (min-width: 900px) and (orientation: portrait)":{fontSize:I}},infoColor:{color:f},smallMargin:{marginTop:A}},oe=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={time:ne.a.tz("America/Chicago").format("h:mm:ss a"),date:ne.a.tz("America/Chicago").format("LL")},setInterval(n.updateDateTime.bind(Object(d.a)(n)),1e3),n}return Object(l.a)(i,[{key:"render",value:function(){var e=[ae.textStyle,ae.infoColor];return a.a.createElement("div",{style:ae.container},a.a.createElement("div",{style:[ae.labelContainer,ae.textStyle,ae.fadeIn]},"LIVE"),a.a.createElement("div",{style:ae.infoContainer},a.a.createElement("div",{style:[ae.smallMargin,e,ae.fadeIn]},"CHICAGO, USA"),a.a.createElement("div",{style:[e,ae.fadeIn]},this.state.date),a.a.createElement("div",{style:[e,ae.fadeIn]},this.state.time)))}},{key:"updateDateTime",value:function(){this.setState({time:ne.a.tz("America/Chicago").format("h:mm:ss a"),date:ne.a.tz("America/Chicago").format("LL")})}}]),i}(a.a.Component),re=Object(h.a)(oe),se={container:{display:"flex",width:"100%",height:"50px","@media (min-width: 750px) and (orientation: portrait)":{height:"60px"},"@media (min-width: 1200px)":{height:"70px"},"@media (min-width: 1400px)":{height:"80px"}},textArea:{width:"100%",fontSize:E,padding:L,fontFamily:V,color:m,letterSpacing:"1px","@media (min-width: 750px) and (orientation: portrait)":{fontSize:O},"@media (min-width: 1200px)":{fontSize:I},"@media (min-width: 1400px)":{fontSize:R}}},le=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={value:""},n.textArea=a.a.createRef(),n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.a.createElement("div",{style:se.container},a.a.createElement("textarea",{ref:this.textArea,style:se.textArea,outline:"none",maxLength:"500",value:this.state.value,onChange:this.onChange.bind(this),placeholder:"Type your message..."}))}},{key:"onChange",value:function(e){this.setState({value:e.target.value}),this.props.onChange(e.target.value)}},{key:"clearContent",value:function(){this.setState({value:""})}},{key:"getContent",value:function(){return this.state.value}}]),i}(a.a.Component),de=Object(h.a)(le);function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var he=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("path",{d:"M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"}))),me=a.a.createElement("g",null),ue=a.a.createElement("g",null),fe=a.a.createElement("g",null),ge=a.a.createElement("g",null),xe=a.a.createElement("g",null),ye=a.a.createElement("g",null),be=a.a.createElement("g",null),ve=a.a.createElement("g",null),we=a.a.createElement("g",null),ke=a.a.createElement("g",null),Se=a.a.createElement("g",null),Ce=a.a.createElement("g",null),Ee=a.a.createElement("g",null),Oe=a.a.createElement("g",null),Ie=a.a.createElement("g",null),Re=function(e){var t=e.svgRef,i=e.title,n=pe(e,["svgRef","title"]);return a.a.createElement("svg",ce({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492 492",style:{enableBackground:"new 0 0 492 492"},xmlSpace:"preserve",ref:t},n),i?a.a.createElement("title",null,i):null,he,me,ue,fe,ge,xe,ye,be,ve,we,ke,Se,Ce,Ee,Oe,Ie)},De=a.a.forwardRef((function(e,t){return a.a.createElement(Re,ce({svgRef:t},e))})),je=(i.p,{container:{display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center",background:b,color:v,fontFamily:q,width:"100%",height:"100%",border:"none",backfaceVisibility:"hidden"},title:{fontSize:E,letterSpacing:"1.5px",paddingTop:A,paddingBottom:A,paddingLeft:P,paddingRight:P,marginTop:W,background:v,color:b},website:{marginTop:L,fontSize:C},city:{background:b,color:v,marginTop:A,fontSize:C},dateTimeContainer:{marginTop:P,display:"flex",flexDirection:"row"},dateTime:{fontSize:C,marginRight:P},message:{display:"flex",alignSelf:"center",marginTop:L,fontSize:E,marginBottom:L,overflowWrap:"anywhere",flexWrap:"wrap",paddingLeft:L,paddingRight:L,paddingBottom:L},topPadding:{paddingTop:"10px"}}),Te=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={value:""},n.textArea=a.a.createRef(),n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){console.log("Receipt mounted")}},{key:"render",value:function(){var e=[je.title,je.website],t=this.props.topPadding?[je.container,je.topPadding]:je.container,i=this.beautifyDate();return a.a.createElement("div",{style:t},a.a.createElement("div",{style:je.title}," MOMIMSAFE "),a.a.createElement("div",{style:e},"momimsafe.live"),a.a.createElement("div",{style:je.dateTimeContainer},a.a.createElement("div",{style:je.dateTime},i.date),a.a.createElement("div",{style:je.dateTime},i.time)),a.a.createElement("div",{style:je.message},this.props.entry.message))}},{key:"beautifyDate",value:function(){var e=this.props.entry.date.toString().split("T")[0],t=this.props.entry.time.toString().split(":");return e=e.split("-"),{date:(e=new Date(e[0],e[1]-1,e[2],t[0],t[1],t[2])).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),time:e.toLocaleTimeString("en-US")}}}]),i}(a.a.Component),ze=Object(h.a)(Te),Fe=0,Be=1,Me=0,Ae=1,Pe=2,Le={container:{},overlay:{position:"fixed",top:"0px",bottom:"0px",left:"0px",right:"0px",background:g,zIndex:"-999"},fadeIn:{animationName:h.a.keyframes({from:{opacity:"0"},to:{opacity:"0.5"}},"fadesIn"),animationDuration:"0.5s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},fadeOut:{animationName:h.a.keyframes({from:{opacity:"0.5"},to:{opacity:"0"}},"fadesOut"),animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-out"},fadeOutUp:{animationName:h.a.keyframes(X.fadeOutUp,"fadeOutUp"),animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-out"},fadeOutDown:{animationName:h.a.keyframes(X.fadeOutDown,"fadeOutDown"),animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-out"},fadeInDown:{animationName:h.a.keyframes(X.fadeInDown,"fadeInDown"),animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},fadeInUp:{animationName:h.a.keyframes(X.fadeInUp,"fadeInUp"),animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},showOverlay:{zIndex:"998"},showContent:{zIndex:"999"},contentContainer:{position:"fixed",zIndex:"-999",top:"0px",bottom:"0px",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},content:{borderRadius:S,borderStyle:"dotted",borderColor:y,borderWidth:"3px",overflow:"auto",maxWidth:"calc(100% - 50px)",maxHeight:"calc(100% - 100px)","@media (min-width: 600px)":{maxWidth:"calc(100% - 100px)",maxHeight:"calc(100% - 100px)"},"@media (min-width: 750px)":{maxWidth:"calc(100% - 150px)",maxHeight:"calc(100% - 100px)"},"@media (min-width: 1200px)":{maxWidth:"calc(100% - 300px)",maxHeight:"calc(100% - 100px)"}},stretchContainer:{display:"flex",flexDirection:"column",alignItems:"center",background:m,color:f,paddingLeft:L,paddingRight:L,"@media (min-width: 600px)":{paddingLeft:H,paddingRight:H},"@media (min-width: 900px)":{paddingLeft:N,paddingRight:N},"@media (min-width: 1200px)":{paddingLeft:U,paddingRight:U}},title:{marginTop:H,fontFamily:Q,fontSize:T,"@media (min-width: 600px)":{fontSize:z},"@media (min-width: 750px)":{fontSize:F},"@media (min-width: 750px) and (orientation: portrait)":{fontSize:B},"@media (min-width: 900px)":{fontSize:B},"@media (min-width: 1200px)":{fontSize:M},"@media (min-width: 1400px)":{}},body:{marginTop:A,justifyContent:"center",fontFamily:_,fontSize:E},mediaQueryOnText:{"@media (min-width: 750px) and (orientation: portrait)":{fontSize:O},"@media (min-width: 900px)":{fontSize:O},"@media (min-width: 1200px)":{fontSize:O},"@media (min-width: 1400px)":{fontSize:I}},iconContainer:{display:"flex",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",borderRadius:E,padding:A,backgroundColor:f,right:S,marginRight:"-"+C,height:C,width:C,fill:m,"@media (min-width: 600px)":{marginRight:"-"+O},"@media (min-width: 750px) and (orientation:portrait)":{},"@media (min-width: 900px)":{height:O,width:O,marginRight:"-"+D},"@media (min-width: 1200px)":{marginRight:"-"+z},"@media (min-width: 1400px)":{}},icon:{width:"100%",height:"100%"},buttonContainer:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:H,marginBottom:N,background:f,fontFamily:V,fontSize:E,color:m,letterSpacing:"1px",padding:L,borderRadius:C},input:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",marginTop:P,marginBottom:P},sendButtonContainer:{background:f,fontFamily:V,fontSize:E,color:m,letterSpacing:"1px",marginLeft:A,padding:L,borderRadius:C,display:"flex",alignItems:"center",justifyContent:"center",alignSelf:"stretch","@media (min-width: 900px)":{width:"100px"}},disabled:{color:x},imageContainer:{marginTop:L,width:"100%"},footer:{display:"flex",alignItems:"center",color:y,alignSelf:"center",fontFamily:V,fontSize:C,marginBottom:L,letterSpacing:"1.5px","@media (min-width: 750px)":{fontSize:E},"@media (min-width: 1200px)":{fontSize:O}},receiptsContainer:{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:L,justifyContent:"center"},individualReceipt:{display:"flex",marginLeft:A,marginRight:A,marginTop:L,"@media (min-width: 450px) and (orientation: landscape)":{width:"calc(100%/2 - 4%)"},"@media (min-width: 750px)":{width:"calc(100%/2 - 3%)"},"@media (min-width: 900px)":{width:"calc(100%/2 - 2%)"},"@media (min-width: 1200px)":{width:"calc(100%/3 - 2%)"},"@media (min-width: 1400px)":{width:"calc(100%/4 - 2%)"}}},He=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={isVisible:!1,popupState:Pe,disabled:!0},n.textInput=a.a.createRef(),n.content=a.a.createRef(),n}return Object(l.a)(i,[{key:"render",value:function(){var e,t,i;return this.state.isVisible?(e=[Le.overlay,Le.showOverlay],this.state.popupState===Me?e=[e,Le.fadeIn]:this.state.popupState===Ae&&(e=[e,Le.fadeOut])):e=Le.overlay,this.props.type===Fe?(t=this.getAboutContent(),this.state.isVisible?(i=[Le.contentContainer,Le.showContent],this.state.popupState===Me?i=[i,Le.fadeInDown]:this.state.popupState===Ae&&(i=[i,Le.fadeOutUp])):i=Le.contentContainer):(t=this.getSendContent(),this.state.isVisible?(i=[Le.contentContainer,Le.showContent],this.state.popupState===Me?i=[i,Le.fadeInUp]:this.state.popupState===Ae&&(i=[i,Le.fadeOutDown])):i=Le.contentContainer),a.a.createElement("div",{onClick:this.handleOnTouch.bind(this),onTouchStart:this.handleOnTouch.bind(this),style:Le.container},a.a.createElement("div",{style:e}),a.a.createElement("div",{onAnimationEnd:this.contentAnimationEnd.bind(this),style:i},t))}},{key:"contentAnimationEnd",value:function(){this.state.isVisible&&this.state.popupState===Ae&&this.setState({isVisible:!1,popupState:Pe})}},{key:"getCloseButton",value:function(){var e=[Le.buttonContainer,Le.mediaQueryOnText];return a.a.createElement("div",{style:e,onClick:this.hidePopup.bind(this)},"CLOSE")}},{key:"getIconButton",value:function(){return a.a.createElement("div",{onClick:this.hidePopup.bind(this),style:Le.iconContainer},a.a.createElement(De,{style:Le.icon}))}},{key:"getAboutContent",value:function(){var e=this.getFooter(),t=this.getCloseButton(),i=this.getIconButton(),n=[Le.body,Le.mediaQueryOnText];return a.a.createElement("div",{ref:this.content,style:Le.content},a.a.createElement("div",{style:Le.stretchContainer},i,a.a.createElement("div",{style:Le.title},"Mom I'm Safe"),a.a.createElement("div",{style:n},"momimsafe is an active live-stream of my home studio space, where I spend the majority of my time in this post-covid era. It was developed in response to the COVID-19 lockdown, with an urgent need in mind; to be visually and physically accessible to all my friends and family globally; especially my mom, who has been concerned about my safety and health during this time. It's a twisted take on communication, which is personal and can exist for an extended period of time. To bridge your virtual space with my physical space, you can send me messages that are archived and printed in my space in real-time."),t,e))}},{key:"getSendContent",value:function(){var e=this.processReceipts(),t=this.getFooter(),i=this.getCloseButton(),n=this.getIconButton(),o=[Le.mediaQueryOnText,Le.sendButtonContainer];o=this.state.disabled?[o,Le.disabled]:o;var r=[Le.body,Le.mediaQueryOnText];return a.a.createElement("div",{ref:this.content,style:Le.content},a.a.createElement("div",{style:Le.stretchContainer},n,a.a.createElement("div",{style:Le.title},"Send Some Love"),a.a.createElement("div",{style:Le.input},a.a.createElement(de,{onChange:this.onTextInputChange.bind(this),ref:this.textInput}),a.a.createElement("button",{disabled:this.state.disabled,onClick:this.handleSendMessage.bind(this),style:o},"SEND")),a.a.createElement("div",{style:r},"There may be times when you see me working in my studio, or you may not. But you can leave me a message by typing in the textbox above and hitting the send button. Your messages will be printed by a receipt printer in my studio, which is situated on the left side of my desk. These messages arrive in real-time and are anonymous. So leave a trace in my space, be honest, and send some love. Below are some of the receipts produced already."),a.a.createElement("div",{style:Le.receiptsContainer},e),i,t))}},{key:"getFooter",value:function(){return a.a.createElement("a",{style:Le.footer,target:"_blank",rel:"noopener noreferrer",href:"https://amaykataria.com"},"\xa9 Amay Kataria 2020")}},{key:"showPopup",value:function(){this.content.current.scrollTop=0,this.props.type===Fe&&this.setState({disabled:!0}),this.setState({isVisible:!0,popupState:Me})}},{key:"hidePopup",value:function(e){e.stopPropagation(),this.setState({popupState:Ae}),this.props.onClose()}},{key:"handleOnTouch",value:function(e){e.stopPropagation()}},{key:"handleSendMessage",value:function(e){e.stopPropagation(),this.textInput.current.clearContent();var t=this.textInput.current.getContent();this.props.onSend(t),this.hidePopup(e)}},{key:"onTextInputChange",value:function(e){0!==e.length?this.setState({disabled:!1}):this.setState({disabled:!0})}},{key:"processReceipts",value:function(){for(var e=this.props.receipts,t=[],i=0;i<e.length;i++)t.push(a.a.createElement("div",{key:i,style:Le.individualReceipt},a.a.createElement(ze,{entry:e[i]})));return t}}]),i}(a.a.Component),We=Object(h.a)(He),Ne=i(101),Ue=i.n(Ne),Ve={container:{position:"fixed",top:"0px",bottom:"0px",left:"0px",right:"0px",zIndex:"10"},flipInX:{animationName:h.a.keyframes(X.fadeInLeft,"flipInX"),animationDuration:"3s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},canvas:{height:"100vh",width:"100vw"},overlay:{background:"linear-gradient(356deg, rgba(252,240,225,1) 0%, rgba(5,90,133,1) 100%)",opacity:"0.35",position:"absolute",top:"0px",bottom:"0px",left:"0px",right:"0px"}},Qe=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={},n.container=a.a.createRef(),n.canvas=a.a.createRef(),n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.player=new Ue.a.VideoElement(this.container.current,"wss://radiant-oasis-49153.herokuapp.com/",{canvas:this.canvas.current},{audio:!1})}},{key:"render",value:function(){var e=[Ve.container,Ve.flipInX];return a.a.createElement("div",{style:e,ref:this.container},a.a.createElement("div",{style:Ve.overlay}),a.a.createElement("canvas",{style:Ve.canvas,ref:this.canvas}))}}]),i}(a.a.Component),_e=Object(h.a)(Qe),qe=i(102),Ye=i(103),Xe=i.n(Ye),Je=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={},n.socket=Xe()("https://blooming-refuge-71111.herokuapp.com/app",{reconnection:!0,reconnectionDelay:500,reconnectionAttempts:1/0}),n.socket.once("connect",n.subscribe.bind(Object(d.a)(n))),n}return Object(l.a)(i,[{key:"render",value:function(){return null}},{key:"subscribe",value:function(){console.log("Connected"),this.socket.on("time",this.logTime.bind(this)),this.socket.on("disconnect",this.disconnect.bind(this)),this.socket.on("receiveRandomEntries",this.receiveEntries.bind(this)),this.socket.on("receiveDatabaseEntries",this.receiveDatabaseRentries.bind(this))}},{key:"disconnect",value:function(){console.log("Socket Server Disconnected.")}},{key:"logTime",value:function(e){console.log("Socket Connection Alive: "+e)}},{key:"sendMessage",value:function(e){var t={message:e.toLowerCase(),date:ne.a.tz("America/Chicago").format("YYYY-MM-DD"),time:ne.a.tz("America/Chicago").format("h:mm:ss a")};console.log("Emitting Write Payload"),this.socket.emit("writePayload",t)}},{key:"requestData",value:function(){this.socket.emit("readRandomEntries")}},{key:"receiveEntries",value:function(e){console.log("Entries received"),this.props.processEntries(e)}},{key:"readDatabase",value:function(){console.log("Request received"),this.socket.emit("readDatabase",{order:"DESC"})}},{key:"receiveDatabaseRentries",value:function(e){console.log("Entries received"),this.props.processDatabase(e)}}]),i}(a.a.Component),Ke=Object(h.a)(Je),Ge=h.a.keyframes({"0%":{height:"0"},"100%":{height:"60px"}},"height"),Ze={animatingContainer:{position:"relative",marginLeft:L,marginRight:L,height:"0px",justifyContent:"center",display:"flex",zIndex:"0"},paperRollContainer:{position:"absolute",bottom:"0%",display:"flex",flexDirection:"column",width:"100%",alignItems:"center"},individualReceipt:{display:"flex",flexDirection:"column",width:"100%"}},$e=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={receipts:[],enableAnimation:!0,animationStyle:{animationName:Ge,animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},currentReceiptIdx:0},n.receipt=a.a.createRef(),n.wrapper=a.a.createRef(),n.scrollContainer=a.a.createRef(),n.lastReceiptIdx=0,n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){console.log("Paper Roll Mount")}},{key:"render",value:function(){var e=this.state.enableAnimation?[Ze.animatingContainer,this.state.animationStyle]:Ze.animatingContainer;return a.a.createElement("div",{ref:this.wrapper,style:e,onAnimationEnd:this.onWrapperAnimationEnd.bind(this)},a.a.createElement("div",{ref:this.receiptContainer,style:[Ze.paperRollContainer]},this.state.receipts))}},{key:"createReceipt",value:function(e){var t=e?this.lastReceiptIdx:Math.floor(Math.random()*this.props.database.length);console.log("Receipt: "+t);var i=a.a.createElement("div",{ref:this.receipt,key:this.state.receipts.length,style:Ze.individualReceipt},a.a.createElement(ze,{topPadding:!0,entry:this.props.database[t]})),n=this.state.receipts;n.unshift(i);var o=e?this.lastReceiptIdx+1:t;this.lastReceiptIdx=e?o:this.lastReceiptIdx,this.setState({receipts:n,currentReceiptIdx:o})}},{key:"componentDidUpdate",value:function(e,t){this.props.database!==e.database&&(console.log("Creating first receipt"),this.createReceipt(!0)),this.state.currentReceiptIdx!==t.currentReceiptIdx&&this.resetAnimation()}},{key:"updateHeightAnimation",value:function(e,t){Ge=h.a.keyframes({"0%":{height:e+"px"},"100%":{height:t+"px"}},"height")}},{key:"resetAnimation",value:function(){var e=parseInt(this.wrapper.current.clientHeight,10),t=e+parseInt(this.receipt.current.clientHeight,10);console.log("resetAnimation: "+e+", "+t),this.updateHeightAnimation(e,t),console.log("Animation begin"),this.setState({animationStyle:{animationName:Ge,animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-in"}})}},{key:"onWrapperAnimationEnd",value:function(){console.log("Animation ending"),this.props.onAnimationEnd()}}]),i}(a.a.Component),et=Object(h.a)($e),tt={container:{display:"flex",width:"100vw",flexDirection:"column",alignItems:"center",height:"80vw",backgroundColor:w,boxShadow:Y.dark,borderRadius:"25px","@media (min-width: 450px) and (orientation: landscape)":{width:"90vw",height:"80vh"},"@media (min-width: 750px) and (orientation: portrait)":{width:"60vw",height:"35vh"},"@media (min-width: 750px)":{width:"60vw",height:"35vh"},"@media (min-width: 900px) and (orientation: portrait)":{width:"55vw",height:"30vh"},"@media (min-width: 900px)":{width:"55vw",height:"30vh"},"@media (min-width: 1200px)":{width:"40vw",height:"30vh"},"@media (min-width: 1400px)":{width:"35vw",height:"30vh"}},upperBodyContainer:{zIndex:"2",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:w,borderRadius:"25px 25px 0px 0px",paddingBottom:H},header:{display:"flex",color:f,fontFamily:V,fontSize:C,marginTop:P,letterSpacing:"1.5px","@media (min-width: 450px)":{},"@media (min-width: 600px)":{fontSize:E},"@media (min-width: 750px) and (orientation: portrait)":{fontSize:O},"@media (min-width: 900px) and (orientation: portrait)":{fontSize:I},":hover":{color:y}},infoContainer:{display:"flex",flexDirection:"row",marginTop:H,marginLeft:L,marginRight:L,width:"100%",justifyContent:"space-evenly",zIndex:"1"},buttonCollection:{display:"flex",flexDirection:"row"},btnContainer:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:P,marginRight:P,marginLeft:P},title:{color:f,fontFamily:V,fontSize:E,letterSpacing:"1.5px","@media (min-width: 450px)":{},"@media (min-width: 600px)":{fontSize:O},"@media (min-width: 750px) and (orientation: portrait)":{fontSize:O},"@media (min-width: 900px) and (orientation: portrait)":{fontSize:I}},button:{marginTop:A,width:"20px",height:"20px",border:"1.4px solid black",borderRadius:"15px",boxShadow:Y.darkButton,cursor:"pointer"},buttonHover:{backgroundColor:k,boxShadow:Y.darkButtonBig},buttonDisabled:{backgroundColor:x},website:{display:"flex",alignItems:"flex-end",color:f,fontFamily:V,fontSize:E,letterSpacing:"1.5px",":hover":{color:y},"@media (min-width: 450px)":{},"@media (min-width: 600px)":{fontSize:O},"@media (min-width: 750px) and (orientation: portrait)":{fontSize:O},"@media (min-width: 900px) and (orientation: portrait)":{fontSize:I}},division:{display:"flex",width:"100%",height:"1.5px",backgroundColor:v,marginTop:H,boxShadow:Y.darkButton},mouthContainer:{display:"flex",flexDirection:"column",position:"relative",width:"90%",zIndex:"1"},upperMouth:{position:"relative",backgroundColor:k,zIndex:"1",height:"40px",borderRadius:"10px 10px 0 0",boxShadow:Y.dark},lowerMouth:{position:"absolute",left:"0%",right:"0%",backgroundColor:k,height:"40px",marginTop:"40px",borderRadius:"0px 0px 10px 10px",zIndex:"-1",boxShadow:Y.darkButton}},it=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={isPrintHovering:!1,isShuffleHovering:!1,isDisabled:!0},n.paperRoll=a.a.createRef(),n}return Object(l.a)(i,[{key:"render",value:function(){var e=this.getHeader(),t=this.getButtons(),i=this.getWebsite();return a.a.createElement("div",{style:tt.container},a.a.createElement("div",{style:tt.upperBodyContainer},e,a.a.createElement("div",{style:tt.infoContainer},t,i),a.a.createElement("div",{style:tt.division})),a.a.createElement("div",{style:tt.mouthContainer},a.a.createElement("div",{style:tt.upperMouth}),a.a.createElement(et,{ref:this.paperRoll,database:this.props.database,onAnimationEnd:this.onReceiptAnimationEnd.bind(this)}),a.a.createElement("div",{style:tt.lowerMouth})))}},{key:"getHeader",value:function(){return a.a.createElement("a",{key:"amaykataria",style:tt.header,target:"_blank",rel:"noopener noreferrer",href:"https://amaykataria.com"},"\xa9 Amay Kataria 2020")}},{key:"getButtons",value:function(){var e=this.state.isPrintHovering?[tt.button,tt.buttonHover]:[tt.button];e=this.state.isDisabled?[e,tt.buttonDisabled]:e;var t=this.state.isShuffleHovering?[tt.button,tt.buttonHover]:[tt.button];return t=this.state.isDisabled?[t,tt.buttonDisabled]:t,a.a.createElement("div",{style:tt.buttonCollection},a.a.createElement("div",{style:tt.btnContainer},a.a.createElement("div",{style:tt.title},"PRINT"),a.a.createElement("div",{onMouseEnter:this.onPrintHover.bind(this),onMouseLeave:this.onResetPrintHover.bind(this),onClick:this.onPrint.bind(this),style:e,disabled:this.state.isDisabled})),a.a.createElement("div",{style:tt.btnContainer},a.a.createElement("div",{style:tt.title},"SHUFFLE"),a.a.createElement("div",{onMouseEnter:this.onShuffleHover.bind(this),onMouseLeave:this.onResetShuffleHover.bind(this),onClick:this.onShuffle.bind(this),style:t,disabled:this.state.isDisabled})))}},{key:"getWebsite",value:function(){return a.a.createElement("a",{key:"momimsafe",style:tt.website,target:"_blank",rel:"noopener noreferrer",href:"https://momimsafe.live"},"MOMIMSAFE.LIVE")}},{key:"onReceiptAnimationEnd",value:function(){this.setState({isDisabled:!1})}},{key:"onPrint",value:function(e){e.stopPropagation(),this.state.isDisabled||(this.paperRoll.current.createReceipt(!0),this.setState({isDisabled:!0}))}},{key:"onShuffle",value:function(e){e.stopPropagation(),this.state.isDisabled||(this.paperRoll.current.createReceipt(!1),this.setState({isDisabled:!0}))}},{key:"onPrintHover",value:function(e){e.stopPropagation(),this.setState({isPrintHovering:!0})}},{key:"onShuffleHover",value:function(e){e.stopPropagation(),this.setState({isShuffleHovering:!0})}},{key:"onResetPrintHover",value:function(e){e.stopPropagation(),this.setState({isPrintHovering:!1})}},{key:"onResetShuffleHover",value:function(e){e.stopPropagation(),this.setState({isShuffleHovering:!1})}}]),i}(a.a.Component),nt=Object(h.a)(it),at={outerContainer:{},container:{display:"flex",backgroundColor:m,justifyContent:"center",padding:"12px",height:"100vh",overflow:"scroll"},hidingDiv:{position:"fixed",top:"0%",height:"12px",width:"100%",backgroundColor:m,zIndex:"2"}},ot=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={databaseEntries:[]},n.websocket=a.a.createRef(),n}return Object(l.a)(i,[{key:"render",value:function(){return a.a.createElement("div",{style:at.outerContainer},a.a.createElement("div",{style:at.container},a.a.createElement(Ke,{ref:this.websocket,processDatabase:this.processDatabase.bind(this)}),a.a.createElement("div",{style:at.hidingDiv}),a.a.createElement(nt,{database:this.state.databaseEntries})))}},{key:"componentDidMount",value:function(){this.queryDatabase()}},{key:"queryDatabase",value:function(){console.log("Query the entire database of messages."),this.websocket.current.readDatabase()}},{key:"processDatabase",value:function(e){console.log("Entire database received with "+e.length+" entries."),this.setState({databaseEntries:e})}}]),i}(a.a.Component),rt=Object(h.a)(ot),st={container:{position:"relative"},buttonWrapper:{position:"fixed",top:"0px",bottom:"0px",left:"0px",right:"0px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:"30"},topButton:{display:"flex",alignItems:"center",opacity:"0.9"},bottomButton:{display:"flex",alignItems:"center",opacity:"0.9"}},lt=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={imageSrc:"",popupType:Fe,showButtons:!0,receipts:{}},n.websocket=a.a.createRef(),n.popupRef=a.a.createRef(),n.timeoutDuration=5e3,n.buttonTimeout=setTimeout(n.hideButtons.bind(Object(d.a)(n)),n.timeoutDuration),n}return Object(l.a)(i,[{key:"render",value:function(){var e=this.getContent();return a.a.createElement("div",{onClick:this.onTouch.bind(this),onTouchStart:this.onTouch.bind(this),style:st.container},a.a.createElement(ee.a,{basename:""},a.a.createElement(te.c,null,a.a.createElement(te.a,{path:"/printer"},a.a.createElement(rt,null)),a.a.createElement(te.a,{path:"/"},e))))}},{key:"getContent",value:function(){return a.a.createElement("div",null,a.a.createElement(Ke,{ref:this.websocket,processEntries:this.entriesReceived.bind(this)}),a.a.createElement(re,null),a.a.createElement("div",{style:st.buttonWrapper},a.a.createElement($,{key:"About",show:this.state.showButtons,onClick:this.handleClick.bind(this),shape:J,style:st.bottomButton},"About"),a.a.createElement($,{key:"Send",show:this.state.showButtons,onClick:this.handleClick.bind(this),shape:K,style:st.topButton},"Send")),a.a.createElement(_e,{ref:this.videoStream}),a.a.createElement(We,{ref:this.popupRef,onClose:this.handlePopupClose.bind(this),onSend:this.handleSendMessage.bind(this),type:this.state.popupType,receipts:this.state.receipts}))}},{key:"onStreamImage",value:function(e){var t="data:image/jpeg;base64,"+e;this.setState({imageSrc:t})}},{key:"emitMessage",value:function(e){this.websocket.current.sendMessage(e)}},{key:"handlePopupClose",value:function(){this.setState({showButtons:!0}),this.buttonTimeout=setTimeout(this.hideButtons.bind(this),this.timeoutDuration)}},{key:"handleClick",value:function(e,t){e.stopPropagation(),clearTimeout(this.buttonTimeout),"Send"===t&&(console.log("send"),this.websocket.current.requestData());var i="About"===t?Fe:Be;this.setState({popupType:i,showButtons:!1}),this.popupRef.current.showPopup()}},{key:"entriesReceived",value:function(e){this.setState({receipts:e})}},{key:"onTouch",value:function(){clearTimeout(this.buttonTimeout),this.buttonTimeout=setTimeout(this.hideButtons.bind(this),this.timeoutDuration),this.setState({showButtons:!0})}},{key:"hideButtons",value:function(){this.setState({showButtons:!1})}},{key:"handleSendMessage",value:function(e){this.websocket.current.sendMessage(e)}}]),i}(a.a.Component),dt=Object(h.a)(Object(qe.withOrientationChange)(lt)),ct=i(49);r.a.render(a.a.createElement(ct.a,null,a.a.createElement(dt,null)),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.1bd3fe90.chunk.js.map