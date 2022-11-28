function MapSample() {
  let cities = ['Ankara', 'İzmir', 'Konya', 'Artvin', 'Diyarbakır', 'Burdur', 'Eskişehir'];

  return (
    <>
      <h1>Cities</h1>
      <ul>
        {/*         {cities.map((item, key) => {
          return <li key={key}>{item}</li>;
        })} */}

        {cities.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default MapSample;
