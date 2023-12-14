import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from '../../components/service/service.component';

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    imports: [CommonModule, ServiceComponent]
})
export class HomepageComponent {

}
