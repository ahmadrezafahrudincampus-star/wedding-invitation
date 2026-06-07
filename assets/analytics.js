/**
 * ============================================================
 *  Wedding Invitation — Simple Analytics (localStorage)
 * ============================================================
 *  Lightweight, privacy-friendly analytics that stores
 *  page-view counters and visitor data in the browser's
 *  localStorage.  No external services required.
 *
 *  Usage:
 *    import { trackPageView, getAnalytics } from './analytics.js';
 *
 *    // Call once per page load
 *    trackPageView();
 *
 *    // Read stats (e.g. for an admin dashboard)
 *    const stats = getAnalytics();
 *    console.log(stats);
 * ============================================================
 */

/* ── Storage Keys ─────────────────────────────────────────────────── */
const KEY_TOTAL_VIEWS     = 'wedding_analytics_total_views';
const KEY_UNIQUE_VISITORS = 'wedding_analytics_unique_visitors';
const KEY_LAST_VISIT      = 'wedding_analytics_last_visit';
const KEY_VISITOR_ID       = 'wedding_analytics_visitor_id';
const KEY_VISITOR_SET      = 'wedding_analytics_visitor_set';

/* ── Helpers ──────────────────────────────────────────────────────── */

/**
 * Generate a simple pseudo-random visitor ID (UUID-v4-ish).
 * Crypto.randomUUID is preferred when available.
 */
function _generateVisitorId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback for older browsers
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Safely read a value from localStorage.
 */
function _get(key, fallback = null) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? val : fallback;
  } catch (_) {
    return fallback;
  }
}

/**
 * Safely write a value to localStorage.
 */
function _set(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_) {
    /* quota exceeded or private mode — silently fail */
  }
}

/* ── Public API ───────────────────────────────────────────────────── */

/**
 * Track a single page view.
 *
 * - Increments the total view counter.
 * - Assigns a persistent visitor ID if this is a first-time visitor
 *   and increments the unique-visitor counter.
 * - Updates the last-visit timestamp.
 */
function trackPageView() {
  // 1 ── Total views ────────────────────────────────────────────────
  const totalViews = parseInt(_get(KEY_TOTAL_VIEWS, '0'), 10) + 1;
  _set(KEY_TOTAL_VIEWS, String(totalViews));

  // 2 ── Unique visitors ────────────────────────────────────────────
  let visitorId = _get(KEY_VISITOR_ID);
  let uniqueVisitors = parseInt(_get(KEY_UNIQUE_VISITORS, '0'), 10);

  if (!visitorId) {
    // First visit from this browser
    visitorId = _generateVisitorId();
    _set(KEY_VISITOR_ID, visitorId);
    uniqueVisitors += 1;
    _set(KEY_UNIQUE_VISITORS, String(uniqueVisitors));

    // Also keep a JSON set of all known visitor IDs (useful for admin)
    try {
      const existingSet = JSON.parse(_get(KEY_VISITOR_SET, '[]'));
      existingSet.push(visitorId);
      _set(KEY_VISITOR_SET, JSON.stringify(existingSet));
    } catch (_) {
      _set(KEY_VISITOR_SET, JSON.stringify([visitorId]));
    }
  }

  // 3 ── Last visit timestamp ───────────────────────────────────────
  _set(KEY_LAST_VISIT, new Date().toISOString());

  return {
    total_views:     totalViews,
    unique_visitors: uniqueVisitors,
    visitor_id:      visitorId,
  };
}

/**
 * Retrieve current analytics data.
 *
 * @returns {{
 *   total_views:     number,
 *   unique_visitors: number,
 *   last_visit:      string | null
 * }}
 */
function getAnalytics() {
  return {
    total_views:     parseInt(_get(KEY_TOTAL_VIEWS, '0'), 10),
    unique_visitors: parseInt(_get(KEY_UNIQUE_VISITORS, '0'), 10),
    last_visit:      _get(KEY_LAST_VISIT, null),
  };
}

/**
 * Reset all analytics data (useful for testing / admin).
 */
function resetAnalytics() {
  [KEY_TOTAL_VIEWS, KEY_UNIQUE_VISITORS, KEY_LAST_VISIT, KEY_VISITOR_ID, KEY_VISITOR_SET]
    .forEach((key) => {
      try { localStorage.removeItem(key); } catch (_) { /* ignore */ }
    });
}

/* ── Exports ──────────────────────────────────────────────────────── */
if (typeof exports !== 'undefined') {
  exports.trackPageView = trackPageView;
  exports.getAnalytics = getAnalytics;
  exports.resetAnalytics = resetAnalytics;
} else {
  window.trackPageView = trackPageView;
  window.getAnalytics = getAnalytics;
  window.resetAnalytics = resetAnalytics;
}
