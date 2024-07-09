import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'nfc-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, ContactComponent, FooterComponent]
})
export class AppComponent {
  title = 'footballclub';
}
