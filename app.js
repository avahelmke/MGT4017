const projects = [
 {id:1,title:"Social Media Strategy",company:"Northstar Studio",category:"Marketing",mode:"Remote",pay:"£250",duration:"2 weeks",skills:["Content planning","Research","Social media"],color:"cover-blue",symbol:"✳",description:"Help a growing independent studio shape a practical social media strategy. You’ll review the current channels, identify content opportunities and create a short recommendations deck the team can put into action."},
 {id:2,title:"Website Refresh",company:"Goodfolk Creative",category:"Design",mode:"Hybrid",pay:"£400",duration:"3 weeks",skills:["Figma","UX research","Visual design"],color:"cover-yellow",symbol:"▥",description:"Support a small creative business as it refreshes its website. Review the current user journey, suggest improvements and create a set of visual concepts for key pages."},
 {id:3,title:"Develop a Python API",company:"Brightside Tech",category:"Technology",mode:"Remote",pay:"£550",duration:"4 weeks",skills:["Python","APIs","Problem solving"],color:"cover-lilac",symbol:"⌘",description:"Work with a small product team to build and document a lightweight API endpoint. This project is suitable for a student who wants to apply programming knowledge to a real brief."},
 {id:4,title:"Competitor Research",company:"The Market Edit",category:"Marketing",mode:"Remote",pay:"£180",duration:"1 week",skills:["Market research","Excel","Analysis"],color:"cover-green",symbol:"⌕",description:"Research a selected group of competitors and summarise their positioning, customer messaging and digital presence. Deliver a concise findings report with actionable observations."},
 {id:5,title:"Brand Identity Concepts",company:"Morrow & Co.",category:"Design",mode:"Remote",pay:"£320",duration:"2 weeks",skills:["Branding","Illustrator","Creative thinking"],color:"cover-pink",symbol:"✺",description:"Create initial brand identity directions for an early-stage consumer business. Explore visual references, typography and colour, then present two considered creative routes."},
 {id:6,title:"Dashboard Data Visualisation",company:"Orbit Analytics",category:"Technology",mode:"Hybrid",pay:"£475",duration:"3 weeks",skills:["Data visualisation","Excel","Power BI"],color:"cover-dark",symbol:"▤",description:"Help turn a set of business metrics into a clear dashboard concept. Organise the information, identify useful views and prepare a prototype for stakeholder feedback."}
];
let activeFilter = "All";
let visibleCount = 6;
const projectGrid = document.getElementById("projectGrid");
const searchInput = document.getElementById("projectSearch");
const toast = document.getElementById("toast");

function renderProjects(){
 const query = searchInput.value.trim().toLowerCase();
 const filtered = projects.filter(p => (activeFilter==="All" || p.category===activeFilter) &&
   [p.title,p.company,p.category,p.mode,...p.skills].join(" ").toLowerCase().includes(query));
 projectGrid.innerHTML = filtered.slice(0,visibleCount).map(p => `
  <article class="project-card" tabindex="0" role="button" aria-label="View ${p.title}" data-project="${p.id}">
   <div class="project-cover ${p.color}"><span class="cover-label">${p.category.toUpperCase()} · ${p.mode.toUpperCase()}</span><span class="cover-orb"></span><span class="cover-mark">${p.symbol}</span></div>
   <div class="project-card-body"><div class="card-meta">${p.duration.toUpperCase()} · PAID PROJECT</div><h3>${p.title}</h3><div class="company">${p.company}</div>
   <div class="card-footer"><div class="pay">${p.pay} <small>/ project</small></div><span class="apply-link">View project ↗</span></div></div>
  </article>`).join("");
 document.getElementById("emptyState").hidden = filtered.length>0;
 document.getElementById("showMore").style.display = filtered.length>visibleCount ? "inline-flex" : "none";
}
renderProjects();
searchInput.addEventListener("input",renderProjects);
document.querySelectorAll(".filter-pill").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filter-pill").forEach(b=>b.classList.remove("active"));
 btn.classList.add("active");activeFilter=btn.dataset.filter;renderProjects();
}));
document.getElementById("viewAll").addEventListener("click",()=>{activeFilter="All";searchInput.value="";document.querySelectorAll(".filter-pill").forEach(b=>b.classList.toggle("active",b.dataset.filter==="All"));renderProjects()});
document.getElementById("showMore").addEventListener("click",()=>{visibleCount=projects.length;renderProjects()});

function openModal(id){const el=document.getElementById(id);if(el){el.classList.add("open");el.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}}
function closeModals(){document.querySelectorAll(".modal-backdrop").forEach(m=>{m.classList.remove("open");m.setAttribute("aria-hidden","true")});document.body.style.overflow="";}
document.querySelectorAll("[data-modal]").forEach(b=>b.addEventListener("click",()=>openModal(b.dataset.modal)));
document.querySelectorAll(".modal-close").forEach(b=>b.addEventListener("click",closeModals));
document.querySelectorAll(".modal-backdrop").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)closeModals()}));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModals()});
function showToast(msg){toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3000)}
function openSignup(role){
 document.getElementById("signupRole").value=role;
 document.getElementById("signupTitle").textContent=role==="student"?"Create your student profile.":"Create your business profile.";
 document.getElementById("signupDescription").textContent=role==="student"?"Start discovering paid projects and building experience.":"Find emerging talent and post your first project.";
 document.getElementById("signupEyebrow").textContent=role==="student"?"FOR STUDENTS":"FOR BUSINESSES";
 document.getElementById("organisationLabel").hidden=false;
 document.querySelector("#organisationLabel input").placeholder=role==="student"?"Your university":"Your company";
 document.getElementById("signupFeedback").textContent="";
 closeModals();openModal("signupModal");
}
document.querySelectorAll("[data-role]").forEach(b=>b.addEventListener("click",()=>openSignup(b.dataset.role)));
document.querySelectorAll("[data-scroll]").forEach(b=>b.addEventListener("click",()=>{closeModals();document.querySelector(b.dataset.scroll)?.scrollIntoView({behavior:"smooth"})}));
document.getElementById("signupForm").addEventListener("submit",e=>{e.preventDefault();const role=document.getElementById("signupRole").value;document.getElementById("signupFeedback").textContent=`Demo profile created locally as a ${role}. No information has been stored.`;});
document.getElementById("loginForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("loginFeedback").textContent="This prototype does not have live account authentication yet.";});
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("contactFeedback").textContent="Thanks for your message! This demo form is not connected to an inbox.";e.target.reset()});

projectGrid.addEventListener("click",e=>{const card=e.target.closest("[data-project]");if(card)showProject(Number(card.dataset.project))});
projectGrid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches("[data-project]")){e.preventDefault();showProject(Number(e.target.dataset.project))}});
function showProject(id){
 const p=projects.find(x=>x.id===id);if(!p)return;
 document.getElementById("projectDetail").innerHTML=`
  <div class="detail-cover ${p.color}">${p.symbol}</div><div class="detail-meta">${p.category.toUpperCase()} · ${p.mode.toUpperCase()} · ${p.duration.toUpperCase()}</div>
  <h2 id="detailTitle">${p.title}</h2><div class="detail-company">${p.company}</div>
  <p class="detail-description">${p.description}</p>
  <div class="detail-facts"><div><small>PROJECT PAY</small><strong>${p.pay}</strong></div><div><small>DURATION</small><strong>${p.duration}</strong></div><div><small>WORK STYLE</small><strong>${p.mode}</strong></div></div>
  <strong style="font:700 11px Manrope">Skills you'll use</strong><div class="detail-skills">${p.skills.map(s=>`<span>${s}</span>`).join("")}</div>
  <button class="btn btn-primary full-width" id="applyProject">Apply for this project <span>→</span></button>
  <p class="prototype-disclaimer">Prototype interaction: applications are not submitted to a live business.</p>`;
 document.getElementById("applyProject").addEventListener("click",()=>{closeModals();openSignup("student");document.getElementById("signupFeedback").textContent=`Create a demo student profile to continue your application for ${p.title}.`});
 openModal("projectModal");
}
const steps={
 student:[["01","Create your profile","Showcase your education, skills and interests so businesses can understand what you bring."],["02","Discover & apply","Explore short, paid projects and apply to opportunities that match your skills."],["03","Build experience","Work with a business, complete the brief and grow your portfolio with practical experience."]],
 business:[["01","Create your account","Set up your business profile and tell students a little about your organisation."],["02","Post a project","Share the brief, skills needed, timeline and payment so expectations are clear."],["03","Find emerging talent","Review applications, choose a student and manage the project through completion."]]
};
function renderSteps(role){document.getElementById("stepsGrid").innerHTML=steps[role].map(s=>`<article class="step-card"><span class="step-number">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join("")}
renderSteps("student");
document.querySelectorAll(".audience-tab").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".audience-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderSteps(b.dataset.how)}));
document.getElementById("menuToggle").addEventListener("click",()=>{const nav=document.getElementById("mainNav");const open=nav.classList.toggle("open");document.getElementById("menuToggle").setAttribute("aria-expanded",String(open))});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>{document.getElementById("mainNav").classList.remove("open");document.getElementById("menuToggle").setAttribute("aria-expanded","false")}));
