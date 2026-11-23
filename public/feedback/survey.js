(function () {
  "use strict";
  var CFG = window.VIETLEAP_FEEDBACK || {};
  var HARD = ["Collecting data", "Cleaning data", "Statistics or econometrics", "Visualization and dashboards", "Programming", "Spreadsheets", "Economic and policy analysis", "Using AI responsibly"];
  var SOFT = ["Teamwork", "Problem-solving under time pressure", "Critical thinking", "Communicating in English", "Presenting and storytelling with data", "Creativity", "Time management", "Adaptability and leadership"];
  var SKILLS = HARD.concat(SOFT);
  var N5 = ["1", "2", "3", "4", "5"];

  var SECTIONS = [
    { title: "1. About you", qs: [
      { id: "q1", label: "1. Full name", type: "text", req: true },
      { id: "q2", label: "2. University", type: "text", req: true },
      { id: "q3", label: "3. Year of study", type: "radio", req: true, options: ["Year 1", "Year 2", "Year 3", "Year 4", "Postgraduate", "Other"] },
      { id: "q4", label: "4. Your main field of study", type: "text", req: true }
    ]},
    { title: "2. Overall experience", qs: [
      { id: "q5", label: "5. Overall, how satisfied are you with the hackathon?", type: "scale", req: true, lo: 1, hi: 5, left: "Very dissatisfied", right: "Very satisfied" },
      { id: "q6", label: "6. How likely are you to recommend VietLeap Hackathon to a friend or classmate?", type: "scale", req: true, lo: 0, hi: 10, left: "Not at all likely", right: "Extremely likely" },
      { id: "q7", label: "7. How many people did you tell about VietLeap? (Excluding participants)", type: "radio", req: true, options: ["0", "1-2", "3-5", "6-10", "More than 10"] },
      { id: "q8", label: "8. If you told someone, how did you tell them?", type: "checkbox", help: "Skip this question if you answered 0 above.", options: ["In person", "Zalo or Messenger", "Facebook or Instagram post or story", "LinkedIn", "Email", "Other"] },
      { id: "q9a", label: "9a. Before the hackathon, what did you hope to gain?", type: "checkbox", req: true, max: 3, help: "Choose up to 3.", options: ["Hands-on experience with real data", "Technical or data skills", "Teamwork and communication skills", "Meeting people from other universities and disciplines", "Meeting mentors, judges and professionals", "Experience for my CV", "Prizes or recognition", "Testing myself under time pressure", "Other"] },
      { id: "q9b", label: "9b. How well were these hopes met?", type: "radio", req: true, options: ["Fully met", "Mostly met", "Partly met", "Not met"] },
      { id: "q9c", label: "9c. Was there anything you hoped for that the hackathon did not offer?", type: "para" }
    ]},
    { title: "3. Program components", qs: [
      { id: "q10", label: "10. Please rate each part of the program.", type: "grid", req: true, help: "1 = very poor, 5 = excellent",
        rows: ["Opening ceremony", "Workshops and expert talks", "Online meeting with mentors", "Mentor support during hacking", "Team formation", "Datasets and tools provided (including FiinQuant)", "Final pitches and Q&A", "Judges' feedback", "Closing ceremony and awards"],
        cols: ["1", "2", "3", "4", "5", "Did not attend"] },
      { id: "q11", label: "11. Which part was the most valuable for you, and why?", type: "para" },
      { id: "q12", label: "12. Which part could be improved most, and how?", type: "para" }
    ]},
    { title: "4. Organization and logistics", qs: [
      { id: "q13", label: "13. Please rate the following.", type: "grid", req: true, help: "1 = very poor, 5 = excellent",
        rows: ["Clarity of communication before the event", "Guidebook and rules", "Venue and facilities", "Schedule and time management", "Food and refreshments", "Responsiveness of the Organizers"], cols: N5 },
      { id: "q14", label: "14. How clear were the theme, rules and judging criteria?", type: "scale", req: true, lo: 1, hi: 5, left: "Not clear", right: "Very clear" },
      { id: "q15", label: "15. Was the 24-hour format a suitable length?", type: "radio", req: true, options: ["Too short", "About right", "Too long"] }
    ]},
    { title: "5. Teamwork", qs: [
      { id: "q16", label: "16. How well did your team work together?", type: "scale", req: true, lo: 1, hi: 5, left: "Not well", right: "Very well" },
      { id: "q17", label: "17. How do you feel about the team formation by the Organizers?", type: "radio", req: true, options: ["Very good", "Good", "Neutral", "Poor", "Very poor"] },
      { id: "q18", label: "18. What did you learn from working with teammates from other disciplines?", type: "para" }
    ]},
    { title: "6. Skills before and after", desc: "Rate each skill from 1 (beginner) to 5 (advanced). Please answer from memory for “before the hackathon”.", qs: [
      { id: "q19a", label: "19a. Your level BEFORE the hackathon", type: "grid", req: true, help: "1 = beginner, 5 = advanced", rows: SKILLS, cols: N5 },
      { id: "q19b", label: "19b. Your level NOW", type: "grid", req: true, help: "1 = beginner, 5 = advanced", rows: SKILLS, cols: N5 },
      { id: "q20", label: "20. Which three skills improved the most?", type: "checkbox", max: 3, help: "Choose up to 3.", options: SKILLS },
      { id: "q21", label: "21. How interested are you in a career or further study that uses data for policy or economic decisions?", type: "scale", req: true, lo: 1, hi: 5, left: "Not interested", right: "Very interested" }
    ]},
    { title: "7. Looking ahead", qs: [
      { id: "q22", label: "22. Would you join a future VietLeap event?", type: "radio", req: true, options: ["Definitely", "Probably", "Not sure", "Probably not"] },
      { id: "q23", label: "23. Which activities would you like next time?", type: "checkbox", options: ["Longer hackathon", "More workshops", "More mentor time", "Industry visits", "Career or networking session", "Other"] },
      { id: "q24", label: "24. How did you first hear about VietLeap Hackathon?", type: "radio", req: true, options: ["Facebook", "Instagram", "Zalo", "University or lecturer", "Friend", "Other"] }
    ]},
    { title: "8. Open feedback", qs: [
      { id: "q25", label: "25. What was the best part of your experience?", type: "para" },
      { id: "q26", label: "26. What should we change for next time?", type: "para" },
      { id: "q27", label: "27. Any other comments for the Organizers, judges or mentors?", type: "para" },
      { id: "q28", label: "28. May we quote your feedback anonymously in our reports and posts?", type: "radio", req: true, options: ["Yes", "No"] },
      { id: "q29", label: "29. May we contact you about future events?", type: "radio", req: true, options: ["Yes", "No"] }
    ]}
  ];

  function el(tag, attrs, kids) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") e.className = attrs[k]; else if (k === "text") e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { e.appendChild(c); });
    return e;
  }

  function buildQuestion(q) {
    var box = el("fieldset", { class: "q", "data-id": q.id });
    var lg = el("legend", { text: q.label + (q.req ? " *" : "") });
    box.appendChild(lg);
    if (q.help) box.appendChild(el("p", { class: "help", text: q.help }));
    var name = q.id;
    if (q.type === "text") {
      box.appendChild(el("input", { type: "text", name: name, autocomplete: "off", maxlength: "200" }));
    } else if (q.type === "para") {
      box.appendChild(el("textarea", { name: name, rows: "3", maxlength: "3000" }));
    } else if (q.type === "radio" || q.type === "checkbox") {
      var list = el("div", { class: "opts" });
      q.options.forEach(function (o, i) {
        var id = name + "_" + i;
        var lab = el("label", { class: "opt", for: id }, [el("input", { type: q.type, name: name, id: id, value: o }), el("span", { text: o })]);
        list.appendChild(lab);
      });
      box.appendChild(list);
    } else if (q.type === "scale") {
      var row = el("div", { class: "scale" });
      row.appendChild(el("span", { class: "end", text: q.left }));
      var wrap = el("div", { class: "nums" });
      for (var v = q.lo; v <= q.hi; v++) {
        var sid = name + "_" + v;
        wrap.appendChild(el("label", { class: "num", for: sid }, [el("input", { type: "radio", name: name, id: sid, value: String(v) }), el("span", { text: String(v) })]));
      }
      row.appendChild(wrap);
      row.appendChild(el("span", { class: "end", text: q.right }));
      box.appendChild(row);
    } else if (q.type === "grid") {
      var tw = el("div", { class: "gridwrap" });
      var t = el("table", { class: "grid" });
      var head = el("tr", {}, [el("th", { text: "" })]);
      q.cols.forEach(function (c) { head.appendChild(el("th", { text: c })); });
      t.appendChild(head);
      q.rows.forEach(function (r, ri) {
        var tr = el("tr", {}, [el("td", { class: "rowlab", text: r })]);
        q.cols.forEach(function (c, ci) {
          var gid = name + "_" + ri + "_" + ci;
          tr.appendChild(el("td", {}, [el("input", { type: "radio", name: name + "__" + ri, id: gid, value: c, "aria-label": r + ": " + c })]));
        });
        t.appendChild(tr);
      });
      tw.appendChild(t);
      box.appendChild(tw);
    }
    box.appendChild(el("p", { class: "err", role: "alert", text: "" }));
    return box;
  }

  function render() {
    var root = document.getElementById("questions");
    SECTIONS.forEach(function (s) {
      var sec = el("section", { class: "sec" });
      sec.appendChild(el("h2", { text: s.title }));
      if (s.desc) sec.appendChild(el("p", { class: "secdesc", text: s.desc }));
      s.qs.forEach(function (q) { sec.appendChild(buildQuestion(q)); });
      root.appendChild(sec);
    });
  }

  function val(q, form) {
    var n = q.id, i;
    if (q.type === "text" || q.type === "para") return (form.elements[n].value || "").trim();
    if (q.type === "radio" || q.type === "scale") {
      var c = form.querySelector('input[name="' + n + '"]:checked');
      return c ? c.value : "";
    }
    if (q.type === "checkbox") {
      return Array.prototype.map.call(form.querySelectorAll('input[name="' + n + '"]:checked'), function (x) { return x.value; });
    }
    if (q.type === "grid") {
      var o = {};
      for (i = 0; i < q.rows.length; i++) {
        var g = form.querySelector('input[name="' + n + "__" + i + '"]:checked');
        o[q.rows[i]] = g ? g.value : "";
      }
      return o;
    }
  }
  function filled(q, v) {
    if (q.type === "checkbox") return v.length > 0;
    if (q.type === "grid") return Object.keys(v).every(function (k) { return v[k] !== ""; });
    return v !== "";
  }

  function collect(form) {
    var answers = {}, ok = true, first = null;
    SECTIONS.forEach(function (s) {
      s.qs.forEach(function (q) {
        var v = val(q, form), msg = "";
        if (q.req && !filled(q, v)) msg = q.type === "grid" ? "Please answer every row." : "This question is required.";
        if (!msg && q.type === "checkbox" && q.max && v.length > q.max) msg = "Please choose at most " + q.max + ".";
        var box = form.querySelector('fieldset[data-id="' + q.id + '"]');
        box.classList.toggle("bad", !!msg);
        box.querySelector(".err").textContent = msg;
        if (msg) { ok = false; if (!first) first = box; }
        answers[q.label] = v;
      });
    });
    return { ok: ok, first: first, answers: answers };
  }

  // ---- Encryption: AES-256-GCM for the answers, RSA-OAEP(SHA-256) for the AES key ----
  function b64(buf) {
    var bytes = new Uint8Array(buf), s = "";
    for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s);
  }
  async function encryptAnswers(obj) {
    var enc = new TextEncoder();
    var pub = await crypto.subtle.importKey("jwk", CFG.PUBLIC_KEY, { name: "RSA-OAEP", hash: "SHA-256" }, false, ["encrypt"]);
    var aes = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt"]);
    var iv = crypto.getRandomValues(new Uint8Array(12));
    var ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, aes, enc.encode(JSON.stringify(obj)));
    var raw = await crypto.subtle.exportKey("raw", aes);
    var wrapped = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, pub, raw);
    return "VLF1." + btoa(JSON.stringify({ k: b64(wrapped), iv: b64(iv), c: b64(ct) }));
  }

  async function send(blob) {
    var res;
    if (CFG.WEB3FORMS_KEY) {
      res = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: CFG.WEB3FORMS_KEY, subject: "VietLeap feedback (encrypted)", from_name: "VietLeap feedback form", message: blob })
      });
    } else if (CFG.WORKER_URL) {
      res = await fetch(CFG.WORKER_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ payload: blob }) });
    } else { throw new Error("No destination configured"); }
    if (!res.ok) throw new Error("Server answered " + res.status);
  }

  function configured() { return !!(CFG.PUBLIC_KEY && (CFG.WORKER_URL || CFG.WEB3FORMS_KEY)); }

  function init() {
    render();
    var form = document.getElementById("survey"), status = document.getElementById("status"), btn = document.getElementById("submit");
    if (!configured()) {
      document.getElementById("notopen").hidden = false;
      btn.disabled = true;
    }
    try { if (localStorage.getItem("vlf_done") === "1") document.getElementById("already").hidden = false; } catch (e) {}
    form.addEventListener("submit", async function (ev) {
      ev.preventDefault();
      if (form.elements["website"].value) return; // honeypot
      var r = collect(form);
      if (!r.ok) { status.textContent = "Please fix the highlighted questions."; status.className = "status bad"; r.first.scrollIntoView({ behavior: "smooth", block: "center" }); return; }
      btn.disabled = true; status.className = "status"; status.textContent = "Encrypting and sending…";
      try {
        var blob = await encryptAnswers({ submittedAt: new Date().toISOString(), answers: r.answers });
        await send(blob);
        try { localStorage.setItem("vlf_done", "1"); } catch (e) {}
        form.hidden = true;
        document.getElementById("thanks").hidden = false;
        window.scrollTo({ top: 0 });
      } catch (e) {
        btn.disabled = false; status.className = "status bad";
        status.textContent = "Sorry, we could not send your answers. Please check your connection and try again. (" + e.message + ")";
      }
    });
  }
  document.addEventListener("DOMContentLoaded", init);
})();
