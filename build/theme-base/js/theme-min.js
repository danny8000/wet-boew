/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1a1
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-base",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,force_dialog:false,menu:null,init:function(){b.fullhd=pe.header.find("#base-fullhd");b.psnb=pe.header.find("#base-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#base-srchbx");b.bcrumb=pe.header.find("#base-bc");b.title=pe.header.find("#base-title");b.sft=pe.footer.find("#base-sft");b.fullft=pe.footer.find("#base-fullft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length>0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length>0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length>0&&b.search.length===0){b.psnb.css("width","100%")}else{if(b.psnb.length===0&&b.search.length>0){b.search.css("width","100%")}}},mobileview:function(){var p,w,u,f="",o=pe.dic.get("%menu"),m=pe.dic.get("%search"),i,g,h,q,n=false,s='data-role="page"',j='data-role="popup" data-overlay-theme="a"',e='<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-left">'+pe.dic.get("%close")+"</a>",l="",r,d,k,t,v;if(b.menubar.length>0||pe.secnav.length>0||b.search.length>0){t=b.menubar.find("ul.mb-menu li");p="<div "+(n?s:j)+' id="jqm-wb-mb"><div data-role="header">';g=(pe.secnav.length>0?pe.secnav.find("h2").eq(0):"");w=(b.menubar.length>0?b.psnb.children(":header"):(pe.secnav.length>0?g:b.bcrumb.children(":header")));u=w[0].innerHTML;p+="<h1>"+o+"</h1>"+(n?"":e)+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length>0){p+='<section><div id="jqm-mb-location-text">'+b.bcrumb[0].innerHTML+"</div></section>";b.bcrumb.remove()}else{p+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length>0){h=pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true);pe.menu.expandcollapsemobile(h,(pe.secnav.find("h3.top-section").length>0?"h4":"h3"),true,false);pe.menu.expandcollapsemobile(h,".nav-current",false,true);f+="<section><div><h2>"+g[0].innerHTML+'</h2><div data-role="controlgroup">'+h[0].innerHTML+"</div></div></section>";pe.secnav.remove()}if(b.menubar.length>0){h=pe.menu.buildmobile(t,3,"a",true,true,"c",true);f+="<section><div><h2>"+u+'</h2><div data-role="controlgroup">'+h[0].innerHTML+"</div></div></section>"}p+='<div id="jqm-mb-menu"></div></nav></div></div></div>';(n?pe.pagecontainer():pe.bodydiv).append(p);b.force_dialog=n;b.menu=f;w.wrapInner('<a href="#jqm-wb-mb" data-rel="'+(n?"dialog":"popup")+'"></a>');l+='<li><a data-rel="'+(n?"dialog":"popup")+'" data-theme="a" data-icon="site-menu" href="#jqm-wb-mb">'+o+"</a></li>"}if(b.search.length>0){i=b.search.find(":header");q="<div "+j+' id="jqm-wb-search"><div data-role="header"><h1>'+m+"</h1>"+e+'</div><div data-role="content">'+(c("<div/>").append(b.search.find("form")))[0].innerHTML+"</div></div>";pe.bodydiv.append(q);i.wrapInner('<a href="#jqm-wb-search" data-rel="popup"></a>');l+='<li><a data-rel="popup" data-theme="a" data-icon="search" href="#jqm-wb-search">'+m+"</a></li>"}if(l.length>0){r=c('<div data-role="navbar" data-iconpos="right"><ul class="wb-hide">'+l+"</ul></div>");b.title.after(r)}if(b.sft.length>0){d=b.sft.find(".base-col-head a");v=b.sft.children("#base-sft-in");b.fullft.parent().remove();k='<div data-role="navbar"><ul>';d.each(function(){k+='<li><a href="'+this.href+'" data-theme="b">'+this.innerHTML+"</a></li>"});k+="</ul></div>";v.replaceWith(k)}c(document).on("pagecreate",function(){if(b.menubar.length>0){b.psnb.parent().remove()}if(b.search.length>0){b.search.parent().remove()}if(l.length>0){r.children().removeClass("wb-hide")}setTimeout(function(){(b.force_dialog?pe.pagecontainer():pe.bodydiv).find("#jqm-mb-menu").append(b.menu).trigger("create")},1);function x(z,y,C,B){var A;c.mobile.showPageLoadingMsg();A=c.mobile.transitionHandlers.simultaneous("pop",y,C,B);A.done(function(){c.mobile.hidePageLoadingMsg()});return A}c.mobile.transitionHandlers.loadingTransition=x;c.mobile.defaultDialogTransition="loadingTransition"});c(document).on("pageinit",function(){pe.menu.correctmobile(c("#jqm-wb-mb"))});c(document).trigger("mobileviewloaded");return}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));