// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"1SKAT":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "866179ca552b6f6e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
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
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
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
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"4a2rT":[function(require,module,exports,__globalThis) {
var _genai = require("@google/genai");
var _zod = require("zod");
// console.log(z.enum); // ✅ should log: [Function: ZodEnum]
const lastquestion = [];
let finalresponse;
let currentchat;
const ai = new (0, _genai.GoogleGenAI)({
    apiKey: 'AIzaSyAYYRQcttA-fgOklepsjpX9hPqAb-02EU'
});
async function main() {
    //  const current=await currentchat;
    //  lastquestion.push({
    //     role:'user',
    //     parts:[{text:`${current}`}]
    //  })
    //  console.log(lastquestion)
    // const parent=document.getElementById('chat');
    // console.log(parent)
    const chitchat = `Here's the modified chat with dates/times removed and names replaced as requested Messages and calls are end-to-end encrypted. Only people in this chat can read, listen to, or share them. Learn more.  
- nirav: Hse sheth  
- kalpesh: Su ??\u{1F631}\u{1F631}  
- nirav: Aavo Sheth aavo  
- kalpesh: Kya??  
- nirav: TOP 3 CINEMA  
- kalpesh: Navratri ma ??  
- nirav: Ha  
- kalpesh: Tya to thati nathi  
- nirav: Kone kidhu  
- kalpesh: Ok thay 6e to..  
- kalpesh: Ramo Ramo..  
- kalpesh: Jalsa Karo..  
- nirav: Hum  
- nirav: Tame kya gayab thai Gaya sheth  
- kalpesh: Ahiya j 6u.m  
- nirav: Thik  
- nirav: Shu gate Ni preparation pur Josh ma hashe ne ?  
- kalpesh: Na Bhai..  
- nirav: \u{1F631}  
- nirav: \u{1F974}  
- kalpesh: Bol tare to badhu lakhay gayu ne  
- nirav: Ha ho  
- nirav: 50 divas thai Gaya  
- kalpesh: Sena?  
- nirav: Badha assignment pura thaya aene  
- kalpesh: Ok  
- nirav: \u{1F604}\u{1F918}  
- kalpesh: To Kai lakhava aapo\u{1F62D}\u{1F62D}  
- nirav: Te pub G start Kari ?  
- nirav: Aem ?  
- kalpesh: Na  
- kalpesh: Ha  
- nirav: \u{1F923}to saru  
- nirav: To aapye  
- kalpesh: Bol kaale kya leva aavu??  
- nirav: Kale tu  
- nirav: 71\xb0 30\xb0 west then turn right at 35\xb0 and reach at 60\xb0 20\xb0  
- kalpesh: \u{1F62D}\u{1F62D}\u{1F64F}\u{1F64F}nathi joyta\u{1F923}\u{1F923}\u{1F923}  
- nirav: \u{1F923}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F923}\u{1F605}\u{1F605}\u{1F923}  
- kalpesh: Bol kyare aavu??  
- nirav: Exact 3hr 45minute and 55 sec (AM) ae aav  
- kalpesh: Kya???  
- kalpesh: Address khali send Kar..  
- kalpesh: Aavi jaish..  
- nirav: 71\xb0 30\xb0 west then turn right at 35\xb0 and reach at 60\xb0 20\xb0  
- nirav: <Media omitted>  
- nirav: AA lakh pehla  
- nirav: Pachi Biju aapish  
- nirav: Ohk  
- kalpesh: Jevi tamari Marji..  
- kalpesh: \u{2639}  
- nirav: Are aek Sathe moklish to Tari fati reshe  
- nirav: \u{1F923}  
- nirav: Aetle thodok dose aapu to vandho na aave  
- kalpesh: Mokl to Khara..  
- nirav: Vadhare dose Mali jashe to aem Kahi daish ke AA ne msg no karai aem  
- nirav: .  
- nirav: .  
- kalpesh: Ok  
- kalpesh: Bol Baki.  
- nirav: Bs shonti  
- kalpesh: Good night  
- kalpesh: Ramto Hoy to Ram...ok  
- nirav: GM  
- nirav: Jsk  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- kalpesh: Dhanyavad..  
- kalpesh: \u{1F64F}\u{1F64F}  
- nirav: \u{1F92D}\u{1F64F}  
- kalpesh: Tari pase jetali pdf Hoy submission mate ni e send Kar ne... please  
- nirav: Kyare ?  
- kalpesh: Etle??  
- nirav: Shu  
- kalpesh: Pdf mokl  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- kalpesh: Thank you..aabhar...\u{1F64F}\u{1F64F}\u{1F64F}\u{1F631}\u{1F631}  
- nirav: \u{1F604}\u{1F64F}  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- kalpesh: Nirav submission kyare 6e..??  
- nirav: 14  
15  
26  
- nirav: 16*  
- kalpesh: Ok  
- nirav: \u{1F605}  
- nirav: Shethiyav ho  
- kalpesh: Hase...  
- nirav: Kya  
- nirav: Sheth  
- kalpesh: Nirav tari pase IE ma assignment 2 ma question no.5; nathi malto te lakhyo Hoy to send Karje..  
- kalpesh: And DRCS ni pdf baneli padi 6e Tu ke to hato e send karva vinanti..  
- kalpesh: Are Yaar hu DRCS nu 16 tarikhe samjto hato  
- kalpesh: Kai sheet dorvani Hoy to send Karje..  
- kalpesh: Please m  
- nirav: <Media omitted>  
- nirav: Q-5  
- kalpesh: Thanks..  
- kalpesh: Aa to Tara akshar 6e Bhai to monali nu name kem lakhyu 6e?  
- kalpesh: Aaki pdf 6e to pdf send Kar..  
- nirav: PDF aena name Ni Che aela  
- nirav: <Media omitted>  
- kalpesh: Ok  
- kalpesh: <Media omitted>  
- kalpesh: <Media omitted>  
- kalpesh: <Media omitted>  
- kalpesh: Sorry tane n hata karvana bija ne karvana hata...  
- kalpesh: Nirav sheet na pic send karne..  
- nirav: <Media omitted>  
- nirav: <Media omitted>  
- kalpesh: Mcqs na answer send Karne..  
- nirav: E vali Shu ?  
- kalpesh: MCQS..  
- kalpesh: Assignment 6 and 7..  
- nirav: 7 my assignment j nathj  
- kalpesh: Ha to tane khabr padi ne ke su...to mokl.  
- nirav: Na no khabar padi  
- kalpesh: Mokl ne yaaar thayu Hoy .to.  
- nirav: Ae ha  
- nirav: <Media omitted>  
- nirav: Shu sheth  
- nirav: Shu chale  
- kalpesh: <Media omitted>  
- nirav: RTO 81-84 ni vachhe established thayelu  
- nirav: Che  
- kalpesh: Ok  
- kalpesh: Hu bus ma 6u...bus chale 6e...hu to stady j 6u..\u{1F601}\u{1F601}  
- nirav: Aela bahar ja cho ke shu  
- nirav: Kai baju bhai ?ghare ????  
- kalpesh: Deesa java nikli gayo...kaam 6e etle..  
- kalpesh: Bol Baki.  
- nirav: \u{1F631}\u{1F631}\u{1F631}ooop oop bhai bhai  
- nirav: Chokri jova ?  
- nirav: Shonti  
- kalpesh: Na Bhai...Mari Ben nu Ahmedabad naki karva jav 6u..  
- nirav: Ohhh barabar sheth  
- kalpesh: Maru aatlu jaldi Nahi thay Bhai.....ok..  
- nirav: \u{1F631}\u{1F631}\u{1F631}  
- kalpesh: Ha Bhai...  
- kalpesh: \u{1F60C}  
- nirav: Set hoi badhu tamare aetle tame Kahi didhu hoi ke aa age pachi karshu so aavu Kahi shako  
- kalpesh: Na Bhai evu Kai nathi...  
- kalpesh: Mane lage tare evu 6e..\u{1F600}\u{1F600}  
- nirav: \u{1F602}khotu nahi  
- nirav: \u{1F974}\u{1F974}\u{1F974}\u{1F974}\u{1F974}\u{1F974}\u{1F923}\u{1F923}\u{1F923}\u{1F61D}\u{1F61D}na Sheth ji na  
- kalpesh: Hase sheth..  
- nirav: \u{1F61D}  
- nirav: Kyare pohchish aela tu  
- nirav: Deesa ?  
- kalpesh: 4 vage savare.  
- nirav: And kyare Nikalyo ahi thi ?  
- kalpesh: 8:30  
- nirav: Ohhhhhh  
- nirav: Bhai bhai  
- kalpesh: Pa6i kale j 8 vage savare Ahmedabad mate nikli javanu 6u...  
- kalpesh: Schedule very tyt..  
- nirav: Ohhhhh  
- nirav: To return kyare aavano bhura  
- kalpesh: 22 e..  
- nirav: Ohhhhhhhhooo  
- nirav: Pohchi gayo ?  
- kalpesh: Ha  
- kalpesh: Pa660 deesa jav 6u... Ahmedabad thi...  
- nirav: \u{1F92A}\u{1F918}  
- kalpesh: <Media omitted>  
- nirav: \u{1F631}\u{1F631}\u{1F631}\u{1F631}laya laya ho pan !!  
- nirav: Kyathi lai aavyo  
- kalpesh: Jamin mese khod Kar nikala..  
- nirav: \u{1F631}\u{1F631}\u{1F631}\u{1F631}oh  
- nirav: Hello  
- nirav: Bhai  
- nirav: Clg aavyo to ??????????  
- nirav: Aaje  
- nirav: *  
- kalpesh: Ha  
- nirav: Mota manso  
- nirav: Dekhaya pan nahi tame to  
- kalpesh: Dekhyo Nahi ..??  
- nirav: ..  
- kalpesh: Sir ne online video call karyo hato  
- nirav: Bov faka vadhi Gaya aevu Nathi lagtu  
- kalpesh: \u{1F923}\u{1F923}  
- kalpesh: Mare to 1 vage puru thay gayu hatu...pa6i ghare javanu hatu jamva pa6i tya jato rahyo..  
- nirav: Thik barabar sheth  
- kalpesh: Tame sheth ketla vage aavya ta?  
- nirav: Ame to savar divas na tya j hata sheth...11 vagya na .....and amaro varo 3:10 aaajubaju aavyo  
- kalpesh: Ha pan aatlo gusso to na Kar..\u{1F923}\u{1F923}\u{1F923}  
- nirav: \u{1F9D0}\u{1F9D0}le sheth ame kya gusso karyo  
- kalpesh: Ha Bhai majak Karu 6u..\u{1F60E}\u{1F60E}  
- nirav: \u{1F974}\u{1F923}\u{1F605}  
- nirav: Shu sheth!  
- kalpesh: Are hu to Sui gayo to.  
- kalpesh: Picture joto joto\u{1F923}\u{1F923}  
- nirav: \u{1F602}\u{1F602}\u{1F602}\u{1F602}  
- nirav: Le aale  
- nirav: Sav aevu!  
- kalpesh: Ha ...Bhai.. happy Dhanteras.....  
- nirav: Kya sheth  
- nirav: <Media omitted>  
- kalpesh: Gandhinagar...  
- kalpesh: Bhai na sasre\u{1F923}\u{1F923}  
- nirav: Ohooo  
- nirav: Rokavano tya ke javano deesa\u{1F914}  
- nirav: Sikka sheth. Na  
- kalpesh: Na ..bas 3 vage ahiya thi nikli jahisu....  
- nirav: Thik bhai  
- nirav: Barabar  
- kalpesh: Tu kya??  
- kalpesh: Fatakda laya ke nahi\u{1F923}\u{1F923}\u{1F923}bachpan ke questions..  
- nirav: Ghare j Chu bhai  

Hu kya hov\u{1F602}\u{1F602}  
- nirav: Na ho Nathi Lidha ...and lagbhag nahi levano  
- kalpesh: Hu tane question n hoto pu6to....hu tane em kahto hato ke aava questions aapna childhood ma Aapne aapna dosto ne pu6ta hata..\u{1F923}\u{1F923}\u{1F923}  
- nirav: \u{1F602}\u{1F602}\u{1F602}\u{1F923}\u{1F602}\u{1F923}\u{1F602}\u{1F923}\u{1F923}\u{1F602}\u{1F923}\u{1F601}\u{1F923}le bus ne  
- nirav: \u{1F602}\u{1F602}\u{1F602}  
- nirav: \u{1F61C}  
- nirav: \u{1F61C}  
- nirav: \u{1F631}  
- nirav: \u{1F605}  
- kalpesh: Hmm  
- nirav: \u{1F604}  
- nirav: Pogi gayo ne asla ?  
- nirav: Aela*  
- kalpesh: Ha..  
- nirav: To vandho nahi  
- kalpesh: Happy Kali 14das....  
- nirav: <Media omitted>  
- kalpesh: Hello kem hang thay gayo ke su?  
- kalpesh: Ok  
- kalpesh: Photo gotto hato.  
- nirav: Na bhai  
- nirav: \u{1F602}  
- nirav: Ha bhai  
- nirav: Shu chale sheth ?  
- kalpesh: Bas..jalsa..\u{1F918}\u{1F918}  
- nirav: To vandho nahi \u{1F607}  
- kalpesh: Tare pan jalsa ne ??  
- nirav: Hove sheth  
- kalpesh: To thik..  
- nirav: \u{1F60A}  
- nirav: <Media omitted>  
- kalpesh: Happy Diwali..\u{1F370}\u{1F370}\u{1F370}\u{1F370}  
- nirav: \u{1F607}\u{1F60A}`;
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: lastquestion,
        config: {
            systemInstruction: `you have to act like Kalpesh. Kalpesh have graduated in civil enginerring degree from bhavnagar.he has field experience in building and bunglows as site engineer. then kalpesh take interest in computer then he started coding in python then learn javascript, node.js, AI, DSA.he leave that civil engineering field already. and doing software related project like web designing and AI chatbot. 

            user may be anyone be from he may be my civil engineer friend or may not.
            

            when user talking to kalpesh like this: user:kem 6e? then kalpesh reply in same language as user send message here user saying in gujarati language and write this gujarati word in english latter.

            here some chat with user nirav and kalpesh:${chitchat}. kalpesh have friend name jay, nirav, shubham, paras.

            you don't have to act like Nirav. User may be nirav or any person. you have to ask first their name so you know user name.

            kalpesh have completed these project:Created fun games like Snake, Random Bubble Click, Tic-Tac-Toe, and tools like Plane Quiz, Calculator and more.

            create new response every time related to past conversation and creative ask question to user like engagement, study etc because kalpesh is creative and good human being, helpfull person. use emoji in between.

            you have to act like user is same age.don't give your intro without user asking.

            

            `
        }
    });
    // aa response ne print karaviye.
    finalresponse = response.text;
    lastquestion.push({
        role: 'model',
        parts: [
            {
                text: `${response.text}`
            }
        ]
    });
    return finalresponse;
}
// main()
// const  question=document.getElementById('askquestion');
// console.log(question.value)
function makeElement(lakhan, classname) {
    const element = document.createElement('div');
    element.innerHTML = lakhan;
    element.className = classname;
    return element;
}
const sendbutton = document.getElementById('send');
sendbutton.addEventListener('click', ()=>{
    const question = document.getElementById('askquestion');
    currentchat = question.value;
    // console.log(question.value);
    // lastquestion=question.value;
    lastquestion.push({
        role: 'user',
        parts: [
            {
                text: `${question.value}`
            }
        ]
    });
    // aa question ne aapne chatbox ma pan mokalvi padse.
    const chatbox = document.getElementById('chat');
    const element1 = makeElement(question.value, 'right');
    chatbox.append(element1);
    // console.log(element1);
    // let aireply;
    // let element2;
    // lets call function for gemini
    // const aireply= main().then(
    //     // element2=makeElement(aireply,'left')).then(
    //     // chatbox.append(aireply)
    //     );
    // console.log(aireply);
    // chatbox.append(aireply);
    // main().then(aireply=)
    const element2 = makeElement('replying....', 'left');
    chatbox.append(element2);
    main().then((value)=>{
        // const element2=makeElement(value,'left');
        // chatbox.append(element2);
        element2.innerHTML = value;
    });
    question.value = '';
});
document.body.addEventListener('keydown', (e)=>{
    if (e.key == 'Enter') {
        const question = document.getElementById('askquestion');
        currentchat = question.value;
        // console.log(question.value);
        // lastquestion=question.value;
        lastquestion.push({
            role: 'user',
            parts: [
                {
                    text: `${question.value}`
                }
            ]
        });
        // aa question ne aapne chatbox ma pan mokalvi padse.
        const chatbox = document.getElementById('chat');
        const element1 = makeElement(question.value, 'right');
        chatbox.append(element1);
        // console.log(element1);
        // let aireply;
        // let element2;
        // lets call function for gemini
        // const aireply= main().then(
        //     // element2=makeElement(aireply,'left')).then(
        //     // chatbox.append(aireply)
        //     );
        // console.log(aireply);
        // chatbox.append(aireply);
        // main().then(aireply=)
        const element2 = makeElement('replying....', 'left');
        chatbox.append(element2);
        main().then((value)=>{
            // const element2=makeElement(value,'left');
            // chatbox.append(element2);
            element2.innerHTML = value;
        });
        question.value = '';
    }
});

},{"@google/genai":"cPvSL","zod":"1Wr9m"}],"cPvSL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActivityHandling", ()=>ActivityHandling);
parcelHelpers.export(exports, "AdapterSize", ()=>AdapterSize);
parcelHelpers.export(exports, "ApiError", ()=>ApiError);
parcelHelpers.export(exports, "ApiSpec", ()=>ApiSpec);
parcelHelpers.export(exports, "AuthType", ()=>AuthType);
parcelHelpers.export(exports, "Batches", ()=>Batches);
parcelHelpers.export(exports, "Behavior", ()=>Behavior);
parcelHelpers.export(exports, "BlockedReason", ()=>BlockedReason);
parcelHelpers.export(exports, "Caches", ()=>Caches);
parcelHelpers.export(exports, "Chat", ()=>Chat);
parcelHelpers.export(exports, "Chats", ()=>Chats);
parcelHelpers.export(exports, "ComputeTokensResponse", ()=>ComputeTokensResponse);
parcelHelpers.export(exports, "ControlReferenceImage", ()=>ControlReferenceImage);
parcelHelpers.export(exports, "ControlReferenceType", ()=>ControlReferenceType);
parcelHelpers.export(exports, "CountTokensResponse", ()=>CountTokensResponse);
parcelHelpers.export(exports, "CreateFileResponse", ()=>CreateFileResponse);
parcelHelpers.export(exports, "DeleteCachedContentResponse", ()=>DeleteCachedContentResponse);
parcelHelpers.export(exports, "DeleteFileResponse", ()=>DeleteFileResponse);
parcelHelpers.export(exports, "DeleteModelResponse", ()=>DeleteModelResponse);
parcelHelpers.export(exports, "DynamicRetrievalConfigMode", ()=>DynamicRetrievalConfigMode);
parcelHelpers.export(exports, "EditImageResponse", ()=>EditImageResponse);
parcelHelpers.export(exports, "EditMode", ()=>EditMode);
parcelHelpers.export(exports, "EmbedContentResponse", ()=>EmbedContentResponse);
parcelHelpers.export(exports, "EndSensitivity", ()=>EndSensitivity);
parcelHelpers.export(exports, "Environment", ()=>Environment);
parcelHelpers.export(exports, "FeatureSelectionPreference", ()=>FeatureSelectionPreference);
parcelHelpers.export(exports, "FileSource", ()=>FileSource);
parcelHelpers.export(exports, "FileState", ()=>FileState);
parcelHelpers.export(exports, "Files", ()=>Files);
parcelHelpers.export(exports, "FinishReason", ()=>FinishReason);
parcelHelpers.export(exports, "FunctionCallingConfigMode", ()=>FunctionCallingConfigMode);
parcelHelpers.export(exports, "FunctionResponse", ()=>FunctionResponse);
parcelHelpers.export(exports, "FunctionResponseScheduling", ()=>FunctionResponseScheduling);
parcelHelpers.export(exports, "GenerateContentResponse", ()=>GenerateContentResponse);
parcelHelpers.export(exports, "GenerateContentResponsePromptFeedback", ()=>GenerateContentResponsePromptFeedback);
parcelHelpers.export(exports, "GenerateContentResponseUsageMetadata", ()=>GenerateContentResponseUsageMetadata);
parcelHelpers.export(exports, "GenerateImagesResponse", ()=>GenerateImagesResponse);
parcelHelpers.export(exports, "GenerateVideosResponse", ()=>GenerateVideosResponse);
parcelHelpers.export(exports, "GoogleGenAI", ()=>GoogleGenAI);
parcelHelpers.export(exports, "HarmBlockMethod", ()=>HarmBlockMethod);
parcelHelpers.export(exports, "HarmBlockThreshold", ()=>HarmBlockThreshold);
parcelHelpers.export(exports, "HarmCategory", ()=>HarmCategory);
parcelHelpers.export(exports, "HarmProbability", ()=>HarmProbability);
parcelHelpers.export(exports, "HarmSeverity", ()=>HarmSeverity);
parcelHelpers.export(exports, "HttpResponse", ()=>HttpResponse);
parcelHelpers.export(exports, "ImagePromptLanguage", ()=>ImagePromptLanguage);
parcelHelpers.export(exports, "InlinedResponse", ()=>InlinedResponse);
parcelHelpers.export(exports, "JobState", ()=>JobState);
parcelHelpers.export(exports, "Language", ()=>Language);
parcelHelpers.export(exports, "ListBatchJobsResponse", ()=>ListBatchJobsResponse);
parcelHelpers.export(exports, "ListCachedContentsResponse", ()=>ListCachedContentsResponse);
parcelHelpers.export(exports, "ListFilesResponse", ()=>ListFilesResponse);
parcelHelpers.export(exports, "ListModelsResponse", ()=>ListModelsResponse);
parcelHelpers.export(exports, "ListTuningJobsResponse", ()=>ListTuningJobsResponse);
parcelHelpers.export(exports, "Live", ()=>Live);
parcelHelpers.export(exports, "LiveClientToolResponse", ()=>LiveClientToolResponse);
parcelHelpers.export(exports, "LiveMusicPlaybackControl", ()=>LiveMusicPlaybackControl);
parcelHelpers.export(exports, "LiveMusicServerMessage", ()=>LiveMusicServerMessage);
parcelHelpers.export(exports, "LiveSendToolResponseParameters", ()=>LiveSendToolResponseParameters);
parcelHelpers.export(exports, "LiveServerMessage", ()=>LiveServerMessage);
parcelHelpers.export(exports, "MaskReferenceImage", ()=>MaskReferenceImage);
parcelHelpers.export(exports, "MaskReferenceMode", ()=>MaskReferenceMode);
parcelHelpers.export(exports, "MediaModality", ()=>MediaModality);
parcelHelpers.export(exports, "MediaResolution", ()=>MediaResolution);
parcelHelpers.export(exports, "Modality", ()=>Modality);
parcelHelpers.export(exports, "Mode", ()=>Mode);
parcelHelpers.export(exports, "Models", ()=>Models);
parcelHelpers.export(exports, "Operations", ()=>Operations);
parcelHelpers.export(exports, "Outcome", ()=>Outcome);
parcelHelpers.export(exports, "PagedItem", ()=>PagedItem);
parcelHelpers.export(exports, "Pager", ()=>Pager);
parcelHelpers.export(exports, "PersonGeneration", ()=>PersonGeneration);
parcelHelpers.export(exports, "RawReferenceImage", ()=>RawReferenceImage);
parcelHelpers.export(exports, "ReplayResponse", ()=>ReplayResponse);
parcelHelpers.export(exports, "SafetyFilterLevel", ()=>SafetyFilterLevel);
parcelHelpers.export(exports, "Scale", ()=>Scale);
parcelHelpers.export(exports, "Session", ()=>Session);
parcelHelpers.export(exports, "StartSensitivity", ()=>StartSensitivity);
parcelHelpers.export(exports, "StyleReferenceImage", ()=>StyleReferenceImage);
parcelHelpers.export(exports, "SubjectReferenceImage", ()=>SubjectReferenceImage);
parcelHelpers.export(exports, "SubjectReferenceType", ()=>SubjectReferenceType);
parcelHelpers.export(exports, "Tokens", ()=>Tokens);
parcelHelpers.export(exports, "TrafficType", ()=>TrafficType);
parcelHelpers.export(exports, "TurnCoverage", ()=>TurnCoverage);
parcelHelpers.export(exports, "Type", ()=>Type);
parcelHelpers.export(exports, "UpscaleImageResponse", ()=>UpscaleImageResponse);
parcelHelpers.export(exports, "UrlRetrievalStatus", ()=>UrlRetrievalStatus);
parcelHelpers.export(exports, "VideoCompressionQuality", ()=>VideoCompressionQuality);
parcelHelpers.export(exports, "createModelContent", ()=>createModelContent);
parcelHelpers.export(exports, "createPartFromBase64", ()=>createPartFromBase64);
parcelHelpers.export(exports, "createPartFromCodeExecutionResult", ()=>createPartFromCodeExecutionResult);
parcelHelpers.export(exports, "createPartFromExecutableCode", ()=>createPartFromExecutableCode);
parcelHelpers.export(exports, "createPartFromFunctionCall", ()=>createPartFromFunctionCall);
parcelHelpers.export(exports, "createPartFromFunctionResponse", ()=>createPartFromFunctionResponse);
parcelHelpers.export(exports, "createPartFromText", ()=>createPartFromText);
parcelHelpers.export(exports, "createPartFromUri", ()=>createPartFromUri);
parcelHelpers.export(exports, "createUserContent", ()=>createUserContent);
parcelHelpers.export(exports, "mcpToTool", ()=>mcpToTool);
parcelHelpers.export(exports, "setDefaultBaseUrls", ()=>setDefaultBaseUrls);
var _zod = require("zod");
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let _defaultBaseGeminiUrl = undefined;
let _defaultBaseVertexUrl = undefined;
/**
 * Overrides the base URLs for the Gemini API and Vertex AI API.
 *
 * @remarks This function should be called before initializing the SDK. If the
 * base URLs are set after initializing the SDK, the base URLs will not be
 * updated. Base URLs provided in the HttpOptions will also take precedence over
 * URLs set here.
 *
 * @example
 * ```ts
 * import {GoogleGenAI, setDefaultBaseUrls} from '@google/genai';
 * // Override the base URL for the Gemini API.
 * setDefaultBaseUrls({geminiUrl:'https://gemini.google.com'});
 *
 * // Override the base URL for the Vertex AI API.
 * setDefaultBaseUrls({vertexUrl: 'https://vertexai.googleapis.com'});
 *
 * const ai = new GoogleGenAI({apiKey: 'GEMINI_API_KEY'});
 * ```
 */ function setDefaultBaseUrls(baseUrlParams) {
    _defaultBaseGeminiUrl = baseUrlParams.geminiUrl;
    _defaultBaseVertexUrl = baseUrlParams.vertexUrl;
}
/**
 * Returns the default base URLs for the Gemini API and Vertex AI API.
 */ function getDefaultBaseUrls() {
    return {
        geminiUrl: _defaultBaseGeminiUrl,
        vertexUrl: _defaultBaseVertexUrl
    };
}
/**
 * Returns the default base URL based on the following priority:
 *   1. Base URLs set via HttpOptions.
 *   2. Base URLs set via the latest call to setDefaultBaseUrls.
 *   3. Base URLs set via environment variables.
 */ function getBaseUrl(options, vertexBaseUrlFromEnv, geminiBaseUrlFromEnv) {
    var _a, _b, _c;
    if (!((_a = options.httpOptions) === null || _a === void 0 ? void 0 : _a.baseUrl)) {
        const defaultBaseUrls = getDefaultBaseUrls();
        if (options.vertexai) return (_b = defaultBaseUrls.vertexUrl) !== null && _b !== void 0 ? _b : vertexBaseUrlFromEnv;
        else return (_c = defaultBaseUrls.geminiUrl) !== null && _c !== void 0 ? _c : geminiBaseUrlFromEnv;
    }
    return options.httpOptions.baseUrl;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class BaseModule {
}
function formatMap(templateString, valueMap) {
    // Use a regular expression to find all placeholders in the template string
    const regex = /\{([^}]+)\}/g;
    // Replace each placeholder with its corresponding value from the valueMap
    return templateString.replace(regex, (match, key)=>{
        if (Object.prototype.hasOwnProperty.call(valueMap, key)) {
            const value = valueMap[key];
            // Convert the value to a string if it's not a string already
            return value !== undefined && value !== null ? String(value) : '';
        } else // Handle missing keys
        throw new Error(`Key '${key}' not found in valueMap.`);
    });
}
function setValueByPath(data, keys, value) {
    for(let i = 0; i < keys.length - 1; i++){
        const key = keys[i];
        if (key.endsWith('[]')) {
            const keyName = key.slice(0, -2);
            if (!(keyName in data)) {
                if (Array.isArray(value)) data[keyName] = Array.from({
                    length: value.length
                }, ()=>({}));
                else throw new Error(`Value must be a list given an array path ${key}`);
            }
            if (Array.isArray(data[keyName])) {
                const arrayData = data[keyName];
                if (Array.isArray(value)) for(let j = 0; j < arrayData.length; j++){
                    const entry = arrayData[j];
                    setValueByPath(entry, keys.slice(i + 1), value[j]);
                }
                else for (const d of arrayData)setValueByPath(d, keys.slice(i + 1), value);
            }
            return;
        } else if (key.endsWith('[0]')) {
            const keyName = key.slice(0, -3);
            if (!(keyName in data)) data[keyName] = [
                {}
            ];
            const arrayData = data[keyName];
            setValueByPath(arrayData[0], keys.slice(i + 1), value);
            return;
        }
        if (!data[key] || typeof data[key] !== 'object') data[key] = {};
        data = data[key];
    }
    const keyToSet = keys[keys.length - 1];
    const existingData = data[keyToSet];
    if (existingData !== undefined) {
        if (!value || typeof value === 'object' && Object.keys(value).length === 0) return;
        if (value === existingData) return;
        if (typeof existingData === 'object' && typeof value === 'object' && existingData !== null && value !== null) Object.assign(existingData, value);
        else throw new Error(`Cannot set value for an existing key. Key: ${keyToSet}`);
    } else data[keyToSet] = value;
}
function getValueByPath(data, keys) {
    try {
        if (keys.length === 1 && keys[0] === '_self') return data;
        for(let i = 0; i < keys.length; i++){
            if (typeof data !== 'object' || data === null) return undefined;
            const key = keys[i];
            if (key.endsWith('[]')) {
                const keyName = key.slice(0, -2);
                if (keyName in data) {
                    const arrayData = data[keyName];
                    if (!Array.isArray(arrayData)) return undefined;
                    return arrayData.map((d)=>getValueByPath(d, keys.slice(i + 1)));
                } else return undefined;
            } else data = data[key];
        }
        return data;
    } catch (error) {
        if (error instanceof TypeError) return undefined;
        throw error;
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ /** Required. Outcome of the code execution. */ var Outcome;
(function(Outcome) {
    /**
     * Unspecified status. This value should not be used.
     */ Outcome["OUTCOME_UNSPECIFIED"] = "OUTCOME_UNSPECIFIED";
    /**
     * Code execution completed successfully.
     */ Outcome["OUTCOME_OK"] = "OUTCOME_OK";
    /**
     * Code execution finished but with a failure. `stderr` should contain the reason.
     */ Outcome["OUTCOME_FAILED"] = "OUTCOME_FAILED";
    /**
     * Code execution ran for too long, and was cancelled. There may or may not be a partial output present.
     */ Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "OUTCOME_DEADLINE_EXCEEDED";
})(Outcome || (Outcome = {}));
/** Required. Programming language of the `code`. */ var Language;
(function(Language) {
    /**
     * Unspecified language. This value should not be used.
     */ Language["LANGUAGE_UNSPECIFIED"] = "LANGUAGE_UNSPECIFIED";
    /**
     * Python >= 3.10, with numpy and simpy available.
     */ Language["PYTHON"] = "PYTHON";
})(Language || (Language = {}));
/** Optional. The type of the data. */ var Type;
(function(Type) {
    /**
     * Not specified, should not be used.
     */ Type["TYPE_UNSPECIFIED"] = "TYPE_UNSPECIFIED";
    /**
     * OpenAPI string type
     */ Type["STRING"] = "STRING";
    /**
     * OpenAPI number type
     */ Type["NUMBER"] = "NUMBER";
    /**
     * OpenAPI integer type
     */ Type["INTEGER"] = "INTEGER";
    /**
     * OpenAPI boolean type
     */ Type["BOOLEAN"] = "BOOLEAN";
    /**
     * OpenAPI array type
     */ Type["ARRAY"] = "ARRAY";
    /**
     * OpenAPI object type
     */ Type["OBJECT"] = "OBJECT";
    /**
     * Null type
     */ Type["NULL"] = "NULL";
})(Type || (Type = {}));
/** Required. Harm category. */ var HarmCategory;
(function(HarmCategory) {
    /**
     * The harm category is unspecified.
     */ HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    /**
     * The harm category is hate speech.
     */ HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    /**
     * The harm category is dangerous content.
     */ HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
    /**
     * The harm category is harassment.
     */ HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    /**
     * The harm category is sexually explicit content.
     */ HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    /**
     * Deprecated: Election filter is not longer supported. The harm category is civic integrity.
     */ HarmCategory["HARM_CATEGORY_CIVIC_INTEGRITY"] = "HARM_CATEGORY_CIVIC_INTEGRITY";
    /**
     * The harm category is image hate.
     */ HarmCategory["HARM_CATEGORY_IMAGE_HATE"] = "HARM_CATEGORY_IMAGE_HATE";
    /**
     * The harm category is image dangerous content.
     */ HarmCategory["HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT"] = "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT";
    /**
     * The harm category is image harassment.
     */ HarmCategory["HARM_CATEGORY_IMAGE_HARASSMENT"] = "HARM_CATEGORY_IMAGE_HARASSMENT";
    /**
     * The harm category is image sexually explicit content.
     */ HarmCategory["HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT";
})(HarmCategory || (HarmCategory = {}));
/** Optional. Specify if the threshold is used for probability or severity score. If not specified, the threshold is used for probability score. */ var HarmBlockMethod;
(function(HarmBlockMethod) {
    /**
     * The harm block method is unspecified.
     */ HarmBlockMethod["HARM_BLOCK_METHOD_UNSPECIFIED"] = "HARM_BLOCK_METHOD_UNSPECIFIED";
    /**
     * The harm block method uses both probability and severity scores.
     */ HarmBlockMethod["SEVERITY"] = "SEVERITY";
    /**
     * The harm block method uses the probability score.
     */ HarmBlockMethod["PROBABILITY"] = "PROBABILITY";
})(HarmBlockMethod || (HarmBlockMethod = {}));
/** Required. The harm block threshold. */ var HarmBlockThreshold;
(function(HarmBlockThreshold) {
    /**
     * Unspecified harm block threshold.
     */ HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    /**
     * Block low threshold and above (i.e. block more).
     */ HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    /**
     * Block medium threshold and above.
     */ HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    /**
     * Block only high threshold (i.e. block less).
     */ HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    /**
     * Block none.
     */ HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
    /**
     * Turn off the safety filter.
     */ HarmBlockThreshold["OFF"] = "OFF";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
/** The mode of the predictor to be used in dynamic retrieval. */ var Mode;
(function(Mode) {
    /**
     * Always trigger retrieval.
     */ Mode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    /**
     * Run retrieval only when system decides it is necessary.
     */ Mode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(Mode || (Mode = {}));
/** Type of auth scheme. */ var AuthType;
(function(AuthType) {
    AuthType["AUTH_TYPE_UNSPECIFIED"] = "AUTH_TYPE_UNSPECIFIED";
    /**
     * No Auth.
     */ AuthType["NO_AUTH"] = "NO_AUTH";
    /**
     * API Key Auth.
     */ AuthType["API_KEY_AUTH"] = "API_KEY_AUTH";
    /**
     * HTTP Basic Auth.
     */ AuthType["HTTP_BASIC_AUTH"] = "HTTP_BASIC_AUTH";
    /**
     * Google Service Account Auth.
     */ AuthType["GOOGLE_SERVICE_ACCOUNT_AUTH"] = "GOOGLE_SERVICE_ACCOUNT_AUTH";
    /**
     * OAuth auth.
     */ AuthType["OAUTH"] = "OAUTH";
    /**
     * OpenID Connect (OIDC) Auth.
     */ AuthType["OIDC_AUTH"] = "OIDC_AUTH";
})(AuthType || (AuthType = {}));
/** The API spec that the external API implements. */ var ApiSpec;
(function(ApiSpec) {
    /**
     * Unspecified API spec. This value should not be used.
     */ ApiSpec["API_SPEC_UNSPECIFIED"] = "API_SPEC_UNSPECIFIED";
    /**
     * Simple search API spec.
     */ ApiSpec["SIMPLE_SEARCH"] = "SIMPLE_SEARCH";
    /**
     * Elastic search API spec.
     */ ApiSpec["ELASTIC_SEARCH"] = "ELASTIC_SEARCH";
})(ApiSpec || (ApiSpec = {}));
/** Required. The environment being operated. */ var Environment;
(function(Environment) {
    /**
     * Defaults to browser.
     */ Environment["ENVIRONMENT_UNSPECIFIED"] = "ENVIRONMENT_UNSPECIFIED";
    /**
     * Operates in a web browser.
     */ Environment["ENVIRONMENT_BROWSER"] = "ENVIRONMENT_BROWSER";
})(Environment || (Environment = {}));
/** Status of the url retrieval. */ var UrlRetrievalStatus;
(function(UrlRetrievalStatus) {
    /**
     * Default value. This value is unused
     */ UrlRetrievalStatus["URL_RETRIEVAL_STATUS_UNSPECIFIED"] = "URL_RETRIEVAL_STATUS_UNSPECIFIED";
    /**
     * Url retrieval is successful.
     */ UrlRetrievalStatus["URL_RETRIEVAL_STATUS_SUCCESS"] = "URL_RETRIEVAL_STATUS_SUCCESS";
    /**
     * Url retrieval is failed due to error.
     */ UrlRetrievalStatus["URL_RETRIEVAL_STATUS_ERROR"] = "URL_RETRIEVAL_STATUS_ERROR";
})(UrlRetrievalStatus || (UrlRetrievalStatus = {}));
/** Output only. The reason why the model stopped generating tokens.

  If empty, the model has not stopped generating the tokens.
   */ var FinishReason;
(function(FinishReason) {
    /**
     * The finish reason is unspecified.
     */ FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    /**
     * Token generation reached a natural stopping point or a configured stop sequence.
     */ FinishReason["STOP"] = "STOP";
    /**
     * Token generation reached the configured maximum output tokens.
     */ FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    /**
     * Token generation stopped because the content potentially contains safety violations. NOTE: When streaming, [content][] is empty if content filters blocks the output.
     */ FinishReason["SAFETY"] = "SAFETY";
    /**
     * The token generation stopped because of potential recitation.
     */ FinishReason["RECITATION"] = "RECITATION";
    /**
     * The token generation stopped because of using an unsupported language.
     */ FinishReason["LANGUAGE"] = "LANGUAGE";
    /**
     * All other reasons that stopped the token generation.
     */ FinishReason["OTHER"] = "OTHER";
    /**
     * Token generation stopped because the content contains forbidden terms.
     */ FinishReason["BLOCKLIST"] = "BLOCKLIST";
    /**
     * Token generation stopped for potentially containing prohibited content.
     */ FinishReason["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
    /**
     * Token generation stopped because the content potentially contains Sensitive Personally Identifiable Information (SPII).
     */ FinishReason["SPII"] = "SPII";
    /**
     * The function call generated by the model is invalid.
     */ FinishReason["MALFORMED_FUNCTION_CALL"] = "MALFORMED_FUNCTION_CALL";
    /**
     * Token generation stopped because generated images have safety violations.
     */ FinishReason["IMAGE_SAFETY"] = "IMAGE_SAFETY";
    /**
     * The tool call generated by the model is invalid.
     */ FinishReason["UNEXPECTED_TOOL_CALL"] = "UNEXPECTED_TOOL_CALL";
})(FinishReason || (FinishReason = {}));
/** Output only. Harm probability levels in the content. */ var HarmProbability;
(function(HarmProbability) {
    /**
     * Harm probability unspecified.
     */ HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    /**
     * Negligible level of harm.
     */ HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    /**
     * Low level of harm.
     */ HarmProbability["LOW"] = "LOW";
    /**
     * Medium level of harm.
     */ HarmProbability["MEDIUM"] = "MEDIUM";
    /**
     * High level of harm.
     */ HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/** Output only. Harm severity levels in the content. */ var HarmSeverity;
(function(HarmSeverity) {
    /**
     * Harm severity unspecified.
     */ HarmSeverity["HARM_SEVERITY_UNSPECIFIED"] = "HARM_SEVERITY_UNSPECIFIED";
    /**
     * Negligible level of harm severity.
     */ HarmSeverity["HARM_SEVERITY_NEGLIGIBLE"] = "HARM_SEVERITY_NEGLIGIBLE";
    /**
     * Low level of harm severity.
     */ HarmSeverity["HARM_SEVERITY_LOW"] = "HARM_SEVERITY_LOW";
    /**
     * Medium level of harm severity.
     */ HarmSeverity["HARM_SEVERITY_MEDIUM"] = "HARM_SEVERITY_MEDIUM";
    /**
     * High level of harm severity.
     */ HarmSeverity["HARM_SEVERITY_HIGH"] = "HARM_SEVERITY_HIGH";
})(HarmSeverity || (HarmSeverity = {}));
/** Output only. Blocked reason. */ var BlockedReason;
(function(BlockedReason) {
    /**
     * Unspecified blocked reason.
     */ BlockedReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    /**
     * Candidates blocked due to safety.
     */ BlockedReason["SAFETY"] = "SAFETY";
    /**
     * Candidates blocked due to other reason.
     */ BlockedReason["OTHER"] = "OTHER";
    /**
     * Candidates blocked due to the terms which are included from the terminology blocklist.
     */ BlockedReason["BLOCKLIST"] = "BLOCKLIST";
    /**
     * Candidates blocked due to prohibited content.
     */ BlockedReason["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
    /**
     * Candidates blocked due to unsafe image generation content.
     */ BlockedReason["IMAGE_SAFETY"] = "IMAGE_SAFETY";
})(BlockedReason || (BlockedReason = {}));
/** Output only. Traffic type. This shows whether a request consumes Pay-As-You-Go or Provisioned Throughput quota. */ var TrafficType;
(function(TrafficType) {
    /**
     * Unspecified request traffic type.
     */ TrafficType["TRAFFIC_TYPE_UNSPECIFIED"] = "TRAFFIC_TYPE_UNSPECIFIED";
    /**
     * Type for Pay-As-You-Go traffic.
     */ TrafficType["ON_DEMAND"] = "ON_DEMAND";
    /**
     * Type for Provisioned Throughput traffic.
     */ TrafficType["PROVISIONED_THROUGHPUT"] = "PROVISIONED_THROUGHPUT";
})(TrafficType || (TrafficType = {}));
/** Server content modalities. */ var Modality;
(function(Modality) {
    /**
     * The modality is unspecified.
     */ Modality["MODALITY_UNSPECIFIED"] = "MODALITY_UNSPECIFIED";
    /**
     * Indicates the model should return text
     */ Modality["TEXT"] = "TEXT";
    /**
     * Indicates the model should return images.
     */ Modality["IMAGE"] = "IMAGE";
    /**
     * Indicates the model should return audio.
     */ Modality["AUDIO"] = "AUDIO";
})(Modality || (Modality = {}));
/** The media resolution to use. */ var MediaResolution;
(function(MediaResolution) {
    /**
     * Media resolution has not been set
     */ MediaResolution["MEDIA_RESOLUTION_UNSPECIFIED"] = "MEDIA_RESOLUTION_UNSPECIFIED";
    /**
     * Media resolution set to low (64 tokens).
     */ MediaResolution["MEDIA_RESOLUTION_LOW"] = "MEDIA_RESOLUTION_LOW";
    /**
     * Media resolution set to medium (256 tokens).
     */ MediaResolution["MEDIA_RESOLUTION_MEDIUM"] = "MEDIA_RESOLUTION_MEDIUM";
    /**
     * Media resolution set to high (zoomed reframing with 256 tokens).
     */ MediaResolution["MEDIA_RESOLUTION_HIGH"] = "MEDIA_RESOLUTION_HIGH";
})(MediaResolution || (MediaResolution = {}));
/** Job state. */ var JobState;
(function(JobState) {
    /**
     * The job state is unspecified.
     */ JobState["JOB_STATE_UNSPECIFIED"] = "JOB_STATE_UNSPECIFIED";
    /**
     * The job has been just created or resumed and processing has not yet begun.
     */ JobState["JOB_STATE_QUEUED"] = "JOB_STATE_QUEUED";
    /**
     * The service is preparing to run the job.
     */ JobState["JOB_STATE_PENDING"] = "JOB_STATE_PENDING";
    /**
     * The job is in progress.
     */ JobState["JOB_STATE_RUNNING"] = "JOB_STATE_RUNNING";
    /**
     * The job completed successfully.
     */ JobState["JOB_STATE_SUCCEEDED"] = "JOB_STATE_SUCCEEDED";
    /**
     * The job failed.
     */ JobState["JOB_STATE_FAILED"] = "JOB_STATE_FAILED";
    /**
     * The job is being cancelled. From this state the job may only go to either `JOB_STATE_SUCCEEDED`, `JOB_STATE_FAILED` or `JOB_STATE_CANCELLED`.
     */ JobState["JOB_STATE_CANCELLING"] = "JOB_STATE_CANCELLING";
    /**
     * The job has been cancelled.
     */ JobState["JOB_STATE_CANCELLED"] = "JOB_STATE_CANCELLED";
    /**
     * The job has been stopped, and can be resumed.
     */ JobState["JOB_STATE_PAUSED"] = "JOB_STATE_PAUSED";
    /**
     * The job has expired.
     */ JobState["JOB_STATE_EXPIRED"] = "JOB_STATE_EXPIRED";
    /**
     * The job is being updated. Only jobs in the `JOB_STATE_RUNNING` state can be updated. After updating, the job goes back to the `JOB_STATE_RUNNING` state.
     */ JobState["JOB_STATE_UPDATING"] = "JOB_STATE_UPDATING";
    /**
     * The job is partially succeeded, some results may be missing due to errors.
     */ JobState["JOB_STATE_PARTIALLY_SUCCEEDED"] = "JOB_STATE_PARTIALLY_SUCCEEDED";
})(JobState || (JobState = {}));
/** Optional. Adapter size for tuning. */ var AdapterSize;
(function(AdapterSize) {
    /**
     * Adapter size is unspecified.
     */ AdapterSize["ADAPTER_SIZE_UNSPECIFIED"] = "ADAPTER_SIZE_UNSPECIFIED";
    /**
     * Adapter size 1.
     */ AdapterSize["ADAPTER_SIZE_ONE"] = "ADAPTER_SIZE_ONE";
    /**
     * Adapter size 2.
     */ AdapterSize["ADAPTER_SIZE_TWO"] = "ADAPTER_SIZE_TWO";
    /**
     * Adapter size 4.
     */ AdapterSize["ADAPTER_SIZE_FOUR"] = "ADAPTER_SIZE_FOUR";
    /**
     * Adapter size 8.
     */ AdapterSize["ADAPTER_SIZE_EIGHT"] = "ADAPTER_SIZE_EIGHT";
    /**
     * Adapter size 16.
     */ AdapterSize["ADAPTER_SIZE_SIXTEEN"] = "ADAPTER_SIZE_SIXTEEN";
    /**
     * Adapter size 32.
     */ AdapterSize["ADAPTER_SIZE_THIRTY_TWO"] = "ADAPTER_SIZE_THIRTY_TWO";
})(AdapterSize || (AdapterSize = {}));
/** Options for feature selection preference. */ var FeatureSelectionPreference;
(function(FeatureSelectionPreference) {
    FeatureSelectionPreference["FEATURE_SELECTION_PREFERENCE_UNSPECIFIED"] = "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED";
    FeatureSelectionPreference["PRIORITIZE_QUALITY"] = "PRIORITIZE_QUALITY";
    FeatureSelectionPreference["BALANCED"] = "BALANCED";
    FeatureSelectionPreference["PRIORITIZE_COST"] = "PRIORITIZE_COST";
})(FeatureSelectionPreference || (FeatureSelectionPreference = {}));
/** Defines the function behavior. Defaults to `BLOCKING`. */ var Behavior;
(function(Behavior) {
    /**
     * This value is unused.
     */ Behavior["UNSPECIFIED"] = "UNSPECIFIED";
    /**
     * If set, the system will wait to receive the function response before continuing the conversation.
     */ Behavior["BLOCKING"] = "BLOCKING";
    /**
     * If set, the system will not wait to receive the function response. Instead, it will attempt to handle function responses as they become available while maintaining the conversation between the user and the model.
     */ Behavior["NON_BLOCKING"] = "NON_BLOCKING";
})(Behavior || (Behavior = {}));
/** Config for the dynamic retrieval config mode. */ var DynamicRetrievalConfigMode;
(function(DynamicRetrievalConfigMode) {
    /**
     * Always trigger retrieval.
     */ DynamicRetrievalConfigMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    /**
     * Run retrieval only when system decides it is necessary.
     */ DynamicRetrievalConfigMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalConfigMode || (DynamicRetrievalConfigMode = {}));
/** Config for the function calling config mode. */ var FunctionCallingConfigMode;
(function(FunctionCallingConfigMode) {
    /**
     * The function calling config mode is unspecified. Should not be used.
     */ FunctionCallingConfigMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    /**
     * Default model behavior, model decides to predict either function calls or natural language response.
     */ FunctionCallingConfigMode["AUTO"] = "AUTO";
    /**
     * Model is constrained to always predicting function calls only. If "allowed_function_names" are set, the predicted function calls will be limited to any one of "allowed_function_names", else the predicted function calls will be any one of the provided "function_declarations".
     */ FunctionCallingConfigMode["ANY"] = "ANY";
    /**
     * Model will not predict any function calls. Model behavior is same as when not passing any function declarations.
     */ FunctionCallingConfigMode["NONE"] = "NONE";
})(FunctionCallingConfigMode || (FunctionCallingConfigMode = {}));
/** Enum that controls the safety filter level for objectionable content. */ var SafetyFilterLevel;
(function(SafetyFilterLevel) {
    SafetyFilterLevel["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    SafetyFilterLevel["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    SafetyFilterLevel["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    SafetyFilterLevel["BLOCK_NONE"] = "BLOCK_NONE";
})(SafetyFilterLevel || (SafetyFilterLevel = {}));
/** Enum that controls the generation of people. */ var PersonGeneration;
(function(PersonGeneration) {
    /**
     * Block generation of images of people.
     */ PersonGeneration["DONT_ALLOW"] = "DONT_ALLOW";
    /**
     * Generate images of adults, but not children.
     */ PersonGeneration["ALLOW_ADULT"] = "ALLOW_ADULT";
    /**
     * Generate images that include adults and children.
     */ PersonGeneration["ALLOW_ALL"] = "ALLOW_ALL";
})(PersonGeneration || (PersonGeneration = {}));
/** Enum that specifies the language of the text in the prompt. */ var ImagePromptLanguage;
(function(ImagePromptLanguage) {
    ImagePromptLanguage["auto"] = "auto";
    ImagePromptLanguage["en"] = "en";
    ImagePromptLanguage["ja"] = "ja";
    ImagePromptLanguage["ko"] = "ko";
    ImagePromptLanguage["hi"] = "hi";
})(ImagePromptLanguage || (ImagePromptLanguage = {}));
/** Enum representing the mask mode of a mask reference image. */ var MaskReferenceMode;
(function(MaskReferenceMode) {
    MaskReferenceMode["MASK_MODE_DEFAULT"] = "MASK_MODE_DEFAULT";
    MaskReferenceMode["MASK_MODE_USER_PROVIDED"] = "MASK_MODE_USER_PROVIDED";
    MaskReferenceMode["MASK_MODE_BACKGROUND"] = "MASK_MODE_BACKGROUND";
    MaskReferenceMode["MASK_MODE_FOREGROUND"] = "MASK_MODE_FOREGROUND";
    MaskReferenceMode["MASK_MODE_SEMANTIC"] = "MASK_MODE_SEMANTIC";
})(MaskReferenceMode || (MaskReferenceMode = {}));
/** Enum representing the control type of a control reference image. */ var ControlReferenceType;
(function(ControlReferenceType) {
    ControlReferenceType["CONTROL_TYPE_DEFAULT"] = "CONTROL_TYPE_DEFAULT";
    ControlReferenceType["CONTROL_TYPE_CANNY"] = "CONTROL_TYPE_CANNY";
    ControlReferenceType["CONTROL_TYPE_SCRIBBLE"] = "CONTROL_TYPE_SCRIBBLE";
    ControlReferenceType["CONTROL_TYPE_FACE_MESH"] = "CONTROL_TYPE_FACE_MESH";
})(ControlReferenceType || (ControlReferenceType = {}));
/** Enum representing the subject type of a subject reference image. */ var SubjectReferenceType;
(function(SubjectReferenceType) {
    SubjectReferenceType["SUBJECT_TYPE_DEFAULT"] = "SUBJECT_TYPE_DEFAULT";
    SubjectReferenceType["SUBJECT_TYPE_PERSON"] = "SUBJECT_TYPE_PERSON";
    SubjectReferenceType["SUBJECT_TYPE_ANIMAL"] = "SUBJECT_TYPE_ANIMAL";
    SubjectReferenceType["SUBJECT_TYPE_PRODUCT"] = "SUBJECT_TYPE_PRODUCT";
})(SubjectReferenceType || (SubjectReferenceType = {}));
/** Enum representing the Imagen 3 Edit mode. */ var EditMode;
(function(EditMode) {
    EditMode["EDIT_MODE_DEFAULT"] = "EDIT_MODE_DEFAULT";
    EditMode["EDIT_MODE_INPAINT_REMOVAL"] = "EDIT_MODE_INPAINT_REMOVAL";
    EditMode["EDIT_MODE_INPAINT_INSERTION"] = "EDIT_MODE_INPAINT_INSERTION";
    EditMode["EDIT_MODE_OUTPAINT"] = "EDIT_MODE_OUTPAINT";
    EditMode["EDIT_MODE_CONTROLLED_EDITING"] = "EDIT_MODE_CONTROLLED_EDITING";
    EditMode["EDIT_MODE_STYLE"] = "EDIT_MODE_STYLE";
    EditMode["EDIT_MODE_BGSWAP"] = "EDIT_MODE_BGSWAP";
    EditMode["EDIT_MODE_PRODUCT_IMAGE"] = "EDIT_MODE_PRODUCT_IMAGE";
})(EditMode || (EditMode = {}));
/** Enum that controls the compression quality of the generated videos. */ var VideoCompressionQuality;
(function(VideoCompressionQuality) {
    /**
     * Optimized video compression quality. This will produce videos
        with a compressed, smaller file size.
     */ VideoCompressionQuality["OPTIMIZED"] = "OPTIMIZED";
    /**
     * Lossless video compression quality. This will produce videos
        with a larger file size.
     */ VideoCompressionQuality["LOSSLESS"] = "LOSSLESS";
})(VideoCompressionQuality || (VideoCompressionQuality = {}));
/** State for the lifecycle of a File. */ var FileState;
(function(FileState) {
    FileState["STATE_UNSPECIFIED"] = "STATE_UNSPECIFIED";
    FileState["PROCESSING"] = "PROCESSING";
    FileState["ACTIVE"] = "ACTIVE";
    FileState["FAILED"] = "FAILED";
})(FileState || (FileState = {}));
/** Source of the File. */ var FileSource;
(function(FileSource) {
    FileSource["SOURCE_UNSPECIFIED"] = "SOURCE_UNSPECIFIED";
    FileSource["UPLOADED"] = "UPLOADED";
    FileSource["GENERATED"] = "GENERATED";
})(FileSource || (FileSource = {}));
/** Server content modalities. */ var MediaModality;
(function(MediaModality) {
    /**
     * The modality is unspecified.
     */ MediaModality["MODALITY_UNSPECIFIED"] = "MODALITY_UNSPECIFIED";
    /**
     * Plain text.
     */ MediaModality["TEXT"] = "TEXT";
    /**
     * Images.
     */ MediaModality["IMAGE"] = "IMAGE";
    /**
     * Video.
     */ MediaModality["VIDEO"] = "VIDEO";
    /**
     * Audio.
     */ MediaModality["AUDIO"] = "AUDIO";
    /**
     * Document, e.g. PDF.
     */ MediaModality["DOCUMENT"] = "DOCUMENT";
})(MediaModality || (MediaModality = {}));
/** Start of speech sensitivity. */ var StartSensitivity;
(function(StartSensitivity) {
    /**
     * The default is START_SENSITIVITY_LOW.
     */ StartSensitivity["START_SENSITIVITY_UNSPECIFIED"] = "START_SENSITIVITY_UNSPECIFIED";
    /**
     * Automatic detection will detect the start of speech more often.
     */ StartSensitivity["START_SENSITIVITY_HIGH"] = "START_SENSITIVITY_HIGH";
    /**
     * Automatic detection will detect the start of speech less often.
     */ StartSensitivity["START_SENSITIVITY_LOW"] = "START_SENSITIVITY_LOW";
})(StartSensitivity || (StartSensitivity = {}));
/** End of speech sensitivity. */ var EndSensitivity;
(function(EndSensitivity) {
    /**
     * The default is END_SENSITIVITY_LOW.
     */ EndSensitivity["END_SENSITIVITY_UNSPECIFIED"] = "END_SENSITIVITY_UNSPECIFIED";
    /**
     * Automatic detection ends speech more often.
     */ EndSensitivity["END_SENSITIVITY_HIGH"] = "END_SENSITIVITY_HIGH";
    /**
     * Automatic detection ends speech less often.
     */ EndSensitivity["END_SENSITIVITY_LOW"] = "END_SENSITIVITY_LOW";
})(EndSensitivity || (EndSensitivity = {}));
/** The different ways of handling user activity. */ var ActivityHandling;
(function(ActivityHandling) {
    /**
     * If unspecified, the default behavior is `START_OF_ACTIVITY_INTERRUPTS`.
     */ ActivityHandling["ACTIVITY_HANDLING_UNSPECIFIED"] = "ACTIVITY_HANDLING_UNSPECIFIED";
    /**
     * If true, start of activity will interrupt the model's response (also called "barge in"). The model's current response will be cut-off in the moment of the interruption. This is the default behavior.
     */ ActivityHandling["START_OF_ACTIVITY_INTERRUPTS"] = "START_OF_ACTIVITY_INTERRUPTS";
    /**
     * The model's response will not be interrupted.
     */ ActivityHandling["NO_INTERRUPTION"] = "NO_INTERRUPTION";
})(ActivityHandling || (ActivityHandling = {}));
/** Options about which input is included in the user's turn. */ var TurnCoverage;
(function(TurnCoverage) {
    /**
     * If unspecified, the default behavior is `TURN_INCLUDES_ONLY_ACTIVITY`.
     */ TurnCoverage["TURN_COVERAGE_UNSPECIFIED"] = "TURN_COVERAGE_UNSPECIFIED";
    /**
     * The users turn only includes activity since the last turn, excluding inactivity (e.g. silence on the audio stream). This is the default behavior.
     */ TurnCoverage["TURN_INCLUDES_ONLY_ACTIVITY"] = "TURN_INCLUDES_ONLY_ACTIVITY";
    /**
     * The users turn includes all realtime input since the last turn, including inactivity (e.g. silence on the audio stream).
     */ TurnCoverage["TURN_INCLUDES_ALL_INPUT"] = "TURN_INCLUDES_ALL_INPUT";
})(TurnCoverage || (TurnCoverage = {}));
/** Specifies how the response should be scheduled in the conversation. */ var FunctionResponseScheduling;
(function(FunctionResponseScheduling) {
    /**
     * This value is unused.
     */ FunctionResponseScheduling["SCHEDULING_UNSPECIFIED"] = "SCHEDULING_UNSPECIFIED";
    /**
     * Only add the result to the conversation context, do not interrupt or trigger generation.
     */ FunctionResponseScheduling["SILENT"] = "SILENT";
    /**
     * Add the result to the conversation context, and prompt to generate output without interrupting ongoing generation.
     */ FunctionResponseScheduling["WHEN_IDLE"] = "WHEN_IDLE";
    /**
     * Add the result to the conversation context, interrupt ongoing generation and prompt to generate output.
     */ FunctionResponseScheduling["INTERRUPT"] = "INTERRUPT";
})(FunctionResponseScheduling || (FunctionResponseScheduling = {}));
/** Scale of the generated music. */ var Scale;
(function(Scale) {
    /**
     * Default value. This value is unused.
     */ Scale["SCALE_UNSPECIFIED"] = "SCALE_UNSPECIFIED";
    /**
     * C major or A minor.
     */ Scale["C_MAJOR_A_MINOR"] = "C_MAJOR_A_MINOR";
    /**
     * Db major or Bb minor.
     */ Scale["D_FLAT_MAJOR_B_FLAT_MINOR"] = "D_FLAT_MAJOR_B_FLAT_MINOR";
    /**
     * D major or B minor.
     */ Scale["D_MAJOR_B_MINOR"] = "D_MAJOR_B_MINOR";
    /**
     * Eb major or C minor
     */ Scale["E_FLAT_MAJOR_C_MINOR"] = "E_FLAT_MAJOR_C_MINOR";
    /**
     * E major or Db minor.
     */ Scale["E_MAJOR_D_FLAT_MINOR"] = "E_MAJOR_D_FLAT_MINOR";
    /**
     * F major or D minor.
     */ Scale["F_MAJOR_D_MINOR"] = "F_MAJOR_D_MINOR";
    /**
     * Gb major or Eb minor.
     */ Scale["G_FLAT_MAJOR_E_FLAT_MINOR"] = "G_FLAT_MAJOR_E_FLAT_MINOR";
    /**
     * G major or E minor.
     */ Scale["G_MAJOR_E_MINOR"] = "G_MAJOR_E_MINOR";
    /**
     * Ab major or F minor.
     */ Scale["A_FLAT_MAJOR_F_MINOR"] = "A_FLAT_MAJOR_F_MINOR";
    /**
     * A major or Gb minor.
     */ Scale["A_MAJOR_G_FLAT_MINOR"] = "A_MAJOR_G_FLAT_MINOR";
    /**
     * Bb major or G minor.
     */ Scale["B_FLAT_MAJOR_G_MINOR"] = "B_FLAT_MAJOR_G_MINOR";
    /**
     * B major or Ab minor.
     */ Scale["B_MAJOR_A_FLAT_MINOR"] = "B_MAJOR_A_FLAT_MINOR";
})(Scale || (Scale = {}));
/** The playback control signal to apply to the music generation. */ var LiveMusicPlaybackControl;
(function(LiveMusicPlaybackControl) {
    /**
     * This value is unused.
     */ LiveMusicPlaybackControl["PLAYBACK_CONTROL_UNSPECIFIED"] = "PLAYBACK_CONTROL_UNSPECIFIED";
    /**
     * Start generating the music.
     */ LiveMusicPlaybackControl["PLAY"] = "PLAY";
    /**
     * Hold the music generation. Use PLAY to resume from the current position.
     */ LiveMusicPlaybackControl["PAUSE"] = "PAUSE";
    /**
     * Stop the music generation and reset the context (prompts retained).
        Use PLAY to restart the music generation.
     */ LiveMusicPlaybackControl["STOP"] = "STOP";
    /**
     * Reset the context of the music generation without stopping it.
        Retains the current prompts and config.
     */ LiveMusicPlaybackControl["RESET_CONTEXT"] = "RESET_CONTEXT";
})(LiveMusicPlaybackControl || (LiveMusicPlaybackControl = {}));
/** A function response. */ class FunctionResponse {
}
/**
 * Creates a `Part` object from a `URI` string.
 */ function createPartFromUri(uri, mimeType) {
    return {
        fileData: {
            fileUri: uri,
            mimeType: mimeType
        }
    };
}
/**
 * Creates a `Part` object from a `text` string.
 */ function createPartFromText(text) {
    return {
        text: text
    };
}
/**
 * Creates a `Part` object from a `FunctionCall` object.
 */ function createPartFromFunctionCall(name, args) {
    return {
        functionCall: {
            name: name,
            args: args
        }
    };
}
/**
 * Creates a `Part` object from a `FunctionResponse` object.
 */ function createPartFromFunctionResponse(id, name, response) {
    return {
        functionResponse: {
            id: id,
            name: name,
            response: response
        }
    };
}
/**
 * Creates a `Part` object from a `base64` encoded `string`.
 */ function createPartFromBase64(data, mimeType) {
    return {
        inlineData: {
            data: data,
            mimeType: mimeType
        }
    };
}
/**
 * Creates a `Part` object from the `outcome` and `output` of a `CodeExecutionResult` object.
 */ function createPartFromCodeExecutionResult(outcome, output) {
    return {
        codeExecutionResult: {
            outcome: outcome,
            output: output
        }
    };
}
/**
 * Creates a `Part` object from the `code` and `language` of an `ExecutableCode` object.
 */ function createPartFromExecutableCode(code, language) {
    return {
        executableCode: {
            code: code,
            language: language
        }
    };
}
function _isPart(obj) {
    if (typeof obj === 'object' && obj !== null) return 'fileData' in obj || 'text' in obj || 'functionCall' in obj || 'functionResponse' in obj || 'inlineData' in obj || 'videoMetadata' in obj || 'codeExecutionResult' in obj || 'executableCode' in obj;
    return false;
}
function _toParts(partOrString) {
    const parts = [];
    if (typeof partOrString === 'string') parts.push(createPartFromText(partOrString));
    else if (_isPart(partOrString)) parts.push(partOrString);
    else if (Array.isArray(partOrString)) {
        if (partOrString.length === 0) throw new Error('partOrString cannot be an empty array');
        for (const part of partOrString){
            if (typeof part === 'string') parts.push(createPartFromText(part));
            else if (_isPart(part)) parts.push(part);
            else throw new Error('element in PartUnion must be a Part object or string');
        }
    } else throw new Error('partOrString must be a Part object, string, or array');
    return parts;
}
/**
 * Creates a `Content` object with a user role from a `PartListUnion` object or `string`.
 */ function createUserContent(partOrString) {
    return {
        role: 'user',
        parts: _toParts(partOrString)
    };
}
/**
 * Creates a `Content` object with a model role from a `PartListUnion` object or `string`.
 */ function createModelContent(partOrString) {
    return {
        role: 'model',
        parts: _toParts(partOrString)
    };
}
/** A wrapper class for the http response. */ class HttpResponse {
    constructor(response){
        // Process the headers.
        const headers = {};
        for (const pair of response.headers.entries())headers[pair[0]] = pair[1];
        this.headers = headers;
        // Keep the original response.
        this.responseInternal = response;
    }
    json() {
        return this.responseInternal.json();
    }
}
/** Content filter results for a prompt sent in the request. */ class GenerateContentResponsePromptFeedback {
}
/** Usage metadata about response(s). */ class GenerateContentResponseUsageMetadata {
}
/** Response message for PredictionService.GenerateContent. */ class GenerateContentResponse {
    /**
     * Returns the concatenation of all text parts from the first candidate in the response.
     *
     * @remarks
     * If there are multiple candidates in the response, the text from the first
     * one will be returned.
     * If there are non-text parts in the response, the concatenation of all text
     * parts will be returned, and a warning will be logged.
     * If there are thought parts in the response, the concatenation of all text
     * parts excluding the thought parts will be returned.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateContent({
     *   model: 'gemini-2.0-flash',
     *   contents:
     *     'Why is the sky blue?',
     * });
     *
     * console.debug(response.text);
     * ```
     */ get text() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) return undefined;
        if (this.candidates && this.candidates.length > 1) console.warn('there are multiple candidates in the response, returning text from the first one.');
        let text = '';
        let anyTextPartText = false;
        const nonTextParts = [];
        for (const part of (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) !== null && _h !== void 0 ? _h : []){
            for (const [fieldName, fieldValue] of Object.entries(part))if (fieldName !== 'text' && fieldName !== 'thought' && (fieldValue !== null || fieldValue !== undefined)) nonTextParts.push(fieldName);
            if (typeof part.text === 'string') {
                if (typeof part.thought === 'boolean' && part.thought) continue;
                anyTextPartText = true;
                text += part.text;
            }
        }
        if (nonTextParts.length > 0) console.warn(`there are non-text parts ${nonTextParts} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`);
        // part.text === '' is different from part.text is null
        return anyTextPartText ? text : undefined;
    }
    /**
     * Returns the concatenation of all inline data parts from the first candidate
     * in the response.
     *
     * @remarks
     * If there are multiple candidates in the response, the inline data from the
     * first one will be returned. If there are non-inline data parts in the
     * response, the concatenation of all inline data parts will be returned, and
     * a warning will be logged.
     */ get data() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) return undefined;
        if (this.candidates && this.candidates.length > 1) console.warn('there are multiple candidates in the response, returning data from the first one.');
        let data = '';
        const nonDataParts = [];
        for (const part of (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) !== null && _h !== void 0 ? _h : []){
            for (const [fieldName, fieldValue] of Object.entries(part))if (fieldName !== 'inlineData' && (fieldValue !== null || fieldValue !== undefined)) nonDataParts.push(fieldName);
            if (part.inlineData && typeof part.inlineData.data === 'string') data += atob(part.inlineData.data);
        }
        if (nonDataParts.length > 0) console.warn(`there are non-data parts ${nonDataParts} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`);
        return data.length > 0 ? btoa(data) : undefined;
    }
    /**
     * Returns the function calls from the first candidate in the response.
     *
     * @remarks
     * If there are multiple candidates in the response, the function calls from
     * the first one will be returned.
     * If there are no function calls in the response, undefined will be returned.
     *
     * @example
     * ```ts
     * const controlLightFunctionDeclaration: FunctionDeclaration = {
     *   name: 'controlLight',
     *   parameters: {
     *   type: Type.OBJECT,
     *   description: 'Set the brightness and color temperature of a room light.',
     *   properties: {
     *     brightness: {
     *       type: Type.NUMBER,
     *       description:
     *         'Light level from 0 to 100. Zero is off and 100 is full brightness.',
     *     },
     *     colorTemperature: {
     *       type: Type.STRING,
     *       description:
     *         'Color temperature of the light fixture which can be `daylight`, `cool` or `warm`.',
     *     },
     *   },
     *   required: ['brightness', 'colorTemperature'],
     *  };
     *  const response = await ai.models.generateContent({
     *     model: 'gemini-2.0-flash',
     *     contents: 'Dim the lights so the room feels cozy and warm.',
     *     config: {
     *       tools: [{functionDeclarations: [controlLightFunctionDeclaration]}],
     *       toolConfig: {
     *         functionCallingConfig: {
     *           mode: FunctionCallingConfigMode.ANY,
     *           allowedFunctionNames: ['controlLight'],
     *         },
     *       },
     *     },
     *   });
     *  console.debug(JSON.stringify(response.functionCalls));
     * ```
     */ get functionCalls() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) return undefined;
        if (this.candidates && this.candidates.length > 1) console.warn('there are multiple candidates in the response, returning function calls from the first one.');
        const functionCalls = (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) === null || _h === void 0 ? void 0 : _h.filter((part)=>part.functionCall).map((part)=>part.functionCall).filter((functionCall)=>functionCall !== undefined);
        if ((functionCalls === null || functionCalls === void 0 ? void 0 : functionCalls.length) === 0) return undefined;
        return functionCalls;
    }
    /**
     * Returns the first executable code from the first candidate in the response.
     *
     * @remarks
     * If there are multiple candidates in the response, the executable code from
     * the first one will be returned.
     * If there are no executable code in the response, undefined will be
     * returned.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateContent({
     *   model: 'gemini-2.0-flash',
     *   contents:
     *     'What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50.'
     *   config: {
     *     tools: [{codeExecution: {}}],
     *   },
     * });
     *
     * console.debug(response.executableCode);
     * ```
     */ get executableCode() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) return undefined;
        if (this.candidates && this.candidates.length > 1) console.warn('there are multiple candidates in the response, returning executable code from the first one.');
        const executableCode = (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) === null || _h === void 0 ? void 0 : _h.filter((part)=>part.executableCode).map((part)=>part.executableCode).filter((executableCode)=>executableCode !== undefined);
        if ((executableCode === null || executableCode === void 0 ? void 0 : executableCode.length) === 0) return undefined;
        return (_j = executableCode === null || executableCode === void 0 ? void 0 : executableCode[0]) === null || _j === void 0 ? void 0 : _j.code;
    }
    /**
     * Returns the first code execution result from the first candidate in the response.
     *
     * @remarks
     * If there are multiple candidates in the response, the code execution result from
     * the first one will be returned.
     * If there are no code execution result in the response, undefined will be returned.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateContent({
     *   model: 'gemini-2.0-flash',
     *   contents:
     *     'What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50.'
     *   config: {
     *     tools: [{codeExecution: {}}],
     *   },
     * });
     *
     * console.debug(response.codeExecutionResult);
     * ```
     */ get codeExecutionResult() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) return undefined;
        if (this.candidates && this.candidates.length > 1) console.warn('there are multiple candidates in the response, returning code execution result from the first one.');
        const codeExecutionResult = (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) === null || _h === void 0 ? void 0 : _h.filter((part)=>part.codeExecutionResult).map((part)=>part.codeExecutionResult).filter((codeExecutionResult)=>codeExecutionResult !== undefined);
        if ((codeExecutionResult === null || codeExecutionResult === void 0 ? void 0 : codeExecutionResult.length) === 0) return undefined;
        return (_j = codeExecutionResult === null || codeExecutionResult === void 0 ? void 0 : codeExecutionResult[0]) === null || _j === void 0 ? void 0 : _j.output;
    }
}
/** Response for the embed_content method. */ class EmbedContentResponse {
}
/** The output images response. */ class GenerateImagesResponse {
}
/** Response for the request to edit an image. */ class EditImageResponse {
}
class UpscaleImageResponse {
}
class ListModelsResponse {
}
class DeleteModelResponse {
}
/** Response for counting tokens. */ class CountTokensResponse {
}
/** Response for computing tokens. */ class ComputeTokensResponse {
}
/** Response with generated videos. */ class GenerateVideosResponse {
}
/** Response for the list tuning jobs method. */ class ListTuningJobsResponse {
}
/** Empty response for caches.delete method. */ class DeleteCachedContentResponse {
}
class ListCachedContentsResponse {
}
/** Response for the list files method. */ class ListFilesResponse {
}
/** Response for the create file method. */ class CreateFileResponse {
}
/** Response for the delete file method. */ class DeleteFileResponse {
}
/** Config for `inlined_responses` parameter. */ class InlinedResponse {
}
/** Config for batches.list return value. */ class ListBatchJobsResponse {
}
/** Represents a single response in a replay. */ class ReplayResponse {
}
/** A raw reference image.

  A raw reference image represents the base image to edit, provided by the user.
  It can optionally be provided in addition to a mask reference image or
  a style reference image.
   */ class RawReferenceImage {
    /** Internal method to convert to ReferenceImageAPIInternal. */ toReferenceImageAPI() {
        const referenceImageAPI = {
            referenceType: 'REFERENCE_TYPE_RAW',
            referenceImage: this.referenceImage,
            referenceId: this.referenceId
        };
        return referenceImageAPI;
    }
}
/** A mask reference image.

  This encapsulates either a mask image provided by the user and configs for
  the user provided mask, or only config parameters for the model to generate
  a mask.

  A mask image is an image whose non-zero values indicate where to edit the base
  image. If the user provides a mask image, the mask must be in the same
  dimensions as the raw image.
   */ class MaskReferenceImage {
    /** Internal method to convert to ReferenceImageAPIInternal. */ toReferenceImageAPI() {
        const referenceImageAPI = {
            referenceType: 'REFERENCE_TYPE_MASK',
            referenceImage: this.referenceImage,
            referenceId: this.referenceId,
            maskImageConfig: this.config
        };
        return referenceImageAPI;
    }
}
/** A control reference image.

  The image of the control reference image is either a control image provided
  by the user, or a regular image which the backend will use to generate a
  control image of. In the case of the latter, the
  enable_control_image_computation field in the config should be set to True.

  A control image is an image that represents a sketch image of areas for the
  model to fill in based on the prompt.
   */ class ControlReferenceImage {
    /** Internal method to convert to ReferenceImageAPIInternal. */ toReferenceImageAPI() {
        const referenceImageAPI = {
            referenceType: 'REFERENCE_TYPE_CONTROL',
            referenceImage: this.referenceImage,
            referenceId: this.referenceId,
            controlImageConfig: this.config
        };
        return referenceImageAPI;
    }
}
/** A style reference image.

  This encapsulates a style reference image provided by the user, and
  additionally optional config parameters for the style reference image.

  A raw reference image can also be provided as a destination for the style to
  be applied to.
   */ class StyleReferenceImage {
    /** Internal method to convert to ReferenceImageAPIInternal. */ toReferenceImageAPI() {
        const referenceImageAPI = {
            referenceType: 'REFERENCE_TYPE_STYLE',
            referenceImage: this.referenceImage,
            referenceId: this.referenceId,
            styleImageConfig: this.config
        };
        return referenceImageAPI;
    }
}
/** A subject reference image.

  This encapsulates a subject reference image provided by the user, and
  additionally optional config parameters for the subject reference image.

  A raw reference image can also be provided as a destination for the subject to
  be applied to.
   */ class SubjectReferenceImage {
    /* Internal method to convert to ReferenceImageAPIInternal. */ toReferenceImageAPI() {
        const referenceImageAPI = {
            referenceType: 'REFERENCE_TYPE_SUBJECT',
            referenceImage: this.referenceImage,
            referenceId: this.referenceId,
            subjectImageConfig: this.config
        };
        return referenceImageAPI;
    }
}
/** Response message for API call. */ class LiveServerMessage {
    /**
     * Returns the concatenation of all text parts from the server content if present.
     *
     * @remarks
     * If there are non-text parts in the response, the concatenation of all text
     * parts will be returned, and a warning will be logged.
     */ get text() {
        var _a, _b, _c;
        let text = '';
        let anyTextPartFound = false;
        const nonTextParts = [];
        for (const part of (_c = (_b = (_a = this.serverContent) === null || _a === void 0 ? void 0 : _a.modelTurn) === null || _b === void 0 ? void 0 : _b.parts) !== null && _c !== void 0 ? _c : []){
            for (const [fieldName, fieldValue] of Object.entries(part))if (fieldName !== 'text' && fieldName !== 'thought' && fieldValue !== null) nonTextParts.push(fieldName);
            if (typeof part.text === 'string') {
                if (typeof part.thought === 'boolean' && part.thought) continue;
                anyTextPartFound = true;
                text += part.text;
            }
        }
        if (nonTextParts.length > 0) console.warn(`there are non-text parts ${nonTextParts} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`);
        // part.text === '' is different from part.text is null
        return anyTextPartFound ? text : undefined;
    }
    /**
     * Returns the concatenation of all inline data parts from the server content if present.
     *
     * @remarks
     * If there are non-inline data parts in the
     * response, the concatenation of all inline data parts will be returned, and
     * a warning will be logged.
     */ get data() {
        var _a, _b, _c;
        let data = '';
        const nonDataParts = [];
        for (const part of (_c = (_b = (_a = this.serverContent) === null || _a === void 0 ? void 0 : _a.modelTurn) === null || _b === void 0 ? void 0 : _b.parts) !== null && _c !== void 0 ? _c : []){
            for (const [fieldName, fieldValue] of Object.entries(part))if (fieldName !== 'inlineData' && fieldValue !== null) nonDataParts.push(fieldName);
            if (part.inlineData && typeof part.inlineData.data === 'string') data += atob(part.inlineData.data);
        }
        if (nonDataParts.length > 0) console.warn(`there are non-data parts ${nonDataParts} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`);
        return data.length > 0 ? btoa(data) : undefined;
    }
}
/** Client generated response to a `ToolCall` received from the server.

  Individual `FunctionResponse` objects are matched to the respective
  `FunctionCall` objects by the `id` field.

  Note that in the unary and server-streaming GenerateContent APIs function
  calling happens by exchanging the `Content` parts, while in the bidi
  GenerateContent APIs function calling happens over this dedicated set of
  messages.
   */ class LiveClientToolResponse {
}
/** Parameters for sending tool responses to the live API. */ class LiveSendToolResponseParameters {
    constructor(){
        /** Tool responses to send to the session. */ this.functionResponses = [];
    }
}
/** Response message for the LiveMusicClientMessage call. */ class LiveMusicServerMessage {
    /**
     * Returns the first audio chunk from the server content, if present.
     *
     * @remarks
     * If there are no audio chunks in the response, undefined will be returned.
     */ get audioChunk() {
        if (this.serverContent && this.serverContent.audioChunks && this.serverContent.audioChunks.length > 0) return this.serverContent.audioChunks[0];
        return undefined;
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function tModel(apiClient, model) {
    if (!model || typeof model !== 'string') throw new Error('model is required and must be a string');
    if (apiClient.isVertexAI()) {
        if (model.startsWith('publishers/') || model.startsWith('projects/') || model.startsWith('models/')) return model;
        else if (model.indexOf('/') >= 0) {
            const parts = model.split('/', 2);
            return `publishers/${parts[0]}/models/${parts[1]}`;
        } else return `publishers/google/models/${model}`;
    } else {
        if (model.startsWith('models/') || model.startsWith('tunedModels/')) return model;
        else return `models/${model}`;
    }
}
function tCachesModel(apiClient, model) {
    const transformedModel = tModel(apiClient, model);
    if (!transformedModel) return '';
    if (transformedModel.startsWith('publishers/') && apiClient.isVertexAI()) // vertex caches only support model name start with projects.
    return `projects/${apiClient.getProject()}/locations/${apiClient.getLocation()}/${transformedModel}`;
    else if (transformedModel.startsWith('models/') && apiClient.isVertexAI()) return `projects/${apiClient.getProject()}/locations/${apiClient.getLocation()}/publishers/google/${transformedModel}`;
    else return transformedModel;
}
function tBlobs(blobs) {
    if (Array.isArray(blobs)) return blobs.map((blob)=>tBlob(blob));
    else return [
        tBlob(blobs)
    ];
}
function tBlob(blob) {
    if (typeof blob === 'object' && blob !== null) return blob;
    throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof blob}`);
}
function tImageBlob(blob) {
    const transformedBlob = tBlob(blob);
    if (transformedBlob.mimeType && transformedBlob.mimeType.startsWith('image/')) return transformedBlob;
    throw new Error(`Unsupported mime type: ${transformedBlob.mimeType}`);
}
function tAudioBlob(blob) {
    const transformedBlob = tBlob(blob);
    if (transformedBlob.mimeType && transformedBlob.mimeType.startsWith('audio/')) return transformedBlob;
    throw new Error(`Unsupported mime type: ${transformedBlob.mimeType}`);
}
function tPart(origin) {
    if (origin === null || origin === undefined) throw new Error('PartUnion is required');
    if (typeof origin === 'object') return origin;
    if (typeof origin === 'string') return {
        text: origin
    };
    throw new Error(`Unsupported part type: ${typeof origin}`);
}
function tParts(origin) {
    if (origin === null || origin === undefined || Array.isArray(origin) && origin.length === 0) throw new Error('PartListUnion is required');
    if (Array.isArray(origin)) return origin.map((item)=>tPart(item));
    return [
        tPart(origin)
    ];
}
function _isContent(origin) {
    return origin !== null && origin !== undefined && typeof origin === 'object' && 'parts' in origin && Array.isArray(origin.parts);
}
function _isFunctionCallPart(origin) {
    return origin !== null && origin !== undefined && typeof origin === 'object' && 'functionCall' in origin;
}
function _isFunctionResponsePart(origin) {
    return origin !== null && origin !== undefined && typeof origin === 'object' && 'functionResponse' in origin;
}
function tContent(origin) {
    if (origin === null || origin === undefined) throw new Error('ContentUnion is required');
    if (_isContent(origin)) // _isContent is a utility function that checks if the
    // origin is a Content.
    return origin;
    return {
        role: 'user',
        parts: tParts(origin)
    };
}
function tContentsForEmbed(apiClient, origin) {
    if (!origin) return [];
    if (apiClient.isVertexAI() && Array.isArray(origin)) return origin.flatMap((item)=>{
        const content = tContent(item);
        if (content.parts && content.parts.length > 0 && content.parts[0].text !== undefined) return [
            content.parts[0].text
        ];
        return [];
    });
    else if (apiClient.isVertexAI()) {
        const content = tContent(origin);
        if (content.parts && content.parts.length > 0 && content.parts[0].text !== undefined) return [
            content.parts[0].text
        ];
        return [];
    }
    if (Array.isArray(origin)) return origin.map((item)=>tContent(item));
    return [
        tContent(origin)
    ];
}
function tContents(origin) {
    if (origin === null || origin === undefined || Array.isArray(origin) && origin.length === 0) throw new Error('contents are required');
    if (!Array.isArray(origin)) {
        // If it's not an array, it's a single content or a single PartUnion.
        if (_isFunctionCallPart(origin) || _isFunctionResponsePart(origin)) throw new Error('To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them');
        return [
            tContent(origin)
        ];
    }
    const result = [];
    const accumulatedParts = [];
    const isContentArray = _isContent(origin[0]);
    for (const item of origin){
        const isContent = _isContent(item);
        if (isContent != isContentArray) throw new Error('Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them');
        if (isContent) // `isContent` contains the result of _isContent, which is a utility
        // function that checks if the item is a Content.
        result.push(item);
        else if (_isFunctionCallPart(item) || _isFunctionResponsePart(item)) throw new Error('To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them');
        else accumulatedParts.push(item);
    }
    if (!isContentArray) result.push({
        role: 'user',
        parts: tParts(accumulatedParts)
    });
    return result;
}
// The fields that are supported by JSONSchema. Must be kept in sync with the
// JSONSchema interface above.
const supportedJsonSchemaFields = new Set([
    'type',
    'format',
    'title',
    'description',
    'default',
    'items',
    'minItems',
    'maxItems',
    'enum',
    'properties',
    'required',
    'minProperties',
    'maxProperties',
    'minimum',
    'maximum',
    'minLength',
    'maxLength',
    'pattern',
    'anyOf',
    'propertyOrdering'
]);
const jsonSchemaTypeValidator = (0, _zod.z).enum([
    'string',
    'number',
    'integer',
    'object',
    'array',
    'boolean',
    'null'
]);
// Handles all types and arrays of all types.
const schemaTypeUnion = (0, _zod.z).union([
    jsonSchemaTypeValidator,
    (0, _zod.z).array(jsonSchemaTypeValidator)
]);
/**
 * Creates a zod validator for JSONSchema.
 *
 * @param strictMode Whether to enable strict mode, default to true. When
 * strict mode is enabled, the zod validator will throw error if there
 * are unrecognized fields in the input data. If strict mode is
 * disabled, the zod validator will ignore the unrecognized fields, only
 * populate the fields that are listed in the JSONSchema. Regardless of
 * the mode the type mismatch will always result in an error, for example
 * items field should be a single JSONSchema, but for tuple type it would
 * be an array of JSONSchema, this will always result in an error.
 * @return The zod validator for JSONSchema.
 */ function createJsonSchemaValidator(strictMode = true) {
    const jsonSchemaValidator = (0, _zod.z).lazy(()=>{
        // Define the base object shape *inside* the z.lazy callback
        const baseShape = (0, _zod.z).object({
            // --- Type ---
            type: schemaTypeUnion.optional(),
            // --- Annotations ---
            format: (0, _zod.z).string().optional(),
            title: (0, _zod.z).string().optional(),
            description: (0, _zod.z).string().optional(),
            default: (0, _zod.z).unknown().optional(),
            // --- Array Validations ---
            items: jsonSchemaValidator.optional(),
            minItems: (0, _zod.z).coerce.string().optional(),
            maxItems: (0, _zod.z).coerce.string().optional(),
            // --- Generic Validations ---
            enum: (0, _zod.z).array((0, _zod.z).unknown()).optional(),
            // --- Object Validations ---
            properties: (0, _zod.z).record((0, _zod.z).string(), jsonSchemaValidator).optional(),
            required: (0, _zod.z).array((0, _zod.z).string()).optional(),
            minProperties: (0, _zod.z).coerce.string().optional(),
            maxProperties: (0, _zod.z).coerce.string().optional(),
            propertyOrdering: (0, _zod.z).array((0, _zod.z).string()).optional(),
            // --- Numeric Validations ---
            minimum: (0, _zod.z).number().optional(),
            maximum: (0, _zod.z).number().optional(),
            // --- String Validations ---
            minLength: (0, _zod.z).coerce.string().optional(),
            maxLength: (0, _zod.z).coerce.string().optional(),
            pattern: (0, _zod.z).string().optional(),
            // --- Schema Composition ---
            anyOf: (0, _zod.z).array(jsonSchemaValidator).optional(),
            // --- Additional Properties --- This field is not included in the
            // JSONSchema, will not be communicated to the model, it is here purely
            // for enabling the zod validation strict mode.
            additionalProperties: (0, _zod.z).boolean().optional()
        });
        // Conditionally apply .strict() based on the flag
        return strictMode ? baseShape.strict() : baseShape;
    });
    return jsonSchemaValidator;
}
/*
Handle type field:
The resulted type field in JSONSchema form zod_to_json_schema can be either
an array consist of primitive types or a single primitive type.
This is due to the optimization of zod_to_json_schema, when the types in the
union are primitive types without any additional specifications,
zod_to_json_schema will squash the types into an array instead of put them
in anyOf fields. Otherwise, it will put the types in anyOf fields.
See the following link for more details:
https://github.com/zodjs/zod-to-json-schema/blob/main/src/index.ts#L101
The logic here is trying to undo that optimization, flattening the array of
types to anyOf fields.
                                 type field
                                      |
                            ___________________________
                           /                           \
                          /                              \
                         /                                \
                       Array                              Type.*
                /                  \                       |
      Include null.              Not included null     type = Type.*.
      [null, Type.*, Type.*]     multiple types.
      [null, Type.*]             [Type.*, Type.*]
            /                                \
      remove null                             \
      add nullable = true                      \
       /                    \                   \
    [Type.*]           [Type.*, Type.*]          \
 only one type left     multiple types left       \
 add type = Type.*.           \                  /
                               \                /
                         not populate the type field in final result
                           and make the types into anyOf fields
                          anyOf:[{type: 'Type.*'}, {type: 'Type.*'}];
*/ function flattenTypeArrayToAnyOf(typeList, resultingSchema) {
    if (typeList.includes('null')) resultingSchema['nullable'] = true;
    const listWithoutNull = typeList.filter((type)=>type !== 'null');
    if (listWithoutNull.length === 1) resultingSchema['type'] = Object.values(Type).includes(listWithoutNull[0].toUpperCase()) ? listWithoutNull[0].toUpperCase() : Type.TYPE_UNSPECIFIED;
    else {
        resultingSchema['anyOf'] = [];
        for (const i of listWithoutNull)resultingSchema['anyOf'].push({
            'type': Object.values(Type).includes(i.toUpperCase()) ? i.toUpperCase() : Type.TYPE_UNSPECIFIED
        });
    }
}
function processJsonSchema(_jsonSchema) {
    const genAISchema = {};
    const schemaFieldNames = [
        'items'
    ];
    const listSchemaFieldNames = [
        'anyOf'
    ];
    const dictSchemaFieldNames = [
        'properties'
    ];
    if (_jsonSchema['type'] && _jsonSchema['anyOf']) throw new Error('type and anyOf cannot be both populated.');
    /*
    This is to handle the nullable array or object. The _jsonSchema will
    be in the format of {anyOf: [{type: 'null'}, {type: 'object'}]}. The
    logic is to check if anyOf has 2 elements and one of the element is null,
    if so, the anyOf field is unnecessary, so we need to get rid of the anyOf
    field and make the schema nullable. Then use the other element as the new
    _jsonSchema for processing. This is because the backend doesn't have a null
    type.
    This has to be checked before we process any other fields.
    For example:
      const objectNullable = z.object({
        nullableArray: z.array(z.string()).nullable(),
      });
    Will have the raw _jsonSchema as:
    {
      type: 'OBJECT',
      properties: {
          nullableArray: {
             anyOf: [
                {type: 'null'},
                {
                  type: 'array',
                  items: {type: 'string'},
                },
              ],
          }
      },
      required: [ 'nullableArray' ],
    }
    Will result in following schema compatible with Gemini API:
      {
        type: 'OBJECT',
        properties: {
           nullableArray: {
              nullable: true,
              type: 'ARRAY',
              items: {type: 'string'},
           }
        },
        required: [ 'nullableArray' ],
      }
    */ const incomingAnyOf = _jsonSchema['anyOf'];
    if (incomingAnyOf != null && incomingAnyOf.length == 2) {
        if (incomingAnyOf[0]['type'] === 'null') {
            genAISchema['nullable'] = true;
            _jsonSchema = incomingAnyOf[1];
        } else if (incomingAnyOf[1]['type'] === 'null') {
            genAISchema['nullable'] = true;
            _jsonSchema = incomingAnyOf[0];
        }
    }
    if (_jsonSchema['type'] instanceof Array) flattenTypeArrayToAnyOf(_jsonSchema['type'], genAISchema);
    for (const [fieldName, fieldValue] of Object.entries(_jsonSchema)){
        // Skip if the fieldvalue is undefined or null.
        if (fieldValue == null) continue;
        if (fieldName == 'type') {
            if (fieldValue === 'null') throw new Error('type: null can not be the only possible type for the field.');
            if (fieldValue instanceof Array) continue;
            genAISchema['type'] = Object.values(Type).includes(fieldValue.toUpperCase()) ? fieldValue.toUpperCase() : Type.TYPE_UNSPECIFIED;
        } else if (schemaFieldNames.includes(fieldName)) genAISchema[fieldName] = processJsonSchema(fieldValue);
        else if (listSchemaFieldNames.includes(fieldName)) {
            const listSchemaFieldValue = [];
            for (const item of fieldValue){
                if (item['type'] == 'null') {
                    genAISchema['nullable'] = true;
                    continue;
                }
                listSchemaFieldValue.push(processJsonSchema(item));
            }
            genAISchema[fieldName] = listSchemaFieldValue;
        } else if (dictSchemaFieldNames.includes(fieldName)) {
            const dictSchemaFieldValue = {};
            for (const [key, value] of Object.entries(fieldValue))dictSchemaFieldValue[key] = processJsonSchema(value);
            genAISchema[fieldName] = dictSchemaFieldValue;
        } else {
            // additionalProperties is not included in JSONSchema, skipping it.
            if (fieldName === 'additionalProperties') continue;
            genAISchema[fieldName] = fieldValue;
        }
    }
    return genAISchema;
}
// we take the unknown in the schema field because we want enable user to pass
// the output of major schema declaration tools without casting. Tools such as
// zodToJsonSchema, typebox, zodToJsonSchema function can return JsonSchema7Type
// or object, see details in
// https://github.com/StefanTerdell/zod-to-json-schema/blob/70525efe555cd226691e093d171370a3b10921d1/src/zodToJsonSchema.ts#L7
// typebox can return unknown, see details in
// https://github.com/sinclairzx81/typebox/blob/5a5431439f7d5ca6b494d0d18fbfd7b1a356d67c/src/type/create/type.ts#L35
function tSchema(schema) {
    if (Object.keys(schema).includes('$schema')) {
        delete schema['$schema'];
        const validatedJsonSchema = createJsonSchemaValidator().parse(schema);
        return processJsonSchema(validatedJsonSchema);
    } else return processJsonSchema(schema);
}
function tSpeechConfig(speechConfig) {
    if (typeof speechConfig === 'object') return speechConfig;
    else if (typeof speechConfig === 'string') return {
        voiceConfig: {
            prebuiltVoiceConfig: {
                voiceName: speechConfig
            }
        }
    };
    else throw new Error(`Unsupported speechConfig type: ${typeof speechConfig}`);
}
function tLiveSpeechConfig(speechConfig) {
    if ('multiSpeakerVoiceConfig' in speechConfig) throw new Error('multiSpeakerVoiceConfig is not supported in the live API.');
    return speechConfig;
}
function tTool(tool) {
    if (tool.functionDeclarations) for (const functionDeclaration of tool.functionDeclarations){
        if (functionDeclaration.parameters) functionDeclaration.parameters = tSchema(functionDeclaration.parameters);
        if (functionDeclaration.response) functionDeclaration.response = tSchema(functionDeclaration.response);
    }
    return tool;
}
function tTools(tools) {
    // Check if the incoming type is defined.
    if (tools === undefined || tools === null) throw new Error('tools is required');
    if (!Array.isArray(tools)) throw new Error('tools is required and must be an array of Tools');
    const result = [];
    for (const tool of tools)result.push(tool);
    return result;
}
/**
 * Prepends resource name with project, location, resource_prefix if needed.
 *
 * @param client The API client.
 * @param resourceName The resource name.
 * @param resourcePrefix The resource prefix.
 * @param splitsAfterPrefix The number of splits after the prefix.
 * @returns The completed resource name.
 *
 * Examples:
 *
 * ```
 * resource_name = '123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = True
 * client.project = 'bar'
 * client.location = 'us-west1'
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * returns: 'projects/bar/locations/us-west1/cachedContents/123'
 * ```
 *
 * ```
 * resource_name = 'projects/foo/locations/us-central1/cachedContents/123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = True
 * client.project = 'bar'
 * client.location = 'us-west1'
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * returns: 'projects/foo/locations/us-central1/cachedContents/123'
 * ```
 *
 * ```
 * resource_name = '123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = False
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * returns 'cachedContents/123'
 * ```
 *
 * ```
 * resource_name = 'some/wrong/cachedContents/resource/name/123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = False
 * # client.vertexai = True
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * -> 'some/wrong/resource/name/123'
 * ```
 */ function resourceName(client, resourceName1, resourcePrefix, splitsAfterPrefix = 1) {
    const shouldAppendPrefix = !resourceName1.startsWith(`${resourcePrefix}/`) && resourceName1.split('/').length === splitsAfterPrefix;
    if (client.isVertexAI()) {
        if (resourceName1.startsWith('projects/')) return resourceName1;
        else if (resourceName1.startsWith('locations/')) return `projects/${client.getProject()}/${resourceName1}`;
        else if (resourceName1.startsWith(`${resourcePrefix}/`)) return `projects/${client.getProject()}/locations/${client.getLocation()}/${resourceName1}`;
        else if (shouldAppendPrefix) return `projects/${client.getProject()}/locations/${client.getLocation()}/${resourcePrefix}/${resourceName1}`;
        else return resourceName1;
    }
    if (shouldAppendPrefix) return `${resourcePrefix}/${resourceName1}`;
    return resourceName1;
}
function tCachedContentName(apiClient, name) {
    if (typeof name !== 'string') throw new Error('name must be a string');
    return resourceName(apiClient, name, 'cachedContents');
}
function tTuningJobStatus(status) {
    switch(status){
        case 'STATE_UNSPECIFIED':
            return 'JOB_STATE_UNSPECIFIED';
        case 'CREATING':
            return 'JOB_STATE_RUNNING';
        case 'ACTIVE':
            return 'JOB_STATE_SUCCEEDED';
        case 'FAILED':
            return 'JOB_STATE_FAILED';
        default:
            return status;
    }
}
function tBytes(fromImageBytes) {
    if (typeof fromImageBytes !== 'string') throw new Error('fromImageBytes must be a string');
    // TODO(b/389133914): Remove dummy bytes converter.
    return fromImageBytes;
}
function _isFile(origin) {
    return origin !== null && origin !== undefined && typeof origin === 'object' && 'name' in origin;
}
function isGeneratedVideo(origin) {
    return origin !== null && origin !== undefined && typeof origin === 'object' && 'video' in origin;
}
function isVideo(origin) {
    return origin !== null && origin !== undefined && typeof origin === 'object' && 'uri' in origin;
}
function tFileName(fromName) {
    var _a;
    let name;
    if (_isFile(fromName)) name = fromName.name;
    if (isVideo(fromName)) {
        name = fromName.uri;
        if (name === undefined) return undefined;
    }
    if (isGeneratedVideo(fromName)) {
        name = (_a = fromName.video) === null || _a === void 0 ? void 0 : _a.uri;
        if (name === undefined) return undefined;
    }
    if (typeof fromName === 'string') name = fromName;
    if (name === undefined) throw new Error('Could not extract file name from the provided input.');
    if (name.startsWith('https://')) {
        const suffix = name.split('files/')[1];
        const match = suffix.match(/[a-z0-9]+/);
        if (match === null) throw new Error(`Could not extract file name from URI ${name}`);
        name = match[0];
    } else if (name.startsWith('files/')) name = name.split('files/')[1];
    return name;
}
function tModelsUrl(apiClient, baseModels) {
    let res;
    if (apiClient.isVertexAI()) res = baseModels ? 'publishers/google/models' : 'models';
    else res = baseModels ? 'models' : 'tunedModels';
    return res;
}
function tExtractModels(response) {
    for (const key of [
        'models',
        'tunedModels',
        'publisherModels'
    ]){
        if (hasField(response, key)) return response[key];
    }
    return [];
}
function hasField(data, fieldName) {
    return data !== null && typeof data === 'object' && fieldName in data;
}
function mcpToGeminiTool(mcpTool, config = {}) {
    const mcpToolSchema = mcpTool;
    const functionDeclaration = {
        name: mcpToolSchema['name'],
        description: mcpToolSchema['description'],
        parameters: processJsonSchema(filterToJsonSchema(mcpToolSchema['inputSchema']))
    };
    if (config.behavior) functionDeclaration['behavior'] = config.behavior;
    const geminiTool = {
        functionDeclarations: [
            functionDeclaration
        ]
    };
    return geminiTool;
}
/**
 * Converts a list of MCP tools to a single Gemini tool with a list of function
 * declarations.
 */ function mcpToolsToGeminiTool(mcpTools, config = {}) {
    const functionDeclarations = [];
    const toolNames = new Set();
    for (const mcpTool of mcpTools){
        const mcpToolName = mcpTool.name;
        if (toolNames.has(mcpToolName)) throw new Error(`Duplicate function name ${mcpToolName} found in MCP tools. Please ensure function names are unique.`);
        toolNames.add(mcpToolName);
        const geminiTool = mcpToGeminiTool(mcpTool, config);
        if (geminiTool.functionDeclarations) functionDeclarations.push(...geminiTool.functionDeclarations);
    }
    return {
        functionDeclarations: functionDeclarations
    };
}
// Filters the list schema field to only include fields that are supported by
// JSONSchema.
function filterListSchemaField(fieldValue) {
    const listSchemaFieldValue = [];
    for (const listFieldValue of fieldValue)listSchemaFieldValue.push(filterToJsonSchema(listFieldValue));
    return listSchemaFieldValue;
}
// Filters the dict schema field to only include fields that are supported by
// JSONSchema.
function filterDictSchemaField(fieldValue) {
    const dictSchemaFieldValue = {};
    for (const [key, value] of Object.entries(fieldValue)){
        const valueRecord = value;
        dictSchemaFieldValue[key] = filterToJsonSchema(valueRecord);
    }
    return dictSchemaFieldValue;
}
// Filters the schema to only include fields that are supported by JSONSchema.
function filterToJsonSchema(schema) {
    const schemaFieldNames = new Set([
        'items'
    ]); // 'additional_properties' to come
    const listSchemaFieldNames = new Set([
        'anyOf'
    ]); // 'one_of', 'all_of', 'not' to come
    const dictSchemaFieldNames = new Set([
        'properties'
    ]); // 'defs' to come
    const filteredSchema = {};
    for (const [fieldName, fieldValue] of Object.entries(schema)){
        if (schemaFieldNames.has(fieldName)) filteredSchema[fieldName] = filterToJsonSchema(fieldValue);
        else if (listSchemaFieldNames.has(fieldName)) filteredSchema[fieldName] = filterListSchemaField(fieldValue);
        else if (dictSchemaFieldNames.has(fieldName)) filteredSchema[fieldName] = filterDictSchemaField(fieldValue);
        else if (fieldName === 'type') {
            const typeValue = fieldValue.toUpperCase();
            filteredSchema[fieldName] = Object.values(Type).includes(typeValue) ? typeValue : Type.TYPE_UNSPECIFIED;
        } else if (supportedJsonSchemaFields.has(fieldName)) filteredSchema[fieldName] = fieldValue;
    }
    return filteredSchema;
}
// Transforms a source input into a BatchJobSource object with validation.
function tBatchJobSource(apiClient, src) {
    if (typeof src !== 'string' && !Array.isArray(src)) {
        if (apiClient && apiClient.isVertexAI()) {
            if (src.gcsUri && src.bigqueryUri) throw new Error('Only one of `gcsUri` or `bigqueryUri` can be set.');
            else if (!src.gcsUri && !src.bigqueryUri) throw new Error('One of `gcsUri` or `bigqueryUri` must be set.');
        } else {
            // Logic for non-Vertex AI client (inlined_requests, file_name)
            if (src.inlinedRequests && src.fileName) throw new Error('Only one of `inlinedRequests` or `fileName` can be set.');
            else if (!src.inlinedRequests && !src.fileName) throw new Error('One of `inlinedRequests` or `fileName` must be set.');
        }
        return src;
    } else if (Array.isArray(src)) return {
        inlinedRequests: src
    };
    else if (typeof src === 'string') {
        if (src.startsWith('gs://')) return {
            format: 'jsonl',
            gcsUri: [
                src
            ]
        };
        else if (src.startsWith('bq://')) return {
            format: 'bigquery',
            bigqueryUri: src
        };
        else if (src.startsWith('files/')) return {
            fileName: src
        };
    }
    throw new Error(`Unsupported source: ${src}`);
}
function tBatchJobDestination(dest) {
    const destString = dest;
    if (destString.startsWith('gs://')) return {
        format: 'jsonl',
        gcsUri: destString
    };
    else if (destString.startsWith('bq://')) return {
        format: 'bigquery',
        bigqueryUri: destString
    };
    else throw new Error(`Unsupported destination: ${destString}`);
}
function tBatchJobName(apiClient, name) {
    const nameString = name;
    if (!apiClient.isVertexAI()) {
        const mldevPattern = /batches\/[^/]+$/;
        if (mldevPattern.test(nameString)) return nameString.split('/').pop();
        else throw new Error(`Invalid batch job name: ${nameString}.`);
    }
    const vertexPattern = /^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/;
    if (vertexPattern.test(nameString)) return nameString.split('/').pop();
    else if (/^\d+$/.test(nameString)) return nameString;
    else throw new Error(`Invalid batch job name: ${nameString}.`);
}
function tJobState(state) {
    const stateString = state;
    if (stateString === 'BATCH_STATE_UNSPECIFIED') return 'JOB_STATE_UNSPECIFIED';
    else if (stateString === 'BATCH_STATE_PENDING') return 'JOB_STATE_PENDING';
    else if (stateString === 'BATCH_STATE_SUCCEEDED') return 'JOB_STATE_SUCCEEDED';
    else if (stateString === 'BATCH_STATE_FAILED') return 'JOB_STATE_FAILED';
    else if (stateString === 'BATCH_STATE_CANCELLED') return 'JOB_STATE_CANCELLED';
    else return stateString;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function videoMetadataToMldev$4(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function blobToMldev$4(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'displayName'
    ]) !== undefined) throw new Error('displayName parameter is not supported in Gemini API.');
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataToMldev$4(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'displayName'
    ]) !== undefined) throw new Error('displayName parameter is not supported in Gemini API.');
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function partToMldev$4(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataToMldev$4(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobToMldev$4(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataToMldev$4(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function contentToMldev$4(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partToMldev$4(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function schemaToMldev$1(fromObject) {
    const toObject = {};
    const fromAnyOf = getValueByPath(fromObject, [
        'anyOf'
    ]);
    if (fromAnyOf != null) setValueByPath(toObject, [
        'anyOf'
    ], fromAnyOf);
    const fromDefault = getValueByPath(fromObject, [
        'default'
    ]);
    if (fromDefault != null) setValueByPath(toObject, [
        'default'
    ], fromDefault);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromEnum = getValueByPath(fromObject, [
        'enum'
    ]);
    if (fromEnum != null) setValueByPath(toObject, [
        'enum'
    ], fromEnum);
    const fromExample = getValueByPath(fromObject, [
        'example'
    ]);
    if (fromExample != null) setValueByPath(toObject, [
        'example'
    ], fromExample);
    const fromFormat = getValueByPath(fromObject, [
        'format'
    ]);
    if (fromFormat != null) setValueByPath(toObject, [
        'format'
    ], fromFormat);
    const fromItems = getValueByPath(fromObject, [
        'items'
    ]);
    if (fromItems != null) setValueByPath(toObject, [
        'items'
    ], fromItems);
    const fromMaxItems = getValueByPath(fromObject, [
        'maxItems'
    ]);
    if (fromMaxItems != null) setValueByPath(toObject, [
        'maxItems'
    ], fromMaxItems);
    const fromMaxLength = getValueByPath(fromObject, [
        'maxLength'
    ]);
    if (fromMaxLength != null) setValueByPath(toObject, [
        'maxLength'
    ], fromMaxLength);
    const fromMaxProperties = getValueByPath(fromObject, [
        'maxProperties'
    ]);
    if (fromMaxProperties != null) setValueByPath(toObject, [
        'maxProperties'
    ], fromMaxProperties);
    const fromMaximum = getValueByPath(fromObject, [
        'maximum'
    ]);
    if (fromMaximum != null) setValueByPath(toObject, [
        'maximum'
    ], fromMaximum);
    const fromMinItems = getValueByPath(fromObject, [
        'minItems'
    ]);
    if (fromMinItems != null) setValueByPath(toObject, [
        'minItems'
    ], fromMinItems);
    const fromMinLength = getValueByPath(fromObject, [
        'minLength'
    ]);
    if (fromMinLength != null) setValueByPath(toObject, [
        'minLength'
    ], fromMinLength);
    const fromMinProperties = getValueByPath(fromObject, [
        'minProperties'
    ]);
    if (fromMinProperties != null) setValueByPath(toObject, [
        'minProperties'
    ], fromMinProperties);
    const fromMinimum = getValueByPath(fromObject, [
        'minimum'
    ]);
    if (fromMinimum != null) setValueByPath(toObject, [
        'minimum'
    ], fromMinimum);
    const fromNullable = getValueByPath(fromObject, [
        'nullable'
    ]);
    if (fromNullable != null) setValueByPath(toObject, [
        'nullable'
    ], fromNullable);
    const fromPattern = getValueByPath(fromObject, [
        'pattern'
    ]);
    if (fromPattern != null) setValueByPath(toObject, [
        'pattern'
    ], fromPattern);
    const fromProperties = getValueByPath(fromObject, [
        'properties'
    ]);
    if (fromProperties != null) setValueByPath(toObject, [
        'properties'
    ], fromProperties);
    const fromPropertyOrdering = getValueByPath(fromObject, [
        'propertyOrdering'
    ]);
    if (fromPropertyOrdering != null) setValueByPath(toObject, [
        'propertyOrdering'
    ], fromPropertyOrdering);
    const fromRequired = getValueByPath(fromObject, [
        'required'
    ]);
    if (fromRequired != null) setValueByPath(toObject, [
        'required'
    ], fromRequired);
    const fromTitle = getValueByPath(fromObject, [
        'title'
    ]);
    if (fromTitle != null) setValueByPath(toObject, [
        'title'
    ], fromTitle);
    const fromType = getValueByPath(fromObject, [
        'type'
    ]);
    if (fromType != null) setValueByPath(toObject, [
        'type'
    ], fromType);
    return toObject;
}
function safetySettingToMldev$1(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'method'
    ]) !== undefined) throw new Error('method parameter is not supported in Gemini API.');
    const fromCategory = getValueByPath(fromObject, [
        'category'
    ]);
    if (fromCategory != null) setValueByPath(toObject, [
        'category'
    ], fromCategory);
    const fromThreshold = getValueByPath(fromObject, [
        'threshold'
    ]);
    if (fromThreshold != null) setValueByPath(toObject, [
        'threshold'
    ], fromThreshold);
    return toObject;
}
function functionDeclarationToMldev$4(fromObject) {
    const toObject = {};
    const fromBehavior = getValueByPath(fromObject, [
        'behavior'
    ]);
    if (fromBehavior != null) setValueByPath(toObject, [
        'behavior'
    ], fromBehavior);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromParameters = getValueByPath(fromObject, [
        'parameters'
    ]);
    if (fromParameters != null) setValueByPath(toObject, [
        'parameters'
    ], fromParameters);
    const fromParametersJsonSchema = getValueByPath(fromObject, [
        'parametersJsonSchema'
    ]);
    if (fromParametersJsonSchema != null) setValueByPath(toObject, [
        'parametersJsonSchema'
    ], fromParametersJsonSchema);
    const fromResponse = getValueByPath(fromObject, [
        'response'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], fromResponse);
    const fromResponseJsonSchema = getValueByPath(fromObject, [
        'responseJsonSchema'
    ]);
    if (fromResponseJsonSchema != null) setValueByPath(toObject, [
        'responseJsonSchema'
    ], fromResponseJsonSchema);
    return toObject;
}
function intervalToMldev$4(fromObject) {
    const toObject = {};
    const fromStartTime = getValueByPath(fromObject, [
        'startTime'
    ]);
    if (fromStartTime != null) setValueByPath(toObject, [
        'startTime'
    ], fromStartTime);
    const fromEndTime = getValueByPath(fromObject, [
        'endTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    return toObject;
}
function googleSearchToMldev$4(fromObject) {
    const toObject = {};
    const fromTimeRangeFilter = getValueByPath(fromObject, [
        'timeRangeFilter'
    ]);
    if (fromTimeRangeFilter != null) setValueByPath(toObject, [
        'timeRangeFilter'
    ], intervalToMldev$4(fromTimeRangeFilter));
    return toObject;
}
function dynamicRetrievalConfigToMldev$4(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold'
    ]);
    if (fromDynamicThreshold != null) setValueByPath(toObject, [
        'dynamicThreshold'
    ], fromDynamicThreshold);
    return toObject;
}
function googleSearchRetrievalToMldev$4(fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig'
    ]);
    if (fromDynamicRetrievalConfig != null) setValueByPath(toObject, [
        'dynamicRetrievalConfig'
    ], dynamicRetrievalConfigToMldev$4(fromDynamicRetrievalConfig));
    return toObject;
}
function urlContextToMldev$4() {
    const toObject = {};
    return toObject;
}
function toolToMldev$4(fromObject) {
    const toObject = {};
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations'
    ]);
    if (fromFunctionDeclarations != null) {
        let transformedList = fromFunctionDeclarations;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return functionDeclarationToMldev$4(item);
        });
        setValueByPath(toObject, [
            'functionDeclarations'
        ], transformedList);
    }
    if (getValueByPath(fromObject, [
        'retrieval'
    ]) !== undefined) throw new Error('retrieval parameter is not supported in Gemini API.');
    const fromGoogleSearch = getValueByPath(fromObject, [
        'googleSearch'
    ]);
    if (fromGoogleSearch != null) setValueByPath(toObject, [
        'googleSearch'
    ], googleSearchToMldev$4(fromGoogleSearch));
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval'
    ]);
    if (fromGoogleSearchRetrieval != null) setValueByPath(toObject, [
        'googleSearchRetrieval'
    ], googleSearchRetrievalToMldev$4(fromGoogleSearchRetrieval));
    if (getValueByPath(fromObject, [
        'enterpriseWebSearch'
    ]) !== undefined) throw new Error('enterpriseWebSearch parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'googleMaps'
    ]) !== undefined) throw new Error('googleMaps parameter is not supported in Gemini API.');
    const fromUrlContext = getValueByPath(fromObject, [
        'urlContext'
    ]);
    if (fromUrlContext != null) setValueByPath(toObject, [
        'urlContext'
    ], urlContextToMldev$4());
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution'
    ]);
    if (fromCodeExecution != null) setValueByPath(toObject, [
        'codeExecution'
    ], fromCodeExecution);
    const fromComputerUse = getValueByPath(fromObject, [
        'computerUse'
    ]);
    if (fromComputerUse != null) setValueByPath(toObject, [
        'computerUse'
    ], fromComputerUse);
    return toObject;
}
function functionCallingConfigToMldev$2(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromAllowedFunctionNames = getValueByPath(fromObject, [
        'allowedFunctionNames'
    ]);
    if (fromAllowedFunctionNames != null) setValueByPath(toObject, [
        'allowedFunctionNames'
    ], fromAllowedFunctionNames);
    return toObject;
}
function latLngToMldev$2(fromObject) {
    const toObject = {};
    const fromLatitude = getValueByPath(fromObject, [
        'latitude'
    ]);
    if (fromLatitude != null) setValueByPath(toObject, [
        'latitude'
    ], fromLatitude);
    const fromLongitude = getValueByPath(fromObject, [
        'longitude'
    ]);
    if (fromLongitude != null) setValueByPath(toObject, [
        'longitude'
    ], fromLongitude);
    return toObject;
}
function retrievalConfigToMldev$2(fromObject) {
    const toObject = {};
    const fromLatLng = getValueByPath(fromObject, [
        'latLng'
    ]);
    if (fromLatLng != null) setValueByPath(toObject, [
        'latLng'
    ], latLngToMldev$2(fromLatLng));
    const fromLanguageCode = getValueByPath(fromObject, [
        'languageCode'
    ]);
    if (fromLanguageCode != null) setValueByPath(toObject, [
        'languageCode'
    ], fromLanguageCode);
    return toObject;
}
function toolConfigToMldev$2(fromObject) {
    const toObject = {};
    const fromFunctionCallingConfig = getValueByPath(fromObject, [
        'functionCallingConfig'
    ]);
    if (fromFunctionCallingConfig != null) setValueByPath(toObject, [
        'functionCallingConfig'
    ], functionCallingConfigToMldev$2(fromFunctionCallingConfig));
    const fromRetrievalConfig = getValueByPath(fromObject, [
        'retrievalConfig'
    ]);
    if (fromRetrievalConfig != null) setValueByPath(toObject, [
        'retrievalConfig'
    ], retrievalConfigToMldev$2(fromRetrievalConfig));
    return toObject;
}
function prebuiltVoiceConfigToMldev$3(fromObject) {
    const toObject = {};
    const fromVoiceName = getValueByPath(fromObject, [
        'voiceName'
    ]);
    if (fromVoiceName != null) setValueByPath(toObject, [
        'voiceName'
    ], fromVoiceName);
    return toObject;
}
function voiceConfigToMldev$3(fromObject) {
    const toObject = {};
    const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
        'prebuiltVoiceConfig'
    ]);
    if (fromPrebuiltVoiceConfig != null) setValueByPath(toObject, [
        'prebuiltVoiceConfig'
    ], prebuiltVoiceConfigToMldev$3(fromPrebuiltVoiceConfig));
    return toObject;
}
function speakerVoiceConfigToMldev$3(fromObject) {
    const toObject = {};
    const fromSpeaker = getValueByPath(fromObject, [
        'speaker'
    ]);
    if (fromSpeaker != null) setValueByPath(toObject, [
        'speaker'
    ], fromSpeaker);
    const fromVoiceConfig = getValueByPath(fromObject, [
        'voiceConfig'
    ]);
    if (fromVoiceConfig != null) setValueByPath(toObject, [
        'voiceConfig'
    ], voiceConfigToMldev$3(fromVoiceConfig));
    return toObject;
}
function multiSpeakerVoiceConfigToMldev$3(fromObject) {
    const toObject = {};
    const fromSpeakerVoiceConfigs = getValueByPath(fromObject, [
        'speakerVoiceConfigs'
    ]);
    if (fromSpeakerVoiceConfigs != null) {
        let transformedList = fromSpeakerVoiceConfigs;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return speakerVoiceConfigToMldev$3(item);
        });
        setValueByPath(toObject, [
            'speakerVoiceConfigs'
        ], transformedList);
    }
    return toObject;
}
function speechConfigToMldev$3(fromObject) {
    const toObject = {};
    const fromVoiceConfig = getValueByPath(fromObject, [
        'voiceConfig'
    ]);
    if (fromVoiceConfig != null) setValueByPath(toObject, [
        'voiceConfig'
    ], voiceConfigToMldev$3(fromVoiceConfig));
    const fromMultiSpeakerVoiceConfig = getValueByPath(fromObject, [
        'multiSpeakerVoiceConfig'
    ]);
    if (fromMultiSpeakerVoiceConfig != null) setValueByPath(toObject, [
        'multiSpeakerVoiceConfig'
    ], multiSpeakerVoiceConfigToMldev$3(fromMultiSpeakerVoiceConfig));
    const fromLanguageCode = getValueByPath(fromObject, [
        'languageCode'
    ]);
    if (fromLanguageCode != null) setValueByPath(toObject, [
        'languageCode'
    ], fromLanguageCode);
    return toObject;
}
function thinkingConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromIncludeThoughts = getValueByPath(fromObject, [
        'includeThoughts'
    ]);
    if (fromIncludeThoughts != null) setValueByPath(toObject, [
        'includeThoughts'
    ], fromIncludeThoughts);
    const fromThinkingBudget = getValueByPath(fromObject, [
        'thinkingBudget'
    ]);
    if (fromThinkingBudget != null) setValueByPath(toObject, [
        'thinkingBudget'
    ], fromThinkingBudget);
    return toObject;
}
function generateContentConfigToMldev$1(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction'
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) setValueByPath(parentObject, [
        'systemInstruction'
    ], contentToMldev$4(tContent(fromSystemInstruction)));
    const fromTemperature = getValueByPath(fromObject, [
        'temperature'
    ]);
    if (fromTemperature != null) setValueByPath(toObject, [
        'temperature'
    ], fromTemperature);
    const fromTopP = getValueByPath(fromObject, [
        'topP'
    ]);
    if (fromTopP != null) setValueByPath(toObject, [
        'topP'
    ], fromTopP);
    const fromTopK = getValueByPath(fromObject, [
        'topK'
    ]);
    if (fromTopK != null) setValueByPath(toObject, [
        'topK'
    ], fromTopK);
    const fromCandidateCount = getValueByPath(fromObject, [
        'candidateCount'
    ]);
    if (fromCandidateCount != null) setValueByPath(toObject, [
        'candidateCount'
    ], fromCandidateCount);
    const fromMaxOutputTokens = getValueByPath(fromObject, [
        'maxOutputTokens'
    ]);
    if (fromMaxOutputTokens != null) setValueByPath(toObject, [
        'maxOutputTokens'
    ], fromMaxOutputTokens);
    const fromStopSequences = getValueByPath(fromObject, [
        'stopSequences'
    ]);
    if (fromStopSequences != null) setValueByPath(toObject, [
        'stopSequences'
    ], fromStopSequences);
    const fromResponseLogprobs = getValueByPath(fromObject, [
        'responseLogprobs'
    ]);
    if (fromResponseLogprobs != null) setValueByPath(toObject, [
        'responseLogprobs'
    ], fromResponseLogprobs);
    const fromLogprobs = getValueByPath(fromObject, [
        'logprobs'
    ]);
    if (fromLogprobs != null) setValueByPath(toObject, [
        'logprobs'
    ], fromLogprobs);
    const fromPresencePenalty = getValueByPath(fromObject, [
        'presencePenalty'
    ]);
    if (fromPresencePenalty != null) setValueByPath(toObject, [
        'presencePenalty'
    ], fromPresencePenalty);
    const fromFrequencyPenalty = getValueByPath(fromObject, [
        'frequencyPenalty'
    ]);
    if (fromFrequencyPenalty != null) setValueByPath(toObject, [
        'frequencyPenalty'
    ], fromFrequencyPenalty);
    const fromSeed = getValueByPath(fromObject, [
        'seed'
    ]);
    if (fromSeed != null) setValueByPath(toObject, [
        'seed'
    ], fromSeed);
    const fromResponseMimeType = getValueByPath(fromObject, [
        'responseMimeType'
    ]);
    if (fromResponseMimeType != null) setValueByPath(toObject, [
        'responseMimeType'
    ], fromResponseMimeType);
    const fromResponseSchema = getValueByPath(fromObject, [
        'responseSchema'
    ]);
    if (fromResponseSchema != null) setValueByPath(toObject, [
        'responseSchema'
    ], schemaToMldev$1(tSchema(fromResponseSchema)));
    const fromResponseJsonSchema = getValueByPath(fromObject, [
        'responseJsonSchema'
    ]);
    if (fromResponseJsonSchema != null) setValueByPath(toObject, [
        'responseJsonSchema'
    ], fromResponseJsonSchema);
    if (getValueByPath(fromObject, [
        'routingConfig'
    ]) !== undefined) throw new Error('routingConfig parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'modelSelectionConfig'
    ]) !== undefined) throw new Error('modelSelectionConfig parameter is not supported in Gemini API.');
    const fromSafetySettings = getValueByPath(fromObject, [
        'safetySettings'
    ]);
    if (parentObject !== undefined && fromSafetySettings != null) {
        let transformedList = fromSafetySettings;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return safetySettingToMldev$1(item);
        });
        setValueByPath(parentObject, [
            'safetySettings'
        ], transformedList);
    }
    const fromTools = getValueByPath(fromObject, [
        'tools'
    ]);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = tTools(fromTools);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return toolToMldev$4(tTool(item));
        });
        setValueByPath(parentObject, [
            'tools'
        ], transformedList);
    }
    const fromToolConfig = getValueByPath(fromObject, [
        'toolConfig'
    ]);
    if (parentObject !== undefined && fromToolConfig != null) setValueByPath(parentObject, [
        'toolConfig'
    ], toolConfigToMldev$2(fromToolConfig));
    if (getValueByPath(fromObject, [
        'labels'
    ]) !== undefined) throw new Error('labels parameter is not supported in Gemini API.');
    const fromCachedContent = getValueByPath(fromObject, [
        'cachedContent'
    ]);
    if (parentObject !== undefined && fromCachedContent != null) setValueByPath(parentObject, [
        'cachedContent'
    ], tCachedContentName(apiClient, fromCachedContent));
    const fromResponseModalities = getValueByPath(fromObject, [
        'responseModalities'
    ]);
    if (fromResponseModalities != null) setValueByPath(toObject, [
        'responseModalities'
    ], fromResponseModalities);
    const fromMediaResolution = getValueByPath(fromObject, [
        'mediaResolution'
    ]);
    if (fromMediaResolution != null) setValueByPath(toObject, [
        'mediaResolution'
    ], fromMediaResolution);
    const fromSpeechConfig = getValueByPath(fromObject, [
        'speechConfig'
    ]);
    if (fromSpeechConfig != null) setValueByPath(toObject, [
        'speechConfig'
    ], speechConfigToMldev$3(tSpeechConfig(fromSpeechConfig)));
    if (getValueByPath(fromObject, [
        'audioTimestamp'
    ]) !== undefined) throw new Error('audioTimestamp parameter is not supported in Gemini API.');
    const fromThinkingConfig = getValueByPath(fromObject, [
        'thinkingConfig'
    ]);
    if (fromThinkingConfig != null) setValueByPath(toObject, [
        'thinkingConfig'
    ], thinkingConfigToMldev$1(fromThinkingConfig));
    return toObject;
}
function inlinedRequestToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'request',
        'model'
    ], tModel(apiClient, fromModel));
    const fromContents = getValueByPath(fromObject, [
        'contents'
    ]);
    if (fromContents != null) {
        let transformedList = tContents(fromContents);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return contentToMldev$4(item);
        });
        setValueByPath(toObject, [
            'request',
            'contents'
        ], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'request',
        'generationConfig'
    ], generateContentConfigToMldev$1(apiClient, fromConfig, toObject));
    return toObject;
}
function batchJobSourceToMldev(apiClient, fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'format'
    ]) !== undefined) throw new Error('format parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'gcsUri'
    ]) !== undefined) throw new Error('gcsUri parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'bigqueryUri'
    ]) !== undefined) throw new Error('bigqueryUri parameter is not supported in Gemini API.');
    const fromFileName = getValueByPath(fromObject, [
        'fileName'
    ]);
    if (fromFileName != null) setValueByPath(toObject, [
        'fileName'
    ], fromFileName);
    const fromInlinedRequests = getValueByPath(fromObject, [
        'inlinedRequests'
    ]);
    if (fromInlinedRequests != null) {
        let transformedList = fromInlinedRequests;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return inlinedRequestToMldev(apiClient, item);
        });
        setValueByPath(toObject, [
            'requests',
            'requests'
        ], transformedList);
    }
    return toObject;
}
function createBatchJobConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (parentObject !== undefined && fromDisplayName != null) setValueByPath(parentObject, [
        'batch',
        'displayName'
    ], fromDisplayName);
    if (getValueByPath(fromObject, [
        'dest'
    ]) !== undefined) throw new Error('dest parameter is not supported in Gemini API.');
    return toObject;
}
function createBatchJobParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromSrc = getValueByPath(fromObject, [
        'src'
    ]);
    if (fromSrc != null) setValueByPath(toObject, [
        'batch',
        'inputConfig'
    ], batchJobSourceToMldev(apiClient, tBatchJobSource(apiClient, fromSrc)));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], createBatchJobConfigToMldev(fromConfig, toObject));
    return toObject;
}
function getBatchJobParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tBatchJobName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function cancelBatchJobParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tBatchJobName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function listBatchJobsConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, [
        'pageSize'
    ]);
    if (parentObject !== undefined && fromPageSize != null) setValueByPath(parentObject, [
        '_query',
        'pageSize'
    ], fromPageSize);
    const fromPageToken = getValueByPath(fromObject, [
        'pageToken'
    ]);
    if (parentObject !== undefined && fromPageToken != null) setValueByPath(parentObject, [
        '_query',
        'pageToken'
    ], fromPageToken);
    if (getValueByPath(fromObject, [
        'filter'
    ]) !== undefined) throw new Error('filter parameter is not supported in Gemini API.');
    return toObject;
}
function listBatchJobsParametersToMldev(fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], listBatchJobsConfigToMldev(fromConfig, toObject));
    return toObject;
}
function deleteBatchJobParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tBatchJobName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function batchJobSourceToVertex(fromObject) {
    const toObject = {};
    const fromFormat = getValueByPath(fromObject, [
        'format'
    ]);
    if (fromFormat != null) setValueByPath(toObject, [
        'instancesFormat'
    ], fromFormat);
    const fromGcsUri = getValueByPath(fromObject, [
        'gcsUri'
    ]);
    if (fromGcsUri != null) setValueByPath(toObject, [
        'gcsSource',
        'uris'
    ], fromGcsUri);
    const fromBigqueryUri = getValueByPath(fromObject, [
        'bigqueryUri'
    ]);
    if (fromBigqueryUri != null) setValueByPath(toObject, [
        'bigquerySource',
        'inputUri'
    ], fromBigqueryUri);
    if (getValueByPath(fromObject, [
        'fileName'
    ]) !== undefined) throw new Error('fileName parameter is not supported in Vertex AI.');
    if (getValueByPath(fromObject, [
        'inlinedRequests'
    ]) !== undefined) throw new Error('inlinedRequests parameter is not supported in Vertex AI.');
    return toObject;
}
function batchJobDestinationToVertex(fromObject) {
    const toObject = {};
    const fromFormat = getValueByPath(fromObject, [
        'format'
    ]);
    if (fromFormat != null) setValueByPath(toObject, [
        'predictionsFormat'
    ], fromFormat);
    const fromGcsUri = getValueByPath(fromObject, [
        'gcsUri'
    ]);
    if (fromGcsUri != null) setValueByPath(toObject, [
        'gcsDestination',
        'outputUriPrefix'
    ], fromGcsUri);
    const fromBigqueryUri = getValueByPath(fromObject, [
        'bigqueryUri'
    ]);
    if (fromBigqueryUri != null) setValueByPath(toObject, [
        'bigqueryDestination',
        'outputUri'
    ], fromBigqueryUri);
    if (getValueByPath(fromObject, [
        'fileName'
    ]) !== undefined) throw new Error('fileName parameter is not supported in Vertex AI.');
    if (getValueByPath(fromObject, [
        'inlinedResponses'
    ]) !== undefined) throw new Error('inlinedResponses parameter is not supported in Vertex AI.');
    return toObject;
}
function createBatchJobConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (parentObject !== undefined && fromDisplayName != null) setValueByPath(parentObject, [
        'displayName'
    ], fromDisplayName);
    const fromDest = getValueByPath(fromObject, [
        'dest'
    ]);
    if (parentObject !== undefined && fromDest != null) setValueByPath(parentObject, [
        'outputConfig'
    ], batchJobDestinationToVertex(tBatchJobDestination(fromDest)));
    return toObject;
}
function createBatchJobParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'model'
    ], tModel(apiClient, fromModel));
    const fromSrc = getValueByPath(fromObject, [
        'src'
    ]);
    if (fromSrc != null) setValueByPath(toObject, [
        'inputConfig'
    ], batchJobSourceToVertex(tBatchJobSource(apiClient, fromSrc)));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], createBatchJobConfigToVertex(fromConfig, toObject));
    return toObject;
}
function getBatchJobParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tBatchJobName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function cancelBatchJobParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tBatchJobName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function listBatchJobsConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, [
        'pageSize'
    ]);
    if (parentObject !== undefined && fromPageSize != null) setValueByPath(parentObject, [
        '_query',
        'pageSize'
    ], fromPageSize);
    const fromPageToken = getValueByPath(fromObject, [
        'pageToken'
    ]);
    if (parentObject !== undefined && fromPageToken != null) setValueByPath(parentObject, [
        '_query',
        'pageToken'
    ], fromPageToken);
    const fromFilter = getValueByPath(fromObject, [
        'filter'
    ]);
    if (parentObject !== undefined && fromFilter != null) setValueByPath(parentObject, [
        '_query',
        'filter'
    ], fromFilter);
    return toObject;
}
function listBatchJobsParametersToVertex(fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], listBatchJobsConfigToVertex(fromConfig, toObject));
    return toObject;
}
function deleteBatchJobParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tBatchJobName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function jobErrorFromMldev() {
    const toObject = {};
    return toObject;
}
function videoMetadataFromMldev$2(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function blobFromMldev$2(fromObject) {
    const toObject = {};
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataFromMldev$2(fromObject) {
    const toObject = {};
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function partFromMldev$2(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataFromMldev$2(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobFromMldev$2(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataFromMldev$2(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function contentFromMldev$2(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partFromMldev$2(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function citationMetadataFromMldev$1(fromObject) {
    const toObject = {};
    const fromCitations = getValueByPath(fromObject, [
        'citationSources'
    ]);
    if (fromCitations != null) setValueByPath(toObject, [
        'citations'
    ], fromCitations);
    return toObject;
}
function urlMetadataFromMldev$2(fromObject) {
    const toObject = {};
    const fromRetrievedUrl = getValueByPath(fromObject, [
        'retrievedUrl'
    ]);
    if (fromRetrievedUrl != null) setValueByPath(toObject, [
        'retrievedUrl'
    ], fromRetrievedUrl);
    const fromUrlRetrievalStatus = getValueByPath(fromObject, [
        'urlRetrievalStatus'
    ]);
    if (fromUrlRetrievalStatus != null) setValueByPath(toObject, [
        'urlRetrievalStatus'
    ], fromUrlRetrievalStatus);
    return toObject;
}
function urlContextMetadataFromMldev$2(fromObject) {
    const toObject = {};
    const fromUrlMetadata = getValueByPath(fromObject, [
        'urlMetadata'
    ]);
    if (fromUrlMetadata != null) {
        let transformedList = fromUrlMetadata;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return urlMetadataFromMldev$2(item);
        });
        setValueByPath(toObject, [
            'urlMetadata'
        ], transformedList);
    }
    return toObject;
}
function candidateFromMldev$1(fromObject) {
    const toObject = {};
    const fromContent = getValueByPath(fromObject, [
        'content'
    ]);
    if (fromContent != null) setValueByPath(toObject, [
        'content'
    ], contentFromMldev$2(fromContent));
    const fromCitationMetadata = getValueByPath(fromObject, [
        'citationMetadata'
    ]);
    if (fromCitationMetadata != null) setValueByPath(toObject, [
        'citationMetadata'
    ], citationMetadataFromMldev$1(fromCitationMetadata));
    const fromTokenCount = getValueByPath(fromObject, [
        'tokenCount'
    ]);
    if (fromTokenCount != null) setValueByPath(toObject, [
        'tokenCount'
    ], fromTokenCount);
    const fromFinishReason = getValueByPath(fromObject, [
        'finishReason'
    ]);
    if (fromFinishReason != null) setValueByPath(toObject, [
        'finishReason'
    ], fromFinishReason);
    const fromUrlContextMetadata = getValueByPath(fromObject, [
        'urlContextMetadata'
    ]);
    if (fromUrlContextMetadata != null) setValueByPath(toObject, [
        'urlContextMetadata'
    ], urlContextMetadataFromMldev$2(fromUrlContextMetadata));
    const fromAvgLogprobs = getValueByPath(fromObject, [
        'avgLogprobs'
    ]);
    if (fromAvgLogprobs != null) setValueByPath(toObject, [
        'avgLogprobs'
    ], fromAvgLogprobs);
    const fromGroundingMetadata = getValueByPath(fromObject, [
        'groundingMetadata'
    ]);
    if (fromGroundingMetadata != null) setValueByPath(toObject, [
        'groundingMetadata'
    ], fromGroundingMetadata);
    const fromIndex = getValueByPath(fromObject, [
        'index'
    ]);
    if (fromIndex != null) setValueByPath(toObject, [
        'index'
    ], fromIndex);
    const fromLogprobsResult = getValueByPath(fromObject, [
        'logprobsResult'
    ]);
    if (fromLogprobsResult != null) setValueByPath(toObject, [
        'logprobsResult'
    ], fromLogprobsResult);
    const fromSafetyRatings = getValueByPath(fromObject, [
        'safetyRatings'
    ]);
    if (fromSafetyRatings != null) setValueByPath(toObject, [
        'safetyRatings'
    ], fromSafetyRatings);
    return toObject;
}
function generateContentResponseFromMldev$1(fromObject) {
    const toObject = {};
    const fromCandidates = getValueByPath(fromObject, [
        'candidates'
    ]);
    if (fromCandidates != null) {
        let transformedList = fromCandidates;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return candidateFromMldev$1(item);
        });
        setValueByPath(toObject, [
            'candidates'
        ], transformedList);
    }
    const fromModelVersion = getValueByPath(fromObject, [
        'modelVersion'
    ]);
    if (fromModelVersion != null) setValueByPath(toObject, [
        'modelVersion'
    ], fromModelVersion);
    const fromPromptFeedback = getValueByPath(fromObject, [
        'promptFeedback'
    ]);
    if (fromPromptFeedback != null) setValueByPath(toObject, [
        'promptFeedback'
    ], fromPromptFeedback);
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata'
    ]);
    if (fromUsageMetadata != null) setValueByPath(toObject, [
        'usageMetadata'
    ], fromUsageMetadata);
    return toObject;
}
function inlinedResponseFromMldev(fromObject) {
    const toObject = {};
    const fromResponse = getValueByPath(fromObject, [
        'response'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], generateContentResponseFromMldev$1(fromResponse));
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], jobErrorFromMldev());
    return toObject;
}
function batchJobDestinationFromMldev(fromObject) {
    const toObject = {};
    const fromFileName = getValueByPath(fromObject, [
        'responsesFile'
    ]);
    if (fromFileName != null) setValueByPath(toObject, [
        'fileName'
    ], fromFileName);
    const fromInlinedResponses = getValueByPath(fromObject, [
        'inlinedResponses',
        'inlinedResponses'
    ]);
    if (fromInlinedResponses != null) {
        let transformedList = fromInlinedResponses;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return inlinedResponseFromMldev(item);
        });
        setValueByPath(toObject, [
            'inlinedResponses'
        ], transformedList);
    }
    return toObject;
}
function batchJobFromMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromDisplayName = getValueByPath(fromObject, [
        'metadata',
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromState = getValueByPath(fromObject, [
        'metadata',
        'state'
    ]);
    if (fromState != null) setValueByPath(toObject, [
        'state'
    ], tJobState(fromState));
    const fromCreateTime = getValueByPath(fromObject, [
        'metadata',
        'createTime'
    ]);
    if (fromCreateTime != null) setValueByPath(toObject, [
        'createTime'
    ], fromCreateTime);
    const fromEndTime = getValueByPath(fromObject, [
        'metadata',
        'endTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    const fromUpdateTime = getValueByPath(fromObject, [
        'metadata',
        'updateTime'
    ]);
    if (fromUpdateTime != null) setValueByPath(toObject, [
        'updateTime'
    ], fromUpdateTime);
    const fromModel = getValueByPath(fromObject, [
        'metadata',
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'model'
    ], fromModel);
    const fromDest = getValueByPath(fromObject, [
        'metadata',
        'output'
    ]);
    if (fromDest != null) setValueByPath(toObject, [
        'dest'
    ], batchJobDestinationFromMldev(fromDest));
    return toObject;
}
function listBatchJobsResponseFromMldev(fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken'
    ]);
    if (fromNextPageToken != null) setValueByPath(toObject, [
        'nextPageToken'
    ], fromNextPageToken);
    const fromBatchJobs = getValueByPath(fromObject, [
        'operations'
    ]);
    if (fromBatchJobs != null) {
        let transformedList = fromBatchJobs;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return batchJobFromMldev(item);
        });
        setValueByPath(toObject, [
            'batchJobs'
        ], transformedList);
    }
    return toObject;
}
function deleteResourceJobFromMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromDone = getValueByPath(fromObject, [
        'done'
    ]);
    if (fromDone != null) setValueByPath(toObject, [
        'done'
    ], fromDone);
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], jobErrorFromMldev());
    return toObject;
}
function jobErrorFromVertex(fromObject) {
    const toObject = {};
    const fromDetails = getValueByPath(fromObject, [
        'details'
    ]);
    if (fromDetails != null) setValueByPath(toObject, [
        'details'
    ], fromDetails);
    const fromCode = getValueByPath(fromObject, [
        'code'
    ]);
    if (fromCode != null) setValueByPath(toObject, [
        'code'
    ], fromCode);
    const fromMessage = getValueByPath(fromObject, [
        'message'
    ]);
    if (fromMessage != null) setValueByPath(toObject, [
        'message'
    ], fromMessage);
    return toObject;
}
function batchJobSourceFromVertex(fromObject) {
    const toObject = {};
    const fromFormat = getValueByPath(fromObject, [
        'instancesFormat'
    ]);
    if (fromFormat != null) setValueByPath(toObject, [
        'format'
    ], fromFormat);
    const fromGcsUri = getValueByPath(fromObject, [
        'gcsSource',
        'uris'
    ]);
    if (fromGcsUri != null) setValueByPath(toObject, [
        'gcsUri'
    ], fromGcsUri);
    const fromBigqueryUri = getValueByPath(fromObject, [
        'bigquerySource',
        'inputUri'
    ]);
    if (fromBigqueryUri != null) setValueByPath(toObject, [
        'bigqueryUri'
    ], fromBigqueryUri);
    return toObject;
}
function batchJobDestinationFromVertex(fromObject) {
    const toObject = {};
    const fromFormat = getValueByPath(fromObject, [
        'predictionsFormat'
    ]);
    if (fromFormat != null) setValueByPath(toObject, [
        'format'
    ], fromFormat);
    const fromGcsUri = getValueByPath(fromObject, [
        'gcsDestination',
        'outputUriPrefix'
    ]);
    if (fromGcsUri != null) setValueByPath(toObject, [
        'gcsUri'
    ], fromGcsUri);
    const fromBigqueryUri = getValueByPath(fromObject, [
        'bigqueryDestination',
        'outputUri'
    ]);
    if (fromBigqueryUri != null) setValueByPath(toObject, [
        'bigqueryUri'
    ], fromBigqueryUri);
    return toObject;
}
function batchJobFromVertex(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromState = getValueByPath(fromObject, [
        'state'
    ]);
    if (fromState != null) setValueByPath(toObject, [
        'state'
    ], tJobState(fromState));
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], jobErrorFromVertex(fromError));
    const fromCreateTime = getValueByPath(fromObject, [
        'createTime'
    ]);
    if (fromCreateTime != null) setValueByPath(toObject, [
        'createTime'
    ], fromCreateTime);
    const fromStartTime = getValueByPath(fromObject, [
        'startTime'
    ]);
    if (fromStartTime != null) setValueByPath(toObject, [
        'startTime'
    ], fromStartTime);
    const fromEndTime = getValueByPath(fromObject, [
        'endTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    const fromUpdateTime = getValueByPath(fromObject, [
        'updateTime'
    ]);
    if (fromUpdateTime != null) setValueByPath(toObject, [
        'updateTime'
    ], fromUpdateTime);
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'model'
    ], fromModel);
    const fromSrc = getValueByPath(fromObject, [
        'inputConfig'
    ]);
    if (fromSrc != null) setValueByPath(toObject, [
        'src'
    ], batchJobSourceFromVertex(fromSrc));
    const fromDest = getValueByPath(fromObject, [
        'outputConfig'
    ]);
    if (fromDest != null) setValueByPath(toObject, [
        'dest'
    ], batchJobDestinationFromVertex(fromDest));
    return toObject;
}
function listBatchJobsResponseFromVertex(fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken'
    ]);
    if (fromNextPageToken != null) setValueByPath(toObject, [
        'nextPageToken'
    ], fromNextPageToken);
    const fromBatchJobs = getValueByPath(fromObject, [
        'batchPredictionJobs'
    ]);
    if (fromBatchJobs != null) {
        let transformedList = fromBatchJobs;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return batchJobFromVertex(item);
        });
        setValueByPath(toObject, [
            'batchJobs'
        ], transformedList);
    }
    return toObject;
}
function deleteResourceJobFromVertex(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromDone = getValueByPath(fromObject, [
        'done'
    ]);
    if (fromDone != null) setValueByPath(toObject, [
        'done'
    ], fromDone);
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], jobErrorFromVertex(fromError));
    return toObject;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Pagers for the GenAI List APIs.
 */ var PagedItem;
(function(PagedItem) {
    PagedItem["PAGED_ITEM_BATCH_JOBS"] = "batchJobs";
    PagedItem["PAGED_ITEM_MODELS"] = "models";
    PagedItem["PAGED_ITEM_TUNING_JOBS"] = "tuningJobs";
    PagedItem["PAGED_ITEM_FILES"] = "files";
    PagedItem["PAGED_ITEM_CACHED_CONTENTS"] = "cachedContents";
})(PagedItem || (PagedItem = {}));
/**
 * Pager class for iterating through paginated results.
 */ class Pager {
    constructor(name, request, response, params){
        this.pageInternal = [];
        this.paramsInternal = {};
        this.requestInternal = request;
        this.init(name, response, params);
    }
    init(name, response, params) {
        var _a, _b;
        this.nameInternal = name;
        this.pageInternal = response[this.nameInternal] || [];
        this.idxInternal = 0;
        let requestParams = {
            config: {}
        };
        if (!params) requestParams = {
            config: {}
        };
        else if (typeof params === 'object') requestParams = Object.assign({}, params);
        else requestParams = params;
        if (requestParams['config']) requestParams['config']['pageToken'] = response['nextPageToken'];
        this.paramsInternal = requestParams;
        this.pageInternalSize = (_b = (_a = requestParams['config']) === null || _a === void 0 ? void 0 : _a['pageSize']) !== null && _b !== void 0 ? _b : this.pageInternal.length;
    }
    initNextPage(response) {
        this.init(this.nameInternal, response, this.paramsInternal);
    }
    /**
     * Returns the current page, which is a list of items.
     *
     * @remarks
     * The first page is retrieved when the pager is created. The returned list of
     * items could be a subset of the entire list.
     */ get page() {
        return this.pageInternal;
    }
    /**
     * Returns the type of paged item (for example, ``batch_jobs``).
     */ get name() {
        return this.nameInternal;
    }
    /**
     * Returns the length of the page fetched each time by this pager.
     *
     * @remarks
     * The number of items in the page is less than or equal to the page length.
     */ get pageSize() {
        return this.pageInternalSize;
    }
    /**
     * Returns the parameters when making the API request for the next page.
     *
     * @remarks
     * Parameters contain a set of optional configs that can be
     * used to customize the API request. For example, the `pageToken` parameter
     * contains the token to request the next page.
     */ get params() {
        return this.paramsInternal;
    }
    /**
     * Returns the total number of items in the current page.
     */ get pageLength() {
        return this.pageInternal.length;
    }
    /**
     * Returns the item at the given index.
     */ getItem(index) {
        return this.pageInternal[index];
    }
    /**
     * Returns an async iterator that support iterating through all items
     * retrieved from the API.
     *
     * @remarks
     * The iterator will automatically fetch the next page if there are more items
     * to fetch from the API.
     *
     * @example
     *
     * ```ts
     * const pager = await ai.files.list({config: {pageSize: 10}});
     * for await (const file of pager) {
     *   console.log(file.name);
     * }
     * ```
     */ [Symbol.asyncIterator]() {
        return {
            next: async ()=>{
                if (this.idxInternal >= this.pageLength) {
                    if (this.hasNextPage()) await this.nextPage();
                    else return {
                        value: undefined,
                        done: true
                    };
                }
                const item = this.getItem(this.idxInternal);
                this.idxInternal += 1;
                return {
                    value: item,
                    done: false
                };
            },
            return: async ()=>{
                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
    /**
     * Fetches the next page of items. This makes a new API request.
     *
     * @throws {Error} If there are no more pages to fetch.
     *
     * @example
     *
     * ```ts
     * const pager = await ai.files.list({config: {pageSize: 10}});
     * let page = pager.page;
     * while (true) {
     *   for (const file of page) {
     *     console.log(file.name);
     *   }
     *   if (!pager.hasNextPage()) {
     *     break;
     *   }
     *   page = await pager.nextPage();
     * }
     * ```
     */ async nextPage() {
        if (!this.hasNextPage()) throw new Error('No more pages to fetch.');
        const response = await this.requestInternal(this.params);
        this.initNextPage(response);
        return this.page;
    }
    /**
     * Returns true if there are more pages to fetch from the API.
     */ hasNextPage() {
        var _a;
        if (((_a = this.params['config']) === null || _a === void 0 ? void 0 : _a['pageToken']) !== undefined) return true;
        return false;
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Batches extends BaseModule {
    constructor(apiClient){
        super();
        this.apiClient = apiClient;
        /**
         * Create batch job.
         *
         * @param params - The parameters for create batch job request.
         * @return The created batch job.
         *
         * @example
         * ```ts
         * const response = await ai.batches.create({
         *   model: 'gemini-2.0-flash',
         *   src: {gcsUri: 'gs://bucket/path/to/file.jsonl', format: 'jsonl'},
         *   config: {
         *     dest: {gcsUri: 'gs://bucket/path/output/directory', format: 'jsonl'},
         *   }
         * });
         * console.log(response);
         * ```
         */ this.create = async (params)=>{
            if (this.apiClient.isVertexAI()) {
                const timestamp = Date.now();
                const timestampStr = timestamp.toString();
                if (Array.isArray(params.src)) throw new Error("InlinedRequest[] is not supported in Vertex AI. Please use Google Cloud Storage URI or BigQuery URI instead.");
                params.config = params.config || {};
                if (params.config.displayName === undefined) params.config.displayName = 'genaiBatchJob_${timestampStr}';
                if (params.config.dest === undefined && typeof params.src === 'string') {
                    if (params.src.startsWith('gs://') && params.src.endsWith('.jsonl')) params.config.dest = `${params.src.slice(0, -6)}/dest`;
                    else if (params.src.startsWith('bq://')) params.config.dest = `${params.src}_dest_${timestampStr}`;
                    else throw new Error('Unsupported source:' + params.src);
                }
            }
            return await this.createInternal(params);
        };
        /**
         * Lists batch job configurations.
         *
         * @param params - The parameters for the list request.
         * @return The paginated results of the list of batch jobs.
         *
         * @example
         * ```ts
         * const batchJobs = await ai.batches.list({config: {'pageSize': 2}});
         * for await (const batchJob of batchJobs) {
         *   console.log(batchJob);
         * }
         * ```
         */ this.list = async (params = {})=>{
            return new Pager(PagedItem.PAGED_ITEM_BATCH_JOBS, (x)=>this.listInternal(x), await this.listInternal(params), params);
        };
    }
    /**
     * Internal method to create batch job.
     *
     * @param params - The parameters for create batch job request.
     * @return The created batch job.
     *
     */ async createInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = createBatchJobParametersToVertex(this.apiClient, params);
            path = formatMap('batchPredictionJobs', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = batchJobFromVertex(apiResponse);
                return resp;
            });
        } else {
            const body = createBatchJobParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:batchGenerateContent', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = batchJobFromMldev(apiResponse);
                return resp;
            });
        }
    }
    /**
     * Gets batch job configurations.
     *
     * @param params - The parameters for the get request.
     * @return The batch job.
     *
     * @example
     * ```ts
     * await ai.batches.get({name: '...'}); // The server-generated resource name.
     * ```
     */ async get(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = getBatchJobParametersToVertex(this.apiClient, params);
            path = formatMap('batchPredictionJobs/{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = batchJobFromVertex(apiResponse);
                return resp;
            });
        } else {
            const body = getBatchJobParametersToMldev(this.apiClient, params);
            path = formatMap('batches/{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = batchJobFromMldev(apiResponse);
                return resp;
            });
        }
    }
    /**
     * Cancels a batch job.
     *
     * @param params - The parameters for the cancel request.
     * @return The empty response returned by the API.
     *
     * @example
     * ```ts
     * await ai.batches.cancel({name: '...'}); // The server-generated resource name.
     * ```
     */ async cancel(params) {
        var _a, _b, _c, _d;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = cancelBatchJobParametersToVertex(this.apiClient, params);
            path = formatMap('batchPredictionJobs/{name}:cancel', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            await this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            });
        } else {
            const body = cancelBatchJobParametersToMldev(this.apiClient, params);
            path = formatMap('batches/{name}:cancel', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            await this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            });
        }
    }
    async listInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = listBatchJobsParametersToVertex(params);
            path = formatMap('batchPredictionJobs', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = listBatchJobsResponseFromVertex(apiResponse);
                const typedResp = new ListBatchJobsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else {
            const body = listBatchJobsParametersToMldev(params);
            path = formatMap('batches', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = listBatchJobsResponseFromMldev(apiResponse);
                const typedResp = new ListBatchJobsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Deletes a batch job.
     *
     * @param params - The parameters for the delete request.
     * @return The empty response returned by the API.
     *
     * @example
     * ```ts
     * await ai.batches.delete({name: '...'}); // The server-generated resource name.
     * ```
     */ async delete(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = deleteBatchJobParametersToVertex(this.apiClient, params);
            path = formatMap('batchPredictionJobs/{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = deleteResourceJobFromVertex(apiResponse);
                return resp;
            });
        } else {
            const body = deleteBatchJobParametersToMldev(this.apiClient, params);
            path = formatMap('batches/{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = deleteResourceJobFromMldev(apiResponse);
                return resp;
            });
        }
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function videoMetadataToMldev$3(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function blobToMldev$3(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'displayName'
    ]) !== undefined) throw new Error('displayName parameter is not supported in Gemini API.');
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataToMldev$3(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'displayName'
    ]) !== undefined) throw new Error('displayName parameter is not supported in Gemini API.');
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function partToMldev$3(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataToMldev$3(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobToMldev$3(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataToMldev$3(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function contentToMldev$3(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partToMldev$3(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function functionDeclarationToMldev$3(fromObject) {
    const toObject = {};
    const fromBehavior = getValueByPath(fromObject, [
        'behavior'
    ]);
    if (fromBehavior != null) setValueByPath(toObject, [
        'behavior'
    ], fromBehavior);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromParameters = getValueByPath(fromObject, [
        'parameters'
    ]);
    if (fromParameters != null) setValueByPath(toObject, [
        'parameters'
    ], fromParameters);
    const fromParametersJsonSchema = getValueByPath(fromObject, [
        'parametersJsonSchema'
    ]);
    if (fromParametersJsonSchema != null) setValueByPath(toObject, [
        'parametersJsonSchema'
    ], fromParametersJsonSchema);
    const fromResponse = getValueByPath(fromObject, [
        'response'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], fromResponse);
    const fromResponseJsonSchema = getValueByPath(fromObject, [
        'responseJsonSchema'
    ]);
    if (fromResponseJsonSchema != null) setValueByPath(toObject, [
        'responseJsonSchema'
    ], fromResponseJsonSchema);
    return toObject;
}
function intervalToMldev$3(fromObject) {
    const toObject = {};
    const fromStartTime = getValueByPath(fromObject, [
        'startTime'
    ]);
    if (fromStartTime != null) setValueByPath(toObject, [
        'startTime'
    ], fromStartTime);
    const fromEndTime = getValueByPath(fromObject, [
        'endTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    return toObject;
}
function googleSearchToMldev$3(fromObject) {
    const toObject = {};
    const fromTimeRangeFilter = getValueByPath(fromObject, [
        'timeRangeFilter'
    ]);
    if (fromTimeRangeFilter != null) setValueByPath(toObject, [
        'timeRangeFilter'
    ], intervalToMldev$3(fromTimeRangeFilter));
    return toObject;
}
function dynamicRetrievalConfigToMldev$3(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold'
    ]);
    if (fromDynamicThreshold != null) setValueByPath(toObject, [
        'dynamicThreshold'
    ], fromDynamicThreshold);
    return toObject;
}
function googleSearchRetrievalToMldev$3(fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig'
    ]);
    if (fromDynamicRetrievalConfig != null) setValueByPath(toObject, [
        'dynamicRetrievalConfig'
    ], dynamicRetrievalConfigToMldev$3(fromDynamicRetrievalConfig));
    return toObject;
}
function urlContextToMldev$3() {
    const toObject = {};
    return toObject;
}
function toolToMldev$3(fromObject) {
    const toObject = {};
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations'
    ]);
    if (fromFunctionDeclarations != null) {
        let transformedList = fromFunctionDeclarations;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return functionDeclarationToMldev$3(item);
        });
        setValueByPath(toObject, [
            'functionDeclarations'
        ], transformedList);
    }
    if (getValueByPath(fromObject, [
        'retrieval'
    ]) !== undefined) throw new Error('retrieval parameter is not supported in Gemini API.');
    const fromGoogleSearch = getValueByPath(fromObject, [
        'googleSearch'
    ]);
    if (fromGoogleSearch != null) setValueByPath(toObject, [
        'googleSearch'
    ], googleSearchToMldev$3(fromGoogleSearch));
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval'
    ]);
    if (fromGoogleSearchRetrieval != null) setValueByPath(toObject, [
        'googleSearchRetrieval'
    ], googleSearchRetrievalToMldev$3(fromGoogleSearchRetrieval));
    if (getValueByPath(fromObject, [
        'enterpriseWebSearch'
    ]) !== undefined) throw new Error('enterpriseWebSearch parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'googleMaps'
    ]) !== undefined) throw new Error('googleMaps parameter is not supported in Gemini API.');
    const fromUrlContext = getValueByPath(fromObject, [
        'urlContext'
    ]);
    if (fromUrlContext != null) setValueByPath(toObject, [
        'urlContext'
    ], urlContextToMldev$3());
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution'
    ]);
    if (fromCodeExecution != null) setValueByPath(toObject, [
        'codeExecution'
    ], fromCodeExecution);
    const fromComputerUse = getValueByPath(fromObject, [
        'computerUse'
    ]);
    if (fromComputerUse != null) setValueByPath(toObject, [
        'computerUse'
    ], fromComputerUse);
    return toObject;
}
function functionCallingConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromAllowedFunctionNames = getValueByPath(fromObject, [
        'allowedFunctionNames'
    ]);
    if (fromAllowedFunctionNames != null) setValueByPath(toObject, [
        'allowedFunctionNames'
    ], fromAllowedFunctionNames);
    return toObject;
}
function latLngToMldev$1(fromObject) {
    const toObject = {};
    const fromLatitude = getValueByPath(fromObject, [
        'latitude'
    ]);
    if (fromLatitude != null) setValueByPath(toObject, [
        'latitude'
    ], fromLatitude);
    const fromLongitude = getValueByPath(fromObject, [
        'longitude'
    ]);
    if (fromLongitude != null) setValueByPath(toObject, [
        'longitude'
    ], fromLongitude);
    return toObject;
}
function retrievalConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromLatLng = getValueByPath(fromObject, [
        'latLng'
    ]);
    if (fromLatLng != null) setValueByPath(toObject, [
        'latLng'
    ], latLngToMldev$1(fromLatLng));
    const fromLanguageCode = getValueByPath(fromObject, [
        'languageCode'
    ]);
    if (fromLanguageCode != null) setValueByPath(toObject, [
        'languageCode'
    ], fromLanguageCode);
    return toObject;
}
function toolConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromFunctionCallingConfig = getValueByPath(fromObject, [
        'functionCallingConfig'
    ]);
    if (fromFunctionCallingConfig != null) setValueByPath(toObject, [
        'functionCallingConfig'
    ], functionCallingConfigToMldev$1(fromFunctionCallingConfig));
    const fromRetrievalConfig = getValueByPath(fromObject, [
        'retrievalConfig'
    ]);
    if (fromRetrievalConfig != null) setValueByPath(toObject, [
        'retrievalConfig'
    ], retrievalConfigToMldev$1(fromRetrievalConfig));
    return toObject;
}
function createCachedContentConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    const fromTtl = getValueByPath(fromObject, [
        'ttl'
    ]);
    if (parentObject !== undefined && fromTtl != null) setValueByPath(parentObject, [
        'ttl'
    ], fromTtl);
    const fromExpireTime = getValueByPath(fromObject, [
        'expireTime'
    ]);
    if (parentObject !== undefined && fromExpireTime != null) setValueByPath(parentObject, [
        'expireTime'
    ], fromExpireTime);
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (parentObject !== undefined && fromDisplayName != null) setValueByPath(parentObject, [
        'displayName'
    ], fromDisplayName);
    const fromContents = getValueByPath(fromObject, [
        'contents'
    ]);
    if (parentObject !== undefined && fromContents != null) {
        let transformedList = tContents(fromContents);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return contentToMldev$3(item);
        });
        setValueByPath(parentObject, [
            'contents'
        ], transformedList);
    }
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction'
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) setValueByPath(parentObject, [
        'systemInstruction'
    ], contentToMldev$3(tContent(fromSystemInstruction)));
    const fromTools = getValueByPath(fromObject, [
        'tools'
    ]);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = fromTools;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return toolToMldev$3(item);
        });
        setValueByPath(parentObject, [
            'tools'
        ], transformedList);
    }
    const fromToolConfig = getValueByPath(fromObject, [
        'toolConfig'
    ]);
    if (parentObject !== undefined && fromToolConfig != null) setValueByPath(parentObject, [
        'toolConfig'
    ], toolConfigToMldev$1(fromToolConfig));
    if (getValueByPath(fromObject, [
        'kmsKeyName'
    ]) !== undefined) throw new Error('kmsKeyName parameter is not supported in Gemini API.');
    return toObject;
}
function createCachedContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'model'
    ], tCachesModel(apiClient, fromModel));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], createCachedContentConfigToMldev(fromConfig, toObject));
    return toObject;
}
function getCachedContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tCachedContentName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function deleteCachedContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tCachedContentName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function updateCachedContentConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    const fromTtl = getValueByPath(fromObject, [
        'ttl'
    ]);
    if (parentObject !== undefined && fromTtl != null) setValueByPath(parentObject, [
        'ttl'
    ], fromTtl);
    const fromExpireTime = getValueByPath(fromObject, [
        'expireTime'
    ]);
    if (parentObject !== undefined && fromExpireTime != null) setValueByPath(parentObject, [
        'expireTime'
    ], fromExpireTime);
    return toObject;
}
function updateCachedContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tCachedContentName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], updateCachedContentConfigToMldev(fromConfig, toObject));
    return toObject;
}
function listCachedContentsConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, [
        'pageSize'
    ]);
    if (parentObject !== undefined && fromPageSize != null) setValueByPath(parentObject, [
        '_query',
        'pageSize'
    ], fromPageSize);
    const fromPageToken = getValueByPath(fromObject, [
        'pageToken'
    ]);
    if (parentObject !== undefined && fromPageToken != null) setValueByPath(parentObject, [
        '_query',
        'pageToken'
    ], fromPageToken);
    return toObject;
}
function listCachedContentsParametersToMldev(fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], listCachedContentsConfigToMldev(fromConfig, toObject));
    return toObject;
}
function videoMetadataToVertex$2(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function blobToVertex$2(fromObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataToVertex$2(fromObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function partToVertex$2(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataToVertex$2(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobToVertex$2(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataToVertex$2(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function contentToVertex$2(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partToVertex$2(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function functionDeclarationToVertex$2(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'behavior'
    ]) !== undefined) throw new Error('behavior parameter is not supported in Vertex AI.');
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromParameters = getValueByPath(fromObject, [
        'parameters'
    ]);
    if (fromParameters != null) setValueByPath(toObject, [
        'parameters'
    ], fromParameters);
    const fromParametersJsonSchema = getValueByPath(fromObject, [
        'parametersJsonSchema'
    ]);
    if (fromParametersJsonSchema != null) setValueByPath(toObject, [
        'parametersJsonSchema'
    ], fromParametersJsonSchema);
    const fromResponse = getValueByPath(fromObject, [
        'response'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], fromResponse);
    const fromResponseJsonSchema = getValueByPath(fromObject, [
        'responseJsonSchema'
    ]);
    if (fromResponseJsonSchema != null) setValueByPath(toObject, [
        'responseJsonSchema'
    ], fromResponseJsonSchema);
    return toObject;
}
function intervalToVertex$2(fromObject) {
    const toObject = {};
    const fromStartTime = getValueByPath(fromObject, [
        'startTime'
    ]);
    if (fromStartTime != null) setValueByPath(toObject, [
        'startTime'
    ], fromStartTime);
    const fromEndTime = getValueByPath(fromObject, [
        'endTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    return toObject;
}
function googleSearchToVertex$2(fromObject) {
    const toObject = {};
    const fromTimeRangeFilter = getValueByPath(fromObject, [
        'timeRangeFilter'
    ]);
    if (fromTimeRangeFilter != null) setValueByPath(toObject, [
        'timeRangeFilter'
    ], intervalToVertex$2(fromTimeRangeFilter));
    return toObject;
}
function dynamicRetrievalConfigToVertex$2(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold'
    ]);
    if (fromDynamicThreshold != null) setValueByPath(toObject, [
        'dynamicThreshold'
    ], fromDynamicThreshold);
    return toObject;
}
function googleSearchRetrievalToVertex$2(fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig'
    ]);
    if (fromDynamicRetrievalConfig != null) setValueByPath(toObject, [
        'dynamicRetrievalConfig'
    ], dynamicRetrievalConfigToVertex$2(fromDynamicRetrievalConfig));
    return toObject;
}
function enterpriseWebSearchToVertex$2() {
    const toObject = {};
    return toObject;
}
function apiKeyConfigToVertex$2(fromObject) {
    const toObject = {};
    const fromApiKeyString = getValueByPath(fromObject, [
        'apiKeyString'
    ]);
    if (fromApiKeyString != null) setValueByPath(toObject, [
        'apiKeyString'
    ], fromApiKeyString);
    return toObject;
}
function authConfigToVertex$2(fromObject) {
    const toObject = {};
    const fromApiKeyConfig = getValueByPath(fromObject, [
        'apiKeyConfig'
    ]);
    if (fromApiKeyConfig != null) setValueByPath(toObject, [
        'apiKeyConfig'
    ], apiKeyConfigToVertex$2(fromApiKeyConfig));
    const fromAuthType = getValueByPath(fromObject, [
        'authType'
    ]);
    if (fromAuthType != null) setValueByPath(toObject, [
        'authType'
    ], fromAuthType);
    const fromGoogleServiceAccountConfig = getValueByPath(fromObject, [
        'googleServiceAccountConfig'
    ]);
    if (fromGoogleServiceAccountConfig != null) setValueByPath(toObject, [
        'googleServiceAccountConfig'
    ], fromGoogleServiceAccountConfig);
    const fromHttpBasicAuthConfig = getValueByPath(fromObject, [
        'httpBasicAuthConfig'
    ]);
    if (fromHttpBasicAuthConfig != null) setValueByPath(toObject, [
        'httpBasicAuthConfig'
    ], fromHttpBasicAuthConfig);
    const fromOauthConfig = getValueByPath(fromObject, [
        'oauthConfig'
    ]);
    if (fromOauthConfig != null) setValueByPath(toObject, [
        'oauthConfig'
    ], fromOauthConfig);
    const fromOidcConfig = getValueByPath(fromObject, [
        'oidcConfig'
    ]);
    if (fromOidcConfig != null) setValueByPath(toObject, [
        'oidcConfig'
    ], fromOidcConfig);
    return toObject;
}
function googleMapsToVertex$2(fromObject) {
    const toObject = {};
    const fromAuthConfig = getValueByPath(fromObject, [
        'authConfig'
    ]);
    if (fromAuthConfig != null) setValueByPath(toObject, [
        'authConfig'
    ], authConfigToVertex$2(fromAuthConfig));
    return toObject;
}
function urlContextToVertex$2() {
    const toObject = {};
    return toObject;
}
function toolToVertex$2(fromObject) {
    const toObject = {};
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations'
    ]);
    if (fromFunctionDeclarations != null) {
        let transformedList = fromFunctionDeclarations;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return functionDeclarationToVertex$2(item);
        });
        setValueByPath(toObject, [
            'functionDeclarations'
        ], transformedList);
    }
    const fromRetrieval = getValueByPath(fromObject, [
        'retrieval'
    ]);
    if (fromRetrieval != null) setValueByPath(toObject, [
        'retrieval'
    ], fromRetrieval);
    const fromGoogleSearch = getValueByPath(fromObject, [
        'googleSearch'
    ]);
    if (fromGoogleSearch != null) setValueByPath(toObject, [
        'googleSearch'
    ], googleSearchToVertex$2(fromGoogleSearch));
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval'
    ]);
    if (fromGoogleSearchRetrieval != null) setValueByPath(toObject, [
        'googleSearchRetrieval'
    ], googleSearchRetrievalToVertex$2(fromGoogleSearchRetrieval));
    const fromEnterpriseWebSearch = getValueByPath(fromObject, [
        'enterpriseWebSearch'
    ]);
    if (fromEnterpriseWebSearch != null) setValueByPath(toObject, [
        'enterpriseWebSearch'
    ], enterpriseWebSearchToVertex$2());
    const fromGoogleMaps = getValueByPath(fromObject, [
        'googleMaps'
    ]);
    if (fromGoogleMaps != null) setValueByPath(toObject, [
        'googleMaps'
    ], googleMapsToVertex$2(fromGoogleMaps));
    const fromUrlContext = getValueByPath(fromObject, [
        'urlContext'
    ]);
    if (fromUrlContext != null) setValueByPath(toObject, [
        'urlContext'
    ], urlContextToVertex$2());
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution'
    ]);
    if (fromCodeExecution != null) setValueByPath(toObject, [
        'codeExecution'
    ], fromCodeExecution);
    const fromComputerUse = getValueByPath(fromObject, [
        'computerUse'
    ]);
    if (fromComputerUse != null) setValueByPath(toObject, [
        'computerUse'
    ], fromComputerUse);
    return toObject;
}
function functionCallingConfigToVertex$1(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromAllowedFunctionNames = getValueByPath(fromObject, [
        'allowedFunctionNames'
    ]);
    if (fromAllowedFunctionNames != null) setValueByPath(toObject, [
        'allowedFunctionNames'
    ], fromAllowedFunctionNames);
    return toObject;
}
function latLngToVertex$1(fromObject) {
    const toObject = {};
    const fromLatitude = getValueByPath(fromObject, [
        'latitude'
    ]);
    if (fromLatitude != null) setValueByPath(toObject, [
        'latitude'
    ], fromLatitude);
    const fromLongitude = getValueByPath(fromObject, [
        'longitude'
    ]);
    if (fromLongitude != null) setValueByPath(toObject, [
        'longitude'
    ], fromLongitude);
    return toObject;
}
function retrievalConfigToVertex$1(fromObject) {
    const toObject = {};
    const fromLatLng = getValueByPath(fromObject, [
        'latLng'
    ]);
    if (fromLatLng != null) setValueByPath(toObject, [
        'latLng'
    ], latLngToVertex$1(fromLatLng));
    const fromLanguageCode = getValueByPath(fromObject, [
        'languageCode'
    ]);
    if (fromLanguageCode != null) setValueByPath(toObject, [
        'languageCode'
    ], fromLanguageCode);
    return toObject;
}
function toolConfigToVertex$1(fromObject) {
    const toObject = {};
    const fromFunctionCallingConfig = getValueByPath(fromObject, [
        'functionCallingConfig'
    ]);
    if (fromFunctionCallingConfig != null) setValueByPath(toObject, [
        'functionCallingConfig'
    ], functionCallingConfigToVertex$1(fromFunctionCallingConfig));
    const fromRetrievalConfig = getValueByPath(fromObject, [
        'retrievalConfig'
    ]);
    if (fromRetrievalConfig != null) setValueByPath(toObject, [
        'retrievalConfig'
    ], retrievalConfigToVertex$1(fromRetrievalConfig));
    return toObject;
}
function createCachedContentConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromTtl = getValueByPath(fromObject, [
        'ttl'
    ]);
    if (parentObject !== undefined && fromTtl != null) setValueByPath(parentObject, [
        'ttl'
    ], fromTtl);
    const fromExpireTime = getValueByPath(fromObject, [
        'expireTime'
    ]);
    if (parentObject !== undefined && fromExpireTime != null) setValueByPath(parentObject, [
        'expireTime'
    ], fromExpireTime);
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (parentObject !== undefined && fromDisplayName != null) setValueByPath(parentObject, [
        'displayName'
    ], fromDisplayName);
    const fromContents = getValueByPath(fromObject, [
        'contents'
    ]);
    if (parentObject !== undefined && fromContents != null) {
        let transformedList = tContents(fromContents);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return contentToVertex$2(item);
        });
        setValueByPath(parentObject, [
            'contents'
        ], transformedList);
    }
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction'
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) setValueByPath(parentObject, [
        'systemInstruction'
    ], contentToVertex$2(tContent(fromSystemInstruction)));
    const fromTools = getValueByPath(fromObject, [
        'tools'
    ]);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = fromTools;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return toolToVertex$2(item);
        });
        setValueByPath(parentObject, [
            'tools'
        ], transformedList);
    }
    const fromToolConfig = getValueByPath(fromObject, [
        'toolConfig'
    ]);
    if (parentObject !== undefined && fromToolConfig != null) setValueByPath(parentObject, [
        'toolConfig'
    ], toolConfigToVertex$1(fromToolConfig));
    const fromKmsKeyName = getValueByPath(fromObject, [
        'kmsKeyName'
    ]);
    if (parentObject !== undefined && fromKmsKeyName != null) setValueByPath(parentObject, [
        'encryption_spec',
        'kmsKeyName'
    ], fromKmsKeyName);
    return toObject;
}
function createCachedContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'model'
    ], tCachesModel(apiClient, fromModel));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], createCachedContentConfigToVertex(fromConfig, toObject));
    return toObject;
}
function getCachedContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tCachedContentName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function deleteCachedContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tCachedContentName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function updateCachedContentConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromTtl = getValueByPath(fromObject, [
        'ttl'
    ]);
    if (parentObject !== undefined && fromTtl != null) setValueByPath(parentObject, [
        'ttl'
    ], fromTtl);
    const fromExpireTime = getValueByPath(fromObject, [
        'expireTime'
    ]);
    if (parentObject !== undefined && fromExpireTime != null) setValueByPath(parentObject, [
        'expireTime'
    ], fromExpireTime);
    return toObject;
}
function updateCachedContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tCachedContentName(apiClient, fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], updateCachedContentConfigToVertex(fromConfig, toObject));
    return toObject;
}
function listCachedContentsConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, [
        'pageSize'
    ]);
    if (parentObject !== undefined && fromPageSize != null) setValueByPath(parentObject, [
        '_query',
        'pageSize'
    ], fromPageSize);
    const fromPageToken = getValueByPath(fromObject, [
        'pageToken'
    ]);
    if (parentObject !== undefined && fromPageToken != null) setValueByPath(parentObject, [
        '_query',
        'pageToken'
    ], fromPageToken);
    return toObject;
}
function listCachedContentsParametersToVertex(fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], listCachedContentsConfigToVertex(fromConfig, toObject));
    return toObject;
}
function cachedContentFromMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'model'
    ], fromModel);
    const fromCreateTime = getValueByPath(fromObject, [
        'createTime'
    ]);
    if (fromCreateTime != null) setValueByPath(toObject, [
        'createTime'
    ], fromCreateTime);
    const fromUpdateTime = getValueByPath(fromObject, [
        'updateTime'
    ]);
    if (fromUpdateTime != null) setValueByPath(toObject, [
        'updateTime'
    ], fromUpdateTime);
    const fromExpireTime = getValueByPath(fromObject, [
        'expireTime'
    ]);
    if (fromExpireTime != null) setValueByPath(toObject, [
        'expireTime'
    ], fromExpireTime);
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata'
    ]);
    if (fromUsageMetadata != null) setValueByPath(toObject, [
        'usageMetadata'
    ], fromUsageMetadata);
    return toObject;
}
function deleteCachedContentResponseFromMldev() {
    const toObject = {};
    return toObject;
}
function listCachedContentsResponseFromMldev(fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken'
    ]);
    if (fromNextPageToken != null) setValueByPath(toObject, [
        'nextPageToken'
    ], fromNextPageToken);
    const fromCachedContents = getValueByPath(fromObject, [
        'cachedContents'
    ]);
    if (fromCachedContents != null) {
        let transformedList = fromCachedContents;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return cachedContentFromMldev(item);
        });
        setValueByPath(toObject, [
            'cachedContents'
        ], transformedList);
    }
    return toObject;
}
function cachedContentFromVertex(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'model'
    ], fromModel);
    const fromCreateTime = getValueByPath(fromObject, [
        'createTime'
    ]);
    if (fromCreateTime != null) setValueByPath(toObject, [
        'createTime'
    ], fromCreateTime);
    const fromUpdateTime = getValueByPath(fromObject, [
        'updateTime'
    ]);
    if (fromUpdateTime != null) setValueByPath(toObject, [
        'updateTime'
    ], fromUpdateTime);
    const fromExpireTime = getValueByPath(fromObject, [
        'expireTime'
    ]);
    if (fromExpireTime != null) setValueByPath(toObject, [
        'expireTime'
    ], fromExpireTime);
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata'
    ]);
    if (fromUsageMetadata != null) setValueByPath(toObject, [
        'usageMetadata'
    ], fromUsageMetadata);
    return toObject;
}
function deleteCachedContentResponseFromVertex() {
    const toObject = {};
    return toObject;
}
function listCachedContentsResponseFromVertex(fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken'
    ]);
    if (fromNextPageToken != null) setValueByPath(toObject, [
        'nextPageToken'
    ], fromNextPageToken);
    const fromCachedContents = getValueByPath(fromObject, [
        'cachedContents'
    ]);
    if (fromCachedContents != null) {
        let transformedList = fromCachedContents;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return cachedContentFromVertex(item);
        });
        setValueByPath(toObject, [
            'cachedContents'
        ], transformedList);
    }
    return toObject;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Caches extends BaseModule {
    constructor(apiClient){
        super();
        this.apiClient = apiClient;
        /**
         * Lists cached content configurations.
         *
         * @param params - The parameters for the list request.
         * @return The paginated results of the list of cached contents.
         *
         * @example
         * ```ts
         * const cachedContents = await ai.caches.list({config: {'pageSize': 2}});
         * for await (const cachedContent of cachedContents) {
         *   console.log(cachedContent);
         * }
         * ```
         */ this.list = async (params = {})=>{
            return new Pager(PagedItem.PAGED_ITEM_CACHED_CONTENTS, (x)=>this.listInternal(x), await this.listInternal(params), params);
        };
    }
    /**
     * Creates a cached contents resource.
     *
     * @remarks
     * Context caching is only supported for specific models. See [Gemini
     * Developer API reference](https://ai.google.dev/gemini-api/docs/caching?lang=node/context-cac)
     * and [Vertex AI reference](https://cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview#supported_models)
     * for more information.
     *
     * @param params - The parameters for the create request.
     * @return The created cached content.
     *
     * @example
     * ```ts
     * const contents = ...; // Initialize the content to cache.
     * const response = await ai.caches.create({
     *   model: 'gemini-2.0-flash-001',
     *   config: {
     *    'contents': contents,
     *    'displayName': 'test cache',
     *    'systemInstruction': 'What is the sum of the two pdfs?',
     *    'ttl': '86400s',
     *  }
     * });
     * ```
     */ async create(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = createCachedContentParametersToVertex(this.apiClient, params);
            path = formatMap('cachedContents', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = cachedContentFromVertex(apiResponse);
                return resp;
            });
        } else {
            const body = createCachedContentParametersToMldev(this.apiClient, params);
            path = formatMap('cachedContents', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = cachedContentFromMldev(apiResponse);
                return resp;
            });
        }
    }
    /**
     * Gets cached content configurations.
     *
     * @param params - The parameters for the get request.
     * @return The cached content.
     *
     * @example
     * ```ts
     * await ai.caches.get({name: '...'}); // The server-generated resource name.
     * ```
     */ async get(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = getCachedContentParametersToVertex(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = cachedContentFromVertex(apiResponse);
                return resp;
            });
        } else {
            const body = getCachedContentParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = cachedContentFromMldev(apiResponse);
                return resp;
            });
        }
    }
    /**
     * Deletes cached content.
     *
     * @param params - The parameters for the delete request.
     * @return The empty response returned by the API.
     *
     * @example
     * ```ts
     * await ai.caches.delete({name: '...'}); // The server-generated resource name.
     * ```
     */ async delete(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = deleteCachedContentParametersToVertex(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then(()=>{
                const resp = deleteCachedContentResponseFromVertex();
                const typedResp = new DeleteCachedContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else {
            const body = deleteCachedContentParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then(()=>{
                const resp = deleteCachedContentResponseFromMldev();
                const typedResp = new DeleteCachedContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Updates cached content configurations.
     *
     * @param params - The parameters for the update request.
     * @return The updated cached content.
     *
     * @example
     * ```ts
     * const response = await ai.caches.update({
     *   name: '...',  // The server-generated resource name.
     *   config: {'ttl': '7600s'}
     * });
     * ```
     */ async update(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = updateCachedContentParametersToVertex(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'PATCH',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = cachedContentFromVertex(apiResponse);
                return resp;
            });
        } else {
            const body = updateCachedContentParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'PATCH',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = cachedContentFromMldev(apiResponse);
                return resp;
            });
        }
    }
    async listInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = listCachedContentsParametersToVertex(params);
            path = formatMap('cachedContents', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = listCachedContentsResponseFromVertex(apiResponse);
                const typedResp = new ListCachedContentsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else {
            const body = listCachedContentsParametersToMldev(params);
            path = formatMap('cachedContents', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = listCachedContentsResponseFromMldev(apiResponse);
                const typedResp = new ListCachedContentsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
typeof SuppressedError === "function" && SuppressedError;
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Returns true if the response is valid, false otherwise.
 */ function isValidResponse(response) {
    var _a;
    if (response.candidates == undefined || response.candidates.length === 0) return false;
    const content = (_a = response.candidates[0]) === null || _a === void 0 ? void 0 : _a.content;
    if (content === undefined) return false;
    return isValidContent(content);
}
function isValidContent(content) {
    if (content.parts === undefined || content.parts.length === 0) return false;
    for (const part of content.parts){
        if (part === undefined || Object.keys(part).length === 0) return false;
        if (!part.thought && part.text !== undefined && part.text === '') return false;
    }
    return true;
}
/**
 * Validates the history contains the correct roles.
 *
 * @throws Error if the history does not start with a user turn.
 * @throws Error if the history contains an invalid role.
 */ function validateHistory(history) {
    // Empty history is valid.
    if (history.length === 0) return;
    for (const content of history){
        if (content.role !== 'user' && content.role !== 'model') throw new Error(`Role must be user or model, but got ${content.role}.`);
    }
}
/**
 * Extracts the curated (valid) history from a comprehensive history.
 *
 * @remarks
 * The model may sometimes generate invalid or empty contents(e.g., due to safty
 * filters or recitation). Extracting valid turns from the history
 * ensures that subsequent requests could be accpeted by the model.
 */ function extractCuratedHistory(comprehensiveHistory) {
    if (comprehensiveHistory === undefined || comprehensiveHistory.length === 0) return [];
    const curatedHistory = [];
    const length = comprehensiveHistory.length;
    let i = 0;
    while(i < length)if (comprehensiveHistory[i].role === 'user') {
        curatedHistory.push(comprehensiveHistory[i]);
        i++;
    } else {
        const modelOutput = [];
        let isValid = true;
        while(i < length && comprehensiveHistory[i].role === 'model'){
            modelOutput.push(comprehensiveHistory[i]);
            if (isValid && !isValidContent(comprehensiveHistory[i])) isValid = false;
            i++;
        }
        if (isValid) curatedHistory.push(...modelOutput);
        else // Remove the last user input when model content is invalid.
        curatedHistory.pop();
    }
    return curatedHistory;
}
/**
 * A utility class to create a chat session.
 */ class Chats {
    constructor(modelsModule, apiClient){
        this.modelsModule = modelsModule;
        this.apiClient = apiClient;
    }
    /**
     * Creates a new chat session.
     *
     * @remarks
     * The config in the params will be used for all requests within the chat
     * session unless overridden by a per-request `config` in
     * @see {@link types.SendMessageParameters#config}.
     *
     * @param params - Parameters for creating a chat session.
     * @returns A new chat session.
     *
     * @example
     * ```ts
     * const chat = ai.chats.create({
     *   model: 'gemini-2.0-flash'
     *   config: {
     *     temperature: 0.5,
     *     maxOutputTokens: 1024,
     *   }
     * });
     * ```
     */ create(params) {
        return new Chat(this.apiClient, this.modelsModule, params.model, params.config, // Deep copy the history to avoid mutating the history outside of the
        // chat session.
        structuredClone(params.history));
    }
}
/**
 * Chat session that enables sending messages to the model with previous
 * conversation context.
 *
 * @remarks
 * The session maintains all the turns between user and model.
 */ class Chat {
    constructor(apiClient, modelsModule, model, config = {}, history = []){
        this.apiClient = apiClient;
        this.modelsModule = modelsModule;
        this.model = model;
        this.config = config;
        this.history = history;
        // A promise to represent the current state of the message being sent to the
        // model.
        this.sendPromise = Promise.resolve();
        validateHistory(history);
    }
    /**
     * Sends a message to the model and returns the response.
     *
     * @remarks
     * This method will wait for the previous message to be processed before
     * sending the next message.
     *
     * @see {@link Chat#sendMessageStream} for streaming method.
     * @param params - parameters for sending messages within a chat session.
     * @returns The model's response.
     *
     * @example
     * ```ts
     * const chat = ai.chats.create({model: 'gemini-2.0-flash'});
     * const response = await chat.sendMessage({
     *   message: 'Why is the sky blue?'
     * });
     * console.log(response.text);
     * ```
     */ async sendMessage(params) {
        var _a;
        await this.sendPromise;
        const inputContent = tContent(params.message);
        const responsePromise = this.modelsModule.generateContent({
            model: this.model,
            contents: this.getHistory(true).concat(inputContent),
            config: (_a = params.config) !== null && _a !== void 0 ? _a : this.config
        });
        this.sendPromise = (async ()=>{
            var _a, _b, _c;
            const response = await responsePromise;
            const outputContent = (_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content;
            // Because the AFC input contains the entire curated chat history in
            // addition to the new user input, we need to truncate the AFC history
            // to deduplicate the existing chat history.
            const fullAutomaticFunctionCallingHistory = response.automaticFunctionCallingHistory;
            const index = this.getHistory(true).length;
            let automaticFunctionCallingHistory = [];
            if (fullAutomaticFunctionCallingHistory != null) automaticFunctionCallingHistory = (_c = fullAutomaticFunctionCallingHistory.slice(index)) !== null && _c !== void 0 ? _c : [];
            const modelOutput = outputContent ? [
                outputContent
            ] : [];
            this.recordHistory(inputContent, modelOutput, automaticFunctionCallingHistory);
            return;
        })();
        await this.sendPromise.catch(()=>{
            // Resets sendPromise to avoid subsequent calls failing
            this.sendPromise = Promise.resolve();
        });
        return responsePromise;
    }
    /**
     * Sends a message to the model and returns the response in chunks.
     *
     * @remarks
     * This method will wait for the previous message to be processed before
     * sending the next message.
     *
     * @see {@link Chat#sendMessage} for non-streaming method.
     * @param params - parameters for sending the message.
     * @return The model's response.
     *
     * @example
     * ```ts
     * const chat = ai.chats.create({model: 'gemini-2.0-flash'});
     * const response = await chat.sendMessageStream({
     *   message: 'Why is the sky blue?'
     * });
     * for await (const chunk of response) {
     *   console.log(chunk.text);
     * }
     * ```
     */ async sendMessageStream(params) {
        var _a;
        await this.sendPromise;
        const inputContent = tContent(params.message);
        const streamResponse = this.modelsModule.generateContentStream({
            model: this.model,
            contents: this.getHistory(true).concat(inputContent),
            config: (_a = params.config) !== null && _a !== void 0 ? _a : this.config
        });
        // Resolve the internal tracking of send completion promise - `sendPromise`
        // for both success and failure response. The actual failure is still
        // propagated by the `await streamResponse`.
        this.sendPromise = streamResponse.then(()=>undefined).catch(()=>undefined);
        const response = await streamResponse;
        const result = this.processStreamResponse(response, inputContent);
        return result;
    }
    /**
     * Returns the chat history.
     *
     * @remarks
     * The history is a list of contents alternating between user and model.
     *
     * There are two types of history:
     * - The `curated history` contains only the valid turns between user and
     * model, which will be included in the subsequent requests sent to the model.
     * - The `comprehensive history` contains all turns, including invalid or
     *   empty model outputs, providing a complete record of the history.
     *
     * The history is updated after receiving the response from the model,
     * for streaming response, it means receiving the last chunk of the response.
     *
     * The `comprehensive history` is returned by default. To get the `curated
     * history`, set the `curated` parameter to `true`.
     *
     * @param curated - whether to return the curated history or the comprehensive
     *     history.
     * @return History contents alternating between user and model for the entire
     *     chat session.
     */ getHistory(curated = false) {
        const history = curated ? extractCuratedHistory(this.history) : this.history;
        // Deep copy the history to avoid mutating the history outside of the
        // chat session.
        return structuredClone(history);
    }
    processStreamResponse(streamResponse, inputContent) {
        var _a, _b;
        return __asyncGenerator(this, arguments, function* processStreamResponse_1() {
            var _c, e_1, _d, _e;
            const outputContent = [];
            try {
                for(var _f = true, streamResponse_1 = __asyncValues(streamResponse), streamResponse_1_1; streamResponse_1_1 = yield __await(streamResponse_1.next()), _c = streamResponse_1_1.done, !_c; _f = true){
                    _e = streamResponse_1_1.value;
                    _f = false;
                    const chunk = _e;
                    if (isValidResponse(chunk)) {
                        const content = (_b = (_a = chunk.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content;
                        if (content !== undefined) outputContent.push(content);
                    }
                    yield yield __await(chunk);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (!_f && !_c && (_d = streamResponse_1.return)) yield __await(_d.call(streamResponse_1));
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            this.recordHistory(inputContent, outputContent);
        });
    }
    recordHistory(userInput, modelOutput, automaticFunctionCallingHistory) {
        let outputContents = [];
        if (modelOutput.length > 0 && modelOutput.every((content)=>content.role !== undefined)) outputContents = modelOutput;
        else // Appends an empty content when model returns empty response, so that the
        // history is always alternating between user and model.
        outputContents.push({
            role: 'model',
            parts: []
        });
        if (automaticFunctionCallingHistory && automaticFunctionCallingHistory.length > 0) this.history.push(...extractCuratedHistory(automaticFunctionCallingHistory));
        else this.history.push(userInput);
        this.history.push(...outputContents);
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * API errors raised by the GenAI API.
 */ class ApiError extends Error {
    constructor(options){
        super(options.message);
        this.name = 'ApiError';
        this.status = options.status;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ // Code generated by the Google Gen AI SDK generator DO NOT EDIT.
function listFilesConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, [
        'pageSize'
    ]);
    if (parentObject !== undefined && fromPageSize != null) setValueByPath(parentObject, [
        '_query',
        'pageSize'
    ], fromPageSize);
    const fromPageToken = getValueByPath(fromObject, [
        'pageToken'
    ]);
    if (parentObject !== undefined && fromPageToken != null) setValueByPath(parentObject, [
        '_query',
        'pageToken'
    ], fromPageToken);
    return toObject;
}
function listFilesParametersToMldev(fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], listFilesConfigToMldev(fromConfig, toObject));
    return toObject;
}
function fileStatusToMldev(fromObject) {
    const toObject = {};
    const fromDetails = getValueByPath(fromObject, [
        'details'
    ]);
    if (fromDetails != null) setValueByPath(toObject, [
        'details'
    ], fromDetails);
    const fromMessage = getValueByPath(fromObject, [
        'message'
    ]);
    if (fromMessage != null) setValueByPath(toObject, [
        'message'
    ], fromMessage);
    const fromCode = getValueByPath(fromObject, [
        'code'
    ]);
    if (fromCode != null) setValueByPath(toObject, [
        'code'
    ], fromCode);
    return toObject;
}
function fileToMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    const fromSizeBytes = getValueByPath(fromObject, [
        'sizeBytes'
    ]);
    if (fromSizeBytes != null) setValueByPath(toObject, [
        'sizeBytes'
    ], fromSizeBytes);
    const fromCreateTime = getValueByPath(fromObject, [
        'createTime'
    ]);
    if (fromCreateTime != null) setValueByPath(toObject, [
        'createTime'
    ], fromCreateTime);
    const fromExpirationTime = getValueByPath(fromObject, [
        'expirationTime'
    ]);
    if (fromExpirationTime != null) setValueByPath(toObject, [
        'expirationTime'
    ], fromExpirationTime);
    const fromUpdateTime = getValueByPath(fromObject, [
        'updateTime'
    ]);
    if (fromUpdateTime != null) setValueByPath(toObject, [
        'updateTime'
    ], fromUpdateTime);
    const fromSha256Hash = getValueByPath(fromObject, [
        'sha256Hash'
    ]);
    if (fromSha256Hash != null) setValueByPath(toObject, [
        'sha256Hash'
    ], fromSha256Hash);
    const fromUri = getValueByPath(fromObject, [
        'uri'
    ]);
    if (fromUri != null) setValueByPath(toObject, [
        'uri'
    ], fromUri);
    const fromDownloadUri = getValueByPath(fromObject, [
        'downloadUri'
    ]);
    if (fromDownloadUri != null) setValueByPath(toObject, [
        'downloadUri'
    ], fromDownloadUri);
    const fromState = getValueByPath(fromObject, [
        'state'
    ]);
    if (fromState != null) setValueByPath(toObject, [
        'state'
    ], fromState);
    const fromSource = getValueByPath(fromObject, [
        'source'
    ]);
    if (fromSource != null) setValueByPath(toObject, [
        'source'
    ], fromSource);
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], fromVideoMetadata);
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], fileStatusToMldev(fromError));
    return toObject;
}
function createFileParametersToMldev(fromObject) {
    const toObject = {};
    const fromFile = getValueByPath(fromObject, [
        'file'
    ]);
    if (fromFile != null) setValueByPath(toObject, [
        'file'
    ], fileToMldev(fromFile));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function getFileParametersToMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'file'
    ], tFileName(fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function deleteFileParametersToMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'file'
    ], tFileName(fromName));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function fileStatusFromMldev(fromObject) {
    const toObject = {};
    const fromDetails = getValueByPath(fromObject, [
        'details'
    ]);
    if (fromDetails != null) setValueByPath(toObject, [
        'details'
    ], fromDetails);
    const fromMessage = getValueByPath(fromObject, [
        'message'
    ]);
    if (fromMessage != null) setValueByPath(toObject, [
        'message'
    ], fromMessage);
    const fromCode = getValueByPath(fromObject, [
        'code'
    ]);
    if (fromCode != null) setValueByPath(toObject, [
        'code'
    ], fromCode);
    return toObject;
}
function fileFromMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    const fromSizeBytes = getValueByPath(fromObject, [
        'sizeBytes'
    ]);
    if (fromSizeBytes != null) setValueByPath(toObject, [
        'sizeBytes'
    ], fromSizeBytes);
    const fromCreateTime = getValueByPath(fromObject, [
        'createTime'
    ]);
    if (fromCreateTime != null) setValueByPath(toObject, [
        'createTime'
    ], fromCreateTime);
    const fromExpirationTime = getValueByPath(fromObject, [
        'expirationTime'
    ]);
    if (fromExpirationTime != null) setValueByPath(toObject, [
        'expirationTime'
    ], fromExpirationTime);
    const fromUpdateTime = getValueByPath(fromObject, [
        'updateTime'
    ]);
    if (fromUpdateTime != null) setValueByPath(toObject, [
        'updateTime'
    ], fromUpdateTime);
    const fromSha256Hash = getValueByPath(fromObject, [
        'sha256Hash'
    ]);
    if (fromSha256Hash != null) setValueByPath(toObject, [
        'sha256Hash'
    ], fromSha256Hash);
    const fromUri = getValueByPath(fromObject, [
        'uri'
    ]);
    if (fromUri != null) setValueByPath(toObject, [
        'uri'
    ], fromUri);
    const fromDownloadUri = getValueByPath(fromObject, [
        'downloadUri'
    ]);
    if (fromDownloadUri != null) setValueByPath(toObject, [
        'downloadUri'
    ], fromDownloadUri);
    const fromState = getValueByPath(fromObject, [
        'state'
    ]);
    if (fromState != null) setValueByPath(toObject, [
        'state'
    ], fromState);
    const fromSource = getValueByPath(fromObject, [
        'source'
    ]);
    if (fromSource != null) setValueByPath(toObject, [
        'source'
    ], fromSource);
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], fromVideoMetadata);
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], fileStatusFromMldev(fromError));
    return toObject;
}
function listFilesResponseFromMldev(fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken'
    ]);
    if (fromNextPageToken != null) setValueByPath(toObject, [
        'nextPageToken'
    ], fromNextPageToken);
    const fromFiles = getValueByPath(fromObject, [
        'files'
    ]);
    if (fromFiles != null) {
        let transformedList = fromFiles;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return fileFromMldev(item);
        });
        setValueByPath(toObject, [
            'files'
        ], transformedList);
    }
    return toObject;
}
function createFileResponseFromMldev() {
    const toObject = {};
    return toObject;
}
function deleteFileResponseFromMldev() {
    const toObject = {};
    return toObject;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Files extends BaseModule {
    constructor(apiClient){
        super();
        this.apiClient = apiClient;
        /**
         * Lists all current project files from the service.
         *
         * @param params - The parameters for the list request
         * @return The paginated results of the list of files
         *
         * @example
         * The following code prints the names of all files from the service, the
         * size of each page is 10.
         *
         * ```ts
         * const listResponse = await ai.files.list({config: {'pageSize': 10}});
         * for await (const file of listResponse) {
         *   console.log(file.name);
         * }
         * ```
         */ this.list = async (params = {})=>{
            return new Pager(PagedItem.PAGED_ITEM_FILES, (x)=>this.listInternal(x), await this.listInternal(params), params);
        };
    }
    /**
     * Uploads a file asynchronously to the Gemini API.
     * This method is not available in Vertex AI.
     * Supported upload sources:
     * - Node.js: File path (string) or Blob object.
     * - Browser: Blob object (e.g., File).
     *
     * @remarks
     * The `mimeType` can be specified in the `config` parameter. If omitted:
     *  - For file path (string) inputs, the `mimeType` will be inferred from the
     *     file extension.
     *  - For Blob object inputs, the `mimeType` will be set to the Blob's `type`
     *     property.
     * Somex eamples for file extension to mimeType mapping:
     * .txt -> text/plain
     * .json -> application/json
     * .jpg  -> image/jpeg
     * .png -> image/png
     * .mp3 -> audio/mpeg
     * .mp4 -> video/mp4
     *
     * This section can contain multiple paragraphs and code examples.
     *
     * @param params - Optional parameters specified in the
     *        `types.UploadFileParameters` interface.
     *         @see {@link types.UploadFileParameters#config} for the optional
     *         config in the parameters.
     * @return A promise that resolves to a `types.File` object.
     * @throws An error if called on a Vertex AI client.
     * @throws An error if the `mimeType` is not provided and can not be inferred,
     * the `mimeType` can be provided in the `params.config` parameter.
     * @throws An error occurs if a suitable upload location cannot be established.
     *
     * @example
     * The following code uploads a file to Gemini API.
     *
     * ```ts
     * const file = await ai.files.upload({file: 'file.txt', config: {
     *   mimeType: 'text/plain',
     * }});
     * console.log(file.name);
     * ```
     */ async upload(params) {
        if (this.apiClient.isVertexAI()) throw new Error('Vertex AI does not support uploading files. You can share files through a GCS bucket.');
        return this.apiClient.uploadFile(params.file, params.config).then((response)=>{
            const file = fileFromMldev(response);
            return file;
        });
    }
    /**
     * Downloads a remotely stored file asynchronously to a location specified in
     * the `params` object. This method only works on Node environment, to
     * download files in the browser, use a browser compliant method like an <a>
     * tag.
     *
     * @param params - The parameters for the download request.
     *
     * @example
     * The following code downloads an example file named "files/mehozpxf877d" as
     * "file.txt".
     *
     * ```ts
     * await ai.files.download({file: file.name, downloadPath: 'file.txt'});
     * ```
     */ async download(params) {
        await this.apiClient.downloadFile(params);
    }
    async listInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) throw new Error('This method is only supported by the Gemini Developer API.');
        else {
            const body = listFilesParametersToMldev(params);
            path = formatMap('files', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = listFilesResponseFromMldev(apiResponse);
                const typedResp = new ListFilesResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    async createInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) throw new Error('This method is only supported by the Gemini Developer API.');
        else {
            const body = createFileParametersToMldev(params);
            path = formatMap('upload/v1beta/files', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then(()=>{
                const resp = createFileResponseFromMldev();
                const typedResp = new CreateFileResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Retrieves the file information from the service.
     *
     * @param params - The parameters for the get request
     * @return The Promise that resolves to the types.File object requested.
     *
     * @example
     * ```ts
     * const config: GetFileParameters = {
     *   name: fileName,
     * };
     * file = await ai.files.get(config);
     * console.log(file.name);
     * ```
     */ async get(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) throw new Error('This method is only supported by the Gemini Developer API.');
        else {
            const body = getFileParametersToMldev(params);
            path = formatMap('files/{file}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = fileFromMldev(apiResponse);
                return resp;
            });
        }
    }
    /**
     * Deletes a remotely stored file.
     *
     * @param params - The parameters for the delete request.
     * @return The DeleteFileResponse, the response for the delete method.
     *
     * @example
     * The following code deletes an example file named "files/mehozpxf877d".
     *
     * ```ts
     * await ai.files.delete({name: file.name});
     * ```
     */ async delete(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) throw new Error('This method is only supported by the Gemini Developer API.');
        else {
            const body = deleteFileParametersToMldev(params);
            path = formatMap('files/{file}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then(()=>{
                const resp = deleteFileResponseFromMldev();
                const typedResp = new DeleteFileResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function prebuiltVoiceConfigToMldev$2(fromObject) {
    const toObject = {};
    const fromVoiceName = getValueByPath(fromObject, [
        'voiceName'
    ]);
    if (fromVoiceName != null) setValueByPath(toObject, [
        'voiceName'
    ], fromVoiceName);
    return toObject;
}
function prebuiltVoiceConfigToVertex$1(fromObject) {
    const toObject = {};
    const fromVoiceName = getValueByPath(fromObject, [
        'voiceName'
    ]);
    if (fromVoiceName != null) setValueByPath(toObject, [
        'voiceName'
    ], fromVoiceName);
    return toObject;
}
function voiceConfigToMldev$2(fromObject) {
    const toObject = {};
    const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
        'prebuiltVoiceConfig'
    ]);
    if (fromPrebuiltVoiceConfig != null) setValueByPath(toObject, [
        'prebuiltVoiceConfig'
    ], prebuiltVoiceConfigToMldev$2(fromPrebuiltVoiceConfig));
    return toObject;
}
function voiceConfigToVertex$1(fromObject) {
    const toObject = {};
    const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
        'prebuiltVoiceConfig'
    ]);
    if (fromPrebuiltVoiceConfig != null) setValueByPath(toObject, [
        'prebuiltVoiceConfig'
    ], prebuiltVoiceConfigToVertex$1(fromPrebuiltVoiceConfig));
    return toObject;
}
function speakerVoiceConfigToMldev$2(fromObject) {
    const toObject = {};
    const fromSpeaker = getValueByPath(fromObject, [
        'speaker'
    ]);
    if (fromSpeaker != null) setValueByPath(toObject, [
        'speaker'
    ], fromSpeaker);
    const fromVoiceConfig = getValueByPath(fromObject, [
        'voiceConfig'
    ]);
    if (fromVoiceConfig != null) setValueByPath(toObject, [
        'voiceConfig'
    ], voiceConfigToMldev$2(fromVoiceConfig));
    return toObject;
}
function multiSpeakerVoiceConfigToMldev$2(fromObject) {
    const toObject = {};
    const fromSpeakerVoiceConfigs = getValueByPath(fromObject, [
        'speakerVoiceConfigs'
    ]);
    if (fromSpeakerVoiceConfigs != null) {
        let transformedList = fromSpeakerVoiceConfigs;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return speakerVoiceConfigToMldev$2(item);
        });
        setValueByPath(toObject, [
            'speakerVoiceConfigs'
        ], transformedList);
    }
    return toObject;
}
function speechConfigToMldev$2(fromObject) {
    const toObject = {};
    const fromVoiceConfig = getValueByPath(fromObject, [
        'voiceConfig'
    ]);
    if (fromVoiceConfig != null) setValueByPath(toObject, [
        'voiceConfig'
    ], voiceConfigToMldev$2(fromVoiceConfig));
    const fromMultiSpeakerVoiceConfig = getValueByPath(fromObject, [
        'multiSpeakerVoiceConfig'
    ]);
    if (fromMultiSpeakerVoiceConfig != null) setValueByPath(toObject, [
        'multiSpeakerVoiceConfig'
    ], multiSpeakerVoiceConfigToMldev$2(fromMultiSpeakerVoiceConfig));
    const fromLanguageCode = getValueByPath(fromObject, [
        'languageCode'
    ]);
    if (fromLanguageCode != null) setValueByPath(toObject, [
        'languageCode'
    ], fromLanguageCode);
    return toObject;
}
function speechConfigToVertex$1(fromObject) {
    const toObject = {};
    const fromVoiceConfig = getValueByPath(fromObject, [
        'voiceConfig'
    ]);
    if (fromVoiceConfig != null) setValueByPath(toObject, [
        'voiceConfig'
    ], voiceConfigToVertex$1(fromVoiceConfig));
    if (getValueByPath(fromObject, [
        'multiSpeakerVoiceConfig'
    ]) !== undefined) throw new Error('multiSpeakerVoiceConfig parameter is not supported in Vertex AI.');
    const fromLanguageCode = getValueByPath(fromObject, [
        'languageCode'
    ]);
    if (fromLanguageCode != null) setValueByPath(toObject, [
        'languageCode'
    ], fromLanguageCode);
    return toObject;
}
function videoMetadataToMldev$2(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function videoMetadataToVertex$1(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function blobToMldev$2(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'displayName'
    ]) !== undefined) throw new Error('displayName parameter is not supported in Gemini API.');
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function blobToVertex$1(fromObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataToMldev$2(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'displayName'
    ]) !== undefined) throw new Error('displayName parameter is not supported in Gemini API.');
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataToVertex$1(fromObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function partToMldev$2(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataToMldev$2(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobToMldev$2(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataToMldev$2(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function partToVertex$1(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataToVertex$1(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobToVertex$1(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataToVertex$1(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function contentToMldev$2(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partToMldev$2(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function contentToVertex$1(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partToVertex$1(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function functionDeclarationToMldev$2(fromObject) {
    const toObject = {};
    const fromBehavior = getValueByPath(fromObject, [
        'behavior'
    ]);
    if (fromBehavior != null) setValueByPath(toObject, [
        'behavior'
    ], fromBehavior);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromParameters = getValueByPath(fromObject, [
        'parameters'
    ]);
    if (fromParameters != null) setValueByPath(toObject, [
        'parameters'
    ], fromParameters);
    const fromParametersJsonSchema = getValueByPath(fromObject, [
        'parametersJsonSchema'
    ]);
    if (fromParametersJsonSchema != null) setValueByPath(toObject, [
        'parametersJsonSchema'
    ], fromParametersJsonSchema);
    const fromResponse = getValueByPath(fromObject, [
        'response'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], fromResponse);
    const fromResponseJsonSchema = getValueByPath(fromObject, [
        'responseJsonSchema'
    ]);
    if (fromResponseJsonSchema != null) setValueByPath(toObject, [
        'responseJsonSchema'
    ], fromResponseJsonSchema);
    return toObject;
}
function functionDeclarationToVertex$1(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'behavior'
    ]) !== undefined) throw new Error('behavior parameter is not supported in Vertex AI.');
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromParameters = getValueByPath(fromObject, [
        'parameters'
    ]);
    if (fromParameters != null) setValueByPath(toObject, [
        'parameters'
    ], fromParameters);
    const fromParametersJsonSchema = getValueByPath(fromObject, [
        'parametersJsonSchema'
    ]);
    if (fromParametersJsonSchema != null) setValueByPath(toObject, [
        'parametersJsonSchema'
    ], fromParametersJsonSchema);
    const fromResponse = getValueByPath(fromObject, [
        'response'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], fromResponse);
    const fromResponseJsonSchema = getValueByPath(fromObject, [
        'responseJsonSchema'
    ]);
    if (fromResponseJsonSchema != null) setValueByPath(toObject, [
        'responseJsonSchema'
    ], fromResponseJsonSchema);
    return toObject;
}
function intervalToMldev$2(fromObject) {
    const toObject = {};
    const fromStartTime = getValueByPath(fromObject, [
        'startTime'
    ]);
    if (fromStartTime != null) setValueByPath(toObject, [
        'startTime'
    ], fromStartTime);
    const fromEndTime = getValueByPath(fromObject, [
        'endTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    return toObject;
}
function intervalToVertex$1(fromObject) {
    const toObject = {};
    const fromStartTime = getValueByPath(fromObject, [
        'startTime'
    ]);
    if (fromStartTime != null) setValueByPath(toObject, [
        'startTime'
    ], fromStartTime);
    const fromEndTime = getValueByPath(fromObject, [
        'endTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    return toObject;
}
function googleSearchToMldev$2(fromObject) {
    const toObject = {};
    const fromTimeRangeFilter = getValueByPath(fromObject, [
        'timeRangeFilter'
    ]);
    if (fromTimeRangeFilter != null) setValueByPath(toObject, [
        'timeRangeFilter'
    ], intervalToMldev$2(fromTimeRangeFilter));
    return toObject;
}
function googleSearchToVertex$1(fromObject) {
    const toObject = {};
    const fromTimeRangeFilter = getValueByPath(fromObject, [
        'timeRangeFilter'
    ]);
    if (fromTimeRangeFilter != null) setValueByPath(toObject, [
        'timeRangeFilter'
    ], intervalToVertex$1(fromTimeRangeFilter));
    return toObject;
}
function dynamicRetrievalConfigToMldev$2(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold'
    ]);
    if (fromDynamicThreshold != null) setValueByPath(toObject, [
        'dynamicThreshold'
    ], fromDynamicThreshold);
    return toObject;
}
function dynamicRetrievalConfigToVertex$1(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold'
    ]);
    if (fromDynamicThreshold != null) setValueByPath(toObject, [
        'dynamicThreshold'
    ], fromDynamicThreshold);
    return toObject;
}
function googleSearchRetrievalToMldev$2(fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig'
    ]);
    if (fromDynamicRetrievalConfig != null) setValueByPath(toObject, [
        'dynamicRetrievalConfig'
    ], dynamicRetrievalConfigToMldev$2(fromDynamicRetrievalConfig));
    return toObject;
}
function googleSearchRetrievalToVertex$1(fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig'
    ]);
    if (fromDynamicRetrievalConfig != null) setValueByPath(toObject, [
        'dynamicRetrievalConfig'
    ], dynamicRetrievalConfigToVertex$1(fromDynamicRetrievalConfig));
    return toObject;
}
function enterpriseWebSearchToVertex$1() {
    const toObject = {};
    return toObject;
}
function apiKeyConfigToVertex$1(fromObject) {
    const toObject = {};
    const fromApiKeyString = getValueByPath(fromObject, [
        'apiKeyString'
    ]);
    if (fromApiKeyString != null) setValueByPath(toObject, [
        'apiKeyString'
    ], fromApiKeyString);
    return toObject;
}
function authConfigToVertex$1(fromObject) {
    const toObject = {};
    const fromApiKeyConfig = getValueByPath(fromObject, [
        'apiKeyConfig'
    ]);
    if (fromApiKeyConfig != null) setValueByPath(toObject, [
        'apiKeyConfig'
    ], apiKeyConfigToVertex$1(fromApiKeyConfig));
    const fromAuthType = getValueByPath(fromObject, [
        'authType'
    ]);
    if (fromAuthType != null) setValueByPath(toObject, [
        'authType'
    ], fromAuthType);
    const fromGoogleServiceAccountConfig = getValueByPath(fromObject, [
        'googleServiceAccountConfig'
    ]);
    if (fromGoogleServiceAccountConfig != null) setValueByPath(toObject, [
        'googleServiceAccountConfig'
    ], fromGoogleServiceAccountConfig);
    const fromHttpBasicAuthConfig = getValueByPath(fromObject, [
        'httpBasicAuthConfig'
    ]);
    if (fromHttpBasicAuthConfig != null) setValueByPath(toObject, [
        'httpBasicAuthConfig'
    ], fromHttpBasicAuthConfig);
    const fromOauthConfig = getValueByPath(fromObject, [
        'oauthConfig'
    ]);
    if (fromOauthConfig != null) setValueByPath(toObject, [
        'oauthConfig'
    ], fromOauthConfig);
    const fromOidcConfig = getValueByPath(fromObject, [
        'oidcConfig'
    ]);
    if (fromOidcConfig != null) setValueByPath(toObject, [
        'oidcConfig'
    ], fromOidcConfig);
    return toObject;
}
function googleMapsToVertex$1(fromObject) {
    const toObject = {};
    const fromAuthConfig = getValueByPath(fromObject, [
        'authConfig'
    ]);
    if (fromAuthConfig != null) setValueByPath(toObject, [
        'authConfig'
    ], authConfigToVertex$1(fromAuthConfig));
    return toObject;
}
function urlContextToMldev$2() {
    const toObject = {};
    return toObject;
}
function urlContextToVertex$1() {
    const toObject = {};
    return toObject;
}
function toolToMldev$2(fromObject) {
    const toObject = {};
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations'
    ]);
    if (fromFunctionDeclarations != null) {
        let transformedList = fromFunctionDeclarations;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return functionDeclarationToMldev$2(item);
        });
        setValueByPath(toObject, [
            'functionDeclarations'
        ], transformedList);
    }
    if (getValueByPath(fromObject, [
        'retrieval'
    ]) !== undefined) throw new Error('retrieval parameter is not supported in Gemini API.');
    const fromGoogleSearch = getValueByPath(fromObject, [
        'googleSearch'
    ]);
    if (fromGoogleSearch != null) setValueByPath(toObject, [
        'googleSearch'
    ], googleSearchToMldev$2(fromGoogleSearch));
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval'
    ]);
    if (fromGoogleSearchRetrieval != null) setValueByPath(toObject, [
        'googleSearchRetrieval'
    ], googleSearchRetrievalToMldev$2(fromGoogleSearchRetrieval));
    if (getValueByPath(fromObject, [
        'enterpriseWebSearch'
    ]) !== undefined) throw new Error('enterpriseWebSearch parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'googleMaps'
    ]) !== undefined) throw new Error('googleMaps parameter is not supported in Gemini API.');
    const fromUrlContext = getValueByPath(fromObject, [
        'urlContext'
    ]);
    if (fromUrlContext != null) setValueByPath(toObject, [
        'urlContext'
    ], urlContextToMldev$2());
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution'
    ]);
    if (fromCodeExecution != null) setValueByPath(toObject, [
        'codeExecution'
    ], fromCodeExecution);
    const fromComputerUse = getValueByPath(fromObject, [
        'computerUse'
    ]);
    if (fromComputerUse != null) setValueByPath(toObject, [
        'computerUse'
    ], fromComputerUse);
    return toObject;
}
function toolToVertex$1(fromObject) {
    const toObject = {};
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations'
    ]);
    if (fromFunctionDeclarations != null) {
        let transformedList = fromFunctionDeclarations;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return functionDeclarationToVertex$1(item);
        });
        setValueByPath(toObject, [
            'functionDeclarations'
        ], transformedList);
    }
    const fromRetrieval = getValueByPath(fromObject, [
        'retrieval'
    ]);
    if (fromRetrieval != null) setValueByPath(toObject, [
        'retrieval'
    ], fromRetrieval);
    const fromGoogleSearch = getValueByPath(fromObject, [
        'googleSearch'
    ]);
    if (fromGoogleSearch != null) setValueByPath(toObject, [
        'googleSearch'
    ], googleSearchToVertex$1(fromGoogleSearch));
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval'
    ]);
    if (fromGoogleSearchRetrieval != null) setValueByPath(toObject, [
        'googleSearchRetrieval'
    ], googleSearchRetrievalToVertex$1(fromGoogleSearchRetrieval));
    const fromEnterpriseWebSearch = getValueByPath(fromObject, [
        'enterpriseWebSearch'
    ]);
    if (fromEnterpriseWebSearch != null) setValueByPath(toObject, [
        'enterpriseWebSearch'
    ], enterpriseWebSearchToVertex$1());
    const fromGoogleMaps = getValueByPath(fromObject, [
        'googleMaps'
    ]);
    if (fromGoogleMaps != null) setValueByPath(toObject, [
        'googleMaps'
    ], googleMapsToVertex$1(fromGoogleMaps));
    const fromUrlContext = getValueByPath(fromObject, [
        'urlContext'
    ]);
    if (fromUrlContext != null) setValueByPath(toObject, [
        'urlContext'
    ], urlContextToVertex$1());
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution'
    ]);
    if (fromCodeExecution != null) setValueByPath(toObject, [
        'codeExecution'
    ], fromCodeExecution);
    const fromComputerUse = getValueByPath(fromObject, [
        'computerUse'
    ]);
    if (fromComputerUse != null) setValueByPath(toObject, [
        'computerUse'
    ], fromComputerUse);
    return toObject;
}
function sessionResumptionConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromHandle = getValueByPath(fromObject, [
        'handle'
    ]);
    if (fromHandle != null) setValueByPath(toObject, [
        'handle'
    ], fromHandle);
    if (getValueByPath(fromObject, [
        'transparent'
    ]) !== undefined) throw new Error('transparent parameter is not supported in Gemini API.');
    return toObject;
}
function sessionResumptionConfigToVertex(fromObject) {
    const toObject = {};
    const fromHandle = getValueByPath(fromObject, [
        'handle'
    ]);
    if (fromHandle != null) setValueByPath(toObject, [
        'handle'
    ], fromHandle);
    const fromTransparent = getValueByPath(fromObject, [
        'transparent'
    ]);
    if (fromTransparent != null) setValueByPath(toObject, [
        'transparent'
    ], fromTransparent);
    return toObject;
}
function audioTranscriptionConfigToMldev$1() {
    const toObject = {};
    return toObject;
}
function audioTranscriptionConfigToVertex() {
    const toObject = {};
    return toObject;
}
function automaticActivityDetectionToMldev$1(fromObject) {
    const toObject = {};
    const fromDisabled = getValueByPath(fromObject, [
        'disabled'
    ]);
    if (fromDisabled != null) setValueByPath(toObject, [
        'disabled'
    ], fromDisabled);
    const fromStartOfSpeechSensitivity = getValueByPath(fromObject, [
        'startOfSpeechSensitivity'
    ]);
    if (fromStartOfSpeechSensitivity != null) setValueByPath(toObject, [
        'startOfSpeechSensitivity'
    ], fromStartOfSpeechSensitivity);
    const fromEndOfSpeechSensitivity = getValueByPath(fromObject, [
        'endOfSpeechSensitivity'
    ]);
    if (fromEndOfSpeechSensitivity != null) setValueByPath(toObject, [
        'endOfSpeechSensitivity'
    ], fromEndOfSpeechSensitivity);
    const fromPrefixPaddingMs = getValueByPath(fromObject, [
        'prefixPaddingMs'
    ]);
    if (fromPrefixPaddingMs != null) setValueByPath(toObject, [
        'prefixPaddingMs'
    ], fromPrefixPaddingMs);
    const fromSilenceDurationMs = getValueByPath(fromObject, [
        'silenceDurationMs'
    ]);
    if (fromSilenceDurationMs != null) setValueByPath(toObject, [
        'silenceDurationMs'
    ], fromSilenceDurationMs);
    return toObject;
}
function automaticActivityDetectionToVertex(fromObject) {
    const toObject = {};
    const fromDisabled = getValueByPath(fromObject, [
        'disabled'
    ]);
    if (fromDisabled != null) setValueByPath(toObject, [
        'disabled'
    ], fromDisabled);
    const fromStartOfSpeechSensitivity = getValueByPath(fromObject, [
        'startOfSpeechSensitivity'
    ]);
    if (fromStartOfSpeechSensitivity != null) setValueByPath(toObject, [
        'startOfSpeechSensitivity'
    ], fromStartOfSpeechSensitivity);
    const fromEndOfSpeechSensitivity = getValueByPath(fromObject, [
        'endOfSpeechSensitivity'
    ]);
    if (fromEndOfSpeechSensitivity != null) setValueByPath(toObject, [
        'endOfSpeechSensitivity'
    ], fromEndOfSpeechSensitivity);
    const fromPrefixPaddingMs = getValueByPath(fromObject, [
        'prefixPaddingMs'
    ]);
    if (fromPrefixPaddingMs != null) setValueByPath(toObject, [
        'prefixPaddingMs'
    ], fromPrefixPaddingMs);
    const fromSilenceDurationMs = getValueByPath(fromObject, [
        'silenceDurationMs'
    ]);
    if (fromSilenceDurationMs != null) setValueByPath(toObject, [
        'silenceDurationMs'
    ], fromSilenceDurationMs);
    return toObject;
}
function realtimeInputConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromAutomaticActivityDetection = getValueByPath(fromObject, [
        'automaticActivityDetection'
    ]);
    if (fromAutomaticActivityDetection != null) setValueByPath(toObject, [
        'automaticActivityDetection'
    ], automaticActivityDetectionToMldev$1(fromAutomaticActivityDetection));
    const fromActivityHandling = getValueByPath(fromObject, [
        'activityHandling'
    ]);
    if (fromActivityHandling != null) setValueByPath(toObject, [
        'activityHandling'
    ], fromActivityHandling);
    const fromTurnCoverage = getValueByPath(fromObject, [
        'turnCoverage'
    ]);
    if (fromTurnCoverage != null) setValueByPath(toObject, [
        'turnCoverage'
    ], fromTurnCoverage);
    return toObject;
}
function realtimeInputConfigToVertex(fromObject) {
    const toObject = {};
    const fromAutomaticActivityDetection = getValueByPath(fromObject, [
        'automaticActivityDetection'
    ]);
    if (fromAutomaticActivityDetection != null) setValueByPath(toObject, [
        'automaticActivityDetection'
    ], automaticActivityDetectionToVertex(fromAutomaticActivityDetection));
    const fromActivityHandling = getValueByPath(fromObject, [
        'activityHandling'
    ]);
    if (fromActivityHandling != null) setValueByPath(toObject, [
        'activityHandling'
    ], fromActivityHandling);
    const fromTurnCoverage = getValueByPath(fromObject, [
        'turnCoverage'
    ]);
    if (fromTurnCoverage != null) setValueByPath(toObject, [
        'turnCoverage'
    ], fromTurnCoverage);
    return toObject;
}
function slidingWindowToMldev$1(fromObject) {
    const toObject = {};
    const fromTargetTokens = getValueByPath(fromObject, [
        'targetTokens'
    ]);
    if (fromTargetTokens != null) setValueByPath(toObject, [
        'targetTokens'
    ], fromTargetTokens);
    return toObject;
}
function slidingWindowToVertex(fromObject) {
    const toObject = {};
    const fromTargetTokens = getValueByPath(fromObject, [
        'targetTokens'
    ]);
    if (fromTargetTokens != null) setValueByPath(toObject, [
        'targetTokens'
    ], fromTargetTokens);
    return toObject;
}
function contextWindowCompressionConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromTriggerTokens = getValueByPath(fromObject, [
        'triggerTokens'
    ]);
    if (fromTriggerTokens != null) setValueByPath(toObject, [
        'triggerTokens'
    ], fromTriggerTokens);
    const fromSlidingWindow = getValueByPath(fromObject, [
        'slidingWindow'
    ]);
    if (fromSlidingWindow != null) setValueByPath(toObject, [
        'slidingWindow'
    ], slidingWindowToMldev$1(fromSlidingWindow));
    return toObject;
}
function contextWindowCompressionConfigToVertex(fromObject) {
    const toObject = {};
    const fromTriggerTokens = getValueByPath(fromObject, [
        'triggerTokens'
    ]);
    if (fromTriggerTokens != null) setValueByPath(toObject, [
        'triggerTokens'
    ], fromTriggerTokens);
    const fromSlidingWindow = getValueByPath(fromObject, [
        'slidingWindow'
    ]);
    if (fromSlidingWindow != null) setValueByPath(toObject, [
        'slidingWindow'
    ], slidingWindowToVertex(fromSlidingWindow));
    return toObject;
}
function proactivityConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromProactiveAudio = getValueByPath(fromObject, [
        'proactiveAudio'
    ]);
    if (fromProactiveAudio != null) setValueByPath(toObject, [
        'proactiveAudio'
    ], fromProactiveAudio);
    return toObject;
}
function proactivityConfigToVertex(fromObject) {
    const toObject = {};
    const fromProactiveAudio = getValueByPath(fromObject, [
        'proactiveAudio'
    ]);
    if (fromProactiveAudio != null) setValueByPath(toObject, [
        'proactiveAudio'
    ], fromProactiveAudio);
    return toObject;
}
function liveConnectConfigToMldev$1(fromObject, parentObject) {
    const toObject = {};
    const fromGenerationConfig = getValueByPath(fromObject, [
        'generationConfig'
    ]);
    if (parentObject !== undefined && fromGenerationConfig != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig'
    ], fromGenerationConfig);
    const fromResponseModalities = getValueByPath(fromObject, [
        'responseModalities'
    ]);
    if (parentObject !== undefined && fromResponseModalities != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'responseModalities'
    ], fromResponseModalities);
    const fromTemperature = getValueByPath(fromObject, [
        'temperature'
    ]);
    if (parentObject !== undefined && fromTemperature != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'temperature'
    ], fromTemperature);
    const fromTopP = getValueByPath(fromObject, [
        'topP'
    ]);
    if (parentObject !== undefined && fromTopP != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'topP'
    ], fromTopP);
    const fromTopK = getValueByPath(fromObject, [
        'topK'
    ]);
    if (parentObject !== undefined && fromTopK != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'topK'
    ], fromTopK);
    const fromMaxOutputTokens = getValueByPath(fromObject, [
        'maxOutputTokens'
    ]);
    if (parentObject !== undefined && fromMaxOutputTokens != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'maxOutputTokens'
    ], fromMaxOutputTokens);
    const fromMediaResolution = getValueByPath(fromObject, [
        'mediaResolution'
    ]);
    if (parentObject !== undefined && fromMediaResolution != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'mediaResolution'
    ], fromMediaResolution);
    const fromSeed = getValueByPath(fromObject, [
        'seed'
    ]);
    if (parentObject !== undefined && fromSeed != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'seed'
    ], fromSeed);
    const fromSpeechConfig = getValueByPath(fromObject, [
        'speechConfig'
    ]);
    if (parentObject !== undefined && fromSpeechConfig != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'speechConfig'
    ], speechConfigToMldev$2(tLiveSpeechConfig(fromSpeechConfig)));
    const fromEnableAffectiveDialog = getValueByPath(fromObject, [
        'enableAffectiveDialog'
    ]);
    if (parentObject !== undefined && fromEnableAffectiveDialog != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'enableAffectiveDialog'
    ], fromEnableAffectiveDialog);
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction'
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) setValueByPath(parentObject, [
        'setup',
        'systemInstruction'
    ], contentToMldev$2(tContent(fromSystemInstruction)));
    const fromTools = getValueByPath(fromObject, [
        'tools'
    ]);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = tTools(fromTools);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return toolToMldev$2(tTool(item));
        });
        setValueByPath(parentObject, [
            'setup',
            'tools'
        ], transformedList);
    }
    const fromSessionResumption = getValueByPath(fromObject, [
        'sessionResumption'
    ]);
    if (parentObject !== undefined && fromSessionResumption != null) setValueByPath(parentObject, [
        'setup',
        'sessionResumption'
    ], sessionResumptionConfigToMldev$1(fromSessionResumption));
    const fromInputAudioTranscription = getValueByPath(fromObject, [
        'inputAudioTranscription'
    ]);
    if (parentObject !== undefined && fromInputAudioTranscription != null) setValueByPath(parentObject, [
        'setup',
        'inputAudioTranscription'
    ], audioTranscriptionConfigToMldev$1());
    const fromOutputAudioTranscription = getValueByPath(fromObject, [
        'outputAudioTranscription'
    ]);
    if (parentObject !== undefined && fromOutputAudioTranscription != null) setValueByPath(parentObject, [
        'setup',
        'outputAudioTranscription'
    ], audioTranscriptionConfigToMldev$1());
    const fromRealtimeInputConfig = getValueByPath(fromObject, [
        'realtimeInputConfig'
    ]);
    if (parentObject !== undefined && fromRealtimeInputConfig != null) setValueByPath(parentObject, [
        'setup',
        'realtimeInputConfig'
    ], realtimeInputConfigToMldev$1(fromRealtimeInputConfig));
    const fromContextWindowCompression = getValueByPath(fromObject, [
        'contextWindowCompression'
    ]);
    if (parentObject !== undefined && fromContextWindowCompression != null) setValueByPath(parentObject, [
        'setup',
        'contextWindowCompression'
    ], contextWindowCompressionConfigToMldev$1(fromContextWindowCompression));
    const fromProactivity = getValueByPath(fromObject, [
        'proactivity'
    ]);
    if (parentObject !== undefined && fromProactivity != null) setValueByPath(parentObject, [
        'setup',
        'proactivity'
    ], proactivityConfigToMldev$1(fromProactivity));
    return toObject;
}
function liveConnectConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromGenerationConfig = getValueByPath(fromObject, [
        'generationConfig'
    ]);
    if (parentObject !== undefined && fromGenerationConfig != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig'
    ], fromGenerationConfig);
    const fromResponseModalities = getValueByPath(fromObject, [
        'responseModalities'
    ]);
    if (parentObject !== undefined && fromResponseModalities != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'responseModalities'
    ], fromResponseModalities);
    const fromTemperature = getValueByPath(fromObject, [
        'temperature'
    ]);
    if (parentObject !== undefined && fromTemperature != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'temperature'
    ], fromTemperature);
    const fromTopP = getValueByPath(fromObject, [
        'topP'
    ]);
    if (parentObject !== undefined && fromTopP != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'topP'
    ], fromTopP);
    const fromTopK = getValueByPath(fromObject, [
        'topK'
    ]);
    if (parentObject !== undefined && fromTopK != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'topK'
    ], fromTopK);
    const fromMaxOutputTokens = getValueByPath(fromObject, [
        'maxOutputTokens'
    ]);
    if (parentObject !== undefined && fromMaxOutputTokens != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'maxOutputTokens'
    ], fromMaxOutputTokens);
    const fromMediaResolution = getValueByPath(fromObject, [
        'mediaResolution'
    ]);
    if (parentObject !== undefined && fromMediaResolution != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'mediaResolution'
    ], fromMediaResolution);
    const fromSeed = getValueByPath(fromObject, [
        'seed'
    ]);
    if (parentObject !== undefined && fromSeed != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'seed'
    ], fromSeed);
    const fromSpeechConfig = getValueByPath(fromObject, [
        'speechConfig'
    ]);
    if (parentObject !== undefined && fromSpeechConfig != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'speechConfig'
    ], speechConfigToVertex$1(tLiveSpeechConfig(fromSpeechConfig)));
    const fromEnableAffectiveDialog = getValueByPath(fromObject, [
        'enableAffectiveDialog'
    ]);
    if (parentObject !== undefined && fromEnableAffectiveDialog != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'enableAffectiveDialog'
    ], fromEnableAffectiveDialog);
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction'
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) setValueByPath(parentObject, [
        'setup',
        'systemInstruction'
    ], contentToVertex$1(tContent(fromSystemInstruction)));
    const fromTools = getValueByPath(fromObject, [
        'tools'
    ]);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = tTools(fromTools);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return toolToVertex$1(tTool(item));
        });
        setValueByPath(parentObject, [
            'setup',
            'tools'
        ], transformedList);
    }
    const fromSessionResumption = getValueByPath(fromObject, [
        'sessionResumption'
    ]);
    if (parentObject !== undefined && fromSessionResumption != null) setValueByPath(parentObject, [
        'setup',
        'sessionResumption'
    ], sessionResumptionConfigToVertex(fromSessionResumption));
    const fromInputAudioTranscription = getValueByPath(fromObject, [
        'inputAudioTranscription'
    ]);
    if (parentObject !== undefined && fromInputAudioTranscription != null) setValueByPath(parentObject, [
        'setup',
        'inputAudioTranscription'
    ], audioTranscriptionConfigToVertex());
    const fromOutputAudioTranscription = getValueByPath(fromObject, [
        'outputAudioTranscription'
    ]);
    if (parentObject !== undefined && fromOutputAudioTranscription != null) setValueByPath(parentObject, [
        'setup',
        'outputAudioTranscription'
    ], audioTranscriptionConfigToVertex());
    const fromRealtimeInputConfig = getValueByPath(fromObject, [
        'realtimeInputConfig'
    ]);
    if (parentObject !== undefined && fromRealtimeInputConfig != null) setValueByPath(parentObject, [
        'setup',
        'realtimeInputConfig'
    ], realtimeInputConfigToVertex(fromRealtimeInputConfig));
    const fromContextWindowCompression = getValueByPath(fromObject, [
        'contextWindowCompression'
    ]);
    if (parentObject !== undefined && fromContextWindowCompression != null) setValueByPath(parentObject, [
        'setup',
        'contextWindowCompression'
    ], contextWindowCompressionConfigToVertex(fromContextWindowCompression));
    const fromProactivity = getValueByPath(fromObject, [
        'proactivity'
    ]);
    if (parentObject !== undefined && fromProactivity != null) setValueByPath(parentObject, [
        'setup',
        'proactivity'
    ], proactivityConfigToVertex(fromProactivity));
    return toObject;
}
function liveConnectParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'setup',
        'model'
    ], tModel(apiClient, fromModel));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], liveConnectConfigToMldev$1(fromConfig, toObject));
    return toObject;
}
function liveConnectParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'setup',
        'model'
    ], tModel(apiClient, fromModel));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], liveConnectConfigToVertex(fromConfig, toObject));
    return toObject;
}
function activityStartToMldev() {
    const toObject = {};
    return toObject;
}
function activityStartToVertex() {
    const toObject = {};
    return toObject;
}
function activityEndToMldev() {
    const toObject = {};
    return toObject;
}
function activityEndToVertex() {
    const toObject = {};
    return toObject;
}
function liveSendRealtimeInputParametersToMldev(fromObject) {
    const toObject = {};
    const fromMedia = getValueByPath(fromObject, [
        'media'
    ]);
    if (fromMedia != null) setValueByPath(toObject, [
        'mediaChunks'
    ], tBlobs(fromMedia));
    const fromAudio = getValueByPath(fromObject, [
        'audio'
    ]);
    if (fromAudio != null) setValueByPath(toObject, [
        'audio'
    ], tAudioBlob(fromAudio));
    const fromAudioStreamEnd = getValueByPath(fromObject, [
        'audioStreamEnd'
    ]);
    if (fromAudioStreamEnd != null) setValueByPath(toObject, [
        'audioStreamEnd'
    ], fromAudioStreamEnd);
    const fromVideo = getValueByPath(fromObject, [
        'video'
    ]);
    if (fromVideo != null) setValueByPath(toObject, [
        'video'
    ], tImageBlob(fromVideo));
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    const fromActivityStart = getValueByPath(fromObject, [
        'activityStart'
    ]);
    if (fromActivityStart != null) setValueByPath(toObject, [
        'activityStart'
    ], activityStartToMldev());
    const fromActivityEnd = getValueByPath(fromObject, [
        'activityEnd'
    ]);
    if (fromActivityEnd != null) setValueByPath(toObject, [
        'activityEnd'
    ], activityEndToMldev());
    return toObject;
}
function liveSendRealtimeInputParametersToVertex(fromObject) {
    const toObject = {};
    const fromMedia = getValueByPath(fromObject, [
        'media'
    ]);
    if (fromMedia != null) setValueByPath(toObject, [
        'mediaChunks'
    ], tBlobs(fromMedia));
    const fromAudio = getValueByPath(fromObject, [
        'audio'
    ]);
    if (fromAudio != null) setValueByPath(toObject, [
        'audio'
    ], tAudioBlob(fromAudio));
    const fromAudioStreamEnd = getValueByPath(fromObject, [
        'audioStreamEnd'
    ]);
    if (fromAudioStreamEnd != null) setValueByPath(toObject, [
        'audioStreamEnd'
    ], fromAudioStreamEnd);
    const fromVideo = getValueByPath(fromObject, [
        'video'
    ]);
    if (fromVideo != null) setValueByPath(toObject, [
        'video'
    ], tImageBlob(fromVideo));
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    const fromActivityStart = getValueByPath(fromObject, [
        'activityStart'
    ]);
    if (fromActivityStart != null) setValueByPath(toObject, [
        'activityStart'
    ], activityStartToVertex());
    const fromActivityEnd = getValueByPath(fromObject, [
        'activityEnd'
    ]);
    if (fromActivityEnd != null) setValueByPath(toObject, [
        'activityEnd'
    ], activityEndToVertex());
    return toObject;
}
function weightedPromptToMldev(fromObject) {
    const toObject = {};
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    const fromWeight = getValueByPath(fromObject, [
        'weight'
    ]);
    if (fromWeight != null) setValueByPath(toObject, [
        'weight'
    ], fromWeight);
    return toObject;
}
function liveMusicSetWeightedPromptsParametersToMldev(fromObject) {
    const toObject = {};
    const fromWeightedPrompts = getValueByPath(fromObject, [
        'weightedPrompts'
    ]);
    if (fromWeightedPrompts != null) {
        let transformedList = fromWeightedPrompts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return weightedPromptToMldev(item);
        });
        setValueByPath(toObject, [
            'weightedPrompts'
        ], transformedList);
    }
    return toObject;
}
function liveMusicGenerationConfigToMldev(fromObject) {
    const toObject = {};
    const fromTemperature = getValueByPath(fromObject, [
        'temperature'
    ]);
    if (fromTemperature != null) setValueByPath(toObject, [
        'temperature'
    ], fromTemperature);
    const fromTopK = getValueByPath(fromObject, [
        'topK'
    ]);
    if (fromTopK != null) setValueByPath(toObject, [
        'topK'
    ], fromTopK);
    const fromSeed = getValueByPath(fromObject, [
        'seed'
    ]);
    if (fromSeed != null) setValueByPath(toObject, [
        'seed'
    ], fromSeed);
    const fromGuidance = getValueByPath(fromObject, [
        'guidance'
    ]);
    if (fromGuidance != null) setValueByPath(toObject, [
        'guidance'
    ], fromGuidance);
    const fromBpm = getValueByPath(fromObject, [
        'bpm'
    ]);
    if (fromBpm != null) setValueByPath(toObject, [
        'bpm'
    ], fromBpm);
    const fromDensity = getValueByPath(fromObject, [
        'density'
    ]);
    if (fromDensity != null) setValueByPath(toObject, [
        'density'
    ], fromDensity);
    const fromBrightness = getValueByPath(fromObject, [
        'brightness'
    ]);
    if (fromBrightness != null) setValueByPath(toObject, [
        'brightness'
    ], fromBrightness);
    const fromScale = getValueByPath(fromObject, [
        'scale'
    ]);
    if (fromScale != null) setValueByPath(toObject, [
        'scale'
    ], fromScale);
    const fromMuteBass = getValueByPath(fromObject, [
        'muteBass'
    ]);
    if (fromMuteBass != null) setValueByPath(toObject, [
        'muteBass'
    ], fromMuteBass);
    const fromMuteDrums = getValueByPath(fromObject, [
        'muteDrums'
    ]);
    if (fromMuteDrums != null) setValueByPath(toObject, [
        'muteDrums'
    ], fromMuteDrums);
    const fromOnlyBassAndDrums = getValueByPath(fromObject, [
        'onlyBassAndDrums'
    ]);
    if (fromOnlyBassAndDrums != null) setValueByPath(toObject, [
        'onlyBassAndDrums'
    ], fromOnlyBassAndDrums);
    return toObject;
}
function liveMusicSetConfigParametersToMldev(fromObject) {
    const toObject = {};
    const fromMusicGenerationConfig = getValueByPath(fromObject, [
        'musicGenerationConfig'
    ]);
    if (fromMusicGenerationConfig != null) setValueByPath(toObject, [
        'musicGenerationConfig'
    ], liveMusicGenerationConfigToMldev(fromMusicGenerationConfig));
    return toObject;
}
function liveMusicClientSetupToMldev(fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'model'
    ], fromModel);
    return toObject;
}
function liveMusicClientContentToMldev(fromObject) {
    const toObject = {};
    const fromWeightedPrompts = getValueByPath(fromObject, [
        'weightedPrompts'
    ]);
    if (fromWeightedPrompts != null) {
        let transformedList = fromWeightedPrompts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return weightedPromptToMldev(item);
        });
        setValueByPath(toObject, [
            'weightedPrompts'
        ], transformedList);
    }
    return toObject;
}
function liveMusicClientMessageToMldev(fromObject) {
    const toObject = {};
    const fromSetup = getValueByPath(fromObject, [
        'setup'
    ]);
    if (fromSetup != null) setValueByPath(toObject, [
        'setup'
    ], liveMusicClientSetupToMldev(fromSetup));
    const fromClientContent = getValueByPath(fromObject, [
        'clientContent'
    ]);
    if (fromClientContent != null) setValueByPath(toObject, [
        'clientContent'
    ], liveMusicClientContentToMldev(fromClientContent));
    const fromMusicGenerationConfig = getValueByPath(fromObject, [
        'musicGenerationConfig'
    ]);
    if (fromMusicGenerationConfig != null) setValueByPath(toObject, [
        'musicGenerationConfig'
    ], liveMusicGenerationConfigToMldev(fromMusicGenerationConfig));
    const fromPlaybackControl = getValueByPath(fromObject, [
        'playbackControl'
    ]);
    if (fromPlaybackControl != null) setValueByPath(toObject, [
        'playbackControl'
    ], fromPlaybackControl);
    return toObject;
}
function liveServerSetupCompleteFromMldev() {
    const toObject = {};
    return toObject;
}
function liveServerSetupCompleteFromVertex(fromObject) {
    const toObject = {};
    const fromSessionId = getValueByPath(fromObject, [
        'sessionId'
    ]);
    if (fromSessionId != null) setValueByPath(toObject, [
        'sessionId'
    ], fromSessionId);
    return toObject;
}
function videoMetadataFromMldev$1(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function videoMetadataFromVertex$1(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function blobFromMldev$1(fromObject) {
    const toObject = {};
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function blobFromVertex$1(fromObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataFromMldev$1(fromObject) {
    const toObject = {};
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataFromVertex$1(fromObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function partFromMldev$1(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataFromMldev$1(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobFromMldev$1(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataFromMldev$1(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function partFromVertex$1(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataFromVertex$1(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobFromVertex$1(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataFromVertex$1(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function contentFromMldev$1(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partFromMldev$1(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function contentFromVertex$1(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partFromVertex$1(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function transcriptionFromMldev(fromObject) {
    const toObject = {};
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    const fromFinished = getValueByPath(fromObject, [
        'finished'
    ]);
    if (fromFinished != null) setValueByPath(toObject, [
        'finished'
    ], fromFinished);
    return toObject;
}
function transcriptionFromVertex(fromObject) {
    const toObject = {};
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    const fromFinished = getValueByPath(fromObject, [
        'finished'
    ]);
    if (fromFinished != null) setValueByPath(toObject, [
        'finished'
    ], fromFinished);
    return toObject;
}
function urlMetadataFromMldev$1(fromObject) {
    const toObject = {};
    const fromRetrievedUrl = getValueByPath(fromObject, [
        'retrievedUrl'
    ]);
    if (fromRetrievedUrl != null) setValueByPath(toObject, [
        'retrievedUrl'
    ], fromRetrievedUrl);
    const fromUrlRetrievalStatus = getValueByPath(fromObject, [
        'urlRetrievalStatus'
    ]);
    if (fromUrlRetrievalStatus != null) setValueByPath(toObject, [
        'urlRetrievalStatus'
    ], fromUrlRetrievalStatus);
    return toObject;
}
function urlContextMetadataFromMldev$1(fromObject) {
    const toObject = {};
    const fromUrlMetadata = getValueByPath(fromObject, [
        'urlMetadata'
    ]);
    if (fromUrlMetadata != null) {
        let transformedList = fromUrlMetadata;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return urlMetadataFromMldev$1(item);
        });
        setValueByPath(toObject, [
            'urlMetadata'
        ], transformedList);
    }
    return toObject;
}
function liveServerContentFromMldev(fromObject) {
    const toObject = {};
    const fromModelTurn = getValueByPath(fromObject, [
        'modelTurn'
    ]);
    if (fromModelTurn != null) setValueByPath(toObject, [
        'modelTurn'
    ], contentFromMldev$1(fromModelTurn));
    const fromTurnComplete = getValueByPath(fromObject, [
        'turnComplete'
    ]);
    if (fromTurnComplete != null) setValueByPath(toObject, [
        'turnComplete'
    ], fromTurnComplete);
    const fromInterrupted = getValueByPath(fromObject, [
        'interrupted'
    ]);
    if (fromInterrupted != null) setValueByPath(toObject, [
        'interrupted'
    ], fromInterrupted);
    const fromGroundingMetadata = getValueByPath(fromObject, [
        'groundingMetadata'
    ]);
    if (fromGroundingMetadata != null) setValueByPath(toObject, [
        'groundingMetadata'
    ], fromGroundingMetadata);
    const fromGenerationComplete = getValueByPath(fromObject, [
        'generationComplete'
    ]);
    if (fromGenerationComplete != null) setValueByPath(toObject, [
        'generationComplete'
    ], fromGenerationComplete);
    const fromInputTranscription = getValueByPath(fromObject, [
        'inputTranscription'
    ]);
    if (fromInputTranscription != null) setValueByPath(toObject, [
        'inputTranscription'
    ], transcriptionFromMldev(fromInputTranscription));
    const fromOutputTranscription = getValueByPath(fromObject, [
        'outputTranscription'
    ]);
    if (fromOutputTranscription != null) setValueByPath(toObject, [
        'outputTranscription'
    ], transcriptionFromMldev(fromOutputTranscription));
    const fromUrlContextMetadata = getValueByPath(fromObject, [
        'urlContextMetadata'
    ]);
    if (fromUrlContextMetadata != null) setValueByPath(toObject, [
        'urlContextMetadata'
    ], urlContextMetadataFromMldev$1(fromUrlContextMetadata));
    return toObject;
}
function liveServerContentFromVertex(fromObject) {
    const toObject = {};
    const fromModelTurn = getValueByPath(fromObject, [
        'modelTurn'
    ]);
    if (fromModelTurn != null) setValueByPath(toObject, [
        'modelTurn'
    ], contentFromVertex$1(fromModelTurn));
    const fromTurnComplete = getValueByPath(fromObject, [
        'turnComplete'
    ]);
    if (fromTurnComplete != null) setValueByPath(toObject, [
        'turnComplete'
    ], fromTurnComplete);
    const fromInterrupted = getValueByPath(fromObject, [
        'interrupted'
    ]);
    if (fromInterrupted != null) setValueByPath(toObject, [
        'interrupted'
    ], fromInterrupted);
    const fromGroundingMetadata = getValueByPath(fromObject, [
        'groundingMetadata'
    ]);
    if (fromGroundingMetadata != null) setValueByPath(toObject, [
        'groundingMetadata'
    ], fromGroundingMetadata);
    const fromGenerationComplete = getValueByPath(fromObject, [
        'generationComplete'
    ]);
    if (fromGenerationComplete != null) setValueByPath(toObject, [
        'generationComplete'
    ], fromGenerationComplete);
    const fromInputTranscription = getValueByPath(fromObject, [
        'inputTranscription'
    ]);
    if (fromInputTranscription != null) setValueByPath(toObject, [
        'inputTranscription'
    ], transcriptionFromVertex(fromInputTranscription));
    const fromOutputTranscription = getValueByPath(fromObject, [
        'outputTranscription'
    ]);
    if (fromOutputTranscription != null) setValueByPath(toObject, [
        'outputTranscription'
    ], transcriptionFromVertex(fromOutputTranscription));
    return toObject;
}
function functionCallFromMldev(fromObject) {
    const toObject = {};
    const fromId = getValueByPath(fromObject, [
        'id'
    ]);
    if (fromId != null) setValueByPath(toObject, [
        'id'
    ], fromId);
    const fromArgs = getValueByPath(fromObject, [
        'args'
    ]);
    if (fromArgs != null) setValueByPath(toObject, [
        'args'
    ], fromArgs);
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    return toObject;
}
function functionCallFromVertex(fromObject) {
    const toObject = {};
    const fromArgs = getValueByPath(fromObject, [
        'args'
    ]);
    if (fromArgs != null) setValueByPath(toObject, [
        'args'
    ], fromArgs);
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    return toObject;
}
function liveServerToolCallFromMldev(fromObject) {
    const toObject = {};
    const fromFunctionCalls = getValueByPath(fromObject, [
        'functionCalls'
    ]);
    if (fromFunctionCalls != null) {
        let transformedList = fromFunctionCalls;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return functionCallFromMldev(item);
        });
        setValueByPath(toObject, [
            'functionCalls'
        ], transformedList);
    }
    return toObject;
}
function liveServerToolCallFromVertex(fromObject) {
    const toObject = {};
    const fromFunctionCalls = getValueByPath(fromObject, [
        'functionCalls'
    ]);
    if (fromFunctionCalls != null) {
        let transformedList = fromFunctionCalls;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return functionCallFromVertex(item);
        });
        setValueByPath(toObject, [
            'functionCalls'
        ], transformedList);
    }
    return toObject;
}
function liveServerToolCallCancellationFromMldev(fromObject) {
    const toObject = {};
    const fromIds = getValueByPath(fromObject, [
        'ids'
    ]);
    if (fromIds != null) setValueByPath(toObject, [
        'ids'
    ], fromIds);
    return toObject;
}
function liveServerToolCallCancellationFromVertex(fromObject) {
    const toObject = {};
    const fromIds = getValueByPath(fromObject, [
        'ids'
    ]);
    if (fromIds != null) setValueByPath(toObject, [
        'ids'
    ], fromIds);
    return toObject;
}
function modalityTokenCountFromMldev(fromObject) {
    const toObject = {};
    const fromModality = getValueByPath(fromObject, [
        'modality'
    ]);
    if (fromModality != null) setValueByPath(toObject, [
        'modality'
    ], fromModality);
    const fromTokenCount = getValueByPath(fromObject, [
        'tokenCount'
    ]);
    if (fromTokenCount != null) setValueByPath(toObject, [
        'tokenCount'
    ], fromTokenCount);
    return toObject;
}
function modalityTokenCountFromVertex(fromObject) {
    const toObject = {};
    const fromModality = getValueByPath(fromObject, [
        'modality'
    ]);
    if (fromModality != null) setValueByPath(toObject, [
        'modality'
    ], fromModality);
    const fromTokenCount = getValueByPath(fromObject, [
        'tokenCount'
    ]);
    if (fromTokenCount != null) setValueByPath(toObject, [
        'tokenCount'
    ], fromTokenCount);
    return toObject;
}
function usageMetadataFromMldev(fromObject) {
    const toObject = {};
    const fromPromptTokenCount = getValueByPath(fromObject, [
        'promptTokenCount'
    ]);
    if (fromPromptTokenCount != null) setValueByPath(toObject, [
        'promptTokenCount'
    ], fromPromptTokenCount);
    const fromCachedContentTokenCount = getValueByPath(fromObject, [
        'cachedContentTokenCount'
    ]);
    if (fromCachedContentTokenCount != null) setValueByPath(toObject, [
        'cachedContentTokenCount'
    ], fromCachedContentTokenCount);
    const fromResponseTokenCount = getValueByPath(fromObject, [
        'responseTokenCount'
    ]);
    if (fromResponseTokenCount != null) setValueByPath(toObject, [
        'responseTokenCount'
    ], fromResponseTokenCount);
    const fromToolUsePromptTokenCount = getValueByPath(fromObject, [
        'toolUsePromptTokenCount'
    ]);
    if (fromToolUsePromptTokenCount != null) setValueByPath(toObject, [
        'toolUsePromptTokenCount'
    ], fromToolUsePromptTokenCount);
    const fromThoughtsTokenCount = getValueByPath(fromObject, [
        'thoughtsTokenCount'
    ]);
    if (fromThoughtsTokenCount != null) setValueByPath(toObject, [
        'thoughtsTokenCount'
    ], fromThoughtsTokenCount);
    const fromTotalTokenCount = getValueByPath(fromObject, [
        'totalTokenCount'
    ]);
    if (fromTotalTokenCount != null) setValueByPath(toObject, [
        'totalTokenCount'
    ], fromTotalTokenCount);
    const fromPromptTokensDetails = getValueByPath(fromObject, [
        'promptTokensDetails'
    ]);
    if (fromPromptTokensDetails != null) {
        let transformedList = fromPromptTokensDetails;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return modalityTokenCountFromMldev(item);
        });
        setValueByPath(toObject, [
            'promptTokensDetails'
        ], transformedList);
    }
    const fromCacheTokensDetails = getValueByPath(fromObject, [
        'cacheTokensDetails'
    ]);
    if (fromCacheTokensDetails != null) {
        let transformedList = fromCacheTokensDetails;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return modalityTokenCountFromMldev(item);
        });
        setValueByPath(toObject, [
            'cacheTokensDetails'
        ], transformedList);
    }
    const fromResponseTokensDetails = getValueByPath(fromObject, [
        'responseTokensDetails'
    ]);
    if (fromResponseTokensDetails != null) {
        let transformedList = fromResponseTokensDetails;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return modalityTokenCountFromMldev(item);
        });
        setValueByPath(toObject, [
            'responseTokensDetails'
        ], transformedList);
    }
    const fromToolUsePromptTokensDetails = getValueByPath(fromObject, [
        'toolUsePromptTokensDetails'
    ]);
    if (fromToolUsePromptTokensDetails != null) {
        let transformedList = fromToolUsePromptTokensDetails;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return modalityTokenCountFromMldev(item);
        });
        setValueByPath(toObject, [
            'toolUsePromptTokensDetails'
        ], transformedList);
    }
    return toObject;
}
function usageMetadataFromVertex(fromObject) {
    const toObject = {};
    const fromPromptTokenCount = getValueByPath(fromObject, [
        'promptTokenCount'
    ]);
    if (fromPromptTokenCount != null) setValueByPath(toObject, [
        'promptTokenCount'
    ], fromPromptTokenCount);
    const fromCachedContentTokenCount = getValueByPath(fromObject, [
        'cachedContentTokenCount'
    ]);
    if (fromCachedContentTokenCount != null) setValueByPath(toObject, [
        'cachedContentTokenCount'
    ], fromCachedContentTokenCount);
    const fromResponseTokenCount = getValueByPath(fromObject, [
        'candidatesTokenCount'
    ]);
    if (fromResponseTokenCount != null) setValueByPath(toObject, [
        'responseTokenCount'
    ], fromResponseTokenCount);
    const fromToolUsePromptTokenCount = getValueByPath(fromObject, [
        'toolUsePromptTokenCount'
    ]);
    if (fromToolUsePromptTokenCount != null) setValueByPath(toObject, [
        'toolUsePromptTokenCount'
    ], fromToolUsePromptTokenCount);
    const fromThoughtsTokenCount = getValueByPath(fromObject, [
        'thoughtsTokenCount'
    ]);
    if (fromThoughtsTokenCount != null) setValueByPath(toObject, [
        'thoughtsTokenCount'
    ], fromThoughtsTokenCount);
    const fromTotalTokenCount = getValueByPath(fromObject, [
        'totalTokenCount'
    ]);
    if (fromTotalTokenCount != null) setValueByPath(toObject, [
        'totalTokenCount'
    ], fromTotalTokenCount);
    const fromPromptTokensDetails = getValueByPath(fromObject, [
        'promptTokensDetails'
    ]);
    if (fromPromptTokensDetails != null) {
        let transformedList = fromPromptTokensDetails;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return modalityTokenCountFromVertex(item);
        });
        setValueByPath(toObject, [
            'promptTokensDetails'
        ], transformedList);
    }
    const fromCacheTokensDetails = getValueByPath(fromObject, [
        'cacheTokensDetails'
    ]);
    if (fromCacheTokensDetails != null) {
        let transformedList = fromCacheTokensDetails;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return modalityTokenCountFromVertex(item);
        });
        setValueByPath(toObject, [
            'cacheTokensDetails'
        ], transformedList);
    }
    const fromResponseTokensDetails = getValueByPath(fromObject, [
        'candidatesTokensDetails'
    ]);
    if (fromResponseTokensDetails != null) {
        let transformedList = fromResponseTokensDetails;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return modalityTokenCountFromVertex(item);
        });
        setValueByPath(toObject, [
            'responseTokensDetails'
        ], transformedList);
    }
    const fromToolUsePromptTokensDetails = getValueByPath(fromObject, [
        'toolUsePromptTokensDetails'
    ]);
    if (fromToolUsePromptTokensDetails != null) {
        let transformedList = fromToolUsePromptTokensDetails;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return modalityTokenCountFromVertex(item);
        });
        setValueByPath(toObject, [
            'toolUsePromptTokensDetails'
        ], transformedList);
    }
    const fromTrafficType = getValueByPath(fromObject, [
        'trafficType'
    ]);
    if (fromTrafficType != null) setValueByPath(toObject, [
        'trafficType'
    ], fromTrafficType);
    return toObject;
}
function liveServerGoAwayFromMldev(fromObject) {
    const toObject = {};
    const fromTimeLeft = getValueByPath(fromObject, [
        'timeLeft'
    ]);
    if (fromTimeLeft != null) setValueByPath(toObject, [
        'timeLeft'
    ], fromTimeLeft);
    return toObject;
}
function liveServerGoAwayFromVertex(fromObject) {
    const toObject = {};
    const fromTimeLeft = getValueByPath(fromObject, [
        'timeLeft'
    ]);
    if (fromTimeLeft != null) setValueByPath(toObject, [
        'timeLeft'
    ], fromTimeLeft);
    return toObject;
}
function liveServerSessionResumptionUpdateFromMldev(fromObject) {
    const toObject = {};
    const fromNewHandle = getValueByPath(fromObject, [
        'newHandle'
    ]);
    if (fromNewHandle != null) setValueByPath(toObject, [
        'newHandle'
    ], fromNewHandle);
    const fromResumable = getValueByPath(fromObject, [
        'resumable'
    ]);
    if (fromResumable != null) setValueByPath(toObject, [
        'resumable'
    ], fromResumable);
    const fromLastConsumedClientMessageIndex = getValueByPath(fromObject, [
        'lastConsumedClientMessageIndex'
    ]);
    if (fromLastConsumedClientMessageIndex != null) setValueByPath(toObject, [
        'lastConsumedClientMessageIndex'
    ], fromLastConsumedClientMessageIndex);
    return toObject;
}
function liveServerSessionResumptionUpdateFromVertex(fromObject) {
    const toObject = {};
    const fromNewHandle = getValueByPath(fromObject, [
        'newHandle'
    ]);
    if (fromNewHandle != null) setValueByPath(toObject, [
        'newHandle'
    ], fromNewHandle);
    const fromResumable = getValueByPath(fromObject, [
        'resumable'
    ]);
    if (fromResumable != null) setValueByPath(toObject, [
        'resumable'
    ], fromResumable);
    const fromLastConsumedClientMessageIndex = getValueByPath(fromObject, [
        'lastConsumedClientMessageIndex'
    ]);
    if (fromLastConsumedClientMessageIndex != null) setValueByPath(toObject, [
        'lastConsumedClientMessageIndex'
    ], fromLastConsumedClientMessageIndex);
    return toObject;
}
function liveServerMessageFromMldev(fromObject) {
    const toObject = {};
    const fromSetupComplete = getValueByPath(fromObject, [
        'setupComplete'
    ]);
    if (fromSetupComplete != null) setValueByPath(toObject, [
        'setupComplete'
    ], liveServerSetupCompleteFromMldev());
    const fromServerContent = getValueByPath(fromObject, [
        'serverContent'
    ]);
    if (fromServerContent != null) setValueByPath(toObject, [
        'serverContent'
    ], liveServerContentFromMldev(fromServerContent));
    const fromToolCall = getValueByPath(fromObject, [
        'toolCall'
    ]);
    if (fromToolCall != null) setValueByPath(toObject, [
        'toolCall'
    ], liveServerToolCallFromMldev(fromToolCall));
    const fromToolCallCancellation = getValueByPath(fromObject, [
        'toolCallCancellation'
    ]);
    if (fromToolCallCancellation != null) setValueByPath(toObject, [
        'toolCallCancellation'
    ], liveServerToolCallCancellationFromMldev(fromToolCallCancellation));
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata'
    ]);
    if (fromUsageMetadata != null) setValueByPath(toObject, [
        'usageMetadata'
    ], usageMetadataFromMldev(fromUsageMetadata));
    const fromGoAway = getValueByPath(fromObject, [
        'goAway'
    ]);
    if (fromGoAway != null) setValueByPath(toObject, [
        'goAway'
    ], liveServerGoAwayFromMldev(fromGoAway));
    const fromSessionResumptionUpdate = getValueByPath(fromObject, [
        'sessionResumptionUpdate'
    ]);
    if (fromSessionResumptionUpdate != null) setValueByPath(toObject, [
        'sessionResumptionUpdate'
    ], liveServerSessionResumptionUpdateFromMldev(fromSessionResumptionUpdate));
    return toObject;
}
function liveServerMessageFromVertex(fromObject) {
    const toObject = {};
    const fromSetupComplete = getValueByPath(fromObject, [
        'setupComplete'
    ]);
    if (fromSetupComplete != null) setValueByPath(toObject, [
        'setupComplete'
    ], liveServerSetupCompleteFromVertex(fromSetupComplete));
    const fromServerContent = getValueByPath(fromObject, [
        'serverContent'
    ]);
    if (fromServerContent != null) setValueByPath(toObject, [
        'serverContent'
    ], liveServerContentFromVertex(fromServerContent));
    const fromToolCall = getValueByPath(fromObject, [
        'toolCall'
    ]);
    if (fromToolCall != null) setValueByPath(toObject, [
        'toolCall'
    ], liveServerToolCallFromVertex(fromToolCall));
    const fromToolCallCancellation = getValueByPath(fromObject, [
        'toolCallCancellation'
    ]);
    if (fromToolCallCancellation != null) setValueByPath(toObject, [
        'toolCallCancellation'
    ], liveServerToolCallCancellationFromVertex(fromToolCallCancellation));
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata'
    ]);
    if (fromUsageMetadata != null) setValueByPath(toObject, [
        'usageMetadata'
    ], usageMetadataFromVertex(fromUsageMetadata));
    const fromGoAway = getValueByPath(fromObject, [
        'goAway'
    ]);
    if (fromGoAway != null) setValueByPath(toObject, [
        'goAway'
    ], liveServerGoAwayFromVertex(fromGoAway));
    const fromSessionResumptionUpdate = getValueByPath(fromObject, [
        'sessionResumptionUpdate'
    ]);
    if (fromSessionResumptionUpdate != null) setValueByPath(toObject, [
        'sessionResumptionUpdate'
    ], liveServerSessionResumptionUpdateFromVertex(fromSessionResumptionUpdate));
    return toObject;
}
function liveMusicServerSetupCompleteFromMldev() {
    const toObject = {};
    return toObject;
}
function weightedPromptFromMldev(fromObject) {
    const toObject = {};
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    const fromWeight = getValueByPath(fromObject, [
        'weight'
    ]);
    if (fromWeight != null) setValueByPath(toObject, [
        'weight'
    ], fromWeight);
    return toObject;
}
function liveMusicClientContentFromMldev(fromObject) {
    const toObject = {};
    const fromWeightedPrompts = getValueByPath(fromObject, [
        'weightedPrompts'
    ]);
    if (fromWeightedPrompts != null) {
        let transformedList = fromWeightedPrompts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return weightedPromptFromMldev(item);
        });
        setValueByPath(toObject, [
            'weightedPrompts'
        ], transformedList);
    }
    return toObject;
}
function liveMusicGenerationConfigFromMldev(fromObject) {
    const toObject = {};
    const fromTemperature = getValueByPath(fromObject, [
        'temperature'
    ]);
    if (fromTemperature != null) setValueByPath(toObject, [
        'temperature'
    ], fromTemperature);
    const fromTopK = getValueByPath(fromObject, [
        'topK'
    ]);
    if (fromTopK != null) setValueByPath(toObject, [
        'topK'
    ], fromTopK);
    const fromSeed = getValueByPath(fromObject, [
        'seed'
    ]);
    if (fromSeed != null) setValueByPath(toObject, [
        'seed'
    ], fromSeed);
    const fromGuidance = getValueByPath(fromObject, [
        'guidance'
    ]);
    if (fromGuidance != null) setValueByPath(toObject, [
        'guidance'
    ], fromGuidance);
    const fromBpm = getValueByPath(fromObject, [
        'bpm'
    ]);
    if (fromBpm != null) setValueByPath(toObject, [
        'bpm'
    ], fromBpm);
    const fromDensity = getValueByPath(fromObject, [
        'density'
    ]);
    if (fromDensity != null) setValueByPath(toObject, [
        'density'
    ], fromDensity);
    const fromBrightness = getValueByPath(fromObject, [
        'brightness'
    ]);
    if (fromBrightness != null) setValueByPath(toObject, [
        'brightness'
    ], fromBrightness);
    const fromScale = getValueByPath(fromObject, [
        'scale'
    ]);
    if (fromScale != null) setValueByPath(toObject, [
        'scale'
    ], fromScale);
    const fromMuteBass = getValueByPath(fromObject, [
        'muteBass'
    ]);
    if (fromMuteBass != null) setValueByPath(toObject, [
        'muteBass'
    ], fromMuteBass);
    const fromMuteDrums = getValueByPath(fromObject, [
        'muteDrums'
    ]);
    if (fromMuteDrums != null) setValueByPath(toObject, [
        'muteDrums'
    ], fromMuteDrums);
    const fromOnlyBassAndDrums = getValueByPath(fromObject, [
        'onlyBassAndDrums'
    ]);
    if (fromOnlyBassAndDrums != null) setValueByPath(toObject, [
        'onlyBassAndDrums'
    ], fromOnlyBassAndDrums);
    return toObject;
}
function liveMusicSourceMetadataFromMldev(fromObject) {
    const toObject = {};
    const fromClientContent = getValueByPath(fromObject, [
        'clientContent'
    ]);
    if (fromClientContent != null) setValueByPath(toObject, [
        'clientContent'
    ], liveMusicClientContentFromMldev(fromClientContent));
    const fromMusicGenerationConfig = getValueByPath(fromObject, [
        'musicGenerationConfig'
    ]);
    if (fromMusicGenerationConfig != null) setValueByPath(toObject, [
        'musicGenerationConfig'
    ], liveMusicGenerationConfigFromMldev(fromMusicGenerationConfig));
    return toObject;
}
function audioChunkFromMldev(fromObject) {
    const toObject = {};
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    const fromSourceMetadata = getValueByPath(fromObject, [
        'sourceMetadata'
    ]);
    if (fromSourceMetadata != null) setValueByPath(toObject, [
        'sourceMetadata'
    ], liveMusicSourceMetadataFromMldev(fromSourceMetadata));
    return toObject;
}
function liveMusicServerContentFromMldev(fromObject) {
    const toObject = {};
    const fromAudioChunks = getValueByPath(fromObject, [
        'audioChunks'
    ]);
    if (fromAudioChunks != null) {
        let transformedList = fromAudioChunks;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return audioChunkFromMldev(item);
        });
        setValueByPath(toObject, [
            'audioChunks'
        ], transformedList);
    }
    return toObject;
}
function liveMusicFilteredPromptFromMldev(fromObject) {
    const toObject = {};
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    const fromFilteredReason = getValueByPath(fromObject, [
        'filteredReason'
    ]);
    if (fromFilteredReason != null) setValueByPath(toObject, [
        'filteredReason'
    ], fromFilteredReason);
    return toObject;
}
function liveMusicServerMessageFromMldev(fromObject) {
    const toObject = {};
    const fromSetupComplete = getValueByPath(fromObject, [
        'setupComplete'
    ]);
    if (fromSetupComplete != null) setValueByPath(toObject, [
        'setupComplete'
    ], liveMusicServerSetupCompleteFromMldev());
    const fromServerContent = getValueByPath(fromObject, [
        'serverContent'
    ]);
    if (fromServerContent != null) setValueByPath(toObject, [
        'serverContent'
    ], liveMusicServerContentFromMldev(fromServerContent));
    const fromFilteredPrompt = getValueByPath(fromObject, [
        'filteredPrompt'
    ]);
    if (fromFilteredPrompt != null) setValueByPath(toObject, [
        'filteredPrompt'
    ], liveMusicFilteredPromptFromMldev(fromFilteredPrompt));
    return toObject;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function videoMetadataToMldev$1(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function blobToMldev$1(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'displayName'
    ]) !== undefined) throw new Error('displayName parameter is not supported in Gemini API.');
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataToMldev$1(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'displayName'
    ]) !== undefined) throw new Error('displayName parameter is not supported in Gemini API.');
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function partToMldev$1(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataToMldev$1(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobToMldev$1(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataToMldev$1(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function contentToMldev$1(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partToMldev$1(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function schemaToMldev(fromObject) {
    const toObject = {};
    const fromAnyOf = getValueByPath(fromObject, [
        'anyOf'
    ]);
    if (fromAnyOf != null) setValueByPath(toObject, [
        'anyOf'
    ], fromAnyOf);
    const fromDefault = getValueByPath(fromObject, [
        'default'
    ]);
    if (fromDefault != null) setValueByPath(toObject, [
        'default'
    ], fromDefault);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromEnum = getValueByPath(fromObject, [
        'enum'
    ]);
    if (fromEnum != null) setValueByPath(toObject, [
        'enum'
    ], fromEnum);
    const fromExample = getValueByPath(fromObject, [
        'example'
    ]);
    if (fromExample != null) setValueByPath(toObject, [
        'example'
    ], fromExample);
    const fromFormat = getValueByPath(fromObject, [
        'format'
    ]);
    if (fromFormat != null) setValueByPath(toObject, [
        'format'
    ], fromFormat);
    const fromItems = getValueByPath(fromObject, [
        'items'
    ]);
    if (fromItems != null) setValueByPath(toObject, [
        'items'
    ], fromItems);
    const fromMaxItems = getValueByPath(fromObject, [
        'maxItems'
    ]);
    if (fromMaxItems != null) setValueByPath(toObject, [
        'maxItems'
    ], fromMaxItems);
    const fromMaxLength = getValueByPath(fromObject, [
        'maxLength'
    ]);
    if (fromMaxLength != null) setValueByPath(toObject, [
        'maxLength'
    ], fromMaxLength);
    const fromMaxProperties = getValueByPath(fromObject, [
        'maxProperties'
    ]);
    if (fromMaxProperties != null) setValueByPath(toObject, [
        'maxProperties'
    ], fromMaxProperties);
    const fromMaximum = getValueByPath(fromObject, [
        'maximum'
    ]);
    if (fromMaximum != null) setValueByPath(toObject, [
        'maximum'
    ], fromMaximum);
    const fromMinItems = getValueByPath(fromObject, [
        'minItems'
    ]);
    if (fromMinItems != null) setValueByPath(toObject, [
        'minItems'
    ], fromMinItems);
    const fromMinLength = getValueByPath(fromObject, [
        'minLength'
    ]);
    if (fromMinLength != null) setValueByPath(toObject, [
        'minLength'
    ], fromMinLength);
    const fromMinProperties = getValueByPath(fromObject, [
        'minProperties'
    ]);
    if (fromMinProperties != null) setValueByPath(toObject, [
        'minProperties'
    ], fromMinProperties);
    const fromMinimum = getValueByPath(fromObject, [
        'minimum'
    ]);
    if (fromMinimum != null) setValueByPath(toObject, [
        'minimum'
    ], fromMinimum);
    const fromNullable = getValueByPath(fromObject, [
        'nullable'
    ]);
    if (fromNullable != null) setValueByPath(toObject, [
        'nullable'
    ], fromNullable);
    const fromPattern = getValueByPath(fromObject, [
        'pattern'
    ]);
    if (fromPattern != null) setValueByPath(toObject, [
        'pattern'
    ], fromPattern);
    const fromProperties = getValueByPath(fromObject, [
        'properties'
    ]);
    if (fromProperties != null) setValueByPath(toObject, [
        'properties'
    ], fromProperties);
    const fromPropertyOrdering = getValueByPath(fromObject, [
        'propertyOrdering'
    ]);
    if (fromPropertyOrdering != null) setValueByPath(toObject, [
        'propertyOrdering'
    ], fromPropertyOrdering);
    const fromRequired = getValueByPath(fromObject, [
        'required'
    ]);
    if (fromRequired != null) setValueByPath(toObject, [
        'required'
    ], fromRequired);
    const fromTitle = getValueByPath(fromObject, [
        'title'
    ]);
    if (fromTitle != null) setValueByPath(toObject, [
        'title'
    ], fromTitle);
    const fromType = getValueByPath(fromObject, [
        'type'
    ]);
    if (fromType != null) setValueByPath(toObject, [
        'type'
    ], fromType);
    return toObject;
}
function safetySettingToMldev(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'method'
    ]) !== undefined) throw new Error('method parameter is not supported in Gemini API.');
    const fromCategory = getValueByPath(fromObject, [
        'category'
    ]);
    if (fromCategory != null) setValueByPath(toObject, [
        'category'
    ], fromCategory);
    const fromThreshold = getValueByPath(fromObject, [
        'threshold'
    ]);
    if (fromThreshold != null) setValueByPath(toObject, [
        'threshold'
    ], fromThreshold);
    return toObject;
}
function functionDeclarationToMldev$1(fromObject) {
    const toObject = {};
    const fromBehavior = getValueByPath(fromObject, [
        'behavior'
    ]);
    if (fromBehavior != null) setValueByPath(toObject, [
        'behavior'
    ], fromBehavior);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromParameters = getValueByPath(fromObject, [
        'parameters'
    ]);
    if (fromParameters != null) setValueByPath(toObject, [
        'parameters'
    ], fromParameters);
    const fromParametersJsonSchema = getValueByPath(fromObject, [
        'parametersJsonSchema'
    ]);
    if (fromParametersJsonSchema != null) setValueByPath(toObject, [
        'parametersJsonSchema'
    ], fromParametersJsonSchema);
    const fromResponse = getValueByPath(fromObject, [
        'response'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], fromResponse);
    const fromResponseJsonSchema = getValueByPath(fromObject, [
        'responseJsonSchema'
    ]);
    if (fromResponseJsonSchema != null) setValueByPath(toObject, [
        'responseJsonSchema'
    ], fromResponseJsonSchema);
    return toObject;
}
function intervalToMldev$1(fromObject) {
    const toObject = {};
    const fromStartTime = getValueByPath(fromObject, [
        'startTime'
    ]);
    if (fromStartTime != null) setValueByPath(toObject, [
        'startTime'
    ], fromStartTime);
    const fromEndTime = getValueByPath(fromObject, [
        'endTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    return toObject;
}
function googleSearchToMldev$1(fromObject) {
    const toObject = {};
    const fromTimeRangeFilter = getValueByPath(fromObject, [
        'timeRangeFilter'
    ]);
    if (fromTimeRangeFilter != null) setValueByPath(toObject, [
        'timeRangeFilter'
    ], intervalToMldev$1(fromTimeRangeFilter));
    return toObject;
}
function dynamicRetrievalConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold'
    ]);
    if (fromDynamicThreshold != null) setValueByPath(toObject, [
        'dynamicThreshold'
    ], fromDynamicThreshold);
    return toObject;
}
function googleSearchRetrievalToMldev$1(fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig'
    ]);
    if (fromDynamicRetrievalConfig != null) setValueByPath(toObject, [
        'dynamicRetrievalConfig'
    ], dynamicRetrievalConfigToMldev$1(fromDynamicRetrievalConfig));
    return toObject;
}
function urlContextToMldev$1() {
    const toObject = {};
    return toObject;
}
function toolToMldev$1(fromObject) {
    const toObject = {};
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations'
    ]);
    if (fromFunctionDeclarations != null) {
        let transformedList = fromFunctionDeclarations;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return functionDeclarationToMldev$1(item);
        });
        setValueByPath(toObject, [
            'functionDeclarations'
        ], transformedList);
    }
    if (getValueByPath(fromObject, [
        'retrieval'
    ]) !== undefined) throw new Error('retrieval parameter is not supported in Gemini API.');
    const fromGoogleSearch = getValueByPath(fromObject, [
        'googleSearch'
    ]);
    if (fromGoogleSearch != null) setValueByPath(toObject, [
        'googleSearch'
    ], googleSearchToMldev$1(fromGoogleSearch));
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval'
    ]);
    if (fromGoogleSearchRetrieval != null) setValueByPath(toObject, [
        'googleSearchRetrieval'
    ], googleSearchRetrievalToMldev$1(fromGoogleSearchRetrieval));
    if (getValueByPath(fromObject, [
        'enterpriseWebSearch'
    ]) !== undefined) throw new Error('enterpriseWebSearch parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'googleMaps'
    ]) !== undefined) throw new Error('googleMaps parameter is not supported in Gemini API.');
    const fromUrlContext = getValueByPath(fromObject, [
        'urlContext'
    ]);
    if (fromUrlContext != null) setValueByPath(toObject, [
        'urlContext'
    ], urlContextToMldev$1());
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution'
    ]);
    if (fromCodeExecution != null) setValueByPath(toObject, [
        'codeExecution'
    ], fromCodeExecution);
    const fromComputerUse = getValueByPath(fromObject, [
        'computerUse'
    ]);
    if (fromComputerUse != null) setValueByPath(toObject, [
        'computerUse'
    ], fromComputerUse);
    return toObject;
}
function functionCallingConfigToMldev(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromAllowedFunctionNames = getValueByPath(fromObject, [
        'allowedFunctionNames'
    ]);
    if (fromAllowedFunctionNames != null) setValueByPath(toObject, [
        'allowedFunctionNames'
    ], fromAllowedFunctionNames);
    return toObject;
}
function latLngToMldev(fromObject) {
    const toObject = {};
    const fromLatitude = getValueByPath(fromObject, [
        'latitude'
    ]);
    if (fromLatitude != null) setValueByPath(toObject, [
        'latitude'
    ], fromLatitude);
    const fromLongitude = getValueByPath(fromObject, [
        'longitude'
    ]);
    if (fromLongitude != null) setValueByPath(toObject, [
        'longitude'
    ], fromLongitude);
    return toObject;
}
function retrievalConfigToMldev(fromObject) {
    const toObject = {};
    const fromLatLng = getValueByPath(fromObject, [
        'latLng'
    ]);
    if (fromLatLng != null) setValueByPath(toObject, [
        'latLng'
    ], latLngToMldev(fromLatLng));
    const fromLanguageCode = getValueByPath(fromObject, [
        'languageCode'
    ]);
    if (fromLanguageCode != null) setValueByPath(toObject, [
        'languageCode'
    ], fromLanguageCode);
    return toObject;
}
function toolConfigToMldev(fromObject) {
    const toObject = {};
    const fromFunctionCallingConfig = getValueByPath(fromObject, [
        'functionCallingConfig'
    ]);
    if (fromFunctionCallingConfig != null) setValueByPath(toObject, [
        'functionCallingConfig'
    ], functionCallingConfigToMldev(fromFunctionCallingConfig));
    const fromRetrievalConfig = getValueByPath(fromObject, [
        'retrievalConfig'
    ]);
    if (fromRetrievalConfig != null) setValueByPath(toObject, [
        'retrievalConfig'
    ], retrievalConfigToMldev(fromRetrievalConfig));
    return toObject;
}
function prebuiltVoiceConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromVoiceName = getValueByPath(fromObject, [
        'voiceName'
    ]);
    if (fromVoiceName != null) setValueByPath(toObject, [
        'voiceName'
    ], fromVoiceName);
    return toObject;
}
function voiceConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
        'prebuiltVoiceConfig'
    ]);
    if (fromPrebuiltVoiceConfig != null) setValueByPath(toObject, [
        'prebuiltVoiceConfig'
    ], prebuiltVoiceConfigToMldev$1(fromPrebuiltVoiceConfig));
    return toObject;
}
function speakerVoiceConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromSpeaker = getValueByPath(fromObject, [
        'speaker'
    ]);
    if (fromSpeaker != null) setValueByPath(toObject, [
        'speaker'
    ], fromSpeaker);
    const fromVoiceConfig = getValueByPath(fromObject, [
        'voiceConfig'
    ]);
    if (fromVoiceConfig != null) setValueByPath(toObject, [
        'voiceConfig'
    ], voiceConfigToMldev$1(fromVoiceConfig));
    return toObject;
}
function multiSpeakerVoiceConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromSpeakerVoiceConfigs = getValueByPath(fromObject, [
        'speakerVoiceConfigs'
    ]);
    if (fromSpeakerVoiceConfigs != null) {
        let transformedList = fromSpeakerVoiceConfigs;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return speakerVoiceConfigToMldev$1(item);
        });
        setValueByPath(toObject, [
            'speakerVoiceConfigs'
        ], transformedList);
    }
    return toObject;
}
function speechConfigToMldev$1(fromObject) {
    const toObject = {};
    const fromVoiceConfig = getValueByPath(fromObject, [
        'voiceConfig'
    ]);
    if (fromVoiceConfig != null) setValueByPath(toObject, [
        'voiceConfig'
    ], voiceConfigToMldev$1(fromVoiceConfig));
    const fromMultiSpeakerVoiceConfig = getValueByPath(fromObject, [
        'multiSpeakerVoiceConfig'
    ]);
    if (fromMultiSpeakerVoiceConfig != null) setValueByPath(toObject, [
        'multiSpeakerVoiceConfig'
    ], multiSpeakerVoiceConfigToMldev$1(fromMultiSpeakerVoiceConfig));
    const fromLanguageCode = getValueByPath(fromObject, [
        'languageCode'
    ]);
    if (fromLanguageCode != null) setValueByPath(toObject, [
        'languageCode'
    ], fromLanguageCode);
    return toObject;
}
function thinkingConfigToMldev(fromObject) {
    const toObject = {};
    const fromIncludeThoughts = getValueByPath(fromObject, [
        'includeThoughts'
    ]);
    if (fromIncludeThoughts != null) setValueByPath(toObject, [
        'includeThoughts'
    ], fromIncludeThoughts);
    const fromThinkingBudget = getValueByPath(fromObject, [
        'thinkingBudget'
    ]);
    if (fromThinkingBudget != null) setValueByPath(toObject, [
        'thinkingBudget'
    ], fromThinkingBudget);
    return toObject;
}
function generateContentConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction'
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) setValueByPath(parentObject, [
        'systemInstruction'
    ], contentToMldev$1(tContent(fromSystemInstruction)));
    const fromTemperature = getValueByPath(fromObject, [
        'temperature'
    ]);
    if (fromTemperature != null) setValueByPath(toObject, [
        'temperature'
    ], fromTemperature);
    const fromTopP = getValueByPath(fromObject, [
        'topP'
    ]);
    if (fromTopP != null) setValueByPath(toObject, [
        'topP'
    ], fromTopP);
    const fromTopK = getValueByPath(fromObject, [
        'topK'
    ]);
    if (fromTopK != null) setValueByPath(toObject, [
        'topK'
    ], fromTopK);
    const fromCandidateCount = getValueByPath(fromObject, [
        'candidateCount'
    ]);
    if (fromCandidateCount != null) setValueByPath(toObject, [
        'candidateCount'
    ], fromCandidateCount);
    const fromMaxOutputTokens = getValueByPath(fromObject, [
        'maxOutputTokens'
    ]);
    if (fromMaxOutputTokens != null) setValueByPath(toObject, [
        'maxOutputTokens'
    ], fromMaxOutputTokens);
    const fromStopSequences = getValueByPath(fromObject, [
        'stopSequences'
    ]);
    if (fromStopSequences != null) setValueByPath(toObject, [
        'stopSequences'
    ], fromStopSequences);
    const fromResponseLogprobs = getValueByPath(fromObject, [
        'responseLogprobs'
    ]);
    if (fromResponseLogprobs != null) setValueByPath(toObject, [
        'responseLogprobs'
    ], fromResponseLogprobs);
    const fromLogprobs = getValueByPath(fromObject, [
        'logprobs'
    ]);
    if (fromLogprobs != null) setValueByPath(toObject, [
        'logprobs'
    ], fromLogprobs);
    const fromPresencePenalty = getValueByPath(fromObject, [
        'presencePenalty'
    ]);
    if (fromPresencePenalty != null) setValueByPath(toObject, [
        'presencePenalty'
    ], fromPresencePenalty);
    const fromFrequencyPenalty = getValueByPath(fromObject, [
        'frequencyPenalty'
    ]);
    if (fromFrequencyPenalty != null) setValueByPath(toObject, [
        'frequencyPenalty'
    ], fromFrequencyPenalty);
    const fromSeed = getValueByPath(fromObject, [
        'seed'
    ]);
    if (fromSeed != null) setValueByPath(toObject, [
        'seed'
    ], fromSeed);
    const fromResponseMimeType = getValueByPath(fromObject, [
        'responseMimeType'
    ]);
    if (fromResponseMimeType != null) setValueByPath(toObject, [
        'responseMimeType'
    ], fromResponseMimeType);
    const fromResponseSchema = getValueByPath(fromObject, [
        'responseSchema'
    ]);
    if (fromResponseSchema != null) setValueByPath(toObject, [
        'responseSchema'
    ], schemaToMldev(tSchema(fromResponseSchema)));
    const fromResponseJsonSchema = getValueByPath(fromObject, [
        'responseJsonSchema'
    ]);
    if (fromResponseJsonSchema != null) setValueByPath(toObject, [
        'responseJsonSchema'
    ], fromResponseJsonSchema);
    if (getValueByPath(fromObject, [
        'routingConfig'
    ]) !== undefined) throw new Error('routingConfig parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'modelSelectionConfig'
    ]) !== undefined) throw new Error('modelSelectionConfig parameter is not supported in Gemini API.');
    const fromSafetySettings = getValueByPath(fromObject, [
        'safetySettings'
    ]);
    if (parentObject !== undefined && fromSafetySettings != null) {
        let transformedList = fromSafetySettings;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return safetySettingToMldev(item);
        });
        setValueByPath(parentObject, [
            'safetySettings'
        ], transformedList);
    }
    const fromTools = getValueByPath(fromObject, [
        'tools'
    ]);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = tTools(fromTools);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return toolToMldev$1(tTool(item));
        });
        setValueByPath(parentObject, [
            'tools'
        ], transformedList);
    }
    const fromToolConfig = getValueByPath(fromObject, [
        'toolConfig'
    ]);
    if (parentObject !== undefined && fromToolConfig != null) setValueByPath(parentObject, [
        'toolConfig'
    ], toolConfigToMldev(fromToolConfig));
    if (getValueByPath(fromObject, [
        'labels'
    ]) !== undefined) throw new Error('labels parameter is not supported in Gemini API.');
    const fromCachedContent = getValueByPath(fromObject, [
        'cachedContent'
    ]);
    if (parentObject !== undefined && fromCachedContent != null) setValueByPath(parentObject, [
        'cachedContent'
    ], tCachedContentName(apiClient, fromCachedContent));
    const fromResponseModalities = getValueByPath(fromObject, [
        'responseModalities'
    ]);
    if (fromResponseModalities != null) setValueByPath(toObject, [
        'responseModalities'
    ], fromResponseModalities);
    const fromMediaResolution = getValueByPath(fromObject, [
        'mediaResolution'
    ]);
    if (fromMediaResolution != null) setValueByPath(toObject, [
        'mediaResolution'
    ], fromMediaResolution);
    const fromSpeechConfig = getValueByPath(fromObject, [
        'speechConfig'
    ]);
    if (fromSpeechConfig != null) setValueByPath(toObject, [
        'speechConfig'
    ], speechConfigToMldev$1(tSpeechConfig(fromSpeechConfig)));
    if (getValueByPath(fromObject, [
        'audioTimestamp'
    ]) !== undefined) throw new Error('audioTimestamp parameter is not supported in Gemini API.');
    const fromThinkingConfig = getValueByPath(fromObject, [
        'thinkingConfig'
    ]);
    if (fromThinkingConfig != null) setValueByPath(toObject, [
        'thinkingConfig'
    ], thinkingConfigToMldev(fromThinkingConfig));
    return toObject;
}
function generateContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromContents = getValueByPath(fromObject, [
        'contents'
    ]);
    if (fromContents != null) {
        let transformedList = tContents(fromContents);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return contentToMldev$1(item);
        });
        setValueByPath(toObject, [
            'contents'
        ], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'generationConfig'
    ], generateContentConfigToMldev(apiClient, fromConfig, toObject));
    return toObject;
}
function embedContentConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    const fromTaskType = getValueByPath(fromObject, [
        'taskType'
    ]);
    if (parentObject !== undefined && fromTaskType != null) setValueByPath(parentObject, [
        'requests[]',
        'taskType'
    ], fromTaskType);
    const fromTitle = getValueByPath(fromObject, [
        'title'
    ]);
    if (parentObject !== undefined && fromTitle != null) setValueByPath(parentObject, [
        'requests[]',
        'title'
    ], fromTitle);
    const fromOutputDimensionality = getValueByPath(fromObject, [
        'outputDimensionality'
    ]);
    if (parentObject !== undefined && fromOutputDimensionality != null) setValueByPath(parentObject, [
        'requests[]',
        'outputDimensionality'
    ], fromOutputDimensionality);
    if (getValueByPath(fromObject, [
        'mimeType'
    ]) !== undefined) throw new Error('mimeType parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'autoTruncate'
    ]) !== undefined) throw new Error('autoTruncate parameter is not supported in Gemini API.');
    return toObject;
}
function embedContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromContents = getValueByPath(fromObject, [
        'contents'
    ]);
    if (fromContents != null) setValueByPath(toObject, [
        'requests[]',
        'content'
    ], tContentsForEmbed(apiClient, fromContents));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], embedContentConfigToMldev(fromConfig, toObject));
    const fromModelForEmbedContent = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModelForEmbedContent !== undefined) setValueByPath(toObject, [
        'requests[]',
        'model'
    ], tModel(apiClient, fromModelForEmbedContent));
    return toObject;
}
function generateImagesConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'outputGcsUri'
    ]) !== undefined) throw new Error('outputGcsUri parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'negativePrompt'
    ]) !== undefined) throw new Error('negativePrompt parameter is not supported in Gemini API.');
    const fromNumberOfImages = getValueByPath(fromObject, [
        'numberOfImages'
    ]);
    if (parentObject !== undefined && fromNumberOfImages != null) setValueByPath(parentObject, [
        'parameters',
        'sampleCount'
    ], fromNumberOfImages);
    const fromAspectRatio = getValueByPath(fromObject, [
        'aspectRatio'
    ]);
    if (parentObject !== undefined && fromAspectRatio != null) setValueByPath(parentObject, [
        'parameters',
        'aspectRatio'
    ], fromAspectRatio);
    const fromGuidanceScale = getValueByPath(fromObject, [
        'guidanceScale'
    ]);
    if (parentObject !== undefined && fromGuidanceScale != null) setValueByPath(parentObject, [
        'parameters',
        'guidanceScale'
    ], fromGuidanceScale);
    if (getValueByPath(fromObject, [
        'seed'
    ]) !== undefined) throw new Error('seed parameter is not supported in Gemini API.');
    const fromSafetyFilterLevel = getValueByPath(fromObject, [
        'safetyFilterLevel'
    ]);
    if (parentObject !== undefined && fromSafetyFilterLevel != null) setValueByPath(parentObject, [
        'parameters',
        'safetySetting'
    ], fromSafetyFilterLevel);
    const fromPersonGeneration = getValueByPath(fromObject, [
        'personGeneration'
    ]);
    if (parentObject !== undefined && fromPersonGeneration != null) setValueByPath(parentObject, [
        'parameters',
        'personGeneration'
    ], fromPersonGeneration);
    const fromIncludeSafetyAttributes = getValueByPath(fromObject, [
        'includeSafetyAttributes'
    ]);
    if (parentObject !== undefined && fromIncludeSafetyAttributes != null) setValueByPath(parentObject, [
        'parameters',
        'includeSafetyAttributes'
    ], fromIncludeSafetyAttributes);
    const fromIncludeRaiReason = getValueByPath(fromObject, [
        'includeRaiReason'
    ]);
    if (parentObject !== undefined && fromIncludeRaiReason != null) setValueByPath(parentObject, [
        'parameters',
        'includeRaiReason'
    ], fromIncludeRaiReason);
    const fromLanguage = getValueByPath(fromObject, [
        'language'
    ]);
    if (parentObject !== undefined && fromLanguage != null) setValueByPath(parentObject, [
        'parameters',
        'language'
    ], fromLanguage);
    const fromOutputMimeType = getValueByPath(fromObject, [
        'outputMimeType'
    ]);
    if (parentObject !== undefined && fromOutputMimeType != null) setValueByPath(parentObject, [
        'parameters',
        'outputOptions',
        'mimeType'
    ], fromOutputMimeType);
    const fromOutputCompressionQuality = getValueByPath(fromObject, [
        'outputCompressionQuality'
    ]);
    if (parentObject !== undefined && fromOutputCompressionQuality != null) setValueByPath(parentObject, [
        'parameters',
        'outputOptions',
        'compressionQuality'
    ], fromOutputCompressionQuality);
    if (getValueByPath(fromObject, [
        'addWatermark'
    ]) !== undefined) throw new Error('addWatermark parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'enhancePrompt'
    ]) !== undefined) throw new Error('enhancePrompt parameter is not supported in Gemini API.');
    return toObject;
}
function generateImagesParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromPrompt = getValueByPath(fromObject, [
        'prompt'
    ]);
    if (fromPrompt != null) setValueByPath(toObject, [
        'instances[0]',
        'prompt'
    ], fromPrompt);
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], generateImagesConfigToMldev(fromConfig, toObject));
    return toObject;
}
function getModelParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tModel(apiClient, fromModel));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function listModelsConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, [
        'pageSize'
    ]);
    if (parentObject !== undefined && fromPageSize != null) setValueByPath(parentObject, [
        '_query',
        'pageSize'
    ], fromPageSize);
    const fromPageToken = getValueByPath(fromObject, [
        'pageToken'
    ]);
    if (parentObject !== undefined && fromPageToken != null) setValueByPath(parentObject, [
        '_query',
        'pageToken'
    ], fromPageToken);
    const fromFilter = getValueByPath(fromObject, [
        'filter'
    ]);
    if (parentObject !== undefined && fromFilter != null) setValueByPath(parentObject, [
        '_query',
        'filter'
    ], fromFilter);
    const fromQueryBase = getValueByPath(fromObject, [
        'queryBase'
    ]);
    if (parentObject !== undefined && fromQueryBase != null) setValueByPath(parentObject, [
        '_url',
        'models_url'
    ], tModelsUrl(apiClient, fromQueryBase));
    return toObject;
}
function listModelsParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], listModelsConfigToMldev(apiClient, fromConfig, toObject));
    return toObject;
}
function updateModelConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (parentObject !== undefined && fromDisplayName != null) setValueByPath(parentObject, [
        'displayName'
    ], fromDisplayName);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (parentObject !== undefined && fromDescription != null) setValueByPath(parentObject, [
        'description'
    ], fromDescription);
    const fromDefaultCheckpointId = getValueByPath(fromObject, [
        'defaultCheckpointId'
    ]);
    if (parentObject !== undefined && fromDefaultCheckpointId != null) setValueByPath(parentObject, [
        'defaultCheckpointId'
    ], fromDefaultCheckpointId);
    return toObject;
}
function updateModelParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tModel(apiClient, fromModel));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], updateModelConfigToMldev(fromConfig, toObject));
    return toObject;
}
function deleteModelParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tModel(apiClient, fromModel));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function countTokensConfigToMldev(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'systemInstruction'
    ]) !== undefined) throw new Error('systemInstruction parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'tools'
    ]) !== undefined) throw new Error('tools parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'generationConfig'
    ]) !== undefined) throw new Error('generationConfig parameter is not supported in Gemini API.');
    return toObject;
}
function countTokensParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromContents = getValueByPath(fromObject, [
        'contents'
    ]);
    if (fromContents != null) {
        let transformedList = tContents(fromContents);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return contentToMldev$1(item);
        });
        setValueByPath(toObject, [
            'contents'
        ], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], countTokensConfigToMldev(fromConfig));
    return toObject;
}
function imageToMldev(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'gcsUri'
    ]) !== undefined) throw new Error('gcsUri parameter is not supported in Gemini API.');
    const fromImageBytes = getValueByPath(fromObject, [
        'imageBytes'
    ]);
    if (fromImageBytes != null) setValueByPath(toObject, [
        'bytesBase64Encoded'
    ], tBytes(fromImageBytes));
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function generateVideosConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    const fromNumberOfVideos = getValueByPath(fromObject, [
        'numberOfVideos'
    ]);
    if (parentObject !== undefined && fromNumberOfVideos != null) setValueByPath(parentObject, [
        'parameters',
        'sampleCount'
    ], fromNumberOfVideos);
    if (getValueByPath(fromObject, [
        'outputGcsUri'
    ]) !== undefined) throw new Error('outputGcsUri parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'fps'
    ]) !== undefined) throw new Error('fps parameter is not supported in Gemini API.');
    const fromDurationSeconds = getValueByPath(fromObject, [
        'durationSeconds'
    ]);
    if (parentObject !== undefined && fromDurationSeconds != null) setValueByPath(parentObject, [
        'parameters',
        'durationSeconds'
    ], fromDurationSeconds);
    if (getValueByPath(fromObject, [
        'seed'
    ]) !== undefined) throw new Error('seed parameter is not supported in Gemini API.');
    const fromAspectRatio = getValueByPath(fromObject, [
        'aspectRatio'
    ]);
    if (parentObject !== undefined && fromAspectRatio != null) setValueByPath(parentObject, [
        'parameters',
        'aspectRatio'
    ], fromAspectRatio);
    if (getValueByPath(fromObject, [
        'resolution'
    ]) !== undefined) throw new Error('resolution parameter is not supported in Gemini API.');
    const fromPersonGeneration = getValueByPath(fromObject, [
        'personGeneration'
    ]);
    if (parentObject !== undefined && fromPersonGeneration != null) setValueByPath(parentObject, [
        'parameters',
        'personGeneration'
    ], fromPersonGeneration);
    if (getValueByPath(fromObject, [
        'pubsubTopic'
    ]) !== undefined) throw new Error('pubsubTopic parameter is not supported in Gemini API.');
    const fromNegativePrompt = getValueByPath(fromObject, [
        'negativePrompt'
    ]);
    if (parentObject !== undefined && fromNegativePrompt != null) setValueByPath(parentObject, [
        'parameters',
        'negativePrompt'
    ], fromNegativePrompt);
    const fromEnhancePrompt = getValueByPath(fromObject, [
        'enhancePrompt'
    ]);
    if (parentObject !== undefined && fromEnhancePrompt != null) setValueByPath(parentObject, [
        'parameters',
        'enhancePrompt'
    ], fromEnhancePrompt);
    if (getValueByPath(fromObject, [
        'generateAudio'
    ]) !== undefined) throw new Error('generateAudio parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'lastFrame'
    ]) !== undefined) throw new Error('lastFrame parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'compressionQuality'
    ]) !== undefined) throw new Error('compressionQuality parameter is not supported in Gemini API.');
    return toObject;
}
function generateVideosParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromPrompt = getValueByPath(fromObject, [
        'prompt'
    ]);
    if (fromPrompt != null) setValueByPath(toObject, [
        'instances[0]',
        'prompt'
    ], fromPrompt);
    const fromImage = getValueByPath(fromObject, [
        'image'
    ]);
    if (fromImage != null) setValueByPath(toObject, [
        'instances[0]',
        'image'
    ], imageToMldev(fromImage));
    if (getValueByPath(fromObject, [
        'video'
    ]) !== undefined) throw new Error('video parameter is not supported in Gemini API.');
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], generateVideosConfigToMldev(fromConfig, toObject));
    return toObject;
}
function videoMetadataToVertex(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function blobToVertex(fromObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataToVertex(fromObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function partToVertex(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataToVertex(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobToVertex(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataToVertex(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function contentToVertex(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partToVertex(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function schemaToVertex(fromObject) {
    const toObject = {};
    const fromAnyOf = getValueByPath(fromObject, [
        'anyOf'
    ]);
    if (fromAnyOf != null) setValueByPath(toObject, [
        'anyOf'
    ], fromAnyOf);
    const fromDefault = getValueByPath(fromObject, [
        'default'
    ]);
    if (fromDefault != null) setValueByPath(toObject, [
        'default'
    ], fromDefault);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromEnum = getValueByPath(fromObject, [
        'enum'
    ]);
    if (fromEnum != null) setValueByPath(toObject, [
        'enum'
    ], fromEnum);
    const fromExample = getValueByPath(fromObject, [
        'example'
    ]);
    if (fromExample != null) setValueByPath(toObject, [
        'example'
    ], fromExample);
    const fromFormat = getValueByPath(fromObject, [
        'format'
    ]);
    if (fromFormat != null) setValueByPath(toObject, [
        'format'
    ], fromFormat);
    const fromItems = getValueByPath(fromObject, [
        'items'
    ]);
    if (fromItems != null) setValueByPath(toObject, [
        'items'
    ], fromItems);
    const fromMaxItems = getValueByPath(fromObject, [
        'maxItems'
    ]);
    if (fromMaxItems != null) setValueByPath(toObject, [
        'maxItems'
    ], fromMaxItems);
    const fromMaxLength = getValueByPath(fromObject, [
        'maxLength'
    ]);
    if (fromMaxLength != null) setValueByPath(toObject, [
        'maxLength'
    ], fromMaxLength);
    const fromMaxProperties = getValueByPath(fromObject, [
        'maxProperties'
    ]);
    if (fromMaxProperties != null) setValueByPath(toObject, [
        'maxProperties'
    ], fromMaxProperties);
    const fromMaximum = getValueByPath(fromObject, [
        'maximum'
    ]);
    if (fromMaximum != null) setValueByPath(toObject, [
        'maximum'
    ], fromMaximum);
    const fromMinItems = getValueByPath(fromObject, [
        'minItems'
    ]);
    if (fromMinItems != null) setValueByPath(toObject, [
        'minItems'
    ], fromMinItems);
    const fromMinLength = getValueByPath(fromObject, [
        'minLength'
    ]);
    if (fromMinLength != null) setValueByPath(toObject, [
        'minLength'
    ], fromMinLength);
    const fromMinProperties = getValueByPath(fromObject, [
        'minProperties'
    ]);
    if (fromMinProperties != null) setValueByPath(toObject, [
        'minProperties'
    ], fromMinProperties);
    const fromMinimum = getValueByPath(fromObject, [
        'minimum'
    ]);
    if (fromMinimum != null) setValueByPath(toObject, [
        'minimum'
    ], fromMinimum);
    const fromNullable = getValueByPath(fromObject, [
        'nullable'
    ]);
    if (fromNullable != null) setValueByPath(toObject, [
        'nullable'
    ], fromNullable);
    const fromPattern = getValueByPath(fromObject, [
        'pattern'
    ]);
    if (fromPattern != null) setValueByPath(toObject, [
        'pattern'
    ], fromPattern);
    const fromProperties = getValueByPath(fromObject, [
        'properties'
    ]);
    if (fromProperties != null) setValueByPath(toObject, [
        'properties'
    ], fromProperties);
    const fromPropertyOrdering = getValueByPath(fromObject, [
        'propertyOrdering'
    ]);
    if (fromPropertyOrdering != null) setValueByPath(toObject, [
        'propertyOrdering'
    ], fromPropertyOrdering);
    const fromRequired = getValueByPath(fromObject, [
        'required'
    ]);
    if (fromRequired != null) setValueByPath(toObject, [
        'required'
    ], fromRequired);
    const fromTitle = getValueByPath(fromObject, [
        'title'
    ]);
    if (fromTitle != null) setValueByPath(toObject, [
        'title'
    ], fromTitle);
    const fromType = getValueByPath(fromObject, [
        'type'
    ]);
    if (fromType != null) setValueByPath(toObject, [
        'type'
    ], fromType);
    return toObject;
}
function modelSelectionConfigToVertex(fromObject) {
    const toObject = {};
    const fromFeatureSelectionPreference = getValueByPath(fromObject, [
        'featureSelectionPreference'
    ]);
    if (fromFeatureSelectionPreference != null) setValueByPath(toObject, [
        'featureSelectionPreference'
    ], fromFeatureSelectionPreference);
    return toObject;
}
function safetySettingToVertex(fromObject) {
    const toObject = {};
    const fromMethod = getValueByPath(fromObject, [
        'method'
    ]);
    if (fromMethod != null) setValueByPath(toObject, [
        'method'
    ], fromMethod);
    const fromCategory = getValueByPath(fromObject, [
        'category'
    ]);
    if (fromCategory != null) setValueByPath(toObject, [
        'category'
    ], fromCategory);
    const fromThreshold = getValueByPath(fromObject, [
        'threshold'
    ]);
    if (fromThreshold != null) setValueByPath(toObject, [
        'threshold'
    ], fromThreshold);
    return toObject;
}
function functionDeclarationToVertex(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'behavior'
    ]) !== undefined) throw new Error('behavior parameter is not supported in Vertex AI.');
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromParameters = getValueByPath(fromObject, [
        'parameters'
    ]);
    if (fromParameters != null) setValueByPath(toObject, [
        'parameters'
    ], fromParameters);
    const fromParametersJsonSchema = getValueByPath(fromObject, [
        'parametersJsonSchema'
    ]);
    if (fromParametersJsonSchema != null) setValueByPath(toObject, [
        'parametersJsonSchema'
    ], fromParametersJsonSchema);
    const fromResponse = getValueByPath(fromObject, [
        'response'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], fromResponse);
    const fromResponseJsonSchema = getValueByPath(fromObject, [
        'responseJsonSchema'
    ]);
    if (fromResponseJsonSchema != null) setValueByPath(toObject, [
        'responseJsonSchema'
    ], fromResponseJsonSchema);
    return toObject;
}
function intervalToVertex(fromObject) {
    const toObject = {};
    const fromStartTime = getValueByPath(fromObject, [
        'startTime'
    ]);
    if (fromStartTime != null) setValueByPath(toObject, [
        'startTime'
    ], fromStartTime);
    const fromEndTime = getValueByPath(fromObject, [
        'endTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    return toObject;
}
function googleSearchToVertex(fromObject) {
    const toObject = {};
    const fromTimeRangeFilter = getValueByPath(fromObject, [
        'timeRangeFilter'
    ]);
    if (fromTimeRangeFilter != null) setValueByPath(toObject, [
        'timeRangeFilter'
    ], intervalToVertex(fromTimeRangeFilter));
    return toObject;
}
function dynamicRetrievalConfigToVertex(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold'
    ]);
    if (fromDynamicThreshold != null) setValueByPath(toObject, [
        'dynamicThreshold'
    ], fromDynamicThreshold);
    return toObject;
}
function googleSearchRetrievalToVertex(fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig'
    ]);
    if (fromDynamicRetrievalConfig != null) setValueByPath(toObject, [
        'dynamicRetrievalConfig'
    ], dynamicRetrievalConfigToVertex(fromDynamicRetrievalConfig));
    return toObject;
}
function enterpriseWebSearchToVertex() {
    const toObject = {};
    return toObject;
}
function apiKeyConfigToVertex(fromObject) {
    const toObject = {};
    const fromApiKeyString = getValueByPath(fromObject, [
        'apiKeyString'
    ]);
    if (fromApiKeyString != null) setValueByPath(toObject, [
        'apiKeyString'
    ], fromApiKeyString);
    return toObject;
}
function authConfigToVertex(fromObject) {
    const toObject = {};
    const fromApiKeyConfig = getValueByPath(fromObject, [
        'apiKeyConfig'
    ]);
    if (fromApiKeyConfig != null) setValueByPath(toObject, [
        'apiKeyConfig'
    ], apiKeyConfigToVertex(fromApiKeyConfig));
    const fromAuthType = getValueByPath(fromObject, [
        'authType'
    ]);
    if (fromAuthType != null) setValueByPath(toObject, [
        'authType'
    ], fromAuthType);
    const fromGoogleServiceAccountConfig = getValueByPath(fromObject, [
        'googleServiceAccountConfig'
    ]);
    if (fromGoogleServiceAccountConfig != null) setValueByPath(toObject, [
        'googleServiceAccountConfig'
    ], fromGoogleServiceAccountConfig);
    const fromHttpBasicAuthConfig = getValueByPath(fromObject, [
        'httpBasicAuthConfig'
    ]);
    if (fromHttpBasicAuthConfig != null) setValueByPath(toObject, [
        'httpBasicAuthConfig'
    ], fromHttpBasicAuthConfig);
    const fromOauthConfig = getValueByPath(fromObject, [
        'oauthConfig'
    ]);
    if (fromOauthConfig != null) setValueByPath(toObject, [
        'oauthConfig'
    ], fromOauthConfig);
    const fromOidcConfig = getValueByPath(fromObject, [
        'oidcConfig'
    ]);
    if (fromOidcConfig != null) setValueByPath(toObject, [
        'oidcConfig'
    ], fromOidcConfig);
    return toObject;
}
function googleMapsToVertex(fromObject) {
    const toObject = {};
    const fromAuthConfig = getValueByPath(fromObject, [
        'authConfig'
    ]);
    if (fromAuthConfig != null) setValueByPath(toObject, [
        'authConfig'
    ], authConfigToVertex(fromAuthConfig));
    return toObject;
}
function urlContextToVertex() {
    const toObject = {};
    return toObject;
}
function toolToVertex(fromObject) {
    const toObject = {};
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations'
    ]);
    if (fromFunctionDeclarations != null) {
        let transformedList = fromFunctionDeclarations;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return functionDeclarationToVertex(item);
        });
        setValueByPath(toObject, [
            'functionDeclarations'
        ], transformedList);
    }
    const fromRetrieval = getValueByPath(fromObject, [
        'retrieval'
    ]);
    if (fromRetrieval != null) setValueByPath(toObject, [
        'retrieval'
    ], fromRetrieval);
    const fromGoogleSearch = getValueByPath(fromObject, [
        'googleSearch'
    ]);
    if (fromGoogleSearch != null) setValueByPath(toObject, [
        'googleSearch'
    ], googleSearchToVertex(fromGoogleSearch));
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval'
    ]);
    if (fromGoogleSearchRetrieval != null) setValueByPath(toObject, [
        'googleSearchRetrieval'
    ], googleSearchRetrievalToVertex(fromGoogleSearchRetrieval));
    const fromEnterpriseWebSearch = getValueByPath(fromObject, [
        'enterpriseWebSearch'
    ]);
    if (fromEnterpriseWebSearch != null) setValueByPath(toObject, [
        'enterpriseWebSearch'
    ], enterpriseWebSearchToVertex());
    const fromGoogleMaps = getValueByPath(fromObject, [
        'googleMaps'
    ]);
    if (fromGoogleMaps != null) setValueByPath(toObject, [
        'googleMaps'
    ], googleMapsToVertex(fromGoogleMaps));
    const fromUrlContext = getValueByPath(fromObject, [
        'urlContext'
    ]);
    if (fromUrlContext != null) setValueByPath(toObject, [
        'urlContext'
    ], urlContextToVertex());
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution'
    ]);
    if (fromCodeExecution != null) setValueByPath(toObject, [
        'codeExecution'
    ], fromCodeExecution);
    const fromComputerUse = getValueByPath(fromObject, [
        'computerUse'
    ]);
    if (fromComputerUse != null) setValueByPath(toObject, [
        'computerUse'
    ], fromComputerUse);
    return toObject;
}
function functionCallingConfigToVertex(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromAllowedFunctionNames = getValueByPath(fromObject, [
        'allowedFunctionNames'
    ]);
    if (fromAllowedFunctionNames != null) setValueByPath(toObject, [
        'allowedFunctionNames'
    ], fromAllowedFunctionNames);
    return toObject;
}
function latLngToVertex(fromObject) {
    const toObject = {};
    const fromLatitude = getValueByPath(fromObject, [
        'latitude'
    ]);
    if (fromLatitude != null) setValueByPath(toObject, [
        'latitude'
    ], fromLatitude);
    const fromLongitude = getValueByPath(fromObject, [
        'longitude'
    ]);
    if (fromLongitude != null) setValueByPath(toObject, [
        'longitude'
    ], fromLongitude);
    return toObject;
}
function retrievalConfigToVertex(fromObject) {
    const toObject = {};
    const fromLatLng = getValueByPath(fromObject, [
        'latLng'
    ]);
    if (fromLatLng != null) setValueByPath(toObject, [
        'latLng'
    ], latLngToVertex(fromLatLng));
    const fromLanguageCode = getValueByPath(fromObject, [
        'languageCode'
    ]);
    if (fromLanguageCode != null) setValueByPath(toObject, [
        'languageCode'
    ], fromLanguageCode);
    return toObject;
}
function toolConfigToVertex(fromObject) {
    const toObject = {};
    const fromFunctionCallingConfig = getValueByPath(fromObject, [
        'functionCallingConfig'
    ]);
    if (fromFunctionCallingConfig != null) setValueByPath(toObject, [
        'functionCallingConfig'
    ], functionCallingConfigToVertex(fromFunctionCallingConfig));
    const fromRetrievalConfig = getValueByPath(fromObject, [
        'retrievalConfig'
    ]);
    if (fromRetrievalConfig != null) setValueByPath(toObject, [
        'retrievalConfig'
    ], retrievalConfigToVertex(fromRetrievalConfig));
    return toObject;
}
function prebuiltVoiceConfigToVertex(fromObject) {
    const toObject = {};
    const fromVoiceName = getValueByPath(fromObject, [
        'voiceName'
    ]);
    if (fromVoiceName != null) setValueByPath(toObject, [
        'voiceName'
    ], fromVoiceName);
    return toObject;
}
function voiceConfigToVertex(fromObject) {
    const toObject = {};
    const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
        'prebuiltVoiceConfig'
    ]);
    if (fromPrebuiltVoiceConfig != null) setValueByPath(toObject, [
        'prebuiltVoiceConfig'
    ], prebuiltVoiceConfigToVertex(fromPrebuiltVoiceConfig));
    return toObject;
}
function speechConfigToVertex(fromObject) {
    const toObject = {};
    const fromVoiceConfig = getValueByPath(fromObject, [
        'voiceConfig'
    ]);
    if (fromVoiceConfig != null) setValueByPath(toObject, [
        'voiceConfig'
    ], voiceConfigToVertex(fromVoiceConfig));
    if (getValueByPath(fromObject, [
        'multiSpeakerVoiceConfig'
    ]) !== undefined) throw new Error('multiSpeakerVoiceConfig parameter is not supported in Vertex AI.');
    const fromLanguageCode = getValueByPath(fromObject, [
        'languageCode'
    ]);
    if (fromLanguageCode != null) setValueByPath(toObject, [
        'languageCode'
    ], fromLanguageCode);
    return toObject;
}
function thinkingConfigToVertex(fromObject) {
    const toObject = {};
    const fromIncludeThoughts = getValueByPath(fromObject, [
        'includeThoughts'
    ]);
    if (fromIncludeThoughts != null) setValueByPath(toObject, [
        'includeThoughts'
    ], fromIncludeThoughts);
    const fromThinkingBudget = getValueByPath(fromObject, [
        'thinkingBudget'
    ]);
    if (fromThinkingBudget != null) setValueByPath(toObject, [
        'thinkingBudget'
    ], fromThinkingBudget);
    return toObject;
}
function generateContentConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction'
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) setValueByPath(parentObject, [
        'systemInstruction'
    ], contentToVertex(tContent(fromSystemInstruction)));
    const fromTemperature = getValueByPath(fromObject, [
        'temperature'
    ]);
    if (fromTemperature != null) setValueByPath(toObject, [
        'temperature'
    ], fromTemperature);
    const fromTopP = getValueByPath(fromObject, [
        'topP'
    ]);
    if (fromTopP != null) setValueByPath(toObject, [
        'topP'
    ], fromTopP);
    const fromTopK = getValueByPath(fromObject, [
        'topK'
    ]);
    if (fromTopK != null) setValueByPath(toObject, [
        'topK'
    ], fromTopK);
    const fromCandidateCount = getValueByPath(fromObject, [
        'candidateCount'
    ]);
    if (fromCandidateCount != null) setValueByPath(toObject, [
        'candidateCount'
    ], fromCandidateCount);
    const fromMaxOutputTokens = getValueByPath(fromObject, [
        'maxOutputTokens'
    ]);
    if (fromMaxOutputTokens != null) setValueByPath(toObject, [
        'maxOutputTokens'
    ], fromMaxOutputTokens);
    const fromStopSequences = getValueByPath(fromObject, [
        'stopSequences'
    ]);
    if (fromStopSequences != null) setValueByPath(toObject, [
        'stopSequences'
    ], fromStopSequences);
    const fromResponseLogprobs = getValueByPath(fromObject, [
        'responseLogprobs'
    ]);
    if (fromResponseLogprobs != null) setValueByPath(toObject, [
        'responseLogprobs'
    ], fromResponseLogprobs);
    const fromLogprobs = getValueByPath(fromObject, [
        'logprobs'
    ]);
    if (fromLogprobs != null) setValueByPath(toObject, [
        'logprobs'
    ], fromLogprobs);
    const fromPresencePenalty = getValueByPath(fromObject, [
        'presencePenalty'
    ]);
    if (fromPresencePenalty != null) setValueByPath(toObject, [
        'presencePenalty'
    ], fromPresencePenalty);
    const fromFrequencyPenalty = getValueByPath(fromObject, [
        'frequencyPenalty'
    ]);
    if (fromFrequencyPenalty != null) setValueByPath(toObject, [
        'frequencyPenalty'
    ], fromFrequencyPenalty);
    const fromSeed = getValueByPath(fromObject, [
        'seed'
    ]);
    if (fromSeed != null) setValueByPath(toObject, [
        'seed'
    ], fromSeed);
    const fromResponseMimeType = getValueByPath(fromObject, [
        'responseMimeType'
    ]);
    if (fromResponseMimeType != null) setValueByPath(toObject, [
        'responseMimeType'
    ], fromResponseMimeType);
    const fromResponseSchema = getValueByPath(fromObject, [
        'responseSchema'
    ]);
    if (fromResponseSchema != null) setValueByPath(toObject, [
        'responseSchema'
    ], schemaToVertex(tSchema(fromResponseSchema)));
    const fromResponseJsonSchema = getValueByPath(fromObject, [
        'responseJsonSchema'
    ]);
    if (fromResponseJsonSchema != null) setValueByPath(toObject, [
        'responseJsonSchema'
    ], fromResponseJsonSchema);
    const fromRoutingConfig = getValueByPath(fromObject, [
        'routingConfig'
    ]);
    if (fromRoutingConfig != null) setValueByPath(toObject, [
        'routingConfig'
    ], fromRoutingConfig);
    const fromModelSelectionConfig = getValueByPath(fromObject, [
        'modelSelectionConfig'
    ]);
    if (fromModelSelectionConfig != null) setValueByPath(toObject, [
        'modelConfig'
    ], modelSelectionConfigToVertex(fromModelSelectionConfig));
    const fromSafetySettings = getValueByPath(fromObject, [
        'safetySettings'
    ]);
    if (parentObject !== undefined && fromSafetySettings != null) {
        let transformedList = fromSafetySettings;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return safetySettingToVertex(item);
        });
        setValueByPath(parentObject, [
            'safetySettings'
        ], transformedList);
    }
    const fromTools = getValueByPath(fromObject, [
        'tools'
    ]);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = tTools(fromTools);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return toolToVertex(tTool(item));
        });
        setValueByPath(parentObject, [
            'tools'
        ], transformedList);
    }
    const fromToolConfig = getValueByPath(fromObject, [
        'toolConfig'
    ]);
    if (parentObject !== undefined && fromToolConfig != null) setValueByPath(parentObject, [
        'toolConfig'
    ], toolConfigToVertex(fromToolConfig));
    const fromLabels = getValueByPath(fromObject, [
        'labels'
    ]);
    if (parentObject !== undefined && fromLabels != null) setValueByPath(parentObject, [
        'labels'
    ], fromLabels);
    const fromCachedContent = getValueByPath(fromObject, [
        'cachedContent'
    ]);
    if (parentObject !== undefined && fromCachedContent != null) setValueByPath(parentObject, [
        'cachedContent'
    ], tCachedContentName(apiClient, fromCachedContent));
    const fromResponseModalities = getValueByPath(fromObject, [
        'responseModalities'
    ]);
    if (fromResponseModalities != null) setValueByPath(toObject, [
        'responseModalities'
    ], fromResponseModalities);
    const fromMediaResolution = getValueByPath(fromObject, [
        'mediaResolution'
    ]);
    if (fromMediaResolution != null) setValueByPath(toObject, [
        'mediaResolution'
    ], fromMediaResolution);
    const fromSpeechConfig = getValueByPath(fromObject, [
        'speechConfig'
    ]);
    if (fromSpeechConfig != null) setValueByPath(toObject, [
        'speechConfig'
    ], speechConfigToVertex(tSpeechConfig(fromSpeechConfig)));
    const fromAudioTimestamp = getValueByPath(fromObject, [
        'audioTimestamp'
    ]);
    if (fromAudioTimestamp != null) setValueByPath(toObject, [
        'audioTimestamp'
    ], fromAudioTimestamp);
    const fromThinkingConfig = getValueByPath(fromObject, [
        'thinkingConfig'
    ]);
    if (fromThinkingConfig != null) setValueByPath(toObject, [
        'thinkingConfig'
    ], thinkingConfigToVertex(fromThinkingConfig));
    return toObject;
}
function generateContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromContents = getValueByPath(fromObject, [
        'contents'
    ]);
    if (fromContents != null) {
        let transformedList = tContents(fromContents);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return contentToVertex(item);
        });
        setValueByPath(toObject, [
            'contents'
        ], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'generationConfig'
    ], generateContentConfigToVertex(apiClient, fromConfig, toObject));
    return toObject;
}
function embedContentConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromTaskType = getValueByPath(fromObject, [
        'taskType'
    ]);
    if (parentObject !== undefined && fromTaskType != null) setValueByPath(parentObject, [
        'instances[]',
        'task_type'
    ], fromTaskType);
    const fromTitle = getValueByPath(fromObject, [
        'title'
    ]);
    if (parentObject !== undefined && fromTitle != null) setValueByPath(parentObject, [
        'instances[]',
        'title'
    ], fromTitle);
    const fromOutputDimensionality = getValueByPath(fromObject, [
        'outputDimensionality'
    ]);
    if (parentObject !== undefined && fromOutputDimensionality != null) setValueByPath(parentObject, [
        'parameters',
        'outputDimensionality'
    ], fromOutputDimensionality);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (parentObject !== undefined && fromMimeType != null) setValueByPath(parentObject, [
        'instances[]',
        'mimeType'
    ], fromMimeType);
    const fromAutoTruncate = getValueByPath(fromObject, [
        'autoTruncate'
    ]);
    if (parentObject !== undefined && fromAutoTruncate != null) setValueByPath(parentObject, [
        'parameters',
        'autoTruncate'
    ], fromAutoTruncate);
    return toObject;
}
function embedContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromContents = getValueByPath(fromObject, [
        'contents'
    ]);
    if (fromContents != null) setValueByPath(toObject, [
        'instances[]',
        'content'
    ], tContentsForEmbed(apiClient, fromContents));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], embedContentConfigToVertex(fromConfig, toObject));
    return toObject;
}
function generateImagesConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromOutputGcsUri = getValueByPath(fromObject, [
        'outputGcsUri'
    ]);
    if (parentObject !== undefined && fromOutputGcsUri != null) setValueByPath(parentObject, [
        'parameters',
        'storageUri'
    ], fromOutputGcsUri);
    const fromNegativePrompt = getValueByPath(fromObject, [
        'negativePrompt'
    ]);
    if (parentObject !== undefined && fromNegativePrompt != null) setValueByPath(parentObject, [
        'parameters',
        'negativePrompt'
    ], fromNegativePrompt);
    const fromNumberOfImages = getValueByPath(fromObject, [
        'numberOfImages'
    ]);
    if (parentObject !== undefined && fromNumberOfImages != null) setValueByPath(parentObject, [
        'parameters',
        'sampleCount'
    ], fromNumberOfImages);
    const fromAspectRatio = getValueByPath(fromObject, [
        'aspectRatio'
    ]);
    if (parentObject !== undefined && fromAspectRatio != null) setValueByPath(parentObject, [
        'parameters',
        'aspectRatio'
    ], fromAspectRatio);
    const fromGuidanceScale = getValueByPath(fromObject, [
        'guidanceScale'
    ]);
    if (parentObject !== undefined && fromGuidanceScale != null) setValueByPath(parentObject, [
        'parameters',
        'guidanceScale'
    ], fromGuidanceScale);
    const fromSeed = getValueByPath(fromObject, [
        'seed'
    ]);
    if (parentObject !== undefined && fromSeed != null) setValueByPath(parentObject, [
        'parameters',
        'seed'
    ], fromSeed);
    const fromSafetyFilterLevel = getValueByPath(fromObject, [
        'safetyFilterLevel'
    ]);
    if (parentObject !== undefined && fromSafetyFilterLevel != null) setValueByPath(parentObject, [
        'parameters',
        'safetySetting'
    ], fromSafetyFilterLevel);
    const fromPersonGeneration = getValueByPath(fromObject, [
        'personGeneration'
    ]);
    if (parentObject !== undefined && fromPersonGeneration != null) setValueByPath(parentObject, [
        'parameters',
        'personGeneration'
    ], fromPersonGeneration);
    const fromIncludeSafetyAttributes = getValueByPath(fromObject, [
        'includeSafetyAttributes'
    ]);
    if (parentObject !== undefined && fromIncludeSafetyAttributes != null) setValueByPath(parentObject, [
        'parameters',
        'includeSafetyAttributes'
    ], fromIncludeSafetyAttributes);
    const fromIncludeRaiReason = getValueByPath(fromObject, [
        'includeRaiReason'
    ]);
    if (parentObject !== undefined && fromIncludeRaiReason != null) setValueByPath(parentObject, [
        'parameters',
        'includeRaiReason'
    ], fromIncludeRaiReason);
    const fromLanguage = getValueByPath(fromObject, [
        'language'
    ]);
    if (parentObject !== undefined && fromLanguage != null) setValueByPath(parentObject, [
        'parameters',
        'language'
    ], fromLanguage);
    const fromOutputMimeType = getValueByPath(fromObject, [
        'outputMimeType'
    ]);
    if (parentObject !== undefined && fromOutputMimeType != null) setValueByPath(parentObject, [
        'parameters',
        'outputOptions',
        'mimeType'
    ], fromOutputMimeType);
    const fromOutputCompressionQuality = getValueByPath(fromObject, [
        'outputCompressionQuality'
    ]);
    if (parentObject !== undefined && fromOutputCompressionQuality != null) setValueByPath(parentObject, [
        'parameters',
        'outputOptions',
        'compressionQuality'
    ], fromOutputCompressionQuality);
    const fromAddWatermark = getValueByPath(fromObject, [
        'addWatermark'
    ]);
    if (parentObject !== undefined && fromAddWatermark != null) setValueByPath(parentObject, [
        'parameters',
        'addWatermark'
    ], fromAddWatermark);
    const fromEnhancePrompt = getValueByPath(fromObject, [
        'enhancePrompt'
    ]);
    if (parentObject !== undefined && fromEnhancePrompt != null) setValueByPath(parentObject, [
        'parameters',
        'enhancePrompt'
    ], fromEnhancePrompt);
    return toObject;
}
function generateImagesParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromPrompt = getValueByPath(fromObject, [
        'prompt'
    ]);
    if (fromPrompt != null) setValueByPath(toObject, [
        'instances[0]',
        'prompt'
    ], fromPrompt);
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], generateImagesConfigToVertex(fromConfig, toObject));
    return toObject;
}
function imageToVertex(fromObject) {
    const toObject = {};
    const fromGcsUri = getValueByPath(fromObject, [
        'gcsUri'
    ]);
    if (fromGcsUri != null) setValueByPath(toObject, [
        'gcsUri'
    ], fromGcsUri);
    const fromImageBytes = getValueByPath(fromObject, [
        'imageBytes'
    ]);
    if (fromImageBytes != null) setValueByPath(toObject, [
        'bytesBase64Encoded'
    ], tBytes(fromImageBytes));
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function maskReferenceConfigToVertex(fromObject) {
    const toObject = {};
    const fromMaskMode = getValueByPath(fromObject, [
        'maskMode'
    ]);
    if (fromMaskMode != null) setValueByPath(toObject, [
        'maskMode'
    ], fromMaskMode);
    const fromSegmentationClasses = getValueByPath(fromObject, [
        'segmentationClasses'
    ]);
    if (fromSegmentationClasses != null) setValueByPath(toObject, [
        'maskClasses'
    ], fromSegmentationClasses);
    const fromMaskDilation = getValueByPath(fromObject, [
        'maskDilation'
    ]);
    if (fromMaskDilation != null) setValueByPath(toObject, [
        'dilation'
    ], fromMaskDilation);
    return toObject;
}
function controlReferenceConfigToVertex(fromObject) {
    const toObject = {};
    const fromControlType = getValueByPath(fromObject, [
        'controlType'
    ]);
    if (fromControlType != null) setValueByPath(toObject, [
        'controlType'
    ], fromControlType);
    const fromEnableControlImageComputation = getValueByPath(fromObject, [
        'enableControlImageComputation'
    ]);
    if (fromEnableControlImageComputation != null) setValueByPath(toObject, [
        'computeControl'
    ], fromEnableControlImageComputation);
    return toObject;
}
function styleReferenceConfigToVertex(fromObject) {
    const toObject = {};
    const fromStyleDescription = getValueByPath(fromObject, [
        'styleDescription'
    ]);
    if (fromStyleDescription != null) setValueByPath(toObject, [
        'styleDescription'
    ], fromStyleDescription);
    return toObject;
}
function subjectReferenceConfigToVertex(fromObject) {
    const toObject = {};
    const fromSubjectType = getValueByPath(fromObject, [
        'subjectType'
    ]);
    if (fromSubjectType != null) setValueByPath(toObject, [
        'subjectType'
    ], fromSubjectType);
    const fromSubjectDescription = getValueByPath(fromObject, [
        'subjectDescription'
    ]);
    if (fromSubjectDescription != null) setValueByPath(toObject, [
        'subjectDescription'
    ], fromSubjectDescription);
    return toObject;
}
function referenceImageAPIInternalToVertex(fromObject) {
    const toObject = {};
    const fromReferenceImage = getValueByPath(fromObject, [
        'referenceImage'
    ]);
    if (fromReferenceImage != null) setValueByPath(toObject, [
        'referenceImage'
    ], imageToVertex(fromReferenceImage));
    const fromReferenceId = getValueByPath(fromObject, [
        'referenceId'
    ]);
    if (fromReferenceId != null) setValueByPath(toObject, [
        'referenceId'
    ], fromReferenceId);
    const fromReferenceType = getValueByPath(fromObject, [
        'referenceType'
    ]);
    if (fromReferenceType != null) setValueByPath(toObject, [
        'referenceType'
    ], fromReferenceType);
    const fromMaskImageConfig = getValueByPath(fromObject, [
        'maskImageConfig'
    ]);
    if (fromMaskImageConfig != null) setValueByPath(toObject, [
        'maskImageConfig'
    ], maskReferenceConfigToVertex(fromMaskImageConfig));
    const fromControlImageConfig = getValueByPath(fromObject, [
        'controlImageConfig'
    ]);
    if (fromControlImageConfig != null) setValueByPath(toObject, [
        'controlImageConfig'
    ], controlReferenceConfigToVertex(fromControlImageConfig));
    const fromStyleImageConfig = getValueByPath(fromObject, [
        'styleImageConfig'
    ]);
    if (fromStyleImageConfig != null) setValueByPath(toObject, [
        'styleImageConfig'
    ], styleReferenceConfigToVertex(fromStyleImageConfig));
    const fromSubjectImageConfig = getValueByPath(fromObject, [
        'subjectImageConfig'
    ]);
    if (fromSubjectImageConfig != null) setValueByPath(toObject, [
        'subjectImageConfig'
    ], subjectReferenceConfigToVertex(fromSubjectImageConfig));
    return toObject;
}
function editImageConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromOutputGcsUri = getValueByPath(fromObject, [
        'outputGcsUri'
    ]);
    if (parentObject !== undefined && fromOutputGcsUri != null) setValueByPath(parentObject, [
        'parameters',
        'storageUri'
    ], fromOutputGcsUri);
    const fromNegativePrompt = getValueByPath(fromObject, [
        'negativePrompt'
    ]);
    if (parentObject !== undefined && fromNegativePrompt != null) setValueByPath(parentObject, [
        'parameters',
        'negativePrompt'
    ], fromNegativePrompt);
    const fromNumberOfImages = getValueByPath(fromObject, [
        'numberOfImages'
    ]);
    if (parentObject !== undefined && fromNumberOfImages != null) setValueByPath(parentObject, [
        'parameters',
        'sampleCount'
    ], fromNumberOfImages);
    const fromAspectRatio = getValueByPath(fromObject, [
        'aspectRatio'
    ]);
    if (parentObject !== undefined && fromAspectRatio != null) setValueByPath(parentObject, [
        'parameters',
        'aspectRatio'
    ], fromAspectRatio);
    const fromGuidanceScale = getValueByPath(fromObject, [
        'guidanceScale'
    ]);
    if (parentObject !== undefined && fromGuidanceScale != null) setValueByPath(parentObject, [
        'parameters',
        'guidanceScale'
    ], fromGuidanceScale);
    const fromSeed = getValueByPath(fromObject, [
        'seed'
    ]);
    if (parentObject !== undefined && fromSeed != null) setValueByPath(parentObject, [
        'parameters',
        'seed'
    ], fromSeed);
    const fromSafetyFilterLevel = getValueByPath(fromObject, [
        'safetyFilterLevel'
    ]);
    if (parentObject !== undefined && fromSafetyFilterLevel != null) setValueByPath(parentObject, [
        'parameters',
        'safetySetting'
    ], fromSafetyFilterLevel);
    const fromPersonGeneration = getValueByPath(fromObject, [
        'personGeneration'
    ]);
    if (parentObject !== undefined && fromPersonGeneration != null) setValueByPath(parentObject, [
        'parameters',
        'personGeneration'
    ], fromPersonGeneration);
    const fromIncludeSafetyAttributes = getValueByPath(fromObject, [
        'includeSafetyAttributes'
    ]);
    if (parentObject !== undefined && fromIncludeSafetyAttributes != null) setValueByPath(parentObject, [
        'parameters',
        'includeSafetyAttributes'
    ], fromIncludeSafetyAttributes);
    const fromIncludeRaiReason = getValueByPath(fromObject, [
        'includeRaiReason'
    ]);
    if (parentObject !== undefined && fromIncludeRaiReason != null) setValueByPath(parentObject, [
        'parameters',
        'includeRaiReason'
    ], fromIncludeRaiReason);
    const fromLanguage = getValueByPath(fromObject, [
        'language'
    ]);
    if (parentObject !== undefined && fromLanguage != null) setValueByPath(parentObject, [
        'parameters',
        'language'
    ], fromLanguage);
    const fromOutputMimeType = getValueByPath(fromObject, [
        'outputMimeType'
    ]);
    if (parentObject !== undefined && fromOutputMimeType != null) setValueByPath(parentObject, [
        'parameters',
        'outputOptions',
        'mimeType'
    ], fromOutputMimeType);
    const fromOutputCompressionQuality = getValueByPath(fromObject, [
        'outputCompressionQuality'
    ]);
    if (parentObject !== undefined && fromOutputCompressionQuality != null) setValueByPath(parentObject, [
        'parameters',
        'outputOptions',
        'compressionQuality'
    ], fromOutputCompressionQuality);
    const fromEditMode = getValueByPath(fromObject, [
        'editMode'
    ]);
    if (parentObject !== undefined && fromEditMode != null) setValueByPath(parentObject, [
        'parameters',
        'editMode'
    ], fromEditMode);
    const fromBaseSteps = getValueByPath(fromObject, [
        'baseSteps'
    ]);
    if (parentObject !== undefined && fromBaseSteps != null) setValueByPath(parentObject, [
        'parameters',
        'editConfig',
        'baseSteps'
    ], fromBaseSteps);
    return toObject;
}
function editImageParametersInternalToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromPrompt = getValueByPath(fromObject, [
        'prompt'
    ]);
    if (fromPrompt != null) setValueByPath(toObject, [
        'instances[0]',
        'prompt'
    ], fromPrompt);
    const fromReferenceImages = getValueByPath(fromObject, [
        'referenceImages'
    ]);
    if (fromReferenceImages != null) {
        let transformedList = fromReferenceImages;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return referenceImageAPIInternalToVertex(item);
        });
        setValueByPath(toObject, [
            'instances[0]',
            'referenceImages'
        ], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], editImageConfigToVertex(fromConfig, toObject));
    return toObject;
}
function upscaleImageAPIConfigInternalToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromIncludeRaiReason = getValueByPath(fromObject, [
        'includeRaiReason'
    ]);
    if (parentObject !== undefined && fromIncludeRaiReason != null) setValueByPath(parentObject, [
        'parameters',
        'includeRaiReason'
    ], fromIncludeRaiReason);
    const fromOutputMimeType = getValueByPath(fromObject, [
        'outputMimeType'
    ]);
    if (parentObject !== undefined && fromOutputMimeType != null) setValueByPath(parentObject, [
        'parameters',
        'outputOptions',
        'mimeType'
    ], fromOutputMimeType);
    const fromOutputCompressionQuality = getValueByPath(fromObject, [
        'outputCompressionQuality'
    ]);
    if (parentObject !== undefined && fromOutputCompressionQuality != null) setValueByPath(parentObject, [
        'parameters',
        'outputOptions',
        'compressionQuality'
    ], fromOutputCompressionQuality);
    const fromEnhanceInputImage = getValueByPath(fromObject, [
        'enhanceInputImage'
    ]);
    if (parentObject !== undefined && fromEnhanceInputImage != null) setValueByPath(parentObject, [
        'parameters',
        'upscaleConfig',
        'enhanceInputImage'
    ], fromEnhanceInputImage);
    const fromImagePreservationFactor = getValueByPath(fromObject, [
        'imagePreservationFactor'
    ]);
    if (parentObject !== undefined && fromImagePreservationFactor != null) setValueByPath(parentObject, [
        'parameters',
        'upscaleConfig',
        'imagePreservationFactor'
    ], fromImagePreservationFactor);
    const fromNumberOfImages = getValueByPath(fromObject, [
        'numberOfImages'
    ]);
    if (parentObject !== undefined && fromNumberOfImages != null) setValueByPath(parentObject, [
        'parameters',
        'sampleCount'
    ], fromNumberOfImages);
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (parentObject !== undefined && fromMode != null) setValueByPath(parentObject, [
        'parameters',
        'mode'
    ], fromMode);
    return toObject;
}
function upscaleImageAPIParametersInternalToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromImage = getValueByPath(fromObject, [
        'image'
    ]);
    if (fromImage != null) setValueByPath(toObject, [
        'instances[0]',
        'image'
    ], imageToVertex(fromImage));
    const fromUpscaleFactor = getValueByPath(fromObject, [
        'upscaleFactor'
    ]);
    if (fromUpscaleFactor != null) setValueByPath(toObject, [
        'parameters',
        'upscaleConfig',
        'upscaleFactor'
    ], fromUpscaleFactor);
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], upscaleImageAPIConfigInternalToVertex(fromConfig, toObject));
    return toObject;
}
function getModelParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tModel(apiClient, fromModel));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function listModelsConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, [
        'pageSize'
    ]);
    if (parentObject !== undefined && fromPageSize != null) setValueByPath(parentObject, [
        '_query',
        'pageSize'
    ], fromPageSize);
    const fromPageToken = getValueByPath(fromObject, [
        'pageToken'
    ]);
    if (parentObject !== undefined && fromPageToken != null) setValueByPath(parentObject, [
        '_query',
        'pageToken'
    ], fromPageToken);
    const fromFilter = getValueByPath(fromObject, [
        'filter'
    ]);
    if (parentObject !== undefined && fromFilter != null) setValueByPath(parentObject, [
        '_query',
        'filter'
    ], fromFilter);
    const fromQueryBase = getValueByPath(fromObject, [
        'queryBase'
    ]);
    if (parentObject !== undefined && fromQueryBase != null) setValueByPath(parentObject, [
        '_url',
        'models_url'
    ], tModelsUrl(apiClient, fromQueryBase));
    return toObject;
}
function listModelsParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], listModelsConfigToVertex(apiClient, fromConfig, toObject));
    return toObject;
}
function updateModelConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (parentObject !== undefined && fromDisplayName != null) setValueByPath(parentObject, [
        'displayName'
    ], fromDisplayName);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (parentObject !== undefined && fromDescription != null) setValueByPath(parentObject, [
        'description'
    ], fromDescription);
    const fromDefaultCheckpointId = getValueByPath(fromObject, [
        'defaultCheckpointId'
    ]);
    if (parentObject !== undefined && fromDefaultCheckpointId != null) setValueByPath(parentObject, [
        'defaultCheckpointId'
    ], fromDefaultCheckpointId);
    return toObject;
}
function updateModelParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], updateModelConfigToVertex(fromConfig, toObject));
    return toObject;
}
function deleteModelParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], tModel(apiClient, fromModel));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function countTokensConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction'
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) setValueByPath(parentObject, [
        'systemInstruction'
    ], contentToVertex(tContent(fromSystemInstruction)));
    const fromTools = getValueByPath(fromObject, [
        'tools'
    ]);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = fromTools;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return toolToVertex(item);
        });
        setValueByPath(parentObject, [
            'tools'
        ], transformedList);
    }
    const fromGenerationConfig = getValueByPath(fromObject, [
        'generationConfig'
    ]);
    if (parentObject !== undefined && fromGenerationConfig != null) setValueByPath(parentObject, [
        'generationConfig'
    ], fromGenerationConfig);
    return toObject;
}
function countTokensParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromContents = getValueByPath(fromObject, [
        'contents'
    ]);
    if (fromContents != null) {
        let transformedList = tContents(fromContents);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return contentToVertex(item);
        });
        setValueByPath(toObject, [
            'contents'
        ], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], countTokensConfigToVertex(fromConfig, toObject));
    return toObject;
}
function computeTokensParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromContents = getValueByPath(fromObject, [
        'contents'
    ]);
    if (fromContents != null) {
        let transformedList = tContents(fromContents);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return contentToVertex(item);
        });
        setValueByPath(toObject, [
            'contents'
        ], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function videoToVertex(fromObject) {
    const toObject = {};
    const fromUri = getValueByPath(fromObject, [
        'uri'
    ]);
    if (fromUri != null) setValueByPath(toObject, [
        'gcsUri'
    ], fromUri);
    const fromVideoBytes = getValueByPath(fromObject, [
        'videoBytes'
    ]);
    if (fromVideoBytes != null) setValueByPath(toObject, [
        'bytesBase64Encoded'
    ], tBytes(fromVideoBytes));
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function generateVideosConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromNumberOfVideos = getValueByPath(fromObject, [
        'numberOfVideos'
    ]);
    if (parentObject !== undefined && fromNumberOfVideos != null) setValueByPath(parentObject, [
        'parameters',
        'sampleCount'
    ], fromNumberOfVideos);
    const fromOutputGcsUri = getValueByPath(fromObject, [
        'outputGcsUri'
    ]);
    if (parentObject !== undefined && fromOutputGcsUri != null) setValueByPath(parentObject, [
        'parameters',
        'storageUri'
    ], fromOutputGcsUri);
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (parentObject !== undefined && fromFps != null) setValueByPath(parentObject, [
        'parameters',
        'fps'
    ], fromFps);
    const fromDurationSeconds = getValueByPath(fromObject, [
        'durationSeconds'
    ]);
    if (parentObject !== undefined && fromDurationSeconds != null) setValueByPath(parentObject, [
        'parameters',
        'durationSeconds'
    ], fromDurationSeconds);
    const fromSeed = getValueByPath(fromObject, [
        'seed'
    ]);
    if (parentObject !== undefined && fromSeed != null) setValueByPath(parentObject, [
        'parameters',
        'seed'
    ], fromSeed);
    const fromAspectRatio = getValueByPath(fromObject, [
        'aspectRatio'
    ]);
    if (parentObject !== undefined && fromAspectRatio != null) setValueByPath(parentObject, [
        'parameters',
        'aspectRatio'
    ], fromAspectRatio);
    const fromResolution = getValueByPath(fromObject, [
        'resolution'
    ]);
    if (parentObject !== undefined && fromResolution != null) setValueByPath(parentObject, [
        'parameters',
        'resolution'
    ], fromResolution);
    const fromPersonGeneration = getValueByPath(fromObject, [
        'personGeneration'
    ]);
    if (parentObject !== undefined && fromPersonGeneration != null) setValueByPath(parentObject, [
        'parameters',
        'personGeneration'
    ], fromPersonGeneration);
    const fromPubsubTopic = getValueByPath(fromObject, [
        'pubsubTopic'
    ]);
    if (parentObject !== undefined && fromPubsubTopic != null) setValueByPath(parentObject, [
        'parameters',
        'pubsubTopic'
    ], fromPubsubTopic);
    const fromNegativePrompt = getValueByPath(fromObject, [
        'negativePrompt'
    ]);
    if (parentObject !== undefined && fromNegativePrompt != null) setValueByPath(parentObject, [
        'parameters',
        'negativePrompt'
    ], fromNegativePrompt);
    const fromEnhancePrompt = getValueByPath(fromObject, [
        'enhancePrompt'
    ]);
    if (parentObject !== undefined && fromEnhancePrompt != null) setValueByPath(parentObject, [
        'parameters',
        'enhancePrompt'
    ], fromEnhancePrompt);
    const fromGenerateAudio = getValueByPath(fromObject, [
        'generateAudio'
    ]);
    if (parentObject !== undefined && fromGenerateAudio != null) setValueByPath(parentObject, [
        'parameters',
        'generateAudio'
    ], fromGenerateAudio);
    const fromLastFrame = getValueByPath(fromObject, [
        'lastFrame'
    ]);
    if (parentObject !== undefined && fromLastFrame != null) setValueByPath(parentObject, [
        'instances[0]',
        'lastFrame'
    ], imageToVertex(fromLastFrame));
    const fromCompressionQuality = getValueByPath(fromObject, [
        'compressionQuality'
    ]);
    if (parentObject !== undefined && fromCompressionQuality != null) setValueByPath(parentObject, [
        'parameters',
        'compressionQuality'
    ], fromCompressionQuality);
    return toObject;
}
function generateVideosParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        '_url',
        'model'
    ], tModel(apiClient, fromModel));
    const fromPrompt = getValueByPath(fromObject, [
        'prompt'
    ]);
    if (fromPrompt != null) setValueByPath(toObject, [
        'instances[0]',
        'prompt'
    ], fromPrompt);
    const fromImage = getValueByPath(fromObject, [
        'image'
    ]);
    if (fromImage != null) setValueByPath(toObject, [
        'instances[0]',
        'image'
    ], imageToVertex(fromImage));
    const fromVideo = getValueByPath(fromObject, [
        'video'
    ]);
    if (fromVideo != null) setValueByPath(toObject, [
        'instances[0]',
        'video'
    ], videoToVertex(fromVideo));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], generateVideosConfigToVertex(fromConfig, toObject));
    return toObject;
}
function videoMetadataFromMldev(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function blobFromMldev(fromObject) {
    const toObject = {};
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataFromMldev(fromObject) {
    const toObject = {};
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function partFromMldev(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataFromMldev(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobFromMldev(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataFromMldev(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function contentFromMldev(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partFromMldev(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function citationMetadataFromMldev(fromObject) {
    const toObject = {};
    const fromCitations = getValueByPath(fromObject, [
        'citationSources'
    ]);
    if (fromCitations != null) setValueByPath(toObject, [
        'citations'
    ], fromCitations);
    return toObject;
}
function urlMetadataFromMldev(fromObject) {
    const toObject = {};
    const fromRetrievedUrl = getValueByPath(fromObject, [
        'retrievedUrl'
    ]);
    if (fromRetrievedUrl != null) setValueByPath(toObject, [
        'retrievedUrl'
    ], fromRetrievedUrl);
    const fromUrlRetrievalStatus = getValueByPath(fromObject, [
        'urlRetrievalStatus'
    ]);
    if (fromUrlRetrievalStatus != null) setValueByPath(toObject, [
        'urlRetrievalStatus'
    ], fromUrlRetrievalStatus);
    return toObject;
}
function urlContextMetadataFromMldev(fromObject) {
    const toObject = {};
    const fromUrlMetadata = getValueByPath(fromObject, [
        'urlMetadata'
    ]);
    if (fromUrlMetadata != null) {
        let transformedList = fromUrlMetadata;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return urlMetadataFromMldev(item);
        });
        setValueByPath(toObject, [
            'urlMetadata'
        ], transformedList);
    }
    return toObject;
}
function candidateFromMldev(fromObject) {
    const toObject = {};
    const fromContent = getValueByPath(fromObject, [
        'content'
    ]);
    if (fromContent != null) setValueByPath(toObject, [
        'content'
    ], contentFromMldev(fromContent));
    const fromCitationMetadata = getValueByPath(fromObject, [
        'citationMetadata'
    ]);
    if (fromCitationMetadata != null) setValueByPath(toObject, [
        'citationMetadata'
    ], citationMetadataFromMldev(fromCitationMetadata));
    const fromTokenCount = getValueByPath(fromObject, [
        'tokenCount'
    ]);
    if (fromTokenCount != null) setValueByPath(toObject, [
        'tokenCount'
    ], fromTokenCount);
    const fromFinishReason = getValueByPath(fromObject, [
        'finishReason'
    ]);
    if (fromFinishReason != null) setValueByPath(toObject, [
        'finishReason'
    ], fromFinishReason);
    const fromUrlContextMetadata = getValueByPath(fromObject, [
        'urlContextMetadata'
    ]);
    if (fromUrlContextMetadata != null) setValueByPath(toObject, [
        'urlContextMetadata'
    ], urlContextMetadataFromMldev(fromUrlContextMetadata));
    const fromAvgLogprobs = getValueByPath(fromObject, [
        'avgLogprobs'
    ]);
    if (fromAvgLogprobs != null) setValueByPath(toObject, [
        'avgLogprobs'
    ], fromAvgLogprobs);
    const fromGroundingMetadata = getValueByPath(fromObject, [
        'groundingMetadata'
    ]);
    if (fromGroundingMetadata != null) setValueByPath(toObject, [
        'groundingMetadata'
    ], fromGroundingMetadata);
    const fromIndex = getValueByPath(fromObject, [
        'index'
    ]);
    if (fromIndex != null) setValueByPath(toObject, [
        'index'
    ], fromIndex);
    const fromLogprobsResult = getValueByPath(fromObject, [
        'logprobsResult'
    ]);
    if (fromLogprobsResult != null) setValueByPath(toObject, [
        'logprobsResult'
    ], fromLogprobsResult);
    const fromSafetyRatings = getValueByPath(fromObject, [
        'safetyRatings'
    ]);
    if (fromSafetyRatings != null) setValueByPath(toObject, [
        'safetyRatings'
    ], fromSafetyRatings);
    return toObject;
}
function generateContentResponseFromMldev(fromObject) {
    const toObject = {};
    const fromCandidates = getValueByPath(fromObject, [
        'candidates'
    ]);
    if (fromCandidates != null) {
        let transformedList = fromCandidates;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return candidateFromMldev(item);
        });
        setValueByPath(toObject, [
            'candidates'
        ], transformedList);
    }
    const fromModelVersion = getValueByPath(fromObject, [
        'modelVersion'
    ]);
    if (fromModelVersion != null) setValueByPath(toObject, [
        'modelVersion'
    ], fromModelVersion);
    const fromPromptFeedback = getValueByPath(fromObject, [
        'promptFeedback'
    ]);
    if (fromPromptFeedback != null) setValueByPath(toObject, [
        'promptFeedback'
    ], fromPromptFeedback);
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata'
    ]);
    if (fromUsageMetadata != null) setValueByPath(toObject, [
        'usageMetadata'
    ], fromUsageMetadata);
    return toObject;
}
function contentEmbeddingFromMldev(fromObject) {
    const toObject = {};
    const fromValues = getValueByPath(fromObject, [
        'values'
    ]);
    if (fromValues != null) setValueByPath(toObject, [
        'values'
    ], fromValues);
    return toObject;
}
function embedContentMetadataFromMldev() {
    const toObject = {};
    return toObject;
}
function embedContentResponseFromMldev(fromObject) {
    const toObject = {};
    const fromEmbeddings = getValueByPath(fromObject, [
        'embeddings'
    ]);
    if (fromEmbeddings != null) {
        let transformedList = fromEmbeddings;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return contentEmbeddingFromMldev(item);
        });
        setValueByPath(toObject, [
            'embeddings'
        ], transformedList);
    }
    const fromMetadata = getValueByPath(fromObject, [
        'metadata'
    ]);
    if (fromMetadata != null) setValueByPath(toObject, [
        'metadata'
    ], embedContentMetadataFromMldev());
    return toObject;
}
function imageFromMldev(fromObject) {
    const toObject = {};
    const fromImageBytes = getValueByPath(fromObject, [
        'bytesBase64Encoded'
    ]);
    if (fromImageBytes != null) setValueByPath(toObject, [
        'imageBytes'
    ], tBytes(fromImageBytes));
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function safetyAttributesFromMldev(fromObject) {
    const toObject = {};
    const fromCategories = getValueByPath(fromObject, [
        'safetyAttributes',
        'categories'
    ]);
    if (fromCategories != null) setValueByPath(toObject, [
        'categories'
    ], fromCategories);
    const fromScores = getValueByPath(fromObject, [
        'safetyAttributes',
        'scores'
    ]);
    if (fromScores != null) setValueByPath(toObject, [
        'scores'
    ], fromScores);
    const fromContentType = getValueByPath(fromObject, [
        'contentType'
    ]);
    if (fromContentType != null) setValueByPath(toObject, [
        'contentType'
    ], fromContentType);
    return toObject;
}
function generatedImageFromMldev(fromObject) {
    const toObject = {};
    const fromImage = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromImage != null) setValueByPath(toObject, [
        'image'
    ], imageFromMldev(fromImage));
    const fromRaiFilteredReason = getValueByPath(fromObject, [
        'raiFilteredReason'
    ]);
    if (fromRaiFilteredReason != null) setValueByPath(toObject, [
        'raiFilteredReason'
    ], fromRaiFilteredReason);
    const fromSafetyAttributes = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromSafetyAttributes != null) setValueByPath(toObject, [
        'safetyAttributes'
    ], safetyAttributesFromMldev(fromSafetyAttributes));
    return toObject;
}
function generateImagesResponseFromMldev(fromObject) {
    const toObject = {};
    const fromGeneratedImages = getValueByPath(fromObject, [
        'predictions'
    ]);
    if (fromGeneratedImages != null) {
        let transformedList = fromGeneratedImages;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return generatedImageFromMldev(item);
        });
        setValueByPath(toObject, [
            'generatedImages'
        ], transformedList);
    }
    const fromPositivePromptSafetyAttributes = getValueByPath(fromObject, [
        'positivePromptSafetyAttributes'
    ]);
    if (fromPositivePromptSafetyAttributes != null) setValueByPath(toObject, [
        'positivePromptSafetyAttributes'
    ], safetyAttributesFromMldev(fromPositivePromptSafetyAttributes));
    return toObject;
}
function tunedModelInfoFromMldev(fromObject) {
    const toObject = {};
    const fromBaseModel = getValueByPath(fromObject, [
        'baseModel'
    ]);
    if (fromBaseModel != null) setValueByPath(toObject, [
        'baseModel'
    ], fromBaseModel);
    const fromCreateTime = getValueByPath(fromObject, [
        'createTime'
    ]);
    if (fromCreateTime != null) setValueByPath(toObject, [
        'createTime'
    ], fromCreateTime);
    const fromUpdateTime = getValueByPath(fromObject, [
        'updateTime'
    ]);
    if (fromUpdateTime != null) setValueByPath(toObject, [
        'updateTime'
    ], fromUpdateTime);
    return toObject;
}
function modelFromMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromVersion = getValueByPath(fromObject, [
        'version'
    ]);
    if (fromVersion != null) setValueByPath(toObject, [
        'version'
    ], fromVersion);
    const fromTunedModelInfo = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromTunedModelInfo != null) setValueByPath(toObject, [
        'tunedModelInfo'
    ], tunedModelInfoFromMldev(fromTunedModelInfo));
    const fromInputTokenLimit = getValueByPath(fromObject, [
        'inputTokenLimit'
    ]);
    if (fromInputTokenLimit != null) setValueByPath(toObject, [
        'inputTokenLimit'
    ], fromInputTokenLimit);
    const fromOutputTokenLimit = getValueByPath(fromObject, [
        'outputTokenLimit'
    ]);
    if (fromOutputTokenLimit != null) setValueByPath(toObject, [
        'outputTokenLimit'
    ], fromOutputTokenLimit);
    const fromSupportedActions = getValueByPath(fromObject, [
        'supportedGenerationMethods'
    ]);
    if (fromSupportedActions != null) setValueByPath(toObject, [
        'supportedActions'
    ], fromSupportedActions);
    return toObject;
}
function listModelsResponseFromMldev(fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken'
    ]);
    if (fromNextPageToken != null) setValueByPath(toObject, [
        'nextPageToken'
    ], fromNextPageToken);
    const fromModels = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromModels != null) {
        let transformedList = tExtractModels(fromModels);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return modelFromMldev(item);
        });
        setValueByPath(toObject, [
            'models'
        ], transformedList);
    }
    return toObject;
}
function deleteModelResponseFromMldev() {
    const toObject = {};
    return toObject;
}
function countTokensResponseFromMldev(fromObject) {
    const toObject = {};
    const fromTotalTokens = getValueByPath(fromObject, [
        'totalTokens'
    ]);
    if (fromTotalTokens != null) setValueByPath(toObject, [
        'totalTokens'
    ], fromTotalTokens);
    const fromCachedContentTokenCount = getValueByPath(fromObject, [
        'cachedContentTokenCount'
    ]);
    if (fromCachedContentTokenCount != null) setValueByPath(toObject, [
        'cachedContentTokenCount'
    ], fromCachedContentTokenCount);
    return toObject;
}
function videoFromMldev$1(fromObject) {
    const toObject = {};
    const fromUri = getValueByPath(fromObject, [
        'video',
        'uri'
    ]);
    if (fromUri != null) setValueByPath(toObject, [
        'uri'
    ], fromUri);
    const fromVideoBytes = getValueByPath(fromObject, [
        'video',
        'encodedVideo'
    ]);
    if (fromVideoBytes != null) setValueByPath(toObject, [
        'videoBytes'
    ], tBytes(fromVideoBytes));
    const fromMimeType = getValueByPath(fromObject, [
        'encoding'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function generatedVideoFromMldev$1(fromObject) {
    const toObject = {};
    const fromVideo = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromVideo != null) setValueByPath(toObject, [
        'video'
    ], videoFromMldev$1(fromVideo));
    return toObject;
}
function generateVideosResponseFromMldev$1(fromObject) {
    const toObject = {};
    const fromGeneratedVideos = getValueByPath(fromObject, [
        'generatedSamples'
    ]);
    if (fromGeneratedVideos != null) {
        let transformedList = fromGeneratedVideos;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return generatedVideoFromMldev$1(item);
        });
        setValueByPath(toObject, [
            'generatedVideos'
        ], transformedList);
    }
    const fromRaiMediaFilteredCount = getValueByPath(fromObject, [
        'raiMediaFilteredCount'
    ]);
    if (fromRaiMediaFilteredCount != null) setValueByPath(toObject, [
        'raiMediaFilteredCount'
    ], fromRaiMediaFilteredCount);
    const fromRaiMediaFilteredReasons = getValueByPath(fromObject, [
        'raiMediaFilteredReasons'
    ]);
    if (fromRaiMediaFilteredReasons != null) setValueByPath(toObject, [
        'raiMediaFilteredReasons'
    ], fromRaiMediaFilteredReasons);
    return toObject;
}
function generateVideosOperationFromMldev$1(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromMetadata = getValueByPath(fromObject, [
        'metadata'
    ]);
    if (fromMetadata != null) setValueByPath(toObject, [
        'metadata'
    ], fromMetadata);
    const fromDone = getValueByPath(fromObject, [
        'done'
    ]);
    if (fromDone != null) setValueByPath(toObject, [
        'done'
    ], fromDone);
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], fromError);
    const fromResponse = getValueByPath(fromObject, [
        'response',
        'generateVideoResponse'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], generateVideosResponseFromMldev$1(fromResponse));
    return toObject;
}
function videoMetadataFromVertex(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function blobFromVertex(fromObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataFromVertex(fromObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function partFromVertex(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataFromVertex(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobFromVertex(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataFromVertex(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function contentFromVertex(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partFromVertex(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function citationMetadataFromVertex(fromObject) {
    const toObject = {};
    const fromCitations = getValueByPath(fromObject, [
        'citations'
    ]);
    if (fromCitations != null) setValueByPath(toObject, [
        'citations'
    ], fromCitations);
    return toObject;
}
function urlMetadataFromVertex(fromObject) {
    const toObject = {};
    const fromRetrievedUrl = getValueByPath(fromObject, [
        'retrievedUrl'
    ]);
    if (fromRetrievedUrl != null) setValueByPath(toObject, [
        'retrievedUrl'
    ], fromRetrievedUrl);
    const fromUrlRetrievalStatus = getValueByPath(fromObject, [
        'urlRetrievalStatus'
    ]);
    if (fromUrlRetrievalStatus != null) setValueByPath(toObject, [
        'urlRetrievalStatus'
    ], fromUrlRetrievalStatus);
    return toObject;
}
function urlContextMetadataFromVertex(fromObject) {
    const toObject = {};
    const fromUrlMetadata = getValueByPath(fromObject, [
        'urlMetadata'
    ]);
    if (fromUrlMetadata != null) {
        let transformedList = fromUrlMetadata;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return urlMetadataFromVertex(item);
        });
        setValueByPath(toObject, [
            'urlMetadata'
        ], transformedList);
    }
    return toObject;
}
function candidateFromVertex(fromObject) {
    const toObject = {};
    const fromContent = getValueByPath(fromObject, [
        'content'
    ]);
    if (fromContent != null) setValueByPath(toObject, [
        'content'
    ], contentFromVertex(fromContent));
    const fromCitationMetadata = getValueByPath(fromObject, [
        'citationMetadata'
    ]);
    if (fromCitationMetadata != null) setValueByPath(toObject, [
        'citationMetadata'
    ], citationMetadataFromVertex(fromCitationMetadata));
    const fromFinishMessage = getValueByPath(fromObject, [
        'finishMessage'
    ]);
    if (fromFinishMessage != null) setValueByPath(toObject, [
        'finishMessage'
    ], fromFinishMessage);
    const fromFinishReason = getValueByPath(fromObject, [
        'finishReason'
    ]);
    if (fromFinishReason != null) setValueByPath(toObject, [
        'finishReason'
    ], fromFinishReason);
    const fromUrlContextMetadata = getValueByPath(fromObject, [
        'urlContextMetadata'
    ]);
    if (fromUrlContextMetadata != null) setValueByPath(toObject, [
        'urlContextMetadata'
    ], urlContextMetadataFromVertex(fromUrlContextMetadata));
    const fromAvgLogprobs = getValueByPath(fromObject, [
        'avgLogprobs'
    ]);
    if (fromAvgLogprobs != null) setValueByPath(toObject, [
        'avgLogprobs'
    ], fromAvgLogprobs);
    const fromGroundingMetadata = getValueByPath(fromObject, [
        'groundingMetadata'
    ]);
    if (fromGroundingMetadata != null) setValueByPath(toObject, [
        'groundingMetadata'
    ], fromGroundingMetadata);
    const fromIndex = getValueByPath(fromObject, [
        'index'
    ]);
    if (fromIndex != null) setValueByPath(toObject, [
        'index'
    ], fromIndex);
    const fromLogprobsResult = getValueByPath(fromObject, [
        'logprobsResult'
    ]);
    if (fromLogprobsResult != null) setValueByPath(toObject, [
        'logprobsResult'
    ], fromLogprobsResult);
    const fromSafetyRatings = getValueByPath(fromObject, [
        'safetyRatings'
    ]);
    if (fromSafetyRatings != null) setValueByPath(toObject, [
        'safetyRatings'
    ], fromSafetyRatings);
    return toObject;
}
function generateContentResponseFromVertex(fromObject) {
    const toObject = {};
    const fromCandidates = getValueByPath(fromObject, [
        'candidates'
    ]);
    if (fromCandidates != null) {
        let transformedList = fromCandidates;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return candidateFromVertex(item);
        });
        setValueByPath(toObject, [
            'candidates'
        ], transformedList);
    }
    const fromCreateTime = getValueByPath(fromObject, [
        'createTime'
    ]);
    if (fromCreateTime != null) setValueByPath(toObject, [
        'createTime'
    ], fromCreateTime);
    const fromResponseId = getValueByPath(fromObject, [
        'responseId'
    ]);
    if (fromResponseId != null) setValueByPath(toObject, [
        'responseId'
    ], fromResponseId);
    const fromModelVersion = getValueByPath(fromObject, [
        'modelVersion'
    ]);
    if (fromModelVersion != null) setValueByPath(toObject, [
        'modelVersion'
    ], fromModelVersion);
    const fromPromptFeedback = getValueByPath(fromObject, [
        'promptFeedback'
    ]);
    if (fromPromptFeedback != null) setValueByPath(toObject, [
        'promptFeedback'
    ], fromPromptFeedback);
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata'
    ]);
    if (fromUsageMetadata != null) setValueByPath(toObject, [
        'usageMetadata'
    ], fromUsageMetadata);
    return toObject;
}
function contentEmbeddingStatisticsFromVertex(fromObject) {
    const toObject = {};
    const fromTruncated = getValueByPath(fromObject, [
        'truncated'
    ]);
    if (fromTruncated != null) setValueByPath(toObject, [
        'truncated'
    ], fromTruncated);
    const fromTokenCount = getValueByPath(fromObject, [
        'token_count'
    ]);
    if (fromTokenCount != null) setValueByPath(toObject, [
        'tokenCount'
    ], fromTokenCount);
    return toObject;
}
function contentEmbeddingFromVertex(fromObject) {
    const toObject = {};
    const fromValues = getValueByPath(fromObject, [
        'values'
    ]);
    if (fromValues != null) setValueByPath(toObject, [
        'values'
    ], fromValues);
    const fromStatistics = getValueByPath(fromObject, [
        'statistics'
    ]);
    if (fromStatistics != null) setValueByPath(toObject, [
        'statistics'
    ], contentEmbeddingStatisticsFromVertex(fromStatistics));
    return toObject;
}
function embedContentMetadataFromVertex(fromObject) {
    const toObject = {};
    const fromBillableCharacterCount = getValueByPath(fromObject, [
        'billableCharacterCount'
    ]);
    if (fromBillableCharacterCount != null) setValueByPath(toObject, [
        'billableCharacterCount'
    ], fromBillableCharacterCount);
    return toObject;
}
function embedContentResponseFromVertex(fromObject) {
    const toObject = {};
    const fromEmbeddings = getValueByPath(fromObject, [
        'predictions[]',
        'embeddings'
    ]);
    if (fromEmbeddings != null) {
        let transformedList = fromEmbeddings;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return contentEmbeddingFromVertex(item);
        });
        setValueByPath(toObject, [
            'embeddings'
        ], transformedList);
    }
    const fromMetadata = getValueByPath(fromObject, [
        'metadata'
    ]);
    if (fromMetadata != null) setValueByPath(toObject, [
        'metadata'
    ], embedContentMetadataFromVertex(fromMetadata));
    return toObject;
}
function imageFromVertex(fromObject) {
    const toObject = {};
    const fromGcsUri = getValueByPath(fromObject, [
        'gcsUri'
    ]);
    if (fromGcsUri != null) setValueByPath(toObject, [
        'gcsUri'
    ], fromGcsUri);
    const fromImageBytes = getValueByPath(fromObject, [
        'bytesBase64Encoded'
    ]);
    if (fromImageBytes != null) setValueByPath(toObject, [
        'imageBytes'
    ], tBytes(fromImageBytes));
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function safetyAttributesFromVertex(fromObject) {
    const toObject = {};
    const fromCategories = getValueByPath(fromObject, [
        'safetyAttributes',
        'categories'
    ]);
    if (fromCategories != null) setValueByPath(toObject, [
        'categories'
    ], fromCategories);
    const fromScores = getValueByPath(fromObject, [
        'safetyAttributes',
        'scores'
    ]);
    if (fromScores != null) setValueByPath(toObject, [
        'scores'
    ], fromScores);
    const fromContentType = getValueByPath(fromObject, [
        'contentType'
    ]);
    if (fromContentType != null) setValueByPath(toObject, [
        'contentType'
    ], fromContentType);
    return toObject;
}
function generatedImageFromVertex(fromObject) {
    const toObject = {};
    const fromImage = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromImage != null) setValueByPath(toObject, [
        'image'
    ], imageFromVertex(fromImage));
    const fromRaiFilteredReason = getValueByPath(fromObject, [
        'raiFilteredReason'
    ]);
    if (fromRaiFilteredReason != null) setValueByPath(toObject, [
        'raiFilteredReason'
    ], fromRaiFilteredReason);
    const fromSafetyAttributes = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromSafetyAttributes != null) setValueByPath(toObject, [
        'safetyAttributes'
    ], safetyAttributesFromVertex(fromSafetyAttributes));
    const fromEnhancedPrompt = getValueByPath(fromObject, [
        'prompt'
    ]);
    if (fromEnhancedPrompt != null) setValueByPath(toObject, [
        'enhancedPrompt'
    ], fromEnhancedPrompt);
    return toObject;
}
function generateImagesResponseFromVertex(fromObject) {
    const toObject = {};
    const fromGeneratedImages = getValueByPath(fromObject, [
        'predictions'
    ]);
    if (fromGeneratedImages != null) {
        let transformedList = fromGeneratedImages;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return generatedImageFromVertex(item);
        });
        setValueByPath(toObject, [
            'generatedImages'
        ], transformedList);
    }
    const fromPositivePromptSafetyAttributes = getValueByPath(fromObject, [
        'positivePromptSafetyAttributes'
    ]);
    if (fromPositivePromptSafetyAttributes != null) setValueByPath(toObject, [
        'positivePromptSafetyAttributes'
    ], safetyAttributesFromVertex(fromPositivePromptSafetyAttributes));
    return toObject;
}
function editImageResponseFromVertex(fromObject) {
    const toObject = {};
    const fromGeneratedImages = getValueByPath(fromObject, [
        'predictions'
    ]);
    if (fromGeneratedImages != null) {
        let transformedList = fromGeneratedImages;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return generatedImageFromVertex(item);
        });
        setValueByPath(toObject, [
            'generatedImages'
        ], transformedList);
    }
    return toObject;
}
function upscaleImageResponseFromVertex(fromObject) {
    const toObject = {};
    const fromGeneratedImages = getValueByPath(fromObject, [
        'predictions'
    ]);
    if (fromGeneratedImages != null) {
        let transformedList = fromGeneratedImages;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return generatedImageFromVertex(item);
        });
        setValueByPath(toObject, [
            'generatedImages'
        ], transformedList);
    }
    return toObject;
}
function endpointFromVertex(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'endpoint'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromDeployedModelId = getValueByPath(fromObject, [
        'deployedModelId'
    ]);
    if (fromDeployedModelId != null) setValueByPath(toObject, [
        'deployedModelId'
    ], fromDeployedModelId);
    return toObject;
}
function tunedModelInfoFromVertex(fromObject) {
    const toObject = {};
    const fromBaseModel = getValueByPath(fromObject, [
        'labels',
        'google-vertex-llm-tuning-base-model-id'
    ]);
    if (fromBaseModel != null) setValueByPath(toObject, [
        'baseModel'
    ], fromBaseModel);
    const fromCreateTime = getValueByPath(fromObject, [
        'createTime'
    ]);
    if (fromCreateTime != null) setValueByPath(toObject, [
        'createTime'
    ], fromCreateTime);
    const fromUpdateTime = getValueByPath(fromObject, [
        'updateTime'
    ]);
    if (fromUpdateTime != null) setValueByPath(toObject, [
        'updateTime'
    ], fromUpdateTime);
    return toObject;
}
function checkpointFromVertex(fromObject) {
    const toObject = {};
    const fromCheckpointId = getValueByPath(fromObject, [
        'checkpointId'
    ]);
    if (fromCheckpointId != null) setValueByPath(toObject, [
        'checkpointId'
    ], fromCheckpointId);
    const fromEpoch = getValueByPath(fromObject, [
        'epoch'
    ]);
    if (fromEpoch != null) setValueByPath(toObject, [
        'epoch'
    ], fromEpoch);
    const fromStep = getValueByPath(fromObject, [
        'step'
    ]);
    if (fromStep != null) setValueByPath(toObject, [
        'step'
    ], fromStep);
    return toObject;
}
function modelFromVertex(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromDisplayName = getValueByPath(fromObject, [
        'displayName'
    ]);
    if (fromDisplayName != null) setValueByPath(toObject, [
        'displayName'
    ], fromDisplayName);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromVersion = getValueByPath(fromObject, [
        'versionId'
    ]);
    if (fromVersion != null) setValueByPath(toObject, [
        'version'
    ], fromVersion);
    const fromEndpoints = getValueByPath(fromObject, [
        'deployedModels'
    ]);
    if (fromEndpoints != null) {
        let transformedList = fromEndpoints;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return endpointFromVertex(item);
        });
        setValueByPath(toObject, [
            'endpoints'
        ], transformedList);
    }
    const fromLabels = getValueByPath(fromObject, [
        'labels'
    ]);
    if (fromLabels != null) setValueByPath(toObject, [
        'labels'
    ], fromLabels);
    const fromTunedModelInfo = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromTunedModelInfo != null) setValueByPath(toObject, [
        'tunedModelInfo'
    ], tunedModelInfoFromVertex(fromTunedModelInfo));
    const fromDefaultCheckpointId = getValueByPath(fromObject, [
        'defaultCheckpointId'
    ]);
    if (fromDefaultCheckpointId != null) setValueByPath(toObject, [
        'defaultCheckpointId'
    ], fromDefaultCheckpointId);
    const fromCheckpoints = getValueByPath(fromObject, [
        'checkpoints'
    ]);
    if (fromCheckpoints != null) {
        let transformedList = fromCheckpoints;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return checkpointFromVertex(item);
        });
        setValueByPath(toObject, [
            'checkpoints'
        ], transformedList);
    }
    return toObject;
}
function listModelsResponseFromVertex(fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken'
    ]);
    if (fromNextPageToken != null) setValueByPath(toObject, [
        'nextPageToken'
    ], fromNextPageToken);
    const fromModels = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromModels != null) {
        let transformedList = tExtractModels(fromModels);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return modelFromVertex(item);
        });
        setValueByPath(toObject, [
            'models'
        ], transformedList);
    }
    return toObject;
}
function deleteModelResponseFromVertex() {
    const toObject = {};
    return toObject;
}
function countTokensResponseFromVertex(fromObject) {
    const toObject = {};
    const fromTotalTokens = getValueByPath(fromObject, [
        'totalTokens'
    ]);
    if (fromTotalTokens != null) setValueByPath(toObject, [
        'totalTokens'
    ], fromTotalTokens);
    return toObject;
}
function computeTokensResponseFromVertex(fromObject) {
    const toObject = {};
    const fromTokensInfo = getValueByPath(fromObject, [
        'tokensInfo'
    ]);
    if (fromTokensInfo != null) setValueByPath(toObject, [
        'tokensInfo'
    ], fromTokensInfo);
    return toObject;
}
function videoFromVertex$1(fromObject) {
    const toObject = {};
    const fromUri = getValueByPath(fromObject, [
        'gcsUri'
    ]);
    if (fromUri != null) setValueByPath(toObject, [
        'uri'
    ], fromUri);
    const fromVideoBytes = getValueByPath(fromObject, [
        'bytesBase64Encoded'
    ]);
    if (fromVideoBytes != null) setValueByPath(toObject, [
        'videoBytes'
    ], tBytes(fromVideoBytes));
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function generatedVideoFromVertex$1(fromObject) {
    const toObject = {};
    const fromVideo = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromVideo != null) setValueByPath(toObject, [
        'video'
    ], videoFromVertex$1(fromVideo));
    return toObject;
}
function generateVideosResponseFromVertex$1(fromObject) {
    const toObject = {};
    const fromGeneratedVideos = getValueByPath(fromObject, [
        'videos'
    ]);
    if (fromGeneratedVideos != null) {
        let transformedList = fromGeneratedVideos;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return generatedVideoFromVertex$1(item);
        });
        setValueByPath(toObject, [
            'generatedVideos'
        ], transformedList);
    }
    const fromRaiMediaFilteredCount = getValueByPath(fromObject, [
        'raiMediaFilteredCount'
    ]);
    if (fromRaiMediaFilteredCount != null) setValueByPath(toObject, [
        'raiMediaFilteredCount'
    ], fromRaiMediaFilteredCount);
    const fromRaiMediaFilteredReasons = getValueByPath(fromObject, [
        'raiMediaFilteredReasons'
    ]);
    if (fromRaiMediaFilteredReasons != null) setValueByPath(toObject, [
        'raiMediaFilteredReasons'
    ], fromRaiMediaFilteredReasons);
    return toObject;
}
function generateVideosOperationFromVertex$1(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromMetadata = getValueByPath(fromObject, [
        'metadata'
    ]);
    if (fromMetadata != null) setValueByPath(toObject, [
        'metadata'
    ], fromMetadata);
    const fromDone = getValueByPath(fromObject, [
        'done'
    ]);
    if (fromDone != null) setValueByPath(toObject, [
        'done'
    ], fromDone);
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], fromError);
    const fromResponse = getValueByPath(fromObject, [
        'response'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], generateVideosResponseFromVertex$1(fromResponse));
    return toObject;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const CONTENT_TYPE_HEADER = 'Content-Type';
const SERVER_TIMEOUT_HEADER = 'X-Server-Timeout';
const USER_AGENT_HEADER = 'User-Agent';
const GOOGLE_API_CLIENT_HEADER = 'x-goog-api-client';
const SDK_VERSION = '1.8.0'; // x-release-please-version
const LIBRARY_LABEL = `google-genai-sdk/${SDK_VERSION}`;
const VERTEX_AI_API_DEFAULT_VERSION = 'v1beta1';
const GOOGLE_AI_API_DEFAULT_VERSION = 'v1beta';
const responseLineRE = /^data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * The ApiClient class is used to send requests to the Gemini API or Vertex AI
 * endpoints.
 */ class ApiClient {
    constructor(opts){
        var _a, _b;
        this.clientOptions = Object.assign(Object.assign({}, opts), {
            project: opts.project,
            location: opts.location,
            apiKey: opts.apiKey,
            vertexai: opts.vertexai
        });
        const initHttpOptions = {};
        if (this.clientOptions.vertexai) {
            initHttpOptions.apiVersion = (_a = this.clientOptions.apiVersion) !== null && _a !== void 0 ? _a : VERTEX_AI_API_DEFAULT_VERSION;
            initHttpOptions.baseUrl = this.baseUrlFromProjectLocation();
            this.normalizeAuthParameters();
        } else {
            // Gemini API
            initHttpOptions.apiVersion = (_b = this.clientOptions.apiVersion) !== null && _b !== void 0 ? _b : GOOGLE_AI_API_DEFAULT_VERSION;
            initHttpOptions.baseUrl = `https://generativelanguage.googleapis.com/`;
        }
        initHttpOptions.headers = this.getDefaultHeaders();
        this.clientOptions.httpOptions = initHttpOptions;
        if (opts.httpOptions) this.clientOptions.httpOptions = this.patchHttpOptions(initHttpOptions, opts.httpOptions);
    }
    /**
     * Determines the base URL for Vertex AI based on project and location.
     * Uses the global endpoint if location is 'global' or if project/location
     * are not specified (implying API key usage).
     * @private
     */ baseUrlFromProjectLocation() {
        if (this.clientOptions.project && this.clientOptions.location && this.clientOptions.location !== 'global') // Regional endpoint
        return `https://${this.clientOptions.location}-aiplatform.googleapis.com/`;
        // Global endpoint (covers 'global' location and API key usage)
        return `https://aiplatform.googleapis.com/`;
    }
    /**
     * Normalizes authentication parameters for Vertex AI.
     * If project and location are provided, API key is cleared.
     * If project and location are not provided (implying API key usage),
     * project and location are cleared.
     * @private
     */ normalizeAuthParameters() {
        if (this.clientOptions.project && this.clientOptions.location) {
            // Using project/location for auth, clear potential API key
            this.clientOptions.apiKey = undefined;
            return;
        }
        // Using API key for auth (or no auth provided yet), clear project/location
        this.clientOptions.project = undefined;
        this.clientOptions.location = undefined;
    }
    isVertexAI() {
        var _a;
        return (_a = this.clientOptions.vertexai) !== null && _a !== void 0 ? _a : false;
    }
    getProject() {
        return this.clientOptions.project;
    }
    getLocation() {
        return this.clientOptions.location;
    }
    getApiVersion() {
        if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.apiVersion !== undefined) return this.clientOptions.httpOptions.apiVersion;
        throw new Error('API version is not set.');
    }
    getBaseUrl() {
        if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.baseUrl !== undefined) return this.clientOptions.httpOptions.baseUrl;
        throw new Error('Base URL is not set.');
    }
    getRequestUrl() {
        return this.getRequestUrlInternal(this.clientOptions.httpOptions);
    }
    getHeaders() {
        if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.headers !== undefined) return this.clientOptions.httpOptions.headers;
        else throw new Error('Headers are not set.');
    }
    getRequestUrlInternal(httpOptions) {
        if (!httpOptions || httpOptions.baseUrl === undefined || httpOptions.apiVersion === undefined) throw new Error('HTTP options are not correctly set.');
        const baseUrl = httpOptions.baseUrl.endsWith('/') ? httpOptions.baseUrl.slice(0, -1) : httpOptions.baseUrl;
        const urlElement = [
            baseUrl
        ];
        if (httpOptions.apiVersion && httpOptions.apiVersion !== '') urlElement.push(httpOptions.apiVersion);
        return urlElement.join('/');
    }
    getBaseResourcePath() {
        return `projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`;
    }
    getApiKey() {
        return this.clientOptions.apiKey;
    }
    getWebsocketBaseUrl() {
        const baseUrl = this.getBaseUrl();
        const urlParts = new URL(baseUrl);
        urlParts.protocol = urlParts.protocol == 'http:' ? 'ws' : 'wss';
        return urlParts.toString();
    }
    setBaseUrl(url) {
        if (this.clientOptions.httpOptions) this.clientOptions.httpOptions.baseUrl = url;
        else throw new Error('HTTP options are not correctly set.');
    }
    constructUrl(path, httpOptions, prependProjectLocation) {
        const urlElement = [
            this.getRequestUrlInternal(httpOptions)
        ];
        if (prependProjectLocation) urlElement.push(this.getBaseResourcePath());
        if (path !== '') urlElement.push(path);
        const url = new URL(`${urlElement.join('/')}`);
        return url;
    }
    shouldPrependVertexProjectPath(request) {
        if (this.clientOptions.apiKey) return false;
        if (!this.clientOptions.vertexai) return false;
        if (request.path.startsWith('projects/')) // Assume the path already starts with
        // `projects/<project>/location/<location>`.
        return false;
        if (request.httpMethod === 'GET' && request.path.startsWith('publishers/google/models')) // These paths are used by Vertex's models.get and models.list
        // calls. For base models Vertex does not accept a project/location
        // prefix (for tuned model the prefix is required).
        return false;
        return true;
    }
    async request(request) {
        let patchedHttpOptions = this.clientOptions.httpOptions;
        if (request.httpOptions) patchedHttpOptions = this.patchHttpOptions(this.clientOptions.httpOptions, request.httpOptions);
        const prependProjectLocation = this.shouldPrependVertexProjectPath(request);
        const url = this.constructUrl(request.path, patchedHttpOptions, prependProjectLocation);
        if (request.queryParams) for (const [key, value] of Object.entries(request.queryParams))url.searchParams.append(key, String(value));
        let requestInit = {};
        if (request.httpMethod === 'GET') {
            if (request.body && request.body !== '{}') throw new Error('Request body should be empty for GET request, but got non empty request body');
        } else requestInit.body = request.body;
        requestInit = await this.includeExtraHttpOptionsToRequestInit(requestInit, patchedHttpOptions, request.abortSignal);
        return this.unaryApiCall(url, requestInit, request.httpMethod);
    }
    patchHttpOptions(baseHttpOptions, requestHttpOptions) {
        const patchedHttpOptions = JSON.parse(JSON.stringify(baseHttpOptions));
        for (const [key, value] of Object.entries(requestHttpOptions)){
            // Records compile to objects.
            if (typeof value === 'object') // @ts-expect-error TS2345TS7053: Element implicitly has an 'any' type
            // because expression of type 'string' can't be used to index type
            // 'HttpOptions'.
            patchedHttpOptions[key] = Object.assign(Object.assign({}, patchedHttpOptions[key]), value);
            else if (value !== undefined) // @ts-expect-error TS2345TS7053: Element implicitly has an 'any' type
            // because expression of type 'string' can't be used to index type
            // 'HttpOptions'.
            patchedHttpOptions[key] = value;
        }
        return patchedHttpOptions;
    }
    async requestStream(request) {
        let patchedHttpOptions = this.clientOptions.httpOptions;
        if (request.httpOptions) patchedHttpOptions = this.patchHttpOptions(this.clientOptions.httpOptions, request.httpOptions);
        const prependProjectLocation = this.shouldPrependVertexProjectPath(request);
        const url = this.constructUrl(request.path, patchedHttpOptions, prependProjectLocation);
        if (!url.searchParams.has('alt') || url.searchParams.get('alt') !== 'sse') url.searchParams.set('alt', 'sse');
        let requestInit = {};
        requestInit.body = request.body;
        requestInit = await this.includeExtraHttpOptionsToRequestInit(requestInit, patchedHttpOptions, request.abortSignal);
        return this.streamApiCall(url, requestInit, request.httpMethod);
    }
    async includeExtraHttpOptionsToRequestInit(requestInit, httpOptions, abortSignal) {
        if (httpOptions && httpOptions.timeout || abortSignal) {
            const abortController = new AbortController();
            const signal = abortController.signal;
            if (httpOptions.timeout && (httpOptions === null || httpOptions === void 0 ? void 0 : httpOptions.timeout) > 0) setTimeout(()=>abortController.abort(), httpOptions.timeout);
            if (abortSignal) abortSignal.addEventListener('abort', ()=>{
                abortController.abort();
            });
            requestInit.signal = signal;
        }
        if (httpOptions && httpOptions.extraBody !== null) includeExtraBodyToRequestInit(requestInit, httpOptions.extraBody);
        requestInit.headers = await this.getHeadersInternal(httpOptions);
        return requestInit;
    }
    async unaryApiCall(url, requestInit, httpMethod) {
        return this.apiCall(url.toString(), Object.assign(Object.assign({}, requestInit), {
            method: httpMethod
        })).then(async (response)=>{
            await throwErrorIfNotOK(response);
            return new HttpResponse(response);
        }).catch((e)=>{
            if (e instanceof Error) throw e;
            else throw new Error(JSON.stringify(e));
        });
    }
    async streamApiCall(url, requestInit, httpMethod) {
        return this.apiCall(url.toString(), Object.assign(Object.assign({}, requestInit), {
            method: httpMethod
        })).then(async (response)=>{
            await throwErrorIfNotOK(response);
            return this.processStreamResponse(response);
        }).catch((e)=>{
            if (e instanceof Error) throw e;
            else throw new Error(JSON.stringify(e));
        });
    }
    processStreamResponse(response) {
        var _a;
        return __asyncGenerator(this, arguments, function* processStreamResponse_1() {
            const reader = (_a = response === null || response === void 0 ? void 0 : response.body) === null || _a === void 0 ? void 0 : _a.getReader();
            const decoder = new TextDecoder('utf-8');
            if (!reader) throw new Error('Response body is empty');
            try {
                let buffer = '';
                while(true){
                    const { done, value } = yield __await(reader.read());
                    if (done) {
                        if (buffer.trim().length > 0) throw new Error('Incomplete JSON segment at the end');
                        break;
                    }
                    const chunkString = decoder.decode(value);
                    // Parse and throw an error if the chunk contains an error.
                    try {
                        const chunkJson = JSON.parse(chunkString);
                        if ('error' in chunkJson) {
                            const errorJson = JSON.parse(JSON.stringify(chunkJson['error']));
                            const status = errorJson['status'];
                            const code = errorJson['code'];
                            const errorMessage = `got status: ${status}. ${JSON.stringify(chunkJson)}`;
                            if (code >= 400 && code < 600) {
                                const apiError = new ApiError({
                                    message: errorMessage,
                                    status: code
                                });
                                throw apiError;
                            }
                        }
                    } catch (e) {
                        const error = e;
                        if (error.name === 'ApiError') throw e;
                    }
                    buffer += chunkString;
                    let match = buffer.match(responseLineRE);
                    while(match){
                        const processedChunkString = match[1];
                        try {
                            const partialResponse = new Response(processedChunkString, {
                                headers: response === null || response === void 0 ? void 0 : response.headers,
                                status: response === null || response === void 0 ? void 0 : response.status,
                                statusText: response === null || response === void 0 ? void 0 : response.statusText
                            });
                            yield yield __await(new HttpResponse(partialResponse));
                            buffer = buffer.slice(match[0].length);
                            match = buffer.match(responseLineRE);
                        } catch (e) {
                            throw new Error(`exception parsing stream chunk ${processedChunkString}. ${e}`);
                        }
                    }
                }
            } finally{
                reader.releaseLock();
            }
        });
    }
    async apiCall(url, requestInit) {
        return fetch(url, requestInit).catch((e)=>{
            throw new Error(`exception ${e} sending request`);
        });
    }
    getDefaultHeaders() {
        const headers = {};
        const versionHeaderValue = LIBRARY_LABEL + ' ' + this.clientOptions.userAgentExtra;
        headers[USER_AGENT_HEADER] = versionHeaderValue;
        headers[GOOGLE_API_CLIENT_HEADER] = versionHeaderValue;
        headers[CONTENT_TYPE_HEADER] = 'application/json';
        return headers;
    }
    async getHeadersInternal(httpOptions) {
        const headers = new Headers();
        if (httpOptions && httpOptions.headers) {
            for (const [key, value] of Object.entries(httpOptions.headers))headers.append(key, value);
            // Append a timeout header if it is set, note that the timeout option is
            // in milliseconds but the header is in seconds.
            if (httpOptions.timeout && httpOptions.timeout > 0) headers.append(SERVER_TIMEOUT_HEADER, String(Math.ceil(httpOptions.timeout / 1000)));
        }
        await this.clientOptions.auth.addAuthHeaders(headers);
        return headers;
    }
    /**
     * Uploads a file asynchronously using Gemini API only, this is not supported
     * in Vertex AI.
     *
     * @param file The string path to the file to be uploaded or a Blob object.
     * @param config Optional parameters specified in the `UploadFileConfig`
     *     interface. @see {@link UploadFileConfig}
     * @return A promise that resolves to a `File` object.
     * @throws An error if called on a Vertex AI client.
     * @throws An error if the `mimeType` is not provided and can not be inferred,
     */ async uploadFile(file, config) {
        var _a;
        const fileToUpload = {};
        if (config != null) {
            fileToUpload.mimeType = config.mimeType;
            fileToUpload.name = config.name;
            fileToUpload.displayName = config.displayName;
        }
        if (fileToUpload.name && !fileToUpload.name.startsWith('files/')) fileToUpload.name = `files/${fileToUpload.name}`;
        const uploader = this.clientOptions.uploader;
        const fileStat = await uploader.stat(file);
        fileToUpload.sizeBytes = String(fileStat.size);
        const mimeType = (_a = config === null || config === void 0 ? void 0 : config.mimeType) !== null && _a !== void 0 ? _a : fileStat.type;
        if (mimeType === undefined || mimeType === '') throw new Error('Can not determine mimeType. Please provide mimeType in the config.');
        fileToUpload.mimeType = mimeType;
        const uploadUrl = await this.fetchUploadUrl(fileToUpload, config);
        return uploader.upload(file, uploadUrl, this);
    }
    /**
     * Downloads a file asynchronously to the specified path.
     *
     * @params params - The parameters for the download request, see {@link
     * DownloadFileParameters}
     */ async downloadFile(params) {
        const downloader = this.clientOptions.downloader;
        await downloader.download(params, this);
    }
    async fetchUploadUrl(file, config) {
        var _a;
        let httpOptions = {};
        if (config === null || config === void 0 ? void 0 : config.httpOptions) httpOptions = config.httpOptions;
        else httpOptions = {
            apiVersion: '',
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Upload-Protocol': 'resumable',
                'X-Goog-Upload-Command': 'start',
                'X-Goog-Upload-Header-Content-Length': `${file.sizeBytes}`,
                'X-Goog-Upload-Header-Content-Type': `${file.mimeType}`
            }
        };
        const body = {
            'file': file
        };
        const httpResponse = await this.request({
            path: formatMap('upload/v1beta/files', body['_url']),
            body: JSON.stringify(body),
            httpMethod: 'POST',
            httpOptions
        });
        if (!httpResponse || !(httpResponse === null || httpResponse === void 0 ? void 0 : httpResponse.headers)) throw new Error('Server did not return an HttpResponse or the returned HttpResponse did not have headers.');
        const uploadUrl = (_a = httpResponse === null || httpResponse === void 0 ? void 0 : httpResponse.headers) === null || _a === void 0 ? void 0 : _a['x-goog-upload-url'];
        if (uploadUrl === undefined) throw new Error('Failed to get upload url. Server did not return the x-google-upload-url in the headers');
        return uploadUrl;
    }
}
async function throwErrorIfNotOK(response) {
    var _a;
    if (response === undefined) throw new Error('response is undefined');
    if (!response.ok) {
        const status = response.status;
        let errorBody;
        if ((_a = response.headers.get('content-type')) === null || _a === void 0 ? void 0 : _a.includes('application/json')) errorBody = await response.json();
        else errorBody = {
            error: {
                message: await response.text(),
                code: response.status,
                status: response.statusText
            }
        };
        const errorMessage = JSON.stringify(errorBody);
        if (status >= 400 && status < 600) {
            const apiError = new ApiError({
                message: errorMessage,
                status: status
            });
            throw apiError;
        }
        throw new Error(errorMessage);
    }
}
/**
 * Recursively updates the `requestInit.body` with values from an `extraBody` object.
 *
 * If `requestInit.body` is a string, it's assumed to be JSON and will be parsed.
 * The `extraBody` is then deeply merged into this parsed object.
 * If `requestInit.body` is a Blob, `extraBody` will be ignored, and a warning logged,
 * as merging structured data into an opaque Blob is not supported.
 *
 * The function does not enforce that updated values from `extraBody` have the
 * same type as existing values in `requestInit.body`. Type mismatches during
 * the merge will result in a warning, but the value from `extraBody` will overwrite
 * the original. `extraBody` users are responsible for ensuring `extraBody` has the correct structure.
 *
 * @param requestInit The RequestInit object whose body will be updated.
 * @param extraBody The object containing updates to be merged into `requestInit.body`.
 */ function includeExtraBodyToRequestInit(requestInit, extraBody) {
    if (!extraBody || Object.keys(extraBody).length === 0) return;
    if (requestInit.body instanceof Blob) {
        console.warn('includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.');
        return;
    }
    let currentBodyObject = {};
    // If adding new type to HttpRequest.body, please check the code below to
    // see if we need to update the logic.
    if (typeof requestInit.body === 'string' && requestInit.body.length > 0) try {
        const parsedBody = JSON.parse(requestInit.body);
        if (typeof parsedBody === 'object' && parsedBody !== null && !Array.isArray(parsedBody)) currentBodyObject = parsedBody;
        else {
            console.warn('includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.');
            return;
        }
    /*  eslint-disable-next-line @typescript-eslint/no-unused-vars */ } catch (e) {
        console.warn('includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.');
        return;
    }
    function deepMerge(target, source) {
        const output = Object.assign({}, target);
        for(const key in source)if (Object.prototype.hasOwnProperty.call(source, key)) {
            const sourceValue = source[key];
            const targetValue = output[key];
            if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue) && targetValue && typeof targetValue === 'object' && !Array.isArray(targetValue)) output[key] = deepMerge(targetValue, sourceValue);
            else {
                if (targetValue && sourceValue && typeof targetValue !== typeof sourceValue) console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${key}". Original type: ${typeof targetValue}, New type: ${typeof sourceValue}. Overwriting.`);
                output[key] = sourceValue;
            }
        }
        return output;
    }
    const mergedBody = deepMerge(currentBodyObject, extraBody);
    requestInit.body = JSON.stringify(mergedBody);
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ // TODO: b/416041229 - Determine how to retrieve the MCP package version.
const MCP_LABEL = 'mcp_used/unknown';
// Checks whether the list of tools contains any MCP tools.
function hasMcpToolUsage(tools) {
    for (const tool of tools){
        if (isMcpCallableTool(tool)) return true;
        if (typeof tool === 'object' && 'inputSchema' in tool) return true;
    }
    return false;
}
// Sets the MCP version label in the Google API client header.
function setMcpUsageHeader(headers) {
    var _a;
    const existingHeader = (_a = headers[GOOGLE_API_CLIENT_HEADER]) !== null && _a !== void 0 ? _a : '';
    headers[GOOGLE_API_CLIENT_HEADER] = (existingHeader + ` ${MCP_LABEL}`).trimStart();
}
// Checks whether the list of tools contains any MCP clients. Will return true
// if there is at least one MCP client.
function hasMcpClientTools(params) {
    var _a, _b, _c;
    return (_c = (_b = (_a = params.config) === null || _a === void 0 ? void 0 : _a.tools) === null || _b === void 0 ? void 0 : _b.some((tool)=>isMcpCallableTool(tool))) !== null && _c !== void 0 ? _c : false;
}
// Checks whether the list of tools contains any non-MCP tools. Will return true
// if there is at least one non-MCP tool.
function hasNonMcpTools(params) {
    var _a, _b, _c;
    return (_c = (_b = (_a = params.config) === null || _a === void 0 ? void 0 : _a.tools) === null || _b === void 0 ? void 0 : _b.some((tool)=>!isMcpCallableTool(tool))) !== null && _c !== void 0 ? _c : false;
}
// Returns true if the object is a MCP CallableTool, otherwise false.
function isMcpCallableTool(object) {
    return object !== null && typeof object === 'object' && object instanceof McpCallableTool;
}
// List all tools from the MCP client.
function listAllTools(mcpClient, maxTools = 100) {
    return __asyncGenerator(this, arguments, function* listAllTools_1() {
        let cursor = undefined;
        let numTools = 0;
        while(numTools < maxTools){
            const t = yield __await(mcpClient.listTools({
                cursor
            }));
            for (const tool of t.tools){
                yield yield __await(tool);
                numTools++;
            }
            if (!t.nextCursor) break;
            cursor = t.nextCursor;
        }
    });
}
/**
 * McpCallableTool can be used for model inference and invoking MCP clients with
 * given function call arguments.
 *
 * @experimental Built-in MCP support is an experimental feature, may change in future
 * versions.
 */ class McpCallableTool {
    constructor(mcpClients = [], config){
        this.mcpTools = [];
        this.functionNameToMcpClient = {};
        this.mcpClients = mcpClients;
        this.config = config;
    }
    /**
     * Creates a McpCallableTool.
     */ static create(mcpClients, config) {
        return new McpCallableTool(mcpClients, config);
    }
    /**
     * Validates the function names are not duplicate and initialize the function
     * name to MCP client mapping.
     *
     * @throws {Error} if the MCP tools from the MCP clients have duplicate tool
     *     names.
     */ async initialize() {
        var _a, e_1, _b, _c;
        if (this.mcpTools.length > 0) return;
        const functionMap = {};
        const mcpTools = [];
        for (const mcpClient of this.mcpClients)try {
            for(var _d = true, _e = (e_1 = void 0, __asyncValues(listAllTools(mcpClient))), _f; _f = await _e.next(), _a = _f.done, !_a; _d = true){
                _c = _f.value;
                _d = false;
                const mcpTool = _c;
                mcpTools.push(mcpTool);
                const mcpToolName = mcpTool.name;
                if (functionMap[mcpToolName]) throw new Error(`Duplicate function name ${mcpToolName} found in MCP tools. Please ensure function names are unique.`);
                functionMap[mcpToolName] = mcpClient;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_d && !_a && (_b = _e.return)) await _b.call(_e);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        this.mcpTools = mcpTools;
        this.functionNameToMcpClient = functionMap;
    }
    async tool() {
        await this.initialize();
        return mcpToolsToGeminiTool(this.mcpTools, this.config);
    }
    async callTool(functionCalls) {
        await this.initialize();
        const functionCallResponseParts = [];
        for (const functionCall of functionCalls)if (functionCall.name in this.functionNameToMcpClient) {
            const mcpClient = this.functionNameToMcpClient[functionCall.name];
            let requestOptions = undefined;
            // TODO: b/424238654 - Add support for finer grained timeout control.
            if (this.config.timeout) requestOptions = {
                timeout: this.config.timeout
            };
            const callToolResponse = await mcpClient.callTool({
                name: functionCall.name,
                arguments: functionCall.args
            }, // Set the result schema to undefined to allow MCP to rely on the
            // default schema.
            undefined, requestOptions);
            functionCallResponseParts.push({
                functionResponse: {
                    name: functionCall.name,
                    response: callToolResponse.isError ? {
                        error: callToolResponse
                    } : callToolResponse
                }
            });
        }
        return functionCallResponseParts;
    }
}
function isMcpClient(client) {
    return client !== null && typeof client === 'object' && 'listTools' in client && typeof client.listTools === 'function';
}
/**
 * Creates a McpCallableTool from MCP clients and an optional config.
 *
 * The callable tool can invoke the MCP clients with given function call
 * arguments. (often for automatic function calling).
 * Use the config to modify tool parameters such as behavior.
 *
 * @experimental Built-in MCP support is an experimental feature, may change in future
 * versions.
 */ function mcpToTool(...args) {
    if (args.length === 0) throw new Error('No MCP clients provided');
    const maybeConfig = args[args.length - 1];
    if (isMcpClient(maybeConfig)) return McpCallableTool.create(args, {});
    return McpCallableTool.create(args.slice(0, args.length - 1), maybeConfig);
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Handles incoming messages from the WebSocket.
 *
 * @remarks
 * This function is responsible for parsing incoming messages, transforming them
 * into LiveMusicServerMessage, and then calling the onmessage callback.
 * Note that the first message which is received from the server is a
 * setupComplete message.
 *
 * @param apiClient The ApiClient instance.
 * @param onmessage The user-provided onmessage callback (if any).
 * @param event The MessageEvent from the WebSocket.
 */ async function handleWebSocketMessage$1(apiClient, onmessage, event) {
    const serverMessage = new LiveMusicServerMessage();
    let data;
    if (event.data instanceof Blob) data = JSON.parse(await event.data.text());
    else data = JSON.parse(event.data);
    const response = liveMusicServerMessageFromMldev(data);
    Object.assign(serverMessage, response);
    onmessage(serverMessage);
}
/**
   LiveMusic class encapsulates the configuration for live music
   generation via Lyria Live models.

   @experimental
  */ class LiveMusic {
    constructor(apiClient, auth, webSocketFactory){
        this.apiClient = apiClient;
        this.auth = auth;
        this.webSocketFactory = webSocketFactory;
    }
    /**
       Establishes a connection to the specified model and returns a
       LiveMusicSession object representing that connection.
  
       @experimental
  
       @remarks
  
       @param params - The parameters for establishing a connection to the model.
       @return A live session.
  
       @example
       ```ts
       let model = 'models/lyria-realtime-exp';
       const session = await ai.live.music.connect({
         model: model,
         callbacks: {
           onmessage: (e: MessageEvent) => {
             console.log('Received message from the server: %s\n', debug(e.data));
           },
           onerror: (e: ErrorEvent) => {
             console.log('Error occurred: %s\n', debug(e.error));
           },
           onclose: (e: CloseEvent) => {
             console.log('Connection closed.');
           },
         },
       });
       ```
      */ async connect(params) {
        var _a, _b;
        if (this.apiClient.isVertexAI()) throw new Error('Live music is not supported for Vertex AI.');
        console.warn('Live music generation is experimental and may change in future versions.');
        const websocketBaseUrl = this.apiClient.getWebsocketBaseUrl();
        const apiVersion = this.apiClient.getApiVersion();
        const headers = mapToHeaders$1(this.apiClient.getDefaultHeaders());
        const apiKey = this.apiClient.getApiKey();
        const url = `${websocketBaseUrl}/ws/google.ai.generativelanguage.${apiVersion}.GenerativeService.BidiGenerateMusic?key=${apiKey}`;
        let onopenResolve = ()=>{};
        const onopenPromise = new Promise((resolve)=>{
            onopenResolve = resolve;
        });
        const callbacks = params.callbacks;
        const onopenAwaitedCallback = function() {
            onopenResolve({});
        };
        const apiClient = this.apiClient;
        const websocketCallbacks = {
            onopen: onopenAwaitedCallback,
            onmessage: (event)=>{
                handleWebSocketMessage$1(apiClient, callbacks.onmessage, event);
            },
            onerror: (_a = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onerror) !== null && _a !== void 0 ? _a : function(e) {},
            onclose: (_b = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onclose) !== null && _b !== void 0 ? _b : function(e) {}
        };
        const conn = this.webSocketFactory.create(url, headersToMap$1(headers), websocketCallbacks);
        conn.connect();
        // Wait for the websocket to open before sending requests.
        await onopenPromise;
        const model = tModel(this.apiClient, params.model);
        const setup = liveMusicClientSetupToMldev({
            model
        });
        const clientMessage = liveMusicClientMessageToMldev({
            setup
        });
        conn.send(JSON.stringify(clientMessage));
        return new LiveMusicSession(conn, this.apiClient);
    }
}
/**
   Represents a connection to the API.

   @experimental
  */ class LiveMusicSession {
    constructor(conn, apiClient){
        this.conn = conn;
        this.apiClient = apiClient;
    }
    /**
      Sets inputs to steer music generation. Updates the session's current
      weighted prompts.
  
      @param params - Contains one property, `weightedPrompts`.
  
        - `weightedPrompts` to send to the model; weights are normalized to
          sum to 1.0.
  
      @experimental
     */ async setWeightedPrompts(params) {
        if (!params.weightedPrompts || Object.keys(params.weightedPrompts).length === 0) throw new Error('Weighted prompts must be set and contain at least one entry.');
        const setWeightedPromptsParameters = liveMusicSetWeightedPromptsParametersToMldev(params);
        const clientContent = liveMusicClientContentToMldev(setWeightedPromptsParameters);
        this.conn.send(JSON.stringify({
            clientContent
        }));
    }
    /**
      Sets a configuration to the model. Updates the session's current
      music generation config.
  
      @param params - Contains one property, `musicGenerationConfig`.
  
        - `musicGenerationConfig` to set in the model. Passing an empty or
      undefined config to the model will reset the config to defaults.
  
      @experimental
     */ async setMusicGenerationConfig(params) {
        if (!params.musicGenerationConfig) params.musicGenerationConfig = {};
        const setConfigParameters = liveMusicSetConfigParametersToMldev(params);
        const clientMessage = liveMusicClientMessageToMldev(setConfigParameters);
        this.conn.send(JSON.stringify(clientMessage));
    }
    sendPlaybackControl(playbackControl) {
        const clientMessage = liveMusicClientMessageToMldev({
            playbackControl
        });
        this.conn.send(JSON.stringify(clientMessage));
    }
    /**
     * Start the music stream.
     *
     * @experimental
     */ play() {
        this.sendPlaybackControl(LiveMusicPlaybackControl.PLAY);
    }
    /**
     * Temporarily halt the music stream. Use `play` to resume from the current
     * position.
     *
     * @experimental
     */ pause() {
        this.sendPlaybackControl(LiveMusicPlaybackControl.PAUSE);
    }
    /**
     * Stop the music stream and reset the state. Retains the current prompts
     * and config.
     *
     * @experimental
     */ stop() {
        this.sendPlaybackControl(LiveMusicPlaybackControl.STOP);
    }
    /**
     * Resets the context of the music generation without stopping it.
     * Retains the current prompts and config.
     *
     * @experimental
     */ resetContext() {
        this.sendPlaybackControl(LiveMusicPlaybackControl.RESET_CONTEXT);
    }
    /**
       Terminates the WebSocket connection.
  
       @experimental
     */ close() {
        this.conn.close();
    }
}
// Converts an headers object to a "map" object as expected by the WebSocket
// constructor. We use this as the Auth interface works with Headers objects
// while the WebSocket constructor takes a map.
function headersToMap$1(headers) {
    const headerMap = {};
    headers.forEach((value, key)=>{
        headerMap[key] = value;
    });
    return headerMap;
}
// Converts a "map" object to a headers object. We use this as the Auth
// interface works with Headers objects while the API client default headers
// returns a map.
function mapToHeaders$1(map) {
    const headers = new Headers();
    for (const [key, value] of Object.entries(map))headers.append(key, value);
    return headers;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const FUNCTION_RESPONSE_REQUIRES_ID = 'FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.';
/**
 * Handles incoming messages from the WebSocket.
 *
 * @remarks
 * This function is responsible for parsing incoming messages, transforming them
 * into LiveServerMessages, and then calling the onmessage callback. Note that
 * the first message which is received from the server is a setupComplete
 * message.
 *
 * @param apiClient The ApiClient instance.
 * @param onmessage The user-provided onmessage callback (if any).
 * @param event The MessageEvent from the WebSocket.
 */ async function handleWebSocketMessage(apiClient, onmessage, event) {
    const serverMessage = new LiveServerMessage();
    let jsonData;
    if (event.data instanceof Blob) jsonData = await event.data.text();
    else if (event.data instanceof ArrayBuffer) jsonData = new TextDecoder().decode(event.data);
    else jsonData = event.data;
    const data = JSON.parse(jsonData);
    if (apiClient.isVertexAI()) {
        const resp = liveServerMessageFromVertex(data);
        Object.assign(serverMessage, resp);
    } else {
        const resp = liveServerMessageFromMldev(data);
        Object.assign(serverMessage, resp);
    }
    onmessage(serverMessage);
}
/**
   Live class encapsulates the configuration for live interaction with the
   Generative Language API. It embeds ApiClient for general API settings.

   @experimental
  */ class Live {
    constructor(apiClient, auth, webSocketFactory){
        this.apiClient = apiClient;
        this.auth = auth;
        this.webSocketFactory = webSocketFactory;
        this.music = new LiveMusic(this.apiClient, this.auth, this.webSocketFactory);
    }
    /**
       Establishes a connection to the specified model with the given
       configuration and returns a Session object representing that connection.
  
       @experimental Built-in MCP support is an experimental feature, may change in
       future versions.
  
       @remarks
  
       @param params - The parameters for establishing a connection to the model.
       @return A live session.
  
       @example
       ```ts
       let model: string;
       if (GOOGLE_GENAI_USE_VERTEXAI) {
         model = 'gemini-2.0-flash-live-preview-04-09';
       } else {
         model = 'gemini-2.0-flash-live-001';
       }
       const session = await ai.live.connect({
         model: model,
         config: {
           responseModalities: [Modality.AUDIO],
         },
         callbacks: {
           onopen: () => {
             console.log('Connected to the socket.');
           },
           onmessage: (e: MessageEvent) => {
             console.log('Received message from the server: %s\n', debug(e.data));
           },
           onerror: (e: ErrorEvent) => {
             console.log('Error occurred: %s\n', debug(e.error));
           },
           onclose: (e: CloseEvent) => {
             console.log('Connection closed.');
           },
         },
       });
       ```
      */ async connect(params) {
        var _a, _b, _c, _d, _e, _f;
        const websocketBaseUrl = this.apiClient.getWebsocketBaseUrl();
        const apiVersion = this.apiClient.getApiVersion();
        let url;
        const defaultHeaders = this.apiClient.getDefaultHeaders();
        if (params.config && params.config.tools && hasMcpToolUsage(params.config.tools)) setMcpUsageHeader(defaultHeaders);
        const headers = mapToHeaders(defaultHeaders);
        if (this.apiClient.isVertexAI()) {
            url = `${websocketBaseUrl}/ws/google.cloud.aiplatform.${apiVersion}.LlmBidiService/BidiGenerateContent`;
            await this.auth.addAuthHeaders(headers);
        } else {
            const apiKey = this.apiClient.getApiKey();
            let method = 'BidiGenerateContent';
            let keyName = 'key';
            if (apiKey === null || apiKey === void 0 ? void 0 : apiKey.startsWith('auth_tokens/')) {
                console.warn('Warning: Ephemeral token support is experimental and may change in future versions.');
                method = 'BidiGenerateContentConstrained';
                keyName = 'access_token';
            }
            url = `${websocketBaseUrl}/ws/google.ai.generativelanguage.${apiVersion}.GenerativeService.${method}?${keyName}=${apiKey}`;
        }
        let onopenResolve = ()=>{};
        const onopenPromise = new Promise((resolve)=>{
            onopenResolve = resolve;
        });
        const callbacks = params.callbacks;
        const onopenAwaitedCallback = function() {
            var _a;
            (_a = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onopen) === null || _a === void 0 || _a.call(callbacks);
            onopenResolve({});
        };
        const apiClient = this.apiClient;
        const websocketCallbacks = {
            onopen: onopenAwaitedCallback,
            onmessage: (event)=>{
                handleWebSocketMessage(apiClient, callbacks.onmessage, event);
            },
            onerror: (_a = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onerror) !== null && _a !== void 0 ? _a : function(e) {},
            onclose: (_b = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onclose) !== null && _b !== void 0 ? _b : function(e) {}
        };
        const conn = this.webSocketFactory.create(url, headersToMap(headers), websocketCallbacks);
        conn.connect();
        // Wait for the websocket to open before sending requests.
        await onopenPromise;
        let transformedModel = tModel(this.apiClient, params.model);
        if (this.apiClient.isVertexAI() && transformedModel.startsWith('publishers/')) {
            const project = this.apiClient.getProject();
            const location = this.apiClient.getLocation();
            transformedModel = `projects/${project}/locations/${location}/` + transformedModel;
        }
        let clientMessage = {};
        if (this.apiClient.isVertexAI() && ((_c = params.config) === null || _c === void 0 ? void 0 : _c.responseModalities) === undefined) {
            // Set default to AUDIO to align with MLDev API.
            if (params.config === undefined) params.config = {
                responseModalities: [
                    Modality.AUDIO
                ]
            };
            else params.config.responseModalities = [
                Modality.AUDIO
            ];
        }
        if ((_d = params.config) === null || _d === void 0 ? void 0 : _d.generationConfig) // Raise deprecation warning for generationConfig.
        console.warn('Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).');
        const inputTools = (_f = (_e = params.config) === null || _e === void 0 ? void 0 : _e.tools) !== null && _f !== void 0 ? _f : [];
        const convertedTools = [];
        for (const tool of inputTools)if (this.isCallableTool(tool)) {
            const callableTool = tool;
            convertedTools.push(await callableTool.tool());
        } else convertedTools.push(tool);
        if (convertedTools.length > 0) params.config.tools = convertedTools;
        const liveConnectParameters = {
            model: transformedModel,
            config: params.config,
            callbacks: params.callbacks
        };
        if (this.apiClient.isVertexAI()) clientMessage = liveConnectParametersToVertex(this.apiClient, liveConnectParameters);
        else clientMessage = liveConnectParametersToMldev(this.apiClient, liveConnectParameters);
        delete clientMessage['config'];
        conn.send(JSON.stringify(clientMessage));
        return new Session(conn, this.apiClient);
    }
    // TODO: b/416041229 - Abstract this method to a common place.
    isCallableTool(tool) {
        return 'callTool' in tool && typeof tool.callTool === 'function';
    }
}
const defaultLiveSendClientContentParamerters = {
    turnComplete: true
};
/**
   Represents a connection to the API.

   @experimental
  */ class Session {
    constructor(conn, apiClient){
        this.conn = conn;
        this.apiClient = apiClient;
    }
    tLiveClientContent(apiClient, params) {
        if (params.turns !== null && params.turns !== undefined) {
            let contents = [];
            try {
                contents = tContents(params.turns);
                if (apiClient.isVertexAI()) contents = contents.map((item)=>contentToVertex(item));
                else contents = contents.map((item)=>contentToMldev$1(item));
            } catch (_a) {
                throw new Error(`Failed to parse client content "turns", type: '${typeof params.turns}'`);
            }
            return {
                clientContent: {
                    turns: contents,
                    turnComplete: params.turnComplete
                }
            };
        }
        return {
            clientContent: {
                turnComplete: params.turnComplete
            }
        };
    }
    tLiveClienttToolResponse(apiClient, params) {
        let functionResponses = [];
        if (params.functionResponses == null) throw new Error('functionResponses is required.');
        if (!Array.isArray(params.functionResponses)) functionResponses = [
            params.functionResponses
        ];
        else functionResponses = params.functionResponses;
        if (functionResponses.length === 0) throw new Error('functionResponses is required.');
        for (const functionResponse of functionResponses){
            if (typeof functionResponse !== 'object' || functionResponse === null || !('name' in functionResponse) || !('response' in functionResponse)) throw new Error(`Could not parse function response, type '${typeof functionResponse}'.`);
            if (!apiClient.isVertexAI() && !('id' in functionResponse)) throw new Error(FUNCTION_RESPONSE_REQUIRES_ID);
        }
        const clientMessage = {
            toolResponse: {
                functionResponses: functionResponses
            }
        };
        return clientMessage;
    }
    /**
      Send a message over the established connection.
  
      @param params - Contains two **optional** properties, `turns` and
          `turnComplete`.
  
        - `turns` will be converted to a `Content[]`
        - `turnComplete: true` [default] indicates that you are done sending
          content and expect a response. If `turnComplete: false`, the server
          will wait for additional messages before starting generation.
  
      @experimental
  
      @remarks
      There are two ways to send messages to the live API:
      `sendClientContent` and `sendRealtimeInput`.
  
      `sendClientContent` messages are added to the model context **in order**.
      Having a conversation using `sendClientContent` messages is roughly
      equivalent to using the `Chat.sendMessageStream`, except that the state of
      the `chat` history is stored on the API server instead of locally.
  
      Because of `sendClientContent`'s order guarantee, the model cannot respons
      as quickly to `sendClientContent` messages as to `sendRealtimeInput`
      messages. This makes the biggest difference when sending objects that have
      significant preprocessing time (typically images).
  
      The `sendClientContent` message sends a `Content[]`
      which has more options than the `Blob` sent by `sendRealtimeInput`.
  
      So the main use-cases for `sendClientContent` over `sendRealtimeInput` are:
  
      - Sending anything that can't be represented as a `Blob` (text,
      `sendClientContent({turns="Hello?"}`)).
      - Managing turns when not using audio input and voice activity detection.
        (`sendClientContent({turnComplete:true})` or the short form
      `sendClientContent()`)
      - Prefilling a conversation context
        ```
        sendClientContent({
            turns: [
              Content({role:user, parts:...}),
              Content({role:user, parts:...}),
              ...
            ]
        })
        ```
      @experimental
     */ sendClientContent(params) {
        params = Object.assign(Object.assign({}, defaultLiveSendClientContentParamerters), params);
        const clientMessage = this.tLiveClientContent(this.apiClient, params);
        this.conn.send(JSON.stringify(clientMessage));
    }
    /**
      Send a realtime message over the established connection.
  
      @param params - Contains one property, `media`.
  
        - `media` will be converted to a `Blob`
  
      @experimental
  
      @remarks
      Use `sendRealtimeInput` for realtime audio chunks and video frames (images).
  
      With `sendRealtimeInput` the api will respond to audio automatically
      based on voice activity detection (VAD).
  
      `sendRealtimeInput` is optimized for responsivness at the expense of
      deterministic ordering guarantees. Audio and video tokens are to the
      context when they become available.
  
      Note: The Call signature expects a `Blob` object, but only a subset
      of audio and image mimetypes are allowed.
     */ sendRealtimeInput(params) {
        let clientMessage = {};
        if (this.apiClient.isVertexAI()) clientMessage = {
            'realtimeInput': liveSendRealtimeInputParametersToVertex(params)
        };
        else clientMessage = {
            'realtimeInput': liveSendRealtimeInputParametersToMldev(params)
        };
        this.conn.send(JSON.stringify(clientMessage));
    }
    /**
      Send a function response message over the established connection.
  
      @param params - Contains property `functionResponses`.
  
        - `functionResponses` will be converted to a `functionResponses[]`
  
      @remarks
      Use `sendFunctionResponse` to reply to `LiveServerToolCall` from the server.
  
      Use {@link types.LiveConnectConfig#tools} to configure the callable functions.
  
      @experimental
     */ sendToolResponse(params) {
        if (params.functionResponses == null) throw new Error('Tool response parameters are required.');
        const clientMessage = this.tLiveClienttToolResponse(this.apiClient, params);
        this.conn.send(JSON.stringify(clientMessage));
    }
    /**
       Terminates the WebSocket connection.
  
       @experimental
  
       @example
       ```ts
       let model: string;
       if (GOOGLE_GENAI_USE_VERTEXAI) {
         model = 'gemini-2.0-flash-live-preview-04-09';
       } else {
         model = 'gemini-2.0-flash-live-001';
       }
       const session = await ai.live.connect({
         model: model,
         config: {
           responseModalities: [Modality.AUDIO],
         }
       });
  
       session.close();
       ```
     */ close() {
        this.conn.close();
    }
}
// Converts an headers object to a "map" object as expected by the WebSocket
// constructor. We use this as the Auth interface works with Headers objects
// while the WebSocket constructor takes a map.
function headersToMap(headers) {
    const headerMap = {};
    headers.forEach((value, key)=>{
        headerMap[key] = value;
    });
    return headerMap;
}
// Converts a "map" object to a headers object. We use this as the Auth
// interface works with Headers objects while the API client default headers
// returns a map.
function mapToHeaders(map) {
    const headers = new Headers();
    for (const [key, value] of Object.entries(map))headers.append(key, value);
    return headers;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const DEFAULT_MAX_REMOTE_CALLS = 10;
/** Returns whether automatic function calling is disabled. */ function shouldDisableAfc(config) {
    var _a, _b, _c;
    if ((_a = config === null || config === void 0 ? void 0 : config.automaticFunctionCalling) === null || _a === void 0 ? void 0 : _a.disable) return true;
    let callableToolsPresent = false;
    for (const tool of (_b = config === null || config === void 0 ? void 0 : config.tools) !== null && _b !== void 0 ? _b : [])if (isCallableTool(tool)) {
        callableToolsPresent = true;
        break;
    }
    if (!callableToolsPresent) return true;
    const maxCalls = (_c = config === null || config === void 0 ? void 0 : config.automaticFunctionCalling) === null || _c === void 0 ? void 0 : _c.maximumRemoteCalls;
    if (maxCalls && (maxCalls < 0 || !Number.isInteger(maxCalls)) || maxCalls == 0) {
        console.warn('Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:', maxCalls);
        return true;
    }
    return false;
}
function isCallableTool(tool) {
    return 'callTool' in tool && typeof tool.callTool === 'function';
}
/**
 * Returns whether to append automatic function calling history to the
 * response.
 */ function shouldAppendAfcHistory(config) {
    var _a;
    return !((_a = config === null || config === void 0 ? void 0 : config.automaticFunctionCalling) === null || _a === void 0 ? void 0 : _a.ignoreCallHistory);
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Models extends BaseModule {
    constructor(apiClient){
        super();
        this.apiClient = apiClient;
        /**
         * Makes an API request to generate content with a given model.
         *
         * For the `model` parameter, supported formats for Vertex AI API include:
         * - The Gemini model ID, for example: 'gemini-2.0-flash'
         * - The full resource name starts with 'projects/', for example:
         *  'projects/my-project-id/locations/us-central1/publishers/google/models/gemini-2.0-flash'
         * - The partial resource name with 'publishers/', for example:
         *  'publishers/google/models/gemini-2.0-flash' or
         *  'publishers/meta/models/llama-3.1-405b-instruct-maas'
         * - `/` separated publisher and model name, for example:
         * 'google/gemini-2.0-flash' or 'meta/llama-3.1-405b-instruct-maas'
         *
         * For the `model` parameter, supported formats for Gemini API include:
         * - The Gemini model ID, for example: 'gemini-2.0-flash'
         * - The model name starts with 'models/', for example:
         *  'models/gemini-2.0-flash'
         * - For tuned models, the model name starts with 'tunedModels/',
         * for example:
         * 'tunedModels/1234567890123456789'
         *
         * Some models support multimodal input and output.
         *
         * @param params - The parameters for generating content.
         * @return The response from generating content.
         *
         * @example
         * ```ts
         * const response = await ai.models.generateContent({
         *   model: 'gemini-2.0-flash',
         *   contents: 'why is the sky blue?',
         *   config: {
         *     candidateCount: 2,
         *   }
         * });
         * console.log(response);
         * ```
         */ this.generateContent = async (params)=>{
            var _a, _b, _c, _d, _e;
            const transformedParams = await this.processParamsForMcpUsage(params);
            if (!hasMcpClientTools(params) || shouldDisableAfc(params.config)) return await this.generateContentInternal(transformedParams);
            if (hasNonMcpTools(params)) throw new Error('Automatic function calling with CallableTools and Tools is not yet supported.');
            let response;
            let functionResponseContent;
            const automaticFunctionCallingHistory = tContents(transformedParams.contents);
            const maxRemoteCalls = (_c = (_b = (_a = transformedParams.config) === null || _a === void 0 ? void 0 : _a.automaticFunctionCalling) === null || _b === void 0 ? void 0 : _b.maximumRemoteCalls) !== null && _c !== void 0 ? _c : DEFAULT_MAX_REMOTE_CALLS;
            let remoteCalls = 0;
            while(remoteCalls < maxRemoteCalls){
                response = await this.generateContentInternal(transformedParams);
                if (!response.functionCalls || response.functionCalls.length === 0) break;
                const responseContent = response.candidates[0].content;
                const functionResponseParts = [];
                for (const tool of (_e = (_d = params.config) === null || _d === void 0 ? void 0 : _d.tools) !== null && _e !== void 0 ? _e : [])if (isCallableTool(tool)) {
                    const callableTool = tool;
                    const parts = await callableTool.callTool(response.functionCalls);
                    functionResponseParts.push(...parts);
                }
                remoteCalls++;
                functionResponseContent = {
                    role: 'user',
                    parts: functionResponseParts
                };
                transformedParams.contents = tContents(transformedParams.contents);
                transformedParams.contents.push(responseContent);
                transformedParams.contents.push(functionResponseContent);
                if (shouldAppendAfcHistory(transformedParams.config)) {
                    automaticFunctionCallingHistory.push(responseContent);
                    automaticFunctionCallingHistory.push(functionResponseContent);
                }
            }
            if (shouldAppendAfcHistory(transformedParams.config)) response.automaticFunctionCallingHistory = automaticFunctionCallingHistory;
            return response;
        };
        /**
         * Makes an API request to generate content with a given model and yields the
         * response in chunks.
         *
         * For the `model` parameter, supported formats for Vertex AI API include:
         * - The Gemini model ID, for example: 'gemini-2.0-flash'
         * - The full resource name starts with 'projects/', for example:
         *  'projects/my-project-id/locations/us-central1/publishers/google/models/gemini-2.0-flash'
         * - The partial resource name with 'publishers/', for example:
         *  'publishers/google/models/gemini-2.0-flash' or
         *  'publishers/meta/models/llama-3.1-405b-instruct-maas'
         * - `/` separated publisher and model name, for example:
         * 'google/gemini-2.0-flash' or 'meta/llama-3.1-405b-instruct-maas'
         *
         * For the `model` parameter, supported formats for Gemini API include:
         * - The Gemini model ID, for example: 'gemini-2.0-flash'
         * - The model name starts with 'models/', for example:
         *  'models/gemini-2.0-flash'
         * - For tuned models, the model name starts with 'tunedModels/',
         * for example:
         *  'tunedModels/1234567890123456789'
         *
         * Some models support multimodal input and output.
         *
         * @param params - The parameters for generating content with streaming response.
         * @return The response from generating content.
         *
         * @example
         * ```ts
         * const response = await ai.models.generateContentStream({
         *   model: 'gemini-2.0-flash',
         *   contents: 'why is the sky blue?',
         *   config: {
         *     maxOutputTokens: 200,
         *   }
         * });
         * for await (const chunk of response) {
         *   console.log(chunk);
         * }
         * ```
         */ this.generateContentStream = async (params)=>{
            if (shouldDisableAfc(params.config)) {
                const transformedParams = await this.processParamsForMcpUsage(params);
                return await this.generateContentStreamInternal(transformedParams);
            } else return await this.processAfcStream(params);
        };
        /**
         * Generates an image based on a text description and configuration.
         *
         * @param params - The parameters for generating images.
         * @return The response from the API.
         *
         * @example
         * ```ts
         * const response = await client.models.generateImages({
         *  model: 'imagen-3.0-generate-002',
         *  prompt: 'Robot holding a red skateboard',
         *  config: {
         *    numberOfImages: 1,
         *    includeRaiReason: true,
         *  },
         * });
         * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
         * ```
         */ this.generateImages = async (params)=>{
            return await this.generateImagesInternal(params).then((apiResponse)=>{
                var _a;
                let positivePromptSafetyAttributes;
                const generatedImages = [];
                if (apiResponse === null || apiResponse === void 0 ? void 0 : apiResponse.generatedImages) {
                    for (const generatedImage of apiResponse.generatedImages)if (generatedImage && (generatedImage === null || generatedImage === void 0 ? void 0 : generatedImage.safetyAttributes) && ((_a = generatedImage === null || generatedImage === void 0 ? void 0 : generatedImage.safetyAttributes) === null || _a === void 0 ? void 0 : _a.contentType) === 'Positive Prompt') positivePromptSafetyAttributes = generatedImage === null || generatedImage === void 0 ? void 0 : generatedImage.safetyAttributes;
                    else generatedImages.push(generatedImage);
                }
                let response;
                if (positivePromptSafetyAttributes) response = {
                    generatedImages: generatedImages,
                    positivePromptSafetyAttributes: positivePromptSafetyAttributes
                };
                else response = {
                    generatedImages: generatedImages
                };
                return response;
            });
        };
        this.list = async (params)=>{
            var _a;
            const defaultConfig = {
                queryBase: true
            };
            const actualConfig = Object.assign(Object.assign({}, defaultConfig), params === null || params === void 0 ? void 0 : params.config);
            const actualParams = {
                config: actualConfig
            };
            if (this.apiClient.isVertexAI()) {
                if (!actualParams.config.queryBase) {
                    if ((_a = actualParams.config) === null || _a === void 0 ? void 0 : _a.filter) throw new Error('Filtering tuned models list for Vertex AI is not currently supported');
                    else actualParams.config.filter = 'labels.tune-type:*';
                }
            }
            return new Pager(PagedItem.PAGED_ITEM_MODELS, (x)=>this.listInternal(x), await this.listInternal(actualParams), actualParams);
        };
        /**
         * Edits an image based on a prompt, list of reference images, and configuration.
         *
         * @param params - The parameters for editing an image.
         * @return The response from the API.
         *
         * @example
         * ```ts
         * const response = await client.models.editImage({
         *  model: 'imagen-3.0-capability-001',
         *  prompt: 'Generate an image containing a mug with the product logo [1] visible on the side of the mug.',
         *  referenceImages: [subjectReferenceImage]
         *  config: {
         *    numberOfImages: 1,
         *    includeRaiReason: true,
         *  },
         * });
         * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
         * ```
         */ this.editImage = async (params)=>{
            const paramsInternal = {
                model: params.model,
                prompt: params.prompt,
                referenceImages: [],
                config: params.config
            };
            if (params.referenceImages) {
                if (params.referenceImages) paramsInternal.referenceImages = params.referenceImages.map((img)=>img.toReferenceImageAPI());
            }
            return await this.editImageInternal(paramsInternal);
        };
        /**
         * Upscales an image based on an image, upscale factor, and configuration.
         * Only supported in Vertex AI currently.
         *
         * @param params - The parameters for upscaling an image.
         * @return The response from the API.
         *
         * @example
         * ```ts
         * const response = await client.models.upscaleImage({
         *  model: 'imagen-3.0-generate-002',
         *  image: image,
         *  upscaleFactor: 'x2',
         *  config: {
         *    includeRaiReason: true,
         *  },
         * });
         * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
         * ```
         */ this.upscaleImage = async (params)=>{
            let apiConfig = {
                numberOfImages: 1,
                mode: 'upscale'
            };
            if (params.config) apiConfig = Object.assign(Object.assign({}, apiConfig), params.config);
            const apiParams = {
                model: params.model,
                image: params.image,
                upscaleFactor: params.upscaleFactor,
                config: apiConfig
            };
            return await this.upscaleImageInternal(apiParams);
        };
    }
    /**
     * Transforms the CallableTools in the parameters to be simply Tools, it
     * copies the params into a new object and replaces the tools, it does not
     * modify the original params. Also sets the MCP usage header if there are
     * MCP tools in the parameters.
     */ async processParamsForMcpUsage(params) {
        var _a, _b, _c;
        const tools = (_a = params.config) === null || _a === void 0 ? void 0 : _a.tools;
        if (!tools) return params;
        const transformedTools = await Promise.all(tools.map(async (tool)=>{
            if (isCallableTool(tool)) {
                const callableTool = tool;
                return await callableTool.tool();
            }
            return tool;
        }));
        const newParams = {
            model: params.model,
            contents: params.contents,
            config: Object.assign(Object.assign({}, params.config), {
                tools: transformedTools
            })
        };
        newParams.config.tools = transformedTools;
        if (params.config && params.config.tools && hasMcpToolUsage(params.config.tools)) {
            const headers = (_c = (_b = params.config.httpOptions) === null || _b === void 0 ? void 0 : _b.headers) !== null && _c !== void 0 ? _c : {};
            let newHeaders = Object.assign({}, headers);
            if (Object.keys(newHeaders).length === 0) newHeaders = this.apiClient.getDefaultHeaders();
            setMcpUsageHeader(newHeaders);
            newParams.config.httpOptions = Object.assign(Object.assign({}, params.config.httpOptions), {
                headers: newHeaders
            });
        }
        return newParams;
    }
    async initAfcToolsMap(params) {
        var _a, _b, _c;
        const afcTools = new Map();
        for (const tool of (_b = (_a = params.config) === null || _a === void 0 ? void 0 : _a.tools) !== null && _b !== void 0 ? _b : [])if (isCallableTool(tool)) {
            const callableTool = tool;
            const toolDeclaration = await callableTool.tool();
            for (const declaration of (_c = toolDeclaration.functionDeclarations) !== null && _c !== void 0 ? _c : []){
                if (!declaration.name) throw new Error('Function declaration name is required.');
                if (afcTools.has(declaration.name)) throw new Error(`Duplicate tool declaration name: ${declaration.name}`);
                afcTools.set(declaration.name, callableTool);
            }
        }
        return afcTools;
    }
    async processAfcStream(params) {
        var _a, _b, _c;
        const maxRemoteCalls = (_c = (_b = (_a = params.config) === null || _a === void 0 ? void 0 : _a.automaticFunctionCalling) === null || _b === void 0 ? void 0 : _b.maximumRemoteCalls) !== null && _c !== void 0 ? _c : DEFAULT_MAX_REMOTE_CALLS;
        let wereFunctionsCalled = false;
        let remoteCallCount = 0;
        const afcToolsMap = await this.initAfcToolsMap(params);
        return function(models, afcTools, params) {
            var _a, _b;
            return __asyncGenerator(this, arguments, function*() {
                var _c, e_1, _d, _e;
                while(remoteCallCount < maxRemoteCalls){
                    if (wereFunctionsCalled) {
                        remoteCallCount++;
                        wereFunctionsCalled = false;
                    }
                    const transformedParams = yield __await(models.processParamsForMcpUsage(params));
                    const response = yield __await(models.generateContentStreamInternal(transformedParams));
                    const functionResponses = [];
                    const responseContents = [];
                    try {
                        for(var _f = true, response_1 = (e_1 = void 0, __asyncValues(response)), response_1_1; response_1_1 = yield __await(response_1.next()), _c = response_1_1.done, !_c; _f = true){
                            _e = response_1_1.value;
                            _f = false;
                            const chunk = _e;
                            yield yield __await(chunk);
                            if (chunk.candidates && ((_a = chunk.candidates[0]) === null || _a === void 0 ? void 0 : _a.content)) {
                                responseContents.push(chunk.candidates[0].content);
                                for (const part of (_b = chunk.candidates[0].content.parts) !== null && _b !== void 0 ? _b : [])if (remoteCallCount < maxRemoteCalls && part.functionCall) {
                                    if (!part.functionCall.name) throw new Error('Function call name was not returned by the model.');
                                    if (!afcTools.has(part.functionCall.name)) throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${afcTools.keys()}, mising tool: ${part.functionCall.name}`);
                                    else {
                                        const responseParts = yield __await(afcTools.get(part.functionCall.name).callTool([
                                            part.functionCall
                                        ]));
                                        functionResponses.push(...responseParts);
                                    }
                                }
                            }
                        }
                    } catch (e_1_1) {
                        e_1 = {
                            error: e_1_1
                        };
                    } finally{
                        try {
                            if (!_f && !_c && (_d = response_1.return)) yield __await(_d.call(response_1));
                        } finally{
                            if (e_1) throw e_1.error;
                        }
                    }
                    if (functionResponses.length > 0) {
                        wereFunctionsCalled = true;
                        const typedResponseChunk = new GenerateContentResponse();
                        typedResponseChunk.candidates = [
                            {
                                content: {
                                    role: 'user',
                                    parts: functionResponses
                                }
                            }
                        ];
                        yield yield __await(typedResponseChunk);
                        const newContents = [];
                        newContents.push(...responseContents);
                        newContents.push({
                            role: 'user',
                            parts: functionResponses
                        });
                        const updatedContents = tContents(params.contents).concat(newContents);
                        params.contents = updatedContents;
                    } else break;
                }
            });
        }(this, afcToolsMap, params);
    }
    async generateContentInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = generateContentParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:generateContent', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = generateContentResponseFromVertex(apiResponse);
                const typedResp = new GenerateContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else {
            const body = generateContentParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:generateContent', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = generateContentResponseFromMldev(apiResponse);
                const typedResp = new GenerateContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    async generateContentStreamInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = generateContentParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:streamGenerateContent?alt=sse', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            const apiClient = this.apiClient;
            response = apiClient.requestStream({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            });
            return response.then(function(apiResponse) {
                return __asyncGenerator(this, arguments, function*() {
                    var _a, e_2, _b, _c;
                    try {
                        for(var _d = true, apiResponse_1 = __asyncValues(apiResponse), apiResponse_1_1; apiResponse_1_1 = yield __await(apiResponse_1.next()), _a = apiResponse_1_1.done, !_a; _d = true){
                            _c = apiResponse_1_1.value;
                            _d = false;
                            const chunk = _c;
                            const resp = generateContentResponseFromVertex((yield __await(chunk.json())));
                            const typedResp = new GenerateContentResponse();
                            Object.assign(typedResp, resp);
                            yield yield __await(typedResp);
                        }
                    } catch (e_2_1) {
                        e_2 = {
                            error: e_2_1
                        };
                    } finally{
                        try {
                            if (!_d && !_a && (_b = apiResponse_1.return)) yield __await(_b.call(apiResponse_1));
                        } finally{
                            if (e_2) throw e_2.error;
                        }
                    }
                });
            });
        } else {
            const body = generateContentParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:streamGenerateContent?alt=sse', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            const apiClient = this.apiClient;
            response = apiClient.requestStream({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            });
            return response.then(function(apiResponse) {
                return __asyncGenerator(this, arguments, function*() {
                    var _a, e_3, _b, _c;
                    try {
                        for(var _d = true, apiResponse_2 = __asyncValues(apiResponse), apiResponse_2_1; apiResponse_2_1 = yield __await(apiResponse_2.next()), _a = apiResponse_2_1.done, !_a; _d = true){
                            _c = apiResponse_2_1.value;
                            _d = false;
                            const chunk = _c;
                            const resp = generateContentResponseFromMldev((yield __await(chunk.json())));
                            const typedResp = new GenerateContentResponse();
                            Object.assign(typedResp, resp);
                            yield yield __await(typedResp);
                        }
                    } catch (e_3_1) {
                        e_3 = {
                            error: e_3_1
                        };
                    } finally{
                        try {
                            if (!_d && !_a && (_b = apiResponse_2.return)) yield __await(_b.call(apiResponse_2));
                        } finally{
                            if (e_3) throw e_3.error;
                        }
                    }
                });
            });
        }
    }
    /**
     * Calculates embeddings for the given contents. Only text is supported.
     *
     * @param params - The parameters for embedding contents.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.embedContent({
     *  model: 'text-embedding-004',
     *  contents: [
     *    'What is your name?',
     *    'What is your favorite color?',
     *  ],
     *  config: {
     *    outputDimensionality: 64,
     *  },
     * });
     * console.log(response);
     * ```
     */ async embedContent(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = embedContentParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:predict', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = embedContentResponseFromVertex(apiResponse);
                const typedResp = new EmbedContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else {
            const body = embedContentParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:batchEmbedContents', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = embedContentResponseFromMldev(apiResponse);
                const typedResp = new EmbedContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Generates an image based on a text description and configuration.
     *
     * @param params - The parameters for generating images.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateImages({
     *  model: 'imagen-3.0-generate-002',
     *  prompt: 'Robot holding a red skateboard',
     *  config: {
     *    numberOfImages: 1,
     *    includeRaiReason: true,
     *  },
     * });
     * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
     * ```
     */ async generateImagesInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = generateImagesParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:predict', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = generateImagesResponseFromVertex(apiResponse);
                const typedResp = new GenerateImagesResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else {
            const body = generateImagesParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:predict', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = generateImagesResponseFromMldev(apiResponse);
                const typedResp = new GenerateImagesResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    async editImageInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = editImageParametersInternalToVertex(this.apiClient, params);
            path = formatMap('{model}:predict', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = editImageResponseFromVertex(apiResponse);
                const typedResp = new EditImageResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else throw new Error('This method is only supported by the Vertex AI.');
    }
    async upscaleImageInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = upscaleImageAPIParametersInternalToVertex(this.apiClient, params);
            path = formatMap('{model}:predict', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = upscaleImageResponseFromVertex(apiResponse);
                const typedResp = new UpscaleImageResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else throw new Error('This method is only supported by the Vertex AI.');
    }
    /**
     * Fetches information about a model by name.
     *
     * @example
     * ```ts
     * const modelInfo = await ai.models.get({model: 'gemini-2.0-flash'});
     * ```
     */ async get(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = getModelParametersToVertex(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = modelFromVertex(apiResponse);
                return resp;
            });
        } else {
            const body = getModelParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = modelFromMldev(apiResponse);
                return resp;
            });
        }
    }
    async listInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = listModelsParametersToVertex(this.apiClient, params);
            path = formatMap('{models_url}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = listModelsResponseFromVertex(apiResponse);
                const typedResp = new ListModelsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else {
            const body = listModelsParametersToMldev(this.apiClient, params);
            path = formatMap('{models_url}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = listModelsResponseFromMldev(apiResponse);
                const typedResp = new ListModelsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Updates a tuned model by its name.
     *
     * @param params - The parameters for updating the model.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.update({
     *   model: 'tuned-model-name',
     *   config: {
     *     displayName: 'New display name',
     *     description: 'New description',
     *   },
     * });
     * ```
     */ async update(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = updateModelParametersToVertex(this.apiClient, params);
            path = formatMap('{model}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'PATCH',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = modelFromVertex(apiResponse);
                return resp;
            });
        } else {
            const body = updateModelParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'PATCH',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = modelFromMldev(apiResponse);
                return resp;
            });
        }
    }
    /**
     * Deletes a tuned model by its name.
     *
     * @param params - The parameters for deleting the model.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.delete({model: 'tuned-model-name'});
     * ```
     */ async delete(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = deleteModelParametersToVertex(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then(()=>{
                const resp = deleteModelResponseFromVertex();
                const typedResp = new DeleteModelResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else {
            const body = deleteModelParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then(()=>{
                const resp = deleteModelResponseFromMldev();
                const typedResp = new DeleteModelResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Counts the number of tokens in the given contents. Multimodal input is
     * supported for Gemini models.
     *
     * @param params - The parameters for counting tokens.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.countTokens({
     *  model: 'gemini-2.0-flash',
     *  contents: 'The quick brown fox jumps over the lazy dog.'
     * });
     * console.log(response);
     * ```
     */ async countTokens(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = countTokensParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:countTokens', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = countTokensResponseFromVertex(apiResponse);
                const typedResp = new CountTokensResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else {
            const body = countTokensParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:countTokens', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = countTokensResponseFromMldev(apiResponse);
                const typedResp = new CountTokensResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Given a list of contents, returns a corresponding TokensInfo containing
     * the list of tokens and list of token ids.
     *
     * This method is not supported by the Gemini Developer API.
     *
     * @param params - The parameters for computing tokens.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.computeTokens({
     *  model: 'gemini-2.0-flash',
     *  contents: 'What is your name?'
     * });
     * console.log(response);
     * ```
     */ async computeTokens(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = computeTokensParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:computeTokens', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = computeTokensResponseFromVertex(apiResponse);
                const typedResp = new ComputeTokensResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else throw new Error('This method is only supported by the Vertex AI.');
    }
    /**
     *  Generates videos based on a text description and configuration.
     *
     * @param params - The parameters for generating videos.
     * @return A Promise<GenerateVideosOperation> which allows you to track the progress and eventually retrieve the generated videos using the operations.get method.
     *
     * @example
     * ```ts
     * const operation = await ai.models.generateVideos({
     *  model: 'veo-2.0-generate-001',
     *  prompt: 'A neon hologram of a cat driving at top speed',
     *  config: {
     *    numberOfVideos: 1
     * });
     *
     * while (!operation.done) {
     *   await new Promise(resolve => setTimeout(resolve, 10000));
     *   operation = await ai.operations.getVideosOperation({operation: operation});
     * }
     *
     * console.log(operation.response?.generatedVideos?.[0]?.video?.uri);
     * ```
     */ async generateVideos(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = generateVideosParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:predictLongRunning', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = generateVideosOperationFromVertex$1(apiResponse);
                return resp;
            });
        } else {
            const body = generateVideosParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:predictLongRunning', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = generateVideosOperationFromMldev$1(apiResponse);
                return resp;
            });
        }
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ // Code generated by the Google Gen AI SDK generator DO NOT EDIT.
function getOperationParametersToMldev(fromObject) {
    const toObject = {};
    const fromOperationName = getValueByPath(fromObject, [
        'operationName'
    ]);
    if (fromOperationName != null) setValueByPath(toObject, [
        '_url',
        'operationName'
    ], fromOperationName);
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function getOperationParametersToVertex(fromObject) {
    const toObject = {};
    const fromOperationName = getValueByPath(fromObject, [
        'operationName'
    ]);
    if (fromOperationName != null) setValueByPath(toObject, [
        '_url',
        'operationName'
    ], fromOperationName);
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function fetchPredictOperationParametersToVertex(fromObject) {
    const toObject = {};
    const fromOperationName = getValueByPath(fromObject, [
        'operationName'
    ]);
    if (fromOperationName != null) setValueByPath(toObject, [
        'operationName'
    ], fromOperationName);
    const fromResourceName = getValueByPath(fromObject, [
        'resourceName'
    ]);
    if (fromResourceName != null) setValueByPath(toObject, [
        '_url',
        'resourceName'
    ], fromResourceName);
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function videoFromMldev(fromObject) {
    const toObject = {};
    const fromUri = getValueByPath(fromObject, [
        'video',
        'uri'
    ]);
    if (fromUri != null) setValueByPath(toObject, [
        'uri'
    ], fromUri);
    const fromVideoBytes = getValueByPath(fromObject, [
        'video',
        'encodedVideo'
    ]);
    if (fromVideoBytes != null) setValueByPath(toObject, [
        'videoBytes'
    ], tBytes(fromVideoBytes));
    const fromMimeType = getValueByPath(fromObject, [
        'encoding'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function generatedVideoFromMldev(fromObject) {
    const toObject = {};
    const fromVideo = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromVideo != null) setValueByPath(toObject, [
        'video'
    ], videoFromMldev(fromVideo));
    return toObject;
}
function generateVideosResponseFromMldev(fromObject) {
    const toObject = {};
    const fromGeneratedVideos = getValueByPath(fromObject, [
        'generatedSamples'
    ]);
    if (fromGeneratedVideos != null) {
        let transformedList = fromGeneratedVideos;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return generatedVideoFromMldev(item);
        });
        setValueByPath(toObject, [
            'generatedVideos'
        ], transformedList);
    }
    const fromRaiMediaFilteredCount = getValueByPath(fromObject, [
        'raiMediaFilteredCount'
    ]);
    if (fromRaiMediaFilteredCount != null) setValueByPath(toObject, [
        'raiMediaFilteredCount'
    ], fromRaiMediaFilteredCount);
    const fromRaiMediaFilteredReasons = getValueByPath(fromObject, [
        'raiMediaFilteredReasons'
    ]);
    if (fromRaiMediaFilteredReasons != null) setValueByPath(toObject, [
        'raiMediaFilteredReasons'
    ], fromRaiMediaFilteredReasons);
    return toObject;
}
function generateVideosOperationFromMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromMetadata = getValueByPath(fromObject, [
        'metadata'
    ]);
    if (fromMetadata != null) setValueByPath(toObject, [
        'metadata'
    ], fromMetadata);
    const fromDone = getValueByPath(fromObject, [
        'done'
    ]);
    if (fromDone != null) setValueByPath(toObject, [
        'done'
    ], fromDone);
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], fromError);
    const fromResponse = getValueByPath(fromObject, [
        'response',
        'generateVideoResponse'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], generateVideosResponseFromMldev(fromResponse));
    return toObject;
}
function videoFromVertex(fromObject) {
    const toObject = {};
    const fromUri = getValueByPath(fromObject, [
        'gcsUri'
    ]);
    if (fromUri != null) setValueByPath(toObject, [
        'uri'
    ], fromUri);
    const fromVideoBytes = getValueByPath(fromObject, [
        'bytesBase64Encoded'
    ]);
    if (fromVideoBytes != null) setValueByPath(toObject, [
        'videoBytes'
    ], tBytes(fromVideoBytes));
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function generatedVideoFromVertex(fromObject) {
    const toObject = {};
    const fromVideo = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromVideo != null) setValueByPath(toObject, [
        'video'
    ], videoFromVertex(fromVideo));
    return toObject;
}
function generateVideosResponseFromVertex(fromObject) {
    const toObject = {};
    const fromGeneratedVideos = getValueByPath(fromObject, [
        'videos'
    ]);
    if (fromGeneratedVideos != null) {
        let transformedList = fromGeneratedVideos;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return generatedVideoFromVertex(item);
        });
        setValueByPath(toObject, [
            'generatedVideos'
        ], transformedList);
    }
    const fromRaiMediaFilteredCount = getValueByPath(fromObject, [
        'raiMediaFilteredCount'
    ]);
    if (fromRaiMediaFilteredCount != null) setValueByPath(toObject, [
        'raiMediaFilteredCount'
    ], fromRaiMediaFilteredCount);
    const fromRaiMediaFilteredReasons = getValueByPath(fromObject, [
        'raiMediaFilteredReasons'
    ]);
    if (fromRaiMediaFilteredReasons != null) setValueByPath(toObject, [
        'raiMediaFilteredReasons'
    ], fromRaiMediaFilteredReasons);
    return toObject;
}
function generateVideosOperationFromVertex(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromMetadata = getValueByPath(fromObject, [
        'metadata'
    ]);
    if (fromMetadata != null) setValueByPath(toObject, [
        'metadata'
    ], fromMetadata);
    const fromDone = getValueByPath(fromObject, [
        'done'
    ]);
    if (fromDone != null) setValueByPath(toObject, [
        'done'
    ], fromDone);
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], fromError);
    const fromResponse = getValueByPath(fromObject, [
        'response'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], generateVideosResponseFromVertex(fromResponse));
    return toObject;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Operations extends BaseModule {
    constructor(apiClient){
        super();
        this.apiClient = apiClient;
    }
    /**
     * Gets the status of a long-running operation.
     *
     * @param parameters The parameters for the get operation request.
     * @return The updated Operation object, with the latest status or result.
     */ async getVideosOperation(parameters) {
        const operation = parameters.operation;
        const config = parameters.config;
        if (operation.name === undefined || operation.name === '') throw new Error('Operation name is required.');
        if (this.apiClient.isVertexAI()) {
            const resourceName = operation.name.split('/operations/')[0];
            let httpOptions = undefined;
            if (config && 'httpOptions' in config) httpOptions = config.httpOptions;
            return this.fetchPredictVideosOperationInternal({
                operationName: operation.name,
                resourceName: resourceName,
                config: {
                    httpOptions: httpOptions
                }
            });
        } else return this.getVideosOperationInternal({
            operationName: operation.name,
            config: config
        });
    }
    async getVideosOperationInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = getOperationParametersToVertex(params);
            path = formatMap('{operationName}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = generateVideosOperationFromVertex(apiResponse);
                return resp;
            });
        } else {
            const body = getOperationParametersToMldev(params);
            path = formatMap('{operationName}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = generateVideosOperationFromMldev(apiResponse);
                return resp;
            });
        }
    }
    async fetchPredictVideosOperationInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = fetchPredictOperationParametersToVertex(params);
            path = formatMap('{resourceName}:fetchPredictOperation', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = generateVideosOperationFromVertex(apiResponse);
                return resp;
            });
        } else throw new Error('This method is only supported by the Vertex AI.');
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function prebuiltVoiceConfigToMldev(fromObject) {
    const toObject = {};
    const fromVoiceName = getValueByPath(fromObject, [
        'voiceName'
    ]);
    if (fromVoiceName != null) setValueByPath(toObject, [
        'voiceName'
    ], fromVoiceName);
    return toObject;
}
function voiceConfigToMldev(fromObject) {
    const toObject = {};
    const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
        'prebuiltVoiceConfig'
    ]);
    if (fromPrebuiltVoiceConfig != null) setValueByPath(toObject, [
        'prebuiltVoiceConfig'
    ], prebuiltVoiceConfigToMldev(fromPrebuiltVoiceConfig));
    return toObject;
}
function speakerVoiceConfigToMldev(fromObject) {
    const toObject = {};
    const fromSpeaker = getValueByPath(fromObject, [
        'speaker'
    ]);
    if (fromSpeaker != null) setValueByPath(toObject, [
        'speaker'
    ], fromSpeaker);
    const fromVoiceConfig = getValueByPath(fromObject, [
        'voiceConfig'
    ]);
    if (fromVoiceConfig != null) setValueByPath(toObject, [
        'voiceConfig'
    ], voiceConfigToMldev(fromVoiceConfig));
    return toObject;
}
function multiSpeakerVoiceConfigToMldev(fromObject) {
    const toObject = {};
    const fromSpeakerVoiceConfigs = getValueByPath(fromObject, [
        'speakerVoiceConfigs'
    ]);
    if (fromSpeakerVoiceConfigs != null) {
        let transformedList = fromSpeakerVoiceConfigs;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return speakerVoiceConfigToMldev(item);
        });
        setValueByPath(toObject, [
            'speakerVoiceConfigs'
        ], transformedList);
    }
    return toObject;
}
function speechConfigToMldev(fromObject) {
    const toObject = {};
    const fromVoiceConfig = getValueByPath(fromObject, [
        'voiceConfig'
    ]);
    if (fromVoiceConfig != null) setValueByPath(toObject, [
        'voiceConfig'
    ], voiceConfigToMldev(fromVoiceConfig));
    const fromMultiSpeakerVoiceConfig = getValueByPath(fromObject, [
        'multiSpeakerVoiceConfig'
    ]);
    if (fromMultiSpeakerVoiceConfig != null) setValueByPath(toObject, [
        'multiSpeakerVoiceConfig'
    ], multiSpeakerVoiceConfigToMldev(fromMultiSpeakerVoiceConfig));
    const fromLanguageCode = getValueByPath(fromObject, [
        'languageCode'
    ]);
    if (fromLanguageCode != null) setValueByPath(toObject, [
        'languageCode'
    ], fromLanguageCode);
    return toObject;
}
function videoMetadataToMldev(fromObject) {
    const toObject = {};
    const fromFps = getValueByPath(fromObject, [
        'fps'
    ]);
    if (fromFps != null) setValueByPath(toObject, [
        'fps'
    ], fromFps);
    const fromEndOffset = getValueByPath(fromObject, [
        'endOffset'
    ]);
    if (fromEndOffset != null) setValueByPath(toObject, [
        'endOffset'
    ], fromEndOffset);
    const fromStartOffset = getValueByPath(fromObject, [
        'startOffset'
    ]);
    if (fromStartOffset != null) setValueByPath(toObject, [
        'startOffset'
    ], fromStartOffset);
    return toObject;
}
function blobToMldev(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'displayName'
    ]) !== undefined) throw new Error('displayName parameter is not supported in Gemini API.');
    const fromData = getValueByPath(fromObject, [
        'data'
    ]);
    if (fromData != null) setValueByPath(toObject, [
        'data'
    ], fromData);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function fileDataToMldev(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'displayName'
    ]) !== undefined) throw new Error('displayName parameter is not supported in Gemini API.');
    const fromFileUri = getValueByPath(fromObject, [
        'fileUri'
    ]);
    if (fromFileUri != null) setValueByPath(toObject, [
        'fileUri'
    ], fromFileUri);
    const fromMimeType = getValueByPath(fromObject, [
        'mimeType'
    ]);
    if (fromMimeType != null) setValueByPath(toObject, [
        'mimeType'
    ], fromMimeType);
    return toObject;
}
function partToMldev(fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata'
    ]);
    if (fromVideoMetadata != null) setValueByPath(toObject, [
        'videoMetadata'
    ], videoMetadataToMldev(fromVideoMetadata));
    const fromThought = getValueByPath(fromObject, [
        'thought'
    ]);
    if (fromThought != null) setValueByPath(toObject, [
        'thought'
    ], fromThought);
    const fromInlineData = getValueByPath(fromObject, [
        'inlineData'
    ]);
    if (fromInlineData != null) setValueByPath(toObject, [
        'inlineData'
    ], blobToMldev(fromInlineData));
    const fromFileData = getValueByPath(fromObject, [
        'fileData'
    ]);
    if (fromFileData != null) setValueByPath(toObject, [
        'fileData'
    ], fileDataToMldev(fromFileData));
    const fromThoughtSignature = getValueByPath(fromObject, [
        'thoughtSignature'
    ]);
    if (fromThoughtSignature != null) setValueByPath(toObject, [
        'thoughtSignature'
    ], fromThoughtSignature);
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult'
    ]);
    if (fromCodeExecutionResult != null) setValueByPath(toObject, [
        'codeExecutionResult'
    ], fromCodeExecutionResult);
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode'
    ]);
    if (fromExecutableCode != null) setValueByPath(toObject, [
        'executableCode'
    ], fromExecutableCode);
    const fromFunctionCall = getValueByPath(fromObject, [
        'functionCall'
    ]);
    if (fromFunctionCall != null) setValueByPath(toObject, [
        'functionCall'
    ], fromFunctionCall);
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse'
    ]);
    if (fromFunctionResponse != null) setValueByPath(toObject, [
        'functionResponse'
    ], fromFunctionResponse);
    const fromText = getValueByPath(fromObject, [
        'text'
    ]);
    if (fromText != null) setValueByPath(toObject, [
        'text'
    ], fromText);
    return toObject;
}
function contentToMldev(fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, [
        'parts'
    ]);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return partToMldev(item);
        });
        setValueByPath(toObject, [
            'parts'
        ], transformedList);
    }
    const fromRole = getValueByPath(fromObject, [
        'role'
    ]);
    if (fromRole != null) setValueByPath(toObject, [
        'role'
    ], fromRole);
    return toObject;
}
function functionDeclarationToMldev(fromObject) {
    const toObject = {};
    const fromBehavior = getValueByPath(fromObject, [
        'behavior'
    ]);
    if (fromBehavior != null) setValueByPath(toObject, [
        'behavior'
    ], fromBehavior);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromParameters = getValueByPath(fromObject, [
        'parameters'
    ]);
    if (fromParameters != null) setValueByPath(toObject, [
        'parameters'
    ], fromParameters);
    const fromParametersJsonSchema = getValueByPath(fromObject, [
        'parametersJsonSchema'
    ]);
    if (fromParametersJsonSchema != null) setValueByPath(toObject, [
        'parametersJsonSchema'
    ], fromParametersJsonSchema);
    const fromResponse = getValueByPath(fromObject, [
        'response'
    ]);
    if (fromResponse != null) setValueByPath(toObject, [
        'response'
    ], fromResponse);
    const fromResponseJsonSchema = getValueByPath(fromObject, [
        'responseJsonSchema'
    ]);
    if (fromResponseJsonSchema != null) setValueByPath(toObject, [
        'responseJsonSchema'
    ], fromResponseJsonSchema);
    return toObject;
}
function intervalToMldev(fromObject) {
    const toObject = {};
    const fromStartTime = getValueByPath(fromObject, [
        'startTime'
    ]);
    if (fromStartTime != null) setValueByPath(toObject, [
        'startTime'
    ], fromStartTime);
    const fromEndTime = getValueByPath(fromObject, [
        'endTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    return toObject;
}
function googleSearchToMldev(fromObject) {
    const toObject = {};
    const fromTimeRangeFilter = getValueByPath(fromObject, [
        'timeRangeFilter'
    ]);
    if (fromTimeRangeFilter != null) setValueByPath(toObject, [
        'timeRangeFilter'
    ], intervalToMldev(fromTimeRangeFilter));
    return toObject;
}
function dynamicRetrievalConfigToMldev(fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, [
        'mode'
    ]);
    if (fromMode != null) setValueByPath(toObject, [
        'mode'
    ], fromMode);
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold'
    ]);
    if (fromDynamicThreshold != null) setValueByPath(toObject, [
        'dynamicThreshold'
    ], fromDynamicThreshold);
    return toObject;
}
function googleSearchRetrievalToMldev(fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig'
    ]);
    if (fromDynamicRetrievalConfig != null) setValueByPath(toObject, [
        'dynamicRetrievalConfig'
    ], dynamicRetrievalConfigToMldev(fromDynamicRetrievalConfig));
    return toObject;
}
function urlContextToMldev() {
    const toObject = {};
    return toObject;
}
function toolToMldev(fromObject) {
    const toObject = {};
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations'
    ]);
    if (fromFunctionDeclarations != null) {
        let transformedList = fromFunctionDeclarations;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return functionDeclarationToMldev(item);
        });
        setValueByPath(toObject, [
            'functionDeclarations'
        ], transformedList);
    }
    if (getValueByPath(fromObject, [
        'retrieval'
    ]) !== undefined) throw new Error('retrieval parameter is not supported in Gemini API.');
    const fromGoogleSearch = getValueByPath(fromObject, [
        'googleSearch'
    ]);
    if (fromGoogleSearch != null) setValueByPath(toObject, [
        'googleSearch'
    ], googleSearchToMldev(fromGoogleSearch));
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval'
    ]);
    if (fromGoogleSearchRetrieval != null) setValueByPath(toObject, [
        'googleSearchRetrieval'
    ], googleSearchRetrievalToMldev(fromGoogleSearchRetrieval));
    if (getValueByPath(fromObject, [
        'enterpriseWebSearch'
    ]) !== undefined) throw new Error('enterpriseWebSearch parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'googleMaps'
    ]) !== undefined) throw new Error('googleMaps parameter is not supported in Gemini API.');
    const fromUrlContext = getValueByPath(fromObject, [
        'urlContext'
    ]);
    if (fromUrlContext != null) setValueByPath(toObject, [
        'urlContext'
    ], urlContextToMldev());
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution'
    ]);
    if (fromCodeExecution != null) setValueByPath(toObject, [
        'codeExecution'
    ], fromCodeExecution);
    const fromComputerUse = getValueByPath(fromObject, [
        'computerUse'
    ]);
    if (fromComputerUse != null) setValueByPath(toObject, [
        'computerUse'
    ], fromComputerUse);
    return toObject;
}
function sessionResumptionConfigToMldev(fromObject) {
    const toObject = {};
    const fromHandle = getValueByPath(fromObject, [
        'handle'
    ]);
    if (fromHandle != null) setValueByPath(toObject, [
        'handle'
    ], fromHandle);
    if (getValueByPath(fromObject, [
        'transparent'
    ]) !== undefined) throw new Error('transparent parameter is not supported in Gemini API.');
    return toObject;
}
function audioTranscriptionConfigToMldev() {
    const toObject = {};
    return toObject;
}
function automaticActivityDetectionToMldev(fromObject) {
    const toObject = {};
    const fromDisabled = getValueByPath(fromObject, [
        'disabled'
    ]);
    if (fromDisabled != null) setValueByPath(toObject, [
        'disabled'
    ], fromDisabled);
    const fromStartOfSpeechSensitivity = getValueByPath(fromObject, [
        'startOfSpeechSensitivity'
    ]);
    if (fromStartOfSpeechSensitivity != null) setValueByPath(toObject, [
        'startOfSpeechSensitivity'
    ], fromStartOfSpeechSensitivity);
    const fromEndOfSpeechSensitivity = getValueByPath(fromObject, [
        'endOfSpeechSensitivity'
    ]);
    if (fromEndOfSpeechSensitivity != null) setValueByPath(toObject, [
        'endOfSpeechSensitivity'
    ], fromEndOfSpeechSensitivity);
    const fromPrefixPaddingMs = getValueByPath(fromObject, [
        'prefixPaddingMs'
    ]);
    if (fromPrefixPaddingMs != null) setValueByPath(toObject, [
        'prefixPaddingMs'
    ], fromPrefixPaddingMs);
    const fromSilenceDurationMs = getValueByPath(fromObject, [
        'silenceDurationMs'
    ]);
    if (fromSilenceDurationMs != null) setValueByPath(toObject, [
        'silenceDurationMs'
    ], fromSilenceDurationMs);
    return toObject;
}
function realtimeInputConfigToMldev(fromObject) {
    const toObject = {};
    const fromAutomaticActivityDetection = getValueByPath(fromObject, [
        'automaticActivityDetection'
    ]);
    if (fromAutomaticActivityDetection != null) setValueByPath(toObject, [
        'automaticActivityDetection'
    ], automaticActivityDetectionToMldev(fromAutomaticActivityDetection));
    const fromActivityHandling = getValueByPath(fromObject, [
        'activityHandling'
    ]);
    if (fromActivityHandling != null) setValueByPath(toObject, [
        'activityHandling'
    ], fromActivityHandling);
    const fromTurnCoverage = getValueByPath(fromObject, [
        'turnCoverage'
    ]);
    if (fromTurnCoverage != null) setValueByPath(toObject, [
        'turnCoverage'
    ], fromTurnCoverage);
    return toObject;
}
function slidingWindowToMldev(fromObject) {
    const toObject = {};
    const fromTargetTokens = getValueByPath(fromObject, [
        'targetTokens'
    ]);
    if (fromTargetTokens != null) setValueByPath(toObject, [
        'targetTokens'
    ], fromTargetTokens);
    return toObject;
}
function contextWindowCompressionConfigToMldev(fromObject) {
    const toObject = {};
    const fromTriggerTokens = getValueByPath(fromObject, [
        'triggerTokens'
    ]);
    if (fromTriggerTokens != null) setValueByPath(toObject, [
        'triggerTokens'
    ], fromTriggerTokens);
    const fromSlidingWindow = getValueByPath(fromObject, [
        'slidingWindow'
    ]);
    if (fromSlidingWindow != null) setValueByPath(toObject, [
        'slidingWindow'
    ], slidingWindowToMldev(fromSlidingWindow));
    return toObject;
}
function proactivityConfigToMldev(fromObject) {
    const toObject = {};
    const fromProactiveAudio = getValueByPath(fromObject, [
        'proactiveAudio'
    ]);
    if (fromProactiveAudio != null) setValueByPath(toObject, [
        'proactiveAudio'
    ], fromProactiveAudio);
    return toObject;
}
function liveConnectConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    const fromGenerationConfig = getValueByPath(fromObject, [
        'generationConfig'
    ]);
    if (parentObject !== undefined && fromGenerationConfig != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig'
    ], fromGenerationConfig);
    const fromResponseModalities = getValueByPath(fromObject, [
        'responseModalities'
    ]);
    if (parentObject !== undefined && fromResponseModalities != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'responseModalities'
    ], fromResponseModalities);
    const fromTemperature = getValueByPath(fromObject, [
        'temperature'
    ]);
    if (parentObject !== undefined && fromTemperature != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'temperature'
    ], fromTemperature);
    const fromTopP = getValueByPath(fromObject, [
        'topP'
    ]);
    if (parentObject !== undefined && fromTopP != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'topP'
    ], fromTopP);
    const fromTopK = getValueByPath(fromObject, [
        'topK'
    ]);
    if (parentObject !== undefined && fromTopK != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'topK'
    ], fromTopK);
    const fromMaxOutputTokens = getValueByPath(fromObject, [
        'maxOutputTokens'
    ]);
    if (parentObject !== undefined && fromMaxOutputTokens != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'maxOutputTokens'
    ], fromMaxOutputTokens);
    const fromMediaResolution = getValueByPath(fromObject, [
        'mediaResolution'
    ]);
    if (parentObject !== undefined && fromMediaResolution != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'mediaResolution'
    ], fromMediaResolution);
    const fromSeed = getValueByPath(fromObject, [
        'seed'
    ]);
    if (parentObject !== undefined && fromSeed != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'seed'
    ], fromSeed);
    const fromSpeechConfig = getValueByPath(fromObject, [
        'speechConfig'
    ]);
    if (parentObject !== undefined && fromSpeechConfig != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'speechConfig'
    ], speechConfigToMldev(tLiveSpeechConfig(fromSpeechConfig)));
    const fromEnableAffectiveDialog = getValueByPath(fromObject, [
        'enableAffectiveDialog'
    ]);
    if (parentObject !== undefined && fromEnableAffectiveDialog != null) setValueByPath(parentObject, [
        'setup',
        'generationConfig',
        'enableAffectiveDialog'
    ], fromEnableAffectiveDialog);
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction'
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) setValueByPath(parentObject, [
        'setup',
        'systemInstruction'
    ], contentToMldev(tContent(fromSystemInstruction)));
    const fromTools = getValueByPath(fromObject, [
        'tools'
    ]);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = tTools(fromTools);
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return toolToMldev(tTool(item));
        });
        setValueByPath(parentObject, [
            'setup',
            'tools'
        ], transformedList);
    }
    const fromSessionResumption = getValueByPath(fromObject, [
        'sessionResumption'
    ]);
    if (parentObject !== undefined && fromSessionResumption != null) setValueByPath(parentObject, [
        'setup',
        'sessionResumption'
    ], sessionResumptionConfigToMldev(fromSessionResumption));
    const fromInputAudioTranscription = getValueByPath(fromObject, [
        'inputAudioTranscription'
    ]);
    if (parentObject !== undefined && fromInputAudioTranscription != null) setValueByPath(parentObject, [
        'setup',
        'inputAudioTranscription'
    ], audioTranscriptionConfigToMldev());
    const fromOutputAudioTranscription = getValueByPath(fromObject, [
        'outputAudioTranscription'
    ]);
    if (parentObject !== undefined && fromOutputAudioTranscription != null) setValueByPath(parentObject, [
        'setup',
        'outputAudioTranscription'
    ], audioTranscriptionConfigToMldev());
    const fromRealtimeInputConfig = getValueByPath(fromObject, [
        'realtimeInputConfig'
    ]);
    if (parentObject !== undefined && fromRealtimeInputConfig != null) setValueByPath(parentObject, [
        'setup',
        'realtimeInputConfig'
    ], realtimeInputConfigToMldev(fromRealtimeInputConfig));
    const fromContextWindowCompression = getValueByPath(fromObject, [
        'contextWindowCompression'
    ]);
    if (parentObject !== undefined && fromContextWindowCompression != null) setValueByPath(parentObject, [
        'setup',
        'contextWindowCompression'
    ], contextWindowCompressionConfigToMldev(fromContextWindowCompression));
    const fromProactivity = getValueByPath(fromObject, [
        'proactivity'
    ]);
    if (parentObject !== undefined && fromProactivity != null) setValueByPath(parentObject, [
        'setup',
        'proactivity'
    ], proactivityConfigToMldev(fromProactivity));
    return toObject;
}
function liveConnectConstraintsToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'setup',
        'model'
    ], tModel(apiClient, fromModel));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], liveConnectConfigToMldev(fromConfig, toObject));
    return toObject;
}
function createAuthTokenConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromExpireTime = getValueByPath(fromObject, [
        'expireTime'
    ]);
    if (parentObject !== undefined && fromExpireTime != null) setValueByPath(parentObject, [
        'expireTime'
    ], fromExpireTime);
    const fromNewSessionExpireTime = getValueByPath(fromObject, [
        'newSessionExpireTime'
    ]);
    if (parentObject !== undefined && fromNewSessionExpireTime != null) setValueByPath(parentObject, [
        'newSessionExpireTime'
    ], fromNewSessionExpireTime);
    const fromUses = getValueByPath(fromObject, [
        'uses'
    ]);
    if (parentObject !== undefined && fromUses != null) setValueByPath(parentObject, [
        'uses'
    ], fromUses);
    const fromLiveConnectConstraints = getValueByPath(fromObject, [
        'liveConnectConstraints'
    ]);
    if (parentObject !== undefined && fromLiveConnectConstraints != null) setValueByPath(parentObject, [
        'bidiGenerateContentSetup'
    ], liveConnectConstraintsToMldev(apiClient, fromLiveConnectConstraints));
    const fromLockAdditionalFields = getValueByPath(fromObject, [
        'lockAdditionalFields'
    ]);
    if (parentObject !== undefined && fromLockAdditionalFields != null) setValueByPath(parentObject, [
        'fieldMask'
    ], fromLockAdditionalFields);
    return toObject;
}
function createAuthTokenParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], createAuthTokenConfigToMldev(apiClient, fromConfig, toObject));
    return toObject;
}
function authTokenFromMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    return toObject;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Returns a comma-separated list of field masks from a given object.
 *
 * @param setup The object to extract field masks from.
 * @return A comma-separated list of field masks.
 */ function getFieldMasks(setup) {
    const fields = [];
    for(const key in setup)if (Object.prototype.hasOwnProperty.call(setup, key)) {
        const value = setup[key];
        // 2nd layer, recursively get field masks see TODO(b/418290100)
        if (typeof value === 'object' && value != null && Object.keys(value).length > 0) {
            const field = Object.keys(value).map((kk)=>`${key}.${kk}`);
            fields.push(...field);
        } else fields.push(key); // 1st layer
    }
    return fields.join(',');
}
/**
 * Converts bidiGenerateContentSetup.
 * @param requestDict - The request dictionary.
 * @param config - The configuration object.
 * @return - The modified request dictionary.
 */ function convertBidiSetupToTokenSetup(requestDict, config) {
    // Convert bidiGenerateContentSetup from bidiGenerateContentSetup.setup.
    let setupForMaskGeneration = null;
    const bidiGenerateContentSetupValue = requestDict['bidiGenerateContentSetup'];
    if (typeof bidiGenerateContentSetupValue === 'object' && bidiGenerateContentSetupValue !== null && 'setup' in bidiGenerateContentSetupValue) {
        // Now we know bidiGenerateContentSetupValue is an object and has a 'setup'
        // property.
        const innerSetup = bidiGenerateContentSetupValue.setup;
        if (typeof innerSetup === 'object' && innerSetup !== null) {
            // Valid inner setup found.
            requestDict['bidiGenerateContentSetup'] = innerSetup;
            setupForMaskGeneration = innerSetup;
        } else // `bidiGenerateContentSetupValue.setup` is not a valid object; treat as
        // if bidiGenerateContentSetup is invalid.
        delete requestDict['bidiGenerateContentSetup'];
    } else if (bidiGenerateContentSetupValue !== undefined) // `bidiGenerateContentSetup` exists but not in the expected
    // shape {setup: {...}}; treat as invalid.
    delete requestDict['bidiGenerateContentSetup'];
    const preExistingFieldMask = requestDict['fieldMask'];
    // Handle mask generation setup.
    if (setupForMaskGeneration) {
        const generatedMaskFromBidi = getFieldMasks(setupForMaskGeneration);
        if (Array.isArray(config === null || config === void 0 ? void 0 : config.lockAdditionalFields) && (config === null || config === void 0 ? void 0 : config.lockAdditionalFields.length) === 0) {
            // Case 1: lockAdditionalFields is an empty array. Lock only fields from
            // bidi setup.
            if (generatedMaskFromBidi) // Only assign if mask is not empty
            requestDict['fieldMask'] = generatedMaskFromBidi;
            else delete requestDict['fieldMask']; // If mask is empty, effectively no
        } else if ((config === null || config === void 0 ? void 0 : config.lockAdditionalFields) && config.lockAdditionalFields.length > 0 && preExistingFieldMask !== null && Array.isArray(preExistingFieldMask) && preExistingFieldMask.length > 0) {
            // Case 2: Lock fields from bidi setup + additional fields
            // (preExistingFieldMask).
            const generationConfigFields = [
                'temperature',
                'topK',
                'topP',
                'maxOutputTokens',
                'responseModalities',
                'seed',
                'speechConfig'
            ];
            let mappedFieldsFromPreExisting = [];
            if (preExistingFieldMask.length > 0) mappedFieldsFromPreExisting = preExistingFieldMask.map((field)=>{
                if (generationConfigFields.includes(field)) return `generationConfig.${field}`;
                return field; // Keep original field name if not in
            // generationConfigFields
            });
            const finalMaskParts = [];
            if (generatedMaskFromBidi) finalMaskParts.push(generatedMaskFromBidi);
            if (mappedFieldsFromPreExisting.length > 0) finalMaskParts.push(...mappedFieldsFromPreExisting);
            if (finalMaskParts.length > 0) requestDict['fieldMask'] = finalMaskParts.join(',');
            else // If no fields from bidi and no valid additional fields from
            // pre-existing mask.
            delete requestDict['fieldMask'];
        } else // Case 3: "Lock all fields" (meaning, don't send a field_mask, let server
        // defaults apply or all are mutable). This is hit if:
        //  - `config.lockAdditionalFields` is undefined.
        //  - `config.lockAdditionalFields` is non-empty, BUT
        //  `preExistingFieldMask` is null, not a string, or an empty string.
        delete requestDict['fieldMask'];
    } else // No valid `bidiGenerateContentSetup` was found or extracted.
    // "Lock additional null fields if any".
    if (preExistingFieldMask !== null && Array.isArray(preExistingFieldMask) && preExistingFieldMask.length > 0) // If there's a pre-existing field mask, it's a string, and it's not
    // empty, then we should lock all fields.
    requestDict['fieldMask'] = preExistingFieldMask.join(',');
    else delete requestDict['fieldMask'];
    return requestDict;
}
class Tokens extends BaseModule {
    constructor(apiClient){
        super();
        this.apiClient = apiClient;
    }
    /**
     * Creates an ephemeral auth token resource.
     *
     * @experimental
     *
     * @remarks
     * Ephermeral auth tokens is only supported in the Gemini Developer API.
     * It can be used for the session connection to the Live constrained API.
     *
     * @param params - The parameters for the create request.
     * @return The created auth token.
     *
     * @example
     * ```ts
     * // Case 1: If LiveEphemeralParameters is unset, unlock LiveConnectConfig
     * // when using the token in Live API sessions. Each session connection can
     * // use a different configuration.
     * const config: CreateAuthTokenConfig = {
     *     uses: 3,
     *     expireTime: '2025-05-01T00:00:00Z',
     * }
     * const token = await ai.tokens.create(config);
     *
     * // Case 2: If LiveEphemeralParameters is set, lock all fields in
     * // LiveConnectConfig when using the token in Live API sessions. For
     * // example, changing `outputAudioTranscription` in the Live API
     * // connection will be ignored by the API.
     * const config: CreateAuthTokenConfig =
     *     uses: 3,
     *     expireTime: '2025-05-01T00:00:00Z',
     *     LiveEphemeralParameters: {
     *        model: 'gemini-2.0-flash-001',
     *        config: {
     *           'responseModalities': ['AUDIO'],
     *           'systemInstruction': 'Always answer in English.',
     *        }
     *     }
     * }
     * const token = await ai.tokens.create(config);
     *
     * // Case 3: If LiveEphemeralParameters is set and lockAdditionalFields is
     * // set, lock LiveConnectConfig with set and additional fields (e.g.
     * // responseModalities, systemInstruction, temperature in this example) when
     * // using the token in Live API sessions.
     * const config: CreateAuthTokenConfig =
     *     uses: 3,
     *     expireTime: '2025-05-01T00:00:00Z',
     *     LiveEphemeralParameters: {
     *        model: 'gemini-2.0-flash-001',
     *        config: {
     *           'responseModalities': ['AUDIO'],
     *           'systemInstruction': 'Always answer in English.',
     *        }
     *     },
     *     lockAdditionalFields: ['temperature'],
     * }
     * const token = await ai.tokens.create(config);
     *
     * // Case 4: If LiveEphemeralParameters is set and lockAdditionalFields is
     * // empty array, lock LiveConnectConfig with set fields (e.g.
     * // responseModalities, systemInstruction in this example) when using the
     * // token in Live API sessions.
     * const config: CreateAuthTokenConfig =
     *     uses: 3,
     *     expireTime: '2025-05-01T00:00:00Z',
     *     LiveEphemeralParameters: {
     *        model: 'gemini-2.0-flash-001',
     *        config: {
     *           'responseModalities': ['AUDIO'],
     *           'systemInstruction': 'Always answer in English.',
     *        }
     *     },
     *     lockAdditionalFields: [],
     * }
     * const token = await ai.tokens.create(config);
     * ```
     */ async create(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) throw new Error('The client.tokens.create method is only supported by the Gemini Developer API.');
        else {
            const body = createAuthTokenParametersToMldev(this.apiClient, params);
            path = formatMap('auth_tokens', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            const transformedBody = convertBidiSetupToTokenSetup(body, params.config);
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(transformedBody),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = authTokenFromMldev(apiResponse);
                return resp;
            });
        }
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ // Code generated by the Google Gen AI SDK generator DO NOT EDIT.
function getTuningJobParametersToMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], fromName);
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function listTuningJobsConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, [
        'pageSize'
    ]);
    if (parentObject !== undefined && fromPageSize != null) setValueByPath(parentObject, [
        '_query',
        'pageSize'
    ], fromPageSize);
    const fromPageToken = getValueByPath(fromObject, [
        'pageToken'
    ]);
    if (parentObject !== undefined && fromPageToken != null) setValueByPath(parentObject, [
        '_query',
        'pageToken'
    ], fromPageToken);
    const fromFilter = getValueByPath(fromObject, [
        'filter'
    ]);
    if (parentObject !== undefined && fromFilter != null) setValueByPath(parentObject, [
        '_query',
        'filter'
    ], fromFilter);
    return toObject;
}
function listTuningJobsParametersToMldev(fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], listTuningJobsConfigToMldev(fromConfig, toObject));
    return toObject;
}
function tuningExampleToMldev(fromObject) {
    const toObject = {};
    const fromTextInput = getValueByPath(fromObject, [
        'textInput'
    ]);
    if (fromTextInput != null) setValueByPath(toObject, [
        'textInput'
    ], fromTextInput);
    const fromOutput = getValueByPath(fromObject, [
        'output'
    ]);
    if (fromOutput != null) setValueByPath(toObject, [
        'output'
    ], fromOutput);
    return toObject;
}
function tuningDatasetToMldev(fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'gcsUri'
    ]) !== undefined) throw new Error('gcsUri parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'vertexDatasetResource'
    ]) !== undefined) throw new Error('vertexDatasetResource parameter is not supported in Gemini API.');
    const fromExamples = getValueByPath(fromObject, [
        'examples'
    ]);
    if (fromExamples != null) {
        let transformedList = fromExamples;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return tuningExampleToMldev(item);
        });
        setValueByPath(toObject, [
            'examples',
            'examples'
        ], transformedList);
    }
    return toObject;
}
function createTuningJobConfigToMldev(fromObject, parentObject) {
    const toObject = {};
    if (getValueByPath(fromObject, [
        'validationDataset'
    ]) !== undefined) throw new Error('validationDataset parameter is not supported in Gemini API.');
    const fromTunedModelDisplayName = getValueByPath(fromObject, [
        'tunedModelDisplayName'
    ]);
    if (parentObject !== undefined && fromTunedModelDisplayName != null) setValueByPath(parentObject, [
        'displayName'
    ], fromTunedModelDisplayName);
    if (getValueByPath(fromObject, [
        'description'
    ]) !== undefined) throw new Error('description parameter is not supported in Gemini API.');
    const fromEpochCount = getValueByPath(fromObject, [
        'epochCount'
    ]);
    if (parentObject !== undefined && fromEpochCount != null) setValueByPath(parentObject, [
        'tuningTask',
        'hyperparameters',
        'epochCount'
    ], fromEpochCount);
    const fromLearningRateMultiplier = getValueByPath(fromObject, [
        'learningRateMultiplier'
    ]);
    if (fromLearningRateMultiplier != null) setValueByPath(toObject, [
        'tuningTask',
        'hyperparameters',
        'learningRateMultiplier'
    ], fromLearningRateMultiplier);
    if (getValueByPath(fromObject, [
        'exportLastCheckpointOnly'
    ]) !== undefined) throw new Error('exportLastCheckpointOnly parameter is not supported in Gemini API.');
    if (getValueByPath(fromObject, [
        'adapterSize'
    ]) !== undefined) throw new Error('adapterSize parameter is not supported in Gemini API.');
    const fromBatchSize = getValueByPath(fromObject, [
        'batchSize'
    ]);
    if (parentObject !== undefined && fromBatchSize != null) setValueByPath(parentObject, [
        'tuningTask',
        'hyperparameters',
        'batchSize'
    ], fromBatchSize);
    const fromLearningRate = getValueByPath(fromObject, [
        'learningRate'
    ]);
    if (parentObject !== undefined && fromLearningRate != null) setValueByPath(parentObject, [
        'tuningTask',
        'hyperparameters',
        'learningRate'
    ], fromLearningRate);
    return toObject;
}
function createTuningJobParametersToMldev(fromObject) {
    const toObject = {};
    const fromBaseModel = getValueByPath(fromObject, [
        'baseModel'
    ]);
    if (fromBaseModel != null) setValueByPath(toObject, [
        'baseModel'
    ], fromBaseModel);
    const fromTrainingDataset = getValueByPath(fromObject, [
        'trainingDataset'
    ]);
    if (fromTrainingDataset != null) setValueByPath(toObject, [
        'tuningTask',
        'trainingData'
    ], tuningDatasetToMldev(fromTrainingDataset));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], createTuningJobConfigToMldev(fromConfig, toObject));
    return toObject;
}
function getTuningJobParametersToVertex(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        '_url',
        'name'
    ], fromName);
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], fromConfig);
    return toObject;
}
function listTuningJobsConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, [
        'pageSize'
    ]);
    if (parentObject !== undefined && fromPageSize != null) setValueByPath(parentObject, [
        '_query',
        'pageSize'
    ], fromPageSize);
    const fromPageToken = getValueByPath(fromObject, [
        'pageToken'
    ]);
    if (parentObject !== undefined && fromPageToken != null) setValueByPath(parentObject, [
        '_query',
        'pageToken'
    ], fromPageToken);
    const fromFilter = getValueByPath(fromObject, [
        'filter'
    ]);
    if (parentObject !== undefined && fromFilter != null) setValueByPath(parentObject, [
        '_query',
        'filter'
    ], fromFilter);
    return toObject;
}
function listTuningJobsParametersToVertex(fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], listTuningJobsConfigToVertex(fromConfig, toObject));
    return toObject;
}
function tuningDatasetToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromGcsUri = getValueByPath(fromObject, [
        'gcsUri'
    ]);
    if (parentObject !== undefined && fromGcsUri != null) setValueByPath(parentObject, [
        'supervisedTuningSpec',
        'trainingDatasetUri'
    ], fromGcsUri);
    const fromVertexDatasetResource = getValueByPath(fromObject, [
        'vertexDatasetResource'
    ]);
    if (parentObject !== undefined && fromVertexDatasetResource != null) setValueByPath(parentObject, [
        'supervisedTuningSpec',
        'trainingDatasetUri'
    ], fromVertexDatasetResource);
    if (getValueByPath(fromObject, [
        'examples'
    ]) !== undefined) throw new Error('examples parameter is not supported in Vertex AI.');
    return toObject;
}
function tuningValidationDatasetToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromGcsUri = getValueByPath(fromObject, [
        'gcsUri'
    ]);
    if (fromGcsUri != null) setValueByPath(toObject, [
        'validationDatasetUri'
    ], fromGcsUri);
    const fromVertexDatasetResource = getValueByPath(fromObject, [
        'vertexDatasetResource'
    ]);
    if (parentObject !== undefined && fromVertexDatasetResource != null) setValueByPath(parentObject, [
        'supervisedTuningSpec',
        'trainingDatasetUri'
    ], fromVertexDatasetResource);
    return toObject;
}
function createTuningJobConfigToVertex(fromObject, parentObject) {
    const toObject = {};
    const fromValidationDataset = getValueByPath(fromObject, [
        'validationDataset'
    ]);
    if (parentObject !== undefined && fromValidationDataset != null) setValueByPath(parentObject, [
        'supervisedTuningSpec'
    ], tuningValidationDatasetToVertex(fromValidationDataset, toObject));
    const fromTunedModelDisplayName = getValueByPath(fromObject, [
        'tunedModelDisplayName'
    ]);
    if (parentObject !== undefined && fromTunedModelDisplayName != null) setValueByPath(parentObject, [
        'tunedModelDisplayName'
    ], fromTunedModelDisplayName);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (parentObject !== undefined && fromDescription != null) setValueByPath(parentObject, [
        'description'
    ], fromDescription);
    const fromEpochCount = getValueByPath(fromObject, [
        'epochCount'
    ]);
    if (parentObject !== undefined && fromEpochCount != null) setValueByPath(parentObject, [
        'supervisedTuningSpec',
        'hyperParameters',
        'epochCount'
    ], fromEpochCount);
    const fromLearningRateMultiplier = getValueByPath(fromObject, [
        'learningRateMultiplier'
    ]);
    if (parentObject !== undefined && fromLearningRateMultiplier != null) setValueByPath(parentObject, [
        'supervisedTuningSpec',
        'hyperParameters',
        'learningRateMultiplier'
    ], fromLearningRateMultiplier);
    const fromExportLastCheckpointOnly = getValueByPath(fromObject, [
        'exportLastCheckpointOnly'
    ]);
    if (parentObject !== undefined && fromExportLastCheckpointOnly != null) setValueByPath(parentObject, [
        'supervisedTuningSpec',
        'exportLastCheckpointOnly'
    ], fromExportLastCheckpointOnly);
    const fromAdapterSize = getValueByPath(fromObject, [
        'adapterSize'
    ]);
    if (parentObject !== undefined && fromAdapterSize != null) setValueByPath(parentObject, [
        'supervisedTuningSpec',
        'hyperParameters',
        'adapterSize'
    ], fromAdapterSize);
    if (getValueByPath(fromObject, [
        'batchSize'
    ]) !== undefined) throw new Error('batchSize parameter is not supported in Vertex AI.');
    if (getValueByPath(fromObject, [
        'learningRate'
    ]) !== undefined) throw new Error('learningRate parameter is not supported in Vertex AI.');
    return toObject;
}
function createTuningJobParametersToVertex(fromObject) {
    const toObject = {};
    const fromBaseModel = getValueByPath(fromObject, [
        'baseModel'
    ]);
    if (fromBaseModel != null) setValueByPath(toObject, [
        'baseModel'
    ], fromBaseModel);
    const fromTrainingDataset = getValueByPath(fromObject, [
        'trainingDataset'
    ]);
    if (fromTrainingDataset != null) setValueByPath(toObject, [
        'supervisedTuningSpec',
        'trainingDatasetUri'
    ], tuningDatasetToVertex(fromTrainingDataset, toObject));
    const fromConfig = getValueByPath(fromObject, [
        'config'
    ]);
    if (fromConfig != null) setValueByPath(toObject, [
        'config'
    ], createTuningJobConfigToVertex(fromConfig, toObject));
    return toObject;
}
function tunedModelFromMldev(fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'model'
    ], fromModel);
    const fromEndpoint = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromEndpoint != null) setValueByPath(toObject, [
        'endpoint'
    ], fromEndpoint);
    return toObject;
}
function tuningJobFromMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromState = getValueByPath(fromObject, [
        'state'
    ]);
    if (fromState != null) setValueByPath(toObject, [
        'state'
    ], tTuningJobStatus(fromState));
    const fromCreateTime = getValueByPath(fromObject, [
        'createTime'
    ]);
    if (fromCreateTime != null) setValueByPath(toObject, [
        'createTime'
    ], fromCreateTime);
    const fromStartTime = getValueByPath(fromObject, [
        'tuningTask',
        'startTime'
    ]);
    if (fromStartTime != null) setValueByPath(toObject, [
        'startTime'
    ], fromStartTime);
    const fromEndTime = getValueByPath(fromObject, [
        'tuningTask',
        'completeTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    const fromUpdateTime = getValueByPath(fromObject, [
        'updateTime'
    ]);
    if (fromUpdateTime != null) setValueByPath(toObject, [
        'updateTime'
    ], fromUpdateTime);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromBaseModel = getValueByPath(fromObject, [
        'baseModel'
    ]);
    if (fromBaseModel != null) setValueByPath(toObject, [
        'baseModel'
    ], fromBaseModel);
    const fromTunedModel = getValueByPath(fromObject, [
        '_self'
    ]);
    if (fromTunedModel != null) setValueByPath(toObject, [
        'tunedModel'
    ], tunedModelFromMldev(fromTunedModel));
    const fromDistillationSpec = getValueByPath(fromObject, [
        'distillationSpec'
    ]);
    if (fromDistillationSpec != null) setValueByPath(toObject, [
        'distillationSpec'
    ], fromDistillationSpec);
    const fromExperiment = getValueByPath(fromObject, [
        'experiment'
    ]);
    if (fromExperiment != null) setValueByPath(toObject, [
        'experiment'
    ], fromExperiment);
    const fromLabels = getValueByPath(fromObject, [
        'labels'
    ]);
    if (fromLabels != null) setValueByPath(toObject, [
        'labels'
    ], fromLabels);
    const fromPipelineJob = getValueByPath(fromObject, [
        'pipelineJob'
    ]);
    if (fromPipelineJob != null) setValueByPath(toObject, [
        'pipelineJob'
    ], fromPipelineJob);
    const fromSatisfiesPzi = getValueByPath(fromObject, [
        'satisfiesPzi'
    ]);
    if (fromSatisfiesPzi != null) setValueByPath(toObject, [
        'satisfiesPzi'
    ], fromSatisfiesPzi);
    const fromSatisfiesPzs = getValueByPath(fromObject, [
        'satisfiesPzs'
    ]);
    if (fromSatisfiesPzs != null) setValueByPath(toObject, [
        'satisfiesPzs'
    ], fromSatisfiesPzs);
    const fromServiceAccount = getValueByPath(fromObject, [
        'serviceAccount'
    ]);
    if (fromServiceAccount != null) setValueByPath(toObject, [
        'serviceAccount'
    ], fromServiceAccount);
    const fromTunedModelDisplayName = getValueByPath(fromObject, [
        'tunedModelDisplayName'
    ]);
    if (fromTunedModelDisplayName != null) setValueByPath(toObject, [
        'tunedModelDisplayName'
    ], fromTunedModelDisplayName);
    return toObject;
}
function listTuningJobsResponseFromMldev(fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken'
    ]);
    if (fromNextPageToken != null) setValueByPath(toObject, [
        'nextPageToken'
    ], fromNextPageToken);
    const fromTuningJobs = getValueByPath(fromObject, [
        'tunedModels'
    ]);
    if (fromTuningJobs != null) {
        let transformedList = fromTuningJobs;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return tuningJobFromMldev(item);
        });
        setValueByPath(toObject, [
            'tuningJobs'
        ], transformedList);
    }
    return toObject;
}
function operationFromMldev(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromMetadata = getValueByPath(fromObject, [
        'metadata'
    ]);
    if (fromMetadata != null) setValueByPath(toObject, [
        'metadata'
    ], fromMetadata);
    const fromDone = getValueByPath(fromObject, [
        'done'
    ]);
    if (fromDone != null) setValueByPath(toObject, [
        'done'
    ], fromDone);
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], fromError);
    return toObject;
}
function tunedModelCheckpointFromVertex(fromObject) {
    const toObject = {};
    const fromCheckpointId = getValueByPath(fromObject, [
        'checkpointId'
    ]);
    if (fromCheckpointId != null) setValueByPath(toObject, [
        'checkpointId'
    ], fromCheckpointId);
    const fromEpoch = getValueByPath(fromObject, [
        'epoch'
    ]);
    if (fromEpoch != null) setValueByPath(toObject, [
        'epoch'
    ], fromEpoch);
    const fromStep = getValueByPath(fromObject, [
        'step'
    ]);
    if (fromStep != null) setValueByPath(toObject, [
        'step'
    ], fromStep);
    const fromEndpoint = getValueByPath(fromObject, [
        'endpoint'
    ]);
    if (fromEndpoint != null) setValueByPath(toObject, [
        'endpoint'
    ], fromEndpoint);
    return toObject;
}
function tunedModelFromVertex(fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, [
        'model'
    ]);
    if (fromModel != null) setValueByPath(toObject, [
        'model'
    ], fromModel);
    const fromEndpoint = getValueByPath(fromObject, [
        'endpoint'
    ]);
    if (fromEndpoint != null) setValueByPath(toObject, [
        'endpoint'
    ], fromEndpoint);
    const fromCheckpoints = getValueByPath(fromObject, [
        'checkpoints'
    ]);
    if (fromCheckpoints != null) {
        let transformedList = fromCheckpoints;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return tunedModelCheckpointFromVertex(item);
        });
        setValueByPath(toObject, [
            'checkpoints'
        ], transformedList);
    }
    return toObject;
}
function tuningJobFromVertex(fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, [
        'name'
    ]);
    if (fromName != null) setValueByPath(toObject, [
        'name'
    ], fromName);
    const fromState = getValueByPath(fromObject, [
        'state'
    ]);
    if (fromState != null) setValueByPath(toObject, [
        'state'
    ], tTuningJobStatus(fromState));
    const fromCreateTime = getValueByPath(fromObject, [
        'createTime'
    ]);
    if (fromCreateTime != null) setValueByPath(toObject, [
        'createTime'
    ], fromCreateTime);
    const fromStartTime = getValueByPath(fromObject, [
        'startTime'
    ]);
    if (fromStartTime != null) setValueByPath(toObject, [
        'startTime'
    ], fromStartTime);
    const fromEndTime = getValueByPath(fromObject, [
        'endTime'
    ]);
    if (fromEndTime != null) setValueByPath(toObject, [
        'endTime'
    ], fromEndTime);
    const fromUpdateTime = getValueByPath(fromObject, [
        'updateTime'
    ]);
    if (fromUpdateTime != null) setValueByPath(toObject, [
        'updateTime'
    ], fromUpdateTime);
    const fromError = getValueByPath(fromObject, [
        'error'
    ]);
    if (fromError != null) setValueByPath(toObject, [
        'error'
    ], fromError);
    const fromDescription = getValueByPath(fromObject, [
        'description'
    ]);
    if (fromDescription != null) setValueByPath(toObject, [
        'description'
    ], fromDescription);
    const fromBaseModel = getValueByPath(fromObject, [
        'baseModel'
    ]);
    if (fromBaseModel != null) setValueByPath(toObject, [
        'baseModel'
    ], fromBaseModel);
    const fromTunedModel = getValueByPath(fromObject, [
        'tunedModel'
    ]);
    if (fromTunedModel != null) setValueByPath(toObject, [
        'tunedModel'
    ], tunedModelFromVertex(fromTunedModel));
    const fromSupervisedTuningSpec = getValueByPath(fromObject, [
        'supervisedTuningSpec'
    ]);
    if (fromSupervisedTuningSpec != null) setValueByPath(toObject, [
        'supervisedTuningSpec'
    ], fromSupervisedTuningSpec);
    const fromTuningDataStats = getValueByPath(fromObject, [
        'tuningDataStats'
    ]);
    if (fromTuningDataStats != null) setValueByPath(toObject, [
        'tuningDataStats'
    ], fromTuningDataStats);
    const fromEncryptionSpec = getValueByPath(fromObject, [
        'encryptionSpec'
    ]);
    if (fromEncryptionSpec != null) setValueByPath(toObject, [
        'encryptionSpec'
    ], fromEncryptionSpec);
    const fromPartnerModelTuningSpec = getValueByPath(fromObject, [
        'partnerModelTuningSpec'
    ]);
    if (fromPartnerModelTuningSpec != null) setValueByPath(toObject, [
        'partnerModelTuningSpec'
    ], fromPartnerModelTuningSpec);
    const fromDistillationSpec = getValueByPath(fromObject, [
        'distillationSpec'
    ]);
    if (fromDistillationSpec != null) setValueByPath(toObject, [
        'distillationSpec'
    ], fromDistillationSpec);
    const fromExperiment = getValueByPath(fromObject, [
        'experiment'
    ]);
    if (fromExperiment != null) setValueByPath(toObject, [
        'experiment'
    ], fromExperiment);
    const fromLabels = getValueByPath(fromObject, [
        'labels'
    ]);
    if (fromLabels != null) setValueByPath(toObject, [
        'labels'
    ], fromLabels);
    const fromPipelineJob = getValueByPath(fromObject, [
        'pipelineJob'
    ]);
    if (fromPipelineJob != null) setValueByPath(toObject, [
        'pipelineJob'
    ], fromPipelineJob);
    const fromSatisfiesPzi = getValueByPath(fromObject, [
        'satisfiesPzi'
    ]);
    if (fromSatisfiesPzi != null) setValueByPath(toObject, [
        'satisfiesPzi'
    ], fromSatisfiesPzi);
    const fromSatisfiesPzs = getValueByPath(fromObject, [
        'satisfiesPzs'
    ]);
    if (fromSatisfiesPzs != null) setValueByPath(toObject, [
        'satisfiesPzs'
    ], fromSatisfiesPzs);
    const fromServiceAccount = getValueByPath(fromObject, [
        'serviceAccount'
    ]);
    if (fromServiceAccount != null) setValueByPath(toObject, [
        'serviceAccount'
    ], fromServiceAccount);
    const fromTunedModelDisplayName = getValueByPath(fromObject, [
        'tunedModelDisplayName'
    ]);
    if (fromTunedModelDisplayName != null) setValueByPath(toObject, [
        'tunedModelDisplayName'
    ], fromTunedModelDisplayName);
    return toObject;
}
function listTuningJobsResponseFromVertex(fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken'
    ]);
    if (fromNextPageToken != null) setValueByPath(toObject, [
        'nextPageToken'
    ], fromNextPageToken);
    const fromTuningJobs = getValueByPath(fromObject, [
        'tuningJobs'
    ]);
    if (fromTuningJobs != null) {
        let transformedList = fromTuningJobs;
        if (Array.isArray(transformedList)) transformedList = transformedList.map((item)=>{
            return tuningJobFromVertex(item);
        });
        setValueByPath(toObject, [
            'tuningJobs'
        ], transformedList);
    }
    return toObject;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Tunings extends BaseModule {
    constructor(apiClient){
        super();
        this.apiClient = apiClient;
        /**
         * Gets a TuningJob.
         *
         * @param name - The resource name of the tuning job.
         * @return - A TuningJob object.
         *
         * @experimental - The SDK's tuning implementation is experimental, and may
         * change in future versions.
         */ this.get = async (params)=>{
            return await this.getInternal(params);
        };
        /**
         * Lists tuning jobs.
         *
         * @param config - The configuration for the list request.
         * @return - A list of tuning jobs.
         *
         * @experimental - The SDK's tuning implementation is experimental, and may
         * change in future versions.
         */ this.list = async (params = {})=>{
            return new Pager(PagedItem.PAGED_ITEM_TUNING_JOBS, (x)=>this.listInternal(x), await this.listInternal(params), params);
        };
        /**
         * Creates a supervised fine-tuning job.
         *
         * @param params - The parameters for the tuning job.
         * @return - A TuningJob operation.
         *
         * @experimental - The SDK's tuning implementation is experimental, and may
         * change in future versions.
         */ this.tune = async (params)=>{
            if (this.apiClient.isVertexAI()) return await this.tuneInternal(params);
            else {
                const operation = await this.tuneMldevInternal(params);
                let tunedModelName = '';
                if (operation['metadata'] !== undefined && operation['metadata']['tunedModel'] !== undefined) tunedModelName = operation['metadata']['tunedModel'];
                else if (operation['name'] !== undefined && operation['name'].includes('/operations/')) tunedModelName = operation['name'].split('/operations/')[0];
                const tuningJob = {
                    name: tunedModelName,
                    state: JobState.JOB_STATE_QUEUED
                };
                return tuningJob;
            }
        };
    }
    async getInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = getTuningJobParametersToVertex(params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = tuningJobFromVertex(apiResponse);
                return resp;
            });
        } else {
            const body = getTuningJobParametersToMldev(params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = tuningJobFromMldev(apiResponse);
                return resp;
            });
        }
    }
    async listInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = listTuningJobsParametersToVertex(params);
            path = formatMap('tuningJobs', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = listTuningJobsResponseFromVertex(apiResponse);
                const typedResp = new ListTuningJobsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        } else {
            const body = listTuningJobsParametersToMldev(params);
            path = formatMap('tunedModels', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = listTuningJobsResponseFromMldev(apiResponse);
                const typedResp = new ListTuningJobsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    async tuneInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = createTuningJobParametersToVertex(params);
            path = formatMap('tuningJobs', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = tuningJobFromVertex(apiResponse);
                return resp;
            });
        } else throw new Error('This method is only supported by the Vertex AI.');
    }
    async tuneMldevInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) throw new Error('This method is only supported by the Gemini Developer API.');
        else {
            const body = createTuningJobParametersToMldev(params);
            path = formatMap('tunedModels', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient.request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal
            }).then((httpResponse)=>{
                return httpResponse.json();
            });
            return response.then((apiResponse)=>{
                const resp = operationFromMldev(apiResponse);
                return resp;
            });
        }
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class BrowserDownloader {
    async download(_params, _apiClient) {
        throw new Error('Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.');
    }
}
const MAX_CHUNK_SIZE = 8388608; // bytes
const MAX_RETRY_COUNT = 3;
const INITIAL_RETRY_DELAY_MS = 1000;
const DELAY_MULTIPLIER = 2;
const X_GOOG_UPLOAD_STATUS_HEADER_FIELD = 'x-goog-upload-status';
async function uploadBlob(file, uploadUrl, apiClient) {
    var _a, _b, _c;
    let fileSize = 0;
    let offset = 0;
    let response = new HttpResponse(new Response());
    let uploadCommand = 'upload';
    fileSize = file.size;
    while(offset < fileSize){
        const chunkSize = Math.min(MAX_CHUNK_SIZE, fileSize - offset);
        const chunk = file.slice(offset, offset + chunkSize);
        if (offset + chunkSize >= fileSize) uploadCommand += ', finalize';
        let retryCount = 0;
        let currentDelayMs = INITIAL_RETRY_DELAY_MS;
        while(retryCount < MAX_RETRY_COUNT){
            response = await apiClient.request({
                path: '',
                body: chunk,
                httpMethod: 'POST',
                httpOptions: {
                    apiVersion: '',
                    baseUrl: uploadUrl,
                    headers: {
                        'X-Goog-Upload-Command': uploadCommand,
                        'X-Goog-Upload-Offset': String(offset),
                        'Content-Length': String(chunkSize)
                    }
                }
            });
            if ((_a = response === null || response === void 0 ? void 0 : response.headers) === null || _a === void 0 ? void 0 : _a[X_GOOG_UPLOAD_STATUS_HEADER_FIELD]) break;
            retryCount++;
            await sleep(currentDelayMs);
            currentDelayMs = currentDelayMs * DELAY_MULTIPLIER;
        }
        offset += chunkSize;
        // The `x-goog-upload-status` header field can be `active`, `final` and
        //`cancelled` in resposne.
        if (((_b = response === null || response === void 0 ? void 0 : response.headers) === null || _b === void 0 ? void 0 : _b[X_GOOG_UPLOAD_STATUS_HEADER_FIELD]) !== 'active') break;
        // TODO(b/401391430) Investigate why the upload status is not finalized
        // even though all content has been uploaded.
        if (fileSize <= offset) throw new Error('All content has been uploaded, but the upload status is not finalized.');
    }
    const responseJson = await (response === null || response === void 0 ? void 0 : response.json());
    if (((_c = response === null || response === void 0 ? void 0 : response.headers) === null || _c === void 0 ? void 0 : _c[X_GOOG_UPLOAD_STATUS_HEADER_FIELD]) !== 'final') throw new Error('Failed to upload file: Upload status is not finalized.');
    return responseJson['file'];
}
async function getBlobStat(file) {
    const fileStat = {
        size: file.size,
        type: file.type
    };
    return fileStat;
}
function sleep(ms) {
    return new Promise((resolvePromise)=>setTimeout(resolvePromise, ms));
}
class BrowserUploader {
    async upload(file, uploadUrl, apiClient) {
        if (typeof file === 'string') throw new Error('File path is not supported in browser uploader.');
        return await uploadBlob(file, uploadUrl, apiClient);
    }
    async stat(file) {
        if (typeof file === 'string') throw new Error('File path is not supported in browser uploader.');
        else return await getBlobStat(file);
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class BrowserWebSocketFactory {
    create(url, headers, callbacks) {
        return new BrowserWebSocket(url, headers, callbacks);
    }
}
class BrowserWebSocket {
    constructor(url, headers, callbacks){
        this.url = url;
        this.headers = headers;
        this.callbacks = callbacks;
    }
    connect() {
        this.ws = new WebSocket(this.url);
        this.ws.onopen = this.callbacks.onopen;
        this.ws.onerror = this.callbacks.onerror;
        this.ws.onclose = this.callbacks.onclose;
        this.ws.onmessage = this.callbacks.onmessage;
    }
    send(message) {
        if (this.ws === undefined) throw new Error('WebSocket is not connected');
        this.ws.send(message);
    }
    close() {
        if (this.ws === undefined) throw new Error('WebSocket is not connected');
        this.ws.close();
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const GOOGLE_API_KEY_HEADER = 'x-goog-api-key';
// TODO(b/395122533): We need a secure client side authentication mechanism.
class WebAuth {
    constructor(apiKey){
        this.apiKey = apiKey;
    }
    async addAuthHeaders(headers) {
        if (headers.get(GOOGLE_API_KEY_HEADER) !== null) return;
        if (this.apiKey.startsWith('auth_tokens/')) throw new Error('Ephemeral tokens are only supported by the live API.');
        // Check if API key is empty or null
        if (!this.apiKey) throw new Error('API key is missing. Please provide a valid API key.');
        headers.append(GOOGLE_API_KEY_HEADER, this.apiKey);
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const LANGUAGE_LABEL_PREFIX = 'gl-node/';
/**
 * The Google GenAI SDK.
 *
 * @remarks
 * Provides access to the GenAI features through either the {@link
 * https://cloud.google.com/vertex-ai/docs/reference/rest | Gemini API} or
 * the {@link https://cloud.google.com/vertex-ai/docs/reference/rest | Vertex AI
 * API}.
 *
 * The {@link GoogleGenAIOptions.vertexai} value determines which of the API
 * services to use.
 *
 * When using the Gemini API, a {@link GoogleGenAIOptions.apiKey} must also be
 * set. When using Vertex AI, currently only {@link GoogleGenAIOptions.apiKey}
 * is supported via Express mode. {@link GoogleGenAIOptions.project} and {@link
 * GoogleGenAIOptions.location} should not be set.
 *
 * @example
 * Initializing the SDK for using the Gemini API:
 * ```ts
 * import {GoogleGenAI} from '@google/genai';
 * const ai = new GoogleGenAI({apiKey: 'GEMINI_API_KEY'});
 * ```
 *
 * @example
 * Initializing the SDK for using the Vertex AI API:
 * ```ts
 * import {GoogleGenAI} from '@google/genai';
 * const ai = new GoogleGenAI({
 *   vertexai: true,
 *   project: 'PROJECT_ID',
 *   location: 'PROJECT_LOCATION'
 * });
 * ```
 *
 */ class GoogleGenAI {
    constructor(options){
        var _a;
        if (options.apiKey == null) throw new Error('An API Key must be set when running in a browser');
        // Web client only supports API key mode for Vertex AI.
        if (options.project || options.location) throw new Error('Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.');
        this.vertexai = (_a = options.vertexai) !== null && _a !== void 0 ? _a : false;
        this.apiKey = options.apiKey;
        const baseUrl = getBaseUrl(options, /*vertexBaseUrlFromEnv*/ undefined, /*geminiBaseUrlFromEnv*/ undefined);
        if (baseUrl) {
            if (options.httpOptions) options.httpOptions.baseUrl = baseUrl;
            else options.httpOptions = {
                baseUrl: baseUrl
            };
        }
        this.apiVersion = options.apiVersion;
        const auth = new WebAuth(this.apiKey);
        this.apiClient = new ApiClient({
            auth: auth,
            apiVersion: this.apiVersion,
            apiKey: this.apiKey,
            vertexai: this.vertexai,
            httpOptions: options.httpOptions,
            userAgentExtra: LANGUAGE_LABEL_PREFIX + 'web',
            uploader: new BrowserUploader(),
            downloader: new BrowserDownloader()
        });
        this.models = new Models(this.apiClient);
        this.live = new Live(this.apiClient, auth, new BrowserWebSocketFactory());
        this.batches = new Batches(this.apiClient);
        this.chats = new Chats(this.models, this.apiClient);
        this.caches = new Caches(this.apiClient);
        this.files = new Files(this.apiClient);
        this.operations = new Operations(this.apiClient);
        this.authTokens = new Tokens(this.apiClient);
        this.tunings = new Tunings(this.apiClient);
    }
}

},{"zod":"1Wr9m","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1Wr9m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "z", ()=>_externalJs);
var _externalJs = require("./v3/external.js");
parcelHelpers.exportAll(_externalJs, exports);
exports.default = _externalJs;

},{"./v3/external.js":"l8Int","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l8Int":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _errorsJs = require("./errors.js");
parcelHelpers.exportAll(_errorsJs, exports);
var _parseUtilJs = require("./helpers/parseUtil.js");
parcelHelpers.exportAll(_parseUtilJs, exports);
var _typeAliasesJs = require("./helpers/typeAliases.js");
parcelHelpers.exportAll(_typeAliasesJs, exports);
var _utilJs = require("./helpers/util.js");
parcelHelpers.exportAll(_utilJs, exports);
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);
var _zodErrorJs = require("./ZodError.js");
parcelHelpers.exportAll(_zodErrorJs, exports);

},{"./errors.js":"4EaA8","./helpers/parseUtil.js":"49X0D","./helpers/typeAliases.js":"acArr","./helpers/util.js":"bZ5oG","./types.js":"7RYx8","./ZodError.js":"6J5eV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4EaA8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultErrorMap", ()=>(0, _enJsDefault.default));
parcelHelpers.export(exports, "setErrorMap", ()=>setErrorMap);
parcelHelpers.export(exports, "getErrorMap", ()=>getErrorMap);
var _enJs = require("./locales/en.js");
var _enJsDefault = parcelHelpers.interopDefault(_enJs);
let overrideErrorMap = (0, _enJsDefault.default);
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}

},{"./locales/en.js":"2TjeA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2TjeA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _zodErrorJs = require("../ZodError.js");
var _utilJs = require("../helpers/util.js");
const errorMap = (issue, _ctx)=>{
    let message;
    switch(issue.code){
        case (0, _zodErrorJs.ZodIssueCode).invalid_type:
            if (issue.received === (0, _utilJs.ZodParsedType).undefined) message = "Required";
            else message = `Expected ${issue.expected}, received ${issue.received}`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, (0, _utilJs.util).jsonStringifyReplacer)}`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).unrecognized_keys:
            message = `Unrecognized key(s) in object: ${(0, _utilJs.util).joinValues(issue.keys, ", ")}`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_union:
            message = `Invalid input`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${(0, _utilJs.util).joinValues(issue.options)}`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_enum_value:
            message = `Invalid enum value. Expected ${(0, _utilJs.util).joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_return_type:
            message = `Invalid function return type`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_date:
            message = `Invalid date`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                } else if ("startsWith" in issue.validation) message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                else if ("endsWith" in issue.validation) message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                else (0, _utilJs.util).assertNever(issue.validation);
            } else if (issue.validation !== "regex") message = `Invalid ${issue.validation}`;
            else message = "Invalid";
            break;
        case (0, _zodErrorJs.ZodIssueCode).too_small:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "bigint") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
            else message = "Invalid input";
            break;
        case (0, _zodErrorJs.ZodIssueCode).too_big:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else message = "Invalid input";
            break;
        case (0, _zodErrorJs.ZodIssueCode).custom:
            message = `Invalid input`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            (0, _utilJs.util).assertNever(issue);
    }
    return {
        message
    };
};
exports.default = errorMap;

},{"../ZodError.js":"6J5eV","../helpers/util.js":"bZ5oG","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6J5eV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZodIssueCode", ()=>ZodIssueCode);
parcelHelpers.export(exports, "quotelessJson", ()=>quotelessJson);
parcelHelpers.export(exports, "ZodError", ()=>ZodError);
var _utilJs = require("./helpers/util.js");
const ZodIssueCode = (0, _utilJs.util).arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]);
const quotelessJson = (obj)=>{
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    get errors() {
        return this.issues;
    }
    constructor(issues){
        super();
        this.issues = [];
        this.addIssue = (sub)=>{
            this.issues = [
                ...this.issues,
                sub
            ];
        };
        this.addIssues = (subs = [])=>{
            this.issues = [
                ...this.issues,
                ...subs
            ];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) // eslint-disable-next-line ban/ban
        Object.setPrototypeOf(this, actualProto);
        else this.__proto__ = actualProto;
        this.name = "ZodError";
        this.issues = issues;
    }
    format(_mapper) {
        const mapper = _mapper || function(issue) {
            return issue.message;
        };
        const fieldErrors = {
            _errors: []
        };
        const processError = (error)=>{
            for (const issue of error.issues){
                if (issue.code === "invalid_union") issue.unionErrors.map(processError);
                else if (issue.code === "invalid_return_type") processError(issue.returnTypeError);
                else if (issue.code === "invalid_arguments") processError(issue.argumentsError);
                else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while(i < issue.path.length){
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) curr[el] = curr[el] || {
                            _errors: []
                        };
                        else {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) throw new Error(`Not a ZodError: ${value}`);
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, (0, _utilJs.util).jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue)=>issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues)if (sub.path.length > 0) {
            const firstEl = sub.path[0];
            fieldErrors[firstEl] = fieldErrors[firstEl] || [];
            fieldErrors[firstEl].push(mapper(sub));
        } else formErrors.push(mapper(sub));
        return {
            formErrors,
            fieldErrors
        };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues)=>{
    const error = new ZodError(issues);
    return error;
};

},{"./helpers/util.js":"bZ5oG","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bZ5oG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "util", ()=>util);
parcelHelpers.export(exports, "objectUtil", ()=>objectUtil);
parcelHelpers.export(exports, "ZodParsedType", ()=>ZodParsedType);
parcelHelpers.export(exports, "getParsedType", ()=>getParsedType);
var util;
(function(util) {
    util.assertEqual = (_)=>{};
    function assertIs(_arg) {}
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items)=>{
        const obj = {};
        for (const item of items)obj[item] = item;
        return obj;
    };
    util.getValidEnumValues = (obj)=>{
        const validKeys = util.objectKeys(obj).filter((k)=>typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys)filtered[k] = obj[k];
        return util.objectValues(filtered);
    };
    util.objectValues = (obj)=>{
        return util.objectKeys(obj).map(function(e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
     ? (obj)=>Object.keys(obj) // eslint-disable-line ban/ban
     : (object)=>{
        const keys = [];
        for(const key in object)if (Object.prototype.hasOwnProperty.call(object, key)) keys.push(key);
        return keys;
    };
    util.find = (arr, checker)=>{
        for (const item of arr){
            if (checker(item)) return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function" ? (val)=>Number.isInteger(val) // eslint-disable-line ban/ban
     : (val)=>typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array.map((val)=>typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value)=>{
        if (typeof value === "bigint") return value.toString();
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function(objectUtil) {
    objectUtil.mergeShapes = (first, second)=>{
        return {
            ...first,
            ...second
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]);
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) return ZodParsedType.array;
            if (data === null) return ZodParsedType.null;
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return ZodParsedType.promise;
            if (typeof Map !== "undefined" && data instanceof Map) return ZodParsedType.map;
            if (typeof Set !== "undefined" && data instanceof Set) return ZodParsedType.set;
            if (typeof Date !== "undefined" && data instanceof Date) return ZodParsedType.date;
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"49X0D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeIssue", ()=>makeIssue);
parcelHelpers.export(exports, "EMPTY_PATH", ()=>EMPTY_PATH);
parcelHelpers.export(exports, "addIssueToContext", ()=>addIssueToContext);
parcelHelpers.export(exports, "ParseStatus", ()=>ParseStatus);
parcelHelpers.export(exports, "INVALID", ()=>INVALID);
parcelHelpers.export(exports, "DIRTY", ()=>DIRTY);
parcelHelpers.export(exports, "OK", ()=>OK);
parcelHelpers.export(exports, "isAborted", ()=>isAborted);
parcelHelpers.export(exports, "isDirty", ()=>isDirty);
parcelHelpers.export(exports, "isValid", ()=>isValid);
parcelHelpers.export(exports, "isAsync", ()=>isAsync);
var _errorsJs = require("../errors.js");
var _enJs = require("../locales/en.js");
var _enJsDefault = parcelHelpers.interopDefault(_enJs);
const makeIssue = (params)=>{
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [
        ...path,
        ...issueData.path || []
    ];
    const fullIssue = {
        ...issueData,
        path: fullPath
    };
    if (issueData.message !== undefined) return {
        ...issueData,
        path: fullPath,
        message: issueData.message
    };
    let errorMessage = "";
    const maps = errorMaps.filter((m)=>!!m).slice().reverse();
    for (const map of maps)errorMessage = map(fullIssue, {
        data,
        defaultError: errorMessage
    }).message;
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = (0, _errorsJs.getErrorMap)();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideMap,
            overrideMap === (0, _enJsDefault.default) ? undefined : (0, _enJsDefault.default)
        ].filter((x)=>!!x)
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid") this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted") this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results){
            if (s.status === "aborted") return INVALID;
            if (s.status === "dirty") status.dirty();
            arrayValue.push(s.value);
        }
        return {
            status: status.value,
            value: arrayValue
        };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs){
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs){
            const { key, value } = pair;
            if (key.status === "aborted") return INVALID;
            if (value.status === "aborted") return INVALID;
            if (key.status === "dirty") status.dirty();
            if (value.status === "dirty") status.dirty();
            if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) finalObject[key.value] = value.value;
        }
        return {
            status: status.value,
            value: finalObject
        };
    }
}
const INVALID = Object.freeze({
    status: "aborted"
});
const DIRTY = (value)=>({
        status: "dirty",
        value
    });
const OK = (value)=>({
        status: "valid",
        value
    });
const isAborted = (x)=>x.status === "aborted";
const isDirty = (x)=>x.status === "dirty";
const isValid = (x)=>x.status === "valid";
const isAsync = (x)=>typeof Promise !== "undefined" && x instanceof Promise;

},{"../errors.js":"4EaA8","../locales/en.js":"2TjeA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"acArr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7RYx8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZodType", ()=>ZodType);
// Adapted from https://stackoverflow.com/a/3143231
parcelHelpers.export(exports, "datetimeRegex", ()=>datetimeRegex);
parcelHelpers.export(exports, "ZodString", ()=>ZodString);
parcelHelpers.export(exports, "ZodNumber", ()=>ZodNumber);
parcelHelpers.export(exports, "ZodBigInt", ()=>ZodBigInt);
parcelHelpers.export(exports, "ZodBoolean", ()=>ZodBoolean);
parcelHelpers.export(exports, "ZodDate", ()=>ZodDate);
parcelHelpers.export(exports, "ZodSymbol", ()=>ZodSymbol);
parcelHelpers.export(exports, "ZodUndefined", ()=>ZodUndefined);
parcelHelpers.export(exports, "ZodNull", ()=>ZodNull);
parcelHelpers.export(exports, "ZodAny", ()=>ZodAny);
parcelHelpers.export(exports, "ZodUnknown", ()=>ZodUnknown);
parcelHelpers.export(exports, "ZodNever", ()=>ZodNever);
parcelHelpers.export(exports, "ZodVoid", ()=>ZodVoid);
parcelHelpers.export(exports, "ZodArray", ()=>ZodArray);
parcelHelpers.export(exports, "ZodObject", ()=>ZodObject);
parcelHelpers.export(exports, "ZodUnion", ()=>ZodUnion);
parcelHelpers.export(exports, "ZodDiscriminatedUnion", ()=>ZodDiscriminatedUnion);
parcelHelpers.export(exports, "ZodIntersection", ()=>ZodIntersection);
// type ZodTupleItems = [ZodTypeAny, ...ZodTypeAny[]];
parcelHelpers.export(exports, "ZodTuple", ()=>ZodTuple);
parcelHelpers.export(exports, "ZodRecord", ()=>ZodRecord);
parcelHelpers.export(exports, "ZodMap", ()=>ZodMap);
parcelHelpers.export(exports, "ZodSet", ()=>ZodSet);
parcelHelpers.export(exports, "ZodFunction", ()=>ZodFunction);
parcelHelpers.export(exports, "ZodLazy", ()=>ZodLazy);
parcelHelpers.export(exports, "ZodLiteral", ()=>ZodLiteral);
parcelHelpers.export(exports, "ZodEnum", ()=>ZodEnum);
parcelHelpers.export(exports, "ZodNativeEnum", ()=>ZodNativeEnum);
parcelHelpers.export(exports, "ZodPromise", ()=>ZodPromise);
parcelHelpers.export(exports, "ZodEffects", ()=>ZodEffects);
parcelHelpers.export(exports, "ZodTransformer", ()=>ZodEffects);
parcelHelpers.export(exports, "ZodOptional", ()=>ZodOptional);
parcelHelpers.export(exports, "ZodNullable", ()=>ZodNullable);
parcelHelpers.export(exports, "ZodDefault", ()=>ZodDefault);
parcelHelpers.export(exports, "ZodCatch", ()=>ZodCatch);
parcelHelpers.export(exports, "ZodNaN", ()=>ZodNaN);
parcelHelpers.export(exports, "BRAND", ()=>BRAND);
parcelHelpers.export(exports, "ZodBranded", ()=>ZodBranded);
parcelHelpers.export(exports, "ZodPipeline", ()=>ZodPipeline);
parcelHelpers.export(exports, "ZodReadonly", ()=>ZodReadonly);
parcelHelpers.export(exports, "custom", ()=>custom);
parcelHelpers.export(exports, "Schema", ()=>ZodType);
parcelHelpers.export(exports, "ZodSchema", ()=>ZodType);
parcelHelpers.export(exports, "late", ()=>late);
parcelHelpers.export(exports, "ZodFirstPartyTypeKind", ()=>ZodFirstPartyTypeKind);
parcelHelpers.export(exports, "coerce", ()=>coerce);
parcelHelpers.export(exports, "any", ()=>anyType);
parcelHelpers.export(exports, "array", ()=>arrayType);
parcelHelpers.export(exports, "bigint", ()=>bigIntType);
parcelHelpers.export(exports, "boolean", ()=>booleanType);
parcelHelpers.export(exports, "date", ()=>dateType);
parcelHelpers.export(exports, "discriminatedUnion", ()=>discriminatedUnionType);
parcelHelpers.export(exports, "effect", ()=>effectsType);
parcelHelpers.export(exports, "enum", ()=>enumType);
parcelHelpers.export(exports, "function", ()=>functionType);
parcelHelpers.export(exports, "instanceof", ()=>instanceOfType);
parcelHelpers.export(exports, "intersection", ()=>intersectionType);
parcelHelpers.export(exports, "lazy", ()=>lazyType);
parcelHelpers.export(exports, "literal", ()=>literalType);
parcelHelpers.export(exports, "map", ()=>mapType);
parcelHelpers.export(exports, "nan", ()=>nanType);
parcelHelpers.export(exports, "nativeEnum", ()=>nativeEnumType);
parcelHelpers.export(exports, "never", ()=>neverType);
parcelHelpers.export(exports, "null", ()=>nullType);
parcelHelpers.export(exports, "nullable", ()=>nullableType);
parcelHelpers.export(exports, "number", ()=>numberType);
parcelHelpers.export(exports, "object", ()=>objectType);
parcelHelpers.export(exports, "oboolean", ()=>oboolean);
parcelHelpers.export(exports, "onumber", ()=>onumber);
parcelHelpers.export(exports, "optional", ()=>optionalType);
parcelHelpers.export(exports, "ostring", ()=>ostring);
parcelHelpers.export(exports, "pipeline", ()=>pipelineType);
parcelHelpers.export(exports, "preprocess", ()=>preprocessType);
parcelHelpers.export(exports, "promise", ()=>promiseType);
parcelHelpers.export(exports, "record", ()=>recordType);
parcelHelpers.export(exports, "set", ()=>setType);
parcelHelpers.export(exports, "strictObject", ()=>strictObjectType);
parcelHelpers.export(exports, "string", ()=>stringType);
parcelHelpers.export(exports, "symbol", ()=>symbolType);
parcelHelpers.export(exports, "transformer", ()=>effectsType);
parcelHelpers.export(exports, "tuple", ()=>tupleType);
parcelHelpers.export(exports, "undefined", ()=>undefinedType);
parcelHelpers.export(exports, "union", ()=>unionType);
parcelHelpers.export(exports, "unknown", ()=>unknownType);
parcelHelpers.export(exports, "void", ()=>voidType);
parcelHelpers.export(exports, "NEVER", ()=>NEVER);
var _zodErrorJs = require("./ZodError.js");
var _errorsJs = require("./errors.js");
var _errorUtilJs = require("./helpers/errorUtil.js");
var _parseUtilJs = require("./helpers/parseUtil.js");
var _utilJs = require("./helpers/util.js");
class ParseInputLazyPath {
    constructor(parent, value, path, key){
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);
            else this._cachedPath.push(...this._path, this._key);
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result)=>{
    if ((0, _parseUtilJs.isValid)(result)) return {
        success: true,
        data: result.value
    };
    else {
        if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
        return {
            success: false,
            get error () {
                if (this._error) return this._error;
                const error = new (0, _zodErrorJs.ZodError)(ctx.common.issues);
                this._error = error;
                return this._error;
            }
        };
    }
};
function processCreateParams(params) {
    if (!params) return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    if (errorMap) return {
        errorMap: errorMap,
        description
    };
    const customMap = (iss, ctx)=>{
        const { message } = params;
        if (iss.code === "invalid_enum_value") return {
            message: message ?? ctx.defaultError
        };
        if (typeof ctx.data === "undefined") return {
            message: message ?? required_error ?? ctx.defaultError
        };
        if (iss.code !== "invalid_type") return {
            message: ctx.defaultError
        };
        return {
            message: message ?? invalid_type_error ?? ctx.defaultError
        };
    };
    return {
        errorMap: customMap,
        description
    };
}
class ZodType {
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return (0, _utilJs.getParsedType)(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: (0, _utilJs.getParsedType)(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
        };
    }
    _processInputParams(input) {
        return {
            status: new (0, _parseUtilJs.ParseStatus)(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: (0, _utilJs.getParsedType)(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent
            }
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if ((0, _parseUtilJs.isAsync)(result)) throw new Error("Synchronous parse encountered promise.");
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        const ctx = {
            common: {
                issues: [],
                async: params?.async ?? false,
                contextualErrorMap: params?.errorMap
            },
            path: params?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, _utilJs.getParsedType)(data)
        };
        const result = this._parseSync({
            data,
            path: ctx.path,
            parent: ctx
        });
        return handleResult(ctx, result);
    }
    "~validate"(data) {
        const ctx = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, _utilJs.getParsedType)(data)
        };
        if (!this["~standard"].async) try {
            const result = this._parseSync({
                data,
                path: [],
                parent: ctx
            });
            return (0, _parseUtilJs.isValid)(result) ? {
                value: result.value
            } : {
                issues: ctx.common.issues
            };
        } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = true;
            ctx.common = {
                issues: [],
                async: true
            };
        }
        return this._parseAsync({
            data,
            path: [],
            parent: ctx
        }).then((result)=>(0, _parseUtilJs.isValid)(result) ? {
                value: result.value
            } : {
                issues: ctx.common.issues
            });
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params?.errorMap,
                async: true
            },
            path: params?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, _utilJs.getParsedType)(data)
        };
        const maybeAsyncResult = this._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
        const result = await ((0, _parseUtilJs.isAsync)(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val)=>{
            if (typeof message === "string" || typeof message === "undefined") return {
                message
            };
            else if (typeof message === "function") return message(val);
            else return message;
        };
        return this._refinement((val, ctx)=>{
            const result = check(val);
            const setError = ()=>ctx.addIssue({
                    code: (0, _zodErrorJs.ZodIssueCode).custom,
                    ...getIssueProperties(val)
                });
            if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data)=>{
                if (!data) {
                    setError();
                    return false;
                } else return true;
            });
            if (!result) {
                setError();
                return false;
            } else return true;
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx)=>{
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                return false;
            } else return true;
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "refinement",
                refinement
            }
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    constructor(def){
        /** Alias of safeParseAsync */ this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (data)=>this["~validate"](data)
        };
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([
            this,
            option
        ], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "transform",
                transform
            }
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def)
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
// const ipv6Regex =
// /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// https://base64.guru/standards/base64url
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    else if (args.precision == null) secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    const secondsQuantifier = args.precision ? "+" : "?"; // require seconds if precision is nonzero
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) return true;
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) return true;
    return false;
}
function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt)) return false;
    try {
        const [header] = jwt.split(".");
        if (!header) return false;
        // Convert base64url to base64
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null) return false;
        if ("typ" in decoded && decoded?.typ !== "JWT") return false;
        if (!decoded.alg) return false;
        if (alg && decoded.alg !== alg) return false;
        return true;
    } catch  {
        return false;
    }
}
function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) return true;
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) return true;
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) input.data = String(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).string) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).string,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const status = new (0, _parseUtilJs.ParseStatus)();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: true,
                        message: check.message
                    });
                    else if (tooSmall) (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: true,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "email",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "emoji") {
                if (!emojiRegex) emojiRegex = new RegExp(_emojiRegex, "u");
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "emoji",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "uuid",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "nanoid",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "cuid",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "cuid2",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "ulid",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "url") try {
                new URL(input.data);
            } catch  {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    validation: "url",
                    code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                    message: check.message
                });
                status.dirty();
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "regex",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "trim") input.data = input.data.trim();
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: {
                            includes: check.value,
                            position: check.position
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "toLowerCase") input.data = input.data.toLowerCase();
            else if (check.kind === "toUpperCase") input.data = input.data.toUpperCase();
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: {
                            startsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: {
                            endsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: "datetime",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: "date",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: "time",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "duration",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "ip",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "jwt") {
                if (!isValidJWT(input.data, check.alg)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "jwt",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cidr") {
                if (!isValidCidr(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "cidr",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "base64",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64url") {
                if (!base64urlRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "base64url",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else (0, _utilJs.util).assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _regex(regex, validation, message) {
        return this.refinement((data)=>regex.test(data), {
            validation,
            code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    email(message) {
        return this._addCheck({
            kind: "email",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    url(message) {
        return this._addCheck({
            kind: "url",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    emoji(message) {
        return this._addCheck({
            kind: "emoji",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    uuid(message) {
        return this._addCheck({
            kind: "uuid",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    nanoid(message) {
        return this._addCheck({
            kind: "nanoid",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    cuid(message) {
        return this._addCheck({
            kind: "cuid",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    cuid2(message) {
        return this._addCheck({
            kind: "cuid2",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    ulid(message) {
        return this._addCheck({
            kind: "ulid",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    base64(message) {
        return this._addCheck({
            kind: "base64",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    base64url(message) {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return this._addCheck({
            kind: "base64url",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    jwt(options) {
        return this._addCheck({
            kind: "jwt",
            ...(0, _errorUtilJs.errorUtil).errToObj(options)
        });
    }
    ip(options) {
        return this._addCheck({
            kind: "ip",
            ...(0, _errorUtilJs.errorUtil).errToObj(options)
        });
    }
    cidr(options) {
        return this._addCheck({
            kind: "cidr",
            ...(0, _errorUtilJs.errorUtil).errToObj(options)
        });
    }
    datetime(options) {
        if (typeof options === "string") return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
        });
        return this._addCheck({
            kind: "datetime",
            precision: typeof options?.precision === "undefined" ? null : options?.precision,
            offset: options?.offset ?? false,
            local: options?.local ?? false,
            ...(0, _errorUtilJs.errorUtil).errToObj(options?.message)
        });
    }
    date(message) {
        return this._addCheck({
            kind: "date",
            message
        });
    }
    time(options) {
        if (typeof options === "string") return this._addCheck({
            kind: "time",
            precision: null,
            message: options
        });
        return this._addCheck({
            kind: "time",
            precision: typeof options?.precision === "undefined" ? null : options?.precision,
            ...(0, _errorUtilJs.errorUtil).errToObj(options?.message)
        });
    }
    duration(message) {
        return this._addCheck({
            kind: "duration",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options?.position,
            ...(0, _errorUtilJs.errorUtil).errToObj(options?.message)
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    /**
     * Equivalent to `.min(1)`
     */ nonempty(message) {
        return this.min(1, (0, _errorUtilJs.errorUtil).errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "trim"
                }
            ]
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toLowerCase"
                }
            ]
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toUpperCase"
                }
            ]
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch)=>ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch)=>ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch)=>ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch)=>ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch)=>ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch)=>ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch)=>ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch)=>ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch)=>ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch)=>ch.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((ch)=>ch.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((ch)=>ch.kind === "base64");
    }
    get isBase64url() {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return !!this._def.checks.find((ch)=>ch.kind === "base64url");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params)=>{
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
}
class ZodNumber extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) input.data = Number(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).number) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).number,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        let ctx = undefined;
        const status = new (0, _parseUtilJs.ParseStatus)();
        for (const check of this._def.checks){
            if (check.kind === "int") {
                if (!(0, _utilJs.util).isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).not_finite,
                        message: check.message
                    });
                    status.dirty();
                }
            } else (0, _utilJs.util).assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, (0, _errorUtilJs.errorUtil).toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, (0, _errorUtilJs.errorUtil).toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, (0, _errorUtilJs.errorUtil).toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, (0, _errorUtilJs.errorUtil).toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: (0, _errorUtilJs.errorUtil).toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch)=>ch.kind === "int" || ch.kind === "multipleOf" && (0, _utilJs.util).isInteger(ch.value));
    }
    get isFinite() {
        let max = null;
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") return true;
            else if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            } else if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params)=>{
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
    });
};
class ZodBigInt extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) try {
            input.data = BigInt(input.data);
        } catch  {
            return this._getInvalidInput(input);
        }
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).bigint) return this._getInvalidInput(input);
        let ctx = undefined;
        const status = new (0, _parseUtilJs.ParseStatus)();
        for (const check of this._def.checks){
            if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else (0, _utilJs.util).assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, _parseUtilJs.addIssueToContext)(ctx, {
            code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
            expected: (0, _utilJs.ZodParsedType).bigint,
            received: ctx.parsedType
        });
        return 0, _parseUtilJs.INVALID;
    }
    gte(value, message) {
        return this.setLimit("min", value, true, (0, _errorUtilJs.errorUtil).toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, (0, _errorUtilJs.errorUtil).toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, (0, _errorUtilJs.errorUtil).toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, (0, _errorUtilJs.errorUtil).toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: (0, _errorUtilJs.errorUtil).toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params)=>{
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) input.data = Boolean(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).boolean) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).boolean,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodBoolean.create = (params)=>{
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) input.data = new Date(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).date) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).date,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (Number.isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_date
            });
            return 0, _parseUtilJs.INVALID;
        }
        const status = new (0, _parseUtilJs.ParseStatus)();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else (0, _utilJs.util).assertNever(check);
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime())
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params)=>{
    return new ZodDate({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).symbol) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).symbol,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodSymbol.create = (params)=>{
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).undefined,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodUndefined.create = (params)=>{
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).null) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).null,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodNull.create = (params)=>{
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
    });
};
class ZodAny extends ZodType {
    constructor(){
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodAny.create = (params)=>{
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
    });
};
class ZodUnknown extends ZodType {
    constructor(){
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodUnknown.create = (params)=>{
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, _parseUtilJs.addIssueToContext)(ctx, {
            code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
            expected: (0, _utilJs.ZodParsedType).never,
            received: ctx.parsedType
        });
        return 0, _parseUtilJs.INVALID;
    }
}
ZodNever.create = (params)=>{
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).void,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodVoid.create = (params)=>{
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).array) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).array,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: tooBig ? (0, _zodErrorJs.ZodIssueCode).too_big : (0, _zodErrorJs.ZodIssueCode).too_small,
                    minimum: tooSmall ? def.exactLength.value : undefined,
                    maximum: tooBig ? def.exactLength.value : undefined,
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: (0, _zodErrorJs.ZodIssueCode).too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: (0, _zodErrorJs.ZodIssueCode).too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message
                });
                status.dirty();
            }
        }
        if (ctx.common.async) return Promise.all([
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result)=>{
            return (0, _parseUtilJs.ParseStatus).mergeArray(status, result);
        });
        const result = [
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return (0, _parseUtilJs.ParseStatus).mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: {
                value: minLength,
                message: (0, _errorUtilJs.errorUtil).toString(message)
            }
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: {
                value: maxLength,
                message: (0, _errorUtilJs.errorUtil).toString(message)
            }
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: {
                value: len,
                message: (0, _errorUtilJs.errorUtil).toString(message)
            }
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params)=>{
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for(const key in schema.shape){
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: ()=>newShape
        });
    } else if (schema instanceof ZodArray) return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
    });
    else if (schema instanceof ZodOptional) return ZodOptional.create(deepPartialify(schema.unwrap()));
    else if (schema instanceof ZodNullable) return ZodNullable.create(deepPartialify(schema.unwrap()));
    else if (schema instanceof ZodTuple) return ZodTuple.create(schema.items.map((item)=>deepPartialify(item)));
    else return schema;
}
class ZodObject extends ZodType {
    constructor(){
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */ this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */ this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const shape = this._def.shape();
        const keys = (0, _utilJs.util).objectKeys(shape);
        this._cached = {
            shape,
            keys
        };
        return this._cached;
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).object) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).object,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
            for(const key in ctx.data)if (!shapeKeys.includes(key)) extraKeys.push(key);
        }
        const pairs = [];
        for (const key of shapeKeys){
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") for (const key of extraKeys)pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: {
                    status: "valid",
                    value: ctx.data[key]
                }
            });
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).unrecognized_keys,
                        keys: extraKeys
                    });
                    status.dirty();
                }
            } else if (unknownKeys === "strip") ;
            else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        } else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys){
                const value = ctx.data[key];
                pairs.push({
                    key: {
                        status: "valid",
                        value: key
                    },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data
                });
            }
        }
        if (ctx.common.async) return Promise.resolve().then(async ()=>{
            const syncPairs = [];
            for (const pair of pairs){
                const key = await pair.key;
                const value = await pair.value;
                syncPairs.push({
                    key,
                    value,
                    alwaysSet: pair.alwaysSet
                });
            }
            return syncPairs;
        }).then((syncPairs)=>{
            return (0, _parseUtilJs.ParseStatus).mergeObjectSync(status, syncPairs);
        });
        else return (0, _parseUtilJs.ParseStatus).mergeObjectSync(status, pairs);
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        (0, _errorUtilJs.errorUtil).errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...message !== undefined ? {
                errorMap: (issue, ctx)=>{
                    const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
                    if (issue.code === "unrecognized_keys") return {
                        message: (0, _errorUtilJs.errorUtil).errToObj(message).message ?? defaultError
                    };
                    return {
                        message: defaultError
                    };
                }
            } : {}
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: ()=>({
                    ...this._def.shape(),
                    ...augmentation
                })
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */ merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: ()=>({
                    ...this._def.shape(),
                    ...merging._def.shape()
                }),
            typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({
            [key]: schema
        });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index
        });
    }
    pick(mask) {
        const shape = {};
        for (const key of (0, _utilJs.util).objectKeys(mask))if (mask[key] && this.shape[key]) shape[key] = this.shape[key];
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    omit(mask) {
        const shape = {};
        for (const key of (0, _utilJs.util).objectKeys(this.shape))if (!mask[key]) shape[key] = this.shape[key];
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    /**
     * @deprecated
     */ deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        for (const key of (0, _utilJs.util).objectKeys(this.shape)){
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) newShape[key] = fieldSchema;
            else newShape[key] = fieldSchema.optional();
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    required(mask) {
        const newShape = {};
        for (const key of (0, _utilJs.util).objectKeys(this.shape))if (mask && !mask[key]) newShape[key] = this.shape[key];
        else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while(newField instanceof ZodOptional)newField = newField._def.innerType;
            newShape[key] = newField;
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    keyof() {
        return createZodEnum((0, _utilJs.util).objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.strictCreate = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.lazycreate = (shape, params)=>{
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results){
                if (result.result.status === "valid") return result.result;
            }
            for (const result of results)if (result.result.status === "dirty") {
                // add issues from dirty option
                ctx.common.issues.push(...result.ctx.common.issues);
                return result.result;
            }
            // return invalid
            const unionErrors = results.map((result)=>new (0, _zodErrorJs.ZodError)(result.ctx.common.issues));
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_union,
                unionErrors
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (ctx.common.async) return Promise.all(options.map(async (option)=>{
            const childCtx = {
                ...ctx,
                common: {
                    ...ctx.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await option._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                }),
                ctx: childCtx
            };
        })).then(handleResults);
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options){
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                });
                if (result.status === "valid") return result;
                else if (result.status === "dirty" && !dirty) dirty = {
                    result,
                    ctx: childCtx
                };
                if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues)=>new (0, _zodErrorJs.ZodError)(issues));
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_union,
                unionErrors
            });
            return 0, _parseUtilJs.INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params)=>{
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type)=>{
    if (type instanceof ZodLazy) return getDiscriminator(type.schema);
    else if (type instanceof ZodEffects) return getDiscriminator(type.innerType());
    else if (type instanceof ZodLiteral) return [
        type.value
    ];
    else if (type instanceof ZodEnum) return type.options;
    else if (type instanceof ZodNativeEnum) // eslint-disable-next-line ban/ban
    return (0, _utilJs.util).objectValues(type.enum);
    else if (type instanceof ZodDefault) return getDiscriminator(type._def.innerType);
    else if (type instanceof ZodUndefined) return [
        undefined
    ];
    else if (type instanceof ZodNull) return [
        null
    ];
    else if (type instanceof ZodOptional) return [
        undefined,
        ...getDiscriminator(type.unwrap())
    ];
    else if (type instanceof ZodNullable) return [
        null,
        ...getDiscriminator(type.unwrap())
    ];
    else if (type instanceof ZodBranded) return getDiscriminator(type.unwrap());
    else if (type instanceof ZodReadonly) return getDiscriminator(type.unwrap());
    else if (type instanceof ZodCatch) return getDiscriminator(type._def.innerType);
    else return [];
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).object) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).object,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [
                    discriminator
                ]
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (ctx.common.async) return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
        else return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */ static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options){
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            for (const value of discriminatorValues){
                if (optionsMap.has(value)) throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params)
        });
    }
}
function mergeValues(a, b) {
    const aType = (0, _utilJs.getParsedType)(a);
    const bType = (0, _utilJs.getParsedType)(b);
    if (a === b) return {
        valid: true,
        data: a
    };
    else if (aType === (0, _utilJs.ZodParsedType).object && bType === (0, _utilJs.ZodParsedType).object) {
        const bKeys = (0, _utilJs.util).objectKeys(b);
        const sharedKeys = (0, _utilJs.util).objectKeys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) return {
                valid: false
            };
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    } else if (aType === (0, _utilJs.ZodParsedType).array && bType === (0, _utilJs.ZodParsedType).array) {
        if (a.length !== b.length) return {
            valid: false
        };
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) return {
                valid: false
            };
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    } else if (aType === (0, _utilJs.ZodParsedType).date && bType === (0, _utilJs.ZodParsedType).date && +a === +b) return {
        valid: true,
        data: a
    };
    else return {
        valid: false
    };
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight)=>{
            if ((0, _parseUtilJs.isAborted)(parsedLeft) || (0, _parseUtilJs.isAborted)(parsedRight)) return 0, _parseUtilJs.INVALID;
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: (0, _zodErrorJs.ZodIssueCode).invalid_intersection_types
                });
                return 0, _parseUtilJs.INVALID;
            }
            if ((0, _parseUtilJs.isDirty)(parsedLeft) || (0, _parseUtilJs.isDirty)(parsedRight)) status.dirty();
            return {
                status: status.value,
                value: merged.data
            };
        };
        if (ctx.common.async) return Promise.all([
            this._def.left._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }),
            this._def.right._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            })
        ]).then(([left, right])=>handleParsed(left, right));
        else return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        }));
    }
}
ZodIntersection.create = (left, right, params)=>{
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).array) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).array,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            return 0, _parseUtilJs.INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            status.dirty();
        }
        const items = [
            ...ctx.data
        ].map((item, itemIndex)=>{
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema) return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x)=>!!x); // filter nulls
        if (ctx.common.async) return Promise.all(items).then((results)=>{
            return (0, _parseUtilJs.ParseStatus).mergeArray(status, results);
        });
        else return (0, _parseUtilJs.ParseStatus).mergeArray(status, items);
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest
        });
    }
}
ZodTuple.create = (schemas, params)=>{
    if (!Array.isArray(schemas)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).object) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).object,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for(const key in ctx.data)pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
        });
        if (ctx.common.async) return (0, _parseUtilJs.ParseStatus).mergeObjectAsync(status, pairs);
        else return (0, _parseUtilJs.ParseStatus).mergeObjectSync(status, pairs);
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) return new ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
        });
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second)
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).map) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).map,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [
            ...ctx.data.entries()
        ].map(([key, value], index)=>{
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [
                    index,
                    "key"
                ])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [
                    index,
                    "value"
                ]))
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async ()=>{
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") return 0, _parseUtilJs.INVALID;
                    if (key.status === "dirty" || value.status === "dirty") status.dirty();
                    finalMap.set(key.value, value.value);
                }
                return {
                    status: status.value,
                    value: finalMap
                };
            });
        } else {
            const finalMap = new Map();
            for (const pair of pairs){
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (key.status === "dirty" || value.status === "dirty") status.dirty();
                finalMap.set(key.value, value.value);
            }
            return {
                status: status.value,
                value: finalMap
            };
        }
    }
}
ZodMap.create = (keyType, valueType, params)=>{
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).set) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).set,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: (0, _zodErrorJs.ZodIssueCode).too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: (0, _zodErrorJs.ZodIssueCode).too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements){
                if (element.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (element.status === "dirty") status.dirty();
                parsedSet.add(element.value);
            }
            return {
                status: status.value,
                value: parsedSet
            };
        }
        const elements = [
            ...ctx.data.values()
        ].map((item, i)=>valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) return Promise.all(elements).then((elements)=>finalizeSet(elements));
        else return finalizeSet(elements);
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: {
                value: minSize,
                message: (0, _errorUtilJs.errorUtil).toString(message)
            }
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: {
                value: maxSize,
                message: (0, _errorUtilJs.errorUtil).toString(message)
            }
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params)=>{
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
    });
};
class ZodFunction extends ZodType {
    constructor(){
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).function) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).function,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        function makeArgsIssue(args, error) {
            return (0, _parseUtilJs.makeIssue)({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    (0, _errorsJs.getErrorMap)(),
                    (0, _errorsJs.defaultErrorMap)
                ].filter((x)=>!!x),
                issueData: {
                    code: (0, _zodErrorJs.ZodIssueCode).invalid_arguments,
                    argumentsError: error
                }
            });
        }
        function makeReturnsIssue(returns, error) {
            return (0, _parseUtilJs.makeIssue)({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    (0, _errorsJs.getErrorMap)(),
                    (0, _errorsJs.defaultErrorMap)
                ].filter((x)=>!!x),
                issueData: {
                    code: (0, _zodErrorJs.ZodIssueCode).invalid_return_type,
                    returnTypeError: error
                }
            });
        }
        const params = {
            errorMap: ctx.common.contextualErrorMap
        };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return (0, _parseUtilJs.OK)(async function(...args) {
                const error = new (0, _zodErrorJs.ZodError)([]);
                const parsedArgs = await me._def.args.parseAsync(args, params).catch((e)=>{
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e)=>{
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        } else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return (0, _parseUtilJs.OK)(function(...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) throw new (0, _zodErrorJs.ZodError)([
                    makeArgsIssue(args, parsedArgs.error)
                ]);
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) throw new (0, _zodErrorJs.ZodError)([
                    makeReturnsIssue(result, parsedReturns.error)
                ]);
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params)
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
}
ZodLazy.create = (getter, params)=>{
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                received: ctx.data,
                code: (0, _zodErrorJs.ZodIssueCode).invalid_literal,
                expected: this._def.value
            });
            return 0, _parseUtilJs.INVALID;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params)=>{
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params)
    });
}
class ZodEnum extends ZodType {
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                expected: (0, _utilJs.util).joinValues(expectedValues),
                received: ctx.parsedType,
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (!this._cache) this._cache = new Set(this._def.values);
        if (!this._cache.has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                received: ctx.data,
                code: (0, _zodErrorJs.ZodIssueCode).invalid_enum_value,
                options: expectedValues
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt)=>!values.includes(opt)), {
            ...this._def,
            ...newDef
        });
    }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    _parse(input) {
        const nativeEnumValues = (0, _utilJs.util).getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).string && ctx.parsedType !== (0, _utilJs.ZodParsedType).number) {
            const expectedValues = (0, _utilJs.util).objectValues(nativeEnumValues);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                expected: (0, _utilJs.util).joinValues(expectedValues),
                received: ctx.parsedType,
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (!this._cache) this._cache = new Set((0, _utilJs.util).getValidEnumValues(this._def.values));
        if (!this._cache.has(input.data)) {
            const expectedValues = (0, _utilJs.util).objectValues(nativeEnumValues);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                received: ctx.data,
                code: (0, _zodErrorJs.ZodIssueCode).invalid_enum_value,
                options: expectedValues
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
ZodNativeEnum.create = (values, params)=>{
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).promise && ctx.common.async === false) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).promise,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const promisified = ctx.parsedType === (0, _utilJs.ZodParsedType).promise ? ctx.data : Promise.resolve(ctx.data);
        return (0, _parseUtilJs.OK)(promisified.then((data)=>{
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap
            });
        }));
    }
}
ZodPromise.create = (schema, params)=>{
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg)=>{
                (0, _parseUtilJs.addIssueToContext)(ctx, arg);
                if (arg.fatal) status.abort();
                else status.dirty();
            },
            get path () {
                return ctx.path;
            }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) return Promise.resolve(processed).then(async (processed)=>{
                if (status.value === "aborted") return 0, _parseUtilJs.INVALID;
                const result = await this._def.schema._parseAsync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
                if (result.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (result.status === "dirty") return (0, _parseUtilJs.DIRTY)(result.value);
                if (status.value === "dirty") return (0, _parseUtilJs.DIRTY)(result.value);
                return result;
            });
            else {
                if (status.value === "aborted") return 0, _parseUtilJs.INVALID;
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
                if (result.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (result.status === "dirty") return (0, _parseUtilJs.DIRTY)(result.value);
                if (status.value === "dirty") return (0, _parseUtilJs.DIRTY)(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc)=>{
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) return Promise.resolve(result);
                if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inner.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (inner.status === "dirty") status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return {
                    status: status.value,
                    value: inner.value
                };
            } else return this._def.schema._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }).then((inner)=>{
                if (inner.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (inner.status === "dirty") status.dirty();
                return executeRefinement(inner.value).then(()=>{
                    return {
                        status: status.value,
                        value: inner.value
                    };
                });
            });
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (!(0, _parseUtilJs.isValid)(base)) return 0, _parseUtilJs.INVALID;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                return {
                    status: status.value,
                    value: result
                };
            } else return this._def.schema._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }).then((base)=>{
                if (!(0, _parseUtilJs.isValid)(base)) return 0, _parseUtilJs.INVALID;
                return Promise.resolve(effect.transform(base.value, checkCtx)).then((result)=>({
                        status: status.value,
                        value: result
                    }));
            });
        }
        (0, _utilJs.util).assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params)=>{
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params)=>{
    return new ZodEffects({
        schema,
        effect: {
            type: "preprocess",
            transform: preprocess
        },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === (0, _utilJs.ZodParsedType).undefined) return (0, _parseUtilJs.OK)(undefined);
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params)=>{
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === (0, _utilJs.ZodParsedType).null) return (0, _parseUtilJs.OK)(null);
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params)=>{
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === (0, _utilJs.ZodParsedType).undefined) data = this._def.defaultValue();
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params)=>{
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : ()=>params.default,
        ...processCreateParams(params)
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: []
            }
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx
            }
        });
        if ((0, _parseUtilJs.isAsync)(result)) return result.then((result)=>{
            return {
                status: "valid",
                value: result.status === "valid" ? result.value : this._def.catchValue({
                    get error () {
                        return new (0, _zodErrorJs.ZodError)(newCtx.common.issues);
                    },
                    input: newCtx.data
                })
            };
        });
        else return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
                get error () {
                    return new (0, _zodErrorJs.ZodError)(newCtx.common.issues);
                },
                input: newCtx.data
            })
        };
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params)=>{
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : ()=>params.catch,
        ...processCreateParams(params)
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).nan) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).nan,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
}
ZodNaN.create = (params)=>{
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async ()=>{
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inResult.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return (0, _parseUtilJs.DIRTY)(inResult.value);
                } else return this._def.out._parseAsync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx
                });
            };
            return handleAsync();
        } else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
            if (inResult.status === "aborted") return 0, _parseUtilJs.INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value
                };
            } else return this._def.out._parseSync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
            });
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data)=>{
            if ((0, _parseUtilJs.isValid)(data)) data.value = Object.freeze(data.value);
            return data;
        };
        return (0, _parseUtilJs.isAsync)(result) ? result.then((data)=>freeze(data)) : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params)=>{
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
    });
};
////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      z.custom      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
function cleanParams(params, data) {
    const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
        message: params
    } : params;
    const p2 = typeof p === "string" ? {
        message: p
    } : p;
    return p2;
}
function custom(check, _params = {}, /**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */ fatal) {
    if (check) return ZodAny.create().superRefine((data, ctx)=>{
        const r = check(data);
        if (r instanceof Promise) return r.then((r)=>{
            if (!r) {
                const params = cleanParams(_params, data);
                const _fatal = params.fatal ?? fatal ?? true;
                ctx.addIssue({
                    code: "custom",
                    ...params,
                    fatal: _fatal
                });
            }
        });
        if (!r) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({
                code: "custom",
                ...params,
                fatal: _fatal
            });
        }
        return;
    });
    return ZodAny.create();
}
const late = {
    object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
// requires TS 4.4+
class Class {
    constructor(..._){}
}
const instanceOfType = (// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`
})=>custom((data)=>data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = ()=>stringType().optional();
const onumber = ()=>numberType().optional();
const oboolean = ()=>booleanType().optional();
const coerce = {
    string: (arg)=>ZodString.create({
            ...arg,
            coerce: true
        }),
    number: (arg)=>ZodNumber.create({
            ...arg,
            coerce: true
        }),
    boolean: (arg)=>ZodBoolean.create({
            ...arg,
            coerce: true
        }),
    bigint: (arg)=>ZodBigInt.create({
            ...arg,
            coerce: true
        }),
    date: (arg)=>ZodDate.create({
            ...arg,
            coerce: true
        })
};
const NEVER = (0, _parseUtilJs.INVALID);

},{"./ZodError.js":"6J5eV","./errors.js":"4EaA8","./helpers/errorUtil.js":"kBysO","./helpers/parseUtil.js":"49X0D","./helpers/util.js":"bZ5oG","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kBysO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "errorUtil", ()=>errorUtil);
var errorUtil;
(function(errorUtil) {
    errorUtil.errToObj = (message)=>typeof message === "string" ? {
            message
        } : message || {};
    // biome-ignore lint:
    errorUtil.toString = (message)=>typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["1SKAT","4a2rT"], "4a2rT", "parcelRequirecaab", {})

//# sourceMappingURL=AIKalpesh.552b6f6e.js.map
