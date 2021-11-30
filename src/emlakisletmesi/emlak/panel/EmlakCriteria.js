import React, { Component } from "react";
import {Form, Button, Row, Col} from 'antd';
import NumberInputField from "../../common/numberInputField";
import { SearchOutlined } from '@ant-design/icons';
import TextInputField from "../../common/textInputField";
import MusteriCombobox from "../../common/MusteriCombobox";
import EmlakTuruComboBoxField from "../../common/emlakTuruComboBoxField";

class EmlakCriteria extends Component { 

    render(){
        return(
            <div>
                <Form 
                className= "emlakCriteria"
                labelCol={{ span: 5 }} 
                layout="horizontal">
                    <Row>
                        <Col span={15}>
                            <EmlakTuruComboBoxField
                                label="Emlak Türü"
                                name="emlakTuru"
                                onChangeState={this.props.handleEmlakTuruChange}/>
                        </Col>
                        <Col span={6}>
                            <MusteriCombobox
                                onChangeState={this.props.handleMusteriChange}/>
                        </Col>
                    </Row>
                    <Row>                        
                        <Col span={15}>
                            <NumberInputField
                            label="Oda Sayısı"
                            name="odaSayisi"
                            onChangeState={this.props.handleOdaSayisiChange}/>
                        </Col>
                        <Col span={6}>
                            <NumberInputField
                            label="Kat"
                            name="kat"
                            onChangeState={this.props.handleKatChange}/>
                        </Col>   
                    </Row>
                    <Row>
                        <Col span={15}>
                            <NumberInputField
                            label="Bina Katı"
                            name="binaKati"
                            onChangeState={this.props.handleBinaKatiChange}/>
                        </Col>
                        <Col span={6}>
                            <TextInputField
                            label="Isınma Türü"
                            name="isinmaTuru"
                            onChangeState={this.props.handleIsinmaTuruChange}/>
                        </Col>  
                    </Row>
                    <Row>
                        <Col span={15}>
                            <NumberInputField
                            label="Metrekare"
                            name="metrekare"
                            onChangeState={this.props.handleMetrekareChange}/>
                        </Col>  
                    </Row>  
                    <Row>
                        <Col span={9}>
                            <Form.Item wrapperCol={{ span: 12, offset: 3 }}>
                                    <Button onClick={this.props.handleSearchSubmit} type="primary" icon={<SearchOutlined/>} htmlType="submit">
                                        Ara
                                    </Button>
                            </Form.Item> 
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default EmlakCriteria;