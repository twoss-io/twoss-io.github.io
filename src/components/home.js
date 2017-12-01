import React, {Component} from 'react'
import {Row, Col, Icon, BackTop, Card} from 'antd';
import BannerSlider from './bannerSlider'
import MyAnchor from './myAnchor'
import Events from './events'
import Hots from './hots'
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Row gutter={0}>
                        <Col span={24}>
                            <BannerSlider/>
                        </Col>
                    </Row>
                </div>
                <div
                    style={{
                    width: '100%',
                    position: 'relative'
                }}>
                    <MyAnchor/>
                    <Row
                        gutter={0}
                        id="recent"
                        style={{
                        marginTop: '64px',
                        marginLeft: 128,
                        marginRight: 128,
                    }}>
                        <Col
                            span={24}
                            style={{
                            textAlign: 'center'
                        }}>
                            <h1>近期活動</h1>
                            <hr
                                style={{
                                marginTop: '12px',
                                marginLeft: 256,
                                marginRight: 256,
                                border:'none',
                                borderTop: 'dashed 4px',
                                borderWidth: 1,
                                borderColor: '#f99200'
                            }}/>
                        </Col>
                    </Row>
                    <Row
                        style={{
                        margin: '32px 0px',
                        padding:'0px 128px'
                    }}>
                        <Col span={12} offset={6} >
                            <Card
                                onClick={()=>window.open('/106itmonth.html', '_blank')} 
                                style={{
                                width: '100%'
                            }}
                                bodyStyle={{
                                padding: 0,
                                cursor:'pointer'
                            }}>
                                <div
                                    className="custom-image"
                                    style={{
                                    height: 100
                                }}>
                                    <div className="custom-img" style={{backgroundImage:'url("'+require('../img/106itmonth.jpg')+'")'}}/>
                                </div>
                                <div className="custom-card">
                                    <h3>106 資訊月</h3>
                                    <p>開源軟體館</p>
                                    <p>日期：106/12/6~12/11 | 10:00~18:00</p>
                                    <p>地點：台北世貿一館 | 台北市信義路5段5號</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row
                        gutter={0}
                        id="hot"
                        style={{
                        paddingTop: '64px',
                        marginLeft: 128,
                        marginRight: 128,
                    }}>
                        <Col
                            span={24}
                            style={{
                            textAlign: 'center'
                        }}>
                            <h1>熱門群組</h1>
                            <p><Icon type="message"/>
                                The most popular discussion co-Labs on Twoss-io</p>
                            <hr
                                style={{
                                marginTop: '12px',
                                marginLeft: 256,
                                marginRight: 256,
                                border:'none',
                                borderTop: 'dashed 4px',
                                borderWidth: 1,
                                borderColor: '#f99200'
                            }}/>
                        </Col>
                    </Row>
                    <Hots/>
                    <Row
                        gutter={0}
                        id="links"
                        style={{
                        marginTop: '64px'
                    }}>
                        <Col
                            span={24}
                            style={{
                            textAlign: 'center'
                        }}>
                            <h1>相關連結</h1>
                            <p><Icon type="link" />
                                Connection</p>
                            <hr
                                style={{
                                marginTop: '12px',
                                marginLeft: 256,
                                marginRight: 256,
                                border:'none',
                                borderTop: 'dashed 4px',
                                borderWidth: 1,
                                borderColor: '#f99200'
                            }}/>
                        </Col>
                    </Row>
                    <Row
                        gutter={8}
                        style={{
                        margin: '64px 0px',
                        padding:'24px 128px',
                        background:'#e9e9e9'
                    }}>
                        <Col span={2}/>
                        <Col span={8}>
                            <Card  
                            onClick={()=>{let win = window.open('http://twoss.io/oss-tourist/', '_blank'); win.opener=null}} 
                            bodyStyle={{
                                padding: 0,
                                cursor:'pointer'
                            }} style={{ width: "100%" }}>
                                <div
                                    className="custom-image"
                                    style={{
                                    height: 100
                                }}>
                                    <div className="link-img-01"/>
                                </div>
                                <div className="custom-card">
                                    <h3>開源圖書館</h3>
                                    <p><a target="_blank" href="http://twoss.io/oss-tourist/" rel="noopener noreferrer">oss-tourist</a></p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={4}/>
                        <Col span={8}>
                            <Card 
                            onClick={()=>{let win = window.open('http://twoss.io/oss-collection/index.html', '_blank'); win.opener=null}} 
                            bodyStyle={{
                                padding: 0,
                                cursor:'pointer'
                            }} style={{ width: "100%" }}>
                                <div
                                    className="custom-image"
                                    style={{
                                    height: 100
                                }}>
                                    <div className="link-img-02"/>
                                </div>
                                <div className="custom-card">
                                    <h3>開源大補帖</h3>
                                    <p><a target="_blank"  href="http://twoss.io/oss-collection/index.html" rel="noopener noreferrer">oss-collection</a></p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={2}/>
                    </Row>
                    <Row
                        gutter={0}
                        id="about"
                        style={{
                        marginTop: '64px'
                    }}>
                        <Col
                            span={24}
                            style={{
                            textAlign: 'center'
                        }}>
                            <h1>關於我們</h1>
                            <p><Icon type="info-circle-o"/>
                                The plan of this project and who we are</p>
                            <hr
                                style={{
                                marginTop: '12px',
                                marginLeft: 256,
                                marginRight: 256,
                                border:'none',
                                borderTop: 'dashed 4px',
                                borderWidth: 1,
                                borderColor: '#f99200'
                            }}/>
                        </Col>
                    </Row>
                    <Row
                        id="aboutus"
                        style={{
                        marginTop: '64px',
                        marginBottom: '64px',
                        marginLeft: 128,
                        marginRight: 128
                    }}>
                        <Col
                            span={12}
                            style={{
                            fontSize: 18,
                            padding: 16
                        }}>
                            <p>
                                行政院推動「數位國家‧創新經濟發展方案」簡稱DIGI+，推動重心從硬體移往軟體等應用面，包括了數位經濟、共享經濟、電子商務及金融科技等。而「五加二」產業是指，亞洲矽谷、生技醫療、綠能科技、智慧機械及國防航太等五大創新產業，再加上新農業、循環經濟。
                            </p>
                            <br/>
                            <p>
                                本計畫以DIGI+發展「5+2產業創新」開源解決方案，針對人工智慧、大數據、雲端運算、資料庫、物聯網等領域，透過產學研合作投入國際開放程式碼專案之開發，以培育開源應用技術研發社群與人才、提升國內軟體產業實力、達成全方位跨域數位人才的計畫目標。
                            </p>
                        </Col>
                        <Col
                            span={12}
                            style={{
                            padding: 16
                        }}>
                            <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
                            <img
                                alt=''
                                src={require("../img/5a2.PNG")}
                                style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto'
                            }}/>
                            </Card>
                        </Col>
                    </Row>
                    <Row
                        id="crumbs"
                        style={{
                        marginTop: '64px 0px',
                        padding: '0px 128px',
                        background:'#e9e9e9',
                        textAlign: 'center'
                    }}>
                        <Col
                            span={8}
                            style={{
                            fontSize: 18,
                            padding: 32
                        }}>
                            <h1><Icon type="github" style={{
                color: '#f99200'
            }}/></h1>
                            <h3>開源技術人才盤點</h3><br/>
                            <p>S本計畫7~12月參與多項社群活動，包含2017 COSCUP分享研發之技術，舉辦MongoDB中文社群、K8S、開源IoT工作坊、Simple Care 黑客松等活動，使計畫與社群有更密切合作。
                            </p>
                        </Col>
                        <Col
                            span={8}
                            style={{
                            fontSize: 18,
                            padding: 32
                        }}>
                            <h1><Icon type="compass" style={{
                color: '#f99200'
            }}/></h1>
                            <h3>開源典範案例彙整</h3><br/>
                            <p>106年已彙整13個政府部門開源技術典範案例，讓政府各單位了解OSS運用已有相當成效。                            
                            </p>
                        </Col>
                        <Col
                            span={8}
                            style={{
                            fontSize: 18,
                            padding: 32
                        }}>
                            <h1><Icon type="rocket" style={{
                color: '#f99200'
            }}/></h1>
                            <h3>社群參與</h3><br/>
                            <p>本計畫7~12月參與多項社群活動，包含2017 COSCUP分享研發之技術，舉辦MongoDB中文社群、K8S、開源IoT工作坊、Simple Care 黑客松等活動，使計畫與社群有更密切合作。
                            </p>
                        </Col>
                        <Col
                            span={12}
                            style={{
                            fontSize: 18,
                            padding: 32
                        }}>
                            <h1><Icon type="shop" style={{
                color: '#f99200'
            }}/></h1>
                            <h3>資訊月開源館</h3><br/>
                            <p>106年資訊月開源軟體館，邀請國內開源社群、產業、法人研發成果共同展出，以推動開源技術、提供產官學研交流，讓民眾體驗開源技術所帶來之創新應用成果。</p>
                        </Col>
                        <Col
                            span={12}
                            style={{
                            fontSize: 18,
                            padding: 32
                        }}>
                            <h1><Icon type="api" style={{
                color: '#f99200'
            }}/></h1>
                            <h3>開源技術研討會</h3><br/>
                            <p>邀請國內外重要開源技術人士分享，議程內容包含開源文化、人工智慧、大數據、雲端虛擬化技術、微服務…，參與人士共227人與會。</p>
                        </Col>
                    </Row>
                    <Row
                        gutter={0}
                        id="event"
                        style={{
                        marginTop: '64px'
                    }}>
                        <Col
                            span={24}
                            style={{
                            textAlign: 'center'
                        }}>
                            <h1>活動集錦</h1>
                            <hr
                                style={{
                                marginTop: '12px',
                                marginLeft: 256,
                                marginRight: 256,
                                border:'none',
                                borderTop: 'dashed 4px',
                                borderWidth: 1,
                                borderColor: '#f99200'
                            }}/>
                        </Col>
                    </Row>
                    <Row
                        style={{
                        margin: '64px 0px',
                        padding:'0px 128px'
                    }}>
                        <Events/>
                    </Row>
                    <Row
                        gutter={0}
                        id="contact"
                        style={{
                        marginTop: '32px'
                    }}>
                        <Col
                            span={24}
                            style={{
                            textAlign: 'center'
                        }}>
                            <h1>聯絡我們</h1>
                            <hr
                                style={{
                                marginTop: '12px',
                                marginLeft: 256,
                                marginRight: 256,
                                border:'none',
                                borderTop: 'dashed 4px',
                                borderWidth: 1,
                                borderColor: '#f99200'
                            }}/>
                        </Col>
                    </Row>
                    <Row
                        style={{
                        marginTop: '64px',
                        marginBottom: '64px',
                        marginLeft: 128,
                        marginRight: 128
                    }}>
                        <Col
                            span={24}
                            style={{
                            fontSize: 18,
                            padding: 16,
                            textAlign: 'center'
                        }}>
                            <p>
                                歡迎對TWOSS有興趣的各位先進與我們連絡，相關連絡資訊如下：
                            </p>
                            <br/>
                            <ul>
                                <li>
                                    <Icon
                                        type="environment"
                                        style={{
                                        color: '#f99200'
                                    }}/>&nbsp; 10574 台北市松山區民生東路4段133號2樓</li>
                                <li>
                                    <Icon
                                        type="mail"
                                        style={{
                                        color: '#f99200'
                                    }}/>&nbsp; contact@twoss.io</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                <BackTop/>
            </div>
        )
    }
}