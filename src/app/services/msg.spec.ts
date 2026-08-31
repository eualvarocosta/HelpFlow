import { TestBed } from '@angular/core/testing';
import { Msg } from './msg';

describe('Msg', () => {
  let service: Msg;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Msg);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
