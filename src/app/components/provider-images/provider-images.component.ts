import { Component, OnInit } from '@angular/core';
import { LogoProviders } from 'src/app/models/logo-providers/logo-provider';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-provider-images',
  templateUrl: './provider-images.component.html',
  styleUrls: ['./provider-images.component.scss']
})
export class ProviderImagesComponent implements OnInit {

  fibreProviders: LogoProviders[];
  constructor(private imagesService: ImagesService) { }

  ngOnInit() {

    this.fibreProviders = this.imagesService.getImageProviders();
    console.log('providers --', this.fibreProviders);
  }

}
