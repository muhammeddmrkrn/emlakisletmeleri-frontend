import React from 'react';
import { Form } from 'antd';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import EmlakIslemleri from './emlak/action/EmlakIslemleri';
import IsyeriIslemleri from './isyeri/action/IsyeriIslemleri';
import MusteriIslemleri from './musteri/action/MusteriIslemleri';

const { TabPane } = Tabs;

class EmlakIsletmesi extends React.Component {

    render() {
      return (
        <div>
          <Form className= "emlakIsletmesi"
              labelCol={{ span: 3 }} 
              wrapperCol={{ span: 12 }}
              layout="horizontal">
              <Tabs defaultActiveKey="1">
                  <TabPane tab="İşyeri İşlemleri" key="1">
                      <IsyeriIslemleri/>
                  </TabPane>
                  <TabPane tab="Müşteri İşlemleri" key="2">
                      <MusteriIslemleri/>
                  </TabPane>
                  <TabPane tab="Emlak İşlemleri" key="3">
                      <EmlakIslemleri/>
                  </TabPane>
              </Tabs>
          </Form>
        </div>
      );
    }
}


export default (EmlakIsletmesi);