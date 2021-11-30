import React, { Component } from "react";
import {Form, Modal, Button} from 'antd';
import { emlakAra, emlakEkle , emlakList } from "../service/EmlakService";
import {timeOutError, nullWarning} from '../../constants/constants'
import EmlakListesi from "../panel/EmlakListesi";
import EmlakCriteria from "../panel/EmlakCriteria";

const emlakFilterData = {
    id: null,
    emlakTuru: null,
    metrekare: null,
    odaSayisi: null,
    kat: null,
    binaKati: null,
    isinmaTuru: null,
    musteriId: null,
};

class EmlakIslemleri extends Component { 

    state = {
        data: emlakFilterData,
        emlakListesi: [],  
    };

    handleEmlakTuruChange(value) {
      let emlakTuru = value;
      emlakFilterData.emlakTuru = emlakTuru;
    };
    handleMetrekareChange(value) {
      let metrekare = value;
      emlakFilterData.metrekare = metrekare;
    };
    handleOdaSayisiChange(value) {
      let odaSayisi = value;
      emlakFilterData.odaSayisi = odaSayisi;
    };
    handleKatChange(value) {
      let kat = value;
      emlakFilterData.kat = kat;
    };
    handleBinaKatiChange(value) {
      let binaKati = value;
      emlakFilterData.binaKati = binaKati;
    };
    handleIsinmaTuruChange(event) {
      let isinmaTuru = event.target.value;
      emlakFilterData.isinmaTuru = isinmaTuru;
    };
    handleMusteriChange(e) {
      let musteriId = e;
      emlakFilterData.musteriId = musteriId;
    };

    handleEmlakEkle = (e) => {
      e.preventDefault();
      
      if(this.state.data.emlakTuru === null || this.state.data.metrekare === null 
        || this.state.data.odaSayisi === null || this.state.data.kat === null
        || this.state.data.binaKati === null || this.state.data.isinmaTuru === null
        || this.state.data.musteriId === null){
        nullWarning();
      }
      else{
        emlakEkle(this.state.data)
          .then(res => {
            if (res && res.data) {
              emlakEklendi();
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

    handleSearchSubmit = (e) => {
        e.preventDefault();
        emlakAra(this.state.data)
            .then(res => {
              if(res &&res.data){
                this.setState({
                  ...this.state,
                  emlakListesi: res.data
                })
              }else{
                this.setState({
                  ...this.state,
                  emlakListesi: emlakFilterData
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
    
    componentDidMount() {
      emlakList()
            .then(res => {
              if(res &&res.data){
                this.setState({
                  ...this.state,
                  emlakListesi: res.data
                })
              }else{
                this.setState({
                  ...this.state,
                  emlakListesi: emlakFilterData
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
            <h2>Emlak İşlemleri</h2>
            <EmlakCriteria
              handleSearchSubmit = {this.handleSearchSubmit}
              handleEmlakTuruChange={this.handleEmlakTuruChange}
              handleMetrekareChange={this.handleMetrekareChange}
              handleOdaSayisiChange={this.handleOdaSayisiChange}
              handleKatChange={this.handleKatChange}
              handleBinaKatiChange={this.handleBinaKatiChange}
              handleIsinmaTuruChange={this.handleIsinmaTuruChange}
              handleMusteriChange={this.handleMusteriChange}
            />
            <Form.Item wrapperCol={{ span: 15, offset: 1 }}>
              <Button onClick={this.handleEmlakEkle} type="primary" htmlType="submit">
                Emlak Ekle
              </Button>
            </Form.Item> 
            <EmlakListesi data = {this.state.emlakListesi}/>
          </div>
        );
    }
    
}

function emlakEklendi() {
  Modal.info ({
    title: 'Başarılı!',
    content: 'Emlak Eklendi.',
  });
}

export default (EmlakIslemleri);