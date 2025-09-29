import { memo } from 'react';
import Background from '../Modules/Background/Background';
import Services from '../Modules/Services/Services';
import WebServices from '../Modules/WebServicesSlider/WebServices';

const Layout = () => {
  return (
    <>
      <Background/>
      <Services/>
      <WebServices/>
    </>
  );
};

export default memo(Layout);