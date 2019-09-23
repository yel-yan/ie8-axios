import React from "react";
import { Form, Select, InputNumber, DatePicker, Switch,
    Slider, Button, message, Row, Col, Upload, Icon, Modal, Input } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

const WPModal = React.createClass({
    mixins: [Form.ValueMixin],

    getInitialState() {
        return {
            formData: {
                inputNumber: undefined,
                static: '唧唧复唧唧木兰当户织呀',
                switch: undefined,
                slider: undefined,
                select: undefined,
                startDate: undefined,
                endDate: undefined,
            }
        };
    },

    handleUpload(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(info.file.name + ' 上传成功。');
        } else if (info.file.status === 'error') {
            message.error(info.file.name + ' 上传失败。');
        }
    },

    handleOk() {
        this.props.onOk({visible:!this.props.visible,type:'wp'})
    },
    
    handleCancel(){
        this.props.onCancel({visible:!this.props.visible,type:'wp'})
    },

    handleSubmit(e) {
        e.preventDefault();
        message.success('收到表单值~~~ ：' + JSON.stringify(this.state.formData, function(k, v) {
        if (typeof v === 'undefined') {
            return '';
        }
            return v;
        }));
    },

    render() {
        const formData = this.state.formData;
        console.log(this.props.visible)
        const visible = this.props.visible;
        return (
            <Modal title="物品" visible={visible}
                    onOk={this.handleOk} onCancel={this.handleCancel}>
                <Form horizontal onSubmit={this.handleSubmit} >
                    <Row>
                        <Col span="3"></Col>
                        <Col span="6">
                        <FormItem
                                label="物品名称："
                                labelCol={{span: 12}}
                                wrapperCol={{span: 12}}>
                                <Select size="large" defaultValue="lucy" style={{width:100}} name="select" onChange={this.setValue.bind(this, 'select')} value={formData.select}>
                                    <Option value="jack">jack</Option>
                                    <Option value="lucy">lucy</Option>
                                    <Option value="disabled" disabled>disabled</Option>
                                    <Option value="yiminghe">yiminghe</Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem
                                label="数量："
                                labelCol={{span: 12}}
                                wrapperCol={{span: 12}}>
                                <Select size="large" defaultValue="lucy" style={{width:100}} name="select" onChange={this.setValue.bind(this, 'select')} value={formData.select}>
                                    <Option value="jack">jack</Option>
                                    <Option value="lucy">lucy</Option>
                                    <Option value="disabled" disabled>disabled</Option>
                                    <Option value="yiminghe">yiminghe</Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>

                    <FormItem
                        id="control-input"
                        label="物品用途："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}>
                        <Input id="control-input" placeholder="Please enter..." />
                    </FormItem>

                    <FormItem
                        id="control-textarea"
                        label="领用详情："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}>
                        <Input type="textarea" placeholder="请输入" id="control-textarea" rows="3" />
                    </FormItem>

                    <FormItem
                        label="审批人"
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
                        required>
                        <Select
                            multiple
                            defaultValue={['a10', 'c12']}
                            onChange={this.handleChange1}
                        >
                            {children}
                        </Select>
                    </FormItem>

                    <FormItem
                        label="抄送人"
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}
                        required>
                        <Select
                            multiple
                            defaultValue={['a10', 'c12']}
                            onChange={this.handleChange1}
                        >
                            {children}
                        </Select>
                    </FormItem>
                </Form>
            </Modal>
        );
    }
});

export default WPModal;