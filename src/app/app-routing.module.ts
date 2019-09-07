import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AcessarComponent } from './acessar/acessar.component';
import { LogadoComponent } from './logado/logado.component';
import { BarragemComponent } from './barragem/barragem.component';
import { SucessoComponent } from './sucesso/sucesso.component';
import { ProcessoComponent } from './processo/processo.component';

const routes: Routes = [

  {
    path:'',
    component: CadastroComponent
  },
  {
    path: 'acessar',
    component: AcessarComponent
  },

  {
    path: 'logado',
    component: LogadoComponent
  },
  {
    path: 'logado/barragem',
    component: BarragemComponent
  },

  {
    path: 'sucesso',
    component: SucessoComponent
  },

  {
    path: 'logado/processo',
    component: ProcessoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
