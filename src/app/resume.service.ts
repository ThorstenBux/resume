import "rxjs/add/operator/toPromise";

import { Injectable } from "@angular/core";
import { resume_data } from "./mock-resume";
import { Resume } from "./classes/resume";
import { Headers, Http } from "@angular/http";

import { environment } from "../environments/environment";



@Injectable()
export class ResumeService {
    private resumeServiceURL = environment.webServiceUrl;

    constructor(private http: Http) {}
    getResumeData(): Promise<Resume> {
        return this.http.get(this.resumeServiceURL).toPromise().then(
            response => {
                return JSON.parse(response.json()) as Resume;
            }
        ).catch(
            error => this.handleError
        );
    }

    getTopLevelResumeData(from: number = 0, to: number = undefined): Promise<string[]> {
        return this.http.get(`${this.resumeServiceURL}/topics`).toPromise().then(
            response => {
                console.log("RESPONSE data: " + JSON.parse(response.json()));
                return JSON.parse(response.json());
            }
        ).catch(
            error => this.handleError
        );
    }

    getResumeDetail(identifier: string): Promise<{}> {
        console.log("ResumeService identifier: " + identifier);
        return this.http.get(`${this.resumeServiceURL}/${identifier}`).toPromise().then(
            response => {
                return JSON.parse(response.json());
            }
        ).catch(
            error => this.handleError
        );
    }

    private handleError(error: any): Promise<any> {
        console.error("An error occurred", error); // for demo purposes only
        return Promise.reject(error.message || error);
        }
}
