import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutNavComponent } from './components/navigation/layout-nav/layout-nav.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutNavComponent, // Das Layout handhabt die Navigation
    children: [
      {
        path: 'home',
        loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'chat',
        loadComponent: () => import('./views/chat/chat.component').then(m => m.ChatComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./views/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  // Beispiel für eine Seite außerhalb des Layouts (z.B. Login, Onboarding)
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
