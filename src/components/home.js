import React, { Component } from 'react'
import { Row, Col, Icon, BackTop, Card, Modal, Button } from 'antd';
import Media from 'react-media'
import BannerSlider from './bannerSlider'
import MyAnchor from './myAnchor'
import Events from './events'
import Hots from './hots'
import './home.css'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            githublesson: false
        }
    }

    render() {
        let s_one = {
            padding: '32px 16px'
        }
        let s_two = {
            padding: '32px 128px'
        }
        return (
            <div>
              <div>
                <Row gutter={ 0 }>
                  <Col span={ 24 }>
                  <BannerSlider/>
                  </Col>
                </Row>
              </div>
              <div style={ { width: '100%', position: 'relative' } }>
                <Media query="(max-width: 1023px)">
                  { match => match ? null : <MyAnchor/> }
                </Media>
                <Row gutter={ 0 } id="recent" style={ { marginTop: '64px', marginLeft: 128, marginRight: 128, } }>
                  <Col span={ 24 } style={ { textAlign: 'center' } }>
                  <h1>近期活動</h1>
                  <hr style={ { marginTop: '12px', marginLeft: 256, marginRight: 256, border: 'none', borderTop: 'dashed 4px', borderWidth: 1, borderColor: '#f99200' } } />
                  </Col>
                </Row>
                <Media query="(max-width: 1023px)">
                  { match => {
                                                                                let s_ = match ? s_one : s_two
                                                                                return <div>
                                                                                         <Row style={ s_ }>
                                                                                           <Col span={ 8 } offset={ 3 }>
                                                                                           <Card onClick={ () => this.setState({githublesson:true}) } style={ { width: '100%' } } bodyStyle={ { padding: 0, cursor: 'pointer' } }>
                                                                                             <div className="custom-image" style={ { height: 100 } }>
                                                                                               <div className="custom-img" style={ { backgroundImage: 'url("' + require('../img/githublesson.jpg') + '")' } } />
                                                                                             </div>
                                                                                             <div className="custom-card">
                                                                                               <h3>開源貢獻者培育方案之通識課程</h3>
                                                                                               <p>Git 版本控制入門</p>
                                                                                               <p>日期：2018/05/26(六) 下午14:00~17:00</p>
                                                                                               <p>地點：民生科服102會議室(台北市民生東路四段133號1樓)</p>
                                                                                             </div>
                                                                                           </Card>
                                                                                           <Modal id={ 'modalgithublesson' } className='bigModal' title={ '開源貢獻者培育方案之通識課程：Git的操作與設定/版本控制入門' } visible={ this.state.githublesson } onCancel={ e=>this.setState({githublesson:false}) } footer={ [ <Button key="back" type="dashed" onClick={ e=>this.setState({githublesson:false}) }>離開 <Icon type="rollback" /></Button> ] }>
                                                                                             <div>
                                                                                             <p>開源貢獻者培育方案之通識課程：Git的操作與設定/版本控制入門
                                                            <br />
                                                            <br />詳細的通識課程資訊：
                                                            <br />
                                                            <br />* &nbsp;&nbsp;開源通識課程：Git 版本控制入門
                                                            <br />
                                                            <br />* &nbsp;&nbsp;課程時間：2018/05/26(六) 下午14:00~17:00
                                                            <br />
                                                            <br />* &nbsp;&nbsp;上課地點：民生科服102會議室(台北市民生東路四段133號1樓)
                                                            <br />
                                                            <br />* &nbsp;&nbsp;課程內容介紹：
                                                            <br />
                                                            <br />
                                                            <br />版本控制？ 那是什麼？ 可以吃嗎？
                                                            <br />在軟體開發中有良好的版本控制非常重要，Git 是目前最被廣為使用的版本控制系統，本課程中將帶領大家瞭解版本控制的美好以及實務上的 Git 開發流程。
                                                            <br />
                                                            <br />課程投影片： &lt;
                                                            <a href="http://denny.one/git-slide/">http://denny.one/git-slide/</a>&gt;
                                                            <a href="http://denny.one/git-slide/">http://denny.one/git-slide/</a>
                                                            <br />
                                                            <br />* &nbsp;&nbsp;講者介紹：
                                                            <br />
                                                            <br />講師： &lt;
                                                            <a href="https://about.me/denny0223">https://about.me/denny0223</a>&gt; Denny Huang
                                                            <br />
                                                            <br />SITCON 學生計算機年會共同發起人，2013 及 2014 年會總召，目前於雷亞遊戲（Rayark Inc.）擔任遊戲後端工程師；在正規教育中特立獨行，妄想透過改善教育讓台灣更進步，崇尚開源精神，熱愛使用者界面 (UI) 以外的多種技術。
                                                            <br
                                                            />
                                                            <br />* &nbsp;&nbsp;課前注意事項：
                                                            <br />
                                                            <br />1. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;課堂前請先 &lt;
                                                            <a href="https://github.com/join">https://github.com/join</a>&gt; 註冊 GitHub 帳號並且完成信箱驗證。
                                                            <br />
                                                            <br />2. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;請攜帶自己的筆電參與活動並 &lt;
                                                            <a href="https://desktop.github.com/">https://desktop.github.com/</a>&gt; 下載 GitHub桌面版事先完成 Git 相關環境安裝。
                                                            <br />
                                                            <br />歡迎對於開源軟體有興趣的參與者踴躍報名參加，若有確定要參加課程者，麻煩能夠於
                                                            <br />5/18(五)下午18:00前回覆給王巍興，以利統計上課人數，謝謝!
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />聯絡資訊：王巍興(Willy)
                                                            <br />
                                                            <br />Email： &lt;
                                                            <a href="mailto:qphgkimo@iii.org.tw">mailto:qphgkimo@iii.org.tw</a>&gt;
                                                            <a href="mailto:qphgkimo@iii.org.tw">qphgkimo@iii.org.tw</a>
                                                            <br />
                                                            <br />Phone：02-66072127</p>
                                                                                             </div>
                                                                                           </Modal>
                                                                                           </Col>
                                                                                           <Col span={ 8 } offset={ 2 }>
                                                                                           <Card onClick={ () => window.open('/107contributor.html', '_blank') } style={ { width: '100%' } } bodyStyle={ { padding: 0, cursor: 'pointer' } }>
                                                                                             <div className="custom-image" style={ { height: 100 } }>
                                                                                               <div className="custom-img" style={ { backgroundImage: 'url("' + require('../img/heading.jpg') + '")' } } />
                                                                                             </div>
                                                                                             <div className="custom-card">
                                                                                               <h3>開源貢獻者培育方案</h3>
                                                                                               <p> </p>
                                                                                               <p>日期：107/02/10 - 03/31</p>
                                                                                               <p>受理報名 ( 線上填寫表單 )</p>
                                                                                             </div>
                                                                                           </Card>
                                                                                           </Col>
                                                                                         </Row>
                                                                                         <Row style={ s_ }>
                                                                                           <Col span={ 18 } offset={ 3 }>
                                                                                           <Card onClick={ () => window.open('/106itmonth.html', '_blank') } style={ { width: '100%' } } bodyStyle={ { padding: 0, cursor: 'pointer' } }>
                                                                                             <div className="custom-image" style={ { height: 100 } }>
                                                                                               <div className="custom-img" style={ { backgroundImage: 'url("' + require('../img/106itmonth.jpg') + '")' } } />
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
                                                                                       </div>
                                                                            } }
                </Media>
                <Row gutter={ 0 } id="hot" style={ { paddingTop: '64px', marginLeft: 128, marginRight: 128, } }>
                  <Col span={ 24 } style={ { textAlign: 'center' } }>
                  <h1>熱門群組</h1>
                  <p>
                    <Icon type="message" /> The most popular discussion co-Labs on Twoss-io</p>
                  <hr style={ { marginTop: '12px', marginLeft: 256, marginRight: 256, border: 'none', borderTop: 'dashed 4px', borderWidth: 1, borderColor: '#f99200' } } />
                  </Col>
                </Row>
                <Hots/>
                <Row gutter={ 0 } id="links" style={ { marginTop: '64px' } }>
                  <Col span={ 24 } style={ { textAlign: 'center' } }>
                  <h1>相關連結</h1>
                  <p>
                    <Icon type="link" /> Connection
                  </p>
                  <hr style={ { marginTop: '12px', marginLeft: 256, marginRight: 256, border: 'none', borderTop: 'dashed 4px', borderWidth: 1, borderColor: '#f99200' } } />
                  </Col>
                </Row>
                <Media query="(max-width: 1023px)">
                  { match => {
                        let s_ = match ? s_one : s_two
                        return <Row gutter={ 8 } style={ { ...s_, background: '#e9e9e9' } }>
                                 <Col lg={ 6 } md={ 12 }>
                                 <Card onClick={ () => {
                                                     let win = window.open('http://twoss.io/oss-tourist/', '_blank');
                                                     win.opener = null
                                                 } } bodyStyle={ { padding: 0, cursor: 'pointer' } } style={ { width: "100%" } }>
                                   <div className="custom-image" style={ { height: 100 } }>
                                     <div className="link-img-01" />
                                   </div>
                                   <div className="custom-card">
                                     <h3>開源圖書館</h3>
                                     <p><a target="_blank" href="http://twoss.io/oss-tourist/" rel="noopener noreferrer">oss-tourist</a></p>
                                   </div>
                                 </Card>
                                 </Col>
                                 <Col lg={ 3 } md={ 0 } />
                                 <Col lg={ 6 } md={ 12 }>
                                 <Card onClick={ () => {
                                                     let win = window.open('http://twoss.io/oss-collection/index.html', '_blank');
                                                     win.opener = null
                                                 } } bodyStyle={ { padding: 0, cursor: 'pointer' } } style={ { width: "100%" } }>
                                   <div className="custom-image" style={ { height: 100 } }>
                                     <div className="link-img-02" />
                                   </div>
                                   <div className="custom-card">
                                     <h3>開源大補帖</h3>
                                     <p><a target="_blank" href="http://twoss.io/oss-collection/index.html" rel="noopener noreferrer">oss-collection</a></p>
                                   </div>
                                 </Card>
                                 </Col>
                                 <Col lg={ 3 } md={ 0 } />
                                 <Col lg={ 6 } md={ 24 }>
                                 <Card onClick={ () => {
                                                     let win = window.open('https://twoss.gitbooks.io/open-source-use-case/', '_blank');
                                                     win.opener = null
                                                 } } bodyStyle={ { padding: 0, cursor: 'pointer' } } style={ { width: "100%" } }>
                                   <div className="custom-image" style={ { height: 100 } }>
                                     <div className="link-img-03" />
                                   </div>
                                   <div className="custom-card">
                                     <h3>開源應用典範案例</h3>
                                     <p><a target="_blank" href="https://twoss.gitbooks.io/open-source-use-case/" rel="noopener noreferrer">open-source-use-case</a></p>
                                   </div>
                                 </Card>
                                 </Col>
                               </Row>
                    } }
                </Media>
                <Row gutter={ 0 } id="about" style={ { marginTop: '64px' } }>
                  <Col span={ 24 } style={ { textAlign: 'center' } }>
                  <h1>關於我們</h1>
                  <p>
                    <Icon type="info-circle-o" /> The plan of this project and who we are</p>
                  <hr style={ { marginTop: '12px', marginLeft: 256, marginRight: 256, border: 'none', borderTop: 'dashed 4px', borderWidth: 1, borderColor: '#f99200' } } />
                  </Col>
                </Row>
                <Media query="(max-width: 1023px)">
                  { match => {
                        let s_ = match ? s_one : s_two
                        return <Row id="aboutus" style={ s_ }>
                                 <Col lg={ 12 } md={ 24 } style={ { fontSize: 18, padding: 16 } }>
                                 <p>
                                   行政院推動「數位國家‧創新經濟發展方案」簡稱DIGI+，推動重心從硬體移往軟體等應用面，包括了數位經濟、共享經濟、電子商務及金融科技等。而「五加二」產業是指，亞洲矽谷、生技醫療、綠能科技、智慧機械及國防航太等五大創新產業，再加上新農業、循環經濟。
                                 </p>
                                 <br/>
                                 <p>
                                   本計畫以DIGI+發展「5+2產業創新」開源解決方案，針對人工智慧、大數據、雲端運算、資料庫、物聯網等領域，透過產學研合作投入國際開放程式碼專案之開發，以培育開源應用技術研發社群與人才、提升國內軟體產業實力、達成全方位跨域數位人才的計畫目標。
                                 </p>
                                 </Col>
                                 <Col lg={ 12 } md={ 24 } style={ { padding: 16 } }>
                                 <Card style={ { width: '100%' } } bodyStyle={ { padding: 0 } }>
                                   <img alt='' src={ require("../img/5a2.PNG") } style={ { display: 'block', width: '100%', height: 'auto' } } />
                                 </Card>
                                 </Col>
                               </Row>
                    } }
                </Media>
                <Media query="(max-width: 1023px)">
                  { match => {
                        let s_ = match ? s_one : s_two
                        return <Row id="crumbs" style={ { ...s_, background: '#e9e9e9', textAlign: 'center' } }>
                                 <Col lg={ 8 } md={ 24 } style={ { fontSize: 18, padding: 32 } }>
                                 <h1><Icon type="github" style={ { color: '#f99200' } }/></h1>
                                 <h3>開源技術人才盤點</h3>
                                 <br/>
                                 <p>S本計畫7~12月參與多項社群活動，包含2017 COSCUP分享研發之技術，舉辦MongoDB中文社群、K8S、開源IoT工作坊、Simple Care 黑客松等活動，使計畫與社群有更密切合作。
                                 </p>
                                 </Col>
                                 <Col lg={ 8 } md={ 24 } style={ { fontSize: 18, padding: 32 } }>
                                 <h1><Icon type="compass" style={ { color: '#f99200' } }/></h1>
                                 <h3>開源典範案例彙整</h3>
                                 <br/>
                                 <p>106年已彙整13個政府部門開源技術典範案例，讓政府各單位了解OSS運用已有相當成效。
                                 </p>
                                 </Col>
                                 <Col lg={ 8 } md={ 24 } style={ { fontSize: 18, padding: 32 } }>
                                 <h1><Icon type="rocket" style={ { color: '#f99200' } }/></h1>
                                 <h3>社群參與</h3>
                                 <br/>
                                 <p>本計畫7~12月參與多項社群活動，包含2017 COSCUP分享研發之技術，舉辦MongoDB中文社群、K8S、開源IoT工作坊、Simple Care 黑客松等活動，使計畫與社群有更密切合作。
                                 </p>
                                 </Col>
                                 <Col lg={ 12 } md={ 24 } style={ { fontSize: 18, padding: 32 } }>
                                 <h1><Icon type="shop" style={ { color: '#f99200' } }/></h1>
                                 <h3>資訊月開源館</h3>
                                 <br/>
                                 <p>106年資訊月開源軟體館，邀請國內開源社群、產業、法人研發成果共同展出，以推動開源技術、提供產官學研交流，讓民眾體驗開源技術所帶來之創新應用成果。</p>
                                 </Col>
                                 <Col lg={ 12 } md={ 24 } style={ { fontSize: 18, padding: 32 } }>
                                 <h1><Icon type="api" style={ { color: '#f99200' } }/></h1>
                                 <h3>開源技術研討會</h3>
                                 <br/>
                                 <p>邀請國內外重要開源技術人士分享，議程內容包含開源文化、人工智慧、大數據、雲端虛擬化技術、微服務…，參與人士共227人與會。</p>
                                 </Col>
                               </Row>
                    } }
                </Media>
                <Row gutter={ 0 } id="event" style={ { marginTop: '64px' } }>
                  <Col span={ 24 } style={ { textAlign: 'center' } }>
                  <h1>活動集錦</h1>
                  <hr style={ { marginTop: '12px', marginLeft: 256, marginRight: 256, border: 'none', borderTop: 'dashed 4px', borderWidth: 1, borderColor: '#f99200' } } />
                  </Col>
                </Row>
                <Media query="(max-width: 1023px)">
                  { match => {
                        let s_ = match ? s_one : s_two
                        return <Row style={ s_ }>
                                 <Events/>
                               </Row>
                    } }
                </Media>
                <Row gutter={ 0 } id="contact" style={ { marginTop: '32px' } }>
                  <Col span={ 24 } style={ { textAlign: 'center' } }>
                  <h1>聯絡我們</h1>
                  <hr style={ { marginTop: '12px', marginLeft: 256, marginRight: 256, border: 'none', borderTop: 'dashed 4px', borderWidth: 1, borderColor: '#f99200' } } />
                  </Col>
                </Row>
                <Media query="(max-width: 1023px)">
                  { match => {
                        let s_ = match ? s_one : s_two
                        return <Row style={ s_ }>
                                 <Col span={ 24 } style={ { fontSize: 18, padding: 16, textAlign: 'center' } }>
                                 <p>
                                   歡迎對TWOSS有興趣的各位先進與我們連絡，相關連絡資訊如下：
                                 </p>
                                 <br/>
                                 <ul>
                                   <li>
                                     <Icon type="environment" style={ { color: '#f99200' } } />  10574 台北市松山區民生東路4段133號2樓</li>
                                   <li>
                                     <Icon type="mail" style={ { color: '#f99200' } } />  contact@twoss.io</li>
                                 </ul>
                                 </Col>
                               </Row>
                    } }
                </Media>
              </div>
              <BackTop/>
            </div>
        )
    }
}