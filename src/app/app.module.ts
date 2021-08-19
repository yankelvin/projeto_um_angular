import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { rootRouterConfig } from './app.routes';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';

import { ProdutoService } from './produtos/produtos.services';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

registerLocaleData(localePt);

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
        FooterComponent,
        SobreComponent,
        ContatoComponent,
        DataBindingComponent,
        ListaProdutoComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
    ],
    providers: [ProdutoService, { provide: LOCALE_ID, useValue: "pt-BR" }],
    bootstrap: [AppComponent],
})
export class AppModule { }
