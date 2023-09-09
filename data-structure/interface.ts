// Define the interface
interface Printable {
  print(): void;
}

// Implement the interface in a class
class IDocument implements Printable {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  public print(): void {
    console.log(this.content);
  }
}

// Create an instance of the class
const doc = new IDocument("This is a printable document.");

// Call the print method
doc.print();


//interface as paramter type
interface User {
    name: string
    id: number
}

class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const user: User = new UserAccount('Murphy', 1)
console.log(user.name)
