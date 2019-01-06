import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'antd';
import { ApiDemo, ApiAxiosDemo } from './Api';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default class Label extends React.Component {
    render () {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                  <ApiDemo source="http://127.0.0.1/api/test.php?action=a" />
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                  <ApiAxiosDemo source="http://127.0.0.1/api/test.php?action=b" />
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa similique, dolor soluta quod necessitatibus possimus ad alias, voluptatem esse officiis vel numquam. Ea nobis amet hic labore praesentium et?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt quos ea quae cum minima odit facilis esse hic, quibusdam quas maiores soluta fugiat est odio enim distinctio labore dicta?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nisi alias, asperiores ratione quas expedita illo nesciunt veritatis voluptatibus exercitationem ut repellat omnis, pariatur dolore ipsum temporibus itaque? Nostrum, culpa.
                </TabPane>
            </Tabs>
        )
    }
}