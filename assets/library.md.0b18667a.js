import{_ as n,c as s,o as a,a as e}from"./app.9b700571.js";const m='{"title":"\u{1F4D9} Use it as Library","description":"","frontmatter":{},"headers":[{"level":3,"title":"Example: Format ServiceWorker","slug":"example-format-serviceworker"},{"level":3,"title":"Example: Format Modules","slug":"example-format-modules"}],"relativePath":"library.md","lastUpdated":1638762063715}',t={},o=e(`<h1 id="\u{1F4D9}-use-it-as-library" tabindex="-1">\u{1F4D9} Use it as Library <a class="header-anchor" href="#\u{1F4D9}-use-it-as-library" aria-hidden="true">#</a></h1><p>For those cases in which you want to add Edge-Resizer capabilities to your existing worker, required with <code>npm</code> or <code>yarn</code></p><div class="language-bash"><pre><code><span class="token function">npm</span> i -D edge-resizer
</code></pre></div><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> -D edge-resizer
</code></pre></div><p>It&#39;s up to you where to have Edge-Resizer&#39;s router handle the request, but when you do, make sure you instance it with the proper <code>ROUTE_PREFIX</code> (it should have a leading slash).</p><p>Parameters to the <code>handle</code> method are pretty generic: the ubiquitous Request, an environment containing your bindings (for which an empty object is fine) and a context implementing the <code>waitUntil</code> method.</p><h3 id="example-format-serviceworker" tabindex="-1">Example: Format ServiceWorker <a class="header-anchor" href="#example-format-serviceworker" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ResizerRouter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;edge-resizer/ResizerRouter&#39;</span>

<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;fetch&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> FetchEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//console.log({ url, keys: Object.keys(event.request) })</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">,</span>
    env <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token constant">WORKER_ENV</span><span class="token operator">:</span><span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
      <span class="token constant">DEBUG</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token constant">ROUTE_PREFIX</span><span class="token operator">=</span><span class="token string">&#39;/&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    resizeRouter<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ResizerRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>base<span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">ROUTE_PREFIX</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span>resizeRouter<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> env<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="example-format-modules" tabindex="-1">Example: Format Modules <a class="header-anchor" href="#example-format-modules" aria-hidden="true">#</a></h3><p>If your worker is using the <code>module</code> format:</p><div class="language-ts"><pre><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ResizerRouter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;edge-resizer/ResizerRouter&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">fetch</span><span class="token operator">:</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> env<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> resizeRouter<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ResizerRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>base<span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">ROUTE_PREFIX</span><span class="token operator">||</span><span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> resizeRouter<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> env<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In the examples above, both the FetchEvent found in classic ServiceWorker format, as well as the context objet as seen in Module format implement the <code>waitUntil</code> method, which is the only enforced interface contract.</p></div>`,12),p=[o];function c(r,i,l,u,k,d){return a(),s("div",null,p)}var v=n(t,[["render",c]]);export{m as __pageData,v as default};
