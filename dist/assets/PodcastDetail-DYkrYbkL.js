import{r as o,P as c,u as l,j as e,L as i}from"./index-C-QEhG41.js";const d=s=>{const t=Math.floor(s/36e5),a=Math.floor(s%36e5/6e4),n=(s%6e4/1e3).toFixed(0);return t+":"+(a<10?"0":"")+a+":"+(Number(n)<10?"0":"")+n};function h(s){const[t,a]=o.useState();return o.useEffect(()=>{s&&c.getPodcastDetailById().execute(s).then(n=>a(n))},[s]),{podcastDetail:t}}const p="_podcastDetail_bpnf7_1",x="_totalEpisodes_bpnf7_11",u="_wrapperTable_bpnf7_22",j="_table_bpnf7_33",r={podcastDetail:p,totalEpisodes:x,wrapperTable:u,table:j};function b(){const{podcastId:s}=l(),{podcastDetail:t}=h(s);return e.jsxs("div",{className:r.podcastDetail,children:[e.jsx("div",{className:r.header,children:e.jsxs("span",{className:r.totalEpisodes,children:["Episodes: ",t==null?void 0:t.episodes.length]})}),e.jsx("div",{className:r.wrapperTable,children:e.jsxs("table",{className:r.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Date"}),e.jsx("th",{style:{textAlign:"center"},children:"Duration"})]})}),e.jsx("tbody",{children:(t==null?void 0:t.episodes.length)!==0&&(t==null?void 0:t.episodes.map((a,n)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(i,{to:`/podcast/${s}/episode/${a.episodeId}`,children:a.episodeName})}),e.jsx("td",{children:new Date(a.releaseDate).toLocaleDateString()}),e.jsx("td",{style:{textAlign:"center"},children:d(a.duration)})]},n)))})]})})]})}b.displayName="PodcastDetail";export{b as Component};
