import './App.css';
import { useState } from 'react'

function App() {
  
  const [students,setstudents]= useState(
    [

      {
        name:"Rıza Yılmaz",
        grade:67,
      },
      {
        name:"Hacı Hüsnü Yumrukaya",
        grade:99,
      },
      {
        name:"Okan Maden",
        grade:50,
      },
      {
        name:"Varol Maksutoğlu",
        grade:100,
      },
    ]
  ); 

const order = students.sort((a, b) => (a.grade < b.grade) ? 1 : -1)
  

const gradeall = (grades) => {
  if(grades.grade <= 50){
    return "low";
  }
  else if(grades.grade <= 75){
    return "mid";
  }
  else if(grades.grade <= 100){
    return "high";
  }
}
  return (
    <div className="App">
      {order.map((student,index) => {
        return(
          <div key={index} className={`riskStatus ${gradeall(student)}`}>
          <p>
            {student.name} isimli öğrencinin aldığı not {student.grade} olarak belirlenmiştir.
            öğrenci dersi/dersten {gradeall(student)}
          </p>
        </div>
        )
      })}
    </div>
  );
}

export default App;
