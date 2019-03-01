export default class ExampleAppDatasource {

  constructor() {
    console.log('ExampleAppDatasource', this);
  }

  query(options) {
    console.log('ExampleAppDatasource.query', options);
    return [];
  }

  testDatasource() {
    console.log('ExampleAppDatasource.testDatasource', options);
    return false;
  }
}
