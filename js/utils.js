/* ================================================================
   UTILS — helpers globales, layout renderer, toasts
   ================================================================ */

window.Utils = {

  /* ---- Formateo ---- */
  formatCurrency(amount, currency = 'MXN') {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount);
  },

  formatDate(dateStr, opts = {}) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    const defaults = { day: 'numeric', month: 'short', year: 'numeric' };
    return d.toLocaleDateString('es-MX', { ...defaults, ...opts });
  },

  formatTime(timeStr) {
    if (!timeStr) return '—';
    const [h, m] = timeStr.split(':');
    const hour = parseInt(h);
    return `${hour % 12 || 12}:${m} ${hour < 12 ? 'am' : 'pm'}`;
  },

  formatPercent(n) { return `${Math.round(n)}%`; },

  getInitials(firstName, lastName) {
    return ((firstName?.[0] || '') + (lastName?.[0] || '')).toUpperCase();
  },

  dayLabel(day) {
    const map = { monday:'Lunes', tuesday:'Martes', wednesday:'Miércoles', thursday:'Jueves', friday:'Viernes', saturday:'Sábado', sunday:'Domingo' };
    return map[day] || day;
  },

  relativeTime(dateStr) {
    if (!dateStr) return '';
    const diff = Date.now() - new Date(dateStr);
    const days = Math.floor(diff / 86400000);
    if (days === 0) return 'hoy';
    if (days === 1) return 'ayer';
    if (days < 30) return `hace ${days} días`;
    const months = Math.floor(days / 30);
    return `hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
  },

  statusLabel(status) {
    const map = {
      active:'Activo', inactive:'Inactivo', archived:'Archivado', draft:'Borrador',
      pending:'Pendiente', succeeded:'Pagado', failed:'Fallido', refunded:'Reembolsado',
      waiting:'En espera', completed:'Completado', cancelled:'Cancelado',
      present:'Presente', absent:'Ausente', excused:'Justificado'
    };
    return map[status] || status;
  },

  statusBadgeClass(status) {
    const map = {
      active:'badge-success', succeeded:'badge-success', present:'badge-success',
      pending:'badge-warning', waiting:'badge-warning',
      inactive:'badge-gray', archived:'badge-gray', cancelled:'badge-gray', completed:'badge-gray',
      failed:'badge-danger', refunded:'badge-danger', absent:'badge-danger',
      draft:'badge-primary', excused:'badge-info'
    };
    return map[status] || 'badge-gray';
  },

  roleName(role) {
    const map = { admin:'Administrador', receptionist:'Recepcionista', instructor:'Instructor', student:'Estudiante' };
    return map[role] || role;
  },

  roleColor(role) {
    const map = { admin:'#6366f1', receptionist:'#8b5cf6', instructor:'#06b6d4', student:'#10b981' };
    return map[role] || '#6b7280';
  },

  /* ---- Avatares ---- */
  avatarHtml(user, size = '') {
    const initials = this.getInitials(user.first_name, user.last_name);
    const sizeClass = size ? `avatar-${size}` : '';
    return `<div class="avatar ${user.role} ${sizeClass}">${initials}</div>`;
  },

  /* ---- Chip de categoría (backward compat) ---- */
  categoryChip(catId) {
    const cat = DB.getCategory(catId);
    if (!cat) return '';
    return `<span class="chip" style="background:${cat.color}22;color:${cat.color};border-color:${cat.color}44">${cat.name}</span>`;
  },

  /* ---- Badge de plan ---- */
  planBadge(planId) {
    const plan = DB.getPlan(planId);
    if (!plan) return '';
    return `<span class="badge" style="background:${plan.color}22;color:${plan.color};border:1px solid ${plan.color}44;font-weight:600">${plan.name}</span>`;
  },

  /* ---- Chip de grupo ---- */
  groupChip(groupId) {
    const grp = DB.getGroup(groupId);
    if (!grp) return '';
    return `<span class="chip" style="background:${grp.color}22;color:${grp.color};border-color:${grp.color}44">${grp.name}</span>`;
  },

  /* ---- Toast notifications ---- */
  toast(title, desc = '', type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const icons = { success:'✅', warning:'⚠️', error:'❌', info:'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || icons.info}</span>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        ${desc ? `<div class="toast-desc">${desc}</div>` : ''}
      </div>
      <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4500);
  },

  /* ---- Modal helpers ---- */
  openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('open');
  },

  closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('open');
  },

  openPanel(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closePanel(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('open');
    document.body.style.overflow = '';
  },

  /* ---- Simulated email preview modal ---- */
  showEmailPreview(to, subject, body) {
    let modal = document.getElementById('email-preview-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'email-preview-modal';
      modal.className = 'modal-backdrop';
      modal.innerHTML = `
        <div class="modal modal-lg">
          <div class="modal-header">
            <h3 class="modal-title">📧 Correo simulado (no se envía realmente)</h3>
            <button class="modal-close" onclick="Utils.closeModal('email-preview-modal')">✕</button>
          </div>
          <div class="modal-body">
            <div style="background:var(--color-gray-50);border-radius:var(--radius);padding:var(--space-4);margin-bottom:var(--space-4);font-size:var(--font-size-sm)">
              <div><strong>Para:</strong> <span id="email-to"></span></div>
              <div><strong>Asunto:</strong> <span id="email-subject"></span></div>
            </div>
            <div id="email-body" style="font-size:var(--font-size-sm);line-height:1.7;white-space:pre-wrap;border:1px solid var(--color-border);border-radius:var(--radius);padding:var(--space-5)"></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" onclick="Utils.closeModal('email-preview-modal')">Cerrar</button>
          </div>
        </div>`;
      document.body.appendChild(modal);
      modal.addEventListener('click', e => { if (e.target === modal) Utils.closeModal('email-preview-modal'); });
    }
    document.getElementById('email-to').textContent = to;
    document.getElementById('email-subject').textContent = subject;
    document.getElementById('email-body').textContent = body;
    this.openModal('email-preview-modal');
  },

  /* ================================================================
     LAYOUT: Sidebar + Header (inyectados en páginas autenticadas)
     ================================================================ */

  renderAppLayout(pageTitle, activeLink) {
    const user = Auth.getCurrentUser();
    if (!user) return;

    this._applyTheme();

    const sidebarItems = this._getSidebarItems(user.role);
    const base = '../';

    document.body.innerHTML = `
      <div class="app-layout">
        <aside class="sidebar" id="sidebar">
          <div class="sidebar-header">
            <div class="sidebar-logo-icon"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></div>
            <div>
              <div class="sidebar-logo-text">${MOCK_DB.academy.name}</div>
              <div class="sidebar-logo-sub">Academia</div>
            </div>
          </div>
          <nav class="sidebar-nav">
            ${sidebarItems.map(item => `
              <a href="${base}${item.href}" class="sidebar-link ${item.href.includes(activeLink) ? 'active' : ''}">
                <span class="sidebar-link-icon">${item.icon}</span>
                <span>${item.label}</span>
              </a>
            `).join('')}
          </nav>
          <div class="sidebar-footer">
            <div class="sidebar-user" onclick="Utils.openModal('profile-quick-modal')">
              ${this.avatarHtml(user)}
              <div class="sidebar-user-info">
                <div class="sidebar-user-name">${user.first_name} ${user.last_name}</div>
                <div class="sidebar-user-role">${this.roleName(user.role)}</div>
              </div>
              <span style="color:var(--color-sidebar-text);opacity:0.5">⚙</span>
            </div>
          </div>
        </aside>

        <div class="app-content">
          <header class="app-header">
            <button class="btn btn-ghost btn-icon" id="sidebar-toggle" onclick="document.getElementById('sidebar').classList.toggle('open')" style="display:none">☰</button>
            <h1 class="app-header-title">${pageTitle}</h1>
            <div class="app-header-actions">
              <div class="header-role-switcher">
                <span class="header-role-label">DEMO:</span>
                ${['admin','receptionist','instructor','student'].map(r =>
                  `<button class="header-role-btn ${user.role === r ? 'active' : ''}" onclick="Auth.switchRole('${r}')" title="Ver como ${this.roleName(r)}">${this.roleName(r).split(' ')[0]}</button>`
                ).join('')}
              </div>
              <button class="btn btn-ghost btn-sm" onclick="Auth.logout()">Salir →</button>
            </div>
          </header>
          <main class="app-main" id="app-main">
            <!-- Contenido de la página se inyecta aquí -->
          </main>
        </div>
      </div>

      <!-- Toast container -->
      <div class="toast-container"></div>
    `;
  },

  _getSidebarItems(role) {
    const s = (d) => `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">${d}</svg>`;
    const all = [
      { href: 'pages/home.html',           icon: s('<path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1z"/><path d="M9 21V12h6v9"/>'),                                                                                                                                                                              label: 'Inicio',        roles: ['admin','receptionist','instructor','student'] },
      { href: 'pages/students.html',       icon: s('<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>'),                                                                                                           label: 'Estudiantes',   roles: ['admin','receptionist'] },
      { href: 'pages/instructors.html',    icon: s('<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'),                                                                                                                                                                                     label: 'Instructores',  roles: ['admin','receptionist'] },
      { href: 'pages/classes.html',        icon: s('<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),                                                                                                   label: 'Clases',        roles: ['admin','receptionist','instructor','student'] },
      { href: 'pages/plans.html',           icon: s('<path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>'),                                                                                                                                       label: 'Planes',        roles: ['admin'] },
      { href: 'pages/groups.html',          icon: s('<circle cx="12" cy="5" r="3"/><path d="M6.5 14a5.5 5.5 0 0111 0"/><circle cx="4" cy="19" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><line x1="4" y1="17" x2="4" y2="14"/><line x1="12" y1="17" x2="12" y2="8"/><line x1="20" y1="17" x2="20" y2="14"/>'),  label: 'Grupos',        roles: ['admin'] },
      { href: 'pages/sales.html',          icon: s('<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>'),                                                                                                                                                                              label: 'Ventas',        roles: ['admin','receptionist'] },
      { href: 'pages/expenses.html',       icon: s('<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>'),                                                                                                                                                                                 label: 'Gastos',        roles: ['admin','receptionist'] },
      { href: 'pages/communications.html', icon: s('<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>'),                                                                                                                                                                           label: 'Comunicados',   roles: ['admin','receptionist'] },
      { href: 'pages/dashboard.html',      icon: s('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'),                                                                                                                                                  label: 'Finanzas',      roles: ['admin'] },
      { href: 'pages/settings.html',       icon: s('<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>'), label: 'Configuración', roles: ['admin','receptionist','instructor','student'] },
    ];
    return all.filter(i => i.roles.includes(role));
  },

  _applyTheme() {
    const saved = localStorage.getItem('academy_theme');
    if (saved) {
      try {
        const { colorPrimary, colorSecondary, colorAccent } = JSON.parse(saved);
        const root = document.documentElement;
        if (colorPrimary) {
          root.style.setProperty('--color-primary', colorPrimary);
          root.style.setProperty('--color-primary-dark', this._darken(colorPrimary, 15));
          root.style.setProperty('--color-primary-darker', this._darken(colorPrimary, 30));
          root.style.setProperty('--color-primary-light', this._lighten(colorPrimary, 45));
          root.style.setProperty('--color-primary-alpha', colorPrimary + '20');
          root.style.setProperty('--color-sidebar-bg', this._darken(colorPrimary, 25));
          root.style.setProperty('--color-border-focus', colorPrimary);
        }
        if (colorSecondary) {
          root.style.setProperty('--color-secondary', colorSecondary);
          root.style.setProperty('--color-secondary-dark', this._darken(colorSecondary, 15));
          root.style.setProperty('--color-secondary-light', this._lighten(colorSecondary, 45));
        }
        if (colorAccent) {
          root.style.setProperty('--color-accent', colorAccent);
          root.style.setProperty('--color-accent-dark', this._darken(colorAccent, 15));
          root.style.setProperty('--color-accent-light', this._lighten(colorAccent, 45));
        }
      } catch { /* tema por defecto */ }
    }
  },

  saveTheme(colorPrimary, colorSecondary, colorAccent) {
    localStorage.setItem('academy_theme', JSON.stringify({ colorPrimary, colorSecondary, colorAccent }));
    MOCK_DB.academy.theme = { colorPrimary, colorSecondary, colorAccent };
    this._applyTheme();
  },

  /* Manipulación simple de color hex */
  _darken(hex, amount) {
    let { r, g, b } = this._hexToRgb(hex);
    r = Math.max(0, r - amount * 2);
    g = Math.max(0, g - amount * 2);
    b = Math.max(0, b - amount * 2);
    return this._rgbToHex(r, g, b);
  },

  _lighten(hex, amount) {
    let { r, g, b } = this._hexToRgb(hex);
    r = Math.min(255, r + amount * 2);
    g = Math.min(255, g + amount * 2);
    b = Math.min(255, b + amount * 2);
    return this._rgbToHex(r, g, b);
  },

  _hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : { r: 99, g: 102, b: 241 };
  },

  _rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  },

  /* Inicialización de dropdowns */
  initDropdowns() {
    document.querySelectorAll('[data-dropdown-toggle]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = btn.dataset.dropdownToggle;
        const menu = document.getElementById(targetId);
        if (menu) {
          document.querySelectorAll('.dropdown-menu.open').forEach(m => { if (m !== menu) m.classList.remove('open'); });
          menu.classList.toggle('open');
        }
      });
    });
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
    });
  },

  /* Modal backdrop click-to-close */
  initModals() {
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', e => {
        if (e.target === backdrop) backdrop.classList.remove('open');
      });
    });
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.dataset.closeModal;
        this.closeModal(modalId);
      });
    });
    document.querySelectorAll('[data-close-panel]').forEach(btn => {
      btn.addEventListener('click', () => {
        const panelId = btn.dataset.closePanel;
        this.closePanel(panelId);
      });
    });
  },

  /* Tab switching */
  initTabs(containerId) {
    const container = document.getElementById(containerId) || document;
    container.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab;
        container.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        container.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = document.getElementById(targetId);
        if (target) target.classList.add('active');
      });
    });
  }
};
