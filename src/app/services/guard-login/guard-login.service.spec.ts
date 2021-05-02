import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, routingComponents } from 'src/app/app-routing.module';

import { GuardLoginService } from '../guard-login/guard-login.service';

describe('GuardLoginService', () => {
  let service: GuardLoginService;

    

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
                declarations: [
                    routingComponents
                ],
                providers: [GuardLoginService],
    });
    service = TestBed.inject(GuardLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
