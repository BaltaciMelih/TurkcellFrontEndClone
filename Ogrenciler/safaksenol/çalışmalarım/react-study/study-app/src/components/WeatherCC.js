import React, { Component } from 'react';

class WeatherCC extends Component {
    //Yaşam döngüsü(life cycle)
    // constructor() {
    //     //Bunun içerisinde statelerimizi ve proplarımızı kontrol ediyoruz this.state={};
    // }
    // componentDidMount() {
    //     //Burada site il açıldığında server tarafından çektiğimiz şeylerimi burada görürüz.
    // }
    // componentDidUpdate() {
    //     //Daha önceden render ettiğimiz bileşenimiz üzerinde bir değişiklik olduğunda çalışıyor
    // }
    // componentWillUnmount() {
    //     //Bileşen eğer domdan çıkarılacaksa çıkarılmadan önce bu metod çalışır örneğin bir sayaç düşünelim bu sayaç sonlandırılken durdurulması gerekiyor ve bu işleri burada yaparız
    // }
  render() {
      return (
        //Class componentlerde props ile veri gönderme
      <div >Bugün hava <span style={this.props.style}>{this.props.status}</span></div>
    )
  }
}

//Varsayılan değer belirleme
WeatherCC.defaultProps = {
    status: "güneşli",
    style: { backgroundColor: "red", color: "white" },
};

export default WeatherCC;