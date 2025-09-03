// src/models/citizen.ts
// Simple Citizen class

import { Government } from "./government";

export class Citizen {
  private name: string;

  constructor(name: string) {
    if (!name || name.trim() === "") {
      console.log("Error: Citizen name cannot be empty");
      this.name = "Unknown Citizen";
    } else {
      this.name = name.trim();
    }
  }

  // Citizens contact THE government (not create a new one)
  contactGovernment(): void {
    try {
      const gov = Government.getGovernment();
      console.log(`${this.name} contacted the government`);
      console.log(`Government info: ${gov.getInfo()}`);
    } catch (error) {
      console.log(`${this.name} failed to contact government`);
    }
  }

  // Check what laws exist
  checkLaws(): void {
    try {
      const gov = Government.getGovernment();
      const laws = gov.getAllLaws();
      console.log(`${this.name} checking laws:`);
      if (laws.length === 0) {
        console.log("  No laws created yet");
      } else {
        laws.forEach((law) => console.log(`  - ${law}`));
      }
    } catch (error) {
      console.log(`${this.name} failed to check laws`);
    }
  }

  getName(): string {
    return this.name;
  }
}
