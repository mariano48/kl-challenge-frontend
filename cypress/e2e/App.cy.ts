import { initialMovies } from "../fixtures/movies";
import { suggestion } from "../fixtures/suggestions";

const API_BASE_URL = Cypress.env("API_BASE_URL");

describe("App", () => {
  it("should render correctly", () => {
    cy.intercept("GET", `${API_BASE_URL}/movies`, []).as("movies");
    cy.visit("/");
    cy.get('[data-testid="map"]').should("be.visible");
    cy.get('[data-testid="search-bar"]').as("search-bar").should("be.visible");
    cy.get("@search-bar").find("input").should("have.value", "");
    cy.get("@search-bar").find("button").should("be.disabled");
  });

  it('should render "No results found" when there are no movies', () => {
    cy.intercept("GET", `${API_BASE_URL}/movies`, undefined).as("movies");
    cy.visit("/");
    cy.get('[data-cy="no-movies-found"]').should("be.visible");
    cy.get('[data-testid="search-bar"]').as("search-bar").should("be.visible");
  });

  it("should search for movies", () => {
    cy.intercept("GET", `${API_BASE_URL}/movies`, []);
    cy.intercept(
      "GET",
      `${API_BASE_URL}/suggestions?title=Pushing`,
      suggestion
    ).as("suggestions");
    cy.visit("/");
    cy.wait(1000);
    cy.get('[data-testid="search-bar"]').as("search-bar").should("be.visible");
    cy.get("@search-bar").find("input").should("have.value", "");
    cy.get("@search-bar").find("button").should("be.disabled");
    cy.get("@search-bar").find("input").type("Pushing");
    cy.get("@search-bar")
      .find("button")
      .as("search-button")
      .should("not.be.disabled");
    cy.get("@search-bar").find("li").click();
    cy.get("@search-button").should("not.be.disabled").click();
    cy.intercept(
      "GET",
      `${API_BASE_URL}/movies?title=Pushing%20Dead`,
      initialMovies
    ).as("movies-query");
    cy.wait("@movies-query");
    cy.get('[data-cy="marker"]');
  });
});
