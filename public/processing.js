(() => {
  const metrics = { processed: 1248, latency: 42, queue: 18, runs: 0, imageUrl: "", lastBatch: 0 };
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  window.renderProcessing = function () {
    const d = window.__agriState ? window.__agriState.data : {temperature:27.5,humidity:61.2,soil_moisture:34.8,soil_ph:6.7,location:"Selected field"};
    return `
      <section class="pc-banner">
        <div class="pc-banner-copy"><span class="pc-kicker">AGRICULTURAL COMPUTE / OVERVIEW</span><h3>From sensor signals to smarter field decisions.</h3><p>Inspect data quality, simulate concurrent processing, and evaluate field-level thresholds from one workspace.</p><div class="pc-banner-tags"><span><i class="pc-pulse"></i> Pipeline ready</span><span>4 processing stages</span><span>Field: ${escapeHtml(d.location || "Selected field")}</span></div></div>
        <div class="pc-orbit" aria-hidden="true"><div class="pc-orbit-ring ring-one"></div><div class="pc-orbit-ring ring-two"></div><div class="pc-orbit-core"> ${window.__agriState ? "AG" : "AG"} </div><i class="orbit-node node-one"></i><i class="orbit-node node-two"></i><i class="orbit-node node-three"></i></div>
      </section>
      <section class="pc-metrics">
        <article class="pc-metric"><div class="pc-metric-top"><span>Records processed</span><span class="pc-metric-icon">↗</span></div><strong id="pcProcessed">${metrics.processed.toLocaleString()}</strong><small><i class="pc-status-dot"></i> Demo workload counter</small><div class="pc-mini-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></article>
        <article class="pc-metric"><div class="pc-metric-top"><span>Batch latency</span><span class="pc-metric-icon">◷</span></div><strong id="pcLatency">${metrics.latency}<em> ms</em></strong><small>Simulated end-to-end estimate</small><div class="pc-latency-track"><i id="pcLatencyBar" style="width:28%"></i></div></article>
        <article class="pc-metric"><div class="pc-metric-top"><span>Queue depth</span><span class="pc-metric-icon">≋</span></div><strong id="pcQueue">${metrics.queue}</strong><small><span id="pcQueueState">Waiting for next batch</span></small><div class="pc-queue-track"><i id="pcQueueBar" style="width:36%"></i></div></article>
        <article class="pc-metric"><div class="pc-metric-top"><span>Worker pool</span><span class="pc-metric-icon">⠿</span></div><strong><span id="pcWorkerValue">4</span><em> workers</em></strong><small>Concurrent worker simulation</small><div class="pc-worker-dots" id="pcWorkerDots"><i></i><i></i><i></i><i></i></div></article>
      </section>
      <section class="pc-layout">
        <article class="pc-card pc-pipeline-card">
          <div class="pc-card-head"><div><span class="pc-kicker">EXECUTION FLOW</span><h3>Concurrent data pipeline</h3><p>Each stage prepares agricultural sensor data for the next step.</p></div><span class="pc-ready-pill"><i></i> Ready</span></div>
          <div class="pc-pipeline" id="pcPipeline">
            <div class="pc-stage" data-stage="ingest"><span class="pc-stage-num">01</span><div class="pc-stage-icon">⇣</div><strong>Ingest</strong><small>Collect sensor streams</small><span class="pc-stage-state">Standby</span></div><div class="pc-stage-connector"><i></i></div>
            <div class="pc-stage" data-stage="validate"><span class="pc-stage-num">02</span><div class="pc-stage-icon">✓</div><strong>Validate</strong><small>Check ranges & missing data</small><span class="pc-stage-state">Standby</span></div><div class="pc-stage-connector"><i></i></div>
            <div class="pc-stage" data-stage="analyze"><span class="pc-stage-num">03</span><div class="pc-stage-icon">⌘</div><strong>Analyze</strong><small>Run parallel calculations</small><span class="pc-stage-state">Standby</span></div><div class="pc-stage-connector"><i></i></div>
            <div class="pc-stage" data-stage="respond"><span class="pc-stage-num">04</span><div class="pc-stage-icon">↗</div><strong>Respond</strong><small>Prepare alerts & insights</small><span class="pc-stage-state">Standby</span></div>
          </div>
          <div class="pc-runbar"><label class="field-label">Parallel workers<select id="pcWorkers"><option value="2">2 workers</option><option value="4" selected>4 workers</option><option value="8">8 workers</option></select></label><button class="primary-btn pc-run-btn" id="pcRun">Run processing batch <span>→</span></button></div>
          <div class="pc-run-result" id="pcResult" role="status"><span class="pc-result-indicator"></span><span>Pipeline is idle. Run a batch to see the stages animate.</span></div>
        </article>
        <article class="pc-card pc-quality-card">
          <div class="pc-card-head"><div><span class="pc-kicker">INPUT INSPECTION</span><h3>Field data quality</h3><p>Current selected field snapshot</p></div><span class="pc-quality-score" id="pcQualityScore">--<small>/ 100</small></span></div>
          <div class="pc-quality-list">
            <div class="pc-quality-row"><span class="pc-quality-symbol temp">°</span><div class="pc-quality-info"><span>Temperature</span><small>Expected: −10 to 60 °C</small></div><strong>${escapeHtml(d.temperature)} °C</strong><i class="pc-check" id="pcCheckTemp">✓</i></div>
            <div class="pc-quality-row"><span class="pc-quality-symbol hum">%</span><div class="pc-quality-info"><span>Humidity</span><small>Expected: 0 to 100%</small></div><strong>${escapeHtml(d.humidity)}%</strong><i class="pc-check" id="pcCheckHum">✓</i></div>
            <div class="pc-quality-row"><span class="pc-quality-symbol moist">≈</span><div class="pc-quality-info"><span>Soil moisture</span><small>Expected: 0 to 100%</small></div><strong>${escapeHtml(d.soil_moisture)}%</strong><i class="pc-check" id="pcCheckMoist">✓</i></div>
            <div class="pc-quality-row"><span class="pc-quality-symbol ph">pH</span><div class="pc-quality-info"><span>Soil pH</span><small>Expected: 0 to 14</small></div><strong>${escapeHtml(d.soil_ph)}</strong><i class="pc-check" id="pcCheckPh">✓</i></div>
          </div>
          <div class="pc-quality-foot"><span class="pc-quality-legend"><i></i> Valid reading</span><span id="pcQualityCaption">Range checks are local demo checks</span></div>
        </article>
      </section>
      <section class="pc-layout pc-bottom-layout">
        <article class="pc-card">
          <div class="pc-card-head"><div><span class="pc-kicker">RULE ENGINE</span><h3>Agricultural alert thresholds</h3><p>Adjust limits and evaluate the current field snapshot.</p></div><span class="pc-outline-icon">⌁</span></div>
          <div class="pc-threshold-grid"><label class="field-label">Minimum soil moisture (%)<input id="pcMoisture" type="number" min="0" max="100" value="30"></label><label class="field-label">Maximum temperature (°C)<input id="pcTemp" type="number" min="-10" max="60" value="32"></label></div>
          <button class="outline-btn pc-evaluate-btn" id="pcEvaluate">Evaluate current readings <span>→</span></button><div id="pcAlerts" class="pc-alerts" aria-live="polite"><div class="pc-alert-empty">Run an evaluation to see whether this field crosses your thresholds.</div></div>
        </article>
        <article class="pc-card pc-image-card">
          <div class="pc-card-head"><div><span class="pc-kicker">OPTIONAL INPUT</span><h3>Crop image ingestion</h3><p>Preview a crop image as a pipeline input.</p></div><span class="pc-outline-icon">▧</span></div>
          <label class="pc-upload-zone" for="pcImage"><input id="pcImage" type="file" accept="image/png,image/jpeg,image/webp"><span class="pc-upload-symbol">↑</span><strong>Drop an image here or <u>browse files</u></strong><small>PNG, JPG or WebP · preview only</small></label>
          <div id="pcPreview" class="pc-image-preview"><span class="pc-image-placeholder">Image preview appears here</span></div>
          <div class="pc-image-actions"><span id="pcImageResult">No image selected</span><button class="outline-btn" id="pcImageRun" disabled>Validate input</button></div>
          <p class="pc-disclaimer">This is an input preview only. No crop-health model or disease diagnosis is running.</p>
        </article>
      </section>
      <div class="pc-demo-note"><strong>Demo transparency</strong><span>Worker execution, queue depth, record counts, and latency are simulated in the browser. Real throughput metrics require connected sensor ingestion and backend workers.</span></div>`;
  };
  window.bindProcessing = function () {
    const $ = id => document.getElementById(id);
    const run = $("pcRun");
    const setResult = (message, active = false) => { const el = $("pcResult"); if(el) el.innerHTML = '<span class="pc-result-indicator '+(active?'active':'')+'"></span><span>'+message+'</span>'; };
    const data = () => window.__agriState ? window.__agriState.data : {};
    const checkQuality = () => {
      const d = data();
      const checks = [
        ["pcCheckTemp", Number(d.temperature), -10, 60],
        ["pcCheckHum", Number(d.humidity), 0, 100],
        ["pcCheckMoist", Number(d.soil_moisture), 0, 100],
        ["pcCheckPh", Number(d.soil_ph), 0, 14]
      ];
      let valid = 0;
      checks.forEach(([id,value,min,max]) => { const el=$(id); if(!el)return; const ok=Number.isFinite(value)&&value>=min&&value<=max; if(ok)valid++;el.classList.toggle("invalid",!ok);el.textContent=ok?"✓":"!"; });
      $("pcQualityScore").innerHTML = Math.round(valid/checks.length*100)+'<small>/ 100</small>';
      $("pcQualityCaption").textContent = valid===checks.length ? "All four readings passed range checks" : (checks.length-valid)+" reading(s) need review";
    };
    checkQuality();
    const workerSelect=$("pcWorkers");
    if(workerSelect)workerSelect.onchange=()=>{const n=Number(workerSelect.value);$("pcWorkerValue").textContent=n;$("pcWorkerDots").innerHTML=Array.from({length:n},()=>"<i></i>").join("");};
    if(run)run.onclick=()=>{
      if(run.disabled)return;
      run.disabled=true;run.classList.add("is-running");run.innerHTML='<span class="pc-spinner"></span> Processing batch…';
      const workers=Number(workerSelect.value),batch=120+Math.floor(Math.random()*80);
      const stages=["ingest","validate","analyze","respond"];let i=0;
      document.querySelectorAll(".pc-stage").forEach(el=>{el.classList.remove("is-done","is-active");el.querySelector(".pc-stage-state").textContent="Standby";});
      document.querySelectorAll(".pc-stage-connector").forEach(el=>el.classList.remove("is-flowing"));
      setResult("Starting simulated batch with "+workers+" workers…",true);
      const step=()=>{
        if(i>0){const prev=document.querySelector('[data-stage="'+stages[i-1]+'"]');if(prev){prev.classList.remove("is-active");prev.classList.add("is-done");prev.querySelector(".pc-stage-state").textContent="Complete";}const conn=prev&&prev.nextElementSibling;if(conn)conn.classList.add("is-flowing");}
        if(i<stages.length){const current=document.querySelector('[data-stage="'+stages[i]+'"]');current.classList.add("is-active");current.querySelector(".pc-stage-state").textContent="Running";setResult("Stage "+(i+1)+" of 4 · "+current.querySelector("strong").textContent+" in progress",true);i++;window.setTimeout(step,360);}
        else{
          metrics.runs++;metrics.processed+=batch;metrics.lastBatch=batch;metrics.queue=Math.max(0,metrics.queue+Math.floor(Math.random()*8)-10);metrics.latency=Math.max(12,Math.round(150/workers+Math.random()*12));
          $("pcProcessed").textContent=metrics.processed.toLocaleString();$("pcLatency").innerHTML=metrics.latency+"<em> ms</em>";$("pcQueue").textContent=metrics.queue;$("pcLatencyBar").style.width=Math.min(96,metrics.latency/1.8)+"%";$("pcQueueBar").style.width=Math.min(100,metrics.queue*2)+"%";$("pcQueueState").textContent=metrics.queue?"Waiting for next batch":"Queue clear";
          document.querySelectorAll(".pc-stage").forEach(el=>{el.classList.remove("is-active");el.classList.add("is-done");el.querySelector(".pc-stage-state").textContent="Complete";});
          setResult("Batch "+metrics.runs+" complete · "+batch+" sample records handled by "+workers+" simulated workers.",false);run.disabled=false;run.classList.remove("is-running");run.innerHTML='Run another batch <span>→</span>';
        }
      };step();
    };
    const evaluate=$("pcEvaluate");
    if(evaluate)evaluate.onclick=()=>{
      const d=data(),moisture=Number($("pcMoisture").value),temp=Number($("pcTemp").value),alerts=[];
      if(!Number.isFinite(moisture)||moisture<0||moisture>100||!Number.isFinite(temp)||temp< -10||temp>60){$("pcAlerts").innerHTML='<div class="pc-alert-item warning"><strong>Check threshold values</strong><span>Enter moisture from 0–100% and temperature from −10 to 60 °C.</span></div>';return;}
      if(Number(d.soil_moisture)<moisture)alerts.push(["Low soil moisture","Check irrigation needs for the selected field."]);
      if(Number(d.temperature)>temp)alerts.push(["High temperature","Review heat-stress risk for current field conditions."]);
      $("pcAlerts").innerHTML=alerts.length?alerts.map(([title,desc])=>'<div class="pc-alert-item warning"><strong>'+title+'</strong><span>'+desc+'</span></div>').join(""):'<div class="pc-alert-item success"><strong>No threshold alerts</strong><span>Current readings are within the selected demo thresholds.</span></div>';
    };
    const input=$("pcImage");
    if(input)input.onchange=e=>{
      const f=e.target.files&&e.target.files[0];if(!f)return;
      if(!/^image\/(png|jpeg|webp)$/.test(f.type)){ $("pcImageResult").textContent="Choose a PNG, JPG or WebP image.";return; }
      if(metrics.imageUrl)URL.revokeObjectURL(metrics.imageUrl);metrics.imageUrl=URL.createObjectURL(f);
      $("pcPreview").innerHTML='<img alt="Selected crop image preview" src="'+metrics.imageUrl+'">';
      $("pcImageResult").textContent=f.name+" ready for input validation.";$("pcImageRun").disabled=false;
    };
    const imageRun=$("pcImageRun");
    if(imageRun)imageRun.onclick=()=>{$("pcImageResult").textContent="Image input format validated in this browser demo; no crop diagnosis was performed.";imageRun.textContent="Input validated";};
  };
})();