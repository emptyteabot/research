const products = [
  {
    id: "copilot",
    name: "GitHub Copilot / Workspace",
    layer: "assistant",
    layerLabel: "助手层",
    summary: "把 AI 深度嵌进 GitHub 的事实系统：Issue、PR、Actions、代码扫描与评审门禁。",
    problem: "解决从任务理解到计划生成，再到代码变更、测试与 PR 的协作断层。",
    shape: "插件 + GitHub 平台 + Workspace 工作区",
    strengths: [
      "以 GitHub 为中心，天然适配团队协作和审阅流程",
      "计划可编辑、变更可审查，更适合真实工程团队",
      "和 Actions、代码扫描、安全修复形成闭环"
    ],
    gaps: [
      "强绑定 GitHub 生态",
      "最终仍需大量人工评审与验证",
      "更像平台增强，而不是独立的控制平面"
    ],
    scores: { auto: 3.2, control: 4.6, delivery: 4.2, enterprise: 4.6 }
  },
  {
    id: "replit",
    name: "Replit Agent",
    layer: "autonomous",
    layerLabel: "自治工程师",
    summary: "把想法直接变成可运行应用，构建、运行、托管都在同一个云端工作区完成。",
    problem: "解决从自然语言到可运行原型之间的摩擦，适合快速从 0 到 1。",
    shape: "云端 IDE + Agent + Hosting",
    strengths: [
      "原型搭建速度快，部署链路短",
      "非传统开发者也能上手",
      "平台化托管适合 demo 和小应用"
    ],
    gaps: [
      "复杂工程的权限边界和治理能力弱一些",
      "闭环很强，但对既有团队流程的融入有限",
      "一旦进入生产级协作，往往要外溢到更传统的工具链"
    ],
    scores: { auto: 4.5, control: 3.1, delivery: 4.4, enterprise: 2.8 }
  },
  {
    id: "cursor",
    name: "Cursor",
    layer: "agentic",
    layerLabel: "Agentic IDE",
    summary: "AI 原生编辑器，强调代码库理解、多模型选择、长上下文与企业控制能力。",
    problem: "解决本地开发中多文件理解、复杂改动和高频对话编程的效率问题。",
    shape: "AI 原生 IDE",
    strengths: [
      "体验成熟，适合专业开发者重度使用",
      "多模型策略灵活，适配不同任务",
      "隐私模式、团队管理等企业特性比较完善"
    ],
    gaps: [
      "强于 IDE 侧效率，弱于跨角色交付可视化",
      "长任务成本和上下文开销更敏感",
      "交付证据仍分散在外部测试与 PR 流程里"
    ],
    scores: { auto: 3.8, control: 4.2, delivery: 3.3, enterprise: 4.1 }
  },
  {
    id: "windsurf",
    name: "Windsurf",
    layer: "agentic",
    layerLabel: "Agentic IDE",
    summary: "Cascade 强调规划代理、工具调用、检查点回退、工作流与部署，把协作代理做深。",
    problem: "解决多步骤、多文件、多工具调用的任务推进效率。",
    shape: "AI IDE + 工作流代理",
    strengths: [
      "规划、执行、回退这条链路做得清晰",
      "适合复杂度中等的多步骤任务",
      "工作流和部署概念更接近真实交付"
    ],
    gaps: [
      "功能越强，治理越复杂",
      "更多工具调用意味着更高成本与安全面",
      "仍然缺少一个面向 PM 的交付控制台心智"
    ],
    scores: { auto: 4.1, control: 4.1, delivery: 3.9, enterprise: 3.8 }
  },
  {
    id: "devin",
    name: "Devin",
    layer: "autonomous",
    layerLabel: "自治工程师",
    summary: "最激进的‘任务委派给 AI 工程师’产品叙事，强调自治任务、并发会话和企业安全。",
    problem: "解决长链路工程任务、迁移重构与大规模积压工作的执行问题。",
    shape: "自治工程师平台 + Web IDE",
    strengths: [
      "适合可拆分、边界清晰的大任务",
      "并行会话与任务委派的产品心智强",
      "企业安全与隔离能力更完善"
    ],
    gaps: [
      "正确性和授权边界是高风险区",
      "对 Spec、验收标准与人工门禁依赖更强",
      "成本感知需要被产品化解释"
    ],
    scores: { auto: 4.9, control: 3.4, delivery: 4.1, enterprise: 4.4 }
  },
  {
    id: "lingma",
    name: "通义灵码",
    layer: "assistant",
    layerLabel: "助手层",
    summary: "面向中文研发场景，把工程自动感知、Quest 模式与 Worktree 交付审查结合起来。",
    problem: "解决国内团队的任务委派、Spec 驱动执行与工程环境理解问题。",
    shape: "IDE 插件 + Lingma IDE",
    strengths: [
      "中文开发场景友好",
      "Quest 的 Spec、Changed Files、Preview 设计很像交付流程",
      "Worktree 模式天然更安全"
    ],
    gaps: [
      "能力很强，但仍主要停留在开发者使用视角",
      "要发挥价值，团队必须先沉淀规则与验收标准",
      "需要更强的跨角色可视化层"
    ],
    scores: { auto: 3.6, control: 4.3, delivery: 3.6, enterprise: 4.0 }
  },
  {
    id: "comate",
    name: "文心快码",
    layer: "assistant",
    layerLabel: "助手层",
    summary: "强调 Rules、MCP、企业私域知识增强与私有化，把国内企业落地要素打包成方案。",
    problem: "解决企业知识、规范与大模型能力如何结合的问题。",
    shape: "IDE 助手 + 企业增强平台",
    strengths: [
      "企业规范、知识库和私有化能力突出",
      "适合对合规和私域知识要求高的团队",
      "Rules 思路和 Control Plane 高度契合"
    ],
    gaps: [
      "更偏企业增强，而不是开发工作流革命",
      "复杂任务依然需要外部测试和审查兜底",
      "交付体验依赖团队已有工程基础"
    ],
    scores: { auto: 3.1, control: 4.5, delivery: 3.2, enterprise: 4.7 }
  },
  {
    id: "trae",
    name: "TRAE",
    layer: "agentic",
    layerLabel: "Agentic IDE",
    summary: "强调 Builder、SOLO、Plan 模式与企业控制，试图在中文场景下把 Agentic IDE 做得更完整。",
    problem: "解决中文场景下的需求到代码自动化推进，以及企业管理需求。",
    shape: "AI IDE / 插件 / CLI",
    strengths: [
      "对中文用户更直接",
      "Builder / SOLO 的产品叙事清晰",
      "审计日志、知识库、网络控制等企业能力比较完整"
    ],
    gaps: [
      "仍是 IDE/执行层视角，缺少更高层的交付抽象",
      "Token 与席位配额需要被解释得更透明",
      "自动化越强，越需要强门禁和权限策略"
    ],
    scores: { auto: 4.0, control: 4.0, delivery: 3.8, enterprise: 4.2 }
  }
];

const scenarios = [
  {
    id: "billing",
    label: "SaaS 账单与订阅页",
    tag: "PM + Growth",
    title: "为 AI SaaS 新增订阅页、账单页与用量说明",
    summary: "这个场景展示 SpecFlow 如何把一个典型产品需求转成可审计的交付件，而不是只吐出一段前端代码。",
    spec: [
      "目标：让付费页支持月付/年付切换、展示 credits 消耗规则，并新增账单历史页。",
      "验收标准：1) 用户能切换周期；2) 成功购买后在账单页看到记录；3) 所有价格展示与政策文案一致；4) 新增基础单测与 E2E 用例。",
      "风险标签：支付、定价、文案一致性、埋点准确性。"
    ],
    plan: [
      "梳理现有 pricing / billing / usage 组件与 API 依赖",
      "补齐订阅模型与账单数据结构",
      "实现前端改动并接支付回调状态",
      "新增单测、E2E 检查与截图证据",
      "生成 PR 描述、风险清单与回滚说明"
    ],
    patch: `diff --git a/app/pricing/page.tsx b/app/pricing/page.tsx
+ add billing period toggle
+ add credits policy panel
+ sync CTA copy with billing policy

diff --git a/app/billing/page.tsx b/app/billing/page.tsx
+ create invoice history view
+ surface payment status and credits usage

diff --git a/tests/billing.spec.ts b/tests/billing.spec.ts
+ cover purchase success and invoice visibility`,
    evidence: [
      "单测：订阅周期切换和价格渲染通过",
      "E2E：购买后账单页显示最近支付记录",
      "截图：pricing / billing / checkout success 三张界面截图",
      "回滚方案：保留旧 pricing route，可通过 feature flag 回退"
    ],
    pr: {
      title: "feat: add subscription billing flow with auditable credits policy",
      body: "This PR introduces a spec-validated billing flow including pricing period toggle, invoice history, credits policy sync, and test evidence. Risks are isolated behind a billing feature flag."
    }
  },
  {
    id: "migration",
    label: "框架迁移",
    tag: "Tech Lead",
    title: "将 Angular 16 项目迁移到 Angular 18，并补齐风险说明",
    summary: "这个场景更接近 Devin / 自治工程师擅长的任务：长链路、跨文件、带依赖升级，但需要更强的风险门禁。",
    spec: [
      "目标：完成 Angular 16 → 18 的基础迁移，确保构建通过，核心页面不回归。",
      "验收标准：1) 构建通过；2) 关键路由 smoke test 通过；3) package 更新记录完整；4) 输出 Breaking Changes 风险摘要。",
      "风险标签：依赖升级、TypeScript 配置变化、路由与表单行为回归。"
    ],
    plan: [
      "扫描 package 与 tsconfig 变更点",
      "逐步升级依赖并修复编译错误",
      "运行 smoke test 和基础 lint",
      "记录 breaking changes 与人工回归项",
      "生成 PR 与回滚清单"
    ],
    patch: `diff --git a/package.json b/package.json
- "@angular/core": "^16.x"
+ "@angular/core": "^18.x"

diff --git a/tsconfig.json b/tsconfig.json
+ adjust compiler options for Angular 18 compatibility

diff --git a/src/app/...
+ update deprecated imports and strict typing failures`,
    evidence: [
      "构建：ng build 通过",
      "Smoke Test：登录、首页、设置页可访问",
      "静态检查：lint 剩余 warning 记录在 PR 中",
      "人工回归项：富文本、支付模块、国际化需二次验证"
    ],
    pr: {
      title: "chore: migrate Angular app from v16 to v18 with validation evidence",
      body: "This PR upgrades Angular core dependencies, resolves migration blockers, and attaches smoke-test evidence plus a manual regression checklist for higher-risk modules."
    }
  },
  {
    id: "auth",
    label: "登录鉴权 + 审计日志",
    tag: "Security",
    title: "新增邮箱登录、角色权限和关键操作审计日志",
    summary: "这个场景说明 SpecFlow 为什么要把规则、权限和证据纳入默认输出，因为这类需求不能只看 UI 是否工作。",
    spec: [
      "目标：新增邮箱登录、管理员/成员权限分层，并记录关键操作审计日志。",
      "验收标准：1) 未登录不可访问控制台；2) 管理员可见成员管理页；3) 删除、导出、权限变更会生成审计日志；4) 安全测试覆盖至少 3 个拒绝场景。",
      "风险标签：权限泄露、日志缺失、会话过期与 CSRF。"
    ],
    plan: [
      "定义 auth session 与 role schema",
      "实现 route guard 与 server-side permission check",
      "接入 audit log writer",
      "补充拒绝路径测试与安全检查",
      "生成安全摘要和发布建议"
    ],
    patch: `diff --git a/lib/auth.ts b/lib/auth.ts
+ add session and role helpers

diff --git a/app/dashboard/layout.tsx b/app/dashboard/layout.tsx
+ gate dashboard routes behind auth check

diff --git a/lib/audit.ts b/lib/audit.ts
+ persist audit events for delete/export/role-update actions`,
    evidence: [
      "权限测试：匿名用户访问控制台被拒绝",
      "角色测试：成员用户无法访问管理页",
      "安全用例：审计日志在关键操作后写入成功",
      "发布建议：先灰度到内部 workspace，再放开外部团队"
    ],
    pr: {
      title: "feat: add auth, RBAC, and audit trail for critical workspace actions",
      body: "This PR introduces gated access, role-based permissions, and auditable event logging. It includes denial-path tests and a phased rollout recommendation."
    }
  },
  {
    id: "ci",
    label: "CI 红灯修复",
    tag: "Ops",
    title: "定位 CI 失败原因，并生成可回滚的修复 PR",
    summary: "这个场景强调的是 Evidence：不是让 AI 猜一遍，而是基于日志、失败测试与改动范围生成最小修复单元。",
    spec: [
      "目标：修复主分支 CI 中的失败测试，同时不引入新的回归。",
      "验收标准：1) 原失败 case 通过；2) 无新增失败；3) 修复范围最小；4) 给出根因说明和回滚点。",
      "风险标签：测试脆弱性、快照漂移、异步等待不稳定。"
    ],
    plan: [
      "解析失败日志并定位首次失败断点",
      "识别测试脆弱点与真实业务回归的边界",
      "提交最小 patch 并补充稳定性校验",
      "重新运行 CI 并记录证据",
      "在 PR 中附上根因、风险和回滚建议"
    ],
    patch: `diff --git a/tests/dashboard.spec.ts b/tests/dashboard.spec.ts
- await page.waitForTimeout(1000)
+ await expect(page.getByRole("heading", { name: /workspace/i })).toBeVisible()

diff --git a/components/dashboard.tsx b/components/dashboard.tsx
+ ensure loading state resolves before rendering summary widgets`,
    evidence: [
      "CI：原失败 job 已恢复绿色",
      "日志：根因是 loading state 与脆弱等待逻辑冲突",
      "验证：相关 smoke case 全部通过",
      "回滚：可仅回退 dashboard loading patch"
    ],
    pr: {
      title: "fix: stabilize dashboard CI failure with minimal loading-state patch",
      body: "This PR replaces brittle waits with deterministic assertions, resolves the dashboard loading race, and documents root cause plus rollback scope."
    }
  }
];

const state = {
  filter: "all",
  productId: "copilot",
  scenarioId: "billing",
  tab: "spec"
};

const productGrid = document.getElementById("product-grid");
const productDetail = document.getElementById("product-detail");
const scenarioList = document.getElementById("scenario-list");
const scenarioTitle = document.getElementById("scenario-title");
const scenarioSummary = document.getElementById("scenario-summary");
const scenarioTag = document.getElementById("scenario-tag");
const tabContent = document.getElementById("tab-content");
const assignmentModal = document.getElementById("assignment-modal");

function closeAssignmentModal() {
  assignmentModal.classList.remove("is-visible");
  document.body.classList.remove("modal-open");
}

function layerClass(layer) {
  if (layer === "assistant") return "layer-assistant";
  if (layer === "agentic") return "layer-agentic";
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
  const filtered = state.filter === "all"
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
      ${scoreRow("自动化强度", product.scores.auto)}
      ${scoreRow("可控性", product.scores.control)}
      ${scoreRow("交付闭环度", product.scores.delivery)}
      ${scoreRow("企业适配度", product.scores.enterprise)}
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

  const contentByTab = {
    spec: `
      <div class="content-card">
        <h4>Spec</h4>
        <div class="content-panel">
          <ul>${scenario.spec.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
    `,
    plan: `
      <div class="content-card">
        <h4>Execution Plan</h4>
        <div class="content-panel">
          <ul>${scenario.plan.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
    `,
    patch: `
      <div class="content-card">
        <h4>Patch Summary</h4>
        <div class="content-panel"><pre>${scenario.patch}</pre></div>
      </div>
    `,
    evidence: `
      <div class="content-card">
        <h4>Evidence</h4>
        <div class="content-panel">
          <ul>${scenario.evidence.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
    `,
    pr: `
      <div class="content-card">
        <h4>Pull Request Draft</h4>
        <div class="content-panel">
          <pre>Title: ${scenario.pr.title}

Body:
${scenario.pr.body}</pre>
        </div>
      </div>
    `
  };

  tabContent.innerHTML = contentByTab[state.tab];
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
  const markdown = `# SpecFlow Delivery Package

## Scenario
- Title: ${scenario.title}
- Tag: ${scenario.tag}
- Summary: ${scenario.summary}

## Spec
${scenario.spec.map((item) => `- ${item}`).join("\n")}

## Plan
${scenario.plan.map((item) => `- ${item}`).join("\n")}

## Patch Summary
\`\`\`diff
${scenario.patch}
\`\`\`

## Evidence
${scenario.evidence.map((item) => `- ${item}`).join("\n")}

## PR Draft
- Title: ${scenario.pr.title}
- Body: ${scenario.pr.body}
`;

  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `specflow-${scenario.id}.md`;
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
