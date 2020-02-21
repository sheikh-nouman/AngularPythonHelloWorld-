import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {API_URL} from '../app/env';
import {Problem} from './problem';

@Injectable({
    providedIn: 'root'
})
export class ProblemAPIService {
    constructor(private http: HttpClient) {

    }

    private static _handleError(error: HttpErrorResponse | any) {
        return Observable.throw(error.message || 'Error: Unable to complete request.');
    }

    getProblems(): Observable<Problem[]> {
        return this.http
        .get('${API_URL)/problems')
        .pipe(ProblemAPIService._handleError);
    }
}