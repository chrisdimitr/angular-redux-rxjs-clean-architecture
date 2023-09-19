import { TestBed } from "@angular/core/testing";

import { AuthInteractorService } from "./auth-interactor.service";
import { AuthModule } from "@auth0/auth0-angular";
import { auth0Config } from "@config/auth0/auth0-config.module";

describe("AuthInteractorService", () => {
  let service: AuthInteractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule.forRoot(auth0Config)]
    });
    service = TestBed.inject(AuthInteractorService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
