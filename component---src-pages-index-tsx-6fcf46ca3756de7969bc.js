(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{157:function(e,t,n){"use strict";n.r(t);n(160);var s=n(0),a=n.n(s),r=(n(161),n(162),n(164),n(8)),i=n.n(r),c=(n(166),n(167)),u=n(172),o=n(177),l=n.n(o),m=n(173),p=n.n(m),h=n(176),d=n.n(h),f=n(180),C=n.n(f);function G(){var e=Math.ceil(0),t=Math.floor(4e9);return Math.floor(Math.random()*(t-e))+e}var v=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentGame:{id:G(),misses:0,lastAction:Date.now(),cups:Array(10).fill(0)},hittedCups:[],games:[]},n}i()(t,e);var n=t.prototype;return n.handleUndo=function(){var e=this.state.hittedCups.slice();if(e.length>0){var t=e.pop();if(-1===t)this.setState({currentGame:{id:this.state.currentGame.id,misses:this.state.currentGame.misses-1,cups:this.state.currentGame.cups,lastAction:this.state.currentGame.lastAction},hittedCups:e});else if(null!=t){var n=this.state.currentGame.cups.slice();n[t]=n[t]-1,this.setState({currentGame:{id:this.state.currentGame.id,misses:this.state.currentGame.misses,lastAction:this.state.currentGame.lastAction,cups:n},hittedCups:e})}}},n.handleMiss=function(){var e=this.state.hittedCups.slice();e.push(-1);var t=this.state.currentGame.misses+1;this.setState({currentGame:{id:this.state.currentGame.id,misses:t,cups:this.state.currentGame.cups,lastAction:Date.now()},hittedCups:e})},n.handleClick=function(e){var t=this.state.hittedCups.slice();t.push(e);var n=this.state.currentGame.cups.slice();n[e]=this.state.currentGame.cups[e]+1,this.setState({currentGame:{id:this.state.currentGame.id,cups:n,misses:this.state.currentGame.misses,lastAction:Date.now()},hittedCups:t})},n.newGame=function(){var e=this.state.games.slice();e.push({id:G(),lastAction:this.state.currentGame.lastAction,misses:this.state.currentGame.misses,cups:this.state.currentGame.cups}),e.sort(function(e,t){return t.lastAction-e.lastAction}),this.setState({currentGame:{id:this.state.currentGame.id,misses:0,cups:Array(10).fill(0),lastAction:Date.now()},hittedCups:[],games:e})},n.deleteGame=function(e){var t=this.state.games.slice().filter(function(t){return t.id!=e.id});this.setState({games:t})},n.resumeGame=function(e){var t=this.state.games.slice().filter(function(t){return t.id!=e.id});t.push({id:this.state.currentGame.id,lastAction:this.state.currentGame.lastAction,misses:this.state.currentGame.misses,cups:this.state.currentGame.cups}),t.sort(function(e,t){return t.lastAction-e.lastAction}),this.setState({currentGame:{id:e.id,misses:e.misses,cups:e.cups,lastAction:e.lastAction},hittedCups:[],games:t})},n.render=function(){var e=this;return a.a.createElement(p.a,null,a.a.createElement(d.a,{className:"justify-content-left"},a.a.createElement(l.a,{onClick:function(){return e.newGame()}},"New Game")),a.a.createElement(E,{game:this.state.currentGame,handleClick:function(t){return e.handleClick(t)},handleMiss:function(){return e.handleMiss()},handleUndo:function(){return e.handleUndo()}}),a.a.createElement(A,{games:this.state.games,onResume:function(t){return e.resumeGame(t)},onDelete:function(t){return e.deleteGame(t)}}))},t}(a.a.Component),E=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.calcHitrate=function(e,t){var n=function(e,t){return e+t};return e.reduce(n)+t>0?Math.round(e.reduce(n)/(e.reduce(n)+t)*100):0},n.render=function(){var e=this;return a.a.createElement(p.a,null,a.a.createElement(d.a,{className:"justify-content-center"},a.a.createElement(l.a,{variant:"outline-primary",size:"lg",className:"btn-miss",onClick:function(){return e.props.handleMiss()}},"Misses: ",this.props.game.misses),a.a.createElement(l.a,{variant:"outline-primary",size:"lg",className:"btn-undo",onClick:function(){return e.props.handleUndo()}},a.a.createElement(c.a,{icon:u.a}))),a.a.createElement(g,{mini:!1,cups:this.props.game.cups,handleClick:function(t){return e.props.handleClick(t)}}),a.a.createElement(d.a,{className:"justify-content-center"},"Hitrate: ",this.calcHitrate(this.props.game.cups,this.props.game.misses),"%"))},t}(a.a.Component),g=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.renderCup=function(e){var t=this;return a.a.createElement(y,{mini:this.props.mini,value:this.props.cups[e],onClick:function(){return t.props.handleClick(e)}})},n.render=function(){return a.a.createElement(p.a,null,a.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(0),this.renderCup(1),this.renderCup(2),this.renderCup(3)),a.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(4),this.renderCup(5),this.renderCup(6)),a.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(7),this.renderCup(8)),a.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(9)))},t}(a.a.Component),y=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this;return this.props.mini?a.a.createElement(l.a,{variant:"outline-danger",className:"minicup"},this.props.value):a.a.createElement(l.a,{variant:"outline-danger",size:"lg",className:"cup",onClick:function(){return e.props.onClick()}},this.props.value)},t}(a.a.Component),A=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this;this.props.onResume;return a.a.createElement(p.a,null,this.props.games.map(function(t,n){var s,r,i=function(e,t){return e+t};return a.a.createElement(d.a,{key:n},a.a.createElement(C.a,{sm:!0},a.a.createElement(g,{mini:!0,cups:t.cups,handleClick:function(){}})),a.a.createElement(C.a,{sm:!0},a.a.createElement(d.a,null,"Throws: ",t.cups.reduce(i)+t.misses),a.a.createElement(d.a,null,"Hitrate: ",(s=t.cups,r=t.misses,s.reduce(i)+r>0?Math.round(s.reduce(i)/(s.reduce(i)+r)*100):0),"%")),a.a.createElement(C.a,{sm:!0},a.a.createElement(l.a,{variant:"secondary",onClick:function(){return e.props.onResume(t)}},"Resume Game")),a.a.createElement(C.a,{sm:!0},a.a.createElement(l.a,{variant:"danger",onClick:function(){return e.props.onDelete(t)}},"Delete Game")))}))},t}(a.a.Component),k=v;t.default=function(){return a.a.createElement(k,null)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6fcf46ca3756de7969bc.js.map