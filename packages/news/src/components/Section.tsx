import React from 'react';
import { useInject, II18N } from '@enterprise-ui/appcore';
import { DI_I18N_KEY } from '../consts';

interface IOwnProps {
    labelKey: string;
}

const Section: React.FunctionComponent<IOwnProps> = ({labelKey}) => {
  const [i18n] = useInject<II18N>(DI_I18N_KEY);

  return (
    <div className="section">
      <h3>{i18n.t(labelKey)}</h3>
    </div>
  );
};

Section.displayName = 'Section';

export {Section};
