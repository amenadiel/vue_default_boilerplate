import{_ as n,r as i,c as s,b as r,w as t,d as e,e as a,a as c,o as h}from"./app.9b700571.js";const C='{"title":"\u{1F680} Caching","description":"","frontmatter":{},"headers":[{"level":3,"title":"Canonicalizing Transformations","slug":"canonicalizing-transformations"}],"relativePath":"caching.md","lastUpdated":1638371608453}',d={},l=e("h1",{id:"\u{1F680}-caching",tabindex:"-1"},[a("\u{1F680} Caching "),e("a",{class:"header-anchor",href:"#\u{1F680}-caching","aria-hidden":"true"},"#")],-1),g=a(" Except for the very first time they are requested (and inmediately cached), variations will answer from the edge at blazing speed, and will even survive for a few months if the original image is deleted. The image to the right doesn't exist but in Cloudflare's Cache. "),p=a("The response headers will also hint the browser not to request this same asset for a year. While this isn't much of a feature, your browser will hopefully not need requesting it anytime soon and that will shave a couple of ms off. "),m=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"w=150 h=150")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("img",{src:"https://img.ctohm.com/w=150_h=150/riff.one/images/designcue-unsplash.jpg",alt:"150x150"})])])])],-1),u=c(`<h3 id="canonicalizing-transformations" tabindex="-1">Canonicalizing Transformations <a class="header-anchor" href="#canonicalizing-transformations" aria-hidden="true">#</a></h3><p>The routing logic will take care of canonicalizing the transformation parameters so you don&#39;t need to care about their order. The next two URLs are equivalent</p><div class="language-html"><pre><code>https://img.ctohm.com/w=150_h=150/riff.one/images/designcue-unsplash.jpg

https://img.ctohm.com/h=150_w=150/riff.one/images/designcue-unsplash.jpg

</code></pre></div><p>Regarding parameters that are provided as shortcuts for others, as in the case of <code>output</code>, canonicalization resolves those shortcuts before computing the cached entry. The next two URLs are equivalent</p><div class="language-html"><pre><code>https://img.ctohm.com/output=png/riff.one/images/designcue-unsplash.jpg

https://img.ctohm.com/png/riff.one/images/designcue-unsplash.jpg

</code></pre></div><p>In cases where the original image is transformed according to feature detections (as in the case of <code>webp</code> format in <code>auto</code> mode ), detected feature is merged into the canonical URL before caching. If you&#39;re using a browser with webp support, the following URLs are equivalent:</p><div class="language-html"><pre><code>https://img.ctohm.com/output=auto/riff.one/images/dice.png

https://img.ctohm.com/auto/riff.one/images/dice.png

https://img.ctohm.com/webp/riff.one/images/dice.png

// any of the above is translated to
https://img.ctohm.com/output=webp/riff.one/images/dice.png

</code></pre></div>`,7);function f(_,w,v,b,T,x){const o=i("ShowCase");return h(),s("div",null,[l,r(o,null,{first_paragraph:t(()=>[g]),second_paragraph:t(()=>[p]),table:t(()=>[m]),_:1}),u])}var z=n(d,[["render",f]]);export{C as __pageData,z as default};
