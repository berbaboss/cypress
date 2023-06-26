import {selectMenu,selectItemToCart,checkItem,checkPriceJquery} from '../pages/main.cy.js' 

describe('template spec', () => {
	let data
	let userName
	let password
	const allProduct = 'All Products'
	let listItem = []
	let priceItem = []
	const totalPrice = '$38.98'

	beforeEach(() => {
		cy.fixture('data').then((dataJson) => {
			data = dataJson
			userName = data.userName
			password = data.password
		})
	  })
  /* ==== Test Created with Cypress Studio ==== */
  	it('succes order', function() {
        cy.login(userName,password);
		selectMenu(allProduct);
		selectItemToCart('Vintage Minature Car',listItem,priceItem);
		selectItemToCart('Wooden Baby Worm',listItem,priceItem);
		cy.contains('View Basket').click();
		checkItem(listItem)
		// cy.wrap(listItem).should('include','Vintage Minature Car')
		checkPriceJquery(priceItem)
		cy.get('#grandTotal').contains(totalPrice)
		cy.xpath('//a[.="Checkout"]').click();
		cy.contains('Order complete!')
    });
})



	// cy.wrap(null).then(() => {
		// 	return testPromise().then((val) => {
		// 		cy.log(val)
		// 	})
		// 	.catch((err) => {
		// 		cy.log(err)
		// 	})
		// })