// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.components.sidebar');
goog.require('cljs.core');
goog.require('ghoul.state');
goog.require('ghoul.state');
goog.require('ghoul.components.common');
goog.require('ghoul.components.common');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ghoul.components.sidebar.feed_subscription = (function feed_subscription(data,owner){
if(typeof ghoul.components.sidebar.t6104 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t6104 = (function (owner,data,feed_subscription,meta6105){
this.owner = owner;
this.data = data;
this.feed_subscription = feed_subscription;
this.meta6105 = meta6105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t6104.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t6104.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.li.call(null,null,om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (e){
return ghoul.state.select_feed.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(this$__$1))
},om.dom.span.call(null,null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data)),om.dom.span.call(null,null,[cljs.core.str("("),cljs.core.str(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join(''))));
});

ghoul.components.sidebar.t6104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6106){
var self__ = this;
var _6106__$1 = this;
return self__.meta6105;
});

ghoul.components.sidebar.t6104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6106,meta6105__$1){
var self__ = this;
var _6106__$1 = this;
return (new ghoul.components.sidebar.t6104(self__.owner,self__.data,self__.feed_subscription,meta6105__$1));
});

ghoul.components.sidebar.t6104.cljs$lang$type = true;

ghoul.components.sidebar.t6104.cljs$lang$ctorStr = "ghoul.components.sidebar/t6104";

ghoul.components.sidebar.t6104.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t6104");
});

ghoul.components.sidebar.__GT_t6104 = (function __GT_t6104(owner__$1,data__$1,feed_subscription__$1,meta6105){
return (new ghoul.components.sidebar.t6104(owner__$1,data__$1,feed_subscription__$1,meta6105));
});

}

return (new ghoul.components.sidebar.t6104(owner,data,feed_subscription,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),70,new cljs.core.Keyword(null,"end-line","end-line",1837326455),14,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),8,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feed_group = (function feed_group(data,owner){
if(typeof ghoul.components.sidebar.t6110 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t6110 = (function (owner,data,feed_group,meta6111){
this.owner = owner;
this.data = data;
this.feed_group = feed_group;
this.meta6111 = meta6111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t6110.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t6110.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var group_class = (cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(self__.data))?"folder expanded":"folder");
return om.dom.li.call(null,null,om.dom.div.call(null,{"className": group_class},om.dom.h4.call(null,null,om.dom.span.call(null,null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)),om.dom.span.call(null,{"className": "count"},[cljs.core.str("("),cljs.core.str(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join('')),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(self__.data))?om.dom.a.call(null,{"className": "minus-button"},"Contraer"):om.dom.a.call(null,{"className": "plus-button"},"Expandir"))),cljs.core.apply.call(null,om.dom.ul,{"className": "feed-list"},om.core.build_all.call(null,ghoul.components.sidebar.feed_subscription,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});

ghoul.components.sidebar.t6110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6112){
var self__ = this;
var _6112__$1 = this;
return self__.meta6111;
});

ghoul.components.sidebar.t6110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6112,meta6111__$1){
var self__ = this;
var _6112__$1 = this;
return (new ghoul.components.sidebar.t6110(self__.owner,self__.data,self__.feed_group,meta6111__$1));
});

ghoul.components.sidebar.t6110.cljs$lang$type = true;

ghoul.components.sidebar.t6110.cljs$lang$ctorStr = "ghoul.components.sidebar/t6110";

ghoul.components.sidebar.t6110.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t6110");
});

ghoul.components.sidebar.__GT_t6110 = (function __GT_t6110(owner__$1,data__$1,feed_group__$1,meta6111){
return (new ghoul.components.sidebar.t6110(owner__$1,data__$1,feed_group__$1,meta6111));
});

}

return (new ghoul.components.sidebar.t6110(owner,data,feed_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),93,new cljs.core.Keyword(null,"end-line","end-line",1837326455),30,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),17,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.feeds_list = (function feeds_list(data,owner){
if(typeof ghoul.components.sidebar.t6116 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t6116 = (function (owner,data,feeds_list,meta6117){
this.owner = owner;
this.data = data;
this.feeds_list = feeds_list;
this.meta6117 = meta6117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t6116.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t6116.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"id": "feeds"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,ghoul.components.sidebar.feed_group,self__.data)));
});

ghoul.components.sidebar.t6116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6118){
var self__ = this;
var _6118__$1 = this;
return self__.meta6117;
});

ghoul.components.sidebar.t6116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6118,meta6117__$1){
var self__ = this;
var _6118__$1 = this;
return (new ghoul.components.sidebar.t6116(self__.owner,self__.data,self__.feeds_list,meta6117__$1));
});

ghoul.components.sidebar.t6116.cljs$lang$type = true;

ghoul.components.sidebar.t6116.cljs$lang$ctorStr = "ghoul.components.sidebar/t6116";

ghoul.components.sidebar.t6116.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t6116");
});

ghoul.components.sidebar.__GT_t6116 = (function __GT_t6116(owner__$1,data__$1,feeds_list__$1,meta6117){
return (new ghoul.components.sidebar.t6116(owner__$1,data__$1,feeds_list__$1,meta6117));
});

}

return (new ghoul.components.sidebar.t6116(owner,data,feeds_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),58,new cljs.core.Keyword(null,"end-line","end-line",1837326455),37,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),32,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
ghoul.components.sidebar.root = (function root(data,owner){
if(typeof ghoul.components.sidebar.t6122 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.sidebar.t6122 = (function (owner,data,root,meta6123){
this.owner = owner;
this.data = data;
this.root = root;
this.meta6123 = meta6123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.sidebar.t6122.prototype.om$core$IRender$ = true;

ghoul.components.sidebar.t6122.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.section.call(null,{"id": "sidebar"},om.core.build.call(null,ghoul.components.common.search_box,self__.data),om.dom.a.call(null,{"className": "menu-item all"},"All Items"),om.dom.a.call(null,{"className": "menu-item favorite"},"Favorites"),om.dom.a.call(null,{"className": "menu-item shared"},"Shared"),om.core.build.call(null,ghoul.components.sidebar.feeds_list,self__.data));
});

ghoul.components.sidebar.t6122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6124){
var self__ = this;
var _6124__$1 = this;
return self__.meta6123;
});

ghoul.components.sidebar.t6122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6124,meta6123__$1){
var self__ = this;
var _6124__$1 = this;
return (new ghoul.components.sidebar.t6122(self__.owner,self__.data,self__.root,meta6123__$1));
});

ghoul.components.sidebar.t6122.cljs$lang$type = true;

ghoul.components.sidebar.t6122.cljs$lang$ctorStr = "ghoul.components.sidebar/t6122";

ghoul.components.sidebar.t6122.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.sidebar/t6122");
});

ghoul.components.sidebar.__GT_t6122 = (function __GT_t6122(owner__$1,data__$1,root__$1,meta6123){
return (new ghoul.components.sidebar.t6122(owner__$1,data__$1,root__$1,meta6123));
});

}

return (new ghoul.components.sidebar.t6122(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),49,new cljs.core.Keyword(null,"end-line","end-line",1837326455),48,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),40,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/sidebar.cljs"], null)));
});
