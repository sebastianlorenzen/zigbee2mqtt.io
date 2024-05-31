"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[43606],{826271:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-4fe0b685","path":"/devices/ES1ZZ(TY).html","title":"Linptech ES1ZZ(TY) control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Linptech ES1ZZ(TY) control via MQTT","description":"Integrate your Linptech ES1ZZ(TY) via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-01T18:54:40.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Target distance (numeric)","slug":"target-distance-numeric","link":"#target-distance-numeric","children":[]},{"level":3,"title":"Motion detection distance (numeric)","slug":"motion-detection-distance-numeric","link":"#motion-detection-distance-numeric","children":[]},{"level":3,"title":"Presence keep time (numeric)","slug":"presence-keep-time-numeric","link":"#presence-keep-time-numeric","children":[]},{"level":3,"title":"Motion detection sensitivity (numeric)","slug":"motion-detection-sensitivity-numeric","link":"#motion-detection-sensitivity-numeric","children":[]},{"level":3,"title":"Static detection sensitivity (numeric)","slug":"static-detection-sensitivity-numeric","link":"#static-detection-sensitivity-numeric","children":[]},{"level":3,"title":"Fading time (numeric)","slug":"fading-time-numeric","link":"#fading-time-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1717180801000},"filePathRelative":"devices/ES1ZZ(TY).md"}')},253879:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var n=i(166252);const o=(0,n._)("h1",{id:"linptech-es1zz-ty",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#linptech-es1zz-ty","aria-hidden":"true"},"#"),(0,n.Uk)(" Linptech ES1ZZ(TY)")],-1),c=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),a=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"ES1ZZ(TY)")],-1),d=(0,n._)("td",null,"Vendor",-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"mmWave Presence sensor")],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"occupancy, illuminance, target_distance, motion_detection_distance, presence_keep_time, motion_detection_sensitivity, static_detection_sensitivity, fading_time, linkquality")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ES1ZZ(TY).png",alt:"Linptech ES1ZZ(TY)"})])],-1),u=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),h=(0,n.uE)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Presence state. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#target-distance-numeric" aria-hidden="true">#</a> Target distance (numeric)</h3><p>Distance to target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>cm</code>.</p><h3 id="motion-detection-distance-numeric" tabindex="-1"><a class="header-anchor" href="#motion-detection-distance-numeric" aria-hidden="true">#</a> Motion detection distance (numeric)</h3><p>Motion detection distance. Value can be found in the published state on the <code>motion_detection_distance</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_detection_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="presence-keep-time-numeric" tabindex="-1"><a class="header-anchor" href="#presence-keep-time-numeric" aria-hidden="true">#</a> Presence keep time (numeric)</h3><p>Presence keep time. Value can be found in the published state on the <code>presence_keep_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>min</code>.</p><h3 id="motion-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#motion-detection-sensitivity-numeric" aria-hidden="true">#</a> Motion detection sensitivity (numeric)</h3><p>Motion detection sensitivity. Value can be found in the published state on the <code>motion_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5</code>.</p><h3 id="static-detection-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#static-detection-sensitivity-numeric" aria-hidden="true">#</a> Static detection sensitivity (numeric)</h3><p>Static detection sensitivity. Value can be found in the published state on the <code>static_detection_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;static_detection_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5</code>.</p><h3 id="fading-time-numeric" tabindex="-1"><a class="header-anchor" href="#fading-time-numeric" aria-hidden="true">#</a> Fading time (numeric)</h3><p>Time after which the device will check again for presence. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10000</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),m={},p=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[c,(0,n._)("tbody",null,[a,(0,n._)("tr",null,[d,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=Linptech"},{default:(0,n.w5)((()=>[(0,n.Uk)("Linptech")])),_:1})])]),s,l,r])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,n.kq)(" Notes END: Do not edit below this line "),u,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);