import { Component } from '@angular/core';
import { HeaderComponent } from "../../../app_layouts/header/header.component";
import { FooterComponent } from "../../../app_layouts/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngOnInit() {}
  constructor(private route: Router) { }

  convertPDFToWord() {
    this.route.navigate(['/convert/pdf-to-word']);
  }

  convertWordToPDF() {
    this.route.navigate(['/convert/word-to-pdf']);
  }
}
