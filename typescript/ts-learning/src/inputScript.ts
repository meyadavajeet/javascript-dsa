function getInfo(): void {
  console.log("Get Info Called");
  let name: string = (document.getElementById("name") as HTMLInputElement)
    .value;
  let email: string = (document.getElementById("email") as HTMLInputElement)
    .value;
  let ageInput = document.getElementById("age") as HTMLInputElement;
  let age: number = ageInput ? parseInt(ageInput.value) : 0;
  let phoneInput = document.getElementById("phone") as HTMLInputElement;
  let phone: number = phoneInput ? parseInt(phoneInput.value) : 0;
  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("phone: ", phone);
  console.log("age: ", age);
}
