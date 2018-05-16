import React, {Component} from 'react';
import {
    Icon,
    Tabs
} from 'antd';

import $ from 'jquery'

import Issues from './issues'

import Addissue from './addIssue'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import './detail.css'

const TabPane = Tabs.TabPane;

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state ={
            activeKey:'1'
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        // $('.mdContent').html(this.state.thismd)
        $('.anchor').remove()
    }

    componentDidUpdate(){
        $('.anchor').remove()
    }

    returnIssues = ()=>{
        this.setState({
            activeKey:'2'
        })
    }

    onChange =(activeKey)=>{
        this.setState({
            activeKey:activeKey
        })
    }

    render() {
        return (
            <Tabs defaultActiveKey="1" activeKey={this.state.activeKey} size='large' key={this.props.index} onChange={this.onChange}>
                <TabPane
                    tab={<span><Icon type="info-circle-o"/>詳細內容 </span>}
                    key="1"
                    className="mdContent">
                    <div className="content" dangerouslySetInnerHTML={{__html: this.props.thismd}}></div>
                </TabPane>
                <TabPane tab={<span><Icon type="bars"/>議題清單 </span>} key="2">
                    <Issues repo={this.props.item.name}/>
                </TabPane>
                <TabPane tab={<span><Icon type="plus"/>新增議題 </span>} key="3">
                    <Addissue repo={this.props.item.name} func={this.returnIssues}/>
                </TabPane>
            </Tabs>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {pageActions: bindActionCreators({}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)