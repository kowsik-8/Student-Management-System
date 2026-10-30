import React from "react";

import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  // Student 1 details
  const student1Name = "Anu";
  const student1Department = "CSE";
  const student1Year = "3rd Year";

  // Student 2 details
  const student2Name = "Bala";
  const student2Department = "Computer Science";
  const student2Year = "3rd Year";

  return (
    <div className="app">

      <Header />

      <main className="container">

        <h2 className="section-title">Student Details</h2>

        {/* First Student */}
        <h3>Student 1</h3>

        <StudentProfile
          name={student1Name}
          department={student1Department}
          year={student1Year}
        />

        {/* Second Student */}
        <h3>Student 2</h3>

        <StudentProfile
          name={student2Name}
          department={student2Department}
          year={student2Year}
        />

      </main>

      <Footer />

    </div>
  );
}

export default App;