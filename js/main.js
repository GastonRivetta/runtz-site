(function(){
  var P=[
    ["Smoke Out Jacket",275,137.5,"Sale"],
    ["Smoke Out Jacket – Alt",275,137.5,"Sale"],
    ["Floral Runtz Varsity Jacket – Black",250,125,"Sale"],
    ["Floral Runtz Varsity Jacket – Rose",250,125,"Sale"],
    ["Runtz Hoodie",120,60,"Sale"],
    ["Runtz Dad Hat",45,22.5,"Sale"]
  ];
  var imgs=["images/product-1.svg","images/product-2.svg","images/product-3.svg","images/product-4.svg","images/product-5.svg","images/product-6.svg"];
  function usd(n){return "$"+n.toFixed(2)}
  var t=document.getElementById("track");
  t.innerHTML=P.map(function(p,i){
    return '<a class="reeves-pick-card" href="#"><div class="reeves-pick-image-wrap"><span class="reeves-pick-tag">'+p[3]+'</span><img class="reeves-pick-image" alt="" src="'+imgs[i]+'"></div><div class="reeves-pick-content"><p class="reeves-pick-brand">RuntzWorldWide</p><h3 class="reeves-pick-name">'+p[0]+'</h3><div class="reeves-pick-price"><s>'+usd(p[1])+'</s>'+usd(p[2])+'</div><span class="reeves-pick-link">Shop now <span>›</span></span></div></a>';
  }).join("");
  function step(d){var c=t.querySelector(".reeves-pick-card");t.scrollBy({left:d*(c.offsetWidth+16),behavior:"smooth"})}
  document.querySelector(".reeves-picks-left").onclick=function(){step(-1)};
  document.querySelector(".reeves-picks-right").onclick=function(){step(1)};
  document.getElementById("vip").onsubmit=function(e){e.preventDefault();document.getElementById("ok").textContent="You’re on the list.";e.target.reset()};
})();
