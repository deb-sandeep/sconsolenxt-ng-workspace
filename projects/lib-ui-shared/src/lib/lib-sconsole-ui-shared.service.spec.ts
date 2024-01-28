import { TestBed } from '@angular/core/testing';

import { LibSconsoleUiSharedService } from './lib-sconsole-ui-shared.service';

describe('LibSconsoleUiSharedService', () => {
  let service: LibSconsoleUiSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibSconsoleUiSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
