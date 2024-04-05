import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const a={form:document.querySelector(".js-form"),list:document.querySelector(".js-list"),span:document.querySelector(".loader")},f="43226566-fed9ea78cdf96918d4e965adc",m="https://pixabay.com/api/";a.form.addEventListener("submit",h);function h(i){i.preventDefault(),a.span.classList.remove("is-active");const{text:r}=i.currentTarget.elements;p(r.value).then(t=>{console.log("data",t.hits),console.log(t.hits.length),t.hits.length===0&&l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.list.innerHTML=d(t.hits),a.span.classList.add("is-active"),g.refresh(),a.form.reset()}).catch(t=>{alert(t)})}function p(i=""){const r=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${r}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function d(i){return i.map(({webformatURL:r,largeImageURL:t,tags:c,likes:e,views:s,comments:o,downloads:n})=>`<li class="card">
        <a href="${t}">
          <img src="${r}" alt="${c}" width="360" />
        </a>
        <ul class="list-stat">
          <li class="item">
            <h2 class="title">likes</h2>
            <p class="stat">${e}</p>
          </li>
          <li class="item">
            <h2 class="title">Views</h2>
            <p class="stat">${s}</p>
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
      </li>`).join("")}const g=new u(".card a",{captionsData:"alt",captionDelay:250,captionPosition:"outside"});
//# sourceMappingURL=commonHelpers.js.map
