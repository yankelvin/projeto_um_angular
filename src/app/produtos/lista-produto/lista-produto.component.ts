import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.services';

@Component({
  selector: 'app-lista-produto',
  templateUrl: "lista-produto.component.html",
})
export class ListaProdutoComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.ObterProdutos().subscribe(produtos => {
      this.produtos = produtos;
      console.log(produtos);
    }, error => console.log(error));
  }
}
