$(function(){$("#toc-list .level-1 > a").click(function(){return $(this).parent().find("> ol").slideToggle(function(){positionBackToTop(!0)}),!1}),$(function(){$(".anchorable-toc").each(function(){var n=$(this),o=n.attr("id"),e="#"+o,t='<a class="toc-anchor" href="'+e+'"></a>';n.prepend(t)})})});var currentRevision="v1.11.0";$.ajax("/versions.json").done(function(n){var o=$(".version-select");o.select2({data:n}),o.select2("val",currentRevision),o.on("change",function(){var n=this.value;window.location="/"+n+"/"})});