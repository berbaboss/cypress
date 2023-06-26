describe('test scenario', () => {
	before(()=>{
	  cy.log('this is before block')
	})
	beforeEach(() => {
	  cy.log('this is beforeEach block')
	})
	it('tesecase1', () => {
	  cy.log('this is tesecase1 block')
	})
	it('tesecase2', () => {
	  cy.log('this is tesecase2 block')
	})
	after(()=>{
	  cy.log('this is after block')
	})
	afterEach(()=>{
	  cy.log('this is afterEach block')    
	})
  })