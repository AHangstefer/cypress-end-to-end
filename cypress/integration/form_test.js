


describe('form test', ()=>{
    it('test that the form is working', () =>{
        cy.visit('/')

        cy.get('[for=name]>input')
        .type('Anna Davis')
        .should('have.value', 'Anna Davis')

        //const email= 'annalikesherself@gmail.com';
        cy.get('[for="email"]> input')
        .type(email)
        .should('have.value', email)

        //  const motivation = "I want to help others in the company"
        //  cy.get('textarea#motivation')
        //  .type(motivation)
        //  .should('have.value', motivation)

        cy.get('select#positions')
        .select('Yard Work')
        .should('have.value', "Yard Work")

        cy.get('[data-cy="terms"] > input')
        .click()
        .should('have.checked', true)

        cy.get('button#submit')
        .should('be.disabled')
    })

    it()
    
})