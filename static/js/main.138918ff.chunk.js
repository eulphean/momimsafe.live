(this["webpackJsonpmomimsafe.live"]=this["webpackJsonpmomimsafe.live"]||[]).push([[0],{100:function(e,t,i){},220:function(e,t){},223:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(62),r=i.n(o),s=(i(99),i(100),i(3)),d=i(4),l=i(12),c=i(5),p=i(6),m=i(2),h="#055A85",u="#D0011B",f="#FCF0E1",g="#02293C",x="#7E8A90",y="#F7C98C",b="#FFFFFF",v="#000000",w="8px",S="12px",k="16px",C="20px",E="24px",O="28px",I="36px",T="40px",j="44px",z="52px",R="56px",D="64px",F="76px",B="4px",M="8px",L="12px",A="20px",P="28px",N="36px",U="52px",V="bebas_neueregular",W="bilboregular",H="open_sanslight",Q="thermalregular",Y=i(9),_=0,X=1,q={container:{display:"flex",alignItems:"center",justifyContent:"center",background:h,color:f,fontFamily:V,fontSize:T,letterSpacing:"1px",zIndex:"30",cursor:"pointer",margin:B,borderWidth:"3px",borderStyle:"dotted",borderColor:y,"@media (min-width: 750px) and (orientation: portrait)":{fontSize:z},"@media (min-width: 900px)":{fontSize:z},"@media (min-width: 900px) and (orientation: portrait)":{fontSize:D},"@media (min-width: 1200px)":{fontSize:D}},fadeIn:{animationName:m.a.keyframes(Y.fadeIn,"fadeIn"),animationDuration:"1.0s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},fadeOut:{animationName:m.a.keyframes(Y.fadeOut,"fadeOut"),animationDuration:"1.0s",animationFillMode:"forwards",animationTimingFunction:"ease-out"},bottomCircle:{height:"70px",width:"140px",borderRadius:" 0 0 140px 140px","@media (min-width: 750px) and (orientation: portrait)":{height:"90px",width:"180px",borderRadius:" 0 0 180px 180px"},"@media (min-width: 900px)":{height:"90px",width:"180px",borderRadius:" 0 0 180px 180px"},"@media (min-width: 900px) and (orientation: portrait)":{height:"110px",width:"220px",borderRadius:" 0 0 220px 220px"},"@media (min-width: 1200px)":{height:"110px",width:"220px",borderRadius:" 0 0 220px 220px"}},hide:{visibility:"hidden"},topCircle:{height:"70px",width:"140px",borderRadius:"140px 140px 0 0","@media (min-width: 750px) and (orientation: portrait)":{height:"90px",width:"180px",borderRadius:" 180px 180px 0px 0px"},"@media (min-width: 900px)":{height:"90px",width:"180px",borderRadius:" 180px 180px 0px 0px"},"@media (min-width: 900px) and (orientation: portrait)":{height:"110px",width:"220px",borderRadius:" 220px 220px 0px 0px"},"@media (min-width: 1200px)":{height:"110px",width:"220px",borderRadius:" 220px 220px 0px 0px"}}},J=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={},n}return Object(d.a)(i,[{key:"render",value:function(){var e,t;this.props.shape===_?(e=q.topCircle,t=this.props.show?q.fadeIn:!1===this.props.show?q.fadeOut:q.hide):(e=q.bottomCircle,t=this.props.show?q.fadeIn:!1===this.props.show?q.fadeOut:q.hide);var i=[q.container,e,t,this.props.style];return a.a.createElement("div",{onClick:this.handleClick.bind(this),style:i},this.props.children)}},{key:"handleClick",value:function(e){this.props.onClick(e,this.props.children)}}]),i}(a.a.Component),G=Object(m.a)(J),K=i(14),Z=i.n(K),$={container:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start",margin:L,zIndex:"40","@media (min-width: 600px)":{margin:A},"@media (min-width: 750px)":{margin:P},"@media (min-width: 1200px)":{margin:N}},fadeIn:{animationName:m.a.keyframes(Y.fadeIn,"fadeIn"),animationDuration:"3s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},infoContainer:{display:"flex",flexDirection:"column",zIndex:"40",justifyContent:"center",alignItems:"flex-end"},labelContainer:{backgroundColor:u,borderRadius:"5px",padding:B,zIndex:"40","@media (min-width: 900px)":{padding:M}},textStyle:{fontFamily:V,fontSize:k,color:f,letterSpacing:"1px","@media (min-width: 450px)":{},"@media (min-width: 600px)":{fontSize:C},"@media (min-width: 750px) and (orientation: portrait)":{fontSize:C},"@media (min-width: 900px) and (orientation: portrait)":{fontSize:E}},infoColor:{color:f},smallMargin:{marginTop:B}},ee=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={time:Z.a.tz("America/Chicago").format("h:mm:ss a"),date:Z.a.tz("America/Chicago").format("LL")},setInterval(n.updateDateTime.bind(Object(l.a)(n)),1e3),n}return Object(d.a)(i,[{key:"render",value:function(){var e=[$.textStyle,$.infoColor];return a.a.createElement("div",{style:$.container},a.a.createElement("div",{style:[$.labelContainer,$.textStyle,$.fadeIn]},"LIVE"),a.a.createElement("div",{style:$.infoContainer},a.a.createElement("div",{style:[$.smallMargin,e,$.fadeIn]},"CHICAGO, USA"),a.a.createElement("div",{style:[e,$.fadeIn]},this.state.date),a.a.createElement("div",{style:[e,$.fadeIn]},this.state.time)))}},{key:"updateDateTime",value:function(){this.setState({time:Z.a.tz("America/Chicago").format("h:mm:ss a"),date:Z.a.tz("America/Chicago").format("LL")})}}]),i}(a.a.Component),te=Object(m.a)(ee),ie={container:{display:"flex",width:"100%",height:"50px","@media (min-width: 750px) and (orientation: portrait)":{height:"60px"},"@media (min-width: 1200px)":{height:"70px"},"@media (min-width: 1400px)":{height:"80px"}},textArea:{width:"100%",fontSize:k,padding:L,fontFamily:V,color:h,letterSpacing:"1px","@media (min-width: 750px) and (orientation: portrait)":{fontSize:C},"@media (min-width: 1200px)":{fontSize:E},"@media (min-width: 1400px)":{fontSize:O}}},ne=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={value:""},n.textArea=a.a.createRef(),n}return Object(d.a)(i,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.a.createElement("div",{style:ie.container},a.a.createElement("textarea",{ref:this.textArea,style:ie.textArea,outline:"none",maxLength:"500",value:this.state.value,onChange:this.onChange.bind(this),placeholder:"Type your message..."}))}},{key:"onChange",value:function(e){this.setState({value:e.target.value}),this.props.onChange(e.target.value)}},{key:"clearContent",value:function(){this.setState({value:""})}},{key:"getContent",value:function(){return this.state.value}}]),i}(a.a.Component),ae=Object(m.a)(ne);function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var se=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("path",{d:"M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"}))),de=a.a.createElement("g",null),le=a.a.createElement("g",null),ce=a.a.createElement("g",null),pe=a.a.createElement("g",null),me=a.a.createElement("g",null),he=a.a.createElement("g",null),ue=a.a.createElement("g",null),fe=a.a.createElement("g",null),ge=a.a.createElement("g",null),xe=a.a.createElement("g",null),ye=a.a.createElement("g",null),be=a.a.createElement("g",null),ve=a.a.createElement("g",null),we=a.a.createElement("g",null),Se=a.a.createElement("g",null),ke=function(e){var t=e.svgRef,i=e.title,n=re(e,["svgRef","title"]);return a.a.createElement("svg",oe({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492 492",style:{enableBackground:"new 0 0 492 492"},xmlSpace:"preserve",ref:t},n),i?a.a.createElement("title",null,i):null,se,de,le,ce,pe,me,he,ue,fe,ge,xe,ye,be,ve,we,Se)},Ce=a.a.forwardRef((function(e,t){return a.a.createElement(ke,oe({svgRef:t},e))})),Ee=(i.p,{container:{display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center",background:b,color:v,marginLeft:B,marginRight:B,marginTop:L,fontFamily:Q,paddingLeft:B,paddingRight:B,width:"100%","@media (min-width: 450px) and (orientation: landscape)":{width:"calc(100%/2 - 4%)"},"@media (min-width: 750px)":{width:"calc(100%/2 - 3%)"},"@media (min-width: 900px)":{width:"calc(100%/2 - 2%)"},"@media (min-width: 1200px)":{width:"calc(100%/3 - 2%)"},"@media (min-width: 1400px)":{width:"calc(100%/4 - 2%)"}},title:{fontSize:k,letterSpacing:"1.5px",paddingTop:B,paddingBottom:B,paddingLeft:M,paddingRight:M,marginTop:P,background:v,color:b},website:{marginTop:L,fontSize:S},city:{background:b,color:v,marginTop:B,fontSize:S},dateTimeContainer:{marginTop:M,display:"flex",flexDirection:"row"},dateTime:{fontSize:S,marginRight:M},message:{display:"flex",alignSelf:"center",marginTop:L,fontSize:k,marginBottom:A}}),Oe=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={value:""},n.textArea=a.a.createRef(),n}return Object(d.a)(i,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=[Ee.title,Ee.website],t=this.beautifyDate();return a.a.createElement("div",{style:Ee.container},a.a.createElement("div",{style:Ee.title}," MOMIMSAFE "),a.a.createElement("div",{style:e},"momimsafe.live"),a.a.createElement("div",{style:Ee.dateTimeContainer},a.a.createElement("div",{style:Ee.dateTime},t.date),a.a.createElement("div",{style:Ee.dateTime},t.time)),a.a.createElement("div",{style:Ee.message},this.props.entry.message))}},{key:"beautifyDate",value:function(){var e=this.props.entry.date.toString().split("T")[0],t=this.props.entry.time.toString().split(":");return e=e.split("-"),{date:(e=new Date(e[0],e[1]-1,e[2],t[0],t[1],t[2])).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),time:e.toLocaleTimeString("en-US")}}}]),i}(a.a.Component),Ie=Object(m.a)(Oe),Te=0,je=1,ze=0,Re=1,De=2,Fe={container:{},overlay:{position:"fixed",top:"0px",bottom:"0px",left:"0px",right:"0px",background:g,zIndex:"-999"},fadeIn:{animationName:m.a.keyframes({from:{opacity:"0"},to:{opacity:"0.5"}},"fadesIn"),animationDuration:"0.5s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},fadeOut:{animationName:m.a.keyframes({from:{opacity:"0.5"},to:{opacity:"0"}},"fadesOut"),animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-out"},fadeOutUp:{animationName:m.a.keyframes(Y.fadeOutUp,"fadeOutUp"),animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-out"},fadeOutDown:{animationName:m.a.keyframes(Y.fadeOutDown,"fadeOutDown"),animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-out"},fadeInDown:{animationName:m.a.keyframes(Y.fadeInDown,"fadeInDown"),animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},fadeInUp:{animationName:m.a.keyframes(Y.fadeInUp,"fadeInUp"),animationDuration:"1.5s",animationFillMode:"forwards",animationTimingFunction:"ease-in"},showOverlay:{zIndex:"998"},showContent:{zIndex:"999"},contentContainer:{position:"fixed",zIndex:"-999",top:"0px",bottom:"0px",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},content:{borderRadius:w,borderStyle:"dotted",borderColor:y,borderWidth:"3px",overflow:"auto",maxWidth:"calc(100% - 50px)",maxHeight:"calc(100% - 100px)","@media (min-width: 600px)":{maxWidth:"calc(100% - 100px)",maxHeight:"calc(100% - 100px)"},"@media (min-width: 750px)":{maxWidth:"calc(100% - 150px)",maxHeight:"calc(100% - 100px)"},"@media (min-width: 1200px)":{maxWidth:"calc(100% - 300px)",maxHeight:"calc(100% - 100px)"}},stretchContainer:{display:"flex",flexDirection:"column",alignItems:"center",background:h,color:f,paddingLeft:L,paddingRight:L,"@media (min-width: 600px)":{paddingLeft:A,paddingRight:A},"@media (min-width: 900px)":{paddingLeft:N,paddingRight:N},"@media (min-width: 1200px)":{paddingLeft:U,paddingRight:U}},title:{marginTop:A,fontFamily:W,fontSize:j,"@media (min-width: 600px)":{fontSize:z},"@media (min-width: 750px)":{fontSize:R},"@media (min-width: 750px) and (orientation: portrait)":{fontSize:D},"@media (min-width: 900px)":{fontSize:D},"@media (min-width: 1200px)":{fontSize:F},"@media (min-width: 1400px)":{}},body:{marginTop:B,justifyContent:"center",fontFamily:H,fontSize:k},mediaQueryOnText:{"@media (min-width: 750px) and (orientation: portrait)":{fontSize:C},"@media (min-width: 900px)":{fontSize:C},"@media (min-width: 1200px)":{fontSize:C},"@media (min-width: 1400px)":{fontSize:E}},iconContainer:{display:"flex",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",borderRadius:k,padding:B,backgroundColor:f,right:w,marginRight:"-"+S,height:S,width:S,fill:h,"@media (min-width: 600px)":{marginRight:"-"+C},"@media (min-width: 750px) and (orientation:portrait)":{},"@media (min-width: 900px)":{height:C,width:C,marginRight:"-"+I},"@media (min-width: 1200px)":{marginRight:"-"+z},"@media (min-width: 1400px)":{}},icon:{width:"100%",height:"100%"},buttonContainer:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:A,marginBottom:N,background:f,fontFamily:V,fontSize:k,color:h,letterSpacing:"1px",padding:L,borderRadius:S},input:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",marginTop:M,marginBottom:M},sendButtonContainer:{background:f,fontFamily:V,fontSize:k,color:h,letterSpacing:"1px",marginLeft:B,padding:L,borderRadius:S,display:"flex",alignItems:"center",justifyContent:"center",alignSelf:"stretch","@media (min-width: 900px)":{width:"100px"}},disabled:{color:x},imageContainer:{marginTop:L,width:"100%"},footer:{display:"flex",alignItems:"center",color:y,alignSelf:"center",fontFamily:V,fontSize:S,marginBottom:L,letterSpacing:"1.5px","@media (min-width: 750px)":{fontSize:k},"@media (min-width: 1200px)":{fontSize:C}},receiptsContainer:{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:L}},Be=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={isVisible:!1,popupState:De,disabled:!0},n.textInput=a.a.createRef(),n.content=a.a.createRef(),n}return Object(d.a)(i,[{key:"render",value:function(){var e,t,i;return this.state.isVisible?(e=[Fe.overlay,Fe.showOverlay],this.state.popupState===ze?e=[e,Fe.fadeIn]:this.state.popupState===Re&&(e=[e,Fe.fadeOut])):e=Fe.overlay,this.props.type===Te?(t=this.getAboutContent(),this.state.isVisible?(i=[Fe.contentContainer,Fe.showContent],this.state.popupState===ze?i=[i,Fe.fadeInDown]:this.state.popupState===Re&&(i=[i,Fe.fadeOutUp])):i=Fe.contentContainer):(t=this.getSendContent(),this.state.isVisible?(i=[Fe.contentContainer,Fe.showContent],this.state.popupState===ze?i=[i,Fe.fadeInUp]:this.state.popupState===Re&&(i=[i,Fe.fadeOutDown])):i=Fe.contentContainer),a.a.createElement("div",{onClick:this.handleOnTouch.bind(this),onTouchStart:this.handleOnTouch.bind(this),style:Fe.container},a.a.createElement("div",{style:e}),a.a.createElement("div",{onAnimationEnd:this.contentAnimationEnd.bind(this),style:i},t))}},{key:"contentAnimationEnd",value:function(){this.state.isVisible&&this.state.popupState===Re&&this.setState({isVisible:!1,popupState:De})}},{key:"getCloseButton",value:function(){var e=[Fe.buttonContainer,Fe.mediaQueryOnText];return a.a.createElement("div",{style:e,onClick:this.hidePopup.bind(this)},"CLOSE")}},{key:"getIconButton",value:function(){return a.a.createElement("div",{onClick:this.hidePopup.bind(this),style:Fe.iconContainer},a.a.createElement(Ce,{style:Fe.icon}))}},{key:"getAboutContent",value:function(){var e=this.getFooter(),t=this.getCloseButton(),i=this.getIconButton(),n=[Fe.body,Fe.mediaQueryOnText];return a.a.createElement("div",{ref:this.content,style:Fe.content},a.a.createElement("div",{style:Fe.stretchContainer},i,a.a.createElement("div",{style:Fe.title},"Mom I'm Safe"),a.a.createElement("div",{style:n},"momimsafe is an active live-stream of my home studio space, where I spend the majority of my time in this post-covid era. It was developed in response to the COVID-19 lockdown, with an urgent need in mind; to be visually and physically accessible to all my friends and family globally; especially my mom, who has been concerned about my safety and health during this time. It's a twisted take on communication, which is personal and can exist for an extended period of time. To bridge your virtual space with my physical space, you can send me messages that are archived and printed in my space in real-time."),t,e))}},{key:"getSendContent",value:function(){var e=this.processReceipts(),t=this.getFooter(),i=this.getCloseButton(),n=this.getIconButton(),o=[Fe.mediaQueryOnText,Fe.sendButtonContainer];o=this.state.disabled?[o,Fe.disabled]:o;var r=[Fe.body,Fe.mediaQueryOnText];return a.a.createElement("div",{ref:this.content,style:Fe.content},a.a.createElement("div",{style:Fe.stretchContainer},n,a.a.createElement("div",{style:Fe.title},"Send Some Love"),a.a.createElement("div",{style:Fe.input},a.a.createElement(ae,{onChange:this.onTextInputChange.bind(this),ref:this.textInput}),a.a.createElement("button",{disabled:this.state.disabled,onClick:this.handleSendMessage.bind(this),style:o},"SEND")),a.a.createElement("div",{style:r},"There may be times when you see me working in my studio, or you may not. But you can leave me a message by typing in the textbox above and hitting the send button. Your messages will be printed by a receipt printer in my studio, which is situated on the left side of my desk. These messages arrive in real-time and are anonymous. So leave a trace in my space, be honest, and send some love. Below are some the receipts produced already. Send a message and see more of them."),a.a.createElement("div",{style:Fe.receiptsContainer},e),i,t))}},{key:"getFooter",value:function(){return a.a.createElement("a",{style:Fe.footer,target:"_blank",rel:"noopener noreferrer",href:"https://amaykataria.com"},"\xa9 Amay Kataria 2020")}},{key:"showPopup",value:function(){this.content.current.scrollTop=0,this.props.type===Te&&this.setState({disabled:!0}),this.setState({isVisible:!0,popupState:ze})}},{key:"hidePopup",value:function(e){e.stopPropagation(),this.setState({popupState:Re}),this.props.onClose()}},{key:"handleOnTouch",value:function(e){e.stopPropagation()}},{key:"handleSendMessage",value:function(e){e.stopPropagation(),this.textInput.current.clearContent();var t=this.textInput.current.getContent();this.props.onSend(t),this.hidePopup(e)}},{key:"onTextInputChange",value:function(e){0!==e.length?this.setState({disabled:!1}):this.setState({disabled:!0})}},{key:"processReceipts",value:function(){for(var e=this.props.receipts,t=[],i=0;i<e.length;i++)t.push(a.a.createElement(Ie,{key:i,entry:e[i]}));return t}}]),i}(a.a.Component),Me=Object(m.a)(Be),Le=i(91),Ae=i.n(Le),Pe={container:{position:"fixed",top:"0px",bottom:"0px",left:"0px",right:"0px",zIndex:"10"},flipInX:{animationName:m.a.keyframes(Y.fadeInLeft,"flipInX"),animationDuration:"3s",animationFillMode:"forwards",animationTimingFunction:"ease-in-out"},canvas:{height:"100vh",width:"100vw"},overlay:{background:"linear-gradient(356deg, rgba(252,240,225,1) 0%, rgba(5,90,133,1) 100%)",opacity:"0.35",position:"absolute",top:"0px",bottom:"0px",left:"0px",right:"0px"}},Ne=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={},n.container=a.a.createRef(),n.canvas=a.a.createRef(),n}return Object(d.a)(i,[{key:"componentDidMount",value:function(){this.player=new Ae.a.VideoElement(this.container.current,"wss://radiant-oasis-49153.herokuapp.com/",{canvas:this.canvas.current},{audio:!1})}},{key:"render",value:function(){var e=[Pe.container,Pe.flipInX];return a.a.createElement("div",{style:e,ref:this.container},a.a.createElement("div",{style:Pe.overlay}),a.a.createElement("canvas",{style:Pe.canvas,ref:this.canvas}))}}]),i}(a.a.Component),Ue=Object(m.a)(Ne),Ve=i(92),We=i(93),He=i.n(We),Qe=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={},n.socket=He()("https://blooming-refuge-71111.herokuapp.com/app",{reconnection:!0,reconnectionDelay:500,reconnectionAttempts:1/0}),n.socket.once("connect",n.subscribe.bind(Object(l.a)(n))),n}return Object(d.a)(i,[{key:"render",value:function(){return null}},{key:"subscribe",value:function(){console.log("Connected"),this.socket.on("time",this.logTime.bind(this)),this.socket.on("disconnect",this.disconnect.bind(this)),this.socket.on("receiveRandomEntries",this.receiveEntries.bind(this))}},{key:"disconnect",value:function(){console.log("Socket Server Disconnected.")}},{key:"logTime",value:function(e){console.log("Socket Connection Alive: "+e)}},{key:"sendMessage",value:function(e){var t={message:e.toLowerCase(),date:Z.a.tz("America/Chicago").format("YYYY-MM-DD"),time:Z.a.tz("America/Chicago").format("h:mm:ss a")};console.log("Emitting Write Payload"),this.socket.emit("writePayload",t)}},{key:"requestData",value:function(){this.socket.emit("readRandomEntries")}},{key:"receiveEntries",value:function(e){console.log("Receipts received"),this.props.processEntries(e)}}]),i}(a.a.Component),Ye=Object(m.a)(Qe),_e={container:{position:"relative"},buttonWrapper:{position:"fixed",top:"0px",bottom:"0px",left:"0px",right:"0px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:"30"},topButton:{display:"flex",alignItems:"center",opacity:"0.9"},bottomButton:{display:"flex",alignItems:"center",opacity:"0.9"}},Xe=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={imageSrc:"",popupType:Te,showButtons:!0,receipts:{}},n.websocket=a.a.createRef(),n.popupRef=a.a.createRef(),n.timeoutDuration=5e3,n.buttonTimeout=setTimeout(n.hideButtons.bind(Object(l.a)(n)),n.timeoutDuration),n}return Object(d.a)(i,[{key:"render",value:function(){return a.a.createElement("div",{onClick:this.onTouch.bind(this),onTouchStart:this.onTouch.bind(this),style:_e.container},a.a.createElement(Ye,{ref:this.websocket,processEntries:this.entriesReceived.bind(this)}),a.a.createElement(te,null),a.a.createElement("div",{style:_e.buttonWrapper},a.a.createElement(G,{key:"About",show:this.state.showButtons,onClick:this.handleClick.bind(this),shape:_,style:_e.bottomButton},"About"),a.a.createElement(G,{key:"Send",show:this.state.showButtons,onClick:this.handleClick.bind(this),shape:X,style:_e.topButton},"Send")),a.a.createElement(Ue,{ref:this.videoStream}),a.a.createElement(Me,{ref:this.popupRef,onClose:this.handlePopupClose.bind(this),onSend:this.handleSendMessage.bind(this),type:this.state.popupType,receipts:this.state.receipts}))}},{key:"onStreamImage",value:function(e){var t="data:image/jpeg;base64,"+e;this.setState({imageSrc:t})}},{key:"emitMessage",value:function(e){this.websocket.current.sendMessage(e)}},{key:"handlePopupClose",value:function(){this.setState({showButtons:!0}),this.buttonTimeout=setTimeout(this.hideButtons.bind(this),this.timeoutDuration)}},{key:"handleClick",value:function(e,t){e.stopPropagation(),clearTimeout(this.buttonTimeout),"Send"===t&&this.websocket.current.requestData();var i="About"===t?Te:je;this.setState({popupType:i,showButtons:!1}),this.popupRef.current.showPopup()}},{key:"entriesReceived",value:function(e){this.setState({receipts:e})}},{key:"onTouch",value:function(){clearTimeout(this.buttonTimeout),this.buttonTimeout=setTimeout(this.hideButtons.bind(this),this.timeoutDuration),this.setState({showButtons:!0})}},{key:"hideButtons",value:function(){this.setState({showButtons:!1})}},{key:"handleSendMessage",value:function(e){this.websocket.current.sendMessage(e)}}]),i}(a.a.Component),qe=Object(m.a)(Object(Ve.withOrientationChange)(Xe)),Je=i(41);r.a.render(a.a.createElement(Je.a,null,a.a.createElement(qe,null)),document.getElementById("root"))},94:function(e,t,i){e.exports=i(223)},99:function(e,t,i){}},[[94,1,2]]]);
//# sourceMappingURL=main.138918ff.chunk.js.map