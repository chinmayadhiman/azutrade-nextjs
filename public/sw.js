if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ZOUrn1baWqZ5-0qf3Uvux/_buildManifest.js",revision:"d6a6c486238969da529fdb8be48fec35"},{url:"/_next/static/ZOUrn1baWqZ5-0qf3Uvux/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/507.92b1cb1d53cc9728.js",revision:"92b1cb1d53cc9728"},{url:"/_next/static/chunks/547-15023c7a81aca859.js",revision:"15023c7a81aca859"},{url:"/_next/static/chunks/664-e432d276bc67604d.js",revision:"e432d276bc67604d"},{url:"/_next/static/chunks/728cfa9a.2b212aaef0b14091.js",revision:"2b212aaef0b14091"},{url:"/_next/static/chunks/d7eeaac4-c938063614582c03.js",revision:"c938063614582c03"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-edb6f8d2aa573751.js",revision:"edb6f8d2aa573751"},{url:"/_next/static/chunks/pages/_app-b1a4d0ce46a2d4e3.js",revision:"b1a4d0ce46a2d4e3"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/category/%5Bslug%5D-c7d6406f0a1502f0.js",revision:"c7d6406f0a1502f0"},{url:"/_next/static/chunks/pages/index-b0f2872225b9bde7.js",revision:"b0f2872225b9bde7"},{url:"/_next/static/chunks/pages/nav-0840e0a20455a006.js",revision:"0840e0a20455a006"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-829164024542bfaf.js",revision:"829164024542bfaf"},{url:"/_next/static/css/0c98f47408e76098.css",revision:"0c98f47408e76098"},{url:"/_next/static/css/4df78f2cd73d6b26.css",revision:"4df78f2cd73d6b26"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/anar.6402e18a.png",revision:"1de077d4b35a4e434576b60268af20b8"},{url:"/_next/static/media/hm2.df0e4b0a.jpg",revision:"df0e4b0a"},{url:"/_next/static/media/hm2.df0e4b0a.jpg",revision:"9377968ca4012f0a9a502ceb3da1c2b5"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/anar.png",revision:"1de077d4b35a4e434576b60268af20b8"},{url:"/images/ask.gif",revision:"282ec3a062dc95d767a431114663f999"},{url:"/images/banner-bg.webp",revision:"9f9428562a714baf53269d45cb6597cc"},{url:"/images/hm.jpg",revision:"c604194646ffe1af5f08facd67c4b9b2"},{url:"/images/hm1.jpg",revision:"2e2408e04ee9ab69545f4f4812c9f475"},{url:"/images/hm2.jpg",revision:"9377968ca4012f0a9a502ceb3da1c2b5"},{url:"/images/home-img.png",revision:"f5c14a047a689ff78ab575af46540ece"},{url:"/images/team.png",revision:"a6de1d094c84fb94000645d113e5aad7"},{url:"/images/team1.png",revision:"a9698862e44a38589c414cfb87b110bd"},{url:"/images/team2.jpg",revision:"f2c8d1e1130b7ee4dc250e74508550f5"},{url:"/images/team3.jpg",revision:"029ebfced6ec5f818299d98305ce5834"},{url:"/images/team4.jpg",revision:"3ceae4edd751cbab712d84516eb1d2eb"},{url:"/images/team5.png",revision:"6a9381d613d06aa9cc1499e109751f75"},{url:"/images/team6.png",revision:"3ed47774377004c6045db5587adb8dc3"},{url:"/images/team7.png",revision:"fcd6cee9bddb97ec583f236905071910"},{url:"/images/team8.png",revision:"dac5f74e107ffe2e546509db17f27f8a"},{url:"/images/team9.png",revision:"0931f643ea4d299425fced29e6078166"},{url:"/manifest.json",revision:"f7f1827e87cb7fbdc4dbd8fd72b8ab9b"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
