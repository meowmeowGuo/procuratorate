import React, { Component } from 'react';
import Card from '../../component/Card1';
import CommTable from './components/commTable';
import SurvDetail from './components/survDetail';
import '../style/style.less';
const img1 = require('../../../images/icon_cahxuntiaojian.png');
const img4 = require('../../../images/icon_fuwuxinxi_selected.png');

export default class Surveilance extends Component {
  constructor(props) {
    super(props);
    this.state = ({
    });
  }

  getSValue = (value)=>{
    console.log(value);
  }
  render() {

    return (
      <div className="page1">
        {/*政务服务->服务办理->电子监察*/}
        <div className="my-header">
          <Card title="查询条件" icon={img1} >
            <CommTable getSValue={this.getSValue}/>
          </Card>
          <div className="mt30" />
          <Card className="second-card" title="服务办理信息" icon={img4} >
            <SurvDetail/>
          </Card>
        </div>

      </div>
    );
  }
}
