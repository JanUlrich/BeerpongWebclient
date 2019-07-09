(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{157:function(t,e,n){"use strict";n.r(e);n(181);var a=n(0),r=n.n(a),i=(n(182),n(98),n(99),n(100),n(8)),s=n.n(i),u=(n(183),n(164)),o=n(165),c=n(160),p=n.n(c),m=n(162),l=n.n(m),h=n(163),d=n.n(h),f=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){var t=this;return this.props.mini?r.a.createElement(p.a,{variant:"outline-danger",className:"minicup"},this.props.value):r.a.createElement(p.a,{variant:"outline-danger",size:"lg",className:"cup",onClick:function(){return t.props.onClick()}},this.props.value)},e}(r.a.Component),g=function(t){function e(){return t.apply(this,arguments)||this}s()(e,t);var n=e.prototype;return n.renderCup=function(t){var e=this;return r.a.createElement(f,{mini:this.props.mini,value:this.props.hittedCups.filter(function(e){return e.cupnum===t}).length,onClick:function(){return e.props.handleClick(t)}})},n.render=function(){return r.a.createElement(l.a,null,r.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(0),this.renderCup(1),this.renderCup(2),this.renderCup(3)),r.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(4),this.renderCup(5),this.renderCup(6)),r.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(7),this.renderCup(8)),r.a.createElement(d.a,{className:"justify-content-center"},this.renderCup(9)))},e}(r.a.Component);var C=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){return function(t){if(t.length>0){var e=t.filter(function(t){return t.isMiss()}).length,n=t.filter(function(t){return!t.isMiss()}).length;return Math.round(n/(n+e)*100)}return 0}(this.props.hittedCups)+"%"},e}(r.a.Component),E=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){var t=this;return r.a.createElement(l.a,null,r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement(p.a,{variant:"outline-primary",size:"lg",className:"btn-miss",onClick:function(){return t.props.handleMiss()}},"Misses: ",this.props.game.numMisses()),r.a.createElement(p.a,{variant:"outline-primary",size:"lg",className:"btn-undo",onClick:function(){return t.props.handleUndo()}},r.a.createElement(u.a,{icon:o.c}))),r.a.createElement(g,{mini:!1,hittedCups:this.props.game.getHittedCups,handleClick:function(e){return t.props.handleClick(e)}}),r.a.createElement(d.a,{className:"justify-content-center"},"Hitrate: ",r.a.createElement(C,{hittedCups:this.props.game.getHittedCups})))},e}(r.a.Component),v=(n(189),n(200)),y=n.n(v),w=n(191),G=n.n(w),H=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){var t=this,e=this.props.games.slice();return e.sort(function(t,e){return e.lastAction-t.lastAction}),r.a.createElement(l.a,null,e.map(function(e){return r.a.createElement(k,{key:e.getId(),game:e,onResume:t.props.onResume,onDelete:t.props.onDelete})}))},e}(r.a.Component),k=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={fadeOut:!1},n}return s()(e,t),e.prototype.render=function(){var t=this,e=[];return this.props.game.forEachHittedCup(function(t){return e.push(t)}),r.a.createElement(G.a,{in:!this.state.fadeOut,onExited:function(){return t.props.onDelete(t.props.game)}},r.a.createElement(d.a,{className:"justify-content-center"},r.a.createElement(y.a,{xs:4,md:"auto"},r.a.createElement(g,{mini:!0,hittedCups:e,handleClick:function(){}})),r.a.createElement(y.a,{xs:4,md:"auto"},"Throws: ",this.props.game.numHits()," ",r.a.createElement("br",null),"Hitrate: ",r.a.createElement(C,{hittedCups:e})),r.a.createElement(y.a,{xs:4,md:"auto"},r.a.createElement(y.a,{md:"auto"},r.a.createElement(p.a,{variant:"secondary",onClick:function(){return t.props.onResume(t.props.game)}},"Resume")),r.a.createElement(y.a,{md:"auto"},r.a.createElement(p.a,{variant:"outline-danger",onClick:function(){return t.setState({fadeOut:!0})}},r.a.createElement(u.a,{icon:o.b}))))))},e}(r.a.Component),I=H,N=n(201),b=n(172),M=n(203),x=function(t){function e(e){var n;n=t.call(this,e)||this;var a="undefined"!=typeof window&&window.localStorage.getItem("playerId")||M();return a.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)||(a=M()),"undefined"!=typeof window&&window.localStorage.setItem("playerId",""+a),n.state={currentGame:new N,games:[],playerId:a},n.props.server.retrieveHits(a,function(t){var e=n.state.games;t.forEach(function(t){e.map(function(t){return t.getId()}).includes(t.gameid)||e.push(new N(t.gameid)),e.forEach(function(e){e.getId()==t.gameid&&e.addHit(t)})}),n.setState({games:e})}),n}s()(e,t);var n=e.prototype;return n.handleUndo=function(){var t=this.state.currentGame.removeLastHit();t&&(this.props.server.sendUndo(t),this.setState({currentGame:this.state.currentGame}))},n.handleMiss=function(){var t=new b(Date.now(),-1,this.state.currentGame.getId());this.props.server.sendHit(t,this.state.playerId),this.state.currentGame.addHit(t),this.setState({currentGame:this.state.currentGame})},n.handleClick=function(t){var e=new b(Date.now(),t,this.state.currentGame.getId());this.props.server.sendHit(e,this.state.playerId),this.state.currentGame.addHit(e),this.setState({currentGame:this.state.currentGame})},n.newGame=function(){if(0!==this.state.currentGame.numHits()){var t=this.state.games.slice();t.push(this.state.currentGame),this.setState({currentGame:new N(Date.now()),games:t})}},n.deleteGame=function(t){var e=this;t.forEachHittedCup(function(t){return e.props.server.sendUndo(t)});var n=this.state.games.slice().filter(function(e){return e.getId()!=t.getId()});this.setState({games:n})},n.resumeGame=function(t){var e=this.state.games.slice().filter(function(e){return e.getId()!=t.getId()});this.state.currentGame.numHits()>0&&e.push(this.state.currentGame),this.setState({currentGame:t,games:e})},n.render=function(){var t=this,e=[];return this.state.currentGame.forEachHittedCup(function(t){return e.push(t)}),this.state.games.forEach(function(t){return t.forEachHittedCup(function(t){return e.push(t)})}),r.a.createElement(l.a,null,r.a.createElement(d.a,{className:"justify-content-center",style:{paddingBottom:"6px"}},r.a.createElement(p.a,{onClick:function(){return t.newGame()}},"New Game"),r.a.createElement("div",{className:"text-center",style:{width:"130px",paddingTop:"5px"}},r.a.createElement("span",null,"Total ",r.a.createElement(u.a,{icon:o.a}),r.a.createElement(C,{hittedCups:e})))),r.a.createElement(d.a,null,r.a.createElement(E,{game:this.state.currentGame,handleClick:function(e){return t.handleClick(e)},handleMiss:function(){return t.handleMiss()},handleUndo:function(){return t.handleUndo()}})),r.a.createElement(d.a,null,r.a.createElement(I,{games:this.state.games,onResume:function(e){return t.resumeGame(e)},onDelete:function(e){return t.deleteGame(e)}})))},e}(r.a.Component),S=n(172),j=n(206),D=function(){function t(t){this.base=t}var e=t.prototype;return e.retrieveHits=function(t,e){j.get(this.base+"/api/hits",{params:{playerId:t}}).then(function(t){e(t.data.map(function(t){return new S(t.timestamp,t.cupnum,t.gameid)}))})},e.sendHit=function(t,e){j.post(this.base+"/api/hit",{timestamp:t.timestamp,cupnum:t.cupnum,gameid:t.gameid,playerId:e})},e.sendUndo=function(t){j.post(this.base+"/api/undo",{timestamp:t.timestamp})},t}();e.default=function(){return r.a.createElement(x,{server:new D("https://beebs.de")})}},172:function(t,e){var n=function(){"use strict";function t(t,e,n){this.timestamp=t,this.cupnum=e,this.gameid=n}return t.prototype.isMiss=function(){return-1===this.cupnum},t}();t.exports=n},201:function(t,e,n){n(98),n(99);var a=n(202),r=function(){"use strict";function t(t){void 0===t&&(t=Date.now()),this.id=t,this.lastAction=0,this.hittedCups=[]}var e=t.prototype;return e.getId=function(){return this.id},e.addHit=function(t){this.hittedCups.map(function(t){return t.timestamp}).includes(t.timestamp)||(this.hittedCups.push(t),t.timestamp>this.lastAction&&(this.lastAction=t.timestamp))},e.removeLastHit=function(){return this.hittedCups.pop()},e.removeHit=function(t){this.hittedCups=this.hittedCups.filter(function(e){return e.timestamp!=t.timestamp})},e.numHits=function(){return this.hittedCups.length},e.numMisses=function(){return this.hittedCups.filter(function(t){return t.isMiss()}).length},e.forEachHittedCup=function(t){this.hittedCups.forEach(t)},a(t,[{key:"getHittedCups",get:function(){return this.hittedCups.slice()}}]),t}();t.exports=r}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1224cc56a769fd22f934.js.map