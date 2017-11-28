import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import * as pageActions from '../actions/actions'
import {connect} from 'react-redux'
import {Layout, Menu, Row, Col, Icon, Form, Modal, Input, Button, message} from 'antd';
import Media from 'react-media'
// import * as pageActions from './actions/PageActions'
import Headers from '../components/header'
import Home from '../components/home'
import Groups from '../components/groups'
import Demands from '../components/demands'
import Recruitment from '../components/recruitment'
import {switchPage, showLoginModal, setUser, doLogin} from '../actions/actions'

const {Footer, Content} = Layout;
const FormItem = Form.Item;

class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: 'home',
            loging:false,
            session:sessionStorage
        };
    }

    componentWillMount(){
        if(sessionStorage.user_name){
            this.props.pageActions.setUser({
                login:sessionStorage.user_name,
                avatar_url:sessionStorage.avatar_url
            })
        }
    }

    componentDidMount(){
        console.log(this.props.user)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    this.setState({
                        loging:true
                    })

                    let cryp = btoa(values.usacc+':'+values.uspsw)
                    this.props.pageActions.doLogin(cryp).then((res)=>{
                        message.success('登入成功')
                        this
                        .props
                        .pageActions
                        .showLoginModal(false)
                        window.location.reload()
                        this.setState({session:sessionStorage})
                    }, fail=>{
                        this.setState({
                            loging:false
                        })
                        message.error('登入失敗，請重新登入')
                    })
                }
            });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Headers></Headers>
                <Content
                    style={{
                    minHeight: 900,
                    marginTop: '96px'
                }}>
                {
                    (() => {
                            let pages = this.props.pages.pages
                            switch (pages) {
                                case 'home':
                                    return <Home/>
                                case 'Groups':
                                    return <Groups session={this.state.session}/>
                                case 'Demands':
                                    return <Demands/>
                                case 'Recruitment':
                                    return <Recruitment/>
                                default :
                                    return <Home/>
                            }
                        }
                    )()
                }
                </Content>
                <Layout>
                    <Footer
                        style={{
                        background: '#404040',
                        color: '#fff',
                        textAlign: 'center'
                    }}>
                        Copyright © Digital Transformation Institute(DTI), Institute for Information
                        Industry(III)
                    </Footer>
                </Layout>
                <Modal
                    title="登入"
                    visible={this.props.user.display}
                    onCancel={()=>{this.props.pageActions.showLoginModal(false)}}
                    footer={[
                        <Button key="back" size="large" onClick={()=>{this.props.pageActions.showLoginModal(false)}}>取消</Button>
                    ]}
                    >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem style={{textAlign:'center'}}>
                            <h2><Icon type="github" /> 網站功能需以GitHub帳號登入方能完整使用，請輸入GitHub帳密或點擊連結申請帳號。</h2>
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('usacc', {
                                rules: [{ required: true, message: '請正確輸入帳號' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} size="large" placeholder="帳號" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('uspsw', {
                                rules: [{ required: true, message: '請正確輸入密碼' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} size="large" type="password" placeholder="密碼" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="dashed" className="login-form-button" style={{width:'20%'}} icon="github" onClick={()=>window.open('https://github.com/join?source=header-home', '_blank')}>
                                GitHub
                            </Button>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'80%'}} loading={this.state.loging}>
                                登入
                            </Button>
                        </FormItem>
                    </Form>                    
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pages: state.pages,
        user:state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators({
            switchPage, showLoginModal, setUser, doLogin
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Page))