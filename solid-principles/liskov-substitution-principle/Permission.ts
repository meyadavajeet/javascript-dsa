// liskov substitution principle


class BaseUser {
  getRole() { }

}

class User extends BaseUser {
  getAccessLevel() {
    console.log(`User Access Level`);
  }

  getRole(): void {
    console.log(`User Role`)
  }
}

class Manager extends User {
  getAccessLevel() {
    console.log(`Manager Access Level`);
  }

  getRole(): void {
    console.log(`Manager Role`)
  }
}


class Admin extends User {
  getAccessLevel() {
    console.log(`Admin Access Level`);
  }

  getRole(): void {
    console.log(`Admin Role`)
  }
}




class customer extends BaseUser {
  getRole(): void {
    console.log(`Manager Role`)
  }
}


function getUserAccessLevel(user: User) {
  user.getAccessLevel()
}

getUserAccessLevel(new Admin())
getUserAccessLevel(new Manager())