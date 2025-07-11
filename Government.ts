// Government.ts
// This is the main Government class - there can only be ONE government per country

class Government {
  private static theGovernment: Government;
  private countryName: string;
  private currentPresident: string;
  private laws: string[] = [];

  // Private constructor - citizens can't create a new government
  private constructor(country: string) {
    this.countryName = country;
    this.currentPresident = "No President Yet";
    console.log(`🏛️ Government of ${country} established!`);
  }

  // The ONLY way to get the government
  static getGovernment(country: string = "MyCountry"): Government {
    if (!Government.theGovernment) {
      Government.theGovernment = new Government(country);
    }
    return Government.theGovernment;
  }

  // Government actions
  setPresident(name: string): void {
    this.currentPresident = name;
    console.log(`👤 ${name} is now the President`);
  }

  createLaw(law: string): void {
    this.laws.push(law);
    console.log(`📜 New law created: ${law}`);
  }

  getInfo(): string {
    return `Country: ${this.countryName}, President: ${this.currentPresident}, Laws: ${this.laws.length}`;
  }

  getAllLaws(): string[] {
    return this.laws;
  }
}

export default Government;
