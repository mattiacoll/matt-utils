declare module "index" {
    /**
     * Shorthand for `document.getElementById`
     *
     * @param {String} id - The selector's id
     *
     * @returns {Element|null} - The selected element
     */
    export function byId(id: string): Element | null;
    /**
     * Shorthand for `document.getElementsByClassName`
     *
     * @param {String} selClass - The selector's class
     * @param {Element} [parent=document] - Parent element
     *
     * @returns {HTMLCollection} - The selected elements
     */
    export function byClass(selClass: string, parent?: Element | undefined): HTMLCollection;
    /**
     * Shorthand for `document.querySelector`
     *
     * @param {String} selector - Selector
     * @param {Element} [parent=document] - Parent element
     *
     * @returns {Element|null} - The selected element
     */
    export function query(selector: string, parent?: Element | undefined): Element | null;
    /**
     * Shorthand per `document.querySelectorAll`
     *
     * @param {String} selector - Selector
     * @param {Element} [parent=document] - Parent element
     *
     * @returns {NodeList} - The selected element
     */
    export function queryAll(selector: string, parent?: Element | undefined): NodeList;
    /**
     * Foreach polyfill for NodeList and HTMLCollection
     * https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
     *
     * @param {Array|NodeList|HTMLCollection} els - A list of elements
     * @param {foreachCB} fn - Callback containing ( value, index ) as arguments
     * @param {Scope} [scope] - Scope
     */
    export function forEachHTML(els: Array | NodeList | HTMLCollection, fn: foreachCB, scope?: any): void;
    /**
     * Foreach callback
     *
     * @callback foreachCB
     * @param {Element} value - The element
     * @param {Number} [index] - The index of the element
     */
    /**
     * Runs a function the next frame useful for effects
     * from `display:none` to `display:block` and transition
     *
     * @param {Function} fn - Callback
     */
    export function nextFrame(fn: Function): void;
    /**
     * Shorthand for `element.classList.add`, works with multiple nodes
     *
     * @param {Element|HTMLCollection|NodeList} el - A list of elements
     * @param {...String} classes - Classes to add
     */
    export function addClass(el: Element | HTMLCollection | NodeList, ...classes: string[]): void;
    /**
     * Shorthand for `element.classList.remove`, works with multiple nodes
     *
     * @param {Element|HTMLCollection|NodeList} el - A list of elements
     * @param {...String} classes - Classes to remove
     */
    export function removeClass(el: Element | HTMLCollection | NodeList, ...classes: string[]): void;
    /**
     * Checks if an element has a class or not
     * // TODO: check for multiple classes and multiple elements
     *
     * @param {Element} el - An HTML element
     * @param {...String} classes - Classes to check the presence of
     *
     * @returns {Boolean} - The element has the class
     */
    export function hasClass(el: Element, ...classes: string[]): boolean;
    /**
     * Shorthand for `element.addEventListener`, works with multiple elements
     *
     * @param {Element|HTMLCollection|NodeList} el - A list of elements
     * @param {String} ev - Event's name
     * @param {Function} fn - Event's function
     * @param {Options} [opts] - Optional event options
     */
    export function addEvent(el: Element | HTMLCollection | NodeList, ev: string, fn: Function, opts?: any): void;
    /**
     * Shorthand for `element.removeEventListener`, works with multiple elements
     *
     * @param {Element|HTMLCollection|NodeList} el - A list of elements
     * @param {String} ev - Event's name
     * @param {Function} fn - Event's function
     * @param {Options} [opts] - Optional event options
     */
    export function removeEvent(el: Element | HTMLCollection | NodeList, ev: string, fn: Function, opts?: any): void;
    /**
     * Gets an element top position
     *
     * @param {Element} el - An HTML element
     * @param {Element} [topEl=document.body] - Wrapping element
     *
     * @returns {Number} Element's top position
     */
    export function getTopPos(el: Element, topEl?: Element | undefined): number;
    /**
     * Gets an element left position
     *
     * @param {Element} el - An HTML element
     * @param {Element} [topEl=document.body] - Wrapping element
     *
     * @returns {Number} Element's left position
     */
    export function getLeftPos(el: Element, topEl?: Element | undefined): number;
    /**
     * Similar to jQuery `$( el ).index()`
     *
     * @param {Element} el - An HTML element
     *
     * @returns {Number} - The element's index
     */
    export function getElementIndex(el: Element): number;
    /**
     * Foreach callback
     */
    export type foreachCB = (value: Element, index?: number) => any;
}
