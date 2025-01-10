import { Component } from '@angular/core';
import { ConvertService } from '../../../app_controllers/services.controller';

@Component({
  selector: 'app-merge-pdfs',
  templateUrl: './merge-pdfs.component.html',
  styleUrls: ['./merge-pdfs.component.css']
})
export class MergePdfsComponent {
  selectedFiles: File[] = [];

  constructor(private convertService: ConvertService) { }
  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  mergePdfs(): void {
    if (this.selectedFiles.length > 0) {
      this.convertService.mergePdfs(this.selectedFiles).subscribe(response => {
        this.downloadFile(response, 'merged.pdf');
      }, error => {
        console.error('Error merging PDFs:', error);
      });
    }
  }
  private downloadFile(data: Blob, filename: string): void {
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}
