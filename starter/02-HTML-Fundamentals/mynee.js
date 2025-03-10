/* Write your code below. Good luck! 🙂 */

// Function to calculate the tip based on the given rules
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Test the function with a bill value of 100
const testBill = 100;
console.log(`Tip for a bill of ${testBill}: ${calcTip(testBill)}`);

// Array of bills (test data)
const bills = [125, 555, 44];

// Array of tips calculated using the calcTip function
const tips = bills.map(calcTip);
console.logs("Tips ");

// BONUS: Array of total values (bill + tip)
const totals = bills.map((bill, index) => bill + tips[index]);

// Log the results
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
