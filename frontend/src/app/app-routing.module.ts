import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPageComponent } from './components/navigation/tabs-page/tabs-page.component';
import { DesktopLayoutComponent } from './components/navigation/desktop-layout/desktop-layout.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPageComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'home/details',
        loadComponent: () => import('./views/home/details/details.component').then(m => m.DetailsComponent)
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
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: DesktopLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'home/details',
        loadComponent: () => import('./views/home/details/details.component').then(m => m.DetailsComponent)
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
