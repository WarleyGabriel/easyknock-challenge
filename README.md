# easyknock-challenge

[![Action Status](https://github.com/WarleyGabriel/easyknock-challenge/workflows/CI/badge.svg)](https://github.com/WarleyGabriel/easyknock-challenge/actions)

This is an end-to-end tests project. These tests are written in JavaScript with [Cypress](https://www.cypress.io/)

## Index

- [Features](#Features)
- [Requirements](#Requirements)
- [Getting Started](#Getting-Started)
- [Running tests](#Running-tests)
- [Report](#Report) on [GitHub Pages](https://warleygabriel.github.io/easyknock-challenge/)

## Features

- Page Object Pattern
- Github Actions
- Report (mochawesome)

## Requirements

- node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
- npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
npm install
```

## Running tests

Run e2e tests in headless mode (Electron):

```bash
npm run cy:run
```

```bash
  Running:  specs/LeaseBackCalculator.spec.js                                               (1 of 1)

  Should calculate the estimated cash proceeds value
    ✓ Calculates the estimated cash proceeds (Green calculator) (6419ms)
    ✓ Calculates the estimated cash proceeds (White calculator) (4255ms)

  2 passing (11s)

[mochawesome] Report JSON saved to /easyknock-challenge/cypress/results/json/mochawesome.json

  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     10 seconds                                                                       │
  │ Spec Ran:     specs/LeaseBackCalculator.spec.js                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
```

Open Cypress and select what test do you want to run and what browser:

```bash
npm run cy:open
```

## Report

Run this command to generate the report in the directory `./cypress/reports/html/index.html`:

```bash
npm run cy:report
```

You can see the report on [GitHub Pages](https://warleygabriel.github.io/easyknock-challenge/)
