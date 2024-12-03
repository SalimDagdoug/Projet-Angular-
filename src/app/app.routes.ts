import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';
import { StockdetailsComponent } from './stock/stockdetails/stockdetails.component';

export const routes: Routes = [
    { 
      path: '', 
      redirectTo: 'Home', 
      pathMatch: 'full' 
    },
    { 
      path: 'Home',
      component: HomeComponent,
      children: [
        {
          path: '',
          redirectTo: 'Dashboard', // Redirige vers "Dashboard" par défaut
          pathMatch: 'full'
        },
        {
          path: 'Dashboard', // Sous-route pour "Dashboard"
          component: DashboardComponent, 
          pathMatch: 'full'
        },
        {
          path: 'Produit', // Sous-route pour "Produit"
          component: ProduitComponent,
        },
        {
          path: 'Stock', // Sous-route pour "Stock"
          component: StockComponent,
        },
        {
          path: 'Stock-details/:id', // Route pour afficher les détails du stock
          component: StockdetailsComponent, // Affiche les détails du stock
        }
      ]
    },
    { path: '**', redirectTo: 'Home' } // Redirection pour les chemins non définis
  ];
  