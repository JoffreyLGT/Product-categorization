import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authTokenInterceptor } from "./interceptors/auth-token.interceptor";
import { provideAngularSvgIcon } from "angular-svg-icon";
import { provideEcharts } from "ngx-echarts";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authTokenInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAngularSvgIcon(),
    provideEcharts(),
  ],
};
