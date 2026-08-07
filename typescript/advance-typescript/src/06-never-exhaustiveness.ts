// never exhaustiveness is a TypeScript technique used with discriminated unions to ensure all possible cases are handled.

//In a switch statement, after handling every union member, the remaining type becomes never. If a new union type is added later and not handled, assigning the remaining value to a variable of type never causes a compile-time error. This helps catch missing cases early and makes the code safer and easier to maintain.

type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

function getPaymentStatus(status: PaymentStatus): string {
  switch (status) {
    case "pending":
      return "pending";
    case "paid":
      return "paid";
    case "failed":
      return "failed";
    case "refunded":
      return "refunded";
    default: {
      const neverExaustiness: never = status;
      return neverExaustiness;
    }
  }
}

console.log(getPaymentStatus('failed'));
