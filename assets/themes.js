/**
 * ============================================================
 *  Wedding Invitation — Premium Theme System
 * ============================================================
 *  Provides 5 curated themes that swap CSS custom-properties,
 *  load the required Google Fonts, and optionally patch the
 *  live Tailwind CDN config.
 *
 *  Usage:
 *    import { applyTheme, getThemeList, THEMES } from './themes.js';
 *    applyTheme('golden_blossom');
 * ============================================================
 */

/* ------------------------------------------------------------------ */
/*  Theme Definitions                                                  */
/* ------------------------------------------------------------------ */

const THEMES = {

  /* ── 1. Watercolor Green (DEFAULT — current site look) ──────────── */
  watercolor_green: {
    id:          'watercolor_green',
    name:        'Watercolor Green',
    description: 'Elegant gold and sage-green palette with a soft cream background — timeless botanical charm.',

    // Colors
    primary_color:      '#C9A96E',
    primary_hover:      '#B5955C',
    bg_color:           '#FAF7F2',
    text_dark:          '#2C3E2B',
    text_muted:         '#5A6E59',
    card_bg:            'rgba(255, 255, 255, 0.90)',

    // Fonts
    font_heading:       "'Cormorant Garamond', serif",
    font_body:          "'DM Sans', sans-serif",
    font_script:        "'Great Vibes', cursive",

    // Font colors
    font_color_names:    '#2C3E2B',
    font_color_headings: '#2C3E2B',
    font_color_body:     '#5A6E59',

    // Button / accent
    btn_shadow_color:   'rgba(201, 169, 110, 0.35)',

    // Tailwind-specific extras
    tailwind_primary:   '#C9A96E',
    tailwind_sage_light:'#E2E8E2',
    tailwind_sage_dark: '#2C3E2B',
    tailwind_sage_muted:'#5A6E59',

    // Google Fonts (families already used by default stylesheet)
    google_fonts_url:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Great+Vibes&family=Cinzel:wght@400;500;600;700&display=swap',
  },

  /* ── 2. Golden Blossom ──────────────────────────────────────────── */
  golden_blossom: {
    id:          'golden_blossom',
    name:        'Golden Blossom',
    description: 'Rich gold on ivory with warm amber accents — luxurious and sun-kissed romance.',

    primary_color:      '#D4AF37',
    primary_hover:      '#BF9B30',
    bg_color:           '#FFFFF0',
    text_dark:          '#3D2B1F',
    text_muted:         '#7A6652',
    card_bg:            'rgba(255, 253, 245, 0.92)',

    font_heading:       "'Playfair Display', serif",
    font_body:          "'Lato', sans-serif",
    font_script:        "'Great Vibes', cursive",

    font_color_names:    '#3D2B1F',
    font_color_headings: '#5C4033',
    font_color_body:     '#7A6652',

    btn_shadow_color:   'rgba(212, 175, 55, 0.40)',

    tailwind_primary:   '#D4AF37',
    tailwind_sage_light:'#F5E6C8',
    tailwind_sage_dark: '#3D2B1F',
    tailwind_sage_muted:'#7A6652',

    google_fonts_url:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Great+Vibes&display=swap',
  },

  /* ── 3. Rustic Wood ─────────────────────────────────────────────── */
  rustic_wood: {
    id:          'rustic_wood',
    name:        'Rustic Wood',
    description: 'Warm brown and linen tones with earthy elegance — perfect for garden or barn celebrations.',

    primary_color:      '#8B6F47',
    primary_hover:      '#765D3B',
    bg_color:           '#F5F0E8',
    text_dark:          '#3E2F1C',
    text_muted:         '#7A6B57',
    card_bg:            'rgba(253, 249, 242, 0.92)',

    font_heading:       "'Libre Baskerville', serif",
    font_body:          "'Source Sans 3', sans-serif",
    font_script:        "'Great Vibes', cursive",

    font_color_names:    '#3E2F1C',
    font_color_headings: '#5C4A32',
    font_color_body:     '#7A6B57',

    btn_shadow_color:   'rgba(139, 111, 71, 0.35)',

    tailwind_primary:   '#8B6F47',
    tailwind_sage_light:'#E8DFD0',
    tailwind_sage_dark: '#3E2F1C',
    tailwind_sage_muted:'#7A6B57',

    google_fonts_url:
      'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Great+Vibes&display=swap',
  },

  /* ── 4. Royal Navy ──────────────────────────────────────────────── */
  royal_navy: {
    id:          'royal_navy',
    name:        'Royal Navy',
    description: 'Deep navy and regal gold — a dark, sophisticated palette for an opulent evening affair.',

    primary_color:      '#C5A55A',
    primary_hover:      '#B3944E',
    bg_color:           '#0F1D33',
    text_dark:          '#E8E0D0',
    text_muted:         '#A9B7C8',
    card_bg:            'rgba(22, 39, 68, 0.88)',

    font_heading:       "'Cinzel', serif",
    font_body:          "'Raleway', sans-serif",
    font_script:        "'Great Vibes', cursive",

    font_color_names:    '#C5A55A',
    font_color_headings: '#E8E0D0',
    font_color_body:     '#A9B7C8',

    btn_shadow_color:   'rgba(197, 165, 90, 0.45)',

    tailwind_primary:   '#C5A55A',
    tailwind_sage_light:'#1B365D',
    tailwind_sage_dark: '#E8E0D0',
    tailwind_sage_muted:'#A9B7C8',

    google_fonts_url:
      'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Great+Vibes&display=swap',
  },

  /* ── 5. Sakura Blush ────────────────────────────────────────────── */
  sakura_blush: {
    id:          'sakura_blush',
    name:        'Sakura Blush',
    description: 'Soft blush-pink and airy white — a delicate, romantic palette inspired by cherry blossoms.',

    primary_color:      '#D4919B',
    primary_hover:      '#C07D87',
    bg_color:           '#FFF8F6',
    text_dark:          '#4A3035',
    text_muted:         '#8C6B72',
    card_bg:            'rgba(255, 252, 250, 0.92)',

    font_heading:       "'Sacramento', cursive",
    font_body:          "'Quicksand', sans-serif",
    font_script:        "'Great Vibes', cursive",

    font_color_names:    '#4A3035',
    font_color_headings: '#6B4550',
    font_color_body:     '#8C6B72',

    btn_shadow_color:   'rgba(212, 145, 155, 0.35)',

    tailwind_primary:   '#D4919B',
    tailwind_sage_light:'#F5DDE0',
    tailwind_sage_dark: '#4A3035',
    tailwind_sage_muted:'#8C6B72',

    google_fonts_url:
      'https://fonts.googleapis.com/css2?family=Sacramento&family=Quicksand:wght@300;400;500;600;700&family=Great+Vibes&display=swap',
  },
};

/* ------------------------------------------------------------------ */
/*  Internal Helpers                                                    */
/* ------------------------------------------------------------------ */

/**
 * Inject a Google Fonts <link> if one for this theme hasn't been added yet.
 * Uses a data-attribute so we can detect duplicates without parsing URLs.
 */
function _loadGoogleFonts(themeId, url) {
  const ATTR = 'data-theme-fonts';
  const existing = document.querySelector(`link[${ATTR}="${themeId}"]`);
  if (existing) return; // already loaded

  const link  = document.createElement('link');
  link.rel    = 'stylesheet';
  link.href   = url;
  link.setAttribute(ATTR, themeId);
  document.head.appendChild(link);
}

/**
 * Map a theme property key → the CSS custom-property name used in style.css
 */
const _CSS_VAR_MAP = {
  primary_color:      '--color-primary',
  primary_hover:      '--color-primary-hover',
  bg_color:           '--color-bg-cream',
  text_dark:          '--color-text-dark',
  text_muted:         '--color-text-muted',
  card_bg:            '--color-card-bg',
  font_heading:       '--font-heading',
  font_body:          '--font-body',
  font_script:        '--font-script',
  font_color_names:   '--color-font-names',
  font_color_headings:'--color-font-headings',
  font_color_body:    '--color-font-body',
  btn_shadow_color:   '--btn-shadow-color',
};

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

/**
 * Apply a theme by its ID.
 *
 * 1. Sets every mapped CSS variable on :root
 * 2. Loads the theme's Google Fonts (idempotent)
 * 3. Patches the live Tailwind CDN config if `window.tailwind` exists
 *
 * @param {string} themeId – one of the keys in THEMES
 * @returns {boolean} true on success
 */
function applyTheme(themeId) {
  const theme = THEMES[themeId];
  if (!theme) {
    console.warn(`[themes] Unknown theme "${themeId}". Available: ${Object.keys(THEMES).join(', ')}`);
    return false;
  }

  const root = document.documentElement.style;

  // 1 ── Inject CSS custom properties ──────────────────────────────
  for (const [prop, cssVar] of Object.entries(_CSS_VAR_MAP)) {
    if (theme[prop] !== undefined) {
      root.setProperty(cssVar, theme[prop]);
    }
  }

  // Also set --font-cinzel so existing Cinzel references keep working
  root.setProperty('--font-cinzel', "'Cinzel', serif");

  // 2 ── Load Google Fonts ─────────────────────────────────────────
  if (theme.google_fonts_url) {
    _loadGoogleFonts(themeId, theme.google_fonts_url);
  }

  // 3 ── Patch Tailwind CDN config (if present) ────────────────────
  if (typeof window !== 'undefined' && window.tailwind && window.tailwind.config) {
    try {
      const tw = window.tailwind.config;

      // Make sure nested objects exist
      tw.theme            = tw.theme            || {};
      tw.theme.extend     = tw.theme.extend     || {};
      tw.theme.extend.colors = tw.theme.extend.colors || {};
      tw.theme.extend.fontFamily = tw.theme.extend.fontFamily || {};

      // Colors
      tw.theme.extend.colors.primary    = theme.tailwind_primary;
      tw.theme.extend.colors['sage-light'] = theme.tailwind_sage_light;
      tw.theme.extend.colors['sage-dark']  = theme.tailwind_sage_dark;
      tw.theme.extend.colors['sage-muted'] = theme.tailwind_sage_muted;

      // Font families (array format Tailwind expects)
      tw.theme.extend.fontFamily.heading = [theme.font_heading];
      tw.theme.extend.fontFamily.body    = [theme.font_body];
      tw.theme.extend.fontFamily.script  = [theme.font_script];
    } catch (err) {
      console.warn('[themes] Could not patch Tailwind config:', err);
    }
  }

  // 4 ── Persist choice (optional, handy for CMS reloads) ──────────
  try {
    localStorage.setItem('wedding_theme', themeId);
  } catch (_) { /* private browsing / quota exceeded – ignore */ }

  console.info(`[themes] Applied theme: ${theme.name}`);
  return true;
}

/**
 * Return an array suitable for populating a CMS theme-picker dropdown.
 *
 * @returns {Array<{id: string, name: string, description: string}>}
 */
function getThemeList() {
  return Object.values(THEMES).map(({ id, name, description }) => ({
    id,
    name,
    description,
  }));
}

/**
 * Convenience: restore the last-applied theme from localStorage.
 * Falls back to 'watercolor_green' if nothing was stored.
 *
 * @returns {string} the themeId that was applied
 */
function restoreTheme() {
  let stored = 'watercolor_green';
  try {
    stored = localStorage.getItem('wedding_theme') || 'watercolor_green';
  } catch (_) { /* ignore */ }
  applyTheme(stored);
  return stored;
}

/* ------------------------------------------------------------------ */
/*  Exports                                                            */
/* ------------------------------------------------------------------ */
if (typeof exports !== 'undefined') {
  exports.THEMES = THEMES;
  exports.applyTheme = applyTheme;
  exports.getThemeList = getThemeList;
  exports.restoreTheme = restoreTheme;
} else {
  window.THEMES = THEMES;
  window.applyTheme = applyTheme;
  window.getThemeList = getThemeList;
  window.restoreTheme = restoreTheme;
}
