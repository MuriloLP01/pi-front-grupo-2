import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarCadastroComponent } from './components/atualizar-cadastro/atualizar-cadastro.component';
import { CartComponent } from './components/cart/cart.component';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path: "atualizar-cadastro", component: AtualizarCadastroComponent
  },
  {
    path: "carrinho", component: CartComponent    
  },
  {
    path: "cadastrar-produto",  component: CriarProdutoComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
