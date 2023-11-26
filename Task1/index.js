"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
// Function to simulate buying groceries
let totalBill = 0;
console.log("Welcome to the supermarket!");
// Nested loop to simulate buying fruits, vegetables, and groceries
while (true) {
    let choice = parseInt(readlineSync.question("Do you want to buy fruits or vegetables? (Type 1 for 'fruits' or 2 for 'vegetables' or 0 to finish)"), 10);
    if (choice === 0) {
        break;
    }
    else if (choice === 1) {
        console.log("Available fruits: 1. Apple Rs240/kg , 2. Banana Rs240/Dozen, 3. Orange Rs240/Dozen");
        let fruit = readlineSync.question("Enter the number of fruit you want to buy:");
        let quantityInput = readlineSync.question("Enter the quantity:");
        let quantity = parseInt(quantityInput !== null ? quantityInput : "0", 10); // Use "0" if quantityInput is null
        // Assume a fixed price for fruits
        totalBill += quantity * 240; // Price: Rs240 per kg or dozen
    }
    else if (choice === 2) {
        console.log("Available vegetables: 1. Carrot Rs300/kg, 2. Potato Rs300/kg , 3. Onion Rs300/kg");
        let vegetable = readlineSync.question("Enter the Number of vegetable you want to buy:");
        let quantityInput = readlineSync.question("Enter the quantity:");
        let quantity = parseInt(quantityInput !== null ? quantityInput : "0", 10); // Use "0" if quantityInput is null
        // Assume a fixed price for vegetables
        totalBill += quantity * 300; // Price: Rs300/kg
    }
    else {
        console.log("Invalid choice. (Type 1 for 'fruits' or 2 for 'vegetables' or 0 to finish).");
    }
}
console.log(`Total Bill: Rs${totalBill}`);
// Scenario 2 - Checking Discounts
if (totalBill > 500) {
    console.log("You buy more than Rs500 that's why you qualify for a 10% discount!");
    totalBill *= 0.9; // Apply 10% discount
    console.log(`Discounted Total: Rs${totalBill}`);
}
// Scenario 3 - Checkout Process
console.log("Proceed to checkout...");
let paymentMethod;
while (true) {
    paymentMethod = readlineSync.question("Select a payment method by typing 1 for easypaisa or 2 for jazzcash or 3 for bank credit/debit and 4 for cash on delivery? ");
    if (paymentMethod === "1" || paymentMethod === "2" || paymentMethod === "3" || paymentMethod === "4") {
        break;
    }
    else {
        console.log("Invalid payment method. (Please enter '1' for easypaisa or '2' for jazzcash or '3' for bank credit/debit and '4' for cash on delivery)");
    }
}
console.log(`Payment confirmed. Thank you for shopping with us!`);
