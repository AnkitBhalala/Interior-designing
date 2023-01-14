import React from 'react';
import { DatePicker, Button } from 'antd';

import './Home.css';

export function Home() {
  
  return (
    <div>
      <DatePicker
        size='small'
      />
      <Button type="primary" className={'abc'}>Primary Button</Button>
    </div>
  );
}
