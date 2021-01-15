/// <reference types="cypress" />

import { sellStayPage } from "../pages/SellStay.page";

context("Should show the calculator visually correct", () => {
  it("White calculator", () => {
    sellStayPage.open();
    sellStayPage.containerWhiteCalculator.should("be.visible");
    sellStayPage.containerWhiteCalculator.toMatchImageSnapshot();
  });
});
