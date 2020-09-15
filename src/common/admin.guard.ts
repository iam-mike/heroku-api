import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const user = context.getArgs()[0].user['https://mw-pizza42-app.herokuapp.com/roles'] || '';
    return user.indexOf('menu-admin') > -1;
  }
}

export class UserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const user = context.getArgs()[0].user['https://mw-pizza42-app.herokuapp.com/roles'] || '';
    return user.indexOf('verified-user') > -1;
  }
}
