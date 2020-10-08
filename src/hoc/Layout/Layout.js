import React from 'react';
import FormTabs from '../../components/Navigation/FormTabs/FormTabs';

const layout = (props) => (
  <div>
    {props.children}
    <nav>
      <FormTabs />
    </nav>
  </div>
);

export default layout;
