/// <reference types="cypress" />

import { sellStayPage } from "../pages/SellStay.page";

context("Should show the calculator visually correct", () => {
  it("Green calculator", () => {
    sellStayPage.openGreenCalculator();
    sellStayPage.containerGreenCalculator.should("be.visible");
    sellStayPage.containerGreenCalculator.toMatchImageSnapshot();
  });

  it("White calculator", () => {
    sellStayPage.openWhiteCalculator();
    sellStayPage.containerWhiteCalculator.should("be.visible");
    sellStayPage.containerWhiteCalculator.toMatchImageSnapshot();
  });
});
