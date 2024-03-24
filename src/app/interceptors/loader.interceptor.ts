import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { catchError, tap } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);

  loaderService.increase();
  return next(req).pipe(
    tap(() => loaderService.decrease()),
    catchError((error) => {
      loaderService.decrease();
      throw error;
    })
  );
};
