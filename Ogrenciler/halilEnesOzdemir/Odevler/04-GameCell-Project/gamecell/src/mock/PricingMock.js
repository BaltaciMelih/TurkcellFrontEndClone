import Button from '../components/Button/Button';
import tick from '../assets/tick.svg';

const pricingMock = [
  {
    title: 'BASIC',
    status: 'Free',
    src: tick,
    opt1: 'Standart Access',
    opt2: '1-hr session length',
    button: <Button children={'JOIN NOW'} width='11.56rem' height='2.5rem' />
  },
  {
    title: 'STANDARD',
    status: '15$/month',
    src: tick,
    opt1: 'Standart Access',
    opt2: '1-hr session length',
    button: <Button children={'JOIN NOW'} width='11.56rem' height='2.5rem' />,
    className: `border border-success`
  },
  {
    title: 'PREMIUM',
    status: '30$/month',
    src: tick,
    opt1: 'Standart Access',
    opt2: '1-hr session length',
    button: <Button children={'JOIN NOW'} width='11.56rem' height='2.5rem' />
  }
];

export default pricingMock;
