import { Routes } from '@angular/router';
import { TabsPageComponent } from './components/navigation/tabs-page/tabs-page.component';

const AppRoutes = {
  tabs: 'tabs',
  home: 'home',
  homeBack: 'tabs/home',
  homeDetails: 'home/details/:id',
  chat: 'chat',
  profile: 'profile'
};

export const routes: Routes = [
  {
    path: AppRoutes.tabs,
    component: TabsPageComponent,
    children: [
      {
        path: AppRoutes.home,
        loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent),
        data: {
          header: {
            showBackButton: false,
            showSaveButton: false,
            showLogo: true
          }
        }
      },
      {
        path: AppRoutes.homeDetails,
        loadComponent: () => import('./views/home/details/details.component').then(m => m.DetailsComponent),
        data: {
          header: {
            showBackButton: true,
            showSaveButton: false,
            showLogo: false,
            showTitle: 'Details',
            backButtonRoute: AppRoutes.homeBack
          }
        }
      },
      {
        path: AppRoutes.chat,
        loadComponent: () => import('./views/chat/chat.component').then(m => m.ChatComponent),
        data: {
          header: {
            showBackButton: false,
            showSaveButton: false,
            showLogo: true
          }
        }
      },
      {
        path: AppRoutes.profile,
        loadComponent: () => import('./views/profile/profile.component').then(m => m.ProfileComponent),
        data: {
          header: {
            showBackButton: false,
            showSaveButton: false,
            showLogo: true
          }
        }
      },
      {
        path: '',
        redirectTo: AppRoutes.home,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: AppRoutes.home,
        loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: AppRoutes.homeDetails,
        loadComponent: () => import('./views/home/details/details.component').then(m => m.DetailsComponent)
      },
      {
        path: AppRoutes.chat,
        loadComponent: () => import('./views/chat/chat.component').then(m => m.ChatComponent)
      },
      {
        path: AppRoutes.profile,
        loadComponent: () => import('./views/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: '',
        redirectTo: AppRoutes.home,
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