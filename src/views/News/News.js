import React from 'react'
import { Tabs,Breadcrumb,Select,Table } from 'antd'
import '../../style/news.less'
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const columns = [
  {
    title: '头像',
    dataIndex: 'portrait',
  },
  {
    title: '标题',
    className: 'column-money',
    dataIndex: 'title',
  },
  {
    title: '日期',
    dataIndex: 'date',
  },
]

const data = [
  {
    key: '1',
    portrait: '01',
    title: '小姐姐COS魔童哪吒，开始以为是青铜，当他咧开嘴那刻网友不淡定',
    date: '2019-08-09',
  },
  {
    key: '2',
    portrait: '02',
    title: '小姐姐COS魔童哪吒，开始以为是青铜，当他咧开嘴那刻网友不淡定',
    date: '2019-08-09',
  },
  {
    key: '3',
    portrait: '03',
    title: '小姐姐COS魔童哪吒，开始以为是青铜，当他咧开嘴那刻网友不淡定',
    date: '2019-08-09',
  },
  {
    key: '4',
    portrait: '04',
    title: '小姐姐COS魔童哪吒，开始以为是青铜，当他咧开嘴那刻网友不淡定',
    date: '2019-08-09',
  },
  {
    key: '5',
    portrait: '05',
    title: '小姐姐COS魔童哪吒，开始以为是青铜，当他咧开嘴那刻网友不淡定',
    date: '2019-08-09',
  },
  {
    key: '6',
    portrait: '06',
    title: '小姐姐COS魔童哪吒，开始以为是青铜，当他咧开嘴那刻网友不淡定',
    date: '2019-08-09',
  },
  {
    key: '7',
    portrait: '07',
    title: '小姐姐COS魔童哪吒，开始以为是青铜，当他咧开嘴那刻网友不淡定',
    date: '2019-08-09',
  },
  {
    key: '8',
    portrait: '08',
    title: '小姐姐COS魔童哪吒，开始以为是青铜，当他咧开嘴那刻网友不淡定0',
    date: '2019-08-09',
  },
  {
    key: '9',
    portrait: '09',
    title: '小姐姐COS魔童哪吒，开始以为是青铜，当他咧开嘴那刻网友不淡定',
    date: '2019-08-09',
  },
  {
    key: '10',
    portrait: '10',
    title: '小姐姐COS魔童哪吒，开始以为是青铜，当他咧开嘴那刻网友不淡定',
    date: '2019-08-09',
  },
  {
    key: '11',
    portrait: '11',
    title: '小姐姐COS魔童哪吒，开始以为是青铜，当他咧开嘴那刻网友不淡定',
    date: '2019-08-09',
  },
]

class News extends React.Component {
  state = {
    options: []
  };
  handleChange = (value) => {
    if (!value || value.indexOf('@') >= 0) {
      options = [];
    } else {
      options = ['gmail.com', '163.com', 'qq.com'].map(function(domain) {
        const email = value + '@' + domain;
        return <Option key={email}>{email}</Option>;
      });
    }
  }

  render() {
    return (
      <div className="news-container">
        <div className="news-breadcrumb">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="">新闻资讯</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="news-tab">
          <div>
            <Table
              columns={columns}
              dataSource={data}
              pagination
            />
          </div>
        </div>
      </div>
    )
  }
}

export default News

