CanBoy = 1.87;
CanKilo = 75;
AdaBoy = 1.68;
AdaKilo = 65;

let CanKiloIndex;
CanKiloIndex = CanKilo / (CanBoy*CanBoy);

CanZayif = ( CanKiloIndex > 0 && CanKiloIndex <= 18.4 );
Cannormal = ( CanKiloIndex >= 18.5 && CanKiloIndex <= 24.9 );
CanKilolu = ( CanKiloIndex >= 25.0 && CanKiloIndex <= 29.9 );
CanŞişman = ( CanKiloIndex >= 30.0 && CanKiloIndex <= 34.9 );
console.log(CanKiloIndex.toFixed(2));
console.log(CanZayif);
console.log(Cannormal);
console.log(CanKilolu);
console.log(CanŞişman);

let AdaKiloIndex;
AdaKiloIndex = AdaKilo / (AdaBoy*AdaBoy);

AdaZayif = ( AdaKiloIndex > 0 && AdaKiloIndex <= 18.4 );
Adanormal = ( AdaKiloIndex >= 18.5 && AdaKiloIndex <= 24.9 );
AdaKilolu = ( AdaKiloIndex >= 25.0 && AdaKiloIndex <= 29.9 );
AdaŞişman = ( AdaKiloIndex >= 30.0 && AdaKiloIndex <= 34.9 );
console.log(AdaKiloIndex.toFixed(2));
console.log(AdaZayif);
console.log(Adanormal);
console.log(AdaKilolu);
console.log(AdaŞişman);
