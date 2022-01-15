import { TestBed } from '@angular/core/testing';

import { MathGameService } from './math-game.service';

describe('MathGameService', () => {
  let service: MathGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
