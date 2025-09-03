// src/main/singletonTest.ts
// Simple test to prove Singleton works

import { Government } from "../models/government";

function testSingleton(): void {
  console.log("=== TESTING SINGLETON PATTERN ===\n");

  // Get government 5 different ways
  const gov1 = Government.getGovernment("Country1");
  const gov2 = Government.getGovernment("Country2");
  const gov3 = Government.getGovernment("Country3");
  const gov4 = Government.getGovernment();
  const gov5 = Government.getGovernment();

  // Check if they're all the same object
  console.log(`gov1 === gov2: ${gov1 === gov2}`);
  console.log(`gov2 === gov3: ${gov2 === gov3}`);
  console.log(`gov3 === gov4: ${gov3 === gov4}`);
  console.log(`gov4 === gov5: ${gov4 === gov5}`);
  console.log(
    `All same object: ${
      gov1 === gov2 && gov2 === gov3 && gov3 === gov4 && gov4 === gov5
    }`
  );

  // They all have the same data
  gov1.setPresident("Test President");
  gov2.createLaw("Test Law 1");
  gov3.createLaw("Test Law 2");

  console.log("\nAll governments have same data:");
  console.log(`gov1: ${gov1.getInfo()}`);
  console.log(`gov2: ${gov2.getInfo()}`);
  console.log(`gov3: ${gov3.getInfo()}`);
}

testSingleton();
