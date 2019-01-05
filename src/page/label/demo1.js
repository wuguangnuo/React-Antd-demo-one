import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class ApiDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: '', data: ''};
  }
  
  componentDidMount() {
    var apiUrl = "http://127.0.0.1/api/test.php?action=a";
    this.serverRequest = $.get(apiUrl, function (result) {
      console.log("aaa");
      var result =  $.parseJSON(result);
      // resule like {"name":"a","msg":{"time":"2019-01-05 15:36:54","data":"hello world!"},"ret":"ok"}
      this.setState({
        name: result.name,
        time: result.msg.time,
        data: result.msg.data,
        ret: result.ret
      });
    }.bind(this));
  }
  
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  
  getMsg() {
    if (this.state.ret == "ok") {
      return (
        <span>
          <p>姓名：{this.state.name}，时间：{this.state.time}，内容：{this.state.data}</p>
        </span>
      );
    } else {
      return (
        <p>错误：{this.state.ret}，时间：{this.state.time}</p>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>jquery 获取 API</h2>
        {this.getMsg()}
      </div>
    );
  }
}

export default class Label extends React.Component {
    render () {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                    <ApiDemo />
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit assumenda qui itaque animi harum aspernatur perspiciatis cum consequatur ad reiciendis ipsa explicabo quasi officiis odit ullam maiores, voluptates dolorem!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, inventore, laudantium corrupti unde qui delectus eligendi accusantium quos illo reiciendis quibusdam itaque, nam consectetur commodi facilis dicta! Quidem, ipsam consequuntur!
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