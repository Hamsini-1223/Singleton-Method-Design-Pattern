# Government Singleton Pattern - TypeScript

A simple implementation of the Singleton Design Pattern using a Government analogy in TypeScript.

## Overview

The Singleton pattern ensures that a class has only one instance and provides a global access point to that instance. This project demonstrates the pattern using a real-world government analogy where there can only be one official government per country.

## Project Structure

```
├── Government.ts              # Main Singleton class
├── Citizen.ts                 # Citizens who interact with government
├── Mayor.ts                   # City mayors working with government
├── PoliceDepartment.ts        # Police enforcing government laws
├── consoleInterface.ts        # Interactive console interface
├── interactiveMain.ts         # Entry point for interactive demo
├── main.ts                    # Automatic demonstration
├── simpleTest.ts              # Singleton pattern verification tests
├── package.json               # Node.js dependencies
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## UML Class Diagram

![Government Singleton UML Diagram](Singleton_Pattern.png)

The diagram illustrates the Singleton pattern implementation with proper dependency relationships between classes.

## Installation and Setup

```bash
# Clone the repository
git clone https://github.com/Hamsini-1223/Singleton-Method-Design-Pattern
cd Singleton

# Install dependencies
npm install
```

## Running the Application

### Interactive Demo

```bash
npm run interactive
```

### Automatic Demo

```bash
npm run demo
```

### Run Tests

```bash
npm run test
```

## Core Implementation

### Government Class (Singleton)

```typescript
class Government {
  private static theGovernment: Government;
  private countryName: string;
  private currentPresident: string;
  private laws: string[] = [];

  // Private constructor prevents external instantiation
  private constructor(country: string) {
    this.countryName = country;
    this.currentPresident = "No President Yet";
  }

  // Single access point to the government instance
  static getGovernment(country: string = "MyCountry"): Government {
    if (!Government.theGovernment) {
      Government.theGovernment = new Government(country);
    }
    return Government.theGovernment;
  }

  // Government operations
  setPresident(name: string): void { ... }
  createLaw(law: string): void { ... }
  getInfo(): string { ... }
  getAllLaws(): string[] { ... }
}
```

### Key Singleton Features

- **Private Constructor**: Prevents external classes from creating new instances
- **Static Instance Variable**: Holds the single instance of the class
- **Static Access Method**: Provides controlled global access to the instance
- **Lazy Initialization**: Instance is created only when first requested

### Usage Example

```typescript
// All these calls return the same Government instance
const gov1 = Government.getGovernment("USA");
const gov2 = Government.getGovernment("Canada");
const gov3 = Government.getGovernment();

console.log(gov1 === gov2); // true
console.log(gov2 === gov3); // true
```

## Class Interactions

### Citizen Class

```typescript
class Citizen {
  contactGovernment(): void {
    const gov = Government.getGovernment(); // Gets the singleton instance
    // Interact with government
  }
}
```

### Mayor Class

```typescript
class Mayor {
  requestNewLaw(lawDescription: string): void {
    const gov = Government.getGovernment(); // Same singleton instance
    gov.createLaw(lawDescription);
  }
}
```

### Police Department Class

```typescript
class PoliceDepartment {
  enforceLaws(): void {
    const gov = Government.getGovernment(); // Same singleton instance
    const laws = gov.getAllLaws();
    // Enforce laws
  }
}
```

## Interactive Console Interface

The application includes an interactive console interface that allows users to:

- Act as different roles (Citizen, Mayor, Police Officer, Government Admin)
- Perform role-specific actions
- Observe how all roles interact with the same government instance
- Test the singleton pattern functionality

## Expected Output

### Interactive Demo Output

When you run `npm run interactive`, you'll see:

```
🏛️ ========================================
   WELCOME TO GOVERNMENT SINGLETON DEMO
========================================
This demo shows how the Singleton Pattern works
using a Government example!

🎭 Choose your role:
1. 👤 Citizen
2. 🏛️ Mayor
3. 👮 Police Officer
4. 🎯 Government Admin
5. 📊 View Government Info
6. 🧪 Test Singleton Pattern
7. ❌ Exit

Enter your choice (1-7): 1
👤 Enter your name: John
🎉 Welcome, John! You are now a Citizen.

👤 CITIZEN MENU:
1. 📞 Contact Government
2. 📋 Check All Laws
3. 🔙 Back to Main Menu

What would you like to do? 1
🏛️ Government of MyCountry established!
👤 John contacted the government
📋 Government info: Country: MyCountry, President: No President Yet, Laws: 0
```

### Automatic Demo Output

When you run `npm run demo`, you'll see:

```
=== SIMPLE GOVERNMENT SINGLETON DEMO ===

1. Getting government instances:
🏛️ Government of USA established!
Are all governments the same? true

2. Setting up government:
👤 John Smith is now the President

3. Citizens interacting:
👤 Alice contacted the government
📋 Government info: Country: USA, President: John Smith, Laws: 0

4. Mayor creating laws:
🏛️ Mayor of Springfield requests: No parking on Main Street
📜 New law created: No parking on Main Street
🏛️ Mayor of Springfield requests: Speed limit is 25 mph
📜 New law created: Speed limit is 25 mph

5. Citizens checking laws:
👤 Bob checking laws:
  - No parking on Main Street
  - Speed limit is 25 mph

6. Police enforcing laws:
👮 Springfield Police Department enforcing laws:
  ✓ Enforcing: No parking on Main Street
  ✓ Enforcing: Speed limit is 25 mph

7. Final government status:
Country: USA, President: John Smith, Laws: 2
```

### Test Output

When you run `npm run test`, you'll see:

```
=== TESTING SINGLETON PATTERN ===

🏛️ Government of Country1 established!
gov1 === gov2: true
gov2 === gov3: true
gov3 === gov4: true
gov4 === gov5: true
All same object: true

👤 Test President is now the President
📜 New law created: Test Law 1
📜 New law created: Test Law 2

All governments have same data:
gov1: Country: Country1, President: Test President, Laws: 2
gov2: Country: Country1, President: Test President, Laws: 2
gov3: Country: Country1, President: Test President, Laws: 2
```

## Singleton Pattern Verification

Run the test file to verify the singleton implementation:

```bash
npm run test
```

The test demonstrates that:

- Multiple calls to `getGovernment()` return the same instance
- All objects share the same state
- Only one government object exists in memory

## Learning Objectives

This implementation demonstrates:

1. **Singleton Pattern Implementation**: How to ensure single instance creation
2. **Global Access Control**: Providing controlled access to shared resources
3. **State Sharing**: How multiple objects can share the same state
4. **Real-world Modeling**: Translating real-world concepts to code patterns

## Real-world Applications

The Singleton pattern is commonly used for:

- Database connection pools
- Logging systems
- Configuration managers
- Cache implementations
- Device drivers
- Thread pools

## Technical Requirements

- Node.js (version 16 or higher)
- TypeScript (version 5.0 or higher)
- ts-node for running TypeScript files

## Contributing

Contributions are welcome. Please ensure code follows the existing patterns and includes appropriate tests.

## Built by

Ms Hamsini S
