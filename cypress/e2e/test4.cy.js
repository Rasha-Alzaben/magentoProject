/// <reference types= "cypress" />




Cypress.on("uncaught:exception", (err, runnable) => {

    return false
  
   })
   Cypress.Commands.add("add_items",()=>{
    let RandomItemsSelect=Math.floor(Math.random()*4)
    cy.get('.product-items').find('.product-item').eq(RandomItemsSelect).click()

    let RandomSize=Math.floor(Math.random()*3)

    let RandomColor=Math.floor(Math.random()*2)
    


    cy.get('.swatch-attribute-options').find('.swatch-option').eq(RandomSize).click()
    if(RandomColor.length>=0){
    cy.get('.swatch-attribute.color > .swatch-attribute-options').find('.swatch-option').eq(RandomColor).click()}
    else{cy.get('.swatch-attribute.color > .swatch-attribute-options').find('.swatch-option').eq(0).click()}
    cy.get('#product-addtocart-button').click()

    cy.get('.stock > span').invoke('text').then((theText)=>{
     if(theText=='In stock'){
      cy.get('#product-addtocart-button').click()
      }else{
      alert("sorry this item is not found")
      }
   })
   })


describe('Magnote', () => {
  it('add randomly form woman or gear catigory', () => {
   
    cy.visit('https://magento.softwaretestingboard.com/')
    
cy.wait(3000)

    let selecteItemArray=["Women","Gear"]
    let Randomtest =Math.floor(Math.random()*selecteItemArray.length)
    
   
   cy.contains(selecteItemArray[Randomtest]).click()

   if(Randomtest==0){
    cy.add_items()
   }else{
    let RandomItemsSelect=Math.floor(Math.random()*4)
    cy.get('.product-items').find('.product-item').eq(RandomItemsSelect).click()

    cy.get('.stock > span').invoke('text').then((theText)=>{
      if(theText=='In stock'){
       cy.get('#product-addtocart-button').click()
       }else{
       alert("sorry this item is not found")
       }
    })
   }
   
     cy.wait(5000)


  })
  it('add to men catigory',()=>{
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.wait(3000)

    cy.get('#ui-id-5').click()

      cy.add_items()

     })

   

  
})
describe('login ',()=>{
  it("test login",()=>{
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9nZW8taW5zdWxhdGVkLWpvZ2dpbmctcGFudC5odG1s/")

    cy.get('#email').type("al.zabenr13@gmail.com")
    cy.get('#pass').type('123456-zzzzzz')
    cy.get('#send2').click()
  })
})