import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';
import { MasterServiceService } from '../services/master-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const currentmenu = route.url[0].path;
  const router=inject(Router);
  const user =inject(MasterServiceService)
   alert(user.rolID)
   alert(user.isLogin)
  if(user.isLogin){}


  if (currentmenu == 'AddRack') {
    router.navigate([''])
    return true;
  } else if (currentmenu == 'AddCustom') {
    return true;
  }
  return false;
};
