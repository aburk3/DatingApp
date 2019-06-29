import {Injectable} from "@angular/core"
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>,);
	}

}