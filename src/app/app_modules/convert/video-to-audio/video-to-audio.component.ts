import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertService } from '../../../app_services/convert.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-video-to-audio',
  templateUrl: './video-to-audio.component.html',
  styleUrls: ['./video-to-audio.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VideoToAudioComponent {
  selectedFile: File | null = null;
  isConverting = false;
  downloadUrl: string | null = null;

  constructor(private convertService: ConvertService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.downloadUrl = null; // Clear previous download URL
    }
  }

  convertVideoToAudio(): void {
    if (!this.selectedFile) {
      alert('Please select a video file first!');
      return;
    }

    this.isConverting = true;
    this.convertService.convertVideoToAudio(this.selectedFile).subscribe({
      next: (blob: Blob) => {
        const downloadUrl = window.URL.createObjectURL(blob);
        this.downloadUrl = downloadUrl;
        this.triggerDownload(blob, 'converted-audio.mp3');
        this.isConverting = false;
      },
      error: (err) => {
        console.error('Conversion failed:', err);
        this.isConverting = false;
      },
    });
  }

  private triggerDownload(blob: Blob, filename: string): void {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}
