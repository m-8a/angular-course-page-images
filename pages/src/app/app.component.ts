import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
    title: 'At beach',
    url:
      'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the desert',
      url: 'https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/flagged/photo-1572465213253-31b7e7f634ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the desert',
      url: 'https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/flagged/photo-1572465213253-31b7e7f634ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the desert',
      url: 'https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/flagged/photo-1572465213253-31b7e7f634ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  ];

  switchNav(index: number) {;
    return Math.abs(this.currentPage - index) < 5;
  }
}
