import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class msgService {
    private endpointUrl= 'https://6a95f2bbfa33b37f821b022a.mockapi.io/api/v1/messages';

    constructor(private http: HttpClient) {}

    sendData(name: string, email: string): Observable<msgResponse>{
        const data = {name, email};

        return this.http.post<msgResponse>(this.endpointUrl, data);
    }

}