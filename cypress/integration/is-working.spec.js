describe('constructor works good', function () {
    before(function () {
        cy.visit('http://localhost:3000');
    });

    describe('opens popup modals', () => {
        it('open/close modal', function () {
            cy.get('[data-cy=page]').as('page');
            cy.get('[data-cy=ingredient]').first().as('ingredient');
            cy.get('@ingredient').click();
            cy.get('[data-cy=modal]').as('modal');
            cy.get('@modal').find('[data-cy=details]').should('exist');
            cy.get('@modal').find('[data-cy=close]').click();
            cy.get('@page').find('[data-cy=details]').should('not.exist');
        });
    });


    describe('app works correctly with routes', function() {

        it('should open Конструктор', function() {
            cy.get('[class^=app-header_nav__1_idE]').contains('Конструктор').click();
            cy.contains('Соберите бургер');
        });

        it('should open Лента заказов', function() {
            cy.get('[class^=app-header_nav__1_idE]').contains('Лента заказов').click();
            cy.contains('Выполнено за все время');
        });
    });

    it('should make drag and drop', () => {
        cy.get('[data-cy=page]').as('ingredientsContainer');
        cy.get('@ingredientsContainer').find('h2').contains('Булки').next().as('buns');
        cy.get('@ingredientsContainer').find('h2').contains('Соусы').next().as('sauces');
        cy.get('@ingredientsContainer').find('h2').contains('Начинки').next().as('mains');
        cy.get('[data-cy="dropTarget"]').as('dropTarget');

        cy.get('@buns').find('[data-cy="ingredient"]').first().as('dragBun');
        cy.get('@sauces').find('[data-cy="ingredient"]').first().as('dragSauce');
        cy.get('@mains').find('[data-cy="ingredient"]').first().as('dragMains');

        cy.get('@dragBun').trigger('dragstart');
        cy.get('@dropTarget').trigger('drop');

        cy.get('@dragSauce').trigger('dragstart');
        cy.get('@dropTarget').trigger('drop');

        cy.get('@dragMains').trigger('dragstart');
        cy.get('@dropTarget').trigger('drop');

        cy.get('@dropTarget').should('contain', 'Краторная булка N-200i');
        cy.get('@dropTarget').should('contain', 'Соус Spicy-X');
        cy.get('@dropTarget').should('contain', 'Филе Люминесцентного тетраодонтимформа');
    });
});
