import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/services.model';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  services: Service[] = [];
  isDetailsVisible = false

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    // Récupère les prestations depuis le service
    this.services = this.serviceService.getPrestations();
    this.services.forEach(service => service.isDetailsVisible = false);
  }

  toggleDetails(service: any) {
    service.isDetailsVisible = !service.isDetailsVisible;
  }
}
