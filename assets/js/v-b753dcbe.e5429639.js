"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1955],{340773:(e,n,r)=>{r.r(n),r.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-b753dcbe","path":"/guide/adapters/deconz.html","title":"deCONZ (Dresden Elektronik)","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Hardware","slug":"hardware","link":"#hardware","children":[]}],"git":{"updatedTime":1717180801000},"filePathRelative":"guide/adapters/deconz.md"}')},856510:(e,n,r)=>{r.r(n),r.d(n,{default:()=>f});var a=r(166252);const t=r.p+"assets/img/conbee.f79aa5fb.jpg",i=(0,a.uE)('<h1 id="deconz-dresden-elektronik" tabindex="-1"><a class="header-anchor" href="#deconz-dresden-elektronik" aria-hidden="true">#</a> deCONZ (Dresden Elektronik)</h1><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">adapter</span><span class="token punctuation">:</span> deconz\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',3),l=(0,a.uE)('<h2 id="hardware" tabindex="-1"><a class="header-anchor" href="#hardware" aria-hidden="true">#</a> Hardware</h2><p>ConBee / ConBee II / ConBee III / RaspBee / RaspBee II</p><p>USB connected adapters (ConBee / ConBee II / ConBee III) and Raspberry Pi GPIO modules (RaspBee and RaspBee II).</p><p>Add the correct baudrate to the <code>configuration.yaml</code> into the serial section.</p><ul><li>For ConBee2: specifying the baudrate is not necessary</li><li>For RaspBee2 it is 38400</li><li>For ConBee3 it is 115200</li></ul>',5),o=(0,a._)("strong",null,"Warning:",-1),s={href:"https://github.com/Koenkk/zigbee2mqtt/issues/9554",target:"_blank",rel:"noopener noreferrer"},d={href:"https://deconz.dresden-elektronik.de/deconz-firmware/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually",target:"_blank",rel:"noopener noreferrer"},p={href:"https://phoscon.de/conbee2#buy",target:"_blank",rel:"noopener noreferrer"},c={href:"https://phoscon.de/conbee3#buy",target:"_blank",rel:"noopener noreferrer"},h={href:"https://phoscon.de/raspbee2#buy",target:"_blank",rel:"noopener noreferrer"},k=(0,a._)("img",{src:t,width:"200"},null,-1),g={},f=(0,r(983744).Z)(g,[["render",function(e,n){const r=(0,a.up)("RouterLink"),t=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[i,(0,a._)("p",null,[(0,a.Wm)(r,{to:"/guide/configuration/adapter-settings.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Other settings")])),_:1})]),l,(0,a._)("p",null,[o,(0,a.Uk)(" Conbee 2 firmware versions newer than 0x26580700 will result in an unstable network with devices dropping randomly, see "),(0,a._)("a",s,[(0,a.Uk)("Issue 9554"),(0,a.Wm)(t)])]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",d,[(0,a.Uk)("Coordinator firmware"),(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",u,[(0,a.Uk)("Flashing"),(0,a.Wm)(t)])]),(0,a._)("li",null,[(0,a._)("a",p,[(0,a.Uk)("Buy"),(0,a.Wm)(t)]),(0,a.Uk)(" (ConBee II)")]),(0,a._)("li",null,[(0,a._)("a",c,[(0,a.Uk)("Buy"),(0,a.Wm)(t)]),(0,a.Uk)(" (ConBee III)")]),(0,a._)("li",null,[(0,a._)("a",h,[(0,a.Uk)("Buy"),(0,a.Wm)(t)]),(0,a.Uk)(" (RaspBee II)")])]),k])}]])}}]);