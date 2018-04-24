// function add(val1:number,val2:number){
//     return val1 + val2;
// }
// alert(add(5,5));

// interface Iperson{FirstName:string,LastName:string,Age:number,ContactNumber?:string}
// function showUser(user:Iperson){
//     alert(user.FirstName+user.Age);
// }
// let user:Iperson = {
//     FirstName:"salam",
//     LastName:"Mia",
//     Age:30
// }
// showUser(user);

// class User{
//     FirstName:string;
//     LastName:string;
//     ContactNo:string;
//     showUserDetail(){
//         let message:string = 'Name: ${this.FirstName} ${this.LastName}, Contact No : ${this.ContactNo}';
//         alert(message);
//     }
// }
// let meaAsUser = new User();
// meaAsUser.FirstName = "Salam";
// meaAsUser.LastName = "Mia";
// meaAsUser.ContactNo = "01818540676";
// meaAsUser.showUserDetail();

// with out interface
class User{
    FirstName:string;
    LastName: string;
    ContactNo:string;
    private BankBalance:number;
    protected pro1:number;
    constructor(firstName:string, lastName:string, contactNo:string){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.ContactNo = contactNo;
    }
    ShowUserDetails(){
        let message:string = `Name : ${this.FirstName} ${this.LastName}, Contact No : ${this.ContactNo}`;
    }
}
 
let meAsUser = new User("Sourav","Mondal","234567890");
meAsUser.ShowUserDetails();
console.log(meAsUser.ShowUserDetails());





class Employee extends User{
    Designation:string;
    JoiningDate:string;
    constructor(firstName:string, lastName:string, contactNo:string,designation:string,joiningdate:string){
       super(firstName,lastName,contactNo);
       this.Designation = designation;
       this.JoiningDate = joiningdate;
    }
    ShowEmployeeDetails():void{
        let message:string = `Name : ${this.FirstName} ${this.LastName}, Contact No : ${this.ContactNo}, Designation : ${this.Designation}, Joining Date : ${this.JoiningDate},`;
    }
}
let meSoftwareDeveloper = new Employee("Sourav","Mondal","123456789","Software Developer","1st may 2010");
meSoftwareDeveloper.ShowEmployeeDetails();
console.log( meSoftwareDeveloper.ShowEmployeeDetails())


// with interface
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
 greeter(user);
