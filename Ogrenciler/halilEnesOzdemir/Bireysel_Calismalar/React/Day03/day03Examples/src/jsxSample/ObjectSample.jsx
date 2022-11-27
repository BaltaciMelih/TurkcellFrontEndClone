function ObjectSample() {
  let user = {
    name: 'Halil',
    surname: 'Ozdemir',
    age: 24,
    group: {
      name: 'Kuvvetmira',
      year: '25',
    },
  };

  return (
    <>
      <p>Username: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Group Name: {user.group.name}</p>
      <p>Grup yılı: {user.group.year}</p>
    </>
  );
}

export default ObjectSample;
