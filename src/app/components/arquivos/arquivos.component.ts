import { Component, OnInit } from '@angular/core';
import { ArquivosController } from './arquivos.controller';
import { FileUtil } from 'src/core/utils/file.util';
import { OrdemCorretoraModel } from 'src/core/models/ordens/ordemCorretora.model';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { OrdemService } from 'src/core/services/ordens/ordem.service';

@Component({
  selector: 'app-arquivos',
  templateUrl: './arquivos.component.html',
  styleUrls: ['./arquivos.component.scss']
})
export class ArquivosComponent implements OnInit {

  bufferOrdens: any[];
  files: File[] = [];
  fileReader = new FileReader();
  ordensImportadas: OrdemCorretoraModel[] = null;

  constructor(
      private arquivoController: ArquivosController
    , private ordemService: OrdemService
  ) {
    this.arquivoController.ordensImportadasCorretoraAlteradas.
      subscribe(r => {
        this.ordensImportadas = r;
        console.log('Atualizou com ' + r.length + ' ordens importadas.');
      });
  }

  ngOnInit() {
  }

  onRemove(event): void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSelect(event): void {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  analisarArquivos(): void {
    this.arquivoController.ordensImportadasCorretora = [];
    this.ordensImportadas = [];

    let cont = 0;

    this.files.forEach(file => {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        ++cont;

        this.arquivoController.ordensImportadasCorretora =
          this.arquivoController.ordensImportadasCorretora.concat(FileUtil.lerArquivo(fileReader));

        if (cont === this.files.length && this.arquivoController.ordensImportadasCorretora.length > 0) {

          this.arquivoController.ordensImportadasCorretora =
            this.ordemService.RetirarRepetidosMantendoAhMaiorData( this.sortByDate(this.arquivoController.ordensImportadasCorretora));

          this.arquivoController.ordensImportadasCorretoraAlteradas.next(
            this.arquivoController.ordensImportadasCorretora
          );
        }

      };

      fileReader.readAsArrayBuffer(file);
    });

  }

  sortByDate(array: any[]): any[] {
    return array.sort((a: any, b: any) => {
      return FileUtil.getTime(FileUtil.getDateByString(a['Atualizado em']))
        - FileUtil.getTime(FileUtil.getDateByString((b['Atualizado em'])));
    });
  }


}
