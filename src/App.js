import React, { useState } from 'react'
import "antd/dist/antd.css";
import { Drawer, Button } from 'antd';
import {MenuOutlined } from '@ant-design/icons';

export default function App() {

const [visible, setVisible] = useState(false);

return (
	<div style={{
    display: 'block', width: 700, padding: 30, color:'black',
    }}>
    {/* <h4>ReactJS Ant-Design Drawer Component</h4> */}
    
      <>
          <Button type="primary"
          onClick={() => {
            setVisible(true);
          }}><MenuOutlined /></Button>

            <Drawer
            title="Drawer Demo"
            placement="left"
            closable={false}
            visible={visible}
            onClose={() => {
              setVisible(false)
            }}
            >

              <Button>
                ite
              </Button>
            <p>Item One</p>
            <p>Item Two</p>
            <p>Item Three</p>
            <p>Item Four</p>
            <p>Item Five</p>
            </Drawer>
      </>
  </div>
  );
}
