"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[8308],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9225:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var a=r(83117),n=(r(67294),r(3905));const o={id:"overview",title:"Apache BookKeeper 4.16.0-SNAPSHOT"},i=void 0,l={unversionedId:"overview/overview",id:"overview/overview",title:"Apache BookKeeper 4.16.0-SNAPSHOT",description:"\x3c!--",source:"@site/docs/overview/overview.md",sourceDirName:"overview",slug:"/overview/",permalink:"/docs/next/overview/",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Apache BookKeeper 4.16.0-SNAPSHOT"},sidebar:"docsSidebar",next:{title:"BookKeeper installation",permalink:"/docs/next/getting-started/installation"}},p={},s=[{value:"Users",id:"users",level:3},{value:"Administrators",id:"administrators",level:3},{value:"Contributors",id:"contributors",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This documentation is for Apache BookKeeper","\u2122"," version 4.16.2."),(0,n.kt)("p",null,"Apache BookKeeper","\u2122"," is a scalable, fault-tolerant, low-latency storage service optimized for real-time workloads. It offers durability, replication, and strong consistency as essentials for building reliable real-time applications."),(0,n.kt)("p",null,"BookKeeper is suitable for a wide variety of use cases, including:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Use case"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"WAL")," (write-ahead logging)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The HDFS ",(0,n.kt)("a",{parentName:"td",href:"https://hadoop.apache.org/docs/r2.5.2/hadoop-project-dist/hadoop-hdfs/HDFSHighAvailabilityWithNFS.html#BookKeeper_as_a_Shared_storage_EXPERIMENTAL"},"namenode"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"WAL")," (write-ahead logging)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Twitter ",(0,n.kt)("a",{parentName:"td",href:"https://blog.twitter.com/engineering/en_us/a/2016/strong-consistency-in-manhattan.html"},"Manhattan"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"WAL")," (write-ahead logging)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/diennea/herddb"},"HerdDB"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"WAL")," (write-ahead logging)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/pravega/pravega"},"Pravega"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Message storage"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/docs/concepts-architecture-overview#persistent-storage"},"Apache Pulsar"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Offset/cursor storage"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/docs/concepts-architecture-overview#persistent-storage"},"Apache Pulsar"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Object/",(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Binary_large_object"},"BLOB")," storage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storing snapshots to replicated state machines")))),(0,n.kt)("p",null,"Learn more about Apache BookKeeper","\u2122"," and what it can do for your organization:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/release-notes"},"Apache BookKeeper 4.16.2 Release Notes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc"},"Java API docs"))),(0,n.kt)("p",null,"Or start ",(0,n.kt)("a",{parentName:"p",href:"../getting-started/installation"},"using")," Apache BookKeeper today."),(0,n.kt)("h3",{id:"users"},"Users"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Concepts"),": Start with ",(0,n.kt)("a",{parentName:"li",href:"../getting-started/concepts"},"concepts"),". This will help you to fully understand\nthe other parts of the documentation, including the setup, integration and operation guides."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Getting Started"),": Install ",(0,n.kt)("a",{parentName:"li",href:"../getting-started/installation"},"Apache BookKeeper")," and run bookies ",(0,n.kt)("a",{parentName:"li",href:"../getting-started/run-locally"},"locally")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"API"),": Read the ",(0,n.kt)("a",{parentName:"li",href:"../api/overview"},"API")," documentation to learn how to use Apache BookKeeper to build your applications."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Deployment"),": The ",(0,n.kt)("a",{parentName:"li",href:"../deployment/manual"},"Deployment Guide")," shows how to deploy Apache BookKeeper to production clusters.")),(0,n.kt)("h3",{id:"administrators"},"Administrators"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations"),": The ",(0,n.kt)("a",{parentName:"li",href:"../admin/bookies"},"Admin Guide")," shows how to run Apache BookKeeper on production, what are the production\nconsiderations and best practices.")),(0,n.kt)("h3",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Details"),": Learn ",(0,n.kt)("a",{parentName:"li",href:"../development/protocol"},"design details")," to know more internals.")))}u.isMDXComponent=!0}}]);