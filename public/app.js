const icons={
  leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4C11 4 5 8 5 15c0 2 1 4 4 5 6-1 10-6 11-16Z"/><path d="M4 20c4-6 8-9 14-12"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v10H3z"/><path d="M9 21v-6h6v6"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 15 3-4 3 2 5-7"/></svg>',
  file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 1.7-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20h-2.4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L8 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H6v-2.4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L7.3 7.6 9 5.9l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.7 1.7-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1V13h-.7a1.7 1.7 0 0 0-1.3 2Z"/></svg>',
  pulse:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>',
  thermometer:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0Z"/><path d="M12 11v7"/></svg>',
  drop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11Z"/></svg>',
  rain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 17a4 4 0 1 1 1-7.9A5 5 0 0 1 17 11h1a3 3 0 0 1 0 6H6Z"/><path d="m8 20-1 2M12 20l-1 2M16 20l-1 2"/></svg>',
  flask:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/><path d="M8 15h8"/></svg>',
  plant:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V9"/><path d="M12 14c-4 0-6-2-6-6 4 0 6 2 6 6ZM12 11c0-4 2-6 6-6 0 4-2 6-6 6Z"/><path d="M7 21h10"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  location:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  crop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 21V9"/><path d="M12 14c-4 0-6-2-6-6 4 0 6 2 6 6ZM12 12c0-4 2-6 6-6 0 4-2 6-6 6Z"/><path d="M4 21h16"/></svg>',
  soil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 17c3-2 5-2 8 0s5 2 8 0M4 21c3-2 5-2 8 0s5 2 8 0"/><path d="M12 14V5"/><path d="M12 8c-3 0-4-2-4-4 3 0 4 1 4 4ZM12 9c0-3 1-5 4-5 0 3-1 5-4 5Z"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3"/><path d="M5 20c.7-4 3-6 7-6s6.3 2 7 6"/></svg>',
  grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg>',
  refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20 11a8 8 0 0 0-14-4L4 9"/><path d="M4 4v5h5M4 13a8 8 0 0 0 14 4l2-2"/><path d="M20 20v-5h-5"/></svg>',
  light:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M9 18h6M10 21h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 4H9c0-2 0-3-1-4Z"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></svg>',
  filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m8 12 4 4 4-4M12 4v12"/></svg>'
};

const state={
  data:{temperature:27.5,humidity:61.2,soil_moisture:34.8,rainfall:4.2,soil_ph:6.7,location:"Field A - North",crop_type:"Wheat",soil_type:"Loamy"},
  location:"Field A - North",live:true,view:"dashboard",search:"",autoRefresh:true,notifications:true
};

const locationData={
  "Field A - North":{temperature:27.5,humidity:61.2,soil_moisture:34.8,rainfall:4.2,soil_ph:6.7,crop_type:"Wheat",soil_type:"Loamy"},
  "Field B - East":{temperature:29.1,humidity:57.8,soil_moisture:31.4,rainfall:2.8,soil_ph:6.5,crop_type:"Rice",soil_type:"Clay Loam"},
  "Field C - South":{temperature:26.8,humidity:66.1,soil_moisture:39.6,rainfall:5.7,soil_ph:6.9,crop_type:"Maize",soil_type:"Sandy Loam"}
};

function toast(message){
  const el=document.getElementById("demoToast"); if(!el)return;
  el.textContent=message;el.classList.add("show");clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>el.classList.remove("show"),2200);
}
function num(v){return Number(v).toFixed(1)}
function sensorCard(cls,icon,title,value,unit,delta){return `<div class="sensor ${cls}"><div class="sensor-top"><div class="sensor-icon">${icons[icon]}</div><span>${title}</span></div><div class="sensor-value">${value} ${unit}</div><div class="delta"><span>▲</span>${delta}</div></div>`}
function mini(icon,cls){return `<div class="mini-icon ${cls}">${icons[icon]}</div>`}

function chartSvg(mode="all",kind="line",range="7d"){
  const allLabels=["Oct 26","Oct 27","Oct 28","Oct 29","Oct 30","Oct 31","Nov 01"];
  const series=[
    {name:"Temperature",c:"#e98236",unit:"°C",v:[26,24,27,29,28,30,29]},
    {name:"Humidity",c:"#458be0",unit:"%",v:[59,64,62,67,60,63,62]},
    {name:"Soil Moisture",c:"#209568",unit:"%",v:[39,45,43,47,39,38,37]},
    {name:"Rainfall",c:"#8b70dc",unit:"mm",v:[5,6,8,10,11,12,11]},
    {name:"pH",c:"#0d9dad",unit:"pH",v:[6.5,6.6,6.4,6.8,6.7,6.6,6.7]}
  ];
  const count=range==="24h"?5:range==="30d"?7:7;
  const labels=allLabels.slice(7-count),shown=mode==="all"?series:series.filter(s=>s.name===mode);
  const W=800,H=244,left=42,right=18,top=18,bottom=34,plotH=H-top-bottom,plotW=W-left-right;
  const x=i=>left+i*plotW/Math.max(1,labels.length-1), y=v=>top+(100-v)*plotH/100;
  const grid=[0,20,40,60,80,100].map(v=>`<g><line x1="${left}" x2="${W-right}" y1="${y(v)}" y2="${y(v)}" stroke="#e8f0ec" stroke-dasharray="3 5"/><text x="7" y="${y(v)+4}" font-size="10" fill="#82968d">${v}</text></g>`).join("");
  const xl=labels.map((l,i)=>`<text x="${x(i)}" y="${H-10}" text-anchor="middle" font-size="10" fill="#82968d">${l}</text>`).join("");
  const lines=shown.map((s,si)=>{
    const normalized=s.v.slice(7-count).map(v=>mode==="all"?Math.max(0,Math.min(100,(v-(Math.min(...s.v)-1))/(Math.max(...s.v)-Math.min(...s.v)+2)*100)):Math.max(0,Math.min(100,v)));
    const pts=normalized.map((v,i)=>`${x(i)},${y(v)}`).join(" ");
    const path=normalized.map((v,i)=>(i?"L":"M")+x(i)+" "+y(v)).join(" ");
    const area=path+` L ${x(normalized.length-1)} ${H-bottom} L ${x(0)} ${H-bottom} Z`;
    return `<defs><linearGradient id="fill${si}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${s.c}" stop-opacity=".22"/><stop offset="100%" stop-color="${s.c}" stop-opacity=".015"/></linearGradient></defs>${kind==="area"?`<path d="${area}" fill="url(#fill${si})"/>`:""}<path class="chart-line-draw" d="${path}" fill="none" stroke="${s.c}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>${normalized.map((v,i)=>`<circle class="chart-point" cx="${x(i)}" cy="${y(v)}" r="4" fill="#fff" stroke="${s.c}" stroke-width="2"><title>${labels[i]} · ${s.name}: ${s.v[i]}${s.unit}</title></circle>`).join("")}`;
  }).join("");
  return `<svg class="modern-chart-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Interactive sensor trend chart">${grid}${xl}${lines}</svg>`;
}

function shell(content,title,subtitle){
  const items=[["dashboard",icons.home,"Dashboard"],["history",icons.clock,"Data History"],["analytics",icons.chart,"Analytics & Charts"],["reports",icons.file,"Reports"],["settings",icons.settings,"Settings"],["processing",icons.pulse,"Processing Center"]];
  return `<div class="app"><header class="topbar"><div class="brand"><div class="brand-mark">${icons.leaf}</div><div><h1>Agricultural Dashboard</h1><p>Real-time Farm Monitoring &amp; Data Analytics</p></div></div><div class="top-meta"><button class="live-toggle ${state.live?"":"off"}" id="liveToggle"><i class="live-dot"></i> ${state.live?"Live Data":"Live Paused"}</button><div class="divider"></div><div class="meta">${icons.clock}<span>Apr 26, 2025</span></div><div class="meta">${icons.clock}<span id="currentTime">10:24 AM</span></div><div class="divider"></div><div class="avatar">${icons.user}</div></div></header><aside class="sidebar"><nav class="nav">${items.map(([id,ico,label])=>`<button class="${state.view===id?"active":""}" data-view="${id}">${ico}<span>${label}</span></button>`).join("")}<div class="nav-sep"></div></nav><div class="sidebar-note">${icons.plant}<strong>Better Data<br>Healthier Crops<br>A Greener Tomorrow</strong><br><span>• •</span></div></aside><main class="main"><div class="content"><div class="page-heading"><div><div class="eyebrow">FARM MONITORING</div><h2>${title}</h2><p>${subtitle}</p></div><div class="page-location">${icons.location}<span>${state.location}</span></div></div>${content}</div></main></div><div class="demo-toast" id="demoToast" aria-live="polite"></div>`;
}

function dashboardPage(){
 const d=state.data;
 return `<section class="grid hero-row"><div class="hero"><div class="hero-icon">${icons.leaf}</div><div class="hero-copy with-icon"><h2>Welcome Back!</h2><p>Monitor your farm's environmental conditions and<br>make data-driven decisions for better crop yield.</p></div><div class="location-box"><label>${icons.location} &nbsp;Farm Location</label><select id="locationSelect">${Object.keys(locationData).map(x=>`<option ${x===state.location?"selected":""}>${x}</option>`).join("")}</select></div></div><div class="health"><div class="health-head"><div class="health-icon">${icons.leaf}</div><div><h3>Overall Crop Health</h3><strong>Good</strong></div></div><div class="progress"><i></i></div><div class="health-foot">78%</div><p>Conditions are favorable for crop growth.</p></div></section>
 <section class="panel sensor-panel"><div class="panel-title">${icons.pulse}<span>Live Sensor Data</span><div class="live-action"><button class="refresh-btn" id="refreshData">${icons.refresh}<span>Refresh Sensors</span></button></div></div><div class="sensor-grid">${sensorCard("temp","thermometer","Temperature",num(d.temperature),"°C","+0.8 °C")}${sensorCard("hum","drop","Humidity",num(d.humidity),"%","+2.1 %")}${sensorCard("moist","plant","Soil Moisture",num(d.soil_moisture),"%","+1.4 %")}${sensorCard("rain","rain","Rainfall",num(d.rainfall),"mm","+0.5 mm")}${sensorCard("ph","flask","Soil pH",num(d.soil_ph),"","+0.1")}</div></section>
 <section class="grid middle"><div class="panel chart-panel"><div class="chart-head"><div class="chart-title">${icons.chart}<span>Sensor Trends <span style="font-weight:500">(Last 7 Days)</span></span></div><div class="legend"><span><i style="background:#f27617"></i>Temperature</span><span><i style="background:#1675df"></i>Humidity</span><span><i style="background:#168d56"></i>Soil Moisture</span></div></div><div class="chart-controls"><label>View<select id="dashboardChartType"><option value="line">Line</option><option value="area">Area</option></select></label><label>Window<select id="dashboardChartRange"><option value="7d">7 sample points</option><option value="24h">5 sample points</option></select></label></div><div class="chart">${chartSvg("all","line","7d")}</div></div><div class="panel readings"><div class="table-head">${icons.grid}<span>Latest Readings</span></div><table class="read-table"><thead><tr><th>Parameter</th><th>Value</th><th>Trend</th></tr></thead><tbody><tr><td><div class="param">${mini("thermometer","mi-temp")}Temperature</div></td><td>${num(d.temperature)} °C</td><td class="up">↑ +0.8</td></tr><tr><td><div class="param">${mini("drop","mi-hum")}Humidity</div></td><td>${num(d.humidity)} %</td><td class="up">↑ +2.1</td></tr><tr><td><div class="param">${mini("plant","mi-moist")}Soil Moisture</div></td><td>${num(d.soil_moisture)} %</td><td class="up">↑ +1.4</td></tr><tr><td><div class="param">${mini("rain","mi-rain")}Rainfall</div></td><td>${num(d.rainfall)} mm</td><td class="up">↑ +0.5</td></tr><tr><td><div class="param">${mini("flask","mi-ph")}Soil pH</div></td><td>${num(d.soil_ph)}</td><td class="up">↑ +0.1</td></tr></tbody></table></div></section>
 <section class="grid bottom"><div class="panel bottom-panel"><div class="list-title">${icons.clock}<span>Recent Activity</span></div><div class="activity"><div class="activity-row"><span class="activity-time">10:20 AM</span><div class="activity-icon">${icons.plant}</div><span>Soil moisture increased to ${num(d.soil_moisture)}%</span></div><div class="activity-row"><span class="activity-time">09:45 AM</span><div class="activity-icon">${icons.rain}</div><span>Rainfall recorded: ${num(d.rainfall)} mm</span></div><div class="activity-row"><span class="activity-time">09:30 AM</span><div class="activity-icon">${icons.thermometer}</div><span>Temperature updated to ${num(d.temperature)} °C</span></div><div class="activity-row"><span class="activity-time">09:15 AM</span><div class="activity-icon">${icons.flask}</div><span>pH level stable at ${num(d.soil_ph)}</span></div></div></div><div class="panel bottom-panel"><div class="list-title">${icons.light}<span>Quick Insights</span></div><div class="insights"><div class="insight green"><div class="insight-icon">${icons.plant}</div><div><strong>Soil Moisture</strong><p>Moisture is within the optimal range for most crops.</p></div></div><div class="insight blue"><div class="insight-icon">${icons.drop}</div><div><strong>Humidity</strong><p>Humidity levels are ideal for current conditions.</p></div></div><div class="insight orange"><div class="insight-icon">${icons.sun}</div><div><strong>Temperature</strong><p>Temperature is slightly higher than usual.</p></div></div></div></div><div class="panel bottom-panel"><div class="list-title">${icons.sun}<span>Farm Conditions</span></div><div class="farm-img"></div><div class="farm-facts"><div class="fact"><span>${icons.location}Location</span><b>${d.location}</b></div><div class="fact"><span>${icons.crop}Crop Type</span><b>${d.crop_type}</b></div><div class="fact"><span>${icons.soil}Soil Type</span><b>${d.soil_type}</b></div></div></div></section>`;
}

const historyRows=[
 ["Apr 26, 2025","10:20 AM","Field A - North","27.5","61.2","34.8","4.2","6.7"],
 ["Apr 26, 2025","09:45 AM","Field A - North","27.2","60.4","33.9","3.8","6.7"],
 ["Apr 26, 2025","09:15 AM","Field A - North","26.9","59.8","33.4","3.5","6.6"],
 ["Apr 25, 2025","06:00 PM","Field A - North","25.8","63.5","36.1","6.2","6.8"],
 ["Apr 25, 2025","12:00 PM","Field A - North","29.4","56.7","31.8","1.4","6.7"],
 ["Apr 24, 2025","06:00 PM","Field A - North","24.9","65.2","38.2","7.1","6.8"],
 ["Apr 24, 2025","12:00 PM","Field A - North","28.8","58.9","34.5","2.2","6.7"],
 ["Apr 23, 2025","06:00 PM","Field A - North","25.1","64.1","37.6","5.8","6.7"]
];

function historyPage(){
 const q=state.search.toLowerCase();
 const rows=historyRows.filter(r=>r.join(" ").toLowerCase().includes(q));
 return `<div class="toolbar panel"><div class="search-wrap">${icons.filter}<input id="historySearch" placeholder="Search readings, field or date..." value="${state.search}"></div><select id="historyRange"><option>Last 7 days</option><option>Last 30 days</option><option>All readings</option></select><button class="outline-btn" id="historyRefresh">${icons.refresh} Refresh</button></div><div class="panel data-table-panel"><div class="panel-title">${icons.clock}<span>Historical Sensor Readings</span><span class="table-count">${rows.length} records</span></div><div class="table-scroll"><table class="history-table"><thead><tr><th>Date</th><th>Time</th><th>Field</th><th>Temp.</th><th>Humidity</th><th>Moisture</th><th>Rainfall</th><th>pH</th></tr></thead><tbody>${rows.map(r=>`<tr>${r.map((v,i)=>`<td class="${i>2?"numeric":""}">${v}${i===3?" °C":i===4||i===5?" %":i===6?" mm":""}</td>`).join("")}</tr>`).join("")||'<tr><td colspan="8" class="empty">No readings match your search.</td></tr>'}</tbody></table></div></div><div class="history-summary"><div class="mini-stat"><span>Records</span><strong>128</strong><small>+12 this week</small></div><div class="mini-stat"><span>Avg. Temperature</span><strong>27.4 °C</strong><small>Within target range</small></div><div class="mini-stat"><span>Avg. Moisture</span><strong>35.8 %</strong><small>Good soil condition</small></div><div class="mini-stat"><span>Data Quality</span><strong>98.6%</strong><small>All sensors online</small></div></div>`;
}

function analyticsPage(){
 return `<div class="analytics-grid"><div class="panel analytics-main"><div class="chart-toolbar"><div><h3>Environmental Trends</h3><p>Compare sensor behavior across the last seven days.</p></div><div class="analytics-chart-controls"><select id="analyticsMetric" aria-label="Choose sensor"><option value="all">All sensors · normalized</option><option>Temperature</option><option>Humidity</option><option>Soil Moisture</option><option>Rainfall</option><option>pH</option></select><select id="analyticsChartType" aria-label="Chart style"><option value="line">Line chart</option><option value="area">Area chart</option></select><select id="analyticsChartRange" aria-label="Time window"><option value="7d">7 sample points</option><option value="24h">5 sample points</option></select></div></div><div class="big-chart">${chartSvg("all","line","7d")}</div></div><div class="panel score-card"><div class="list-title">${icons.leaf}<span>Crop Health Score</span></div><div class="score-ring"><div><strong>78</strong><span>/100</span></div></div><p>Good growing conditions</p><div class="score-item"><span>Soil moisture</span><b>82%</b></div><div class="score-item"><span>Temperature</span><b>76%</b></div><div class="score-item"><span>Humidity</span><b>79%</b></div><div class="score-item"><span>Soil pH</span><b>75%</b></div></div></div><div class="analytics-cards"><div class="panel analysis-card"><div class="analysis-icon green">${icons.plant}</div><div><span>Soil Moisture</span><strong>34.8%</strong><small>Optimal: 30–45%</small></div></div><div class="panel analysis-card"><div class="analysis-icon orange">${icons.thermometer}</div><div><span>Temperature</span><strong>27.5 °C</strong><small>Ideal: 20–30 °C</small></div></div><div class="panel analysis-card"><div class="analysis-icon blue">${icons.drop}</div><div><span>Humidity</span><strong>61.2%</strong><small>Ideal: 50–70%</small></div></div><div class="panel analysis-card"><div class="analysis-icon purple">${icons.rain}</div><div><span>Rainfall</span><strong>4.2 mm</strong><small>Moderate rainfall</small></div></div></div>`;
}

function reportsPage(){
 return `<div class="report-hero panel"><div><div class="eyebrow">FARM REPORT CENTER</div><h3>Generate a clear snapshot of your farm.</h3><p>Download the latest sensor readings and insights for sharing with your team.</p></div><button class="primary-btn" id="downloadReport">${icons.download} Download CSV Report</button></div><div class="report-grid"><div class="panel report-card"><div class="report-icon">${icons.file}</div><h3>Daily Sensor Report</h3><p>Latest temperature, humidity, soil moisture, rainfall and pH measurements.</p><button class="outline-btn report-action" data-report="daily">Generate Report</button></div><div class="panel report-card"><div class="report-icon">${icons.chart}</div><h3>Weekly Analytics</h3><p>Seven-day trend summary with crop health indicators and averages.</p><button class="outline-btn report-action" data-report="weekly">Generate Report</button></div><div class="panel report-card"><div class="report-icon">${icons.leaf}</div><h3>Crop Health Summary</h3><p>Current field condition, crop profile and actionable recommendations.</p><button class="outline-btn report-action" data-report="health">Generate Report</button></div></div><div class="panel report-preview"><div class="panel-title">${icons.check}<span>Report Preview</span><span class="status-pill">Ready</span></div><div class="preview-grid"><div><span>Farm</span><strong>${state.location}</strong></div><div><span>Crop</span><strong>${state.data.crop_type}</strong></div><div><span>Health</span><strong>Good · 78%</strong></div><div><span>Generated</span><strong>Apr 26, 2025 · 10:24 AM</strong></div></div></div>`;
}

function settingsPage(){
 return `<div class="settings-grid"><div class="panel settings-card"><div class="settings-title"><div class="setting-icon">${icons.pulse}</div><div><h3>Live Monitoring</h3><p>Control automatic sensor refresh behavior.</p></div></div><div class="setting-row"><div><strong>Live data updates</strong><small>Refresh simulated readings every 7 seconds.</small></div><button class="switch ${state.live?"on":""}" data-setting="live"><i></i></button></div><div class="setting-row"><div><strong>Auto refresh dashboard</strong><small>Keep the dashboard synchronized with the latest readings.</small></div><button class="switch ${state.autoRefresh?"on":""}" data-setting="auto"><i></i></button></div></div><div class="panel settings-card"><div class="settings-title"><div class="setting-icon">${icons.user}</div><div><h3>Farm Profile</h3><p>Basic information used across reports.</p></div></div><label class="field-label">Default field<select id="settingField">${Object.keys(locationData).map(x=>`<option ${x===state.location?"selected":""}>${x}</option>`).join("")}</select></label><div class="profile-facts"><span>Crop type <b>${state.data.crop_type}</b></span><span>Soil type <b>${state.data.soil_type}</b></span></div></div><div class="panel settings-card"><div class="settings-title"><div class="setting-icon">${icons.file}</div><div><h3>Notifications</h3><p>Presentation-friendly alert preferences.</p></div></div><div class="setting-row"><div><strong>Sensor alerts</strong><small>Show a toast when new readings arrive.</small></div><button class="switch ${state.notifications?"on":""}" data-setting="notifications"><i></i></button></div><div class="setting-row"><div><strong>Daily summary</strong><small>Include a daily health summary in reports.</small></div><button class="switch on" data-setting="summary"><i></i></button></div></div><button class="primary-btn save-settings" id="saveSettings">${icons.check} Save Settings</button></div>`;
}

function render(){
 let content="",title="",subtitle="";
 if(state.view==="dashboard"){title="Farm Overview";subtitle="Monitor your farm's environmental conditions in real time.";content=dashboardPage()}
 if(state.view==="history"){title="Data History";subtitle="Review recent sensor readings and identify changes over time.";content=historyPage()}
 if(state.view==="analytics"){title="Analytics & Charts";subtitle="Turn sensor readings into practical crop and field insights.";content=analyticsPage()}
 if(state.view==="reports"){title="Reports";subtitle="Create presentation-ready summaries from your farm data.";content=reportsPage()}
 if(state.view==="settings"){title="Settings";subtitle="Configure monitoring, farm profile and notification preferences.";content=settingsPage()}
 if(state.view==="processing"){title="Smart Processing Center";subtitle="Monitor concurrent sensor pipelines, data quality, and agricultural alerts.";content=window.renderProcessing()}
 document.getElementById("app").innerHTML=shell(content,title,subtitle);
 window.__agriState=state;
 bindCommon();
 bindView();
 if(state.view==="processing" && window.bindProcessing)window.bindProcessing();
 // COA lab removed; agricultural workflows only.
}

function bindCommon(){
 document.querySelectorAll(".nav button").forEach(btn=>btn.addEventListener("click",()=>{state.view=btn.dataset.view;state.search="";render()}));
 const live=document.getElementById("liveToggle");
 if(live)live.addEventListener("click",()=>{state.live=!state.live;toast(state.live?"Live sensor updates enabled":"Live sensor updates paused");render()});
}
function bindView(){
 if(state.view==="dashboard"){
   document.getElementById("locationSelect")?.addEventListener("change",e=>{state.location=e.target.value;state.data={...state.data,...locationData[state.location],location:state.location};render();toast("Switched to "+state.location)});
   document.getElementById("refreshData")?.addEventListener("click",()=>{const d=state.data;state.data={...d,temperature:Math.max(20,Math.min(40,d.temperature+(Math.random()-.35)*1.2)),humidity:Math.max(35,Math.min(85,d.humidity+(Math.random()-.4)*2.4)),soil_moisture:Math.max(20,Math.min(60,d.soil_moisture+(Math.random()-.35)*1.8)),rainfall:Math.max(0,Math.min(12,d.rainfall+(Math.random()-.45)*1.2)),soil_ph:Math.max(5.5,Math.min(7.8,d.soil_ph+(Math.random()-.5)*.08))};render();toast("Sensor data refreshed just now")});
   const updateDashboardChart=()=>{const kind=document.getElementById("dashboardChartType")?.value||"line";const range=document.getElementById("dashboardChartRange")?.value||"7d";const target=document.querySelector(".chart");if(target)target.innerHTML=chartSvg("all",kind,range)};
   document.getElementById("dashboardChartType")?.addEventListener("change",updateDashboardChart);
   document.getElementById("dashboardChartRange")?.addEventListener("change",updateDashboardChart);
 }
 if(state.view==="history"){
   document.getElementById("historySearch")?.addEventListener("input",e=>{state.search=e.target.value;const tbody=document.querySelector(".history-table tbody");if(tbody){const q=state.search.toLowerCase();const rows=historyRows.filter(r=>r.join(" ").toLowerCase().includes(q));tbody.innerHTML=rows.map(r=>`<tr>${r.map((v,i)=>`<td class="${i>2?"numeric":""}">${v}${i===3?" °C":i===4||i===5?" %":i===6?" mm":""}</td>`).join("")}</tr>`).join("")||'<tr><td colspan="8" class="empty">No readings match your search.</td></tr>';document.querySelector(".table-count").textContent=rows.length+" records"}});
   document.getElementById("historyRefresh")?.addEventListener("click",()=>toast("Historical readings refreshed"));
 }
 if(state.view==="analytics"){
   const updateAnalyticsChart=()=>{const metric=document.getElementById("analyticsMetric")?.value||"all";const kind=document.getElementById("analyticsChartType")?.value||"line";const range=document.getElementById("analyticsChartRange")?.value||"7d";const target=document.querySelector(".big-chart");if(target)target.innerHTML=chartSvg(metric,kind,range)};
   ["analyticsMetric","analyticsChartType","analyticsChartRange"].forEach(id=>document.getElementById(id)?.addEventListener("change",updateAnalyticsChart));
 }
 if(state.view==="reports"){
   document.getElementById("downloadReport")?.addEventListener("click",downloadCSV);
   document.querySelectorAll(".report-action").forEach(b=>b.addEventListener("click",()=>{toast(b.dataset.report.charAt(0).toUpperCase()+b.dataset.report.slice(1)+" report generated");downloadCSV()}));
 }
 if(state.view==="settings"){
   document.querySelectorAll(".switch").forEach(b=>b.addEventListener("click",()=>{const key=b.dataset.setting;if(key==="live")state.live=!state.live;if(key==="auto")state.autoRefresh=!state.autoRefresh;if(key==="notifications")state.notifications=!state.notifications;render()}));
   document.getElementById("settingField")?.addEventListener("change",e=>{state.location=e.target.value;state.data={...state.data,...locationData[state.location],location:state.location}});
   document.getElementById("saveSettings")?.addEventListener("click",()=>toast("Settings saved successfully"));
 }
}
function downloadCSV(){
 const rows=[["Date","Time","Field","Temperature C","Humidity %","Soil Moisture %","Rainfall mm","Soil pH"],...historyRows];
 const csv=rows.map(r=>r.join(",")).join("\n");
 const blob=new Blob([csv],{type:"text/csv"}),url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download="agricultural-dashboard-report.csv";a.click();URL.revokeObjectURL(url);toast("CSV report downloaded");
}
async function boot(){
 try{const res=await fetch("/api/dashboard");if(res.ok){const json=await res.json();if(json.latest){state.data=json.latest;state.location=json.latest.location||state.location}}}catch(e){}
 render();
}
boot();
setInterval(()=>{if(!state.live||state.view!=="dashboard")return;const d=state.data;state.data={...d,temperature:Math.max(20,Math.min(40,d.temperature+(Math.random()-.5)*.18)),humidity:Math.max(35,Math.min(85,d.humidity+(Math.random()-.5)*.35)),soil_moisture:Math.max(20,Math.min(60,d.soil_moisture+(Math.random()-.48)*.22)),rainfall:Math.max(0,Math.min(12,d.rainfall+(Math.random()-.55)*.08)),soil_ph:Math.max(5.5,Math.min(7.8,d.soil_ph+(Math.random()-.5)*.01))};render()},7000);