import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Routes, Route, useParams } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
}

function StudentDetail() {
  const { id } = useParams();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setStudent(res.data));
  }, [id]);

  return (
    <div className="container">
      {student ? (
        <>
          <h2>Chi tiết sinh viên</h2>
          <p><strong>Họ tên:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
        </>
      ) : (
        <p>Đang tải...</p>
      )}
    </div>
  );
}

export default function Bai2() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Bài 2: Danh sách sinh viên</h2>
      <Routes>
        <Route
          path="/"
          element={
            <ul>
              {students.map((s) => (
                <li key={s.id}>
                  <Link to={`/bai2/${s.id}`}>{s.name}</Link> - {s.email}
                </li>
              ))}
            </ul>
          }
        />
        <Route path=":id" element={<StudentDetail />} />
      </Routes>
    </div>
  );
}
