!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=()=>{let e=document.getElementById("tab1-content"),t=document.createElement("div");t.id="content";let n=document.createElement("h1");n.textContent="THE OATMEAL BAR";let a=document.createElement("img");a.src="https://images.unsplash.com/photo-1475855664010-a869729f42c3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=ba6eb86312aa956759e93c3df63b21bb";let i=document.createElement("p");i.textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.",e.appendChild(t),t.appendChild(n),t.appendChild(a),t.appendChild(i),console.log("hello!!")},i=()=>{let e=document.getElementById("tab2-content"),t=document.createElement("div");t.id="content";let n=document.createElement("h2");n.textContent="MENU";let a=document.createElement("div");a.className="page";let i=document.createElement("div");i.className="menu-section",e.appendChild(t),t.appendChild(n),t.appendChild(a),a.appendChild(i);let o=["Peanut Butter Banana Oatmeal","Berry Good Bowl","Classic PB&J"],l=["$4.50","$5.00","$3.00"],u=["We start with a generous portion of our organic oats,a dusting of cinnamon, a big dollop of the peanut butterof your choice, and of course sliced bananas on top!","Berries are a great source of antioxcidants, so why notstart your day with a bowl of our organic oats andyour choice of 3 types of berries (among blueberries,raspberries, strawberries, blackberries, goji berries...)","This one is pretty simple: your classic peanut butter andjelly in a bowl of oats! Choose among our various nut buttersand homemade jams/jellies!"];for(let e=0;e<o.length;e++){let t=document.createElement("div");t.className="menu-item";let n=document.createElement("div");n.className="menu-item-name",n.textContent=o[e];let a=document.createElement("div");a.className="menu-item-price",a.textContent=l[e];let r=document.createElement("div");r.className="menu-item-description",r.textContent=u[e],i.appendChild(t),t.appendChild(n),t.appendChild(a),t.appendChild(r)}},o=()=>{[1,2,3].forEach(function(e){let t=document.getElementById("nav-div"),n=document.createElement("input");1==e&&(n.checked="checked"),n.id="tab"+e,n.type="radio",n.name="pct",t.appendChild(n)})},l=()=>{let e=document.getElementById("nav-div"),t=document.createElement("nav");["OUR STORY","MENU","GALLERY"].forEach(function(n,a){let i=document.createElement("ul");i.id="nav-list";let o=document.createElement("li");o.className="tab"+(a+1);let l=document.createElement("label");l.htmlFor=o.className,l.innerHTML=n,e.appendChild(t),t.appendChild(i),i.appendChild(o),o.appendChild(l)})},u=()=>{let e=document.getElementById("nav-div"),t=document.createElement("section");t.id="content-section",e.appendChild(t),[1,2,3].forEach(function(e){let n=document.createElement("div");n.className="tab"+e,n.id="tab"+e+"-content",t.appendChild(n)})};window.addEventListener("load",function(){o(),l(),u(),a(),i(),console.log("end")},!0)}]);