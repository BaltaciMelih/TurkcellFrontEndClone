function ObjectArraySample() {
  let student = [
    {
      name: 'Ercan',
      surname: 'Yesil',
      onlineStatus: true,
    },
    {
      name: 'Hacı Hüsnü',
      surname: 'Yumrukaya',
      onlineStatus: false,
    },
    {
      name: 'A.Melih',
      surname: 'Baltacı',
      onlineStatus: true,
    },
    {
      name: 'Halil Enes',
      surname: 'Ozdemir',
      onlineStatus: false,
    },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {student.map((item, key) => {
            if (item.onlineStatus === true) {
              return (
                <tr key={key} style={{ color: 'green' }}>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.onlineStatus.toString()}</td>
                </tr>
              );
            } else {
              return (
                <tr key={key} style={{ color: 'tomato' }}>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.onlineStatus.toString()}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}

export default ObjectArraySample;
