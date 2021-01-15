/// <reference types="cypress" />

import { sellStayPage } from "../pages/SellStay.page";

context("Should calculate the estimated cash proceeds value", () => {
  it("Calculates the estimated cash proceeds (White calculator)", () => {
    const values = {
      homeValue: 258900,
      mortgageBalance: 120000,
      otherLiens: 4000,
    };

    sellStayPage.open();
    sellStayPage.fillCalculator(values);

    const expectedResult = sellStayPage.getEstimatedCashProceeds(values);

    sellStayPage.containerResultWhiteCalculator.should("be.visible");
    sellStayPage.resultWhiteCalculator.should(
      "have.text",
      `$${expectedResult}`
    );
  });
});
