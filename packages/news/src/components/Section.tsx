import React from 'react';
import { useInject, I18N, II18N } from '@enterprise-ui/appcore';

interface IOwnProps {
    labelKey: string;
}

const Section: React.FunctionComponent<IOwnProps> = ({labelKey}) => {
  const [i18n] = useInject<II18N>(I18N);

  return (
    <div className="section">
      <h3>{i18n.t(labelKey)}</h3>
    </div>
  );
};

Section.displayName = 'Section';

export {Section};
