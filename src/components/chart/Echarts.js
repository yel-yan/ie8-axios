import React from 'react'
import { DatePicker ,Button} from 'antd'
import './Chart.less'
const RangePicker = DatePicker.RangePicker;

class Echarts extends React.Component {
    state = {
      option: {
        xAxis: {
          type: 'category',
          data: ['请假', '加班', '报销', '出差', '外出', '物品'],
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
          padding: [5, 10],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top:'3%',
          containLabel: true,
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          name: '数量',
          data: [10, 52, 200, 334, 390, 330],
          type: 'line',
        }],
      },
    }

    componentDidMount() {
      const { option } = this.state
      const charts = echarts.init(document.getElementById('charts'))
      charts.setOption(option)
    }

  onChange = (value) => {
    console.log('From: ', value[0], ', to: ', value[1])
  }

  render() {
    return (
      <div className="chart-card">
        <div className="chart-header">
          <i /> 我发起的审批
        </div>
        <div style={{padding:'15px'}}>
          <RangePicker style={{width: 184}} onChange={this.onChange} />
          <Button type="primary" htmlType="submit" style={{marginLeft:'10px'}}>搜索</Button>
        </div>
        <div id="charts" style={{ width: '100%', height: '300px' }} />
      </div>
    )
  }
}

export default Echarts
