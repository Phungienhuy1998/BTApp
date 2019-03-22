import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  { path: 'tab1', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' ,pathMatch: 'full'},
=======
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
>>>>>>> a2eaf01ad43f1a64dfbf1d437cdcceefb0228dc8
  { path: 'thongtin', loadChildren: './thongtin/thongtin.module#ThongtinPageModule' },
  { path: 'ketqua', loadChildren: './ketqua/ketqua.module#KetquaPageModule' },
  { path: 'lichhoc', loadChildren: './lichhoc/lichhoc.module#LichhocPageModule' },
  { path: 'chitiet', loadChildren: './chitiet/chitiet.module#ChitietPageModule' },
  { path: 'trangchu', loadChildren: './trangchu/trangchu.module#TrangchuPageModule' }



<<<<<<< HEAD
=======

>>>>>>> a2eaf01ad43f1a64dfbf1d437cdcceefb0228dc8
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
