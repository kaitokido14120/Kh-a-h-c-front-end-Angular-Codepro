import { OneWayBindingModule } from './one-way-binding.module';

describe('OneWayBindingModule', () => {
  let oneWayBindingModule: OneWayBindingModule;

  beforeEach(() => {
    oneWayBindingModule = new OneWayBindingModule();
  });

  it('should create an instance', () => {
    expect(oneWayBindingModule).toBeTruthy();
  });
});
