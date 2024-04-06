import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="43226566-fed9ea78cdf96918d4e965adc",h="https://pixabay.com/api/";function m(o=""){const s=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(o){return o.map(({webformatURL:s,largeImageURL:t,tags:a,likes:e,views:r,comments:i,downloads:n})=>`<li class="card">
        <a href="${t}">
          <img src="${s}" alt="${a}" width="360" height="152"/>
        </a>
        <ul class="list-stat">
          <li class="item">
            <h2 class="title">likes</h2>
            <p class="stat">${e}</p>
          </li>
          <li class="item">
            <h2 class="title">Views</h2>
            <p class="stat">${r}</p>
          </li>
          <li class="item">
            <h2 class="title">Comments</h2>
            <p class="stat">${i}</p>
          </li>
          <li class="item">
            <h2 class="title">Downloads</h2>
            <p class="stat">${n}</p>
          </li>
        </ul>
      </li>`).join("")}const l={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery")};l.form.addEventListener("submit",d);function d(o){o.preventDefault(),l.gallery.innerHTML='<span class="loader"></span>';const{text:s}=o.currentTarget.elements;m(s.value).then(t=>{console.log("data",t.hits),console.log(t.hits.length),t.hits.length===0&&c.warning({color:"#d5ccda",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),l.gallery.innerHTML=p(t.hits),g.refresh(),l.form.reset()}).catch(t=>{alert(t)})}const g=new u(".card a",{captionsData:"alt",captionDelay:250,captionPosition:"outside"});
//# sourceMappingURL=commonHelpers.js.map
