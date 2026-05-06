/* ================================================================
   AUTH — simulación de sesión sin backend real
   ================================================================ */

window.Auth = {

  /* Usuarios de demo por rol (para el switcher) */
  DEMO_USERS: {
    admin:        'user_001',
    receptionist: 'user_002',
    instructor:   'user_003',
    student:      'user_005'
  },

  login(email, password) {
    const user = DB.getUserByEmail(email);
    if (!user || !user.is_active) {
      return { success: false, error: 'Credenciales incorrectas o cuenta inactiva.' };
    }
    /* En el demo cualquier contraseña funciona */
    this._saveSession(user);
    return { success: true, user };
  },

  simulateLogin(role) {
    const userId = this.DEMO_USERS[role];
    if (!userId) return;
    const user = DB.getUser(userId);
    if (user) {
      this._saveSession(user);
      this.redirectToDashboard(user);
    }
  },

  logout() {
    localStorage.removeItem('demo_session');
    window.location.href = this._getPublicBase() + 'pages/login.html';
  },

  getCurrentUser() {
    try {
      const raw = localStorage.getItem('demo_session');
      if (!raw) return null;
      const session = JSON.parse(raw);
      /* Siempre re-fetch desde MOCK_DB para tener datos actualizados */
      return DB.getUser(session.userId) || null;
    } catch { return null; }
  },

  isAuthenticated() {
    return this.getCurrentUser() !== null;
  },

  requireAuth() {
    if (!this.isAuthenticated()) {
      window.location.href = this._getPublicBase() + 'pages/login.html';
      return false;
    }
    return true;
  },

  requireRole(roles) {
    const user = this.getCurrentUser();
    if (!user || !roles.includes(user.role)) {
      window.location.href = this._getPublicBase() + 'pages/login.html';
      return false;
    }
    return true;
  },

  switchRole(role) {
    const userId = this.DEMO_USERS[role];
    if (!userId) return;
    const user = DB.getUser(userId);
    if (user) {
      this._saveSession(user);
      /* Recarga la página actual con el nuevo rol */
      window.location.reload();
    }
  },

  redirectToDashboard(user) {
    window.location.href = this._getPublicBase() + 'pages/home.html';
  },

  _saveSession(user) {
    localStorage.setItem('demo_session', JSON.stringify({ userId: user.id, role: user.role, loginAt: Date.now() }));
  },

  _getPublicBase() {
    const path = window.location.pathname;
    if (path.includes('/pages/')) return '../';
    return '';
  }
};
