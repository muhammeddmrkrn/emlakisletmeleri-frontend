import {Modal} from 'antd';

export function timeOutError() {
  Modal.error({
    title: 'TimeOut!',
    content: 'Beklenmeyen Hata Oluştu',
  });
}

export function nullWarning() {
  Modal.warning({
    title: 'Uyarı!',
    content: 'Boş alanlar doldurulmalıdır.',
  });
}
  