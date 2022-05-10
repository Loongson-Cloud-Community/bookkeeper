"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[3959],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),k=a,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5079:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"installation",title:"BookKeeper installation"},p=void 0,s={unversionedId:"getting-started/installation",id:"version-4.15.0/getting-started/installation",title:"BookKeeper installation",description:"You can install BookKeeper either by downloading a GZipped tarball package or cloning the BookKeeper repository.",source:"@site/versioned_docs/version-4.15.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",tags:[],version:"4.15.0",frontMatter:{id:"installation",title:"BookKeeper installation"},sidebar:"docsSidebar",previous:{title:"Apache BookKeeper 4.15.0",permalink:"/docs/overview/"},next:{title:"Run bookies locally",permalink:"/docs/getting-started/run-locally"}},c={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Download",id:"download",level:2},{value:"Clone",id:"clone",level:2},{value:"Build using Gradle",id:"build-using-gradle",level:2},{value:"Package directory",id:"package-directory",level:2}],d={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can install BookKeeper either by ",(0,o.kt)("a",{parentName:"p",href:"#download"},"downloading")," a ",(0,o.kt)("a",{parentName:"p",href:"http://www.gzip.org/"},"GZipped")," tarball package or ",(0,o.kt)("a",{parentName:"p",href:"#clone"},"cloning")," the BookKeeper repository."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.opengroup.org/unix"},"Unix environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},"Java Development Kit 1.8")," or later")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"You can download Apache BookKeeper releases from one of many ",(0,o.kt)("a",{parentName:"p",href:"https://dlcdn.apache.org/bookkeeper/"},"Apache mirrors"),"."),(0,o.kt)("h2",{id:"clone"},"Clone"),(0,o.kt)("p",null,"To build BookKeeper from source, clone the repository from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/bookkeeper"},"GitHub mirror"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/apache/bookkeeper\n")),(0,o.kt)("h2",{id:"build-using-gradle"},"Build using Gradle"),(0,o.kt)("p",null,"Once you have the BookKeeper on your local machine, either by ",(0,o.kt)("a",{parentName:"p",href:"#download"},"downloading")," or ",(0,o.kt)("a",{parentName:"p",href:"#clone"},"cloning")," it, you can then build BookKeeper from source using Gradle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./gradlew build -x signDistTar -x test\n")),(0,o.kt)("p",null,"To run all the tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./gradlew test -x signDistTar\n")),(0,o.kt)("h2",{id:"package-directory"},"Package directory"),(0,o.kt)("p",null,"The BookKeeper project contains several subfolders that you should be aware of:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Subfolder"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-server"},(0,o.kt)("inlineCode",{parentName:"a"},"bookkeeper-server"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The BookKeeper server and client")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-benchmark"},(0,o.kt)("inlineCode",{parentName:"a"},"bookkeeper-benchmark"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"A benchmarking suite for measuring BookKeeper performance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-stats"},(0,o.kt)("inlineCode",{parentName:"a"},"bookkeeper-stats"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"A BookKeeper stats library")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-stats-providers"},(0,o.kt)("inlineCode",{parentName:"a"},"bookkeeper-stats-providers"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"BookKeeper stats providers")))))}k.isMDXComponent=!0}}]);