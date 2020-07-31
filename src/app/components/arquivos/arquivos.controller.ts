import { Injectable, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class ArquivosController {
    ordensImportadasCorretora: any[] = [];
    ordensImportadasCorretoraAlteradas: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    constructor() {

    }
}
