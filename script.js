"use strict";

const BLOG_POSTS = [
  {
    id: "1",
    title: "How AI Tools Are Changing Online Work",
    slug: "ai-tools-changing-online-work",
    category: "AI Tools",
    date: "May 12, 2026",
    isoDate: "2026-05-12",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    alt: "AI interface on a laptop used for online work",
    excerpt: "Discover how AI tools help freelancers, creators, and businesses work faster while keeping quality in human hands.",
    status: "Published",
    tags: "AI, productivity, freelancing",
    seoTitle: "How AI Tools Are Changing Online Work | Blog With Ali",
    seoDescription: "A practical guide to AI tools in online work, freelancing, content creation, and digital productivity.",
    seoKeywords: "AI tools, online work, freelancing productivity",
    content: `
      <section id="overview"><h2>Overview</h2><p>Artificial intelligence is now part of everyday online work. It helps people plan, write, summarize, organize, and improve their digital tasks.</p></section>
      <section id="workflow"><h2>Workflow impact</h2><p>AI tools are useful for first drafts, idea generation, content planning, research summaries, and productivity checklists.</p><p>The strongest results come when users combine AI speed with human judgment, editing, and quality control.</p></section>
      <section id="freelancing"><h2>Freelancing benefits</h2><p>Freelancers can use AI to write proposals, improve service descriptions, prepare content calendars, and communicate more clearly with clients.</p></section>
      <section id="human-quality"><h2>Human quality still matters</h2><p>AI needs review. Accuracy, originality, brand voice, and trust still depend on human decisions.</p></section>
      <section id="final-thoughts"><h2>Final thoughts</h2><p>Use AI as a support tool, not a replacement for skill. The best digital work is fast, accurate, and human-focused.</p></section>`
  },
  {
    id: "2",
    title: "Best Web Development Tips for Beginners",
    slug: "web-development-tips-for-beginners",
    category: "Web Development",
    date: "May 10, 2026",
    isoDate: "2026-05-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    alt: "Developer workspace with code editor on screen",
    excerpt: "Start your web development journey with clean habits, responsive design basics, and practical learning steps.",
    status: "Published",
    tags: "HTML, CSS, JavaScript",
    seoTitle: "Best Web Development Tips for Beginners | Blog With Ali",
    seoDescription: "Beginner-friendly web development tips for HTML, CSS, JavaScript, responsive design, and clean coding habits.",
    seoKeywords: "web development tips, beginner coding, HTML CSS JavaScript",
    content: `<section id="overview"><h2>Overview</h2><p>Web development becomes easier when beginners focus on structure, consistency, and small practice projects.</p></section><section id="workflow"><h2>Build clean habits</h2><p>Use semantic HTML, reusable CSS classes, accessible labels, and mobile-first layouts from the beginning.</p></section><section id="freelancing"><h2>Practice real pages</h2><p>Create landing pages, portfolios, blog layouts, and forms to understand real project structure.</p></section><section id="human-quality"><h2>Review your code</h2><p>Check responsiveness, browser behavior, image sizes, and readability before calling a project complete.</p></section><section id="final-thoughts"><h2>Final thoughts</h2><p>Consistency matters more than speed. Learn the foundations carefully and build step by step.</p></section>`
  },
  {
    id: "3",
    title: "How to Start Freelancing Successfully",
    slug: "start-freelancing-successfully",
    category: "Freelancing",
    date: "May 8, 2026",
    isoDate: "2026-05-08",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    alt: "Freelancer working with client planning notes",
    excerpt: "Learn how to choose a service, build a simple portfolio, communicate professionally, and win better projects.",
    status: "Published",
    tags: "freelancing, clients, portfolio",
    seoTitle: "How to Start Freelancing Successfully | Blog With Ali",
    seoDescription: "A practical beginner guide to starting freelancing with a strong profile, clear services, and professional communication.",
    seoKeywords: "start freelancing, beginner freelancer, freelance tips",
    content: `<section id="overview"><h2>Overview</h2><p>Freelancing starts with one clear service, proof of skill, and professional communication.</p></section><section id="workflow"><h2>Prepare your offer</h2><p>Choose a specific service, define deliverables, and write simple packages that clients can understand.</p></section><section id="freelancing"><h2>Build trust</h2><p>Show samples, explain your process, and respond clearly. Clients want reliable problem solvers.</p></section><section id="human-quality"><h2>Improve over time</h2><p>Review each project, collect feedback, and improve your portfolio with better case studies.</p></section><section id="final-thoughts"><h2>Final thoughts</h2><p>Start small, stay consistent, and focus on value before chasing too many services.</p></section>`
  },
  {
    id: "4",
    title: "Digital Marketing Strategies for Small Businesses",
    slug: "digital-marketing-strategies-small-businesses",
    category: "Digital Marketing",
    date: "May 6, 2026",
    isoDate: "2026-05-06",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    alt: "Marketing dashboard showing business growth analytics",
    excerpt: "Explore practical marketing strategies that help small businesses improve visibility, trust, and conversions.",
    status: "Published",
    tags: "marketing, small business, SEO",
    seoTitle: "Digital Marketing Strategies for Small Businesses | Blog With Ali",
    seoDescription: "Practical digital marketing strategies for small businesses including content, SEO, social proof, and conversion basics.",
    seoKeywords: "digital marketing strategy, small business marketing, SEO tips",
    content: `<section id="overview"><h2>Overview</h2><p>Small businesses need simple, consistent digital marketing systems that build trust and visibility.</p></section><section id="workflow"><h2>Start with clarity</h2><p>Define the audience, offer, message, and main platform before creating content.</p></section><section id="freelancing"><h2>Use content wisely</h2><p>Helpful posts, customer stories, FAQs, and local SEO can increase confidence and improve discoverability.</p></section><section id="human-quality"><h2>Measure results</h2><p>Track visits, leads, messages, and conversions to see what actually works.</p></section><section id="final-thoughts"><h2>Final thoughts</h2><p>Marketing works best when it is clear, consistent, and connected to real customer needs.</p></section>`
  },
  {
    id: "5",
    title: "Simple Technology Habits That Improve Productivity",
    slug: "technology-habits-improve-productivity",
    category: "Technology",
    date: "May 4, 2026",
    isoDate: "2026-05-04",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    alt: "Team using technology tools for productivity",
    excerpt: "Use better file organization, shortcuts, digital notes, and automation habits to save time every week.",
    status: "Published",
    tags: "technology, habits, productivity",
    seoTitle: "Simple Technology Habits That Improve Productivity | Blog With Ali",
    seoDescription: "Learn simple technology habits that improve productivity, organization, focus, and digital workflow.",
    seoKeywords: "technology habits, productivity tips, digital workflow",
    content: `<section id="overview"><h2>Overview</h2><p>Small technology habits can save hours when used consistently.</p></section><section id="workflow"><h2>Organize your workflow</h2><p>Use clear folder names, password managers, templates, and calendar reminders.</p></section><section id="freelancing"><h2>Automate repeating tasks</h2><p>Create reusable checklists and shortcuts for work you repeat often.</p></section><section id="human-quality"><h2>Protect focus</h2><p>Reduce unnecessary notifications and keep important tools easy to access.</p></section><section id="final-thoughts"><h2>Final thoughts</h2><p>Productivity improves when your tools support your attention instead of distracting it.</p></section>`
  },
  {
    id: "6",
    title: "Step-by-Step Tutorial: Plan Your First Blog Post",
    slug: "tutorial-plan-first-blog-post",
    category: "Tutorials",
    date: "May 2, 2026",
    isoDate: "2026-05-02",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    alt: "Notebook and laptop used to plan a blog post",
    excerpt: "Follow a simple tutorial to choose a topic, outline headings, write a draft, and prepare SEO basics.",
    status: "Published",
    tags: "blogging, tutorial, content writing",
    seoTitle: "Step-by-Step Tutorial: Plan Your First Blog Post | Blog With Ali",
    seoDescription: "A simple tutorial for planning your first blog post with topic selection, outline, draft, and SEO basics.",
    seoKeywords: "blog post tutorial, content planning, SEO basics",
    content: `<section id="overview"><h2>Overview</h2><p>A strong blog post begins with one clear reader problem and a helpful answer.</p></section><section id="workflow"><h2>Create an outline</h2><p>Write the title, main headings, examples, and closing message before drafting.</p></section><section id="freelancing"><h2>Add useful details</h2><p>Include steps, examples, mistakes to avoid, and a clear action point.</p></section><section id="human-quality"><h2>Review SEO basics</h2><p>Use one H1, descriptive headings, alt text, meta description, and internal links.</p></section><section id="final-thoughts"><h2>Final thoughts</h2><p>Good planning makes writing faster and improves the reader experience.</p></section>`
  }
];

const SELECTORS = {
  header: "#siteHeader",
  navToggle: "#navToggle",
  navMenu: "#navMenu",
  backToTop: "#backToTop"
};

function getAllPosts() {
  const saved = localStorage.getItem("blogWithAliDemoPosts");
  if (!saved) return [...BLOG_POSTS];
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [...BLOG_POSTS];
  } catch (error) {
    console.warn("Unable to parse saved posts", error);
    return [...BLOG_POSTS];
  }
}

function saveAllPosts(posts) {
  localStorage.setItem("blogWithAliDemoPosts", JSON.stringify(posts));
}

function slugify(text) {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function createBlogCard(post) {
  return `
    <article class="blog-card reveal" data-post-card data-category="${escapeHTML(post.category)}" data-title="${escapeHTML(post.title)}">
      <a class="blog-card-image" href="article.html?slug=${encodeURIComponent(post.slug)}" aria-label="Read ${escapeHTML(post.title)}">
        <img src="${escapeHTML(post.image)}" alt="${escapeHTML(post.alt || post.title)}" loading="lazy" width="900" height="600" />
        <span class="category-pill">${escapeHTML(post.category)}</span>
      </a>
      <div class="blog-card-body">
        <div class="blog-meta">
          <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${escapeHTML(post.date)}</span>
          <span><i class="fa-regular fa-clock" aria-hidden="true"></i> ${escapeHTML(post.readTime || "5 min read")}</span>
        </div>
        <h3><a href="article.html?slug=${encodeURIComponent(post.slug)}">${escapeHTML(post.title)}</a></h3>
        <p>${escapeHTML(post.excerpt)}</p>
        <a class="read-more" href="article.html?slug=${encodeURIComponent(post.slug)}">Read More <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
      </div>
    </article>`;
}

function setupNavigation() {
  const header = document.querySelector(SELECTORS.header);
  const navToggle = document.querySelector(SELECTORS.navToggle);
  const navMenu = document.querySelector(SELECTORS.navMenu);
  const page = document.body.dataset.page;

  document.querySelectorAll("[data-nav]").forEach(link => {
    if (link.dataset.nav === page) link.classList.add("active");
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>' : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
      });
    });
  }

  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 12);
    const backToTop = document.querySelector(SELECTORS.backToTop);
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 420);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const backToTop = document.querySelector(SELECTORS.backToTop);
  if (backToTop) backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  if (!("IntersectionObserver" in window)) {
    items.forEach(item => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

function setupNewsletterForms() {
  document.querySelectorAll("[data-newsletter-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const message = form.querySelector(".form-message");
      if (!input || !message) return;
      if (!input.validity.valid) {
        message.textContent = "Please enter a valid email address.";
        message.className = "form-message error";
        input.focus();
        return;
      }
      message.textContent = "Thank you for subscribing to Blog With Ali.";
      message.className = "form-message success";
      form.reset();
    });
  });
}

function setupGenericDemoForms() {
  document.querySelectorAll("[data-demo-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const message = form.querySelector(".form-message");
      if (!form.checkValidity()) {
        message.textContent = "Please complete all required fields correctly.";
        message.className = "form-message error";
        form.reportValidity();
        return;
      }
      message.textContent = "Submitted successfully for demo preview.";
      message.className = "form-message success";
      form.reset();
    });
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    if (!form.checkValidity()) {
      message.textContent = "Please complete all fields with valid information.";
      message.className = "form-message error";
      form.reportValidity();
      return;
    }
    message.textContent = "Your message has been validated successfully. Connect a backend to send it live.";
    message.className = "form-message success";
    form.reset();
  });
}

function renderHomePosts() {
  const target = document.querySelector("[data-featured-posts]");
  if (!target) return;
  const posts = getAllPosts().filter(post => post.status === "Published").slice(0, 4);
  target.innerHTML = posts.map(createBlogCard).join("");
  setupRevealAnimations();
}

function renderRelatedPosts(currentSlug = "") {
  const target = document.querySelector("[data-related-posts]");
  if (!target) return;
  const posts = getAllPosts().filter(post => post.status === "Published" && post.slug !== currentSlug).slice(0, 3);
  target.innerHTML = posts.map(createBlogCard).join("");
  setupRevealAnimations();
}

function setupBlogsPage() {
  const grid = document.getElementById("blogGrid");
  if (!grid) return;

  const searchInput = document.getElementById("blogSearch");
  const buttons = document.querySelectorAll(".filter-btn");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const emptyState = document.getElementById("emptyBlogState");
  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "All";
  let visibleCount = 6;

  function render() {
    const searchTerm = (searchInput?.value || "").toLowerCase().trim();
    const posts = getAllPosts().filter(post => post.status === "Published");
    const filtered = posts.filter(post => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const searchText = `${post.title} ${post.excerpt} ${post.category} ${post.tags || ""}`.toLowerCase();
      return matchesCategory && searchText.includes(searchTerm);
    });

    grid.innerHTML = filtered.slice(0, visibleCount).map(createBlogCard).join("");
    if (emptyState) emptyState.hidden = filtered.length > 0;
    if (loadMoreBtn) loadMoreBtn.hidden = filtered.length <= visibleCount;
    setupRevealAnimations();
  }

  buttons.forEach(button => {
    if (button.dataset.category === activeCategory) button.classList.add("active");
    else button.classList.remove("active");
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      visibleCount = 6;
      buttons.forEach(btn => btn.classList.toggle("active", btn === button));
      render();
    });
  });

  searchInput?.addEventListener("input", () => {
    visibleCount = 6;
    render();
  });

  loadMoreBtn?.addEventListener("click", () => {
    visibleCount += 3;
    render();
  });

  render();
}

function updateMeta(name, content, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  const meta = document.querySelector(selector);
  if (meta) meta.setAttribute("content", content);
}

function setupArticlePage() {
  if (document.body.dataset.page !== "article") return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "ai-tools-changing-online-work";
  const post = getAllPosts().find(item => item.slug === slug) || BLOG_POSTS[0];

  const title = document.getElementById("articleTitle");
  const excerpt = document.getElementById("articleExcerpt");
  const category = document.getElementById("articleCategory");
  const date = document.getElementById("articleDate");
  const readTime = document.getElementById("articleReadTime");
  const image = document.getElementById("articleImage");
  const body = document.getElementById("articleBody");
  const breadcrumb = document.getElementById("breadcrumbArticle");

  if (title) title.textContent = post.title;
  if (excerpt) excerpt.textContent = post.excerpt;
  if (category) category.textContent = post.category;
  if (date) {
    date.textContent = post.date;
    date.setAttribute("datetime", post.isoDate || "2026-05-12");
  }
  if (readTime) readTime.textContent = post.readTime || "5 min read";
  if (image) {
    image.src = post.image;
    image.alt = post.alt || post.title;
  }
  if (body) body.innerHTML = post.content || `<section id="overview"><h2>Overview</h2><p>${escapeHTML(post.excerpt)}</p></section>`;
  if (breadcrumb) breadcrumb.textContent = post.title;

  document.title = post.seoTitle || `${post.title} | Blog With Ali`;
  updateMeta("description", post.seoDescription || post.excerpt);
  updateMeta("keywords", post.seoKeywords || post.tags || post.category);
  updateMeta("og:title", post.seoTitle || `${post.title} | Blog With Ali`, true);
  updateMeta("og:description", post.seoDescription || post.excerpt, true);
  updateMeta("og:image", post.image, true);
  updateMeta("twitter:title", post.seoTitle || `${post.title} | Blog With Ali`);
  updateMeta("twitter:description", post.seoDescription || post.excerpt);
  updateMeta("twitter:image", post.image);

  const jsonLd = document.getElementById("articleJsonLd");
  if (jsonLd) {
    jsonLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.seoDescription || post.excerpt,
      image: post.image,
      author: { "@type": "Person", name: "Ali" },
      publisher: { "@type": "Organization", name: "Blog With Ali", logo: { "@type": "ImageObject", url: "https://blogwithali.example/assets/images/favicon.svg" } },
      datePublished: post.isoDate || "2026-05-12",
      dateModified: post.isoDate || "2026-05-12",
      mainEntityOfPage: { "@type": "WebPage", "@id": `https://blogwithali.example/article.html?slug=${post.slug}` }
    });
  }

  renderRelatedPosts(post.slug);
}

function setupAdminLogin() {
  const form = document.getElementById("adminLoginForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    const email = document.getElementById("adminEmail")?.value.trim();
    const password = document.getElementById("adminPassword")?.value;
    const message = form.querySelector(".form-message");

    if (email === "admin@blogwithali.com" && password === "admin123") {
      sessionStorage.setItem("blogWithAliDemoAdmin", "true");
      message.textContent = "Login successful. Redirecting...";
      message.className = "form-message success";
      window.location.href = "admin-dashboard.html";
    } else {
      message.textContent = "Wrong email or password. Use the demo credentials shown below.";
      message.className = "form-message error";
    }
  });
}

function setupAdminDashboard() {
  if (document.body.dataset.page !== "admin-dashboard") return;

  // Frontend-only demo protection. This is not real security; use backend auth for production.
  if (sessionStorage.getItem("blogWithAliDemoAdmin") !== "true") {
    window.location.href = "admin-login.html";
    return;
  }

  const form = document.getElementById("adminPostForm");
  const tableBody = document.getElementById("adminPostsTable");
  const resetBtn = document.getElementById("resetPostForm");
  const seedBtn = document.getElementById("seedDemoPosts");
  const logoutBtn = document.getElementById("logoutAdmin");

  if (!localStorage.getItem("blogWithAliDemoPosts")) saveAllPosts(BLOG_POSTS);

  function setMessage(text, type = "success") {
    const message = form?.querySelector(".form-message");
    if (!message) return;
    message.textContent = text;
    message.className = `form-message ${type}`;
  }

  function resetForm() {
    form?.reset();
    const id = document.getElementById("postId");
    if (id) id.value = "";
    setMessage("", "success");
  }

  function fillForm(post) {
    document.getElementById("postId").value = post.id;
    document.getElementById("postTitle").value = post.title || "";
    document.getElementById("postSlug").value = post.slug || "";
    document.getElementById("postCategory").value = post.category || "Technology";
    document.getElementById("postStatus").value = post.status || "Draft";
    document.getElementById("postImage").value = post.image || "";
    document.getElementById("postExcerpt").value = post.excerpt || "";
    document.getElementById("postContent").value = post.content || "";
    document.getElementById("postTags").value = post.tags || "";
    document.getElementById("postSeoTitle").value = post.seoTitle || "";
    document.getElementById("postSeoDescription").value = post.seoDescription || "";
    document.getElementById("postSeoKeywords").value = post.seoKeywords || "";
    document.getElementById("addPost")?.scrollIntoView({ behavior: "smooth" });
  }

  function updateStats(posts) {
    const categories = new Set(posts.map(post => post.category));
    document.getElementById("statTotalPosts").textContent = posts.length;
    document.getElementById("statPublishedPosts").textContent = posts.filter(post => post.status === "Published").length;
    document.getElementById("statDraftPosts").textContent = posts.filter(post => post.status === "Draft").length;
    document.getElementById("statCategories").textContent = categories.size;
  }

  function renderTable() {
    const posts = getAllPosts();
    updateStats(posts);
    if (!tableBody) return;
    tableBody.innerHTML = posts.map(post => `
      <tr>
        <td><strong>${escapeHTML(post.title)}</strong><br><small>${escapeHTML(post.slug)}</small></td>
        <td>${escapeHTML(post.category)}</td>
        <td><span class="status-pill ${post.status === "Published" ? "published" : "draft"}">${escapeHTML(post.status)}</span></td>
        <td>${escapeHTML(post.date || "May 2026")}</td>
        <td>
          <div class="table-actions">
            <button class="icon-btn" type="button" data-action="edit" data-id="${escapeHTML(post.id)}"><i class="fa-solid fa-pen" aria-hidden="true"></i> Edit</button>
            <button class="icon-btn" type="button" data-action="toggle" data-id="${escapeHTML(post.id)}"><i class="fa-solid fa-toggle-on" aria-hidden="true"></i> ${post.status === "Published" ? "Draft" : "Publish"}</button>
            <button class="icon-btn" type="button" data-action="delete" data-id="${escapeHTML(post.id)}"><i class="fa-solid fa-trash" aria-hidden="true"></i> Delete</button>
          </div>
        </td>
      </tr>`).join("");
  }

  document.getElementById("postTitle")?.addEventListener("input", event => {
    const slugInput = document.getElementById("postSlug");
    if (slugInput && !document.getElementById("postId")?.value) slugInput.value = slugify(event.target.value);
  });

  tableBody?.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const posts = getAllPosts();
    const post = posts.find(item => item.id === button.dataset.id);
    if (!post) return;

    if (button.dataset.action === "edit") {
      fillForm(post);
      setMessage("Editing selected post. Save changes when ready.", "success");
    }

    if (button.dataset.action === "toggle") {
      post.status = post.status === "Published" ? "Draft" : "Published";
      saveAllPosts(posts);
      renderTable();
    }

    if (button.dataset.action === "delete") {
      const confirmed = window.confirm(`Delete "${post.title}" from demo posts?`);
      if (!confirmed) return;
      saveAllPosts(posts.filter(item => item.id !== post.id));
      renderTable();
    }
  });

  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.checkValidity()) {
      setMessage("Please fill all required post fields.", "error");
      form.reportValidity();
      return;
    }

    const posts = getAllPosts();
    const id = document.getElementById("postId").value || String(Date.now());
    const title = document.getElementById("postTitle").value.trim();
    const slug = document.getElementById("postSlug").value.trim() || slugify(title);
    const postData = {
      id,
      title,
      slug,
      category: document.getElementById("postCategory").value,
      status: document.getElementById("postStatus").value,
      image: document.getElementById("postImage").value.trim() || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
      alt: `${title} featured image`,
      excerpt: document.getElementById("postExcerpt").value.trim(),
      content: document.getElementById("postContent").value.trim() || `<section id="overview"><h2>Overview</h2><p>${escapeHTML(document.getElementById("postExcerpt").value.trim())}</p></section>`,
      tags: document.getElementById("postTags").value.trim(),
      seoTitle: document.getElementById("postSeoTitle").value.trim() || `${title} | Blog With Ali`,
      seoDescription: document.getElementById("postSeoDescription").value.trim() || document.getElementById("postExcerpt").value.trim(),
      seoKeywords: document.getElementById("postSeoKeywords").value.trim() || document.getElementById("postTags").value.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      isoDate: new Date().toISOString().slice(0, 10),
      readTime: "5 min read"
    };

    const existingIndex = posts.findIndex(post => post.id === id);
    if (existingIndex >= 0) posts[existingIndex] = postData;
    else posts.unshift(postData);

    saveAllPosts(posts);
    renderTable();
    resetForm();
    setMessage("Post saved successfully in localStorage demo data.", "success");
  });

  resetBtn?.addEventListener("click", resetForm);
  seedBtn?.addEventListener("click", () => {
    saveAllPosts(BLOG_POSTS);
    resetForm();
    renderTable();
  });
  logoutBtn?.addEventListener("click", () => {
    sessionStorage.removeItem("blogWithAliDemoAdmin");
    window.location.href = "admin-login.html";
  });

  renderTable();
}

function init() {
  setupNavigation();
  setupRevealAnimations();
  setupNewsletterForms();
  setupGenericDemoForms();
  setupContactForm();
  renderHomePosts();
  setupBlogsPage();
  setupArticlePage();
  setupAdminLogin();
  setupAdminDashboard();
}

document.addEventListener("DOMContentLoaded", init);
