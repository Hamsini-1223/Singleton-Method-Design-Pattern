// Mayor.ts
// A Mayor who works with the government

import Government from "./Government";

class Mayor {
  private cityName: string;

  constructor(city: string) {
    this.cityName = city;
  }

  // Mayor requests new law from THE government
  requestNewLaw(lawDescription: string): void {
    const gov = Government.getGovernment();
    console.log(`🏛️ Mayor of ${this.cityName} requests: ${lawDescription}`);
    gov.createLaw(lawDescription);
  }

  // Mayor reports to THE government
  reportToGovernment(report: string): void {
    const gov = Government.getGovernment();
    console.log(`📊 Mayor of ${this.cityName} reports: ${report}`);
  }
}

export default Mayor;
