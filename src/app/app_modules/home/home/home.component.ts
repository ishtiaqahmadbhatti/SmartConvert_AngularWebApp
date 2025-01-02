import { Component } from '@angular/core';
import { HeaderComponent } from "../../../app_layouts/header/header.component";
import { FooterComponent } from "../../../app_layouts/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
