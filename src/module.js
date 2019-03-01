

import { StreamPageCtrl } from './components/stream';
import { ExampleAppConfigCtrl } from './components/config/config';
import { PanelCtrl } from 'grafana/app/plugins/sdk'; // will be resolved to app/plugins/sdk
import { LogsPageCtrl } from './components/logs/logs';
class Ctrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
  }

  link(scope, element) {
    
  }
  
}

Ctrl.template = "<div>Hello from <b>Template Plugin</b></div>";


export {
  Ctrl as PanelCtrl,
  ExampleAppConfigCtrl as ConfigCtrl,
  StreamPageCtrl, //Matches pages.component in plugin.json
  LogsPageCtrl //Matches pages.component in plugin.json
};

