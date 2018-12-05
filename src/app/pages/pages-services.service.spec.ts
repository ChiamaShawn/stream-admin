import { TestBed, inject } from '@angular/core/testing';

import { PagesServicesService } from './pages-services.service';

describe('PagesServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagesServicesService]
    });
  });

  it('should be created', inject([PagesServicesService], (service: PagesServicesService) => {
    expect(service).toBeTruthy();
  }));
});
