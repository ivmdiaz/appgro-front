import { NgxSpinnerService } from 'ngx-spinner';
import { LocationModel } from './../models/location.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { tap, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

declare var google: any;

@Injectable()
export class GeocodeService {

  private geocoder: any;

  constructor(
    private mapLoader: MapsAPILoader, 
    private spinnerService: NgxSpinnerService
  ) { }

  private initGeocoder() {
    console.log('Init geocoder!');
    this.geocoder = new google.maps.Geocoder();
  }

  private waitForMapsToLoad(): Observable<boolean> {
    if (!this.geocoder) {
      return from(this.mapLoader.load())
        .pipe(
          tap(() => this.initGeocoder()),
          map(() => true)
        );
    }
    return of(true);
  }

  geocodeAddress(location: string): Observable<LocationModel> {
    return this.waitForMapsToLoad().pipe(
      switchMap(() => {
        return new Observable<LocationModel>(observer => {
          this.spinnerService.show();
          this.geocoder.geocode({ 'address': location }, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              console.log('Geocoding complete!');
              observer.next({
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
                succes: true
              });
            } else {
              observer.next({ lat: 0, lng: 0, succes: false });
            }
            observer.complete();
            this.spinnerService.hide();
          });
        })
      })
    )
  }
}
