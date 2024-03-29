## Functions

<dl>
<dt><a href="#getAttr">getAttr(el, attr)</a> ⇒ <code>String</code> | <code>null</code></dt>
<dd><p>Shorthand for <code>element.getAttribute</code></p>
</dd>
<dt><a href="#setAttr">setAttr(el, attr, val)</a></dt>
<dd><p>Shorthand for <code>element.setAttribute</code></p>
</dd>
<dt><a href="#remAttr">remAttr(el, attr)</a></dt>
<dd><p>Shorthand for <code>element.removeAttribute</code></p>
</dd>
<dt><a href="#hasAttr">hasAttr(el, attr)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Shorthand for <code>element.hasAttribute</code></p>
</dd>
<dt><a href="#addClass">addClass(el, ...classes)</a></dt>
<dd><p>Shorthand for <code>element.classList.add</code>, works with multiple nodes</p>
</dd>
<dt><a href="#removeClass">removeClass(el, ...classes)</a></dt>
<dd><p>Shorthand for <code>element.classList.remove</code>, works with multiple nodes</p>
</dd>
<dt><a href="#hasClass">hasClass(el, ...classes)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if an element has a class or not.
If multiple elements are passed the result is true only if all
the elements have all the specified classes.</p>
</dd>
<dt><a href="#addEvent">addEvent(el, ev, fn, [opts])</a></dt>
<dd><p>Shorthand for <code>element.addEventListener</code></p>
</dd>
<dt><a href="#removeEvent">removeEvent(el, ev, fn, [opts])</a></dt>
<dd><p>Shorthand for <code>element.removeEventListener</code></p>
</dd>
<dt><a href="#forEachHTML">forEachHTML(els, fn, [scope])</a></dt>
<dd><p>Foreach polyfill for NodeList and HTMLCollection
<a href="https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/">https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/</a></p>
</dd>
<dt><a href="#nextFrame">nextFrame(fn)</a></dt>
<dd><p>Runs a function the next frame useful for effects
from <code>display:none</code> to <code>display:block</code> and transition</p>
</dd>
<dt><a href="#getTopPos">getTopPos(el, [topEl])</a> ⇒ <code>Number</code></dt>
<dd><p>Gets an element top position</p>
</dd>
<dt><a href="#getLeftPos">getLeftPos(el, [topEl])</a> ⇒ <code>Number</code></dt>
<dd><p>Gets an element left position</p>
</dd>
<dt><a href="#getElementIndex">getElementIndex(el)</a> ⇒ <code>Number</code></dt>
<dd><p>Similar to jQuery <code>$( el ).index()</code>
index start at 0</p>
</dd>
<dt><a href="#byId">byId(id)</a> ⇒ <code>Element</code> | <code>HTMLElement</code> | <code>null</code></dt>
<dd><p>Shorthand for <code>document.getElementById</code></p>
</dd>
<dt><a href="#byClass">byClass(selClass, [parent])</a> ⇒ <code>HTMLCollectionOf.&lt;Element&gt;</code></dt>
<dd><p>Shorthand for <code>document.getElementsByClassName</code></p>
</dd>
<dt><a href="#query">query(selector, [parent])</a> ⇒ <code>Element</code> | <code>HTMLElementTagNameMap</code> | <code>SVGElementTagNameMap</code> | <code>null</code></dt>
<dd><p>Shorthand for <code>document.querySelector</code></p>
</dd>
<dt><a href="#queryAll">queryAll(selector, [parent])</a> ⇒ <code>NodeList</code></dt>
<dd><p>Shorthand for <code>document.querySelectorAll</code></p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#foreachCB">foreachCB</a> : <code>function</code></dt>
<dd><p>Foreach callback</p>
</dd>
</dl>

<a name="getAttr"></a>

## getAttr(el, attr) ⇒ <code>String</code> \| <code>null</code>
Shorthand for `element.getAttribute`

**Kind**: global function  
**Returns**: <code>String</code> \| <code>null</code> - - The attribute's value  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> | An HTML element |
| attr | <code>String</code> | The attribute to retrieve |

<a name="setAttr"></a>

## setAttr(el, attr, val)
Shorthand for `element.setAttribute`

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> | An HTML element |
| attr | <code>String</code> | The attribute to retrieve |
| val | <code>String</code> | The value to set to the attribute |

<a name="remAttr"></a>

## remAttr(el, attr)
Shorthand for `element.removeAttribute`

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> | An HTML element |
| attr | <code>String</code> | The attribute to remove |

<a name="hasAttr"></a>

## hasAttr(el, attr) ⇒ <code>Boolean</code>
Shorthand for `element.hasAttribute`

**Kind**: global function  
**Returns**: <code>Boolean</code> - - Whether the attribute exists  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> | An HTML element |
| attr | <code>String</code> | The attribute to check the existance of |

<a name="addClass"></a>

## addClass(el, ...classes)
Shorthand for `element.classList.add`, works with multiple nodes

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> \| <code>HTMLCollection</code> \| <code>NodeList</code> | A list of elements |
| ...classes | <code>String</code> | Classes to add |

<a name="addClass..addClassEl"></a>

### addClass~addClassEl(elem, ...remClass)
Adds classes to a single element

**Kind**: inner method of [<code>addClass</code>](#addClass)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Element</code> \| <code>HTMLElement</code> | An HTML element |
| ...remClass | <code>String</code> | Classes to add |

<a name="removeClass"></a>

## removeClass(el, ...classes)
Shorthand for `element.classList.remove`, works with multiple nodes

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> \| <code>HTMLCollection</code> \| <code>NodeList</code> | A list of elements |
| ...classes | <code>String</code> | Classes to remove |

<a name="removeClass..removeClassEl"></a>

### removeClass~removeClassEl(elem, ...remClass)
Removes classes to a single element

**Kind**: inner method of [<code>removeClass</code>](#removeClass)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Element</code> \| <code>HTMLElement</code> | An HTML element |
| ...remClass | <code>String</code> | Classes to remove |

<a name="hasClass"></a>

## hasClass(el, ...classes) ⇒ <code>Boolean</code>
Checks if an element has a class or not.
If multiple elements are passed the result is true only if all
the elements have all the specified classes.

**Kind**: global function  
**Returns**: <code>Boolean</code> - - The element has the class  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> \| <code>HTMLCollection</code> \| <code>NodeList</code> | A list of elements |
| ...classes | <code>String</code> | Classes to check the presence of |

<a name="hasClass..hasClassEl"></a>

### hasClass~hasClassEl(elem, ...hasClasses) ⇒ <code>Boolean</code>
Checks if an element has a class or not

**Kind**: inner method of [<code>hasClass</code>](#hasClass)  
**Returns**: <code>Boolean</code> - - The element has the class  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Element</code> \| <code>HTMLElement</code> | An HTML element |
| ...hasClasses | <code>String</code> | Classes to check the presence of |

<a name="addEvent"></a>

## addEvent(el, ev, fn, [opts])
Shorthand for `element.addEventListener`

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> \| <code>Window</code> \| <code>Document</code> \| <code>MediaQueryList</code> | A list of elements |
| ev | <code>String</code> | Event's name |
| fn | <code>EventListenerOrEventListenerObject</code> | Event's function |
| [opts] | <code>Object</code> | Optional event options |

<a name="removeEvent"></a>

## removeEvent(el, ev, fn, [opts])
Shorthand for `element.removeEventListener`

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> \| <code>Window</code> \| <code>Document</code> \| <code>MediaQueryList</code> | A list of elements |
| ev | <code>String</code> | Event's name |
| fn | <code>EventListenerOrEventListenerObject</code> | Event's function |
| [opts] | <code>Object</code> | Optional event options |

<a name="forEachHTML"></a>

## forEachHTML(els, fn, [scope])
Foreach polyfill for NodeList and HTMLCollection
https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| els | <code>Array.&lt;any&gt;</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> | A list of elements |
| fn | [<code>foreachCB</code>](#foreachCB) | Callback containing ( value, index ) as arguments |
| [scope] | <code>function</code> | Scope |

<a name="nextFrame"></a>

## nextFrame(fn)
Runs a function the next frame useful for effects
from `display:none` to `display:block` and transition

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback |

<a name="getTopPos"></a>

## getTopPos(el, [topEl]) ⇒ <code>Number</code>
Gets an element top position

**Kind**: global function  
**Returns**: <code>Number</code> - Element's top position  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> |  | An HTML element |
| [topEl] | <code>Element</code> \| <code>HTMLElement</code> | <code>document.body</code> | Wrapping element |

<a name="getLeftPos"></a>

## getLeftPos(el, [topEl]) ⇒ <code>Number</code>
Gets an element left position

**Kind**: global function  
**Returns**: <code>Number</code> - Element's left position  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> |  | An HTML element |
| [topEl] | <code>Element</code> \| <code>HTMLElement</code> | <code>document.body</code> | Wrapping element |

<a name="getElementIndex"></a>

## getElementIndex(el) ⇒ <code>Number</code>
Similar to jQuery `$( el ).index()`
index start at 0

**Kind**: global function  
**Returns**: <code>Number</code> - - The element's index  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLElement</code> | An HTML element |

<a name="byId"></a>

## byId(id) ⇒ <code>Element</code> \| <code>HTMLElement</code> \| <code>null</code>
Shorthand for `document.getElementById`

**Kind**: global function  
**Returns**: <code>Element</code> \| <code>HTMLElement</code> \| <code>null</code> - - The selected element  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The selector's id |

<a name="byClass"></a>

## byClass(selClass, [parent]) ⇒ <code>HTMLCollectionOf.&lt;Element&gt;</code>
Shorthand for `document.getElementsByClassName`

**Kind**: global function  
**Returns**: <code>HTMLCollectionOf.&lt;Element&gt;</code> - - The selected elements  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selClass | <code>String</code> |  | The selector's class |
| [parent] | <code>Element</code> \| <code>HTMLElement</code> \| <code>Document</code> | <code>document</code> | Parent element |

<a name="query"></a>

## query(selector, [parent]) ⇒ <code>Element</code> \| <code>HTMLElementTagNameMap</code> \| <code>SVGElementTagNameMap</code> \| <code>null</code>
Shorthand for `document.querySelector`

**Kind**: global function  
**Returns**: <code>Element</code> \| <code>HTMLElementTagNameMap</code> \| <code>SVGElementTagNameMap</code> \| <code>null</code> - - The selected element  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>String</code> |  | Selector |
| [parent] | <code>Element</code> \| <code>HTMLElement</code> \| <code>Document</code> | <code>document</code> | Parent element |

<a name="queryAll"></a>

## queryAll(selector, [parent]) ⇒ <code>NodeList</code>
Shorthand for `document.querySelectorAll`

**Kind**: global function  
**Returns**: <code>NodeList</code> - - The selected element  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>String</code> |  | Selector |
| [parent] | <code>Element</code> \| <code>HTMLElement</code> \| <code>Document</code> | <code>document</code> | Parent element |

<a name="foreachCB"></a>

## foreachCB : <code>function</code>
Foreach callback

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Element</code> \| <code>HTMLElement</code> | The element |
| [index] | <code>Number</code> | The index of the element |

