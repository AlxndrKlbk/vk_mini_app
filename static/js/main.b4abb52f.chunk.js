(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{174:function(t,e,n){"use strict";n.r(e);n(79),n(106),n(108),n(109),n(111),n(112),n(113),n(114),n(115),n(116),n(117),n(118),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(129),n(131),n(132),n(133),n(134),n(135),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(148);var a=n(12),o=n.n(a),r=n(72),u=n.n(r),s=n(38),i=n.n(s),c=n(73),l=n(74),h=n(22),p=n(77),d=n(76),g=(n(156),n(75)),x=n.n(g),f=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).changeInputText=t.changeInputText.bind(Object(h.a)(t)),t.changeWordCount=t.changeWordCount.bind(Object(h.a)(t)),t.state={inputText:"",resultText:"",resultTags:"",wordCount:""},t}return Object(l.a)(n,[{key:"getTags",value:function(){var t=this;x()({method:"post",url:"https://380aa881f990.ngrok.io/process_text",headers:{"Access-Control-Allow-Origin":"*"},data:{params:[{text:this.state.inputText,word_count:this.state.wordCount}]}}).then((function(e){t.setState({resultText:e.result_text,keywords:e.keywords}),console.log("resultText",e.result_text),console.log("keywords",e.keywords)}))}},{key:"changeInputText",value:function(t){this.setState({inputText:t.target.value})}},{key:"changeWordCount",value:function(t){this.setState({wordCount:t.target.value})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,"input your text ",o.a.createElement("input",{type:"text",name:"inputTextValue",value:this.state.inputText,onChange:this.changeInputText}),o.a.createElement("br",null),"input word count ",o.a.createElement("input",{type:"text",name:"wordCount",value:this.state.wordCount,onChange:this.changeWordCount}),o.a.createElement("div",{onClick:function(){t.getTags()},style:{width:"100px",height:"20px",background:"pink",display:"flex",justifyContent:"center",alignItems:"center"}},"get tags"))}}]),n}(o.a.Component);i.a.send("VKWebAppInit"),u.a.render(o.a.createElement(f,null),document.getElementById("root"))},78:function(t,e,n){t.exports=n(174)}},[[78,1,2]]]);
//# sourceMappingURL=main.b4abb52f.chunk.js.map