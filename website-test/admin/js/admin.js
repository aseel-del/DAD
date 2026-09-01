/*
 * Dar Aldawa CMS Admin Logic
 * Handles dynamic CRUD, Status filtering, Search, Pagination, and Tab Switching
 */

const DEFAULT_ARTICLES = [
  {
    id: 1,
    title: "Dar Aldawa Board Recommends Dividend Distributions to Shareholders",
    category: "Financial Release",
    author: "Aseel Badran",
    status: "Published",
    date: "Feb 24, 2026",
    rawDate: "2026-02-24",
    desc: "Following exceptional growth in regional markets during fiscal year 2025, the board outlines dividend structures and strategic growth targets.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Announcement of the General Assembly Meeting Date for 2026",
    category: "Operational",
    author: "DAD team",
    status: "Published",
    date: "Jan 15, 2026",
    rawDate: "2026-01-15",
    desc: "Shareholders are invited to register votes online as the company finalizes plans for its 50th-anniversary strategic shifts.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Dar Aldawa Acquires New Industrial Licenses for Production Expansion",
    category: "Regional Expansion",
    author: "Aseel Badran",
    status: "Published",
    date: "Dec 08, 2025",
    rawDate: "2025-12-08",
    desc: "Securing key regional regulatory approvals in Saudi Arabia to launch a dedicated solid oral therapeutic unit in late 2026.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Q4 2025 Financial Results Show 12% Revenue Growth",
    category: "Financial Release",
    author: "DAD team",
    status: "Draft",
    date: "Nov 14, 2025",
    rawDate: "2025-11-14",
    desc: "Solid performance driven by robust export growth across Gulf Cooperation Council (GCC) markets and North African expansion projects.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "New Strategic Partnership with European Pharmaceutical Distributor",
    category: "Press Release",
    author: "DAD team",
    status: "Published",
    date: "Oct 22, 2025",
    rawDate: "2025-10-22",
    desc: "New distribution pathways established to launch bioequivalent cardiorespiratory generics in select Eastern European markets by Q2 2026.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Dar Aldawa Opens Advanced R&D Center in Amman",
    category: "Operational",
    author: "Aseel Badran",
    status: "Archived",
    date: "Sep 11, 2025",
    rawDate: "2025-09-11",
    desc: "Equipped with state-of-the-art chemical synthesis labs and high-performance chromatography instruments to pioneer bioequivalent formulation.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop"
  }
];

// Generate extra realistic items to total 24 articles as in reference
const AUTHORS = ["Aseel Badran", "DAD team"];
const CATEGORIES = ["Financial Release", "Operational", "Regional Expansion", "Press Release", "Events"];
const IMAGES = [
  "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop"
];

for (let i = 7; i <= 24; i++) {
  let status = "Published";
  if (i === 8 || i === 14 || i === 19) status = "Draft";
  if (i === 12) status = "Archived";

  const cat = CATEGORIES[i % CATEGORIES.length];
  DEFAULT_ARTICLES.push({
    id: i,
    title: `${cat} - International Medical Symposium and Milestone Report #${i}`,
    category: cat,
    author: AUTHORS[i % AUTHORS.length],
    status: status,
    date: `Aug ${28 - (i % 20)}, 2025`,
    rawDate: `2025-08-${10 + (i % 15)}`,
    desc: `Comprehensive briefing covering pharmaceutical manufacturing standards, clinical stability trials, and expansion initiatives across global export territories.`,
    image: IMAGES[i % IMAGES.length]
  });
}

// State & Migration to guarantee only Aseel Badran and DAD team
let rawArticles = JSON.parse(localStorage.getItem('dad_news_articles')) || DEFAULT_ARTICLES;
let articles = rawArticles.map((a, idx) => {
  if (a.author !== "Aseel Badran" && a.author !== "DAD team") {
    a.author = (idx % 2 === 0) ? "Aseel Badran" : "DAD team";
  }
  return a;
});
localStorage.setItem('dad_news_articles', JSON.stringify(articles));
let currentTab = 'news';
let currentStatusFilter = 'All';
let searchQuery = '';
let currentPage = 1;
const itemsPerPage = 6;
let editingId = null;

function saveArticles() {
  localStorage.setItem('dad_news_articles', JSON.stringify(articles));
  updateStats();
  renderTable();
}

function updateStats() {
  const total = articles.length;
  const published = articles.filter(a => a.status === 'Published').length;
  const drafts = articles.filter(a => a.status === 'Draft').length;
  const archived = articles.filter(a => a.status === 'Archived').length;

  document.getElementById('statTotal').textContent = total;
  document.getElementById('statPublished').textContent = published;
  document.getElementById('statDrafts').textContent = drafts;
  document.getElementById('statArchived').textContent = archived;
}

function getFilteredArticles() {
  return articles.filter(item => {
    const matchStatus = currentStatusFilter === 'All' || item.status === currentStatusFilter;
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchSearch;
  });
}

function renderTable() {
  const filtered = getFilteredArticles();
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIdx, startIdx + itemsPerPage);

  const tbody = document.getElementById('articlesTableBody');
  tbody.innerHTML = '';

  if (paginated.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 40px; color: #64748B;">No articles found matching your criteria.</td></tr>`;
  } else {
    paginated.forEach(art => {
      const statusClass = art.status.toLowerCase();
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><input type="checkbox" class="row-checkbox" data-id="${art.id}"></td>
        <td class="article-title-cell" title="${art.title}">${art.title}</td>
        <td>${art.category}</td>
        <td>${art.author}</td>
        <td><span class="status-badge ${statusClass}">${art.status}</span></td>
        <td>${art.date}</td>
        <td>
          <div class="row-actions-group">
            <button class="row-action-icon" title="Edit Article" onclick="openEditModal(${art.id})">
              <span class="material-symbols-outlined">edit_square</span>
            </button>
            <button class="row-action-icon" title="Preview on Website" onclick="viewArticle(${art.id})">
              <span class="material-symbols-outlined">visibility</span>
            </button>
            <button class="row-action-icon delete" title="Delete Article" onclick="deleteArticle(${art.id})">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Update Footer info
  const endIdx = Math.min(startIdx + itemsPerPage, totalItems);
  document.getElementById('tableInfoText').textContent = totalItems === 0 ? 'Showing 0 articles' : `Showing ${startIdx + 1}-${endIdx} of ${totalItems} articles`;

  // Render pagination buttons
  const paginContainer = document.getElementById('tablePagination');
  paginContainer.innerHTML = '';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'page-btn';
  prevBtn.textContent = 'Prev';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => { if (currentPage > 1) { currentPage--; renderTable(); } };
  paginContainer.appendChild(prevBtn);

  for (let p = 1; p <= totalPages; p++) {
    const pBtn = document.createElement('button');
    pBtn.className = `page-btn ${p === currentPage ? 'active' : ''}`;
    pBtn.textContent = p;
    pBtn.onclick = () => { currentPage = p; renderTable(); };
    paginContainer.appendChild(pBtn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.className = 'page-btn';
  nextBtn.textContent = 'Next';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => { if (currentPage < totalPages) { currentPage++; renderTable(); } };
  paginContainer.appendChild(nextBtn);
}

// Modal Handlers & Multilingual / SEO Management
const modal = document.getElementById('articleModal');
const modalTitle = document.getElementById('modalTitle');
const articleForm = document.getElementById('articleForm');

// Tab Switching inside Modal
document.querySelectorAll('.modal-tab-btn').forEach(tabBtn => {
  tabBtn.addEventListener('click', () => {
    document.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.modal-tab-pane').forEach(p => p.classList.remove('active'));
    tabBtn.classList.add('active');
    const targetPaneId = `pane-${tabBtn.getAttribute('data-modaltab')}`;
    document.getElementById(targetPaneId)?.classList.add('active');
  });
});

// Live SEO Snippet and Slug Updater
function updateSeoPreview() {
  const title = document.getElementById('formTitle').value.trim();
  const desc = document.getElementById('formDesc').value.trim();
  let slug = document.getElementById('formSlug').value.trim();
  const metaTitle = document.getElementById('formMetaTitle').value.trim() || title;
  const metaDesc = document.getElementById('formMetaDesc').value.trim() || desc;

  // Auto-generate slug if blank
  if (!slug && title) {
    slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    document.getElementById('formSlug').value = slug;
  }

  // Update Character Counters
  const tCount = document.getElementById('formMetaTitle').value.length;
  const dCount = document.getElementById('formMetaDesc').value.length;
  const tEl = document.getElementById('metaTitleCounter');
  const dEl = document.getElementById('metaDescCounter');

  if (tEl) {
    tEl.textContent = `${tCount} / 60 chars`;
    tEl.className = `char-counter ${tCount >= 40 && tCount <= 60 ? 'good' : (tCount > 60 ? 'warning' : '')}`;
  }
  if (dEl) {
    dEl.textContent = `${dCount} / 160 chars`;
    dEl.className = `char-counter ${dCount >= 120 && dCount <= 160 ? 'good' : (dCount > 160 ? 'warning' : '')}`;
  }

  // Update SERP preview box
  document.getElementById('serpSlugPreview').textContent = slug || 'article-slug';
  document.getElementById('serpTitlePreview').textContent = metaTitle ? `${metaTitle} | Dar Aldawa` : 'Article Title | Dar Aldawa';
  document.getElementById('serpDescPreview').textContent = metaDesc || 'Brief summary of the article snippet will appear here on search results pages.';
}

document.getElementById('formTitle')?.addEventListener('input', updateSeoPreview);
document.getElementById('formDesc')?.addEventListener('input', updateSeoPreview);
document.getElementById('formSlug')?.addEventListener('input', updateSeoPreview);
document.getElementById('formMetaTitle')?.addEventListener('input', updateSeoPreview);
document.getElementById('formMetaDesc')?.addEventListener('input', updateSeoPreview);

function resetModalTabs() {
  document.querySelectorAll('.modal-tab-btn').forEach((b, i) => {
    if (i === 0) b.classList.add('active'); else b.classList.remove('active');
  });
  document.querySelectorAll('.modal-tab-pane').forEach((p, i) => {
    if (i === 0) p.classList.add('active'); else p.classList.remove('active');
  });
}

function openAddModal() {
  editingId = null;
  modalTitle.textContent = "Add New Article";
  articleForm.reset();
  resetModalTabs();
  document.getElementById('formAuthor').value = "Aseel Badran";
  document.getElementById('formDate').value = new Date().toISOString().split('T')[0];
  document.getElementById('formImage').value = "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop";
  updateSeoPreview();
  modal.classList.add('active');
}

function openEditModal(id) {
  const art = articles.find(a => a.id === id);
  if (!art) return;
  editingId = id;
  modalTitle.textContent = "Edit Article";
  resetModalTabs();

  // General fields
  document.getElementById('formCategory').value = art.category;
  document.getElementById('formAuthor').value = art.author || "Aseel Badran";
  document.getElementById('formStatus').value = art.status;
  document.getElementById('formDate').value = art.rawDate || new Date().toISOString().split('T')[0];
  document.getElementById('formImage').value = art.image || "";

  // English fields
  document.getElementById('formTitle').value = art.title || "";
  document.getElementById('formDesc').value = art.desc || "";
  document.getElementById('formBodyEn').value = art.bodyEn || "";

  // Arabic fields
  document.getElementById('formTitleAr').value = art.titleAr || "";
  document.getElementById('formDescAr').value = art.descAr || "";
  document.getElementById('formBodyAr').value = art.bodyAr || "";

  // French fields
  document.getElementById('formTitleFr').value = art.titleFr || "";
  document.getElementById('formDescFr').value = art.descFr || "";
  document.getElementById('formBodyFr').value = art.bodyFr || "";

  // SEO fields
  document.getElementById('formSlug').value = art.slug || "";
  document.getElementById('formMetaTitle').value = art.metaTitle || "";
  document.getElementById('formMetaDesc').value = art.metaDesc || "";
  document.getElementById('formKeywords').value = art.keywords || "";

  updateSeoPreview();
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

articleForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const rawD = document.getElementById('formDate').value;
  const dObj = new Date(rawD);
  const formattedDate = dObj.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

  const enTitle = document.getElementById('formTitle').value.trim();
  let slugVal = document.getElementById('formSlug').value.trim();
  if (!slugVal && enTitle) {
    slugVal = enTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  const payload = {
    // Core & General
    title: enTitle,
    category: document.getElementById('formCategory').value,
    author: document.getElementById('formAuthor').value,
    status: document.getElementById('formStatus').value,
    date: formattedDate,
    rawDate: rawD,
    desc: document.getElementById('formDesc').value.trim(),
    image: document.getElementById('formImage').value.trim() || "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop",
    
    // English
    bodyEn: document.getElementById('formBodyEn').value.trim(),

    // Arabic (RTL)
    titleAr: document.getElementById('formTitleAr').value.trim(),
    descAr: document.getElementById('formDescAr').value.trim(),
    bodyAr: document.getElementById('formBodyAr').value.trim(),

    // French
    titleFr: document.getElementById('formTitleFr').value.trim(),
    descFr: document.getElementById('formDescFr').value.trim(),
    bodyFr: document.getElementById('formBodyFr').value.trim(),

    // SEO Suite
    slug: slugVal,
    metaTitle: document.getElementById('formMetaTitle').value.trim(),
    metaDesc: document.getElementById('formMetaDesc').value.trim(),
    keywords: document.getElementById('formKeywords').value.trim()
  };

  if (editingId) {
    const idx = articles.findIndex(a => a.id === editingId);
    if (idx !== -1) {
      articles[idx] = { ...articles[idx], ...payload };
    }
  } else {
    const newId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1;
    articles.unshift({ id: newId, ...payload });
  }

  saveArticles();
  closeModal();
});

function deleteArticle(id) {
  if (confirm("Are you sure you want to delete this article?")) {
    articles = articles.filter(a => a.id !== id);
    saveArticles();
  }
}

function viewArticle(id) {
  window.open(`../news.html?id=${id}`, '_blank');
}

// Tab Switching (News is active, others show Coming Soon)
document.querySelectorAll('.nav-item-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-item-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.getAttribute('data-tab');
    currentTab = tab;

    const newsSection = document.getElementById('newsManagementSection');
    const comingSoon = document.getElementById('comingSoonSection');
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
    const pageTitle = document.getElementById('pageTitle');

    if (tab === 'news') {
      newsSection.style.display = 'flex';
      comingSoon.style.display = 'none';
      breadcrumbCurrent.textContent = 'News Articles';
      pageTitle.textContent = 'News Management';
    } else {
      newsSection.style.display = 'none';
      comingSoon.style.display = 'flex';
      const label = btn.querySelector('span:not(.material-symbols-outlined)').textContent;
      breadcrumbCurrent.textContent = label;
      pageTitle.textContent = label;
      document.getElementById('comingSoonTabName').textContent = label;
    }
  });
});

// Search & Status filters
document.getElementById('adminSearchInput').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  currentPage = 1;
  renderTable();
});

function toggleStatusFilter() {
  const statuses = ['All', 'Published', 'Draft', 'Archived'];
  const curIdx = statuses.indexOf(currentStatusFilter);
  currentStatusFilter = statuses[(curIdx + 1) % statuses.length];
  document.getElementById('statusFilterBtnText').textContent = `Status: ${currentStatusFilter}`;
  currentPage = 1;
  renderTable();
}

// Sidebar collapse toggle
const sidebar = document.getElementById('adminSidebar');
const mainContainer = document.getElementById('adminMain');
const collapseBtn = document.getElementById('collapseSidebarBtn');

collapseBtn?.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  mainContainer.classList.toggle('sidebar-collapsed');
});

// Logout handler
document.getElementById('logoutBtn')?.addEventListener('click', () => {
  if (confirm("Are you sure you want to sign out?")) {
    sessionStorage.removeItem('dad_admin_session');
    window.location.href = 'login.html';
  }
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  updateStats();
  renderTable();
});
