"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[46643],{37266:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-44d2f7ca","path":"/devices/COZIGVS.html","title":"Conecto COZIGVS control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Conecto COZIGVS control via MQTT","description":"Integrate your Conecto COZIGVS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-04-29T19:24:38.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Vibration (binary)","slug":"vibration-binary","link":"#vibration-binary","children":[]},{"level":3,"title":"Sensitivity (numeric)","slug":"sensitivity-numeric","link":"#sensitivity-numeric","children":[]},{"level":3,"title":"Buzzer mute (text)","slug":"buzzer-mute-text","link":"#buzzer-mute-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1717180801000},"filePathRelative":"devices/COZIGVS.md"}')},858007:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var n=i(166252);const o=(0,n._)("h1",{id:"conecto-cozigvs",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#conecto-cozigvs","aria-hidden":"true"},"#"),(0,n.Uk)(" Conecto COZIGVS")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"COZIGVS")],-1),l=(0,n._)("td",null,"Vendor",-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Vibration sensor")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"vibration, sensitivity, buzzer_mute, linkquality")],-1),u=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/COZIGVS.png",alt:"Conecto COZIGVS"})])],-1),c=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="vibration-binary" tabindex="-1"><a class="header-anchor" href="#vibration-binary" aria-hidden="true">#</a> Vibration (binary)</h3><p>Indicates whether the device detected vibration. Value can be found in the published state on the <code>vibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> vibration is ON, if <code>false</code> OFF.</p><h3 id="sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#sensitivity-numeric" aria-hidden="true">#</a> Sensitivity (numeric)</h3><p>Sensitivity of the sensor (single press the button when muted to switch between low (one beep), medium (two beeps) and max (three beeps)). Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2</code>.</p><h3 id="buzzer-mute-text" tabindex="-1"><a class="header-anchor" href="#buzzer-mute-text" aria-hidden="true">#</a> Buzzer mute (text)</h3><p>ON when buzzer is muted (double press the button on device to toggle). Value can be found in the published state on the <code>buzzer_mute</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),h={},b=(0,i(983744).Z)(h,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[a,(0,n._)("tbody",null,[d,(0,n._)("tr",null,[l,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=Conecto"},{default:(0,n.w5)((()=>[(0,n.Uk)("Conecto")])),_:1})])]),s,r,u])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,n.kq)(" Notes END: Do not edit below this line "),c])}]])}}]);