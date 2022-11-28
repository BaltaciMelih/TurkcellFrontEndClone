import { useState } from 'react';

function ArrayStateSample() {
  let lessonList = ['Türkçe', 'Matematik', 'Fizik', 'Kimya', 'Edebiyat', 'Tarih', 'Coğrafya'];

  const [lessons, setLessons] = useState(lessonList);

  return (
    <>
      {lessons.map((item, index) => {
        return <ul key={index}>{<li>{item}</li>}</ul>;
      })}

      <button onClick={() => setLessons([])}>Empty List</button>
      <button onClick={() => setLessons(lessonList)}>Load Lessons</button>
    </>
  );
}

export default ArrayStateSample;
