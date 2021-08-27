import { Injectable, Directive } from '@angular/core';

@Injectable()
export class AppGlobals {
    private userid:number=0;
    constructor() { }

    setCurrency(val:number) {
        this.userid = val;
    }

    getCurrency() {
        return this.userid;
    }
    
}