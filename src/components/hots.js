import React, {Component} from 'react';
import {Row, Col, Icon, Spin, Modal, Button} from 'antd';
import DelayCard from './delayCard'
import {fetchRepos} from '../actions/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import './hots.css'

class Hots extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false, 
            need:'none',
            modalTitle:'',
            modalVisible:false,
            modalContent:''
        };
    }

    componentWillMount(){
        this
            .props
            .pageActions
            .fetchRepos('?sort=updated').then(res=>{
                
            }, fail=>{
                this.setState({
                    need:''
                })
            })
    }

    setModal=(item)=>{
        this.setState({
            modalTitle:item.description == null
            ? item.name
            : item.description,
            modalVisible:true,
            modalContent:item.md
        })
    }

    handleCancel=()=>{
        this.setState({
            modalVisible:false
        })
    }

    render() {
        let repos = this.props.repos.repos
        let isFetched = this.props.repos.isFetched
        let flag = 0
        let col = repos.map((item, index) => {
            if (item.name === 'twoss-io.origin' ||item.name === 'issues-testing' || item.name === 'twoss-io-videocms-demo' || item.name === 'Main' || item.name === 'demand' || item.name === 'recruitment') {return null} else {
                flag++
                if(flag>4){
                    return null
                }else{
                    return <Col lg={6} md={12} sm={24} key={index} style={{
                        padding: 8
                    }}>
                        <DelayCard wait={index * 500} item={item} index={index} setMd = {this.setModal}/>
                    </Col>
                }
            }
        })
        return (
            <Row
                gutter={0}
                style={{
                marginTop: 32,
                marginBottom: 32,
                marginLeft: 128,
                marginRight: 128
            }}>
                {isFetched
                    ? <Col
                            span={24}
                            style={{
                            textAlign: 'center'
                        }}>
                            <Spin size="large"/>
                        </Col>
                    : col}
                <div style={{display:this.state.need, textAlign:'center'}}>
                    <br/>
                    <h3 style={{color:'#f04134'}}>
                        <Icon type="info-circle-o" /> 請先登入取得完整功能
                    </h3>
                </div>
                <Modal
                    className='hotsModal'
                    title={this.state.modalTitle}
                    visible={this.state.modalVisible}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" type="dashed" onClick={this.handleCancel}>離開 <Icon type="rollback" /></Button>
                    ]}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <div dangerouslySetInnerHTML={{__html: this.state.modalContent}}/>
                        </Col>
                    </Row>
                </Modal>
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return {
        repos: state.repos,
        info:state.info
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators({
            fetchRepos
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hots)