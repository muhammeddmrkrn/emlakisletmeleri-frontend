import React, { Component } from "react";
import {Form, Row, Col} from 'antd';
import TextInputField from "../../common/textInputField";

class IsyeriCriteria extends Component { 

    render(){
        return(
            <div>
                <Form 
                className= "isyeriCriteria"
                labelCol={{ span: 5 }} 
                layout="horizontal">
                    <Row>
                        <Col span={15}>
                            <TextInputField
                            label="İşletme Adı"
                            name="isletmeAdi"
                            onChangeState={this.props.handleIsletmeAdiChange}/>
                        </Col>
                        <Col span={6}>
                            <TextInputField
                                label="Yetkili"
                                name="yetkili"
                                onChangeState={this.props.handleYetkiliChange}/>
                        </Col>
                    </Row>
                    <Row>                        
                        <Col span={15}>
                            <TextInputField
                                label="Adres"
                                name="adres"
                                onChangeState={this.props.handleAdresChange}/>
                        </Col> 
                        <Col span={6}>
                            <TextInputField
                            label="Telefon"
                            name="telefon"
                            onChangeState={this.props.handleTelefonChange}/>
                        </Col>
                    </Row>
                    <Row>                        
                        <Col span={15}>
                            <TextInputField
                                label="Fax"
                                name="fax"
                                onChangeState={this.props.handleFaxChange}/>
                        </Col> 
                    </Row>
                </Form>
            </div>
        );
    }
}

export default IsyeriCriteria;