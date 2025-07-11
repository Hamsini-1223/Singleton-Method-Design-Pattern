// PoliceDepartment.ts
// Police department that follows government laws

import Government from "./Government";

class PoliceDepartment {
  private city: string;

  constructor(city: string) {
    this.city = city;
  }

  // Police check government laws before taking action
  enforceLaws(): void {
    const gov = Government.getGovernment();
    const laws = gov.getAllLaws();

    console.log(`👮 ${this.city} Police Department enforcing laws:`);
    if (laws.length === 0) {
      console.log("  No laws to enforce yet!");
    } else {
      laws.forEach((law) => console.log(`  ✓ Enforcing: ${law}`));
    }
  }

  // Report crime to government
  reportCrime(crimeType: string): void {
    const gov = Government.getGovernment();
    console.log(`🚨 ${this.city} Police reports: ${crimeType}`);
  }
}

export default PoliceDepartment;
