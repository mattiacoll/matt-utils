function t(t){return document.getElementById(t)}function l(t){let n=0;for(;t=t.previousElementSibling;)n++;return n}

// @ts-check

document.body.innerHTML = `
	<div id="get-el-1" class="outer">
		<div id="inner-1" class="inner"></div>
	</div>
	<div id="get-el-2" class="outer">
		<div id="inner-2" class="inner"></div>
	</div>
	<div id="get-el-3" class="outer">
		<div id="inner-3" class="inner"></div>
		<div id="inner-3-1" class="inner"></div>
		<div id="inner-3-2" class="inner"></div>
		<div id="inner-3-3" class="inner"></div>
	</div>
`;

describe( 'Indexes', () => {

	// add 1 class
	test( 'Get parent index', () => {

		const el = t( 'get-el-3' );

		expect( el ).not.toBe( null );
		expect( l( el ) ).toEqual( 2 );
	});

	test( 'Get child index', () => {

		const el = t( 'inner-3-3' );

		expect( el ).not.toBe( null );
		expect( l( el ) ).toEqual( 3 );
	});

});
