// src/main/automaticDemo.ts
// Simple automatic demonstration

import { Government } from "../models/government";
import { Citizen } from "../models/citizen";
import { Mayor } from "../models/mayor";
import { PoliceDepartment } from "../models/policeDepartment";

function runSimpleDemo(): void {
  console.log("=== SIMPLE GOVERNMENT SINGLETON DEMO ===\n");

  // Step 1: Try to get government multiple times
  console.log("1. Getting government instances:");
  const gov1 = Government.getGovernment("USA");
  const gov2 = Government.getGovernment("Canada"); // Same instance!
  const gov3 = Government.getGovernment(); // Same instance!

  console.log(
    `Are all governments the same? ${gov1 === gov2 && gov2 === gov3}`
  );
  console.log("");

  // Step 2: Set up government
  console.log("2. Setting up government:");
  gov1.setPresident("John Smith");
  console.log("");

  // Step 3: Create some citizens
  console.log("3. Citizens interacting:");
  const alice = new Citizen("Alice");
  const bob = new Citizen("Bob");

  alice.contactGovernment();
  console.log("");

  // Step 4: Mayor creates laws
  console.log("4. Mayor creating laws:");
  const mayor = new Mayor("Springfield");
  mayor.requestNewLaw("No parking on Main Street");
  mayor.requestNewLaw("Speed limit is 25 mph");
  console.log("");

  // Step 5: Citizens check laws
  console.log("5. Citizens checking laws:");
  bob.checkLaws();
  console.log("");

  // Step 6: Police enforce laws
  console.log("6. Police enforcing laws:");
  const police = new PoliceDepartment("Springfield");
  police.enforceLaws();
  console.log("");

  // Step 7: Show final government info
  console.log("7. Final government status:");
  console.log(gov1.getInfo());
}

// Run the demo
runSimpleDemo();
