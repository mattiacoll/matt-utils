import { forEachHTML } from '../misc/misc';

/**
 * Shorthand for `element.classList.add`, works with multiple nodes
 *
 * @param {Element|HTMLCollection|NodeList} el - A list of elements
 * @param {...String} classes - Classes to add
 */
export function addClass( el, ...classes ) {

	if ( el.length === undefined )
		addClassEl( el, ...classes );
	else {
		forEachHTML( el, ( currEl ) => {
			addClassEl( currEl, ...classes );
		});
	}

	/**
	 * Adds classes to a single element
	 *
	 * @param {Element} elem - An HTML element
	 * @param {...String} remClass - Classes to add
	 */
	function addClassEl( elem, ...remClass ) {
		remClass.forEach( ( singleClass ) => {
			elem.classList.add( singleClass );
		});
	}
}

/**
 * Shorthand for `element.classList.remove`, works with multiple nodes
 *
 * @param {Element|HTMLCollection|NodeList} el - A list of elements
 * @param {...String} classes - Classes to remove
 */
export function removeClass( el, ...classes ) {

	if ( el.length === undefined )
		removeClassEl( el, ...classes );
	else {
		forEachHTML( el, ( currEl ) => {
			removeClassEl( currEl, ...classes );
		});
	}

	/**
	 * Removes classes to a single element
	 *
	 * @param {Element} elem - An HTML element
	 * @param {...String} remClass - Classes to remove
	 */
	function removeClassEl( elem, ...remClass ) {
		remClass.forEach( ( singleClass ) => {
			elem.classList.remove( singleClass );
		});
	}
}



/**
 * Checks if an element has a class or not.
 * If multiple elements are passed the result is true only if all
 * the elements have all the specified classes.
 *
 * @param {Element|HTMLCollection|NodeList} el - A list of elements
 * @param {...String} classes - Classes to check the presence of
 *
 * @returns {Boolean} - The element has the class
 */
export function hasClass( el, ...classes ) {

	let hasCls = false;

	if ( el.length === undefined )
		hasCls = hasClassEl( el, ...classes );
	else {

		let numClasses = 0;

		forEachHTML( el, ( currEl ) => {
			if ( hasClassEl( currEl, ...classes ) )
				numClasses++;
		});

		hasCls = numClasses === el.length;

	}

	return hasCls;

	/**
	 * Checks if an element has a class or not
	 *
	 * @param {Element} elem - An HTML element
	 * @param {...String} hasClasses - Classes to check the presence of
	 *
	 * @returns {Boolean} - The element has the class
	 */
	function hasClassEl( elem, ...hasClasses ) {

		let numClasses = 0;

		hasClasses.forEach( ( cls ) => {
			if ( elem.classList.contains( cls ) )
				numClasses++;
		});

		return numClasses === hasClasses.length;

	}
}