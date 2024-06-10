import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OdersService {
  constructor() {}

  cart = signal(JSON.parse(sessionStorage.getItem('cart') as string) || '[]');

  openDialog(kind: string) {
    const dialogWindow = document.getElementById(kind) as HTMLDialogElement;
    dialogWindow?.showModal();
  }

  closeDialog(kind: string) {
    const dialogWindow = document.getElementById(kind) as HTMLDialogElement;
    dialogWindow?.close();
  }

  getbookedService() {
    return JSON.parse(sessionStorage.getItem('serviceBooked') as string);
  }

  bookService(service: any) {
    sessionStorage.setItem('serviceBooked', JSON.stringify(service));
  }

  addToCart(order: any) {
    if (this.cart().length > 0) {
      this.cart.update((cart) => [...cart, order]);
    } else {
      this.cart.update(() => [order]);
    }
    sessionStorage.setItem('cart', JSON.stringify(this.cart()));
  }

  removeFromCart(order: any) {
    this.cart.update((cart) =>
      cart.filter((item: { name: any }) => item.name !== order.name)
    );

    sessionStorage.setItem('cart', JSON.stringify(this.cart()));
  }
}
