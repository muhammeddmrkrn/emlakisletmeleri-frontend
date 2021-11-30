import React, { Component } from "react";
import {Form, Row, Col} from 'antd';
import TextInputField from "../../common/textInputField";

class MusteriCriteria extends Component { 

    render(){
        return(
            <div>
                <Form 
                className= "musteriCriteria"
                labelCol={{ span: 5 }} 
                layout="horizontal">
                    <Row>
                        <Col span={15}>
                            <TextInputField
                            label="Adı"
                            name="adi"
                            onChangeState={this.props.handleAdiChange}/>
                        </Col>
                        <Col span={6}>
                            <TextInputField
                                label="Soyadi"
                                name="soyadi"
                                onChangeState={this.props.handleSoyadiChange}/>
                        </Col>
                    </Row>
                    <Row>                        
                        <Col span={15}>
                            <TextInputField
                                label="Ev Telefonu"
                                name="evTelefonu"
                                onChangeState={this.props.handleEvTelefonuChange}/>
                        </Col> 
                        <Col span={6}>
                            <TextInputField
                            label="Cep Telefonu"
                            name="cepTelefonu"
                            onChangeState={this.props.handleCepTelefonuChange}/>
                        </Col>
                    </Row>
                    <Row>                        
                        <Col span={15}>
                            <TextInputField
                                label="Email"
                                name="email"
                                onChangeState={this.props.handleEmailChange}/>
                        </Col> 
                    </Row>
                </Form>
            </div>
        );
    }
}

export default MusteriCriteria;