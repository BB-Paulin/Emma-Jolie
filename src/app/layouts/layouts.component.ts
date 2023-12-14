import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {

}
