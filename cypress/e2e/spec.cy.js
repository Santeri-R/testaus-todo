describe('Todo app', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(window) {
        window.localStorage.clear();
      },
    });
  });

  afterEach(() => {
    cy.clearLocalStorage();
  });

  it('loads the Todo app locally', () => {
    cy.location('origin').should('eq', 'http://localhost:5173');
    cy.contains('h1', 'Basic CRUD ToDo web app').should('be.visible');
    cy.get('#task-form').should('be.visible');
  });

  it('creates a task and keeps it after reload', () => {
    cy.get('#topic').type('Check automated tests');
    cy.get('#priority').select('high');
    cy.get('#description').type('Verify the GitHub Actions workflow');
    cy.get('#save-btn').click();

    cy.get('#task-list .task').should('have.length', 1);
    cy.get('#task-list .title').should('have.text', 'Check automated tests');
    cy.get('#task-list .desc').should(
      'have.text',
      'Verify the GitHub Actions workflow',
    );

    cy.reload();

    cy.get('#task-list .task').should('have.length', 1);
    cy.get('#task-list .title').should('have.text', 'Check automated tests');
  });
});