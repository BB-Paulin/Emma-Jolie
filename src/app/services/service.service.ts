import { Injectable } from '@angular/core';
import { Service } from '../models/services.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

private services: Service[] = [
  new Service(
    "Soin du visage classique",
    "Un soin revitalisant pour tous types de peau, nettoyage en profondeur et hydratation.",
    60, // Durée en minutes
    70, // Prix en euros
    "https://placehold.co/200", // Image avant
    "https://placehold.co/200"  // Image après
  ),
  new Service(
    "Manucure française",
    "Manucure élégante et classique, finition parfaite avec vernis blanc.",
    45,
    35,
    "https://placehold.co/200", // Image avant
    "https://placehold.co/200"  // Image après
  ),
  new Service(
    "Massage relaxant",
    "Massage complet du corps pour une relaxation profonde et une détente musculaire.",
    90,
    100,
  ),
  new Service(
    "Épilation à la cire",
    "Épilation professionnelle pour une peau douce et lisse.",
    30,
    40,
    "https://placehold.co/200", // Image avant
    "https://placehold.co/200"  // Image après
  ),
  new Service(
    "Séance de maquillage",
    "Maquillage professionnel pour toutes occasions, produits de haute qualité.",
    50,
    60,
    "https://placehold.co/200", // Image avant
    "https://placehold.co/200"  // Image après
  ),
  new Service(
    "Traitement capillaire",
    "Soin profond pour les cheveux, réparation et hydratation pour une chevelure éclatante.",
    70,
    80,
    "https://placehold.co/200", // Image avant
    "https://placehold.co/200"  // Image après
  )
];

getPrestations() {
  return this.services;
}

}
