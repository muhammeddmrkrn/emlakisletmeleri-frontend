import React, { Component } from "react";
import {Form, Modal, Button} from 'antd';
import { isyeriEkle , isyeriList } from "../service/IsyeriService";
import {timeOutError, nullWarning} from '../../constants/constants'
import IsyeriListesi from "../panel/IsyeriListesi";
import IsyeriCriteria from "../panel/IsyeriCriteria";

const isyeriFilterData = {
    id: null,
    isletmeAdi: null,
    yetkili: null,
    adres: null,
    telefon: null,
    fax: null,
};

class IsyeriIslemleri extends Component { 

    state = {
        data: isyeriFilterData,
        isyeriListesi: [],  
    };

    handleIsletmeAdiChange(e) {
      let isletmeAdi = e.target.value;
      isyeriFilterData.isletmeAdi = isletmeAdi;
    };
    handleYetkiliChange(e) {
      let yetkili = e.target.value;
      isyeriFilterData.yetkili = yetkili;
    };
    handleAdresChange(e) {
      let adres = e.target.value;
      isyeriFilterData.adres = adres;
    };
    handleTelefonChange(e) {
      let telefon = e.target.value;
      isyeriFilterData.telefon = telefon;
    };
    handleFaxChange(e) {
      let fax = e.target.value;
      isyeriFilterData.fax = fax;
    };

    handleIsyeriEkle = (e) => {
      e.preventDefault();
      
      if(this.state.data.isletmeAdi === null || this.state.data.yetkili === null 
        || this.state.data.adres === null || this.state.data.telefon === null
        || this.state.data.fax === null){
        nullWarning();
      }
      else{
        isyeriEkle(this.state.data)
          .then(res => {
            if (res && res.data) {
              isyeriEklendi();
              isyeriList()
                .then(res => {
                  if(res &&res.data){
                    this.setState({
                      ...this.state,
                      isyeriListesi: res.data
                    })
                  }else{
                    this.setState({
                      ...this.state,
                      isyeriListesi: isyeriFilterData
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
      isyeriList()
            .then(res => {
              if(res &&res.data){
                this.setState({
                  ...this.state,
                  isyeriListesi: res.data
                })
              }else{
                this.setState({
                  ...this.state,
                  isyeriListesi: isyeriFilterData
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
            <h2>İşyeri İşlemleri</h2>
            <IsyeriCriteria
              handleIsletmeAdiChange={this.handleIsletmeAdiChange}
              handleYetkiliChange={this.handleYetkiliChange}
              handleAdresChange={this.handleAdresChange}
              handleTelefonChange={this.handleTelefonChange}
              handleFaxChange={this.handleFaxChange}
            />
            <Form.Item wrapperCol={{ span: 15, offset: 2 }}>
              <Button onClick={this.handleIsyeriEkle} type="primary" htmlType="submit">
                İşyeri Ekle
              </Button>
            </Form.Item> 
            <IsyeriListesi data = {this.state.isyeriListesi}/>
          </div>
        );
    }
    
}

function isyeriEklendi() {
  Modal.info ({
    title: 'Başarılı!',
    content: 'İşyeri Eklendi.',
  });
}

export default (IsyeriIslemleri);