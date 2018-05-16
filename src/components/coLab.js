import React, {Component} from 'react';
import {
    Row,
    Col,
    Icon,
    Spin,
    Card,
    Modal
} from 'antd';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class COLab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colabs:[{
                'title':'TensorFlow 語音/語者辨識技術',
                'content':'整合語音聲學處理與分析協助語音辨識於各場合(域)應用服務中語音腔調/聲線變化等情緒脈絡技術發展。由語音資料進行情緒脈絡的「語意理解」，如腔調/聲線變化等多種感知融合、物物或人物間「互動」帶動AI語音處理技術新變革。',
                'img':'../img/logo.png'
            },{
                'title':'TensorFlow影像分類/辨識技術',
                'content':'提供業界TensorFlow應用於影像與病症/病歷資料判讀典範，透過腦血流(SPECT)/腦代謝(PET)等病症特徵，進行失智成因/分類判讀；透過結構性影像(CT/MRI)與核醫影像的輔助，讓臨床醫師能快速正確診斷。',
                'img':'../img/logo.png'
            },{
                'title':'OpenStack VM高容錯及雲端資源管理技術',
                'content':'改善OpenStack VM HA能力，應用至廠商及其場域中加強高可用性之能力。',
                'img':'../img/openstack-icon.png'
            },{
                'title':'IOTA物聯網計量技術開發',
                'content':'IOTA是一種適合做為IoT底層計量架構的分散式帳本技術，本Co-Lab由資策會與成大資工系黃敬群老師、南星創速器朱宜振合作，投入IOTA專案開發。主要針對 IOTA Tangle的專案完整性，提出TangleID功能開發作為Co-Lab主要標的。',
                'img':'../img/ZTHQ9891.png'
            },{
                'title':'開放式複合型檢索技術',
                'content':'Elasticsearch是一文字檢索引擎資料庫系統，本Co-Lab整合多種不同檢索方式與資料型態(結構)，達成單一檢索介面(方式)，實現多種不同型態單一檢索或複合式檢索；即簡化進行資料檢索的行為，讓使用者可以專注於檢索結果分析上而不用花費多餘的時間學習不同檢索技術。',
                'img':'../img/Elasticsearch.png'
            },{
                'title':'Oracle 移轉技術',
                'content':'PostgreSQL 是全球最先進與穩定的開源資料庫系統，亦是目前公認最適合取代眾多商業資料庫(如Oracle、MSSQL、DB2)的選擇，但移轉技術與移轉經驗尚無標準的開源工具、以及實作方法之開放文件。',
                'img':'../img/post.png'
            }]
        };
    }

    componentWillMount() {

    }

    componentDidMount() {
        
    }

    render() {
        let col = this.state.colabs.map((item, index) => {
            return <Col
                    lg={8}
                    md={12}
                    key={index}
                    style={{
                    padding: 16
                }}>
                    <Card 
                        title={item.title}
                        bodyStyle={{
                            padding: 0
                        }} style={{ width: "100%" }}>
                        <div
                            className="colab-image"
                            style={{
                            height: 150
                        }}>
                            <div className="colab-img" style={{
                                backgroundImage: 'url(' + item.img + ')'
                            }}/>
                        </div>
                        <div className="colab-card" style={{
                            height: 150
                        }}>
                            <p>{item.content}</p>
                        </div>
                    </Card>
                </Col>
        })
        return (
            <div>
                <Row
                    gutter={0}
                    style={{
                    padding:'32px 128px'
                }}>
                    {col}
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators({
            
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(COLab)