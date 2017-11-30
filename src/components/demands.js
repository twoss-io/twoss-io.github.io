import React, {Component} from 'react';
import {
    Icon,
    Tabs
} from 'antd';

import Issues from './issues'

import Addissue from './addIssue'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

const TabPane = Tabs.TabPane;

class Demands extends Component {
    constructor(props) {
        super(props)
        this.state ={
            activeKey:'1'
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
    }

    componentDidUpdate(){
    }

    returnIssues = ()=>{
        this.setState({
            activeKey:'1'
        })
    }

    onChange =(activeKey)=>{
        this.setState({
            activeKey:activeKey
        })
    }

    render() {
        return (
            <div style={{padding: '64px 128px'}}>
                <Tabs defaultActiveKey="1" activeKey={this.state.activeKey} size='large' key={this.props.index} onChange={this.onChange}>
                    <TabPane tab={<span><Icon type="bars"/>需求清單 </span>} key="1">
                        <Issues repo={'demand'}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="plus"/>新增需求 </span>} key="2">
                        <Addissue repo={'demand'} func={this.returnIssues}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {pageActions: bindActionCreators({}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Demands)
