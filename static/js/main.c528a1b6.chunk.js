(this["webpackJsonpreddit-knockoff"]=this["webpackJsonpreddit-knockoff"]||[]).push([[0],{30:function(e,t,n){e.exports=n(43)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),s=n.n(r),l=n(11),u=n(14),c=(n(39),n(15)),i=n(24),m=n(25),p=n(28),d=n(26),h=n(29),g=n(18),E=n(8),f=(n(40),n(41),function(e){return o.a.createElement("div",{style:{border:"1px solid black",float:"left",padding:"5px 5px 0px 5px",width:"750px"}},o.a.createElement("div",{style:{float:"left",padding:"5px"}},o.a.createElement("button",{className:"Upvote",onClick:e.upVote},"^"),o.a.createElement("p",{className:"UpvoteText"},e.upvotes),o.a.createElement("button",{className:"Downvote",onClick:e.downVote},"v")),o.a.createElement("div",{onClick:e.openThread,style:{float:"left",textAlign:"left",width:"700px",border:"1px solid red"}},o.a.createElement("span",null,e.flair),o.a.createElement("span",{className:"TitleText"},e.title),o.a.createElement("p",{className:"AuthorText"},"Posted by u/",e.author," ",e.age," ago"),o.a.createElement("p",{className:"CommentText"},e.comments," Comments")),o.a.createElement("br",null))}),v=function(e){return o.a.createElement("div",null,o.a.createElement("p",null,"I am a thread named ",e.id))},b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={posts:[{id:0,upvotes:831,flair:null,title:"New? READ ME FIRST!",author:"michael0x2a",age:"2 years",comments:15},{id:1,upvotes:1e3,flair:null,title:"You guys interested in a website that focuses on learning design / ux / ui / css ?",author:"web_dev1996",age:"13 hours",comments:130},{id:2,upvotes:23,flair:null,title:"How would you learn to code if you had all the free time? (Enough savings to sustain yourself)",author:"hakerys23",age:"6 hours",comments:9},{id:3,upvotes:3300,flair:"Resource",title:"Learn the syntax of any programming language really fast, like in minutes",author:"1TMission",age:"1 day",comments:91},{id:4,upvotes:16,flair:null,title:"What tool do you use to plan your projects from scratch?",author:"wulfgar4president",age:"10 hours",comments:6}],checkname:"test",username:"",loggedIn:!1,tempTitle:"",tempMsg:""},n.upVote=function(e){console.log(1);for(var t=Object(c.a)(n.state.posts),a=0;a<t.length;a++)t[a].id===e&&(t[a].upvotes+=1);n.setState({posts:t})},n.downVote=function(e){console.log(2);for(var t=Object(c.a)(n.state.posts),a=0;a<t.length;a++)t[a].id===e&&(t[a].upvotes-=1);n.setState({posts:t})},n.openThread=function(e){console.log(e)},n.postTitle=function(e){n.setState({tempTitle:e.target.value})},n.postMsg=function(e){n.setState({tempMsg:e.target.value})},n.postThread=function(e){var t=Object(c.a)(n.state.posts),a={id:t.length,upvotes:1,title:n.state.tempTitle,author:n.state.username,age:"1 minute",comments:0};t.unshift(a),n.setState({posts:t})},n.signUp=function(){n.state.username.length<3?(n.setState({checkName:"Username is too short"}),console.log("Too short")):(n.setState({checkName:"Long enough"}),console.log("Long enough"),n.setState({loggedIn:!n.state.loggedIn}))},n.handleChange=function(e){n.setState({username:e.target.value})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this;e=this.state.loggedIn?o.a.createElement("div",null,o.a.createElement("p",null,"Post something!"),o.a.createElement("p",null,"Post Title:"),o.a.createElement("input",{type:"text",name:"title",onChange:this.postTitle}),o.a.createElement("p",null,"Message (Optional)"),o.a.createElement("input",{type:"text",name:"msg",onChange:this.postMsg}),o.a.createElement("button",{onClick:this.postThread},"Post")):null;var n=o.a.createElement("div",{style:{width:"750px"}},this.state.posts.map((function(e,n){return o.a.createElement("div",{key:n},o.a.createElement(g.b,{to:"/"+n},o.a.createElement(f,{className:"ThreadContainer",upvotes:e.upvotes,flair:e.flair,title:e.title,author:e.author,age:e.age,comments:e.comments,upVote:t.upVote.bind(t,e.id),downVote:t.downVote.bind(t,e.id),openThread:t.openThread.bind(t,e.id)})))})));return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,null,o.a.createElement("div",{className:"Header"},o.a.createElement("p",{className:"Logo"},"Reddit Clone"),this.state.username.length>2&&this.state.loggedIn?o.a.createElement("p",null,"Logged in as u/",this.state.username):null,this.state.loggedIn?null:o.a.createElement("div",{style:{float:"right"}},o.a.createElement("input",{type:"text",name:"Username",onChange:this.handleChange}),o.a.createElement("button",{onClick:this.signUp},"Sign Up"),o.a.createElement("p",null,this.state.checkName))),o.a.createElement("div",{style:{margin:"20px"}},n),e,o.a.createElement(E.a,{path:"/:id",component:v})),o.a.createElement("span",null,this.props.ctr),o.a.createElement("button",{onClick:this.props.onIncrementCounter},"Increment"),o.a.createElement("button",{onClick:this.props.onDecCounter},"Decrease"),o.a.createElement("button",{onClick:this.props.onAdd},"Add 3"),o.a.createElement("button",{onClick:this.props.onSub},"Subtract 5"),o.a.createElement("hr",null),o.a.createElement("button",{onClick:function(){return t.props.onStoreResult(t.props.ctr)}},"store result"),o.a.createElement("ul",null,this.props.storedResults.map((function(e){return o.a.createElement("li",{key:e.id,onClick:function(){return t.props.onDeleteResult(e.id)}},e.value)}))))}}]),t}(a.Component),y=Object(u.b)((function(e){return{ctr:e.ctr.counter,storedResults:e.res.results}}),(function(e){return{onIncrementCounter:function(){return e({type:"INCREMENT"})},onDecCounter:function(){return e({type:"DEC"})},onAdd:function(){return e({type:"ADD",value:3})},onSub:function(){return e({type:"SUB",value:5})},onStoreResult:function(t){return e({type:"STORE_RESULT",result:t})},onDeleteResult:function(t){return e({type:"DELETE_RESULT",resultElId:t})}}}))(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(9),k={counter:0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":var n=Object.assign({},e);return n.counter=e.counter+1,n;case"DEC":return Object(T.a)({},e,{counter:e.counter-1});case"ADD":return Object(T.a)({},e,{counter:e.counter+t.value});case"SUB":return Object(T.a)({},e,{counter:e.counter-t.value});default:return e}},w={results:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_RESULT":return Object(T.a)({},e,{results:e.results.concat({id:new Date,value:t.result})});case"DELETE_RESULT":var n=e.results.filter((function(e){return e.id!==t.resultElId}));return Object(T.a)({},e,{results:n});default:return e}},x=Object(l.b)({ctr:C,res:S}),O=Object(l.c)(x);s.a.render(o.a.createElement(u.a,{store:O},o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c528a1b6.chunk.js.map