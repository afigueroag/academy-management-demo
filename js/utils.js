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

  /* ---- Chip de categoría ---- */
  categoryChip(catId) {
    const cat = DB.getCategory(catId);
    if (!cat) return '';
    return `<span class="chip" style="background:${cat.color}22;color:${cat.color};border-color:${cat.color}44">${cat.name}</span>`;
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
            <div class="sidebar-logo-icon">🎭</div>
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
    const all = [
      { href: 'pages/home.html',         icon: '🏠', label: 'Inicio',          roles: ['admin','receptionist','instructor','student'] },
      { href: 'pages/students.html',     icon: '👥', label: 'Estudiantes',     roles: ['admin','receptionist'] },
      { href: 'pages/instructors.html',  icon: '🧑‍🏫', label: 'Instructores',  roles: ['admin','receptionist'] },
      { href: 'pages/classes.html',      icon: '📚', label: 'Clases',          roles: ['admin','receptionist','instructor','student'] },
      { href: 'pages/categories.html',   icon: '🏷️', label: 'Categorías',     roles: ['admin'] },
      { href: 'pages/sales.html',        icon: '💳', label: 'Ventas',          roles: ['admin','receptionist'] },
      { href: 'pages/dashboard.html',    icon: '📊', label: 'Finanzas',        roles: ['admin'] },
      { href: 'pages/settings.html',     icon: '⚙️', label: 'Configuración',   roles: ['admin','receptionist','instructor','student'] },
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
