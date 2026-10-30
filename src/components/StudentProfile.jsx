function StudentProfile({ name, department, year }) {
  return (
    <div className="student-profile">
      <h2>{name}</h2>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>
    </div>
  );
}

export default StudentProfile;