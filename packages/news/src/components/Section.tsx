import React from 'react';
import { useInject, I18N, II18n } from '@enterprise-ui/appcore';

interface IOwnProps {
    labelKey: string;
}

export const Section: React.FunctionComponent<IOwnProps> = ({labelKey}) => {
  const [i18n] = useInject<II18n<any>>(I18N);

  return (
    <div className="section">
      <h3>{i18n.t(labelKey)}</h3>
    </div>
  );
};
