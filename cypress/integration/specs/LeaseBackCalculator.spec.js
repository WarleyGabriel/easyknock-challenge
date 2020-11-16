/// <reference types="cypress" />

import { sellStayPage } from "../pages/SellStay.page";

context("Should calculate the estimated cash proceeds value", () => {
  it("Calculates the estimated cash proceeds (Green calculator)", () => {
    const values = {
      homeValue: 258900,
      mortgageBalance: 120000,
      otherLiens: 4000,
    };

    sellStayPage.openGreenCalculator();
    sellStayPage.fillCalculator(values);

    const expectedResult = sellStayPage.getEstimatedCashProceeds(values);

    sellStayPage.containerResultGreenCalculator.should("be.visible");
    sellStayPage.resultGreenCalculator.should(
      "have.text",
      `$${expectedResult}`
    );
  });

  it("Calculates the estimated cash proceeds (White calculator)", () => {
    const values = {
      homeValue: 258900,
      mortgageBalance: 120000,
      otherLiens: 4000,
    };

    sellStayPage.openWhiteCalculator();
    sellStayPage.fillCalculator(values);

    const expectedResult = sellStayPage.getEstimatedCashProceeds(values);

    sellStayPage.containerResultWhiteCalculator.should("be.visible");
    sellStayPage.resultWhiteCalculator.should(
      "have.text",
      `$${expectedResult}`
    );
  });
});
