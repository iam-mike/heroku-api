import { NestMiddleware } from '@nestjs/common';
export declare class AuthenticationMiddleware implements NestMiddleware {
    use(req: any, res: any, next: any): void;
}
