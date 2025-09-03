// src/models/mayor.ts
// Simple Mayor class

import { Government } from "./government";

export class Mayor {
  private cityName: string;

  constructor(city: string) {
    if (!city || city.trim() === "") {
      console.log("Error: City name cannot be empty");
      this.cityName = "Unknown City";
    } else {
      this.cityName = city.trim();
    }
  }

  // Mayor requests new law from THE government
  requestNewLaw(lawDescription: string): void {
    try {
      if (!lawDescription || lawDescription.trim() === "") {
        console.log("Error: Law description cannot be empty");
        return;
      }

      const gov = Government.getGovernment();
      console.log(`Mayor of ${this.cityName} requests: ${lawDescription}`);
      gov.createLaw(lawDescription);
    } catch (error) {
      console.log(`Mayor of ${this.cityName} failed to request new law`);
    }
  }

  // Mayor reports to THE government
  reportToGovernment(report: string): void {
    try {
      if (!report || report.trim() === "") {
        console.log("Error: Report cannot be empty");
        return;
      }

      const gov = Government.getGovernment();
      console.log(`Mayor of ${this.cityName} reports: ${report}`);
    } catch (error) {
      console.log(`Mayor of ${this.cityName} failed to submit report`);
    }
  }

  getCityName(): string {
    return this.cityName;
  }
}
