/**
 * Insert `el` before `after`
 *
 * @param {Element} el
 * @param {Element} after
 * @api public
 */

exports.before = function (el, after) {
  var parent = after.parentNode;
  parent.insertBefore(el, after);
};

/**
 * Insert `el` after `before`
 *
 * @param {Element} el
 * @param {Element} before
 * @api public
 */

exports.after = function (el, before) {
  var parent = before.parentNode;
  parent.insertBefore(el, before.nextSibling);
};

/**
 * Prepend `el` to `parent`
 *
 * @param {Element} el
 * @param {Element} parent
 * @api public
 */

exports.prepend = function (el, parent) {
  var first = parent.firstChild;
  parent.insertBefore(el, first);
};

/**
 * Append `el` to `parent`
 *
 * @param {Element} el
 * @param {Element} parent
 * @api public
 */

exports.append = function (el, parent) {
  parent.appendChild(el);
};