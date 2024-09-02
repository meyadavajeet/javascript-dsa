// Dependency Inversion Principle
// Dependency Inversion Principle: The "D" in SOLID Made Simple

interface Repository {
  save(): void;
}


interface Service {
  save(): void;
}

class UserController {
  constructor(private service: Service) { }
  save() {
    // console.log("User Controller");
    this.service.save();
  }
}

class UserService implements Service {
  constructor(private repository: Repository) { }
  save() {
    // console.log("User Service")
    this.repository.save()
  }
}


class UserPostgressRepository implements Repository {
  save() {
    console.log("User Repository Save data in Postgress database")
  }
}

class UserMongoRespository implements Repository {
  save(): void {
    console.log("User Repository Save data in Mongo Database");
  }
}



class UserFakeDbRespository implements Repository {
  save(): void {
    console.log("User Repository Save data in Fake Database");
  }
}



class ModernUserService implements Service {
  constructor(private repository: Repository) { }
  save(): void {
    this.repository.save();
  }
}

// const userRepositry = new UserPostgressRepository();
// const userService = new UserService(userRepositry);
// const userController = new UserController(userService);

// userController.save();


// const userMongoRepositry = new UserMongoRespository();
// const userService = new UserService(userMongoRepositry);

// const userFakeRepositry = new UserFakeDbRespository();
// const userService = new UserService(userFakeRepositry);

// const userController = new UserController(userService);

// userController.save();


const fakeRepo = new UserFakeDbRespository();

const moderUserService = new ModernUserService(fakeRepo);

const userController = new UserController(moderUserService);

userController.save();