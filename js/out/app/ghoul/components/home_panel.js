// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.components.home_panel');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ghoul.components.home_panel.root = (function root(data,owner){
if(typeof ghoul.components.home_panel.t10882 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.home_panel.t10882 = (function (owner,data,root,meta10883){
this.owner = owner;
this.data = data;
this.root = root;
this.meta10883 = meta10883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.home_panel.t10882.prototype.om$core$IRender$ = true;

ghoul.components.home_panel.t10882.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.h4.call(null,null,"Home");
});

ghoul.components.home_panel.t10882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10884){
var self__ = this;
var _10884__$1 = this;
return self__.meta10883;
});

ghoul.components.home_panel.t10882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10884,meta10883__$1){
var self__ = this;
var _10884__$1 = this;
return (new ghoul.components.home_panel.t10882(self__.owner,self__.data,self__.root,meta10883__$1));
});

ghoul.components.home_panel.t10882.cljs$lang$type = true;

ghoul.components.home_panel.t10882.cljs$lang$ctorStr = "ghoul.components.home-panel/t10882";

ghoul.components.home_panel.t10882.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.home-panel/t10882");
});

ghoul.components.home_panel.__GT_t10882 = (function __GT_t10882(owner__$1,data__$1,root__$1,meta10883){
return (new ghoul.components.home_panel.t10882(owner__$1,data__$1,root__$1,meta10883));
});

}

return (new ghoul.components.home_panel.t10882(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),28,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/home_panel.cljs"], null)));
});