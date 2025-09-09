interface ICollegeData{
  name:string;
  displayTeachersName():void;
  getStudentName():string[];
}

class CollegeData implements ICollegeData {

  name:string;

  constructor(cName:string){
    this.name=cName;
  }

  displayTeachersName(): void {
    console.log("Ajeet","Rohan","Abhi")
  }

  getStudentName(): string[] {
    return ["Ajeet","Rohan","Abhi"]
  }

}

const c = new CollegeData("IIT Mumbai");
c.displayTeachersName();

console.log(c.getStudentName());

