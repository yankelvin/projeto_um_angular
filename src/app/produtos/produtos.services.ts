import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Produto } from "./produto";


@Injectable()
export class ProdutoService {
    protected UrlServiceV1 = "http://localhost:3000/";

    constructor(private http: HttpClient) { }

    public ObterProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.UrlServiceV1 + "produtos");
    }
}