import React, {Component} from 'react';
import {
    Icon,
    Card,
    Row,
    Col,
    Tag,
    Avatar,
    Button
} from 'antd';
import './delayCard.css'
import $ from 'jquery'
import {setInfo} from '../actions/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// let p1 = require("../img/jesus-kiteque-224069.jpg")
// let p2 = require("../img/sabri-tuzcu-331970.jpg")
// let p3 = require("../img/stil-410576.jpg")
// let p4 = require("../img/wander-fleur-404465.jpg")
// const imgPack = [p1, p2, p3, p4]

class Repos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "none"
        };
    }

    componentWillMount(){
        this._isMounted = true
    }

    componentDidMount() {
        $('.mdMin:eq('+this.props.index+')').html(this.props.item.md)
        $('.mdMin').find('h1:eq(0)').remove()
        setTimeout(()=>{
            if (this._isMounted)
                this.setShow()
        }, this.props.wait)
    }

    componentWillUnmount(){
        this._isMounted = false
    }    

    infoClick = (md)=>{
        this.props.pageActions.setInfo(md)
    }

    setShow () {
        this.setState({
            display:''
        })
    }

    render() {
        return (
            <Card
                id={this.props.index*999}
                className={"repoCard animated fadeIn"}
                style={{
                width: '100%',
                display: this.state.display
            }}
                bodyStyle={{
                padding: 0,
                position: 'relative',
                height: 570
            }}>
                <div
                    className="backImg"
                    style={{
                    // backgroundImage: 'url(' + imgPack[this.props.index] + ')'
                }}></div>
                <div className="blockDes">
                    <div className="desc">
                        <Row
                            gutter={8}
                            style={{
                            padding: 12
                        }}>
                            <Col span={12}></Col>
                            <Col span={12} style={{textAlign:'right'}}>
                                <Icon type="clock-circle-o"/>&nbsp;
                                <span>
                                    {new Date(this.props.item.updated_at).toLocaleDateString()}</span>
                            </Col>
                            <Col span={24}>
                                <hr
                                    style={{
                                    margin: 12,
                                    border: 'none',
                                    borderTop: 'dashed 4px',
                                    borderColor:'#e9e9e9',
                                    borderWidth: 1
                                }}/>
                            </Col>
                            <Col
                                span={24}
                                style={{
                                textAlign: 'center'
                            }}>
                                <div className='circle'>
                                    <div
                                        className='inner'
                                        style={{
                                        backgroundImage: 'url(' + this.props.item.img + ')'
                                    }}></div>
                                </div>
                            </Col>
                            <Col
                                span={24}
                                style={{
                                height: 80,
                                overflowY: 'auto',
                                textAlign: 'center'
                            }}>
                                <h3>{this.props.item.description}</h3>
                                <h3>{this.props.item.name}</h3>
                            </Col>
                            <Col
                                span={24}
                                style={{
                                overflowX: 'auto',
                                height: 25,
                                display: 'flex',
                                alignContent: 'center'
                            }}>
                                {this
                                    .props
                                    .item
                                    .topics
                                    .map(elm => {
                                        return <Tag color="#87d068" key={elm}>{elm}</Tag>
                                    })
                                }
                            </Col>
                            <Col span={24}>
                                <hr
                                    style={{
                                    margin: 12,
                                    border: 'none',
                                    borderTop: 'dashed 4px',
                                    borderColor:'#e9e9e9',
                                    borderWidth: 1
                                }}/>
                            </Col>
                            <Col
                                span={24}
                                style={{
                                height: 160,
                                position: 'relative'
                            }}>
                                <div className="mdMin">
                                </div>
                                <div className="mdFilter"></div>
                            </Col>
                            <Col span={24}>
                                <hr
                                    style={{
                                    margin: 12,
                                    border: 'none',
                                    borderTop: 'dashed 4px',
                                    borderColor:'#e9e9e9',
                                    borderWidth: 1
                                }}/>
                            </Col>
                            <Col
                                span={12}
                                style={{
                                height: 50,
                                fontSize: 14,
                                position: 'rlative'
                            }}>
                                <div
                                    style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 20,
                                    width: '100%'
                                }}>
                                    共&nbsp;
                                    <span
                                        style={{
                                        fontSize: 24,
                                        color: this.props.item.open_issues_count > 0
                                            ? '#108ee9'
                                            : '#e9e9e9'
                                    }}>{this.props.item.open_issues_count}</span>
                                    &nbsp;則議題
                                </div>
                            </Col>
                            <Col
                                span={12}
                                style={{
                                height: 50
                            }}>
                                <div
                                    style={{
                                    position: 'absolute',
                                    bottom: 5,
                                    right: 20,
                                    width: '100%',
                                    textAlign: 'right'
                                }}>
                                    <Button type="primary" icon="search" onClick={()=>this.props.setMd(this.props.item)}>查看更多</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        info: state.info
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators({
            setInfo
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repos)