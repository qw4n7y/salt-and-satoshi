(this["webpackJsonpsalt-and-satoshi"]=this["webpackJsonpsalt-and-satoshi"]||[]).push([[0],{332:function(e,t,n){},333:function(e,t){},345:function(e,t){},347:function(e,t){},374:function(e,t){},409:function(e,t){},412:function(e,t){},690:function(e,t){},697:function(e,t){},719:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(18),s=n.n(r),i=n(293),u=n.n(i),o=(n(332),n(5)),p=n.n(o),c=n(46),l=n(62),y=n(56),d=n(306),b=n(307),f=n(300),m=n(301),j=n(302),h=n(304),v=12e3,x="https://mainnet.infura.io/v3/60ab76e16df54c808e50a79975b4779f",O=new f.a({supportedChainIds:[1]}),T=new m.a({rpc:{1:x},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:v}),g=new j.a({chainId:1,url:x,pollingInterval:v}),w=new h.a({chainId:1,url:x,pollingInterval:v,manifestEmail:"dummy@abc.xyz",manifestAppUrl:"http://localhost:1234"});var k=n(105),I=n(305),M=n(181);function C(e,t){return new M.a(e,'[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"newOwner","type":"address"},{"internalType":"string","name":"contractURI","type":"string"},{"internalType":"string","name":"tokenURIPrefix","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"recipients","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"bps","type":"uint256[]"}],"name":"SecondarySaleFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"fees","outputs":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFeeBps","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFeeRecipients","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"components":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct ERC721Base.Fee[]","name":"_fees","type":"tuple[]"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"contractURI","type":"string"}],"name":"setContractURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"tokenURIPrefix","type":"string"}],"name":"setTokenURIPrefix","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenURIPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]',t)}var F=n(182);n(718);F.a.initializeApp({apiKey:"AIzaSyC8DwM9z-H9cSTCqHR4UGEvW86jL63sre0",authDomain:"saltandsatoshi.firebaseapp.com",databaseURL:"https://saltandsatoshi.firebaseio.com",projectId:"saltandsatoshi",storageBucket:"saltandsatoshi.appspot.com",messagingSenderId:"629543041272",appId:"1:629543041272:web:80d0b9de555810bbc9e30d"});var S=F.a.firestore(),R=S.collection("nft_tokens");function A(){return U.apply(this,arguments)}function U(){return(U=Object(c.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get();case 2:return t=e.sent,n=t.docs.map((function(e){return e.data()})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=S.collection("redeem_forms");function B(e){return"".concat(e.owner,"-").concat(Date.now())}function z(e){return L.apply(this,arguments)}function L(){return(L=Object(c.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=B(t),a=E.doc(n),e.next=4,a.set(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return P.apply(this,arguments)}function P(){return(P=Object(c.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.where("owner","==",t).get();case 2:return n=e.sent,a=n.docs.map((function(e){return e.data()})),e.abrupt("return",a.map((function(e){return e.tokenId})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){return Object(a.jsx)("div",{style:{width:e.width,height:e.height,backgroundImage:"url(".concat(e.src,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat"}})},W=n(6),q=n(7),H=n(13),J=n(10),G=n(9),K=function(e){Object(J.a)(n,e);var t=Object(G.a)(n);function n(e){var a;return Object(W.a)(this,n),(a=t.call(this,e)).state={model:e.model},a.onChange=a.onChange.bind(Object(H.a)(a)),a.onSubmit=a.onSubmit.bind(Object(H.a)(a)),a}return Object(q.a)(n,[{key:"render",value:function(){var e=this,t=this.props.model;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Redeem"}),Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsx)("input",{type:"text",name:"country",placeholder:"country",value:t.country,onChange:function(n){t.country=n.currentTarget.value,e.onChange(t)}}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"city",placeholder:"city",value:t.city,onChange:function(n){t.city=n.currentTarget.value,e.onChange(t)}}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"address",placeholder:"address",value:t.address,onChange:function(n){t.address=n.currentTarget.value,e.onChange(t)}}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",children:"Submit"}),Object(a.jsx)("button",{onClick:this.props.onClose,children:"Close"})]})]})}},{key:"onChange",value:function(e){var t=Object.assign({},e);this.setState({model:t})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.model)}}]),n}(s.a.Component),Y=function(e){e.children;var t=Object(y.b)(),n=t.account,r=t.library,i=s.a.useState(void 0),u=Object(l.a)(i,2),o=u[0],d=u[1],b=s.a.useState(void 0),f=Object(l.a)(b,2),m=f[0],j=f[1],h=s.a.useState(void 0),v=Object(l.a)(h,2),x=v[0],O=v[1],T=s.a.useState(void 0),g=Object(l.a)(T,2),w=g[0],M=g[1];s.a.useEffect((function(){x||Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})))()}),[x]),s.a.useEffect((function(){n&&(m||Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(n);case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})))())}),[n,m]),s.a.useEffect((function(){n&&r&&x&&(o||Object(c.a)(p.a.mark((function e(){var t,a,s,i,u,c,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getSigner(n);case 2:t=e.sent,a=C("0x60f80121c31a0d46b5279700f9df786054aa5ee5",t),s=Object.assign({},o),i=Object(I.a)(x),e.prev=6,i.s();case 8:if((u=i.n()).done){e.next=22;break}return c=u.value,e.prev=10,e.next=13,a.ownerOf(c.tokenId);case 13:l=e.sent,s[c.tokenId]=l,e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),console.error(e.t0);case 20:e.next=8;break;case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(6),i.e(e.t1);case 27:return e.prev=27,i.f(),e.finish(27);case 30:d(s);case 31:case"end":return e.stop()}}),e,null,[[6,24,27,30],[10,17]])})))())}),[n,r,o,x]);var F=!!o;return Object(a.jsxs)(a.Fragment,{children:[x?Object(a.jsx)("ul",{children:x.map((function(e){var t=(o||{})[e.tokenId],r=!!t&&t===n,s=r&&(m||[]).includes(e.tokenId);return Object(a.jsxs)("li",{children:[Object(a.jsx)(_,{src:e.imageUrl,width:150,height:150}),Object(a.jsx)("br",{}),e.tokenId,Object(a.jsx)("br",{}),F?t?Object(a.jsx)(a.Fragment,{children:r?s?Object(a.jsx)(a.Fragment,{children:"Already redeemed"}):Object(a.jsxs)(a.Fragment,{children:["\u2705 You can ",Object(a.jsx)("button",{onClick:function(){M({owner:n,tokenId:e.tokenId})},children:"redeem"})," your T-shirt"]}):Object(a.jsx)(a.Fragment,{children:"Sold"})}):Object(a.jsx)("a",{href:"https://opensea.io/",target:"_blank",rel:"noreferrer",children:"Buy"}):Object(a.jsx)(a.Fragment,{children:"\u231b"})]},"".concat(e.tokenId))}))}):Object(a.jsx)(a.Fragment,{children:"\u231b Loading"}),!!w&&Object(a.jsx)(K,{model:w,onSubmit:function(){var e=Object(c.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:j([].concat(Object(k.a)(m),[t.tokenId])),M(void 0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onClose:function(){return M(void 0)}})]})};function N(e){return new d.a(e)}function Q(){var e=Object(y.b)(),t=e.account,n=e.library,r=e.chainId,i=s.a.useState(0),u=Object(l.a)(i,2),o=u[0],d=u[1];return s.a.useEffect((function(){t&&n&&Object(c.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getBalance(t);case 2:a=e.sent,d(a);case 4:case"end":return e.stop()}}),e)})))()}),[t,n,r]),Object(a.jsxs)(a.Fragment,{children:["\ud83d\udcb0 \u039e",Object(b.a)(o)]})}var V=function(e){e.children;var t=e.theConnector,n=e.title,r=Object(y.b)(),s=r.connector,i=r.activate,u=s===t;return Object(a.jsxs)("button",{onClick:function(){i(t)},children:[n,"\xa0",u&&Object(a.jsx)(a.Fragment,{children:"\u2705"})]})};function X(){var e=Object(y.b)(),t=e.chainId,n=e.account,s=e.deactivate,i=e.active,u=e.error;return function(){var e=Object(y.b)(),t=e.activate,n=e.active,a=Object(r.useState)(!1),s=Object(l.a)(a,2),i=s[0],u=s[1];Object(r.useEffect)((function(){O.isAuthorized().then((function(e){e?t(O,void 0,!0).catch((function(){u(!0)})):u(!0)}))}),[t]),Object(r.useEffect)((function(){!i&&n&&u(!0)}),[i,n])}(),Object(a.jsxs)("div",{style:{padding:"15px"},children:[Object(a.jsx)("h1",{children:"Welcome"}),Object(a.jsx)(V,{theConnector:O,title:"Metamask"}),Object(a.jsx)(V,{theConnector:g,title:"Ledger"}),Object(a.jsx)(V,{theConnector:w,title:"Trezor"}),Object(a.jsx)(V,{theConnector:T,title:"Walletconnect"}),Object(a.jsx)("button",{onClick:function(){s()},children:"Disconnect"}),Object(a.jsx)("br",{}),i&&Object(a.jsx)(a.Fragment,{children:"\ud83c\udfc3\u200d\u2642\ufe0f Active"}),u&&Object(a.jsxs)(a.Fragment,{children:["\u26a0\ufe0f ",u.message]}),t&&Object(a.jsxs)(a.Fragment,{children:["\ud83d\udd78\ufe0f ",t]}),!!n&&Object(a.jsxs)(a.Fragment,{children:["\ud83e\uddcd ",n]}),!!n&&Object(a.jsx)(Q,{}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:"Showcase"}),Object(a.jsx)(Y,{})]})}var Z=function(){return Object(a.jsx)(y.a,{getLibrary:N,children:Object(a.jsx)(X,{})})},$=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,931)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};u.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(Z,{})}),document.getElementById("root")),$()}},[[719,1,2]]]);
//# sourceMappingURL=main.74d184a7.chunk.js.map