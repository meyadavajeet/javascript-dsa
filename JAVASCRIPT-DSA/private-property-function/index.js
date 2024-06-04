class BankAccount {
  name = "Ajeet Yadav";
  #pin = "123123"; //here # (hash) used to create private property

  getName() {
    return this.name;
  }

  #getIFCECode() {
    // private function
    return "BKID0000123";
  }

  getSpecialData() {
    return {
      name: this.name,
      pin: this.#pin,
      ifceCode: this.#getIFCECode(),
    };
  }
}

const bankAccount = new BankAccount();
function getClassData() {
  console.log(bankAccount.getSpecialData());
}
