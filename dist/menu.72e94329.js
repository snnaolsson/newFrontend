!async function(){let e=await fetch("https://backend-yzf1.onrender.com/api/menu");if(e.ok){let t=await e.json(),n=document.getElementById("menu"),a={};t.forEach(e=>{a[e.category]||(a[e.category]=[]),a[e.category].push(e)}),Object.keys(a).forEach(e=>{let t=document.createElement("div");t.classList.add("meny-div");let c=document.createElement("h2");c.innerText=e,t.appendChild(c),a[e].forEach(e=>{let n=document.createElement("div");n.classList.add("menu-item"),n.innerHTML=`
                    <h3>${e.name}</h3>
                    <p>${e.description}</p>
                `,t.appendChild(n)}),n.appendChild(t)})}else console.error("Failed to fetch menu items:",e.status)}();
//# sourceMappingURL=menu.72e94329.js.map
