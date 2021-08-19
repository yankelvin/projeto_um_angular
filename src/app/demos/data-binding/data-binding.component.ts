import { Component } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: 'data-binding.component.html',
})
export class DataBindingComponent {
    public nome = "";
    public contador = 0;
    public urlImage =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';

    adicionar = () => {
        this.contador++;
    };

    zerarContador = () => {
        this.contador = 0;
    };

    keyUp = (event: any) => {
        this.nome = event.target.value;
    }
}
