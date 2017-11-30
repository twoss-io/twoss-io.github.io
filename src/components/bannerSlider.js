import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {nxtimg, preimg, displayImg, showLoginModal} from '../actions/actions'
import {
    Icon,
    Button,
    Card,
    Tag
} from 'antd';
import Media from 'react-media'
import './bannerSlider.css'

class BannerSlider extends Component {
    componentDidMount() {
    }
    render() {
        let {now, imgs, text, total, show} = this.props.slides
        return (
            <div>
                <div className={'bannerBlock'}>
                    <div
                        className={'bannerImg animated fadeIn'}
                        style={{
                        display: show,
                        backgroundImage: 'url(' + imgs[now] + ')'
                    }}></div>
                    <div className={'bannerBtn'}>
                        <Button shape="circle" icon="left" size='large' ghost onClick={()=>{
                            this.props.bannerAction.displayImg('none')
                            this.props.bannerAction.preimg();
                            setTimeout(()=>{
                                this.props.bannerAction.displayImg('')
                            }, 100)
                        }}/>
                        &nbsp;&nbsp;&nbsp;
                        <Button shape="circle" icon="right" size='large' ghost onClick={()=>{
                            this.props.bannerAction.displayImg('none')
                            this.props.bannerAction.nxtimg();
                            setTimeout(()=>{
                                this.props.bannerAction.displayImg('')
                            }, 100)
                        }}/>
                        &nbsp;&nbsp;&nbsp;
                        <span className="bannerNum">{now+1}</span>&nbsp;<span className="bannerTotal">/ {total}</span>
                    </div>
                    <Media query="(max-width: 1023px)">
                            {matches => matches ? null : (
                                <div className={'bannerCard animated fadeInRight'}>
                                    <Card
                                        title="Powered by GitHub"
                                        bordered={false}
                                        style={{
                                        width: 400
                                    }}>
                                        The development of this project is based on &nbsp;
                                        <Tag color="#f99200">
                                            <Icon type="github"/>&nbsp;
                                            <a href="https://developer.github.com/v3/">GitHub API v3</a>
                                        </Tag>
                                        <br/>
                                        To get full authority on this website, please login into your GitHub account.
                                        <br/>
                                        <br/>
                                        <hr
                                            style={{
                                            borderTop: 'dashed 1px'
                                        }}/>
                                        <br/>
                                        <Button type="primary" icon="user" size="large" onClick={()=>window.open('https://github.com/join?source=header-home', '_blank')}>註冊</Button>
                                        &nbsp;
                                        <Button type="primary" icon="login" size="large" ghost onClick={()=>{this.props.bannerAction.showLoginModal(true)}}>登入</Button>
                                    </Card>
                                </div>
                            )
                        }
                    </Media>
                    <div className={'bannerTxt animated fadeInLeft'} style={{
                        display:show
                    }}>
                        <h1>{text[now].a}<br/>{text[now].b}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {slides: state.slides}
}

function mapDispatchToProps(dispatch) {
    return {
        bannerAction: bindActionCreators({nxtimg, preimg, displayImg, showLoginModal}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BannerSlider)