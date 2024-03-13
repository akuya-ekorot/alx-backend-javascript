interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface Student {
  workOnHomeWork: () => string;
  displayName: () => string;
}

class StudentClass implements Student {
  fistName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.fistName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork() {
    return 'Currently working';
  }

  displayName() {
    return this.fistName;
  }
}
