import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatList, MatListItem } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-trail-list',
  imports: [
    MatCardModule, MatButtonModule, MatChipsModule,
    MatList, MatListItem, MatIcon
  ],
  templateUrl: './trail-list.html',
  styleUrl: './trail-list.css'
})
export class TrailList {
  list = [
    {
      "id": 1,
      "name": "Trilha Pedra da Gávea",
      "description": "Trilha desafiadora com trechos de escalada leve, levando ao topo de uma das maiores formações rochosas à beira-mar do mundo, com vista panorâmica do Rio.",
      "keywords": "montanha, mirante, floresta, aventura, zona sul",
      "distance": 6,
      "time": 6.5,
      "difficulty": "dificil",
      "region": "zona sul",
      "photoUrl": "https://www.alltrails.com/_next/image?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvODgxNzcxMTYvM2ExMTNmNmU5MmYxY2IzMmNiNWVmMjQxMTBlYzYxZjQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjozNTIwLCJoZWlnaHQiOjE2MDAsImZpdCI6ImNvdmVyIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19&w=3840&q=90"
    },
    {
      "id": 2,
      "name": "Trilha Pedra Bonita",
      "description": "Trilha de nível moderado que leva ao topo da Pedra Bonita, excelente para fotos e com opção de voo de asa delta.",
      "keywords": "mirante, floresta, aventura, asa delta",
      "distance": 3,
      "time": 2.5,
      "difficulty": "media",
      "region": "zona sul",
      "photoUrl": "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvODkxMDcwMzYvZTNmZWFlY2QxZTg5MDM1MjZiMjgzNjhmYjRiNjBhOWMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ=="
    },
    {
      "id": 3,
      "name": "Trilha Morro Dois Irmãos",
      "description": "Trilha curta com vista incrível das praias do Leblon e Ipanema, acessada pela comunidade do Vidigal.",
      "keywords": "mirante, favela tour, praia, floresta urbana",
      "distance": 2,
      "time": 1.6,
      "difficulty": "facil",
      "region": "zona sul",
      "photoUrl": "https://www.viagensecaminhos.com/wp-content/uploads/2023/08/morro-dois-irmaos-1.jpg"
    },
    {
      "id": 4,
      "name": "Trilha da Pedra do Telégrafo",
      "description": "Famosa por suas fotos em perspectiva, essa trilha oferece vista para praias selvagens e costões rochosos.",
      "keywords": "mirante, foto, floresta, aventura, zona oeste",
      "distance": 4,
      "time": 3.5,
      "difficulty": "media",
      "region": "zona oeste",
      "photoUrl": "https://riodejaneiro.tur.br/wp-content/webp-express/webp-images/uploads/2024/10/pedra-do-telegrafo-rio.jpg.webp"
    },
    {
      "id": 5,
      "name": "Trilha Circuito das Praias Selvagens",
      "description": "Percurso costeiro que conecta as praias do Meio, Funda, Inferno e Perigoso. Um dos mais belos circuitos do Rio.",
      "keywords": "praia, floresta, costão, zona oeste, trilha longa",
      "distance": 8,
      "time": 4.0,
      "difficulty": "media",
      "region": "zona oeste",
      "photoUrl": "https://foconaviagem.com/wp-content/uploads/2021/06/praias-selvagens-barra-de-guaratiba-rio-de-janeiro.jpg"
    }
  ];

}
