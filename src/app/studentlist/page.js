import Link from "next/link";

const StudentList = () => {
  const studentName = [
    { id: 1, studentName: "Nishant" },
    { id: 2, studentName: "Ketan" },
    { id: 3, studentName: "Omen" },
    { id: 4, studentName: "Ashwini" },
    { id: 5, studentName: "Anannya" },
    { id: 6, studentName: "Anushka" },
  ];
  return (
    <div>
      <h1>Student List</h1>
      {studentName.map((stu) => (
        <ul>
          <li>
            <Link href={`studentlist/${stu.studentName}`}>
              {stu.studentName}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default StudentList;
