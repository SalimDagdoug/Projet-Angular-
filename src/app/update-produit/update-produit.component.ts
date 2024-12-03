import { Component, OnInit } from '@angular/core';
import { Produit, ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css'
})

export class UpdateProduitComponent implements OnInit {

  produit: Produit = {
    libelle: '',
    prix: 0,
    qteStock: 0,
    id: 0
  };
  constructor(private apiservice: ServiceService, private route: ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiservice.getProduitById(id).subscribe(
      (data) => {
        this.produit = data;
      },
      (error) => {
        console.error('Error fetching produit:', error);
      }
    );
  }

  onUpdate(): void {
    if (this.produit.id) {
      this.apiservice.updateProduit(this.produit.id, this.produit).subscribe(
        () => {
          alert('Produit updated successfully!');
          this.router.navigate(['/produits']); // Redirect to the list after update
        },
        (error) => {
          console.error('Error updating produit:', error);
          alert('Failed to update produit.');
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/produits']);
  }
}

