/**
 * Shorthand for `element.getAttribute`
 *
 * @param {Element} el - An HTML element
 * @param {String} attr - The attribute to retrieve
 *
 * @returns {String} - The attribute's value
 */
export function getAttr( el, attr ) {
	return el.getAttribute( attr );
}

/**
 * Shorthand for `element.setAttribute`
 *
 * @param {Element} el - An HTML element
 * @param {String} attr - The attribute to retrieve
 * @param {String} val - The value to set to the attribute
 */
export function setAttr( el, attr, val ) {
	el.setAttribute( attr, val );
}

/**
 * Shorthand for `element.removeAttribute`
 *
 * @param {Element} el - An HTML element
 * @param {String} attr - The attribute to remove
 */
export function remAttr( el, attr ) {
	el.removeAttribute( attr );
}

/**
 * Shorthand for `element.hasAttribute`
 *
 * @param {Element} el - An HTML element
 * @param {String} attr - The attribute to check the existance of
 *
 * @returns {Boolean} - Whether the attribute exists
 */
export function hasAttr( el, attr ) {
	return el.hasAttribute( attr );
}