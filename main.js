const products = [
  {
    id: "copilot",
    name: "GitHub Copilot / Workspace",
    layer: "assistant",
    layerLabel: "助手层",
    summary: "把 AI 深度嵌进 GitHub 的事实系统：Issue、代码、PR、Actions 与安全扫描。",
    problem: "解决从任务理解到计划生成，再到代码变更、测试与 PR 的协作断层。",
    shape: "插件 + GitHub 平台 + Workspace 工作区",
    strengths: [
      "任务、计划、改动和 PR 天然串在 GitHub 里",
      "适合真实工程团队，协作与审阅门槛低",
      "和 Actions / Code Scanning 形成完整工程闭环"
    ],
    gaps: [
      "强绑定 GitHub 生态",
      "对‘做出来以后怎么卖’没有回答",
      "更偏开发交付增强，而不是业务闭环"
    ],
    scores: { build: 4.5, autonomy: 3.3, revenue: 1.2, control: 4.6 }
  },
  {
    id: "cursor",
    name: "Cursor",
    layer: "agentic",
    layerLabel: "Agentic IDE",
    summary: "AI 原生编辑器，强调代码库上下文、多模型切换与项目级改动效率。",
    problem: "解决大型代码库中跨文件理解、改动与重构效率的问题。",
    shape: "AI 原生 IDE",
    strengths: [
      "开发体验成熟，适合专业工程师重度使用",
      "多模型策略灵活，适合不同复杂度任务",
      "在 IDE 内做长链路改动的流畅度很强"
    ],
    gaps: [
      "强于写代码，弱于收入闭环",
      "面向开发者，不直接面向经营问题",
      "长任务成本和上下文开销敏感"
    ],
    scores: { build: 4.7, autonomy: 3.8, revenue: 1.0, control: 4.1 }
  },
  {
    id: "windsurf",
    name: "Windsurf",
    layer: "agentic",
    layerLabel: "Agentic IDE",
    summary: "用 Cascade 把规划、工具调用、回退检查点与工作流执行做深。",
    problem: "解决多步骤、多文件、多工具调用任务的推进效率。",
    shape: "AI IDE + 工作流代理",
    strengths: [
      "规划、执行、回退链路清晰",
      "适合复杂度中等的多步骤工程任务",
      "工作流意识比普通 IDE 更强"
    ],
    gaps: [
      "还是主要优化工程执行",
      "工具越多，治理和成本越复杂",
      "离真实业务经营还有一层距离"
    ],
    scores: { build: 4.5, autonomy: 4.0, revenue: 1.1, control: 4.0 }
  },
  {
    id: "devin",
    name: "Devin",
    layer: "autonomous",
    layerLabel: "自治工程师",
    summary: "最激进的‘任务委派给 AI 工程师’产品叙事，强调长任务与并发执行。",
    problem: "解决迁移、重构、积压任务等长链路工程执行问题。",
    shape: "自治工程师平台 + Web IDE",
    strengths: [
      "任务委派心智非常强",
      "适合边界清晰、可拆分的大任务",
      "把 AI 从助手推进到更接近‘队友’"
    ],
    gaps: [
      "正确性和授权边界风险更高",
      "开放式业务问题容易失焦",
      "能做很多工程动作，但不直接解决收入验证"
    ],
    scores: { build: 4.6, autonomy: 4.9, revenue: 1.1, control: 3.4 }
  },
  {
    id: "replit",
    name: "Replit Agent",
    layer: "autonomous",
    layerLabel: "自治工程师",
    summary: "从自然语言快速生成、运行和发布应用，把构建到上线收在同一个云端环境里。",
    problem: "解决从 0 到 1 做出原型与可运行应用的摩擦。",
    shape: "云端 IDE + Agent + Hosting",
    strengths: [
      "从创意到可运行 demo 的路径极短",
      "开发和托管一体，适合快速试错",
      "对非传统开发者也相对友好"
    ],
    gaps: [
      "更强于原型，不一定强于复杂生产协作",
      "平台闭环强，但和既有团队流程耦合较弱",
      "依然没有覆盖 build 后的经营闭环"
    ],
    scores: { build: 4.8, autonomy: 4.4, revenue: 1.5, control: 3.0 }
  },
  {
    id: "bolt",
    name: "Bolt.new",
    layer: "agentic",
    layerLabel: "Agentic IDE",
    summary: "在浏览器里 prompt、运行、编辑、部署，把 Web 开发环境直接搬到云上。",
    problem: "解决前端/全栈 Web 原型从描述到运行之间的环境门槛。",
    shape: "浏览器 Agent + Runtime + Deploy",
    strengths: [
      "打开网页就能开始做产品",
      "环境控制能力强，反馈快",
      "适合快速搭建面向用户的 Web 产品"
    ],
    gaps: [
      "复杂业务迭代容易进入 bug 循环",
      "更偏 build，不偏经营",
      "对于线索、支付、转化的回答很少"
    ],
    scores: { build: 4.7, autonomy: 3.9, revenue: 1.3, control: 3.5 }
  },
  {
    id: "v0",
    name: "v0",
    layer: "agentic",
    layerLabel: "Agentic IDE",
    summary: "以设计和前端表达见长，把概念快速变成高质量界面与可部署应用。",
    problem: "解决从产品想法到高保真前端原型的落地效率。",
    shape: "Web 生成式 UI / 全栈原型工具",
    strengths: [
      "前端质量高，视觉反馈快",
      "适合 landing page 和对外展示页面",
      "和部署链路衔接顺滑"
    ],
    gaps: [
      "强于界面，不强于持续经营",
      "复杂后端逻辑和状态管理更容易失真",
      "更像产品生成器，不像收入操作系统"
    ],
    scores: { build: 4.6, autonomy: 3.5, revenue: 1.2, control: 3.7 }
  },
  {
    id: "atoms",
    name: "Atoms / MetaGPT",
    layer: "business",
    layerLabel: "商业闭环层",
    summary: "把端到端从生成代码提升到生成可上线、可收费、可运营的商业实体。",
    problem: "解决创始人瓶颈：没有完整团队时，如何从想法走到可卖的产品与业务系统。",
    shape: "多智能体公司化协作 + 商业化生成平台",
    strengths: [
      "视角不只停在代码，而是直接面向商业结果",
      "更符合‘端到端’的完整定义",
      "天然启发了我对后半段价值的判断"
    ],
    gaps: [
      "高度依赖初始输入质量和业务假设",
      "复杂企业级接入时灵活性可能受限",
      "若频繁重构或大规模运行，成本可能上升"
    ],
    scores: { build: 4.2, autonomy: 4.4, revenue: 4.7, control: 3.8 }
  }
];

const scenarios = [
  {
    id: "home",
    label: "首页定位",
    tag: "Positioning",
    title: "LeadPulse 首页：先把产品到底卖给谁讲清楚",
    summary: "首页承担的不是‘好看’，而是快速解释：这是一个给 AI Builder / Indie Hacker / 微型 SaaS 的收入操作系统。",
    image: "./assets/leadpulse-home.png",
    problem: [
      "很多 AI Builder 已经会做产品，但没有稳定获客系统。",
      "市面上太多工具都在说‘更快生成’，很少说‘更快回款’。",
      "用户需要在几秒内知道这个产品和通用建站工具不一样。"
    ],
    role: [
      "用一句话把产品定位成 AI Revenue Operating System。",
      "把实验页、支付、预约、代码导出这些能力并列出来。",
      "让用户一眼感知这不是概念页，而是一个正在跑的系统。"
    ],
    strengths: [
      "定位有差异化，不是在重复 IDE 故事。",
      "首页同时覆盖了产品、支付和经营视角。",
      "适合作为面试时第一眼的价值说明。"
    ],
    gaps: [
      "品牌层还不够简洁，信息量偏大。",
      "首屏还可以进一步压缩成更聚焦的一句话价值主张。",
      "缺少更强的社会证明或真实案例。"
    ],
    next: [
      "补 1 到 2 个真实客户场景或数据点。",
      "继续压缩 Hero 文案，提升第一屏理解速度。",
      "补充更明确的 CTA 分流：先预约 vs 直接订阅。"
    ]
  },
  {
    id: "experiments",
    label: "实验页",
    tag: "Experiments",
    title: "LeadPulse Experiments：先验证哪个垂类最可能带来收入",
    summary: "实验页不是装饰，而是获客假设验证器：不同垂类各有单独页面，测试哪一类需求最容易产生预约和支付意向。",
    image: "./assets/leadpulse-experiments.png",
    problem: [
      "独立开发者常常不知道应该先卖给谁。",
      "泛泛流量没有意义，真正重要的是高意向线索。",
      "如果没有实验页容器，增长会退回到拍脑袋。"
    ],
    role: [
      "把不同 ICP 拆成可独立测试的页面。",
      "让每个页面承载自己的关键词、痛点和 CTA。",
      "帮助创始人比较不同垂类的预约与转化质量。"
    ],
    strengths: [
      "把增长实验产品化，不再只是内容运营动作。",
      "非常适合 PM 面试作业里展示‘如何验证方向’。",
      "和收入闭环主线强相关，而不是随便做几个页面。"
    ],
    gaps: [
      "目前的实验数量还不多，仍是 MVP 状态。",
      "真实转化数据和页面数据还没有完全打通。",
      "关键词和搜索需求证据还可以更结构化展示。"
    ],
    next: [
      "给每个实验页接入统一的转化埋点。",
      "自动生成更多垂类实验页。",
      "把实验结果直接反馈到经营看板。"
    ]
  },
  {
    id: "ops",
    label: "经营看板",
    tag: "Ops",
    title: "LeadPulse Ops：把新增、预约、支付意向和下一步动作放到同一个面板里",
    summary: "这页最能解释我为什么认为机会在 build 之后：用户每天最需要知道的不是‘又生成了什么’，而是‘今天最该跟进谁、为什么’。",
    image: "./assets/leadpulse-ops.png",
    problem: [
      "创始人和小团队没有统一经营视图。",
      "线索、预约、支付意向和后续动作分散在多个工具里。",
      "每天都很忙，但不知道最优先该推进什么。"
    ],
    role: [
      "聚合新增线索、预约、支付意向和经营指标。",
      "生成‘下一条该发什么’的操作建议。",
      "让经营从感觉驱动，变成数据驱动。"
    ],
    strengths: [
      "很能体现 Revenue Layer 的产品味道。",
      "相比普通 AI 工具，更像创始人的业务驾驶舱。",
      "对面试官来说，这页最能看出切入点不是空话。"
    ],
    gaps: [
      "部分指标当前还是样板数据，未完全接真实源。",
      "还可以更进一步接支付、预约、CRM 工具。",
      "经营建议目前偏模板化，后续可更智能。"
    ],
    next: [
      "接 Stripe、表单和预约系统。",
      "把留存、退款、回本这些指标自动化。",
      "让下一步跟进建议根据真实线索状态动态生成。"
    ]
  },
  {
    id: "booking",
    label: "预约与转化",
    tag: "Conversion",
    title: "LeadPulse 预约页：把兴趣变成可跟进的真实线索",
    summary: "如果说实验页解决的是‘谁值得卖’，预约页解决的就是‘怎么把兴趣真正接住’。",
    image: "./assets/leadpulse-book.png",
    problem: [
      "很多产品停在浏览和点击，没有真正进入转化动作。",
      "创始人需要一种可筛选、可预约、可后续跟进的入口。",
      "如果没有 intake，增长漏斗很难跑起来。"
    ],
    role: [
      "承接从实验页来的高意向用户。",
      "把用户信息结构化沉淀下来。",
      "为后续诊断、支付与 onboarding 做准备。"
    ],
    strengths: [
      "不是泛泛收集邮箱，而是明确服务于下一步动作。",
      "和经营看板、支付链路天然衔接。",
      "非常符合‘MVP 可讨论’而不是‘概念页’的要求。"
    ],
    gaps: [
      "表单逻辑和后端流程还可以更强。",
      "支付与预约之间的关系还可以设计得更顺滑。",
      "需要更多真实用户数据验证字段设计是否合理。"
    ],
    next: [
      "把预约和支付的先后路径产品化。",
      "补充自动化跟进消息与状态机。",
      "连接真实 CRM / 邮件 / 日程工具。"
    ]
  }
];

const state = {
  filter: "all",
  productId: "copilot",
  scenarioId: "home",
  tab: "problem"
};

const productGrid = document.getElementById("product-grid");
const productDetail = document.getElementById("product-detail");
const scenarioList = document.getElementById("scenario-list");
const scenarioTitle = document.getElementById("scenario-title");
const scenarioSummary = document.getElementById("scenario-summary");
const scenarioTag = document.getElementById("scenario-tag");
const scenarioImage = document.getElementById("scenario-image");
const tabContent = document.getElementById("tab-content");
const assignmentModal = document.getElementById("assignment-modal");

function closeAssignmentModal() {
  assignmentModal.classList.remove("is-visible");
  document.body.classList.remove("modal-open");
}

function layerClass(layer) {
  if (layer === "assistant") return "layer-assistant";
  if (layer === "agentic") return "layer-agentic";
  if (layer === "business") return "layer-business";
  return "layer-autonomous";
}

function scoreRow(label, value) {
  return `
    <div class="score-item">
      <div class="score-label">
        <span>${label}</span>
        <span>${value.toFixed(1)} / 5</span>
      </div>
      <div class="score-bar"><span style="width:${(value / 5) * 100}%"></span></div>
    </div>
  `;
}

function renderProducts() {
  const filtered =
    state.filter === "all"
      ? products
      : products.filter((product) => product.layer === state.filter);

  if (!filtered.some((product) => product.id === state.productId)) {
    state.productId = filtered[0]?.id ?? products[0].id;
  }

  productGrid.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card surface-card ${product.id === state.productId ? "active" : ""}" data-product-id="${product.id}">
          <div class="product-top">
            <div>
              <span class="mini-kicker">${product.shape}</span>
              <h3>${product.name}</h3>
            </div>
            <span class="layer-pill ${layerClass(product.layer)}">${product.layerLabel}</span>
          </div>
          <p>${product.summary}</p>
        </article>
      `
    )
    .join("");

  productGrid.querySelectorAll("[data-product-id]").forEach((node) => {
    node.addEventListener("click", () => {
      state.productId = node.dataset.productId;
      renderProducts();
      renderProductDetail();
    });
  });
}

function renderProductDetail() {
  const product = products.find((item) => item.id === state.productId);
  productDetail.innerHTML = `
    <span class="mini-kicker">Selected product</span>
    <h3>${product.name}</h3>
    <p>${product.problem}</p>
    <div class="score-row">
      ${scoreRow("构建能力", product.scores.build)}
      ${scoreRow("自治程度", product.scores.autonomy)}
      ${scoreRow("商业闭环", product.scores.revenue)}
      ${scoreRow("治理能力", product.scores.control)}
    </div>
    <div class="content-panel" style="margin-top:18px;">
      <h4>做得好的地方</h4>
      <ul class="detail-points">${product.strengths.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="content-panel" style="margin-top:14px;">
      <h4>仍存在的问题</h4>
      <ul class="detail-points">${product.gaps.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
}

function renderScenarios() {
  scenarioList.innerHTML = scenarios
    .map(
      (scenario) => `
        <button class="scenario-button ${scenario.id === state.scenarioId ? "active" : ""}" data-scenario-id="${scenario.id}">
          ${scenario.label}
        </button>
      `
    )
    .join("");

  scenarioList.querySelectorAll("[data-scenario-id]").forEach((node) => {
    node.addEventListener("click", () => {
      state.scenarioId = node.dataset.scenarioId;
      renderScenarios();
      renderScenarioOutput();
    });
  });
}

function renderScenarioOutput() {
  const scenario = scenarios.find((item) => item.id === state.scenarioId);
  scenarioTitle.textContent = scenario.title;
  scenarioSummary.textContent = scenario.summary;
  scenarioTag.textContent = scenario.tag;
  scenarioImage.src = scenario.image;
  scenarioImage.alt = scenario.title;

  const sections = {
    problem: "解决的问题",
    role: "页面角色",
    strengths: "做得好的地方",
    gaps: "仍存在的问题",
    next: "下一步"
  };

  tabContent.innerHTML = `
    <div class="content-card">
      <h4>${sections[state.tab]}</h4>
      <div class="content-panel">
        <ul>${scenario[state.tab].map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function bindFilters() {
  document.querySelectorAll("[data-filter]").forEach((node) => {
    node.addEventListener("click", () => {
      state.filter = node.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((chip) => chip.classList.remove("active"));
      node.classList.add("active");
      renderProducts();
      renderProductDetail();
    });
  });
}

function bindTabs() {
  document.querySelectorAll("[data-tab]").forEach((node) => {
    node.addEventListener("click", () => {
      state.tab = node.dataset.tab;
      document.querySelectorAll("[data-tab]").forEach((tab) => tab.classList.remove("active"));
      node.classList.add("active");
      renderScenarioOutput();
    });
  });
}

function exportMarkdown() {
  const scenario = scenarios.find((item) => item.id === state.scenarioId);
  const markdown = `# LeadPulse MVP Module Review

## Module
- Title: ${scenario.title}
- Tag: ${scenario.tag}
- Summary: ${scenario.summary}
- Live MVP: http://43.135.51.214/leadpulse

## Solves
${scenario.problem.map((item) => `- ${item}`).join("\n")}

## Role
${scenario.role.map((item) => `- ${item}`).join("\n")}

## Strengths
${scenario.strengths.map((item) => `- ${item}`).join("\n")}

## Gaps
${scenario.gaps.map((item) => `- ${item}`).join("\n")}

## Next
${scenario.next.map((item) => `- ${item}`).join("\n")}
`;

  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `leadpulse-${scenario.id}.md`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

document.getElementById("download-markdown").addEventListener("click", exportMarkdown);

document.body.classList.add("modal-open");

document.querySelectorAll("[data-close-modal], #close-assignment-modal").forEach((node) => {
  node.addEventListener("click", closeAssignmentModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && assignmentModal.classList.contains("is-visible")) {
    closeAssignmentModal();
  }
});

bindFilters();
bindTabs();
renderProducts();
renderProductDetail();
renderScenarios();
renderScenarioOutput();
