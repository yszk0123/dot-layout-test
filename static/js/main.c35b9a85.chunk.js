(this["webpackJsonpdot-layout"]=this["webpackJsonpdot-layout"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);n(10),n(11);var r=n(4),o=n(2),a=n(0),c=n.n(a),l=n(7),u=n.n(l),i=500,s=500,d=500/(i+0),f=500/(s+0),E=1,y="state";function b(e){var t=function(e){var t={version:E,data:e};return JSON.stringify(t)}(e);localStorage.setItem(y,t)}function v(){return function(e){try{if(null===e)return null;var t=JSON.parse(e);return null==(n=t)||"object"!==typeof n||n.version!==E?null:t.data}catch(r){return null}var n}(localStorage.getItem(y))}var m=n(1),p=n.n(m),O=function(e){var t=e.className,n=e.children,r=e.disabled,o=e.onClick;return c.a.createElement("button",{className:p()("Button",t),disabled:r,onClick:o},n)},D=function(e){var t=e.onAdd,n=e.onRemove,r=e.onClear,o=e.onRandomize,a=e.onSave,l=e.canRemove;return c.a.createElement("div",{className:"ControlPanel"},c.a.createElement(O,{className:"ControlPanel__button",onClick:t},"Add (A)"),c.a.createElement(O,{className:"ControlPanel__button",onClick:n,disabled:!l},"Remove (Del)"),c.a.createElement(O,{className:"ControlPanel__button",onClick:r},"Clear"),c.a.createElement(O,{className:"ControlPanel__button",onClick:o},"Randomize"),c.a.createElement(O,{className:"ControlPanel__button",onClick:a},"Save (Cmd+S)"))},P=function(e){var t=e.edge,n=e.startNode,r=e.endNode,o=e.selected,l=e.onClick,u=Object(a.useMemo)((function(){return function(e,t){var n=t.x-e.x,r=t.y-e.y,o=Math.sqrt(n*n+r*r);return{x:n/=o,y:r/=o}}(n,r)}),[n,r]),i=Object(a.useCallback)((function(e){e.stopPropagation(),l(t,e)}),[t,l]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("line",{className:p()("EdgeView",{"EdgeView--selected":o}),x1:n.x+36*u.x,y1:n.y+36*u.y,x2:r.x-36*u.x,y2:r.y-36*u.y,markerEnd:"url(#arrow)",onClick:i}))};var C,A,_=function(e){var t=e.node,n=e.selected,r=e.onClick,l=e.onDoubleClick,u=e.onMouseDown,i=e.onMouseMove,s=e.onMouseUp,d=Object(a.useState)(null),f=Object(o.a)(d,2),E=f[0],y=f[1],b=Object(a.useCallback)((function(e){var n={x:e.clientX,y:e.clientY};y(n),u({node:t,start:n,current:n},e)}),[u,t]),v=Object(a.useCallback)((function(e){if(null!==E){var n={x:e.clientX,y:e.clientY},r={node:t,start:E,current:n};y(null),s(r)}}),[s,t,E]),m=Object(a.useCallback)((function(e){if(null!==E){var n={x:e.clientX,y:e.clientY};i({node:t,start:E,current:n})}}),[i,t,E]);Object(a.useEffect)((function(){return document.body.addEventListener("mouseup",v),function(){document.body.removeEventListener("mouseup",v)}}),[v]),Object(a.useEffect)((function(){if(null!==E)return document.body.addEventListener("mousemove",m),function(){document.body.removeEventListener("mousemove",m)}}),[m,E]);var O=Object(a.useCallback)((function(e){e.stopPropagation(),r(t,e)}),[r,t]),D=Object(a.useCallback)((function(e){e.stopPropagation(),l(t,e)}),[l,t]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("circle",{className:p()("NodeView",{"NodeView--selected":n,dragging:E}),cx:t.x,cy:t.y,r:36,onClick:O,onDoubleClick:D,onMouseDown:b}),c.a.createElement(j,{x:t.x,y:t.y,text:t.text}))},j=function(e){var t=e.x,n=e.y,r=e.text;return c.a.createElement("foreignObject",{className:"NodeView__text",x:t-36,y:n-36,width:72,height:72},c.a.createElement("p",{className:"NodeView__text-inner"},r))},x=function(e){var t=e.children;return c.a.createElement("svg",{className:"Stage",width:500,height:500,viewBox:"".concat(-0," ").concat(-0," ").concat(i+0," ").concat(s+0)},c.a.createElement("defs",null,g,k),t)},g=c.a.createElement("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse"},c.a.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z"})),k=c.a.createElement("marker",{id:"dot",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"5",markerHeight:"5"},c.a.createElement("circle",{cx:"5",cy:"5",r:"5",fill:"red"}));function h(e){var t=e.dispatch,n=e.onSave;!function(e){var t=e.onKeyDown;Object(a.useEffect)((function(){var e=document.body;function n(n){n.target===e&&t(n)}return e.addEventListener("keydown",n),function(){e.removeEventListener("keydown",n)}}),[t])}({onKeyDown:Object(a.useCallback)((function(e){e.code===C.KEY_A?t({type:A.NODE_ADD}):e.code===C.BACKSPACE?t({type:A.GRAPH_REMOVE}):e.code===C.ESCAPE?t({type:A.GRAPH_DESELECT}):(e.ctrlKey||e.metaKey)&&e.code===C.KEY_S&&n()}),[t])})}!function(e){e.BACKSPACE="Backspace",e.ENTER="Enter",e.ESCAPE="Escape",e.KEY_A="KeyA",e.KEY_D="KeyD",e.KEY_R="KeyR",e.KEY_S="KeyS",e.KEY_W="KeyW"}(C||(C={})),function(e){e[e.APP_LOAD=0]="APP_LOAD",e[e.APP_RANDOMIZE=1]="APP_RANDOMIZE",e[e.GRAPH_CLEAR=2]="GRAPH_CLEAR",e[e.NODE_ADD=3]="NODE_ADD",e[e.GRAPH_REMOVE=4]="GRAPH_REMOVE",e[e.NODE_UPDATE=5]="NODE_UPDATE",e[e.GRAPH_SELECT=6]="GRAPH_SELECT",e[e.GRAPH_DESELECT=7]="GRAPH_DESELECT",e[e.EDGE_ADD=8]="EDGE_ADD"}(A||(A={}));var R=n(5),w=n(8);function N(){return Object(w.generate)()}function S(e){return Math.floor(Math.random()*e)}function M(){return function(e){for(var t=[],n=0;n<e;n+=1)t.push(n);return t}(5).map((function(){return{id:N(),x:S(i),y:S(s),text:"sample"}}))}function L(e){var t=function e(t,n){if(0===n.length)return t;var r=t.w/2;var o=t.h/2;var a=t.x+r;var c=t.y+o;var l={box:{x:t.x,y:t.y,w:r,h:o},nodes:[]};var u={box:{x:a,y:t.y,w:r,h:o},nodes:[]};var i={box:{x:t.x,y:c,w:r,h:o},nodes:[]};var s={box:{x:a,y:c,w:r,h:o},nodes:[]};for(var d=0;d<n.length;d+=1){var f=n[d];f.x<=a?f.y<=c?l.nodes.push(f):i.nodes.push(f):f.y<=c?u.nodes.push(f):s.nodes.push(f)}var E=(y=[l,u,i,s],y.slice(0).sort((function(e,t){return e.nodes.length-t.nodes.length}))[0]);var y;return function(e,t){return e.length===t.length&&e.every((function(e,n){return e===t[n]}))}(n,E.nodes)?E.box:e(E.box,E.nodes)}({x:0,y:0,w:i,h:s},e);return{id:N(),x:t.x+t.w/2,y:t.y+t.h/2,text:""}}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K={nodes:[],edges:[],selectedId:null};function I(e,t){switch(t.type){case A.APP_LOAD:return t.payload.state;case A.APP_RANDOMIZE:return{nodes:M(),edges:[],selectedId:null};case A.GRAPH_CLEAR:return H({},e,{nodes:[],edges:[],selectedId:null});case A.GRAPH_REMOVE:var n=e.nodes.filter((function(t){return t.id!==e.selectedId})),r=e.edges.filter((function(t){return t.id!==e.selectedId&&t.start!==e.selectedId&&t.end!==e.selectedId}));return H({},e,{nodes:n,edges:r});case A.GRAPH_SELECT:var o=t.payload.id;return H({},e,{selectedId:o});case A.GRAPH_DESELECT:return H({},e,{selectedId:null});case A.NODE_ADD:var a=L(e.nodes);return H({},e,{nodes:[].concat(Object(R.a)(e.nodes),[a])});case A.NODE_UPDATE:var c=t.payload.node;return H({},e,{nodes:T(e.nodes,c)});case A.EDGE_ADD:var l=t.payload,u=l.start,i=l.end;if(null===u||u===i||!Y(e.nodes,u)||!Y(e.nodes,i)||(d=e.edges,f=u,E=i,d.find((function(e){return e.start===f&&e.end===E||e.start===E&&e.end===f}))))return e;var s={id:N(),start:u,end:i};return H({},e,{edges:[].concat(Object(R.a)(e.edges),[s])});default:return e}var d,f,E}function T(e,t){return e.map((function(e){return e.id===t.id?t:e}))}function Y(e,t){return!!e.find((function(e){return e.id===t}))}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(){};var X=document.getElementById("root");u.a.render(c.a.createElement((function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(!1),u=Object(o.a)(l,2),i=u[0],s=u[1],E=Object(a.useReducer)(I,K),y=Object(o.a)(E,2),m=y[0],p=y[1],O=m.nodes,C=m.edges,j=m.selectedId,g=Object(a.useMemo)((function(){return function(e){var t={};return e.forEach((function(e){t[e.id]=e})),t}(O)}),[O]),k=Object(a.useCallback)((function(){p({type:A.GRAPH_CLEAR})}),[]),R=Object(a.useCallback)((function(){p({type:A.NODE_ADD})}),[]),w=Object(a.useCallback)((function(e,t){t.ctrlKey||t.metaKey?p({type:A.EDGE_ADD,payload:{start:j,end:e.id}}):p({type:A.GRAPH_SELECT,payload:{id:e.id}})}),[j]),N=Object(a.useCallback)((function(e){p({type:A.GRAPH_SELECT,payload:{id:e.id}})}),[]),S=Object(a.useCallback)((function(e){var t=prompt("text");if(null!==t){var n=B({},e,{text:t});p({type:A.NODE_UPDATE,payload:{node:n}})}}),[]),M=Object(a.useCallback)((function(){p({type:A.GRAPH_DESELECT})}),[]),L=Object(a.useCallback)((function(){p({type:A.GRAPH_REMOVE})}),[]),G=Object(a.useCallback)((function(e){var t=e.node;r(t)}),[]),H=Object(a.useCallback)((function(e){null!==n&&(p({type:A.NODE_UPDATE,payload:{node:n}}),r(null),s(!1))}),[n]),T=Object(a.useCallback)((function(e){if(null!==n){var t=function(e){var t=e.node,n=e.start,r=e.current,o=(r.x-n.x)/d,a=(r.y-n.y)/f;return B({},t,{x:Math.floor(t.x+o),y:Math.floor(t.y+a)})}(e);o=t,a=e.node,(o.id!==a.id||o.x!==a.x||o.y!==a.y)&&(r(t),s(!0))}var o,a}),[n]),Y=Object(a.useCallback)((function(){b(m)}),[m]),V=Object(a.useCallback)((function(){p({type:A.APP_RANDOMIZE})}),[]);return Object(a.useEffect)((function(){var e=v();null!==e&&p({type:A.APP_LOAD,payload:{state:e}})}),[]),h({dispatch:p,onSave:Y}),c.a.createElement("div",{className:"App",onClick:M},c.a.createElement(D,{onAdd:R,onRemove:L,onClear:k,onRandomize:V,onSave:Y,canRemove:null!==j}),c.a.createElement(x,null,C.map((function(e){return c.a.createElement(P,{key:e.id,edge:e,startNode:g[e.start],endNode:g[e.end],selected:j===e.id,onClick:N})})),O.map((function(e){return c.a.createElement(_,{key:e.id,node:e,selected:j===e.id,onClick:w,onDoubleClick:S,onMouseDown:G,onMouseUp:H,onMouseMove:T})})),i&&null!==n&&c.a.createElement(_,{key:n.id,node:n,selected:!1,onClick:U,onDoubleClick:U,onMouseDown:U,onMouseUp:U,onMouseMove:U})))}),null),X)},9:function(e,t,n){e.exports=n(24)}},[[9,1,2]]]);
//# sourceMappingURL=main.c35b9a85.chunk.js.map