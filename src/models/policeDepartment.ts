// src/models/policeDepartment.ts
// Simple Police Department class

import { Government } from "./government";

export class PoliceDepartment {
  private city: string;

  constructor(city: string) {
    if (!city || city.trim() === "") {
      console.log("Error: City name cannot be empty");
      this.city = "Unknown City";
    } else {
      this.city = city.trim();
    }
  }

  // Police check government laws before taking action
  enforceLaws(): void {
    try {
      const gov = Government.getGovernment();
      const laws = gov.getAllLaws();

      console.log(`${this.city} Police Department enforcing laws:`);
      if (laws.length === 0) {
        console.log("  No laws to enforce yet!");
      } else {
        laws.forEach((law) => console.log(`  ✓ Enforcing: ${law}`));
      }
    } catch (error) {
      console.log(`${this.city} Police Department failed to enforce laws`);
    }
  }

  // Report crime to government
  reportCrime(crimeType: string): void {
    try {
      if (!crimeType || crimeType.trim() === "") {
        console.log("Error: Crime type cannot be empty");
        return;
      }

      const gov = Government.getGovernment();
      console.log(`${this.city} Police reports: ${crimeType}`);
    } catch (error) {
      console.log(`${this.city} Police failed to report crime`);
    }
  }

  getCity(): string {
    return this.city;
  }
}
