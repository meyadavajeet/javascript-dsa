/**
 * In function we have to provide return type of the function
 */

function returnName(): string {
  return "Aj";
}

function isAdmin(): boolean {
  return true;
}

function returnAge(): number {
  return 27;
}

function complex(): number | string | boolean {
  let name = "Aj";
  let age = 26;
  let type = "age";
  if (type === "age") {
    return age;
  } else {
    return name;
  }
}

function returnNothing(): void {
  return;
}

function returnAnything(): any {
  return "anything";
}
