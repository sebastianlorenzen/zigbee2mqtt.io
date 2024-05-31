"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40702],{461219:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-f14b453c","path":"/devices/ZR360CDB.html","title":"Zorro Alert ZR360CDB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Zorro Alert ZR360CDB control via MQTT","description":"Integrate your Zorro Alert ZR360CDB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-04-29T19:24:38.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"CO2 (numeric)","slug":"co2-numeric","link":"#co2-numeric","children":[]},{"level":3,"title":"Alarm ringtone (enum)","slug":"alarm-ringtone-enum","link":"#alarm-ringtone-enum","children":[]},{"level":3,"title":"Backlight mode (numeric)","slug":"backlight-mode-numeric","link":"#backlight-mode-numeric","children":[]},{"level":3,"title":"Battery state (enum)","slug":"battery-state-enum","link":"#battery-state-enum","children":[]},{"level":3,"title":"Air quality (enum)","slug":"air-quality-enum","link":"#air-quality-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1717180801000},"filePathRelative":"devices/ZR360CDB.md"}')},380658:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var o=i(166252);const a=(0,o._)("h1",{id:"zorro-alert-zr360cdb",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#zorro-alert-zr360cdb","aria-hidden":"true"},"#"),(0,o.Uk)(" Zorro Alert ZR360CDB")],-1),r=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"ZR360CDB")],-1),n=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Multifunctional CO2 detector")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"humidity, temperature, co2, alarm_ringtone, backlight_mode, battery_state, air_quality, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZR360CDB.png",alt:"Zorro Alert ZR360CDB"})])],-1),s=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),h=(0,o.uE)('<ul><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric" aria-hidden="true">#</a> CO2 (numeric)</h3><p>The measured CO2 (carbon dioxide) value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="alarm-ringtone-enum" tabindex="-1"><a class="header-anchor" href="#alarm-ringtone-enum" aria-hidden="true">#</a> Alarm ringtone (enum)</h3><p>Ringtone of the alarm. Value can be found in the published state on the <code>alarm_ringtone</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_ringtone&quot;: NEW_VALUE}</code>. The possible values are: <code>melody_1</code>, <code>melody_2</code>, <code>OFF</code>.</p><h3 id="backlight-mode-numeric" tabindex="-1"><a class="header-anchor" href="#backlight-mode-numeric" aria-hidden="true">#</a> Backlight mode (numeric)</h3><p>Backlight. Value can be found in the published state on the <code>backlight_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_mode&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>3</code>.</p><h3 id="battery-state-enum" tabindex="-1"><a class="header-anchor" href="#battery-state-enum" aria-hidden="true">#</a> Battery state (enum)</h3><p>State of the battery. Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="air-quality-enum" tabindex="-1"><a class="header-anchor" href="#air-quality-enum" aria-hidden="true">#</a> Air quality (enum)</h3><p>Value can be found in the published state on the <code>air_quality</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;air_quality&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>excellent</code>, <code>moderate</code>, <code>poor</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),m={},p=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[r,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[n,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Zorro%20Alert"},{default:(0,o.w5)((()=>[(0,o.Uk)("Zorro Alert")])),_:1})])]),l,c,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),s,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);