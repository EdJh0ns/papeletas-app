import { CanActivateFn } from '@angular/router';

export const jefeGuard: CanActivateFn = (route, state) => {
  return true;
};
