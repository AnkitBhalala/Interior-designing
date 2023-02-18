import { Menu } from 'antd';
import { Link } from "react-router-dom";
import './Header.css';


export function Header() {
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: 'home',
      
    },
    {
      label: <Link to="/counter">Counter page</Link>,
      key: 'counter',
    },
  ];
  return (

    <div className='bordTop bgOrange'>
      <div className='rgtAln mtop10' >
       <img width={30} src="instalogo.png" alt="instagram" className='marg20'></img>
       <img width={30} src="facebooklogo.png" alt='facebook' className='marg20'></img>
      </div>
      <div className='dflex fleRow bggrey'>
      <div className='w33 imgLeft' >
      <img
          width={150}
          height={80}
          src="2140201.png"
          alt='logo' 
          
        ></img>
        </div>
        <div className='w33 dflex' >
        <img
          width={450}
          height={200}
          src="Bedeck_Black_Rust_Logo.png"
          alt='logo' 
          className='mauto'
        ></img>
        </div>
        <div className='w33 imgRgt'>
        <img
          width={170}
          height={75}
          src="1836813-ff9800.png"
          alt='logo' 
          className='floRgt'
        ></img>
        </div>
      </div>
      <Menu defaultSelectedKeys={['home']} mode="horizontal" items={items} className='w100 menubg' />
    </div>
  );
}