import React from 'react';
import $ from 'jquery';
import axios from 'axios';

export class ApiDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', time: '', data: '',ret: '' };
  }
  componentDidMount() {
    var apiUrl = this.props.source;
    this.serverRequest = $.get(apiUrl, function (result) {
      var result = $.parseJSON(result);
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
      return (<span>
        <p>姓名：{this.state.name}，时间：{this.state.time}，内容：{this.state.data}</p>
      </span>);
    }
    else {
      return (<p>错误：{this.state.ret}，时间：{this.state.time}</p>);
    }
  }
  render() {
    return (<div>
      <h2>jquery 获取 API</h2>
      {this.getMsg()}
    </div>);
  }
}

export class ApiAxiosDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', time: '', data: '',ret: '' };
  }
  componentDidMount() {
    const _this=this;
    var apiUrl = this.props.source;
    axios.get(apiUrl)
    .then(function (result) {
      _this.setState({
        name: result.data.name,
        time: result.data.msg.time,
        data: result.data.msg.data,
        ret: result.data.ret
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  componentWillUnmount() {}
  getMsg() {
    if (this.state.ret == "ok") {
      return (<span>
        <p>姓名：{this.state.name}，时间：{this.state.time}，内容：{this.state.data}</p>
      </span>);
    }
    else {
      return (<p>错误：{this.state.ret}，时间：{this.state.time}</p>);
    }
  }
  render() {
    return (<div>
      <h2>axios 获取 API</h2>
      {this.getMsg()}
    </div>);
  }
}