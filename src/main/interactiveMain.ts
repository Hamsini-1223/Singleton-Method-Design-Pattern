// src/main/interactiveMain.ts
// Simple interactive console interface

import * as readline from "readline";
import { Government } from "../models/government";
import { Citizen } from "../models/citizen";
import { Mayor } from "../models/mayor";
import { PoliceDepartment } from "../models/policeDepartment";

class ConsoleInterface {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  start(): void {
    console.log("========================================");
    console.log("   WELCOME TO GOVERNMENT SINGLETON DEMO");
    console.log("========================================");
    console.log("This demo shows how the Singleton Pattern works");
    console.log("using a Government example!");

    this.showMainMenu();
  }

  private showMainMenu(): void {
    console.log("\nChoose your role:");
    console.log("1. Citizen");
    console.log("2. Mayor");
    console.log("3. Police Officer");
    console.log("4. Government Admin");
    console.log("5. View Government Info");
    console.log("6. Test Singleton Pattern");
    console.log("7. Exit");

    this.rl.question("\nEnter your choice (1-7): ", (choice) => {
      this.handleMainMenu(choice.trim());
    });
  }

  private handleMainMenu(choice: string): void {
    switch (choice) {
      case "1":
        this.citizenMode();
        break;
      case "2":
        this.mayorMode();
        break;
      case "3":
        this.policeMode();
        break;
      case "4":
        this.adminMode();
        break;
      case "5":
        this.viewGovernmentInfo();
        break;
      case "6":
        this.testSingleton();
        break;
      case "7":
        this.exit();
        break;
      default:
        console.log("Invalid choice! Please enter 1-7.");
        this.showMainMenu();
    }
  }

  private citizenMode(): void {
    this.rl.question("Enter your name: ", (name) => {
      if (!name || name.trim() === "") {
        console.log("Name cannot be empty. Please try again.");
        this.showMainMenu();
        return;
      }

      console.log(`\nWelcome, ${name}! You are now a Citizen.`);
      this.showCitizenMenu(name);
    });
  }

  private showCitizenMenu(name: string): void {
    console.log("\nCITIZEN MENU:");
    console.log("1. Contact Government");
    console.log("2. Check All Laws");
    console.log("3. Back to Main Menu");

    this.rl.question("\nWhat would you like to do? ", (choice) => {
      const citizen = new Citizen(name);

      switch (choice.trim()) {
        case "1":
          citizen.contactGovernment();
          this.showCitizenMenu(name);
          break;
        case "2":
          citizen.checkLaws();
          this.showCitizenMenu(name);
          break;
        case "3":
          this.showMainMenu();
          break;
        default:
          console.log("Invalid choice!");
          this.showCitizenMenu(name);
      }
    });
  }

  private mayorMode(): void {
    this.rl.question("Enter your city name: ", (city) => {
      if (!city || city.trim() === "") {
        console.log("City name cannot be empty. Please try again.");
        this.showMainMenu();
        return;
      }

      console.log(`\nWelcome, Mayor of ${city}!`);
      this.showMayorMenu(city);
    });
  }

  private showMayorMenu(city: string): void {
    console.log("\nMAYOR MENU:");
    console.log("1. Request New Law");
    console.log("2. Report to Government");
    console.log("3. Back to Main Menu");

    this.rl.question("\nWhat would you like to do? ", (choice) => {
      const mayor = new Mayor(city);

      switch (choice.trim()) {
        case "1":
          this.rl.question("Enter the law you want to request: ", (law) => {
            mayor.requestNewLaw(law);
            this.showMayorMenu(city);
          });
          break;
        case "2":
          this.rl.question("Enter your report: ", (report) => {
            mayor.reportToGovernment(report);
            this.showMayorMenu(city);
          });
          break;
        case "3":
          this.showMainMenu();
          break;
        default:
          console.log("Invalid choice!");
          this.showMayorMenu(city);
      }
    });
  }

  private policeMode(): void {
    this.rl.question("Enter your city: ", (city) => {
      if (!city || city.trim() === "") {
        console.log("City name cannot be empty. Please try again.");
        this.showMainMenu();
        return;
      }

      console.log(`\nWelcome, Officer from ${city} Police Department!`);
      this.showPoliceMenu(city);
    });
  }

  private showPoliceMenu(city: string): void {
    console.log("\nPOLICE MENU:");
    console.log("1. Enforce Laws");
    console.log("2. Report Crime");
    console.log("3. Back to Main Menu");

    this.rl.question("\nWhat would you like to do? ", (choice) => {
      const police = new PoliceDepartment(city);

      switch (choice.trim()) {
        case "1":
          police.enforceLaws();
          this.showPoliceMenu(city);
          break;
        case "2":
          this.rl.question("Enter crime type: ", (crime) => {
            police.reportCrime(crime);
            this.showPoliceMenu(city);
          });
          break;
        case "3":
          this.showMainMenu();
          break;
        default:
          console.log("Invalid choice!");
          this.showPoliceMenu(city);
      }
    });
  }

  private adminMode(): void {
    console.log("\nGOVERNMENT ADMIN MODE");
    this.showAdminMenu();
  }

  private showAdminMenu(): void {
    console.log("\nADMIN MENU:");
    console.log("1. Set President");
    console.log("2. Create Law Directly");
    console.log("3. View All Laws");
    console.log("4. Back to Main Menu");

    this.rl.question("\nWhat would you like to do? ", (choice) => {
      const gov = Government.getGovernment();

      switch (choice.trim()) {
        case "1":
          this.rl.question("Enter president name: ", (name) => {
            gov.setPresident(name);
            this.showAdminMenu();
          });
          break;
        case "2":
          this.rl.question("Enter new law: ", (law) => {
            gov.createLaw(law);
            this.showAdminMenu();
          });
          break;
        case "3":
          const laws = gov.getAllLaws();
          console.log("\nAll Laws:");
          if (laws.length === 0) {
            console.log("  No laws created yet!");
          } else {
            laws.forEach((law, index) => console.log(`  ${index + 1}. ${law}`));
          }
          this.showAdminMenu();
          break;
        case "4":
          this.showMainMenu();
          break;
        default:
          console.log("Invalid choice!");
          this.showAdminMenu();
      }
    });
  }

  private viewGovernmentInfo(): void {
    const gov = Government.getGovernment();
    console.log("\n========== GOVERNMENT INFO ==========");
    console.log(gov.getInfo());
    console.log("=====================================");

    this.rl.question("\nPress Enter to continue...", () => {
      this.showMainMenu();
    });
  }

  private testSingleton(): void {
    console.log("\n========== TESTING SINGLETON ==========");
    console.log("Creating multiple government instances...\n");

    const gov1 = Government.getGovernment("USA");
    const gov2 = Government.getGovernment("Canada");
    const gov3 = Government.getGovernment("UK");

    console.log(`gov1 === gov2: ${gov1 === gov2}`);
    console.log(`gov2 === gov3: ${gov2 === gov3}`);
    console.log(`All are same object: ${gov1 === gov2 && gov2 === gov3}`);

    console.log("\nPROOF: All variables point to the SAME government object!");
    console.log("This is how Singleton Pattern works!");
    console.log("========================================");

    this.rl.question("\nPress Enter to continue...", () => {
      this.showMainMenu();
    });
  }

  private exit(): void {
    console.log("\nThank you for learning about Singleton Pattern!");
    console.log("Remember: There can only be ONE government!");
    console.log("Just like in real life!");
    this.rl.close();
  }
}

function startInteractiveDemo(): void {
  const consoleApp = new ConsoleInterface();
  consoleApp.start();
}

startInteractiveDemo();
