import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c={form:document.querySelector(".js-form"),list:document.querySelector(".js-list"),span:document.querySelector(".text")},f="43226566-fed9ea78cdf96918d4e965adc",m="https://pixabay.com/api/";c.form.addEventListener("submit",d);function d(o){o.preventDefault();const{text:r}=o.currentTarget.elements;p(r.value).then(s=>{console.log("data",s.hits),c.list.insertAdjacentHTML("beforeend",h(s.hits)),c.form.reset()}).catch(s=>{console.log(s),l.warning({message:"Sorry, there are no images matching your search query. Please try again!"})})}function p(o=""){const r=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${r}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function h(o){return o.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:n})=>`<a class="item-card" href="${s}">
          <img src="${r}" alt="${a}"/>
            <ul class="item-stat">
              <li class="item>
                <h2 class="title">likes</h2>
                <p class="stat">${e}</p>
              </li>
              <li class="item>
                <h2 class="title">Views</h2>
                <p class="stat">${t}</p>
              </li>
              <li class="item>
                <h2 class="title">Comments</h2>
                <p class="stat">${i}</p>
              </li>
              <li class="item>
                <h2 class="title">Downloads</h2>
                <p class="stat">${n}</p>
              </li>
            </ul>
        </a>`).join("")}new u(".list a",{captionsData:"alt",captionDelay:250,captionPosition:"outside"});
//# sourceMappingURL=commonHelpers.js.map
