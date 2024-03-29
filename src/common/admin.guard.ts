import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const user = context.getArgs()[0].user['http://localhost:3000/roles'] || '';
    return user.indexOf('menu-admin') > -1;
  }
}

export class UserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const user = context.getArgs()[0].user['http://localhost:3000/roles'] || '';
    return user.indexOf('verified-user') > -1;
  }
}
