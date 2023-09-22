(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{5627:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[eventId]",function(){return n(5597)}])},2369:function(e,t,n){"use strict";var i=n(5893);t.Z=function(){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}},8346:function(e,t,n){"use strict";var i=n(5893);t.Z=function(){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}},8219:function(e,t,n){"use strict";n.d(t,{IP:function(){return s},N6:function(){return r},Y:function(){return c},nk:function(){return o}});let i=[{id:"e1",title:"Programming for everyone",description:"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",address:"Somestreet 25, 12345 San Somewhereo",date:"2021-05-12",image:"images/coding-event.jpg",isFeatured:!1},{id:"e2",title:"Networking for introverts",description:"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",address:"New Wall Street 5, 98765 New Work",date:"2021-05-30",image:"images/introvert-event.jpg",isFeatured:!0},{id:"e3",title:"Networking for extroverts",description:"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",address:"My Street 12, 10115 Broke City",date:"2022-04-10",image:"images/extrovert-event.jpg",isFeatured:!0}];function r(){return i.filter(e=>e.isFeatured)}function s(){return i}function o(e){let{year:t,month:n}=e;return i.filter(e=>{let i=new Date(e.date);return i.getFullYear()===t&&i.getMonth()===n-1})}function c(e){return i.find(t=>t.id===e)}},5597:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var i=n(5893),r=n(1163);n(7294);var s=n(8219),o=n(5983),c=n.n(o),a=function(e){let{title:t}=e;return(0,i.jsx)("section",{className:c().summary,children:(0,i.jsx)("h1",{children:t})})},u=n(3918),l=n.n(u),d=function(e){let{icon:t}=e;return(0,i.jsxs)("li",{className:l().item,children:[(0,i.jsx)("span",{className:l().icon,children:(0,i.jsx)(t,{})}),(0,i.jsx)("span",{className:l().content,children:e.children})]})},h=n(5029),m=n.n(h),g=n(2369),f=n(8346),x=function(e){let{date:t,address:n,image:r,imageAlt:s}=e,o=new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),c=n.replace(", ","\n");return(0,i.jsxs)("section",{className:m().logistics,children:[(0,i.jsx)("div",{className:m().image,children:(0,i.jsx)("img",{src:"/".concat(r),alt:s})}),(0,i.jsxs)("ul",{className:m().list,children:[(0,i.jsx)(d,{icon:f.Z,children:(0,i.jsx)("time",{children:o})}),(0,i.jsx)(d,{icon:g.Z,children:(0,i.jsx)("address",{children:c})})]})]})},v=n(7490),p=n.n(v),w=function(e){return(0,i.jsx)("section",{className:p().content,children:e.children})},_=function(){let e=(0,r.useRouter)(),t=e.query.eventId,n=(0,s.Y)(t);return n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{title:n.title}),(0,i.jsx)(x,{date:n.date,address:n.address,image:n.image,imageAlt:n.title}),(0,i.jsx)(w,{children:(0,i.jsx)("p",{children:n.description})})]}):(0,i.jsx)("h3",{children:"No Event Found"})}},7490:function(e){e.exports={content:"event-content_content__eAId3"}},5029:function(e){e.exports={logistics:"event-logistics_logistics__hULix",image:"event-logistics_image__UvFdD",list:"event-logistics_list__Gu8Hk"}},5983:function(e){e.exports={summary:"event-summary_summary__HGF1x"}},3918:function(e){e.exports={item:"logistics-item_item__HMmoc",icon:"logistics-item_icon__WJya1"}},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5627)}),_N_E=e.O()}]);