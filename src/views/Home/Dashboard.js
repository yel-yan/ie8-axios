import React from 'react'
import { Col, Row, Table,Button } from 'antd'
import '../../style/dashboard.less'
import * as API from '../../axios/myAxios'
import components from '../../components/index'
import '../../style/ca.less'

const data = [
  {
    key: '1',
    name: 'John Brown',
    type: 'qj',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    type: 'bx',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    type: 'cc',
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'John Brown',
    type: 'jb',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Jim Green',
    type: 'wc',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Jim Green',
    type: 'wc',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'Jim Green',
    type: 'wc',
    address: 'London No. 1 Lake Park',
  }
]

class Dashboard extends React.Component {
  componentDidMount() {
    API.GET('/user/public_conf').then((data) => {
      alert("aaaaaaaaaaaaaaaaaaaaa")
      alert(data.system_info_accid)
      console.log('异步加载数据成功')
      console.log(data)

    }).catch((err) => {
      console.log(err);
    })

    API.GET('/user/center').then((data) => {
      console.log('登录用户信息')
      console.log(data)
    }).catch((err) => {
      console.log(err);
    })
  }

  handleUpdate = (text) => {
    console.log(text);
    const temp = Object.assign({}, text)
    console.log(temp,"aaaaaaaaaaaaaaaa")
    this.setState({formData:temp})
    console.log(temp)
    switch (text.type) {
      case 'qj':this.setState({ visible_qj: true});break
      case 'jb':this.setState({ visible_jb: true}); break
      case 'bx':this.setState({ visible_bx: true});break
      case 'cc':this.setState({ visible_cc: true}); break
      case 'wc':this.setState({ visible_wc: true}); break
      case 'wp':this.setState({ visible_wp: true}); break
    }
  }

  render() {
    const columns = [
      {
        title: '申请人',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '申请类型',
        className: 'column-money',
        dataIndex: 'type',
      },
      {
        title: '申请理由',
        dataIndex: 'address',
      },
      {
        title: '操作',
        key: 'operation',
        width:'100',
        className:'column-operation',
        render: (text, record) => {
          return <span>
            <Button type="primary" htmlType="submit" style={{marginLeft:'10px'}} onClick={this.handleUpdate.bind(this, text)}>审批</Button>
          </span>;
        }
      }
    ]
    return (
      <div className="container">
        <div style={{ clear: 'both' }}>
          <Row type="flex" justify="space-between" style={{ clear: 'both' }}>
            <Col span="9" className="col" style={{ padding: '0 10px', marginBottom: '20px' }}>
              <div style={{ position: 'relative' }}>
                <components.lineChart/>
              </div>
            </Col>
            <Col span="9" className="col" style={{ padding: '0 10px', marginBottom: '20px' }}>
              <div style={{ position: 'relative' }}>
                <components.BarChart/>
              </div>
            </Col>
            <Col span="6" className="col" style={{ padding: '0 10px', marginBottom: '20px' }}>
              <div className="fiche">
                <div className="fiche-header">
                  <div className="box">
                    <div className="chart">蔡文姬</div>
                    <div className="casket">
                      <div className="hezi">
                        <div className="name">蔡文姬</div>
                        <div className="ender"></div>
                      </div>
                      <div className="company">广西杰思信息科技有限公司</div>
                    </div>
                  </div>
                </div>
                <div className="card-cell">
                  <div className="a">
                    <div className="shu"></div>
                    <div className="message">个人信息</div>
                  </div>
                  <div className="b">
                    <div className="phone">手机</div>
                    <div className="number">19162296552</div>
                  </div>
                  <div className="c">
                    <div className="mailbox">邮箱</div>
                    <div className="mailbox-v">2422514774@qq.com</div>
                  </div>
                  <div className="d">
                    <div className="position">职位</div>
                    <div className="position-v">UI设计</div>
                  </div>
                  <div className="button">
                    <Button type="primary" size="large">进入个人中心</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ clear: 'both' }}>
          <Row type="flex" justify="space-between">
            <Col span="16" className="col" style={{ padding: '0 10px' }}>
              <div className="card">
                <div className="card-header">
                  <i /> 待处理
                </div>
                <div style={{ background: '#fff', height: 'auto', padding: '0 15px' }}>
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination
                    size="middle"
                  />
                </div>
              </div>
            </Col>
            <Col span="8" className="col" style={{ padding: '0 10px' }}>
              <div style={{ height: 'auto' }}>
                <div className="card">
                  <div className="card-header">
                    <i /> 公告动态
                  </div>
                  {
                    [1, 2, 3].map((item, index) => (
                    <div className="card-cell" key={index}>
                      <div className="cell-title">
                          广州商X一行将于30日莅临公司考察调研
                      </div>
                      <div className="cell-extra">09月14日 10:23:21</div>
                     </div>
                     ))
                  }
                </div>

                <div className="card">
                  <div className="card-header">
                    <i /> 新闻资讯
                  </div>
                  {
                    [1, 2, 3, 4, 5, 6].map((item, index) => (<div className="card-cell" key={index}>
                      <div className="cell-title">
                          广州商X一行将于30日莅临公司考察调研
                      </div>
                      <div className="cell-extra">09月14日 10:23:21</div>
                    </div>))
                  }
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Dashboard
