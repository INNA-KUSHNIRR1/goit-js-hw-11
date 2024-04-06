import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="43226566-fed9ea78cdf96918d4e965adc",m="https://pixabay.com/api/";function h(i=""){const s=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function p(i){return i.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:o,downloads:n})=>`<li class="card">
        <a href="${r}">
          <img src="${s}" alt="${a}" width="360" height="152"/>
        </a>
        <ul class="list-stat">
          <li class="item">
            <h2 class="title">likes</h2>
            <p class="stat">${e}</p>
          </li>
          <li class="item">
            <h2 class="title">Views</h2>
            <p class="stat">${t}</p>
          </li>
          <li class="item">
            <h2 class="title">Comments</h2>
            <p class="stat">${o}</p>
          </li>
          <li class="item">
            <h2 class="title">Downloads</h2>
            <p class="stat">${n}</p>
          </li>
        </ul>
      </li>`).join("")}const l={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery")};l.form.addEventListener("submit",d);function d(i){i.preventDefault(),l.gallery.innerHTML='<span class="loader"></span>';const{text:s}=i.currentTarget.elements;h(s.value).then(r=>{r.hits.length===0&&c.warning({color:"#d5ccda",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),l.gallery.innerHTML=p(r.hits),g.refresh(),l.form.reset()}).catch(r=>{alert(r)})}const g=new u(".card a",{captionsData:"alt",captionDelay:250,captionPosition:"outside"});
//# sourceMappingURL=commonHelpers.js.map
