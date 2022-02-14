describe('Demo Suite', () => {
	before('Common before hook', () => {
		cy.log('common before hook');
	});

	beforeEach(() => {
		cy.log('common beforeeach');
	});

	describe('Sub Suite 1', () => {
		before(() => {
			cy.log('Before hook Sub Suite 1');
		});

		beforeEach(() => {
			cy.log('Before each subsuite 1');
		});

		it('Sub suite 1 test 1', () => {
			cy.log('Sub suite 1 test 1');
		});

		it('Sub suite 1 test 2', () => {
			cy.log('Sub suite 1 test 2');
		});
	});

	describe('Sub Suite 2', () => {
		before(() => {
			cy.log('Before hook Sub Suite 2');
		});

		beforeEach(() => {
			cy.log('Before each subsuite 2');
		});

		it('Sub suite 2 test 1', () => {
			cy.log('Sub suite 2 test 1');
		});

		it('Sub suite 2 test 2', () => {
			cy.log('Sub suite 2 test 2');
		});
	});
});
