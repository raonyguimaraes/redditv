// Compiled by ClojureScript 1.9.293 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__31211__auto__ = [];
var len__31204__auto___36725 = arguments.length;
var i__31205__auto___36726 = (0);
while(true){
if((i__31205__auto___36726 < len__31204__auto___36725)){
args__31211__auto__.push((arguments[i__31205__auto___36726]));

var G__36727 = (i__31205__auto___36726 + (1));
i__31205__auto___36726 = G__36727;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((2) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31212__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq36722){
var G__36723 = cljs.core.first.call(null,seq36722);
var seq36722__$1 = cljs.core.next.call(null,seq36722);
var G__36724 = cljs.core.first.call(null,seq36722__$1);
var seq36722__$2 = cljs.core.next.call(null,seq36722__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__36723,G__36724,seq36722__$2);
});

rum.util.filter_vals = (function rum$util$filter_vals(pred,m){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.assoc.call(null,m__$1,k,v);
} else {
return m__$1;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
