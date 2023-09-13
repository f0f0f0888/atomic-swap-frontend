"use strict";(self.webpackChunkatomic_swap_frontend=self.webpackChunkatomic_swap_frontend||[]).push([[81],{4081:function(t,e,n){n.a(t,(async function(t,r){try{n.r(e),n.d(e,{WebhookSlp:function(){return v}});var a=n(74165),s=n(15861),i=n(15671),c=n(43144),u=n(97326),o=n(60136),h=n(29388),p=n(20174),f=n(80245),k=n(43430),d=n(74902),l=t([f]);f=(l.then?(await l)():l)[0];var v=function(t){(0,o.Z)(n,t);var e=(0,h.Z)(n);function n(t){var r;return(0,i.Z)(this,n),r=e.call(this,t),Object.assign((0,u.Z)(r),t),r.cashaddr=(0,p.toSlpAddress)(r.cashaddr),r}return(0,c.Z)(n,[{key:"start",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var e,n=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=!1,!("_id"in e.details)){t.next=7;break}return t.next=4,n.slpDbHandler(e);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,n.gsppHandler(e);case 9:r=t.sent;case 10:if(!r||n.recurrence!==k.CM.once){t.next=17;break}return t.next=13,d.Z.instance();case 13:return t.next=15,t.sent.stopHook(n);case 15:return t.next=17,n.destroy();case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.callback=e,t.next=4,f.w5.fromSlpaddr(this.cashaddr);case 4:this.wallet=t.sent,this.cancelFn=this.wallet.slp.watchTransactions(e,this.tokenId);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"slpDbHandler",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){var n,r,s,i,c=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,r=this.type,s=e.details,this.type!==k.Ez.slpTransactionInOut){t.next=9;break}return t.next=6,this.post({direction:r,data:e});case 6:n=t.sent,t.next=26;break;case 9:if(!(this.type===k.Ez.slpTransactionIn&&s.out.findIndex((function(t){return t.e.a===c.cashaddr}))>-1)){t.next=15;break}return t.next=12,this.post({direction:r,data:e});case 12:n=t.sent,t.next=26;break;case 15:if(!(this.type===k.Ez.slpTransactionOut&&s.in.findIndex((function(t){return t.e.a===c.cashaddr}))>-1)){t.next=21;break}return t.next=18,this.post({direction:r,data:e});case 18:n=t.sent,t.next=26;break;case 21:if(this.type!==k.Ez.slpBalance){t.next=26;break}return i=this.wallet.slp.getBalance(this.tokenId),t.next=25,this.post({direction:r,data:i});case 25:n=t.sent;case 26:return t.abrupt("return",n);case 27:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"gsppHandler",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){var n,r,s,i,c=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,r=this.type,s=e.details,this.type!==k.Ez.slpTransactionInOut){t.next=9;break}return t.next=6,this.post({direction:r,data:e});case 6:n=t.sent,t.next=26;break;case 9:if(!(this.type===k.Ez.slpTransactionIn&&s.outputs.findIndex((function(t){return t===c.cashaddr}))>-1)){t.next=15;break}return t.next=12,this.post({direction:r,data:e});case 12:n=t.sent,t.next=26;break;case 15:if(!(this.type===k.Ez.slpTransactionOut&&s.inputs.findIndex((function(t){return t===c.cashaddr}))>-1)){t.next=21;break}return t.next=18,this.post({direction:r,data:e});case 18:n=t.sent,t.next=26;break;case 21:if(this.type!==k.Ez.slpBalance){t.next=26;break}return i=this.wallet.slp.getBalance(this.tokenId),t.next=25,this.post({direction:r,data:i});case 25:n=t.sent;case 26:return t.abrupt("return",n);case 27:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"stop",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.cancelFn();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),n}(k.G2);r()}catch(x){r(x)}}))},74902:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(29439),a=n(37762),s=n(74165),i=n(15861),c=n(15671),u=n(43144),o=n(61130),h=function(){function t(){(0,c.Z)(this,t),this.activeHooks=new Map,this.callbacks=new Map,this.checkInterval=void 0,this.db=new o.Z}return(0,u.Z)(t,[{key:"init",value:function(){var t=(0,i.Z)((0,s.Z)().mark((function t(){var e=this;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.db.init();case 2:return t.next=4,this.evictOldHooks();case 4:return t.next=6,this.pickupHooks(!0);case 6:this.checkInterval||(this.checkInterval=setInterval((0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.evictOldHooks();case 2:return t.next=4,e.pickupHooks(!0);case 4:case"end":return t.stop()}}),t)}))),3e5));case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"destroy",value:function(){var t=(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.stopAll();case 2:this.checkInterval&&(clearInterval(this.checkInterval),this.checkInterval=void 0);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"pickupHooks",value:function(){var t=(0,i.Z)((0,s.Z)().mark((function t(){var e,n,r,i,c,u=arguments;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.length>0&&void 0!==u[0]&&u[0],t.next=3,this.db.getWebhooks();case 3:n=t.sent,r=(0,a.Z)(n),t.prev=5,r.s();case 7:if((i=r.n()).done){t.next=16;break}if(c=i.value,this.activeHooks.has(c.id)){t.next=14;break}if(this.activeHooks.set(c.id,c),!e){t.next=14;break}return t.next=14,c.start();case 14:t.next=7;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(5),r.e(t.t0);case 21:return t.prev=21,r.f(),t.finish(21);case 24:case"end":return t.stop()}}),t,this,[[5,18,21,24]])})));return function(){return t.apply(this,arguments)}}()},{key:"evictOldHooks",value:function(){var t=(0,i.Z)((0,s.Z)().mark((function t(){var e,n,r,i,c;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new Date,t.next=3,this.db.getWebhooks();case 3:n=t.sent,r=(0,a.Z)(n),t.prev=5,r.s();case 7:if((i=r.n()).done){t.next=17;break}if(c=i.value,!(e>=c.expires_at)){t.next=15;break}if(!this.activeHooks.has(c.id)){t.next=13;break}return t.next=13,this.stopHook(c);case 13:return t.next=15,this.db.deleteWebhook(c.id);case 15:t.next=7;break;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(5),r.e(t.t0);case 22:return t.prev=22,r.f(),t.finish(22);case 25:case"end":return t.stop()}}),t,this,[[5,19,22,25]])})));return function(){return t.apply(this,arguments)}}()},{key:"registerWebhook",value:function(){var t=(0,i.Z)((0,s.Z)().mark((function t(e){var n,r,a=arguments;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!(a.length>1&&void 0!==a[1])||a[1],t.next=3,this.db.addWebhook(e);case 3:if(r=t.sent,!n){t.next=8;break}return this.activeHooks.set(r.id,r),t.next=8,r.start();case 8:return t.abrupt("return",r.id);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getWebhook",value:function(){var t=(0,i.Z)((0,s.Z)().mark((function t(e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.activeHooks.has(e)){t.next=2;break}return t.abrupt("return",this.activeHooks.get(e));case 2:return t.next=4,this.db.getWebhook(e);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"deleteWebhook",value:function(){var t=(0,i.Z)((0,s.Z)().mark((function t(e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.activeHooks.has(e)){t.next=3;break}return t.next=3,this.stopHook(this.activeHooks.get(e));case 3:return t.next=5,this.db.deleteWebhook(e);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"deleteAllWebhooks",value:function(){var t=(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.stopAll();case 2:return t.next=4,this.db.clearWebhooks();case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"stopAll",value:function(){var t=(0,i.Z)((0,s.Z)().mark((function t(){var e,n,i,c;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=(0,a.Z)(this.activeHooks),t.prev=1,e.s();case 3:if((n=e.n()).done){t.next=9;break}return i=(0,r.Z)(n.value,2),c=i[1],t.next=7,this.stopHook(c);case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e.e(t.t0);case 14:return t.prev=14,e.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,11,14,17]])})));return function(){return t.apply(this,arguments)}}()},{key:"stopHook",value:function(){var t=(0,i.Z)((0,s.Z)().mark((function t(e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.activeHooks.has(e.id)){t.next=4;break}return t.next=3,e.stop();case 3:this.activeHooks.delete(e.id);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}],[{key:"instance",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._instance){e.next=4;break}return t._instance=new t,e.next=4,t._instance.init();case 4:return e.abrupt("return",t._instance);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),t}()}}]);