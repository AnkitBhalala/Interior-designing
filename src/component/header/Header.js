import { Menu } from 'antd';
import { Link } from "react-router-dom";

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

    <div>
      <Menu defaultSelectedKeys={['home']} mode="horizontal" items={items} />
    </div>
  );
}