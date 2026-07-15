window.UI_TERMS=`web|text-scramble|文字扰乱解码|Text Scramble (Decode Effect)|ScrambleTextPlugin|随机字符不断翻动，最后逐步还原成真实文字。|一种先显示乱码、再逐字符收敛到目标文本的动效。|scramble|99||
web|spring-animation|弹簧动画|Spring Animation|transition: { type: "spring" }|基于物理规律的运动，会越过目标位置并逐渐稳定。|用刚度、阻尼和质量模拟真实弹簧惯性的动画。|spring|98||
web|easing|缓动函数|Easing (Timing Function)|transition-timing-function|决定动画速度变化的曲线，也是动作显得顺滑或机械的原因。|控制动画在开始、中段和结束时快慢变化的时间曲线。|easing|96||
web|masonry|瀑布流布局|Masonry Layout (Pinterest Grid)|columns|不同高度的卡片紧密装入多列，不会留下普通网格的行间空白。|一种按列向下排列、允许项目高度不同的紧凑布局。|masonry|97|1|
web|bento-grid|便当盒网格|Bento Grid|display: grid|在同一网格中混合多种卡片尺寸，形成像便当盒一样的模块布局。|由大小不一但对齐统一的矩形模块组成的展示网格。|bento|95||
web|hamburger-menu|汉堡菜单|Hamburger Menu (Nav Drawer)|aria-expanded|三条横线按钮，以及点击后从侧边滑出的导航面板。|用于在有限空间内收起主要导航的三横线按钮。|hamburger|94||
web|lightbox|灯箱预览|Lightbox|<dialog>|点击缩略图后放大显示，并将页面背景压暗的图片查看层。|在页面上方放大展示媒体内容的模态覆盖层。|lightbox|91||
web|marquee|跑马灯|Marquee|@keyframes translateX|内容持续横向自动滚动，并以无缝循环的方式重复。|让文本或图形沿一个方向连续循环移动的区域。|marquee|90||1
web|form-field|表单字段|Form Field|<label for>|带标签输入框的完整组成：标题、占位文字、辅助说明和错误提示。|围绕一个输入控件组织起来的一整组表单信息。|form|93||
web|truncation|文本截断|Truncation (Ellipsis & Line Clamp)|text-overflow: ellipsis|在一行、指定行数或文字中间用省略号截短内容。|空间不足时隐藏多余文本并显示省略号的处理方式。|truncate|96||
web|drag-drop|拖放|Drag & Drop|ondrop|拖动交互中的抓手、浮动预览、落点提示和放置状态。|按住对象移动到另一位置并释放完成操作的交互。|drag|89|1|
web|divider-separator-rule|分割线、分隔符与横线|Divider vs. Separator vs. Rule|<hr> / role="separator"|看起来相同的细线，可能表示内容换题、控件分组或纯装饰。|用于划分内容层次或操作组别的线性视觉元素。|divider|83||
web|progress-indicators|进度环、加载器与进度条|Progress Ring vs. Spinner vs. Progress Bar|<progress>|加载器表示需要等待；进度环和进度条则可以表达已完成比例。|用于传达等待状态或任务完成程度的一组反馈组件。|progress|92||
web|overflow-menu|三点更多菜单|The Three Dots (Overflow Menu)|<button>|横向三点、纵向三点、三条线和省略号在界面中代表不同含义。|把低频操作收纳在三点按钮后的紧凑菜单。|overflow|95||
web|toast|轻提示|Toast (Snackbar)|role="status"|操作完成后短暂出现、不会打断用户的状态消息。|自动消失的非模态状态反馈，通常出现在页面边缘。|toast|98||
web|modal-drawer-sheet|模态框、抽屉与面板|Modal Dialog vs. Drawer vs. Sheet|<dialog>|三种覆盖层主要通过出现位置、阻塞范围与任务深度来区分。|用于承载聚焦任务的覆盖式容器，但位置和阻塞程度不同。|overlay|99|1|
web|popover-dropdown-tooltip|气泡框、下拉菜单与工具提示|Popover vs. Dropdown Menu vs. Tooltip|popover|三种锚定浮层的触发方式、内容复杂度和关闭规则完全不同。|锚定在触发控件附近、但用途各不相同的浮动界面。|popovers|100|1|
web|scrim|遮罩层|Scrim (Backdrop / Overlay)|::backdrop|位于模态表面背后、用于分离前景任务与页面的半透明层。|覆盖背景并降低其视觉权重的半透明层。|scrim|97||
web|skeleton-spinner|骨架屏与加载器|Skeleton vs. Spinner|aria-busy="true"|骨架屏适合布局可预测的内容，加载器适合无法确定完成时间的等待。|两种不同的加载反馈：预留内容轮廓或显示持续旋转。|skeleton|94||
web|combobox|组合框|Combobox (Autocomplete / Typeahead)|role="combobox"|文本输入框与经过筛选的可选建议列表组合在一起。|既能输入文字，也能从动态建议中选择值的控件。|combobox|96|1|
web|command-palette|命令面板|Command Palette|Command|通过键盘优先的搜索启动器快速执行操作或跳转页面。|用搜索框集中查找并执行应用命令的浮层。|command|100|1|
web|accordion|手风琴折叠面板|Accordion (Disclosure)|<details>|多个纵向排列的标题，可以展开或收起各自内容。|通过点击标题显示或隐藏内容的一组折叠区块。|accordion|91||
web|tabs|标签页|Tabs|role="tablist"|一行标签控制同一内容区域，在多个面板之间切换。|让用户在同一位置切换不同内容视图的导航控件。|tabs|99||
web|badge-chip-pill-tag|徽标、胶囊、信息块与标签|Badge vs. Chip vs. Pill vs. Tag|Badge|它们都很紧凑，但语义、形状与是否可交互并不相同。|用于显示状态、分类或可选值的小型标签类元素。|badges|93||
web|breadcrumbs|面包屑导航|Breadcrumbs|<nav>|从当前页面一路返回上级层次的路径导航。|显示当前页面在信息层级中所处位置的路径。|breadcrumb|88||1
web|sticky-fixed|粘性定位与固定定位|Sticky vs. Fixed Positioning|position: sticky|两种保持元素可见的方式，其参照容器与滚动行为不同。|让元素在滚动过程中持续可见的两类 CSS 定位方式。|sticky|92||
web|focus-visible|键盘焦点环|Focus Ring (:focus-visible)|:focus-visible|只在键盘导航时出现，用来标识当前可操作控件的轮廓。|向键盘用户显示当前焦点位置的可见边框。|focus|90||
web|empty-state|空状态|Empty State|<section>|当页面没有内容时，提供解释、下一步动作和有目的的引导。|在数据为空时呈现的说明性占位界面。|empty|95||
web|hover-card|悬停信息卡|Hover Card|HoverCard|当鼠标悬停或键盘聚焦引用对象时，显示丰富但非模态的预览。|在不离开当前页面的情况下快速预览对象详情。|hovercard|87|1|
web|switch-checkbox-radio|开关、复选框与单选框|Switch vs. Checkbox vs. Radio|<input>|分别用于立即开关设置、独立多选，以及从一组中选择唯一选项。|三类选择控件，核心区别在于生效时机和选择模型。|controls|100||
web|toggle-group|切换按钮组|Toggle Group (Segmented Control)|ToggleGroup|一排连接在一起的小选项，并持续显示当前选中项。|将几个互斥或可切换动作组合成连续按钮的一组控件。|toggle|89||1
macos|pointer|鼠标指针|Pointer (Cursor)|NSCursor|鼠标可能出现的各种形状，以及每一种形状真正的名称。|指示鼠标位置和当前可执行操作的屏幕图形。|pointer|90||
macos|alert|警告框|Alert|NSAlert|带图标、粗体标题、说明文字与取消/确认按钮的小型居中窗口。|要求用户确认决定或注意重要信息的系统对话框。|alert|94|1|
macos|volume-slider|音量滑块|Volume Slider|NSSlider|沿轨道拖动圆形滑块，在一个连续范围内选择数值。|通过拖动拇指控制连续数值的输入组件。|slider|88||1
macos|color-well|颜色井|Color Well|NSColorWell|显示当前颜色的小色块按钮，点击后会打开颜色选择器。|用于显示并编辑当前颜色值的 macOS 标准控件。|colorwell|81||
macos|window|Mac 窗口|Mac Window|NSWindow|可移动的 Mac 应用框架，包括标题栏、工具栏和缩放边缘。|承载一个 macOS 应用或文档界面的顶层容器。|window|98|1|
macos|split-view|分栏视图|Split View|NSSplitView|由可拖动分隔条切开的多个可调整大小面板。|允许用户拖动分隔线调整各区域尺寸的多栏布局。|split|89||
macos|scroll-view|滚动视图|Scroll View (Scroller)|NSScrollView|拥有可滚动视口的区域，而 AppKit 中的滚动条称为 Scroller。|在固定视口中浏览超出可见范围内容的容器。|scroll|86||
macos|search-field|搜索字段|Search Field|NSSearchField|内置放大镜、清除按钮和最近搜索能力的 Mac 文本框。|专门用于搜索输入的 macOS 标准文本字段。|searchfield|92||1
macos|save-panel|保存面板|Save Panel|NSSavePanel|用于命名文件、选择保存位置和文件格式的标准 Mac 对话框。|让用户确认文件名和目标目录的系统保存窗口。|save|87|1|
macos|token-field|令牌输入框|Token Field|NSTokenField|将识别出的输入值转换为可删除的圆角令牌。|把多个结构化值显示为独立可编辑小块的输入框。|tokens|79||1
macos|combo-button|组合按钮|Combo Button|NSComboButton|主要操作按钮与独立下拉箭头连接在一起，箭头打开相关动作。|同时提供默认操作和更多选项的分体按钮。|combo-button|85||1
macos|level-indicator|等级指示器|Level Indicator|NSLevelIndicator|可显示容量条、星级评分或相关性强弱的 Mac 仪表。|以分段条或符号表达等级、容量和评分的控件。|level|76||
macos|column-view|分栏浏览器|Column View (Browser)|NSBrowser|类似 Finder 的多列层级浏览器，每进入一级就在右侧增加一列。|通过并排列逐层展开层级路径的文件浏览方式。|columns|88|1|
macos|outline-view|大纲视图|Outline View|NSOutlineView|带缩进的树形行列表，可以展开显示嵌套子项。|以可展开树形结构呈现层级数据的列表。|outline|87||
macos|menu-bar|菜单栏|Menu Bar|NSApp.mainMenu|Mac 屏幕顶部的横条，包括应用菜单、状态图标和时钟。|位于 macOS 屏幕顶部、承载应用命令与系统状态的区域。|menubar|97|1|
macos|context-menu|上下文菜单|Context Menu|NSMenu|在指针位置通过右键或 Control 点击打开的操作菜单。|只提供与当前对象或位置相关操作的快捷菜单。|context|95|1|
macos|disclosure-triangle|展开三角|Disclosure Triangle|NSOutlineView|用于显示或隐藏嵌套内容、会旋转的小三角控制。|表示某一行还包含下级内容的展开/折叠指示器。|disclosure|78||
macos|dock-badge|程序坞角标|Dock Badge|NSDockTile.badgeLabel|叠加在 Dock 应用图标上的红色数量或状态标签。|在应用图标角落提示未读数量或状态的徽标。|dock|93||
macos|focus-ring-mac|焦点环|Focus Ring|NSView.focusRingType|以系统强调色光环标出当前接收键盘输入的控件。|macOS 用来表示第一响应者或键盘焦点的高亮轮廓。|focus|82||
macos|inspector|检查器|Inspector|View.inspector|位于右侧、根据当前选择查看和编辑详细属性的面板。|跟随选中对象变化的属性查看与编辑区域。|inspector|91|1|
macos|panel|浮动面板|Panel (Floating Window / HUD)|NSPanel|悬浮在相关文档窗口上方的辅助 macOS 窗口。|用于工具、属性或辅助信息的轻量顶层窗口。|panel|82||
macos|popover-mac|气泡框|Popover|NSPopover|带箭头并指回触发控件的浮动气泡。|锚定在某个控件旁边显示临时内容的非模态面板。|macpopover|92||
macos|popup-pulldown-combo|弹出按钮、下拉按钮与组合框|Pop-Up Button vs. Pull-Down Button vs. Combo Box|NSPopUpButton|三种外观相似的 Mac 控件，分别用于选择值、执行菜单动作与输入/选择混合。|一组容易混淆、但数据输入模型不同的菜单型控件。|popup|80|1|
macos|segmented-control|分段控件|Segmented Control|NSSegmentedControl|一排连接在一起的选项，当前分段具有明显选中状态。|在有限数量的互斥视图或模式之间切换的控件。|segments|94||1
macos|sheet|窗口附属面板|Sheet|beginSheet|附着在某一个 Mac 窗口上的模态面板，而不是阻塞整个应用。|从窗口标题栏下方展开、只影响所属窗口的模态界面。|sheet|86||
macos|sidebar|来源列表侧边栏|Sidebar (Source List)|NavigationSplitView|位于窗口左侧的半透明导航列，常用于收藏、位置和分类。|用于在主要内容分区之间导航的左侧列表区域。|sidebar|96|1|
macos|stepper|步进器|Stepper|NSStepper|紧凑的上下箭头对，用于逐步增加或减少数值。|按固定步长改变数值的小型增减控件。|stepper|77||1
macos|toolbar|统一标题栏工具栏|Toolbar (Unified Title Bar)|NSToolbar|与现代 macOS 窗口标题栏整合在一起的一排操作。|放置窗口级常用命令的顶部操作区域。|toolbar|91|1|
macos|traffic-lights|窗口交通灯|Traffic Lights (Window Controls)|standardWindowButton|Mac 窗口左上角红、黄、绿三个标准控制按钮。|分别用于关闭、最小化和缩放/全屏窗口的三色按钮。|traffic|98||
macos|vibrancy|视觉效果材质|Visual Effect Material (Vibrancy)|NSVisualEffectView|用于侧边栏、菜单和面板背后的自适应半透明磨砂材质。|让背景壁纸经过模糊与着色后透过界面的材质效果。|vibrancy|99|1|
macos|menu-bar-extra|菜单栏额外项|Menu Bar Extra (Status Item)|NSStatusItem|位于 macOS 菜单栏右侧、通常点击后弹出菜单的应用图标。|常驻系统菜单栏、用于显示状态或打开快捷控制的图标。|menu-extra|94|1|`.trim().split("\n").map((r,index)=>{const [p,slug,zh,en,code,desc,def,demo,pop,tall,short]=r.split("|");return{p,slug,zh,en,code,desc,def,demo,pop:+pop,tall:!!tall,short:!!short,index,new:index<8}});
