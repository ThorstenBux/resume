import { Injectable } from '@angular/core';
import { resume_data } from './mock-resume';
import { Resume } from "./classes/resume";

@Injectable()
export class ResumeService {

    constructor() { }

    getResumeData(): Promise<Resume>{
        return Promise.resolve(resume_data);
    }

    getTopLevelResumeData(from:number = 0, to:number = undefined):Promise<string[]>{
        return this.getResumeData().then(resume_data => Object.keys(resume_data).slice(from,to));
    }

    getResumeDetail(identifier:string){
        console.log("ResumeService identifier: " + identifier);
        return this.getResumeData().then(resume_data => resume_data[identifier]);
    }
}