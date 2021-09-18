(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{429:function(t,e,i){"use strict";i.r(e);var o=i(3),n=i(89),r=i(2),s=i(5),a=i(54),h=i(115),l=i(23),d=i(85),c=i(19),p=i(17),u=i(14),_=i(1),f=i(155),g=i(4),v=i(47),y=i(153),m=i(55),b=i(58),E=function(t){function e(e,i,o,n,r,s){t.call(this,e,i),this.src_=o,this.extent_=n,this.preemptive_=r,this.grid_=null,this.keys_=null,this.data_=null,this.jsonp_=s}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getImage=function(){return null},e.prototype.getData=function(t){if(!this.grid_||!this.keys_)return null;var e=(t[0]-this.extent_[0])/(this.extent_[2]-this.extent_[0]),i=(t[1]-this.extent_[1])/(this.extent_[3]-this.extent_[1]),o=this.grid_[Math.floor((1-i)*this.grid_.length)];if("string"!=typeof o)return null;var n=o.charCodeAt(Math.floor(e*o.length));n>=93&&n--,n>=35&&n--;var r=null;if((n-=32)in this.keys_){var s=this.keys_[n];r=this.data_&&s in this.data_?this.data_[s]:s}return r},e.prototype.forDataAtCoordinate=function(t,e,i){this.state==l.a.EMPTY&&!0===i?(this.state=l.a.IDLE,Object(p.b)(this,u.a.CHANGE,(function(i){e(this.getData(t))}),this),this.loadInternal_()):!0===i?setTimeout(function(){e(this.getData(t))}.bind(this),0):e(this.getData(t))},e.prototype.getKey=function(){return this.src_},e.prototype.handleError_=function(){this.state=l.a.ERROR,this.changed()},e.prototype.handleLoad_=function(t){this.grid_=t.grid,this.keys_=t.keys,this.data_=t.data,this.state=l.a.LOADED,this.changed()},e.prototype.loadInternal_=function(){if(this.state==l.a.IDLE)if(this.state=l.a.LOADING,this.jsonp_)Object(f.a)(this.src_,this.handleLoad_.bind(this),this.handleError_.bind(this));else{var t=new XMLHttpRequest;t.addEventListener("load",this.onXHRLoad_.bind(this)),t.addEventListener("error",this.onXHRError_.bind(this)),t.open("GET",this.src_),t.send()}},e.prototype.onXHRLoad_=function(t){var e=t.target;if(!e.status||e.status>=200&&e.status<300){var i;try{i=JSON.parse(e.responseText)}catch(t){return void this.handleError_()}this.handleLoad_(i)}else this.handleError_()},e.prototype.onXHRError_=function(t){this.handleError_()},e.prototype.load=function(){this.preemptive_?this.loadInternal_():this.setState(l.a.EMPTY)},e}(h.a),O=function(t){function e(e){if(t.call(this,{projection:Object(g.i)("EPSG:3857"),state:v.a.LOADING}),this.preemptive_=void 0===e.preemptive||e.preemptive,this.tileUrlFunction_=d.d,this.template_=void 0,this.jsonp_=e.jsonp||!1,e.url)if(this.jsonp_)Object(f.a)(e.url,this.handleTileJSONResponse.bind(this),this.handleTileJSONError.bind(this));else{var i=new XMLHttpRequest;i.addEventListener("load",this.onXHRLoad_.bind(this)),i.addEventListener("error",this.onXHRError_.bind(this)),i.open("GET",e.url),i.send()}else e.tileJSON?this.handleTileJSONResponse(e.tileJSON):Object(c.a)(!1,51)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.onXHRLoad_=function(t){var e=t.target;if(!e.status||e.status>=200&&e.status<300){var i;try{i=JSON.parse(e.responseText)}catch(t){return void this.handleTileJSONError()}this.handleTileJSONResponse(i)}else this.handleTileJSONError()},e.prototype.onXHRError_=function(t){this.handleTileJSONError()},e.prototype.getTemplate=function(){return this.template_},e.prototype.forDataAtCoordinateAndResolution=function(t,e,i,o){if(this.tileGrid){var n=this.tileGrid.getZForResolution(e,this.zDirection),r=this.tileGrid.getTileCoordForCoordAndZ(t,n);this.getTile(r[0],r[1],r[2],1,this.getProjection()).forDataAtCoordinate(t,i,o)}else!0===o?setTimeout((function(){i(null)}),0):i(null)},e.prototype.handleTileJSONError=function(){this.setState(v.a.ERROR)},e.prototype.handleTileJSONResponse=function(t){var e,i=Object(g.i)("EPSG:4326"),o=this.getProjection();if(void 0!==t.bounds){var n=Object(g.l)(i,o);e=Object(_.a)(t.bounds,n)}var r=t.minzoom||0,s=t.maxzoom||22,a=Object(b.b)({extent:Object(b.c)(o),maxZoom:s,minZoom:r});this.tileGrid=a,this.template_=t.template;var h=t.grids;if(h){if(this.tileUrlFunction_=Object(d.a)(h,a),void 0!==t.attribution){var l=void 0!==e?e:i.getExtent();this.setAttributions((function(e){return Object(_.G)(l,e.extent)?[t.attribution]:null}))}this.setState(v.a.READY)}else this.setState(v.a.ERROR)},e.prototype.getTile=function(t,e,i,o,n){var r=Object(m.d)(t,e,i);if(this.tileCache.containsKey(r))return this.tileCache.get(r);var s=[t,e,i],a=this.getTileCoordForTileUrlFunction(s,n),h=this.tileUrlFunction_(a,o,n),d=new E(s,void 0!==h?l.a.IDLE:l.a.EMPTY,void 0!==h?h:"",this.tileGrid.getTileCoordExtent(s),this.preemptive_,this.jsonp_);return this.tileCache.set(r,d),d},e.prototype.useTile=function(t,e,i){var o=Object(m.d)(t,e,i);this.tileCache.containsKey(o)&&this.tileCache.get(o)},e}(y.b),R="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ",j=new s.a({source:new a.a({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+R})}),T=new O({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+R}),L=new s.a({source:T}),N=new r.a({center:[0,0],zoom:1}),x=document.getElementById("map"),J=new o.a({layers:[j,L],target:x,view:N}),S=document.getElementById("country-info"),w=document.getElementById("country-flag"),C=document.getElementById("country-name"),D=new n.a({element:S,offset:[15,15],stopEvent:!1});J.addOverlay(D);var I=function(t){var e=N.getResolution();T.forDataAtCoordinateAndResolution(t,e,(function(e){x.style.cursor=e?"pointer":"",e&&(w.src="data:image/png;base64,"+e.flag_png,C.innerHTML=e.admin),D.setPosition(e?t:void 0)}))};J.on("pointermove",(function(t){if(!t.dragging){var e=J.getEventCoordinate(t.originalEvent);I(e)}})),J.on("click",(function(t){I(t.coordinate)}))}},[[429,0]]]);
//# sourceMappingURL=utfgrid.js.map