import { TestBed } from '@angular/core/testing';

import { PostServisService } from './post-servis.service';

describe('PostServisService', () => {
  let service: PostServisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostServisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
