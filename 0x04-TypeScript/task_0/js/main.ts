interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 21,
  location: 'New York',
};

const studentList = [student1, student2];

const table = document.createElement('table');

table.innerHTML = `
  <tr>
    <th>First Name</th>
    <th>Location</th>
  </tr>
`;

studentList.forEach((student) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.location}</td>
  `;
  table.appendChild(row);
});

const body = document.querySelector('body');
body.appendChild(table);
