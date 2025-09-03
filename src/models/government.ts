// src/models/government.ts
// Simple Government Singleton class

export class Government {
  private static theGovernment: Government;
  private countryName: string;
  private currentPresident: string;
  private laws: string[] = [];

  // Private constructor - citizens can't create a new government
  private constructor(country: string) {
    this.countryName = country || "MyCountry";
    this.currentPresident = "No President Yet";
    console.log(`Government of ${this.countryName} established!`);
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
    if (!name || name.trim() === "") {
      console.log("Error: President name cannot be empty");
      return;
    }
    this.currentPresident = name.trim();
    console.log(`${this.currentPresident} is now the President`);
  }

  createLaw(law: string): void {
    if (!law || law.trim() === "") {
      console.log("Error: Law description cannot be empty");
      return;
    }
    this.laws.push(law.trim());
    console.log(`New law created: ${law.trim()}`);
  }

  getInfo(): string {
    return `Country: ${this.countryName}, President: ${this.currentPresident}, Laws: ${this.laws.length}`;
  }

  getAllLaws(): string[] {
    return [...this.laws];
  }
}
