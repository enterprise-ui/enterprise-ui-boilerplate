import { IAPI, API, setContainer } from '@enterprise-ui/appcore';
import { ApiService } from './api';

const DIContainer = setContainer({ skipBaseClassChecks: true });

DIContainer.addSingleton<IAPI>(ApiService, API);
