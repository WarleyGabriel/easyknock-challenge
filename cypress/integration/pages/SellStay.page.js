/// <reference types="cypress" />

class SellStayPage {
  open() {
    cy.visit("/programs/sellstay");
  }

  get inputHomeValue() {
    return cy.get('input[name="homeValue"]');
  }

  get inputMortgageBalance() {
    return cy.get('input[name="mortgageBalance"]');
  }

  get inputOtherLiens() {
    return cy.get('input[name="liens"]');
  }

  get buttonCalculate() {
    return cy.xpath('//button[text()="Calculate"]');
  }

  get containerWhiteCalculator() {
    return cy.xpath("(//section)[6]/div");
  }

  get containerResultWhiteCalculator() {
    return cy.get("h3").should("contain.text", "Estimated Cash Proceeds");
  }

  get resultWhiteCalculator() {
    return this.containerResultWhiteCalculator.find("span");
  }

  fillCalculator({ homeValue, mortgageBalance, otherLiens }) {
    this.inputHomeValue.type(homeValue);
    this.inputMortgageBalance.type(mortgageBalance);
    this.inputOtherLiens.type(otherLiens);
    this.buttonCalculate.click();
  }

  getEstimatedCashProceeds({ homeValue, mortgageBalance, otherLiens }) {
    const result = Math.round(homeValue * 0.665 - mortgageBalance - otherLiens);

    const formatResult = result
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formatResult;
  }
}

export const sellStayPage = new SellStayPage();
