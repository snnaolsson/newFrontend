// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"b2mJY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "2993e5cb230edc5d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"cHucQ":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", ()=>{
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) window.location.href = "/login.html";
    fetchMenuItems(token);
    fetchBookings(token);
    document.getElementById("logoutButton").addEventListener("click", ()=>{
        localStorage.removeItem("token");
        window.location.href = "/login.html";
    });
});
document.getElementById("addNewItemButton").addEventListener("click", ()=>{
    document.getElementById("menuFormContainer").style.display = "block";
    document.getElementById("menuForm").reset();
    document.getElementById("menuId").value = "";
});
document.getElementById("addNewBookingButton").addEventListener("click", ()=>{
    document.getElementById("bookingFormContainer").style.display = "block";
    document.getElementById("bookingForm").reset();
    document.getElementById("bookingId").value = ""; // Se till att bookingId sätts till ett tomt värde
});
document.getElementById("menuForm").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const menuId1 = document.getElementById("menuId").value;
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const token = localStorage.getItem("token");
    const menuItem = {
        name,
        description,
        category
    };
    let url = "https://backend-yzf1.onrender.com/api/menu";
    let method = "POST";
    if (menuId1) {
        url += `/${menuId1}`;
        method = "PUT";
    }
    const response = await fetch(url, {
        method: method,
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(menuItem)
    });
    if (response.ok) {
        fetchMenuItems(token);
        document.getElementById("menuFormContainer").style.display = "none";
        showNotification(menuId1 ? `${name} har uppdaterats!` : `${name} har lagts till!`);
    } else console.error("Failed to save menu item:", response.status);
});
document.getElementById("bookingForm").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const bookingId = document.getElementById("bookingId").value;
    const name = document.getElementById("bookingName").value;
    const phone = document.getElementById("bookingPhone").value;
    const email = document.getElementById("bookingEmail").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;
    const guests = document.getElementById("bookingGuests").value;
    const specialRequests = document.getElementById("bookingSpecialRequests").value;
    const token = localStorage.getItem("token");
    //Kombinerar datum och tid för att konvertera till ISO 1601-format som databasen har för att kunna skapa bokningar frn gränssnittet
    const datetime = new Date(`${date}T${time}:00Z`).toISOString();
    console.log(datetime);
    const booking = {
        name,
        phone,
        email,
        date: datetime,
        time,
        guests,
        specialRequests
    };
    console.log(booking);
    let url = "https://backend-yzf1.onrender.com/api/bookings";
    let method = "POST";
    if (bookingId) {
        url += `/${bookingId}`;
        method = "PUT";
    }
    const response = await fetch(url, {
        method: method,
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(booking)
    });
    if (response.ok) {
        fetchBookings(token);
        document.getElementById("bookingFormContainer").style.display = "none";
        showNotification(bookingId ? "Booking updated successfully!" : "New booking added!");
    } else {
        const errorData = await response.json();
        console.error("Failed to save booking:", response.status);
        console.error("Error details:", errorData);
    }
});
document.getElementById("cancelButton").addEventListener("click", ()=>{
    document.getElementById("menuFormContainer").style.display = "none";
});
document.getElementById("cancelBookingButton").addEventListener("click", ()=>{
    document.getElementById("bookingFormContainer").style.display = "none";
});
async function fetchMenuItems(token) {
    const response = await fetch("https://backend-yzf1.onrender.com/api/menu", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    if (response.ok) {
        const menuItems = await response.json();
        renderMenuItems(menuItems);
    } else console.error("Failed to fetch menu items:", response.status);
}
function renderMenuItems(menuItems) {
    const menuDiv = document.getElementById("menuItems");
    menuDiv.innerHTML = "";
    menuItems.forEach((item)=>{
        const itemDiv = document.createElement("div");
        itemDiv.id = `menuItem-${item._id}`; // Unikt ID för varje menyalternativ
        itemDiv.classList.add("menu-item-div");
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <button class='edit-buttons' onclick="editMenuItem('${item._id}')">Uppdatera</button>
            <button class='delete-buttons' onclick="deleteMenuItem('${item._id}')">Ta bort</button>
        `;
        menuDiv.appendChild(itemDiv);
    });
}
function editMenuItem(id) {
    const token = localStorage.getItem("token");
    fetch(`https://backend-yzf1.onrender.com/api/menu/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((response)=>{
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    }).then((item)=>{
        // Ta bort tidigare uppdateringsformulär om det finns
        const existingForm = document.getElementById(`editForm-${item._id}`);
        if (existingForm) existingForm.remove();
        // Skapa ett nytt formulär
        const editForm = document.createElement("form");
        editForm.id = `editForm-${item._id}`;
        editForm.innerHTML = `
            <label for="name-${item._id}">Namn:</label>
            <input type="text" id="name-${item._id}" value="${item.name}" required>
            <label for="description-${item._id}">Beskrivning:</label>
            <input type="text" id="description-${item._id}" value="${item.description}" required>
            <label for="category-${item._id}">Kategori:</label>
            <input type="text" id="category-${item._id}" value="${item.category}" required>
            <button type="submit">Spara</button>
            <button type="button" onclick="cancelEdit('${item._id}')">Avbryt</button>
        `;
        // Lägg till en event listener för att hantera formulärsubmits
        editForm.addEventListener("submit", async (e)=>{
            e.preventDefault();
            const updatedName = document.getElementById(`name-${item._id}`).value;
            const updatedDescription = document.getElementById(`description-${item._id}`).value;
            const updatedCategory = document.getElementById(`category-${item._id}`).value;
            const updatedItem = {
                name: updatedName,
                description: updatedDescription,
                category: updatedCategory
            };
            const response = await fetch(`https://backend-yzf1.onrender.com/api/menu/${item._id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedItem)
            });
            if (response.ok) {
                fetchMenuItems(token); // Uppdatera menyn efter ändringen
                showNotification(menuId ? "Menyalternativet har uppdaterats!" : "Nytt menyalternativ har lagts till!");
            } else {
                showNotification("N\xe5got gick fel, f\xf6rs\xf6k igen!", false);
                console.error("Failed to update menu item:", response.status);
            }
        });
        // Hämta elementet för menyalternativet och lägg till formuläret under det
        const itemDiv = document.getElementById(`menuItem-${item._id}`);
        itemDiv.appendChild(editForm);
    }).catch((error)=>console.error("Failed to fetch menu item:", error));
}
function cancelEdit(id) {
    const editForm = document.getElementById(`editForm-${id}`);
    if (editForm) editForm.remove(); // Ta bort formuläret om användaren avbryter redigeringen
}
async function deleteMenuItem(id) {
    if (confirm("\xc4r du s\xe4ker p\xe5 att du vill ta bort denna menyartikel?")) {
        const token = localStorage.getItem("token");
        const response = await fetch(`https://backend-yzf1.onrender.com/api/menu/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (response.ok) {
            fetchMenuItems(token);
            showNotification("Menu item deleted successfully!");
        } else console.error("Failed to delete menu item:", response.status);
    }
}
async function fetchBookings(token) {
    const response = await fetch("https://backend-yzf1.onrender.com/api/bookings", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        const bookings = await response.json();
        renderBookings(bookings);
    } else console.error("Failed to fetch bookings:", response.status);
}
function renderBookings(bookings) {
    const bookingsDiv = document.getElementById("bookings");
    bookingsDiv.innerHTML = "";
    bookings.forEach((booking)=>{
        const bookingDiv = document.createElement("div");
        bookingDiv.classList.add("booking-item-div");
        bookingDiv.id = `booking-${booking._id}`;
        const bookingDate = new Date(booking.date).toLocaleDateString("sv-SE");
        bookingDiv.innerHTML = `
            <h3>Bokning f\xf6r ${booking.name}</h3>
            <p>E-mail: ${booking.email}</p>
            <p>Phone: ${booking.phone}</p>
            <p>Datum: ${bookingDate}</p>
            <p>Tid: ${booking.time}</p>
            <p>G\xe4ster: ${booking.guests}</p>
            <p>Speciella \xf6nskem\xe5l: ${booking.specialRequests}</p>
             <button class='edit-buttons' onclick="editBooking('${booking._id}')">Uppdatera</button>
            <button class='delete-buttons' onclick="deleteBooking('${booking._id}')">Ta bort</button>
        `;
        bookingsDiv.appendChild(bookingDiv);
    });
}
function editBooking(id) {
    const token = localStorage.getItem("token");
    fetch(`https://backend-yzf1.onrender.com/bookings/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((response)=>{
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    }).then((booking)=>{
        // Ta bort tidigare uppdateringsformulär om det finns
        const existingForm = document.getElementById(`editBookingForm-${booking._id}`);
        if (existingForm) existingForm.remove();
        // Skapa ett nytt formulär
        const editForm = document.createElement("form");
        editForm.id = `editBookingForm-${booking._id}`;
        editForm.innerHTML = `
            <label for="bookingName-${booking._id}">Namn:</label>
            <input type="text" id="bookingName-${booking._id}" value="${booking.name}" required>
            <label for="bookingPhone-${booking._id}">Telefon:</label>
            <input type="text" id="bookingPhone-${booking._id}" value="${booking.phone}" required>
            <label for="bookingEmail-${booking._id}">Email:</label>
            <input type="email" id="bookingEmail-${booking._id}" value="${booking.email}" required>
            <label for="bookingDate-${booking._id}">Datum:</label>
            <input type="date" id="bookingDate-${booking._id}" value="${booking.date}" required>
            <label for="bookingTime-${booking._id}">Tid:</label>
            <input type="time" id="bookingTime-${booking._id}" value="${booking.time}" required>
            <label for="bookingGuests-${booking._id}">G\xe4ster:</label>
            <input type="number" id="bookingGuests-${booking._id}" value="${booking.guests}" required>
            <label for="bookingSpecialRequests-${booking._id}">Speciella \xf6nskem\xe5l:</label>
            <textarea id="bookingSpecialRequests-${booking._id}" required>${booking.specialRequests}</textarea>
            <button type="submit">Spara</button>
            <button type="button" onclick="cancelBookingEdit('${booking._id}')">Avbryt</button>
        `;
        // Lägg till en event listener för att hantera formulärsubmits
        editForm.addEventListener("submit", async (e)=>{
            e.preventDefault();
            const updatedName = document.getElementById(`bookingName-${booking._id}`).value;
            const updatedPhone = document.getElementById(`bookingPhone-${booking._id}`).value;
            const updatedEmail = document.getElementById(`bookingEmail-${booking._id}`).value;
            const updatedDate = document.getElementById(`bookingDate-${booking._id}`).value;
            const updatedTime = document.getElementById(`bookingTime-${booking._id}`).value;
            const updatedGuests = document.getElementById(`bookingGuests-${booking._id}`).value;
            const updatedSpecialRequests = document.getElementById(`bookingSpecialRequests-${booking._id}`).value;
            const updatedBooking = {
                name: updatedName,
                phone: updatedPhone,
                email: updatedEmail,
                date: updatedDate,
                time: updatedTime,
                guests: updatedGuests,
                specialRequests: updatedSpecialRequests
            };
            const response = await fetch(`https://backend-yzf1.onrender.com/api/bookings/${booking._id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedBooking)
            });
            if (response.ok) {
                fetchBookings(token); // Uppdatera listan med bokningar efter ändringen
                showNotification("Booking updated successfully!");
            } else {
                showNotification("N\xe5got gick fel. F\xf6rs\xf6k igen.", false);
                console.error("Failed to update booking:", response.status);
            }
        });
        // Hämta elementet för bokningen och lägg till formuläret under det
        const bookingDiv = document.getElementById(`booking-${booking._id}`);
        bookingDiv.appendChild(editForm);
    }).catch((error)=>console.error("Failed to fetch booking:", error));
}
function cancelBookingEdit(id) {
    const editForm = document.getElementById(`editBookingForm-${id}`);
    if (editForm) editForm.remove(); // Ta bort formuläret om användaren avbryter redigeringen
}
async function deleteBooking(id) {
    if (confirm("\xc4r du s\xe4ker p\xe5 att du vill ta bort denna bokning?")) {
        const token = localStorage.getItem("token");
        const response = await fetch(`https://backend-yzf1.onrender.com/api/bookings/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (response.ok) {
            fetchBookings(token); // Uppdatera listan med bokningar efter radering
            showNotification(`Booking deleted successfully!`);
        } else console.error("Failed to delete booking:", response.status);
    }
}
function showNotification(message, isSuccess = true) {
    const notificationDiv = document.getElementById("notification");
    notificationDiv.style.backgroundColor = isSuccess ? "#4CAF50" : "#f44336"; // Grön för framgång, röd för fel
    notificationDiv.textContent = message;
    notificationDiv.style.display = "block";
    setTimeout(()=>{
        notificationDiv.style.display = "none";
    }, 3000); // Visar meddelandet i 3 sekunder
}

},{}]},["b2mJY","cHucQ"], "cHucQ", "parcelRequireb7e5")

//# sourceMappingURL=admin.230edc5d.js.map
