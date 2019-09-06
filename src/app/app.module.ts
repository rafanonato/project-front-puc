import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AcessarComponent } from './acessar/acessar.component';
import { LogadoComponent } from './logado/logado.component';
import { BarragemComponent } from './barragem/barragem.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    AcessarComponent,
    LogadoComponent,
    BarragemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, CadastroComponent, AcessarComponent, LogadoComponent, BarragemComponent]
})
export class AppModule { }
