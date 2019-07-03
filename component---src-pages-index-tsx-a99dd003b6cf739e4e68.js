(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{157:function(t,e,n){"use strict";n.r(e);n(181);var r=n(0),a=n.n(r),i=(n(182),n(183),n(98),n(99),n(8)),s=n.n(i),u=(n(185),n(164)),o=n(165),c=n(160),p=n.n(c),m=n(162),l=n.n(m),h=n(163),d=n.n(h),f=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){var t=this;return this.props.mini?a.a.createElement(p.a,{variant:"outline-danger",className:"minicup"},this.props.value):a.a.createElement(p.a,{variant:"outline-danger",size:"lg",className:"cup",onClick:function(){return t.props.onClick()}},this.props.value)},e}(a.a.Component),g=function(t){function e(){return t.apply(this,arguments)||this}s()(e,t);var n=e.prototype;return n.renderCup=function(t){var e=this;return a.a.createElement(f,{mini:this.props.mini,value:this.props.hittedCups.filter(function(e){return e.cupnum===t}).length,onClick:function(){return e.props.handleClick(t)}})},n.render=function(){return a.a.createElement(l.a,null,a.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(0),this.renderCup(1),this.renderCup(2),this.renderCup(3)),a.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(4),this.renderCup(5),this.renderCup(6)),a.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(7),this.renderCup(8)),a.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(9)))},e}(a.a.Component);var C=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){return function(t){if(t.length>0){var e=t.filter(function(t){return t.isMiss()}).length,n=t.filter(function(t){return!t.isMiss()}).length;return Math.round(n/(n+e)*100)}return 0}(this.props.hittedCups)+"%"},e}(a.a.Component),E=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){var t=this;return a.a.createElement(l.a,null,a.a.createElement(d.a,{className:"justify-content-center"},a.a.createElement(p.a,{variant:"outline-primary",size:"lg",className:"btn-miss",onClick:function(){return t.props.handleMiss()}},"Misses: ",this.props.game.numMisses()),a.a.createElement(p.a,{variant:"outline-primary",size:"lg",className:"btn-undo",onClick:function(){return t.props.handleUndo()}},a.a.createElement(u.a,{icon:o.c}))),a.a.createElement(g,{mini:!1,hittedCups:this.props.game.getHittedCups,handleClick:function(e){return t.props.handleClick(e)}}),a.a.createElement(d.a,{className:"justify-content-center"},"Hitrate: ",a.a.createElement(C,{hittedCups:this.props.game.getHittedCups})))},e}(a.a.Component),v=n(200),y=n.n(v),w=n(191),G=n.n(w),H=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){var t=this;return a.a.createElement(l.a,null,this.props.games.map(function(e){return a.a.createElement(k,{key:e.getId(),game:e,onResume:t.props.onResume,onDelete:t.props.onDelete})}))},e}(a.a.Component),k=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={fadeOut:!1},n}return s()(e,t),e.prototype.render=function(){var t=this,e=[];return this.props.game.forEachHittedCup(function(t){return e.push(t)}),a.a.createElement(G.a,{in:!this.state.fadeOut,onExited:function(){return t.props.onDelete(t.props.game)}},a.a.createElement(d.a,{className:"justify-content-center"},a.a.createElement(y.a,{md:"auto"},a.a.createElement(g,{mini:!0,hittedCups:e,handleClick:function(){}})),a.a.createElement(y.a,{md:"auto"},"Throws: ",this.props.game.numHits()," ",a.a.createElement("br",null),"Hitrate: ",a.a.createElement(C,{hittedCups:e})),a.a.createElement(y.a,{md:"auto"},a.a.createElement(p.a,{variant:"secondary",onClick:function(){return t.props.onResume(t.props.game)}},"Resume")),a.a.createElement(y.a,{md:"auto"},a.a.createElement(p.a,{variant:"outline-danger",onClick:function(){return t.setState({fadeOut:!0})}},a.a.createElement(u.a,{icon:o.b})))))},e}(a.a.Component),I=H,N=n(201),M=n(172),b=n(203),S=function(t){function e(e){var n;n=t.call(this,e)||this;var r="undefined"!=typeof window&&window.localStorage.getItem("playerId")||b();return"undefined"!=typeof window&&window.localStorage.setItem("playerId",""+r),n.state={currentGame:new N,games:[],playerId:r},n.props.server.retrieveHits(r,function(t){var e=n.state.games;t.forEach(function(t){e.map(function(t){return t.getId()}).includes(t.gameid)||e.push(new N(t.gameid)),e.forEach(function(e){e.getId()==t.gameid&&e.addHit(t)})}),n.setState({games:e})}),n}s()(e,t);var n=e.prototype;return n.handleUndo=function(){var t=this.state.currentGame.removeLastHit();t&&(this.props.server.sendUndo(t),this.setState({currentGame:this.state.currentGame}))},n.handleMiss=function(){var t=new M(Date.now(),-1,this.state.currentGame.getId());this.props.server.sendHit(t,this.state.playerId),this.state.currentGame.addHit(t),this.setState({currentGame:this.state.currentGame})},n.handleClick=function(t){var e=new M(Date.now(),t,this.state.currentGame.getId());this.props.server.sendHit(e,this.state.playerId),this.state.currentGame.addHit(e),this.setState({currentGame:this.state.currentGame})},n.newGame=function(){if(0!==this.state.currentGame.numHits()){var t=this.state.games.slice();t.push(this.state.currentGame),t.sort(function(t,e){return e.lastAction-t.lastAction}),this.setState({currentGame:new N(Date.now()),games:t})}},n.deleteGame=function(t){var e=this;t.forEachHittedCup(function(t){return e.props.server.sendUndo(t)});var n=this.state.games.slice().filter(function(e){return e.getId()!=t.getId()});this.setState({games:n})},n.resumeGame=function(t){var e=this.state.games.slice().filter(function(e){return e.getId()!=t.getId()});this.state.currentGame.numHits()>0&&e.push(this.state.currentGame),e.sort(function(t,e){return e.lastAction-t.lastAction}),this.setState({currentGame:t,games:e})},n.render=function(){var t=this,e=[];return this.state.currentGame.forEachHittedCup(function(t){return e.push(t)}),this.state.games.forEach(function(t){return t.forEachHittedCup(function(t){return e.push(t)})}),a.a.createElement(l.a,null,a.a.createElement(d.a,{className:"justify-content-center",style:{paddingBottom:"6px"}},a.a.createElement(p.a,{onClick:function(){return t.newGame()}},"New Game"),a.a.createElement("div",{className:"text-center",style:{width:"130px",paddingTop:"5px"}},a.a.createElement("span",null,"Total ",a.a.createElement(u.a,{icon:o.a}),a.a.createElement(C,{hittedCups:e})))),a.a.createElement(d.a,null,a.a.createElement(E,{game:this.state.currentGame,handleClick:function(e){return t.handleClick(e)},handleMiss:function(){return t.handleMiss()},handleUndo:function(){return t.handleUndo()}})),a.a.createElement(d.a,null,a.a.createElement(I,{games:this.state.games,onResume:function(e){return t.resumeGame(e)},onDelete:function(e){return t.deleteGame(e)}})))},e}(a.a.Component),j=n(172),D=n(206),x=function(){function t(t){this.base=t}var e=t.prototype;return e.retrieveHits=function(t,e){D.get(this.base+"/api/hits",{params:{playerId:t}}).then(function(t){e(t.data.map(function(t){return new j(t.timestamp,t.cupnum,t.gameid)}))})},e.sendHit=function(t,e){D.post(this.base+"/api/hit",{timestamp:t.timestamp,cupnum:t.cupnum,gameid:t.gameid,playerId:e})},e.sendUndo=function(t){D.post(this.base+"/api/undo",{timestamp:t.timestamp})},t}();e.default=function(){return a.a.createElement(S,{server:new x("http://localhost:8080")})}},172:function(t,e){var n=function(){"use strict";function t(t,e,n){this.timestamp=t,this.cupnum=e,this.gameid=n}return t.prototype.isMiss=function(){return-1===this.cupnum},t}();t.exports=n},201:function(t,e,n){n(98),n(99);var r=n(202),a=function(){"use strict";function t(t){void 0===t&&(t=Date.now()),this.id=t,this.lastAction=0,this.hittedCups=[]}var e=t.prototype;return e.getId=function(){return this.id},e.addHit=function(t){this.hittedCups.map(function(t){return t.timestamp}).includes(t.timestamp)||(this.hittedCups.push(t),t.timestamp>this.lastAction&&(this.lastAction=t.timestamp))},e.removeLastHit=function(){return this.hittedCups.pop()},e.removeHit=function(t){this.hittedCups=this.hittedCups.filter(function(e){return e.timestamp!=t.timestamp})},e.numHits=function(){return this.hittedCups.length},e.numMisses=function(){return this.hittedCups.filter(function(t){return t.isMiss()}).length},e.forEachHittedCup=function(t){this.hittedCups.forEach(t)},r(t,[{key:"getHittedCups",get:function(){return this.hittedCups.slice()}}]),t}();t.exports=a}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a99dd003b6cf739e4e68.js.map