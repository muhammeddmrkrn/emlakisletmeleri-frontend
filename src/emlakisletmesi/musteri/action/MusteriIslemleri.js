import React, { Component } from "react";
import {Form, Modal, Button} from 'antd';
import { musteriEkle , musteriList } from "../service/MusteriService";
import {timeOutError, nullWarning} from '../../constants/constants'
import MusteriListesi from "../panel/MusteriListesi";
import MusteriCriteria from "../panel/MusteriCriteria";

const musteriFilterData = {
    id: null,
    adi: null,
    soyadi: null,
    evTelefonu: null,
    cepTelefonu: null,
    email: null,
};

class MusteriIslemleri extends Component { 

    state = {
        data: musteriFilterData,
        musteriListesi: [],  
    };

    handleAdiChange(e) {
      let adi = e.target.value;
      musteriFilterData.adi = adi;
    };
    handleSoyadiChange(e) {
      let soyadi = e.target.value;
      musteriFilterData.soyadi = soyadi;
    };
    handleEvTelefonuChange(e) {
      let evTelefonu = e.target.value;
      musteriFilterData.evTelefonu = evTelefonu;
    };
    handleCepTelefonuChange(e) {
      let cepTelefonu = e.target.value;
      musteriFilterData.cepTelefonu = cepTelefonu;
    };
    handleEmailChange(e) {
      let email = e.target.value;
      musteriFilterData.email = email;
    };

    handleMusteriEkle = (e) => {
      e.preventDefault();
      
      if(this.state.data.adi === null || this.state.data.soyadi === null 
        || this.state.data.evTelefonu === null || this.state.data.cepTelefonu === null
        || this.state.data.email === null){
        nullWarning();
      }
      else{
        musteriEkle(this.state.data)
          .then(res => {
            if (res && res.data) {
              musteriEklendi();
              musteriList()
                .then(res => {
                  if(res &&res.data){
                    this.setState({
                      ...this.state,
                      musteriListesi: res.data
                    })
                  }else{
                    this.setState({
                      ...this.state,
                      musteriListesi: musteriFilterData
                    })
                  }
                })
                .catch(err => {
                  this.setState({
                    ...this.state,
                  });
                  timeOutError();
              });
            }
          })
          .catch(err => {
            this.setState({
              ...this.state,
            });
            timeOutError();
        });
      }
    }

    componentDidMount() {
      musteriList()
            .then(res => {
              if(res &&res.data){
                this.setState({
                  ...this.state,
                  musteriListesi: res.data
                })
              }else{
                this.setState({
                  ...this.state,
                  musteriListesi: musteriFilterData
                })
              }
            })
            .catch(err => {
              this.setState({
                ...this.state,
              });
              timeOutError();
          });
    };
    
    render(){

        return(
          <div>
            <h2>Müşteri İşlemleri</h2>
            <MusteriCriteria
              handleAdiChange={this.handleAdiChange}
              handleSoyadiChange={this.handleSoyadiChange}
              handleEvTelefonuChange={this.handleEvTelefonuChange}
              handleCepTelefonuChange={this.handleCepTelefonuChange}
              handleEmailChange={this.handleEmailChange}
            />
            <Form.Item wrapperCol={{ span: 15, offset: 2 }}>
              <Button onClick={this.handleMusteriEkle} type="primary" htmlType="submit">
                Müşteri Ekle
              </Button>
            </Form.Item> 
            <MusteriListesi data = {this.state.musteriListesi}/>
          </div>
        );
    }
    
}

function musteriEklendi() {
  Modal.info ({
    title: 'Başarılı!',
    content: 'Müşteri Eklendi.',
  });
}

export default (MusteriIslemleri);