import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // Client error
                        console.log('client error', error);
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // Api error response
                        console.log('Api error', error);
                        if(error.status === 401) {
                            // window.location.reload();
                        }
                        errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                    }
                    return throwError(errorMessage);
                })
            )
    }
}