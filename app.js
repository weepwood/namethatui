const terms=window.UI_TERMS||[];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const lights='<div class="lights"><i></i><i></i><i></i></div>',lines='<div class="lines"><i></i><i></i><i></i></div>';
const aliases={
 'vibrancy':'菜单栏图标后面的浅色背景 毛玻璃 半透明背景 侧栏透明材质 wallpaper bleed frosted material',
 'scrim':'弹窗后面半透明的黑色层 弹窗后面半透明黑色层 弹窗后面的遮罩 背景变暗 蒙层 backdrop overlay',
 'form-field':'输入后消失的灰色文字 输入框里的灰字 占位文字 placeholder hint text',
 'volume-slider':'拖动来改变音量的圆点 拖动来调节音量的圆点 音量轨道上的圆点 滑块旋钮 knob thumb',
 'truncation':'文字被三个点截断 文字太长显示三个点 文本末尾省略号 ellipsis line clamp',
 'popover-dropdown-tooltip':'按钮旁边出现的小浮层 悬停提示 下拉浮层 anchored overlay',
 'toast':'操作成功后短暂出现的消息 保存成功提示 自动消失消息 snackbar',
 'command-palette':'按快捷键打开搜索命令 搜索所有操作 快速启动器 launcher',
 'hamburger-menu':'三条横线菜单 移动端侧边导航 nav drawer',
 'focus-visible':'键盘选中控件的外框 tab键焦点 focus outline',
 'sticky-fixed':'滚动时固定在顶部 吸顶 固定悬浮',
 'empty-state':'没有数据时的提示 空页面 无内容引导',
 'lightbox':'点击图片放大 背景变暗 图片预览层',
 'masonry':'高低不一的卡片紧密排列 pinterest 瀑布流',
 'bento-grid':'大小不同的方块网格 便当盒布局 dashboard tiles'
};
function demo(type){
 const M={
  scramble:'<div class="demo scramble">NAMΞ <b>#@UI</b></div>',spring:'<div class="demo spring"><i></i></div>',easing:'<div class="demo spring"><i></i></div>',
  masonry:`<div class="demo tiles">${'<i></i>'.repeat(6)}</div>`,bento:`<div class="demo tiles bento">${'<i></i>'.repeat(5)}</div>`,
  hamburger:`<div class="demo form"><div style="display:flex;justify-content:space-between"><b>FIELD NOTES</b><span>☰</span></div><br>${lines}<div class="menu-drop" style="left:auto;right:8px;top:40px">首页<br>文章<br>归档<br>关于</div></div>`,
  lightbox:'<div class="demo overlay"><div class="scrim"><div class="modal" style="height:80px;background:linear-gradient(135deg,#a8c6d8,#e3c7b1);display:grid;place-items:center;color:#fff">沙丘</div></div></div>',
  marquee:'<div class="demo marquee"><span>▲ Vertex　● Orbit　■ Quadra　✦ Nova　◆ Prism　▲ Vertex　● Orbit　■ Quadra　✦ Nova　◆ Prism　</span></div>',
  form:'<div class="demo form"><span class="label">电子邮箱 *</span><div class="input">name@example.com</div><div class="helper">我们只会用它帮助你登录。</div><div class="helper error">请输入有效地址。</div></div>',
  truncate:'<div class="demo form"><div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">季度评审会议已重新安排到周五下午，请所有人准时参加</div><br><div style="font-size:8px;color:#777;line-height:1.5">本次更新重构了同步引擎，修复离线编辑问题，并加入键盘快捷键…</div></div>',
  drag:'<div class="demo drag"><div class="drag-col"><div class="drag-item">写完引言</div><div class="drag-item floating">发布草稿</div></div><div class="drag-col"><div class="drag-item">修复页头</div><div class="drag-item">检查设计</div></div></div>',
  divider:'<div class="demo form">主题内容<hr>剪切　复制　粘贴<hr>删除</div>',progress:'<div class="demo progress"><div class="spinner"></div><div class="ring"></div></div>',
  overflow:'<div class="demo form" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;text-align:center"><b>•••</b><b>⋮</b><b>☰</b><div class="menu-drop" style="top:42px;left:auto;right:10px;text-align:left">重命名<br>复制<br>归档<br>删除</div></div>',
  toast:`<div class="demo form">${lines}<div style="margin:22px auto 0;background:#222;color:#fff;padding:7px 10px;width:max-content;font-size:8px">✓ 更改已保存</div></div>`,
  overlay:`<div class="demo overlay">${lines}<div class="scrim"><div class="modal"><b>删除文件？</b><p>此操作无法撤销。</p><button class="demo-button primary">删除</button></div></div></div>`,
  popovers:'<div class="demo form" style="text-align:center;padding-top:60px"><div class="menu-drop" style="left:45px;top:8px">筛选项目<br><br>☑ 仅显示活跃</div><button class="demo-button">筛选</button> <button class="demo-button">操作⌄</button></div>',
  scrim:`<div class="demo overlay">${lines}<div class="scrim"><div class="modal">背后的半透明层就是遮罩。</div></div></div>`,
  skeleton:'<div class="demo" style="display:grid;grid-template-columns:45px 1fr;gap:12px"><i style="width:45px;height:45px;border-radius:50%;background:#d2d1cd"></i><div class="lines">'+ '<i></i><i></i><i></i>' +'</div></div>',
  combobox:'<div class="demo form"><span class="label">喜欢的水果</span><div class="input">苹果</div><div class="menu-drop" style="left:9px;right:9px;top:50px">苹果<br>杏子<br>牛油果</div></div>',
  command:'<div class="demo command"><div class="input">⌕　命令…</div><div class="command-row active">创建新项目 <span>⌘ N</span></div><div class="command-row">邀请成员 <span>⌘ I</span></div><div class="command-row">打开设置 <span>⌘ ,</span></div></div>',
  accordion:'<div class="demo accordion"><div class="acc">什么是组件？ <b>−</b></div><div class="acc-copy">拥有自身结构和行为、可以重复使用的一块界面。</div><div class="acc">什么是设计令牌？ <b>＋</b></div></div>',
  tabs:'<div class="demo tabs"><div class="tabbar"><i>概览</i><i>洞察</i><i>活动</i></div><div class="tabcopy"><b>1,248</b><div class="helper">较上周 +12%</div></div></div>',
  badges:'<div class="demo chips"><span class="badge">7</span><span class="chip">设计系统 ×</span><span class="pill">活跃</span><span class="tag">Web</span></div>',
  breadcrumb:'<div class="demo form">首页　›　组件　›　<b>按钮</b></div>',sticky:`<div class="demo form"><b style="display:block;background:#222;color:#fff;padding:8px">粘性标题</b><br>${lines}<button class="primary" style="float:right;border:0;border-radius:50%;width:28px;height:28px">+</button></div>`,
  focus:'<div class="demo focus"><button>返回</button><button class="active">继续</button></div>',empty:'<div class="demo form" style="text-align:center;padding:24px"><b>还没有项目</b><p class="helper">创建第一个项目开始工作。</p><button class="demo-button primary">新建项目</button></div>',
  hovercard:'<div class="demo form" style="width:170px;margin:auto"><b>J　Jane Appleseed</b><p class="helper">@jane · 设计系统工程师<br><br>Toronto · 2.4k</p></div>',
  controls:'<div class="demo controls"><div class="control"><span class="switch"></span>开关</div><div class="control"><span class="check"></span>复选框</div><div class="control"><span class="radio"></span>单选框</div></div>',
  toggle:'<div class="demo chips"><span class="tag">左</span><span class="pill">居中</span><span class="tag">右</span></div>',pointer:'<div class="demo pointer"><span>➤</span><span>I</span><span>☝</span><span>↔</span></div>',
  alert:'<div class="demo alert"><div style="font-size:25px">⚠️</div><div><strong>清空废纸篓？</strong><p>此操作无法撤销。</p><div class="actions"><button class="demo-button">取消</button><button class="demo-button primary">清空</button></div></div></div>',
  slider:'<div class="demo slider">🔈<div class="track"><i></i></div>🔊</div>',colorwell:'<div class="demo chips"><span style="width:65px;height:32px;border:1px solid #999;background:linear-gradient(90deg,#ff775c 75%,#eee 75%)"></span><span class="chip">颜色面板</span></div>',
  window:`<div class="demo demo-window"><div class="titlebar">${lights}<span style="margin:auto">备忘录</span></div><div class="pane">${lines}</div></div>`,
  split:`<div class="demo split"><div class="side">${'<i></i>'.repeat(6)}</div><div class="content">${lines}</div></div>`,scroll:`<div class="demo form" style="height:125px;overflow:hidden">${lines}<br>${lines}<div style="position:absolute;right:5px;top:20px;width:5px;height:45px;background:#999;border-radius:5px"></div></div>`,
  searchfield:'<div class="demo input" style="width:190px;margin:auto;border-radius:7px">⌕　搜索… <span style="margin-left:auto">×</span></div>',
  save:'<div class="demo save"><div class="save-row">存储为：<div class="field">未命名</div></div><div class="save-row">位置：<div class="field">文稿　⌄</div></div><div class="save-row">格式：<div class="field">Pages　⌄</div></div><div class="actions"><button class="demo-button">取消</button><button class="demo-button primary">存储</button></div></div>',
  tokens:'<div class="demo chips"><span class="chip">设计 ×</span><span class="chip">Q3 ×</span><span class="chip">报告 ×</span></div>','combo-button':'<div class="demo chips"><button class="demo-button">存储</button><button class="demo-button">⌄</button></div>',
  level:'<div class="demo form"><div style="letter-spacing:8px;color:#d89b18;font-size:18px">★★★★☆</div><br><div style="height:12px;background:linear-gradient(90deg,#59a86c 70%,#ddd 70%)"></div></div>',
  columns:'<div class="demo columns"><div><i>文件</i><i class="active">项目</i><i>归档</i></div><div><i>NameThat</i><i class="active">content</i><i>FeelBench</i></div><div><i>文章.md</i><i>图像.png</i></div></div>',
  outline:'<div class="demo form" style="font-size:8px;line-height:2.3">▾　资料库<br>　　项目<br>　　NameThat<br>▸　归档</div>',
  menubar:'<div class="demo menubar-demo"><div class="menu-top"><b></b><b>访达</b><span>文件</span><span>编辑</span><span class="right">⌁　9:41</span></div><div class="menu-drop">新建窗口<br>打开…<br>设置…<br>退出</div></div>',context:'<div class="demo form" style="height:125px">📄<br>项目文稿<div class="menu-drop" style="left:70px;top:15px">打开　⌘O<br>重命名…<br>复制<br>移到废纸篓</div></div>',
  disclosure:'<div class="demo form" style="font-size:8px;line-height:2.3">▼　文稿<br>　　Q3 报告.pages<br>▶　下载</div>',dock:'<div class="demo dock-demo"><div class="dock"><i></i><i></i><i></i><i></i></div></div>',
  inspector:`<div class="demo inspector"><div class="pane">${lines}</div><aside><b>样式</b><div class="property">填充 <span>白色</span></div><div class="property">边框 <span>1px</span></div><div class="property">阴影 <span>开</span></div></aside></div>`,
  panel:'<div class="demo menubar-demo"><div class="modal" style="position:absolute;left:45px;top:25px;background:rgba(30,32,36,.85);color:#fff">编辑器颜色<br><br>亮度 ━━━●</div></div>',macpopover:'<div class="demo form" style="text-align:center;padding-top:65px"><div class="menu-drop" style="left:65px;top:10px">正在播放<br><b>Ambient Study</b></div><button class="demo-button">显示气泡框</button></div>',
  popup:'<div class="demo form"><div class="input">中号 ✓ <span style="margin-left:auto">⌄</span></div><br><div class="input">添加新文件… <span style="margin-left:auto">⌄</span></div></div>',segments:'<div class="demo chips"><span class="tag">日</span><span class="pill">周</span><span class="tag">月</span><span class="tag">年</span></div>',
  sheet:`<div class="demo demo-window"><div class="titlebar">${lights}</div><div class="pane"><div class="form"><b>删除“Q3 报告”？</b><p class="helper">只会阻止当前窗口。</p></div></div></div>`,sidebar:`<div class="demo split"><div class="side" style="font-size:8px;line-height:2.4">收藏<br>最近使用<br><b>桌面</b><br>文稿<br>下载</div><div class="content">${lines}</div></div>`,
  stepper:'<div class="demo chips">份数：<span class="tag">2　▲<br>　　▼</span></div>',toolbar:`<div class="demo demo-window"><div class="titlebar">${lights}<b style="margin:auto">未命名</b><button>＋</button></div><div class="pane">${lines}</div></div>`,traffic:`<div class="demo demo-window"><div class="titlebar">${lights}</div><div class="pane"></div></div>`,
  vibrancy:'<div class="demo vibrancy"><aside><i>资料库</i><i>收藏</i><i>项目</i></aside></div>','menu-extra':'<div class="demo menubar-demo"><div class="menu-top" style="justify-content:flex-end">◉　<b>◈</b>　⌁　9:41</div><div class="menu-drop" style="left:auto;right:8px">名称查询<br><br>搜索界面术语…<br>打开偏好设置</div></div>'
 };
 return M[type]||M.window
}
const grid=$('#card-grid'),count=$('#result-count'),empty=$('#empty-results'),search=$('#search-dialog'),input=$('#command-input'),results=$('#command-results'),detail=$('#detail-dialog'),toast=$('#toast'),definition=$('#definition-popover');
let platform='all',sort='newest',selection=0,shown=[],current;
const esc=s=>{const d=document.createElement('div');d.textContent=s;return d.innerHTML};
const normalize=s=>String(s||'').toLowerCase().replace(/[\s“”"'，。！？、·：:（）()\-_/]+/g,'');
function match(t,q){
 const raw=String(q||'').trim().toLowerCase();
 if(!raw)return true;
 const hay=`${t.zh} ${t.en} ${t.code} ${t.desc} ${t.def} ${aliases[t.slug]||''}`.toLowerCase();
 if(hay.includes(raw))return true;
 const nq=normalize(raw),nh=normalize(hay);
 if(nh.includes(nq))return true;
 const tokens=raw.split(/[\s，。！？、]+/).filter(x=>x.length>1);
 return tokens.length>1&&tokens.every(token=>hay.includes(token));
}
function filtered(q=''){let a=terms.filter(t=>(platform==='all'||t.p===platform)&&match(t,q));return a.sort((x,y)=>sort==='popular'?y.pop-x.pop:x.index-y.index)}
function render(){let a=filtered();count.textContent=a.length;grid.hidden=!a.length;empty.hidden=!!a.length;grid.innerHTML=a.map(t=>`<article class="ui-card" data-slug="${t.slug}" tabindex="0"><div class="card-demo ${t.tall?'tall':''} ${t.short?'short':''}">${demo(t.demo)}</div><div class="card-body"><div class="card-meta"><span class="card-platform">${t.p}</span>${t.new?'<span class="card-new">new</span>':''}</div><h3 class="card-title">${t.zh}</h3><span class="card-english">${t.en}</span><span class="card-code">${esc(t.code)}</span><p class="card-description">${t.desc}</p></div></article>`).join('')}
function openSearch(v=''){search.hidden=false;document.body.classList.add('dialog-open');input.value=v;selection=0;renderResults();setTimeout(()=>input.focus())}
function closeSearch(){search.hidden=true;input.value='';shown=[];document.body.classList.remove('dialog-open')}
function renderResults(){shown=filtered(input.value).slice(0,9);selection=Math.min(selection,Math.max(0,shown.length-1));results.innerHTML=shown.length?shown.map((t,i)=>`<button class="command-item ${i===selection?'is-selected':''}" data-command-slug="${t.slug}"><span class="command-preview">${t.p==='web'?'W':'⌘'}</span><span><strong>${t.zh}</strong><small>${t.en} · ${t.desc}</small></span><span>${esc(t.code)}</span></button>`).join(''):'<div class="command-empty">没有匹配结果，试试描述它的行为。</div>'}
function openDetail(t){if(!t)return;current=t;$('#detail-demo').innerHTML=demo(t.demo);$('#detail-badges').innerHTML=`<span>${t.p}</span><span>${esc(t.code)}</span>`;$('#detail-title').textContent=t.zh;$('#detail-english').textContent=t.en;$('#detail-description').textContent=t.desc;$('#detail-definition').textContent=t.def;$('#detail-prompt').textContent=`实现一个“${t.zh}（${t.en}）”。${t.desc} 请覆盖默认、悬停、键盘焦点、激活、禁用状态，并保证响应式布局和可访问性语义正确。优先使用 ${t.code}。`;search.hidden=true;input.value='';shown=[];detail.hidden=false;document.body.classList.add('dialog-open')}
function closeDetail(){detail.hidden=true;document.body.classList.remove('dialog-open');current=null}
function tip(m){toast.textContent=m;toast.classList.add('is-visible');clearTimeout(tip.t);tip.t=setTimeout(()=>toast.classList.remove('is-visible'),1800)}
document.addEventListener('click',e=>{let n;if(n=e.target.closest('.ui-card'))return openDetail(terms.find(t=>t.slug===n.dataset.slug));if(n=e.target.closest('[data-command-slug]'))return openDetail(terms.find(t=>t.slug===n.dataset.commandSlug));if(n=e.target.closest('[data-platform]')){platform=n.dataset.platform;$$('[data-platform]').forEach(b=>b.classList.toggle('is-active',b===n));return render()}if(n=e.target.closest('[data-sort]')){sort=n.dataset.sort;$$('[data-sort]').forEach(b=>b.classList.toggle('is-active',b===n));return render()}if(e.target.closest('[data-open-search]'))return openSearch();if(e.target.closest('[data-close-search]'))return closeSearch();if(e.target.closest('[data-close-detail]'))return closeDetail();if(n=e.target.closest('[data-query]'))return openSearch(n.dataset.query)});
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}if(e.key==='Escape'){if(!detail.hidden)closeDetail();else if(!search.hidden)closeSearch()}if(!search.hidden){if(e.key==='ArrowDown'){e.preventDefault();selection=Math.min(selection+1,shown.length-1);renderResults()}if(e.key==='ArrowUp'){e.preventDefault();selection=Math.max(selection-1,0);renderResults()}if(e.key==='Enter'&&shown[selection]){e.preventDefault();openDetail(shown[selection])}}let c=e.target.closest?.('.ui-card');if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openDetail(terms.find(t=>t.slug===c.dataset.slug))}});
input.addEventListener('input',()=>{selection=0;renderResults()});$('#surprise-button').addEventListener('click',()=>{let a=filtered();openDetail(a[Math.floor(Math.random()*a.length)]||terms[Math.floor(Math.random()*terms.length)])});$('#copy-prompt').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#detail-prompt').textContent);tip('提示词已复制')}catch{tip('复制失败，请手动选择')}});
document.addEventListener('dblclick',e=>{if(e.target.closest('button,input,kbd,.detail-dialog,.search-dialog'))return;let w=window.getSelection()?.toString().trim();if(!w||w.length>24)return;let t=terms.find(x=>x.zh.includes(w)||x.en.toLowerCase().includes(w.toLowerCase()));definition.innerHTML=`<strong>${esc(w)}</strong>${t?t.def:'这是一个界面设计术语，可使用顶部搜索进一步查询。'}`;definition.hidden=false;definition.style.left=Math.max(10,Math.min(e.clientX+12,innerWidth-316))+'px';definition.style.top=Math.max(10,Math.min(e.clientY+12,innerHeight-120))+'px';clearTimeout(definition.t);definition.t=setTimeout(()=>definition.hidden=true,3200)});
render();
