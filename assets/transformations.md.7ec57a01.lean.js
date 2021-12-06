import{_ as i,r as o,c as n,b as s,w as a,d as e,e as t,a as l,o as h}from"./app.9b700571.js";const T='{"title":"\u267B\uFE0F Transformations","description":"","frontmatter":{},"headers":[{"level":2,"title":"Available Transformations","slug":"available-transformations"},{"level":3,"title":"Width and Height","slug":"width-and-height"},{"level":3,"title":"Fit/Colorize/Sharpen","slug":"fit-colorize-sharpen"},{"level":3,"title":"Compression/Optimization","slug":"compression-optimization"},{"level":3,"title":"Output Format and naming","slug":"output-format-and-naming"},{"level":3,"title":"Crop","slug":"crop"},{"level":2,"title":"TODO","slug":"todo"}],"relativePath":"transformations.md","lastUpdated":1638762390443}',d={},g=e("h1",{id:"\u267B\uFE0F-transformations",tabindex:"-1"},[t("\u267B\uFE0F Transformations "),e("a",{class:"header-anchor",href:"#\u267B\uFE0F-transformations","aria-hidden":"true"},"#")],-1),c=e("p",null,[t("Our routing logic expects the transformation part to come right before the target image hostname. This part of the variation url will be translated -under the hood- to searchParams as expected by "),e("a",{href:"https://images.weserv.nl/",target:"_blank",rel:"noopener noreferrer"},"images.weserv.nl API"),t(".")],-1),m=e("p",null,"e.g resize to 150x150",-1),p=e("div",{class:"language-html"},[e("pre",null,[e("code",null,"https://img.ctohm.com/w=150_h=150/riff.one/images/designcue-unsplash.jpg`\n")])],-1),f=t(" Except for the very first time they are requested (and inmediately cached), variations will answer from the edge at blazing speed, and will even survive for a few months if the original image is deleted. The image to the right doesn't exist but in Cloudflare's Cache. "),u=t("The response headers will also hint the browser not to request this same asset for a year. While this isn't much of a feature, your browser will hopefully not need requesting it anytime soon and that will shave a couple of ms off. "),_=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"w=150 h=150")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("img",{src:"https://img.ctohm.com/w=150_h=150/riff.one/images/designcue-unsplash.jpg",alt:"150x150"})])])])],-1),b=l(`__VP_STATIC_START__<p>In this section we enumerate supported transformations such as resizing, optimizing, compression, changing format, cropping and changing hue. Other transformations can be passed directly as searchParams to the variation URL (not ideal, but \u{1F937})</p><hr><h2 id="available-transformations" tabindex="-1">Available Transformations <a class="header-anchor" href="#available-transformations" aria-hidden="true">#</a></h2><h3 id="width-and-height" tabindex="-1">Width and Height <a class="header-anchor" href="#width-and-height" aria-hidden="true">#</a></h3><ul><li>w: <a href="https://images.weserv.nl/docs/size.html#width" target="_blank" rel="noopener noreferrer">\u{1F517} Width</a>,</li><li>h: <a href="https://images.weserv.nl/docs/size.html#height" target="_blank" rel="noopener noreferrer">\u{1F517} Height</a></li><li>dpr: <a href="https://images.weserv.nl/docs/size.html#device-pixel-ratio" target="_blank" rel="noopener noreferrer">\u{1F517} Device Pixel Ratio</a></li></ul><div class="language-html"><pre><code>https://img.ctohm.com/w=150_h=150/riff.one/images/dice.png
</code></pre></div><table><thead><tr><th>dpr=2 w=200 l=0</th><th>dpr=4 w=200</th><th>dpr=2 w=200</th><th>dpr=4 w=200</th></tr></thead><tbody><tr><td><img src="https://img.ctohm.com/dpr=2_w=200_png_l=0/riff.one/images/dice.png" alt="original"></td><td><img src="https://img.ctohm.com/dpr=4_w=200_png_l=6_af/riff.one/images/dice.png" alt="jpg"></td><td><img src="https://img.ctohm.com/dpr=2_w=200_jpg_q=100/riff.one/images/designcue-unsplash.jpg" alt="af"></td><td><img src="https://img.ctohm.com/dpr=2_w=200_jpg_q=5/riff.one/images/designcue-unsplash.jpg" alt="webp"></td></tr></tbody></table><h3 id="fit-colorize-sharpen" tabindex="-1">Fit/Colorize/Sharpen <a class="header-anchor" href="#fit-colorize-sharpen" aria-hidden="true">#</a></h3><ul><li>fit: <a href="https://images.weserv.nl/docs/fit.html" target="_blank" rel="noopener noreferrer">\u{1F517} Fit</a> (contain, cover, inside, outside, fill)</li><li>bg: <a href="https://images.weserv.nl/docs/adjustment.html#background" target="_blank" rel="noopener noreferrer">\u{1F517} Background Color</a> (eg fit=contain&amp;cbg=0f0)</li><li>cbg: Background Color for Fit=Contain (eg fit=contain&amp;cbg=0f0)</li><li>hue: <a href="https://images.weserv.nl/docs/adjustment.html#hue-rotation" target="_blank" rel="noopener noreferrer">\u{1F517} Hue Rotation (0 to 360) </a></li><li>sharp: <a href="https://images.weserv.nl/docs/adjustment.html#sharpen" target="_blank" rel="noopener noreferrer">\u{1F517} Sharpen</a></li><li>n: <a href="https://images.weserv.nl/docs/format.html#number-of-pages" target="_blank" rel="noopener noreferrer">Number of Pages</a> (is multipage images still a thing?)</li></ul><table><thead><tr><th>w=100 hue=160</th><th>w=160 h=100 cbg=green</th><th>w=150 h=100 fit=cover sharp=4</th></tr></thead><tbody><tr><td><img src="https://img.ctohm.com/w=100_hue=160/riff.one/images/designcue-unsplash.jpg" alt="original"></td><td><img src="https://img.ctohm.com/w=160_h=100_cbg=green/riff.one/images/designcue-unsplash.jpg" alt="fit and cbg"></td><td><img src="https://img.ctohm.com/w=150_h=100_fit=cover&amp;sharp=4/riff.one/images/designcue-unsplash.jpg" alt="fit and cbg"></td></tr></tbody></table><h3 id="compression-optimization" tabindex="-1">Compression/Optimization <a class="header-anchor" href="#compression-optimization" aria-hidden="true">#</a></h3><ul><li>af: <a href="https://images.weserv.nl/docs/format.html#adaptive-filter" target="_blank" rel="noopener noreferrer">Adaptative Filter</a> (only works on <em>png</em>)</li><li>l: <a href="https://images.weserv.nl/docs/format.html#compression-level" target="_blank" rel="noopener noreferrer">Compression Level</a> (number between 0 and 9. Only works on <em>png</em>, default 6)</li><li>q: <a href="https://images.weserv.nl/docs/format.html#quality" target="_blank" rel="noopener noreferrer">Quality</a> (only works on <em>jpg</em>, <em>tiff</em> and <em>webp</em>. number between 0 and 100, default 80)</li><li>il: <a href="https://images.weserv.nl/docs/format.html#interlace-progressive" target="_blank" rel="noopener noreferrer">Interlaced/Progressive</a></li></ul><table><thead><tr><th>dpr=2 w=200 l=0</th><th>dpr=2 w=200 l=6 af</th><th>dpr=2 w=200 q=100</th><th>dpr=2 w=200 q=5 il</th></tr></thead><tbody><tr><td>png 481kB</td><td>png 102kB</td><td>jpg 148kB</td><td>jpg 3.8kB</td></tr><tr><td><img src="https://img.ctohm.com/dpr=2_w=200_png_l=0/riff.one/images/dice.png" alt="original"></td><td><img src="https://img.ctohm.com/dpr=2_w=200_png_l=6_af/riff.one/images/dice.png" alt="jpg"></td><td><img src="https://img.ctohm.com/dpr=2_w=200_jpg_q=100/riff.one/images/designcue-unsplash.jpg" alt="af"></td><td><img src="https://img.ctohm.com/dpr=2_w=200_jpg_q=5/riff.one/images/designcue-unsplash.jpg" alt="webp"></td></tr></tbody></table><h3 id="output-format-and-naming" tabindex="-1">Output Format and naming <a class="header-anchor" href="#output-format-and-naming" aria-hidden="true">#</a></h3><ul><li>output: <a href="https://images.weserv.nl/docs/format.html#output" target="_blank" rel="noopener noreferrer">Output</a></li><li>filename: <a href="https://images.weserv.nl/docs/format.html#filename" target="_blank" rel="noopener noreferrer">Filename</a></li></ul><div class="language-html"><pre><code>https://img.ctohm.com/w=150_output=gif/riff.one/images/designcue-unsplash.jpg
</code></pre></div><table><thead><tr><th>Original (png)</th><th>JPEG</th><th>GIF</th><th>WEBP</th></tr></thead><tbody><tr><td><img src="https://img.ctohm.com/w=150_png/riff.one/images/designcue-unsplash.jpg" alt="original"></td><td><img src="https://img.ctohm.com/hue=90_w=150_jpg/riff.one/images/designcue-unsplash.jpg" alt="jpg"></td><td><img src="https://img.ctohm.com/hue=180_w=150_gif/riff.one/images/designcue-unsplash.jpg" alt="gif"></td><td><img src="https://img.ctohm.com/hue=270_w=150_output=webp/riff.one/images/designcue-unsplash.jpg" alt="webp"></td></tr></tbody></table><h3 id="crop" tabindex="-1">Crop <a class="header-anchor" href="#crop" aria-hidden="true">#</a></h3><p><a href="https://images.weserv.nl/docs/crop.html#rectangle-crop" target="_blank" rel="noopener noreferrer">Cropping</a> is achieved through 4 parameters</p><ul><li>cw: &#39;Crop width&#39;,</li><li>cy: &#39;Crop y&#39;,</li><li>cx: &#39;Crop x&#39;,</li><li>ch: &#39;Crop height&#39;,</li></ul><p>This one is tricky to get it right, but you can see an example on the story of <a href="./use_cases.html">my use case</a>.</p><table><thead><tr><th>original w=200 h=150</th><th>w=200 h=150</th><th>w=200 h=150</th><th>w=400 h=300</th></tr></thead><tbody><tr><td></td><td>cx=20 cy=20 fit=cover</td><td>cx=20 cy=20 ch=54 fit=cover</td><td>cx=82 cy=67 ch=137 cw=224 fit=cover</td></tr><tr><td><img src="https://img.ctohm.com/w=200_h=150/riff.one/images/printable_chart.png" alt="original"></td><td><img src="https://img.ctohm.com/w=200_h=150_cx=20_cy=20_fit=cover/riff.one/images/printable_chart.png" alt="jpg"></td><td><img src="https://img.ctohm.com/w=200_h=150_cx=20_cy=20_ch=54_fit=cover/riff.one/images/printable_chart.png" alt="af"></td><td><img src="https://img.ctohm.com/w=400_h=300_cx=82_cy=67_ch=137_cw=224_fit=cover/riff.one/images/printable_chart.png" alt="webp"></td></tr></tbody></table><hr><h2 id="todo" tabindex="-1">TODO <a class="header-anchor" href="#todo" aria-hidden="true">#</a></h2><ul><li>[x] basic tests</li><li>[ ] more tests</li><li>[ ] deploy with workers</li><li>[ ] enable using Edge-Resizer as a dependency</li><li>[x] fix a handful of embarassing bugs after announcing what-i-built</li><li>[ ] use vary to deliver WEBP, then AVIF to everyone except iOS</li><li>[ ] figure out a way to receive device pixel ratio and deliver retina images</li><li>[ ] other transformations</li><li>[ ] get absorbed by Cloudflare</li><li>[ ] don&#39;t get absorbed but have massive adoption <ul><li>[ ] lots of issues</li><li>[x] anxiety</li><li>[ ] abandon project</li></ul></li></ul>__VP_STATIC_END__`,25);function w(v,y,x,j,k,C){const r=o("ShowCase");return h(),n("div",null,[g,c,m,p,s(r,null,{first_paragraph:a(()=>[f]),second_paragraph:a(()=>[u]),table:a(()=>[_]),_:1}),b])}var O=i(d,[["render",w]]);export{T as __pageData,O as default};