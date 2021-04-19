import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { TohsayfayokComponent } from './pages/tohsayfayok/tohsayfayok.component';
import { DoktoraBirimiEkleComponent } from './pages/birimEkle/doktora-birimi-ekle/doktora-birimi-ekle.component';
import { AnadalComponent } from './pages/bolumEkle/anadal/anadal.component';
import { bolumBilgisi } from './pages/bolumEkle/bolum-bilgisi-ekle/bolum-bilgisi';
import { BolumBilgisiEkleComponent } from './pages/bolumEkle/bolum-bilgisi-ekle/bolum-bilgisi-ekle.component';
import { DoktoraBolumuEkleComponent } from './pages/bolumEkle/doktora-bolumu-ekle/doktora-bolumu-ekle.component';

const routes: Routes = [
  {
    path: '',
    component: AnasayfaComponent
  },
  {
    path: 'doktorabolumuekle',
    loadChildren: () => import('./pages/bolumEkle/doktora-bolumu-ekle/doktora-bolum-ekle.module').then(m => m.DoktoraBolumEkleModule)
  },
  {
    path: 'yukseklisansbolumuekle',
    loadChildren: () => import('./pages/bolumEkle/yuksek-lisans-bolumu-ekle/yuksek-lisans-bolumu-ekle.module').then(m => m.yuksekLisansBolumuEkleModule)
  },
  {
    path: 'lisansbolumuekle',
    loadChildren: () => import('./pages/bolumEkle/lisans-bolumu-ekle/lisans-bolum-ekle.module').then(m => m.LisansBolumuEkleModule)
  },
  {
    path: 'onlisansbolumuekle',
    loadChildren: () => import('./pages/bolumEkle/on-lisans-bolumu-ekle/on-lisans-bolumu-ekle.module').then(m => m.OnLisansBolumuEkleModule)
  },
  {
    path: 'doktorabirimiekle',
    loadChildren: () => import('./pages/birimEkle/doktora-birimi-ekle/doktora-birimi-ekle.module').then(m => m.DoktoraBirimiEkleModule)
  },
  {
    path: 'yukseklisansbirimiekle',
    loadChildren: () => import('./pages/birimEkle/yuksek-lisans-birimi-ekle/yuksek-lisans-birimi-ekle.module').then(m => m.YuksekLisansBirimiEkleModule)
  },
  {
    path: 'lisansbirimiekle',
    loadChildren: () => import('./pages/birimEkle/lisans-birimi-ekle/lisans-birimi-ekle.module').then(m => m.LisansBirimiEkleModule)
  },
  {
    path: 'onlisansbirimiekle',
    loadChildren: () => import('./pages/birimEkle/on-lisans-birimi-ekle/on-lisans-birimi-ekle.module').then(m => m.OnLisansBirimiEkleModule)
  },
  {
    path: 'doktorabolumuekle/anadal/:universityid',
    loadChildren: () => import('./pages/bolumEkle/anadal/anadal.module').then(m => m.AnadalModule)
  },
  {
    path: 'doktorabolumuekle/anadal/bolumbilgisiekle/:id',
    loadChildren: () => import('./pages/bolumEkle/bolum-bilgisi-ekle/bolum-bilgisi-ekle.module').then(m => m.BolumbilgisiEkleModule)
  },
  {
    path: 'yukseklisansbolumuekle/anadal/:universityid',
    loadChildren: () => import('./pages/bolumEkle/anadal/anadal.module').then(m => m.AnadalModule)

  },
  {
    path: 'yukseklisansbolumuekle/anadal/bolumbilgisiekle/:id',
    loadChildren: () => import('./pages/bolumEkle/bolum-bilgisi-ekle/bolum-bilgisi-ekle.module').then(m => m.BolumbilgisiEkleModule)
  },
  {
    path: 'lisansbolumuekle/anadal/:universityid',
    loadChildren: () => import('./pages/bolumEkle/anadal/anadal.module').then(m => m.AnadalModule)
  },
  {
    path: 'onlisansbolumuekle/anadal/:universityid',
    loadChildren: () => import('./pages/bolumEkle/anadal/anadal.module').then(m => m.AnadalModule)
  },
  {
    path: 'lisansbolumuekle/anadal/bolumbilgisiekle/:id',
    loadChildren: () => import('./pages/bolumEkle/bolum-bilgisi-ekle/bolum-bilgisi-ekle.module').then(m => m.BolumbilgisiEkleModule)
  },
  {
    path: 'onlisansbolumuekle/anadal/bolumbilgisiekle/:id',
    loadChildren: () => import('./pages/bolumEkle/bolum-bilgisi-ekle/bolum-bilgisi-ekle.module').then(m => m.BolumbilgisiEkleModule)
  },
  {
    path: '**', 
    component: TohsayfayokComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
export const routerCompenents=[
  AnasayfaComponent
]