// Compiled by ClojureScript 0.0-2411
goog.provide('ghoul.components.feeds_panel');
goog.require('cljs.core');
goog.require('ghoul.utils');
goog.require('om.dom');
goog.require('om.dom');
goog.require('ghoul.state');
goog.require('ghoul.state');
goog.require('om.core');
goog.require('om.core');
goog.require('cuerdas.core');
goog.require('ghoul.utils');
goog.require('cuerdas.core');
ghoul.components.feeds_panel.feed_description = (function feed_description(data,owner){
var set_description_dom_BANG_ = (function (){
var shadow_root = owner.getDOMNode().shadowRoot;
var description = ghoul.utils.remove_unallowed_tags.call(null,ghoul.utils.restore_tags.call(null,data));
if((shadow_root == null)){
return owner.getDOMNode().createShadowRoot().innerHTML = description;
} else {
return shadow_root.innerHTML = description;
}
});
if(typeof ghoul.components.feeds_panel.t10671 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.feeds_panel.t10671 = (function (set_description_dom_BANG_,owner,data,feed_description,meta10672){
this.set_description_dom_BANG_ = set_description_dom_BANG_;
this.owner = owner;
this.data = data;
this.feed_description = feed_description;
this.meta10672 = meta10672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.feeds_panel.t10671.prototype.om$core$IRender$ = true;

ghoul.components.feeds_panel.t10671.prototype.om$core$IRender$render$arity$1 = ((function (set_description_dom_BANG_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,{"className": "rss-description"});
});})(set_description_dom_BANG_))
;

ghoul.components.feeds_panel.t10671.prototype.om$core$IDidUpdate$ = true;

ghoul.components.feeds_panel.t10671.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (set_description_dom_BANG_){
return (function (this$,next_props,next_state){
var self__ = this;
var this$__$1 = this;
return self__.set_description_dom_BANG_.call(null);
});})(set_description_dom_BANG_))
;

ghoul.components.feeds_panel.t10671.prototype.om$core$IDidMount$ = true;

ghoul.components.feeds_panel.t10671.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (set_description_dom_BANG_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.set_description_dom_BANG_.call(null);
});})(set_description_dom_BANG_))
;

ghoul.components.feeds_panel.t10671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (set_description_dom_BANG_){
return (function (_10673){
var self__ = this;
var _10673__$1 = this;
return self__.meta10672;
});})(set_description_dom_BANG_))
;

ghoul.components.feeds_panel.t10671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (set_description_dom_BANG_){
return (function (_10673,meta10672__$1){
var self__ = this;
var _10673__$1 = this;
return (new ghoul.components.feeds_panel.t10671(self__.set_description_dom_BANG_,self__.owner,self__.data,self__.feed_description,meta10672__$1));
});})(set_description_dom_BANG_))
;

ghoul.components.feeds_panel.t10671.cljs$lang$type = true;

ghoul.components.feeds_panel.t10671.cljs$lang$ctorStr = "ghoul.components.feeds-panel/t10671";

ghoul.components.feeds_panel.t10671.cljs$lang$ctorPrWriter = ((function (set_description_dom_BANG_){
return (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.feeds-panel/t10671");
});})(set_description_dom_BANG_))
;

ghoul.components.feeds_panel.__GT_t10671 = ((function (set_description_dom_BANG_){
return (function __GT_t10671(set_description_dom_BANG___$1,owner__$1,data__$1,feed_description__$1,meta10672){
return (new ghoul.components.feeds_panel.t10671(set_description_dom_BANG___$1,owner__$1,data__$1,feed_description__$1,meta10672));
});})(set_description_dom_BANG_))
;

}

return (new ghoul.components.feeds_panel.t10671(set_description_dom_BANG_,owner,data,feed_description,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),25,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),18,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/feeds_panel.cljs"], null)));
});
ghoul.components.feeds_panel.feed_content = (function feed_content(data,owner){
if(typeof ghoul.components.feeds_panel.t10677 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.feeds_panel.t10677 = (function (owner,data,feed_content,meta10678){
this.owner = owner;
this.data = data;
this.feed_content = feed_content;
this.meta10678 = meta10678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.feeds_panel.t10677.prototype.om$core$IRender$ = true;

ghoul.components.feeds_panel.t10677.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.article.call(null,{"className": "feed-content"},om.dom.div.call(null,{"className": "rss-item-header"},om.dom.h4.call(null,{"className": "rss-title"},om.dom.a.call(null,{"href": new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(self__.data), "className": "rss-link"},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data))),om.dom.h5.call(null,{"className": "rss-description-preview"},cuerdas.core.strip_tags.call(null,ghoul.utils.restore_tags.call(null,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.data))))),om.core.build.call(null,ghoul.components.feeds_panel.feed_description,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

ghoul.components.feeds_panel.t10677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10679){
var self__ = this;
var _10679__$1 = this;
return self__.meta10678;
});

ghoul.components.feeds_panel.t10677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10679,meta10678__$1){
var self__ = this;
var _10679__$1 = this;
return (new ghoul.components.feeds_panel.t10677(self__.owner,self__.data,self__.feed_content,meta10678__$1));
});

ghoul.components.feeds_panel.t10677.cljs$lang$type = true;

ghoul.components.feeds_panel.t10677.cljs$lang$ctorStr = "ghoul.components.feeds-panel/t10677";

ghoul.components.feeds_panel.t10677.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.feeds-panel/t10677");
});

ghoul.components.feeds_panel.__GT_t10677 = (function __GT_t10677(owner__$1,data__$1,feed_content__$1,meta10678){
return (new ghoul.components.feeds_panel.t10677(owner__$1,data__$1,feed_content__$1,meta10678));
});

}

return (new ghoul.components.feeds_panel.t10677(owner,data,feed_content,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),70,new cljs.core.Keyword(null,"end-line","end-line",1837326455),36,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/feeds_panel.cljs"], null)));
});
ghoul.components.feeds_panel.root = (function root(data,owner){
if(typeof ghoul.components.feeds_panel.t10683 !== 'undefined'){
} else {

/**
* @constructor
*/
ghoul.components.feeds_panel.t10683 = (function (owner,data,root,meta10684){
this.owner = owner;
this.data = data;
this.root = root;
this.meta10684 = meta10684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ghoul.components.feeds_panel.t10683.prototype.om$core$IRender$ = true;

ghoul.components.feeds_panel.t10683.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data) == null)) && (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(self__.data)))){
return om.dom.section.call(null,{"id": "empty-subscription-panel"},om.dom.p.call(null,null,om.dom.span.call(null,null,"Welcome to "),om.dom.span.call(null,{"className": "emphasis"},"GHOUL reader"),om.dom.span.call(null,null,".")),om.dom.p.call(null,null,"Ghoul is an offline-optimized RSS reading platform with easiness in mind and using the great new technologies in HTML5 specs."),om.dom.p.call(null,null,om.dom.span.call(null,null,"You can add a new RSS Subscription"),om.dom.a.call(null,{"onClick": ghoul.state.toggle_feed_popup},"HERE")));
} else {
return om.dom.section.call(null,{"id": "feeds-panel"},om.dom.div.call(null,{"className": "feed-title"},om.dom.div.call(null,{"className": "feed-title-text"},(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data))?[cljs.core.str(ghoul.state.get_title.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data))),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''):"All items")),om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (e){
return ghoul.state.toggle_compact_view.call(null);
});})(this$__$1))
, "className": "compact-button"},"Compact View"),om.dom.a.call(null,{"onClick": ((function (this$__$1){
return (function (e){
return ghoul.state.toggle_expanded_view.call(null);
});})(this$__$1))
, "className": "expand-button"},"Expanded View")),cljs.core.apply.call(null,om.dom.div,{"className": "feeds-wrapper"},om.core.build_all.call(null,ghoul.components.feeds_panel.feed_content,new cljs.core.Keyword(null,"feeds","feeds",855496306).cljs$core$IFn$_invoke$arity$1(self__.data))));
}
});

ghoul.components.feeds_panel.t10683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10685){
var self__ = this;
var _10685__$1 = this;
return self__.meta10684;
});

ghoul.components.feeds_panel.t10683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10685,meta10684__$1){
var self__ = this;
var _10685__$1 = this;
return (new ghoul.components.feeds_panel.t10683(self__.owner,self__.data,self__.root,meta10684__$1));
});

ghoul.components.feeds_panel.t10683.cljs$lang$type = true;

ghoul.components.feeds_panel.t10683.cljs$lang$ctorStr = "ghoul.components.feeds-panel/t10683";

ghoul.components.feeds_panel.t10683.cljs$lang$ctorPrWriter = (function (this__4190__auto__,writer__4191__auto__,opt__4192__auto__){
return cljs.core._write.call(null,writer__4191__auto__,"ghoul.components.feeds-panel/t10683");
});

ghoul.components.feeds_panel.__GT_t10683 = (function __GT_t10683(owner__$1,data__$1,root__$1,meta10684){
return (new ghoul.components.feeds_panel.t10683(owner__$1,data__$1,root__$1,meta10684));
});

}

return (new ghoul.components.feeds_panel.t10683(owner,data,root,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),75,new cljs.core.Keyword(null,"end-line","end-line",1837326455),63,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),39,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/alotor/Projects/GhoulReader/ghoul-reader/src/cljs/app/ghoul/components/feeds_panel.cljs"], null)));
});