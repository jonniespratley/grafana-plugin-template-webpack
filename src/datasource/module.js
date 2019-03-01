import {ExampleAppDatasource} from  './datasource';

class ExampleAppConfigCtrl {
  constructor(args){
    console.log('ExampleAppConfigCtrl', args);
  }
}
ExampleAppConfigCtrl.template = '<datasource-http-settings current="ctrl.current"></datasource-http-settings>';

export {
  ExampleAppDatasource,
  ExampleAppConfigCtrl as ConfigCtrl
};