import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('testing shape-1', () => {
    expect(service.getClassName('rectangle', 'red')).toBe(
      'rectangle-red'
    );
  });
  it('testing shape-2', () => {
    expect(service.getClassName('square', 'red')).toBe(
      'square-red'
    );
  });
  it('testing shape-3', () => {
    expect(service.getClassName('circle', 'red')).toBe(
      'circle-red'
    );
  });
  it('testing shape-4', () => {
    expect(service.getClassName('circle', 'green')).toBe(
      'circle-green'
    );
  });
  it('testing shape-5', () => {
    expect(service.getClassName('rectangle', 'green')).toBe(
      'rectangle-green'
    );
  });
  it('testing shape-6', () => {
    expect(service.getClassName('square', 'green')).toBe(
      'square-green'
    );
  });
  it('testing shape-7', () => {
    expect(service.getClassName('square', 'blue')).toBe(
      'square-blue'
    );
  });
  it('testing shape-8', () => {
    expect(service.getClassName('rectangle', 'blue')).toBe(
      'rectangle-blue'
    );
  });
  it('testing shape-9', () => {
    expect(service.getClassName('circle', 'blue')).toBe(
      'circle-blue'
    );
  });
});
