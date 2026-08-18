const projects = [
  {
    number: "01",
    type: "品牌策略 · 品牌语言",
    title: "一个生活方式品牌，如何找到被记住的理由",
    description:
      "从品类语境、用户洞察到品牌主张，建立一套清晰、有辨识度并能够持续生长的表达系统。",
    status: "案例整理中",
  },
  {
    number: "02",
    type: "内容策略 · 编辑策划",
    title: "让内容不只被看见，也沉淀为品牌资产",
    description:
      "以编辑视角重新组织品牌内容，明确栏目、语气与叙事节奏，让每一次表达都指向同一个品牌认知。",
    status: "即将发布",
  },
  {
    number: "03",
    type: "整合传播 · 创意文案",
    title: "把一次传播，写成消费者愿意参与的故事",
    description:
      "围绕真实的生活情境提出传播概念，并将它延伸为主题文案、社交内容与线下体验。",
    status: "即将发布",
  },
];

const services = [
  ["品牌策略", "定位梳理、价值主张、品牌故事与策略表达"],
  ["品牌语言", "命名、Slogan、语调体系与核心文案"],
  ["内容策略", "内容定位、栏目规划、编辑策划与长期内容"],
  ["整合传播", "传播主题、创意概念、Campaign 与落地文案"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          杨两只<span>／YANG LIANGZHI</span>
        </a>
        <nav aria-label="主导航">
          <a href="#work">案例</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Brand Strategy &amp; Copywriting · Shanghai</p>
        <h1>
          我帮助消费与生活方式品牌，
          <br />
          找到更清晰的定位，
          <br />
          并把它写成<span>人们愿意记住的话。</span>
        </h1>
        <div className="hero-footer">
          <p>品牌策划、内容策略与文案写作</p>
          <a href="#work">查看案例 <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>项目案例</h2>
          <p className="section-note">部分案例正在整理，将陆续更新。</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-meta">
                <span>{project.number}</span>
                <p>{project.type}</p>
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="project-status">{project.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow">What I Do</p>
          <h2>服务内容</h2>
        </div>
        <div className="service-list">
          {services.map(([title, description], index) => (
            <div className="service" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>关于我</h2>
        </div>
        <div className="about-grid">
          <p className="about-lead">
            编辑出身的品牌策划与文案工作者，关注设计、城市与日常生活如何共同塑造一个品牌。
          </p>
          <div className="about-body">
            <p>
              鲁迅美术学院产品与展示设计系毕业，曾任百万粉丝生活方式媒体「尖叫设计」资深编辑，并为
              Wallpaper＊、理想家、KINFOLK、一筑一事、你好哥本哈根等国内外杂志及媒体撰稿、报道。
            </p>
            <p>
              曾任香氛、家居与生活方式品牌的品牌内容经理与文案。2023 年至今经营个人创意工作室「无限袤」，生活与工作在上海。
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Start a Conversation</p>
        <h2>有一个品牌问题，<br />想一起想清楚？</h2>
        <a className="contact-link" href="weixin://dl/chat?yoko858yoko">
          微信联系：yoko858yoko <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-footer">
          <p>杨两只 · 品牌策略与文案</p>
          <p>Shanghai · 2026</p>
        </div>
      </section>
    </main>
  );
}
