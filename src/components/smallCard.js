import React, {Component} from 'react';
import {
    Icon,
    Card,
    Row,
    Col,
    Tag,
    Button,
    Modal
} from 'antd';
import Detail from './detail'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './smallCard.css'

class Repos2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardMd:'',
            display: "none",
            mdVisible:false
        };
    }

    componentWillMount() {
        this._isMounted = true
    }

    componentDidMount() {
        setTimeout(() => {
            if (this._isMounted) 
                this.setShow()
        }, this.props.wait)
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    setShow() {
        this.setState({display: ''})
    }

    cardClick = (e) =>{
        this.setState({
            mdVisible: true,
            cardMd:this.props.item.md
        });
    }
    handleCancel = (e) => {
        this.setState({
            mdVisible: false,
            cardMd:''
        });
    }

    render() {
        return (
            <div>
                <Card
                    title={this.props.item.description == null
                    ? this.props.item.name
                    : this.props.item.description}
                    className="animated fadeInDown smallCard service-box"
                    style={{
                    width: '100%',
                    display: this.state.display
                }}
                    bodyStyle={{
                    padding: 0,
                    position: 'relative',
                    height: 300
                }}
                    onClick={this.cardClick}>
                    <div className="cimage">
                        <div
                            className="cinner"
                            style={{
                            backgroundImage: 'url(' + this.props.item.img + ')'
                        }}></div>
                    </div>
                    <div className="cbody">
                        <Row
                            gutter={16}
                            style={{
                            padding: 8
                        }}>
                            <Col span={12}>
                                {/* {this.props.item.name} */}
                            </Col>
                            <Col
                                span={12}
                                style={{
                                textAlign: 'right'
                            }}>
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
                                    borderColor: '#e9e9e9',
                                    borderWidth: 1
                                }}/>
                            </Col>
                            <Col
                                span={24}
                                style={{
                                marginBottom: 24,
                                overflowX: 'auto',
                                height: 30,
                                display: 'flex'
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
                            <Col
                                span={24}
                                style={{
                                textAlign: 'center',
                                fontSize: 18,
                                color: '#565656'
                            }}>
                                <span
                                    style={{
                                    fontSize: 36,
                                    color: this.props.item.open_issues_count > 0
                                        ? '#108ee9'
                                        : '#e9e9e9'
                                }}>{this.props.item.open_issues_count}</span>
                                &nbsp;則議題
                            </Col>
                        </Row>
                    </div>
                    <span className='spanFilter'>
                        <div>
                            <Icon type="message"/>
                            <br/>參與討論
                        </div>
                    </span>
                </Card>
                <Modal
                    id={'modal'+this.props.index}
                    className='bigModal'
                    title={this.props.item.description == null
                        ? this.props.item.name
                        : this.props.item.description}
                    visible={this.state.mdVisible}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" type="dashed" onClick={this.handleCancel}>離開 <Icon type="rollback" /></Button>
                    ]}>
                    <Detail item={this.props.item} index={this.props.index} thismd={this.state.cardMd}/>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Repos2)