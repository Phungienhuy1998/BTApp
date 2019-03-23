import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  
  { path: '', loadChildren: './login/login.module#LoginPageModule' ,pathMatch: 'full'},

 
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

  { path: 'thongtin', loadChildren: './thongtin/thongtin.module#ThongtinPageModule' },
  { path: 'ketqua', loadChildren: './ketqua/ketqua.module#KetquaPageModule' },
  { path: 'lichhoc', loadChildren: './lichhoc/lichhoc.module#LichhocPageModule' },
  { path: 'chitiet', loadChildren: './chitiet/chitiet.module#ChitietPageModule' },
  { path: 'trangchu', loadChildren: './trangchu/trangchu.module#TrangchuPageModule' },
  { path: 'doipass', loadChildren: './doipass/doipass.module#DoipassPageModule' },
  { path: 'lichthi', loadChildren: './lichthi/lichthi.module#LichthiPageModule' }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
