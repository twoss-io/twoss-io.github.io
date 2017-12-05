import React, {Component} from 'react';
import {
    Icon,
    Tabs
} from 'antd';
import Media from 'react-media'
import Issues from './issues'

import Addissue from './addIssue'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

const TabPane = Tabs.TabPane;

class Recruitment extends Component {
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
        let s_one = {
            padding:'64px 16px'
        }
        let s_two = {
            padding:'64px 128px'
        }
        return (
            <Media query="(max-width: 1023px)">
            {match=>{
                let s_ = match ? s_one : s_two
                return <div style={s_}>
                    <Tabs defaultActiveKey="1" activeKey={this.state.activeKey} size='large' key={this.props.index} onChange={this.onChange}>
                        <TabPane tab={<span><Icon type="bars"/>招募清單 </span>} key="1">
                            <Issues repo={'recruitment'}/>
                        </TabPane>
                        <TabPane tab={<span><Icon type="plus"/>新增招募 </span>} key="2">
                            <Addissue repo={'recruitment'} func={this.returnIssues}/>
                        </TabPane>
                    </Tabs>
                </div>
            }}
            </Media>
            
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {pageActions: bindActionCreators({}, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recruitment)
