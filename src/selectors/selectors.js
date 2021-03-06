/**
 * Shorthand for `document.getElementById`
 *
 * @param {String} id - The selector's id
 *
 * @returns {Element|null} - The selected element
 */
export function byId( id ) {
	return document.getElementById( id );
}

/**
 * Shorthand for `document.getElementsByClassName`
 *
 * @param {String} selClass - The selector's class
 * @param {Element} [parent=document] - Parent element
 *
 * @returns {HTMLCollection} - The selected elements
 */
export function byClass( selClass, parent = document ) {
	return parent.getElementsByClassName( selClass );
}


/**
 * Shorthand for `document.querySelector`
 *
 * @param {String} selector - Selector
 * @param {Element} [parent=document] - Parent element
 *
 * @returns {Element|null} - The selected element
 */
export function query( selector, parent = document ) {
	return parent.querySelector( selector );
}


/**
 * Shorthand per `document.querySelectorAll`
 *
 * @param {String} selector - Selector
 * @param {Element} [parent=document] - Parent element
 *
 * @returns {NodeList} - The selected element
 */
export function queryAll( selector, parent = document ) {
	return parent.querySelectorAll( selector );
}