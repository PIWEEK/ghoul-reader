// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.app.components.common.search');
goog.require('cljs.core');
goog.require('ghoul.app.messages');
goog.require('ghoul.app.messages');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ghoul.app.components.common.search.search_box = (function search_box(data,owner){
if(typeof ghoul.app.components.common.search.t6012 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.app.components.common.search.t6012 = (function (owner,data,search_box,meta6013){
this.owner = owner;
this.data = data;
this.search_box = search_box;
this.meta6013 = meta6013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.app.components.common.search.t6012.prototype.om$core$IRender$ = true;

ghoul.app.components.common.search.t6012.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "search-box"},om.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),ghoul.app.messages.msg.call(null,new cljs.core.Keyword(null,"ghoul.search.placeholder","ghoul.search.placeholder",-907480975))], null)));
});

ghoul.app.components.common.search.t6012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6014){
var self__ = this;
var _6014__$1 = this;
return self__.meta6013;
});

ghoul.app.components.common.search.t6012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6014,meta6013__$1){
var self__ = this;
var _6014__$1 = this;
return (new ghoul.app.components.common.search.t6012(self__.owner,self__.data,self__.search_box,meta6013__$1));
});

ghoul.app.components.common.search.t6012.cljs$lang$type = true;

ghoul.app.components.common.search.t6012.cljs$lang$ctorStr = "ghoul.app.components.common.search/t6012";

ghoul.app.components.common.search.t6012.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.app.components.common.search/t6012");
});

ghoul.app.components.common.search.__GT_t6012 = (function __GT_t6012(owner__$1,data__$1,search_box__$1,meta6013){
return (new ghoul.app.components.common.search.t6012(owner__$1,data__$1,search_box__$1,meta6013));
});

}

return (new ghoul.app.components.common.search.t6012(owner,data,search_box,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),77,new cljs.core.Keyword(null,"end-line","end-line",1837326455),11,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),7,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/app/components/common/search.cljs"], null)));
});