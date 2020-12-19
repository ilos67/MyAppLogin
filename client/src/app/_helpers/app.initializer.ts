import { AuthService } from '../service/auth-service/auth.service';

export function appInitializer(accountService: AuthService) {
    return () => new Promise(resolve => {
        // attempt to refresh token on app start up to auto authenticate
        accountService.refreshToken()
            .subscribe()
            .add(resolve);
    });
}