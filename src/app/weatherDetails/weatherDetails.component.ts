import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  city: data;
  showSection: boolean = false;

  ngOnInit() {
    this.searchInList(null);
  }

  searchInList(searchText: string) {
    if (!searchText || this.weatherData.length === 0) {
      this.city = null;
      this.showSection = false;
      return;
    }

    this.showSection = true;
    const foundItem = this.weatherData.find(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
    this.city = foundItem ? foundItem : null;
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
