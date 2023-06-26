export const selectMenu = (name) => {
	cy.xpath(`//a[.="${name}"]`).click();
}

export const selectItemToCart = (name,nameList,priceList) => {
	nameList.push(`${name}`)
	cy.xpath(`//a[.="${name}"]//parent::a//following::p[3]`).then((val) => {
		let price = val.text();
		// let num = parseFloat(price.replace('$',''));
		priceList.push(price)
	})
	cy.xpath(`(//a[.="${name}"]//parent::a//following::a[@class="btn btn-primary addToCart"])[1]`).click();
	cy.get('.cart > :nth-child(1)').contains('products in your Basket')
}

export const checkItem = (list) => {
	list.map((listItem) => cy.contains(listItem));
}

export const checkPriceJquery = (list) => {
	cy.get(list).each(val => cy.contains(val))
}










// export const testPromise = () => {
// 	return new Cypress.Promise((resolve, reject) => {
// 	setTimeout(() => {
//         let waited = true
// 		waited ? resolve('success') : reject('fail')
//       }, 1000)
//  })
// }

// export const asnyctest = async () => {
// 	try {
// 		const test = await testPromise
// 		cy.log(test)
// 	} catch(error) {
// 		cy.log(error)
// 	}
// }