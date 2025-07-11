// consoleInterface.ts
// Interactive console interface for users to interact with the government

import * as readline from "readline";
import Government from "./Government";
import Citizen from "./Citizen";
import Mayor from "./Mayor";
import PoliceDepartment from "./PoliceDepartment";

class ConsoleInterface {
  private rl: readline.Interface;
  private currentRole: string = "guest";
  private userName: string = "User";

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  start(): void {
    console.log("🏛️ ========================================");
    console.log("   WELCOME TO GOVERNMENT SINGLETON DEMO");
    console.log("========================================");
    console.log("This demo shows how the Singleton Pattern works");
    console.log("using a Government example!\n");

    this.showMainMenu();
  }

  private showMainMenu(): void {
    console.log("\n🎭 Choose your role:");
    console.log("1. 👤 Citizen");
    console.log("2. 🏛️ Mayor");
    console.log("3. 👮 Police Officer");
    console.log("4. 🎯 Government Admin");
    console.log("5. 📊 View Government Info");
    console.log("6. 🧪 Test Singleton Pattern");
    console.log("7. ❌ Exit");

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
        console.log("❌ Invalid choice! Please enter 1-7.");
        this.showMainMenu();
    }
  }

  private citizenMode(): void {
    this.rl.question("👤 Enter your name: ", (name) => {
      this.userName = name;
      this.currentRole = "citizen";
      console.log(`\n🎉 Welcome, ${name}! You are now a Citizen.`);
      this.showCitizenMenu();
    });
  }

  private showCitizenMenu(): void {
    console.log("\n👤 CITIZEN MENU:");
    console.log("1. 📞 Contact Government");
    console.log("2. 📋 Check All Laws");
    console.log("3. 🔙 Back to Main Menu");

    this.rl.question("\nWhat would you like to do? ", (choice) => {
      this.handleCitizenMenu(choice.trim());
    });
  }

  private handleCitizenMenu(choice: string): void {
    const citizen = new Citizen(this.userName);

    switch (choice) {
      case "1":
        citizen.contactGovernment();
        this.showCitizenMenu();
        break;
      case "2":
        citizen.checkLaws();
        this.showCitizenMenu();
        break;
      case "3":
        this.showMainMenu();
        break;
      default:
        console.log("❌ Invalid choice!");
        this.showCitizenMenu();
    }
  }

  private mayorMode(): void {
    this.rl.question("🏛️ Enter your city name: ", (city) => {
      this.currentRole = "mayor";
      console.log(`\n🎉 Welcome, Mayor of ${city}!`);
      this.showMayorMenu(city);
    });
  }

  private showMayorMenu(city: string): void {
    console.log("\n🏛️ MAYOR MENU:");
    console.log("1. 📜 Request New Law");
    console.log("2. 📊 Report to Government");
    console.log("3. 🔙 Back to Main Menu");

    this.rl.question("\nWhat would you like to do? ", (choice) => {
      this.handleMayorMenu(choice.trim(), city);
    });
  }

  private handleMayorMenu(choice: string, city: string): void {
    const mayor = new Mayor(city);

    switch (choice) {
      case "1":
        this.rl.question("📜 Enter the law you want to request: ", (law) => {
          mayor.requestNewLaw(law);
          this.showMayorMenu(city);
        });
        break;
      case "2":
        this.rl.question("📊 Enter your report: ", (report) => {
          mayor.reportToGovernment(report);
          this.showMayorMenu(city);
        });
        break;
      case "3":
        this.showMainMenu();
        break;
      default:
        console.log("❌ Invalid choice!");
        this.showMayorMenu(city);
    }
  }

  private policeMode(): void {
    this.rl.question("👮 Enter your city: ", (city) => {
      this.currentRole = "police";
      console.log(`\n🎉 Welcome, Officer from ${city} Police Department!`);
      this.showPoliceMenu(city);
    });
  }

  private showPoliceMenu(city: string): void {
    console.log("\n👮 POLICE MENU:");
    console.log("1. ⚖️ Enforce Laws");
    console.log("2. 🚨 Report Crime");
    console.log("3. 🔙 Back to Main Menu");

    this.rl.question("\nWhat would you like to do? ", (choice) => {
      this.handlePoliceMenu(choice.trim(), city);
    });
  }

  private handlePoliceMenu(choice: string, city: string): void {
    const police = new PoliceDepartment(city);

    switch (choice) {
      case "1":
        police.enforceLaws();
        this.showPoliceMenu(city);
        break;
      case "2":
        this.rl.question("🚨 Enter crime type: ", (crime) => {
          police.reportCrime(crime);
          this.showPoliceMenu(city);
        });
        break;
      case "3":
        this.showMainMenu();
        break;
      default:
        console.log("❌ Invalid choice!");
        this.showPoliceMenu(city);
    }
  }

  private adminMode(): void {
    console.log("\n🎯 GOVERNMENT ADMIN MODE");
    this.showAdminMenu();
  }

  private showAdminMenu(): void {
    console.log("\n🎯 ADMIN MENU:");
    console.log("1. 👤 Set President");
    console.log("2. 📜 Create Law Directly");
    console.log("3. 📋 View All Laws");
    console.log("4. 🔙 Back to Main Menu");

    this.rl.question("\nWhat would you like to do? ", (choice) => {
      this.handleAdminMenu(choice.trim());
    });
  }

  private handleAdminMenu(choice: string): void {
    const gov = Government.getGovernment();

    switch (choice) {
      case "1":
        this.rl.question("👤 Enter president name: ", (name) => {
          gov.setPresident(name);
          this.showAdminMenu();
        });
        break;
      case "2":
        this.rl.question("📜 Enter new law: ", (law) => {
          gov.createLaw(law);
          this.showAdminMenu();
        });
        break;
      case "3":
        const laws = gov.getAllLaws();
        console.log("\n📋 All Laws:");
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
        console.log("❌ Invalid choice!");
        this.showAdminMenu();
    }
  }

  private viewGovernmentInfo(): void {
    const gov = Government.getGovernment();
    console.log("\n📊 ========== GOVERNMENT INFO ==========");
    console.log(gov.getInfo());
    console.log("=====================================");

    this.rl.question("\nPress Enter to continue...", () => {
      this.showMainMenu();
    });
  }

  private testSingleton(): void {
    console.log("\n🧪 ========== TESTING SINGLETON ==========");
    console.log("Creating multiple government instances...\n");

    const gov1 = Government.getGovernment("USA");
    const gov2 = Government.getGovernment("Canada");
    const gov3 = Government.getGovernment("UK");

    console.log(`gov1 === gov2: ${gov1 === gov2}`);
    console.log(`gov2 === gov3: ${gov2 === gov3}`);
    console.log(`All are same object: ${gov1 === gov2 && gov2 === gov3}`);

    console.log(
      "\n✅ PROOF: All variables point to the SAME government object!"
    );
    console.log("This is how Singleton Pattern works! 🎯");
    console.log("========================================");

    this.rl.question("\nPress Enter to continue...", () => {
      this.showMainMenu();
    });
  }

  private exit(): void {
    console.log("\n👋 Thank you for learning about Singleton Pattern!");
    console.log("🎓 Remember: There can only be ONE government!");
    console.log("   Just like in real life! 🏛️\n");
    this.rl.close();
  }
}

export default ConsoleInterface;
