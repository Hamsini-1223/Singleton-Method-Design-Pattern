// Citizen.ts
// Regular citizens who interact with the government

import Government from "./Government";

class Citizen {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Citizens contact THE government (not create a new one)
  contactGovernment(): void {
    const gov = Government.getGovernment();
    console.log(`👤 ${this.name} contacted the government`);
    console.log(`📋 Government info: ${gov.getInfo()}`);
  }

  // Check what laws exist
  checkLaws(): void {
    const gov = Government.getGovernment();
    const laws = gov.getAllLaws();
    console.log(`👤 ${this.name} checking laws:`);
    laws.forEach((law) => console.log(`  - ${law}`));
  }

  getName(): string {
    return this.name;
  }
}

export default Citizen;
