import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OdersService {
  constructor() {}

  cart = signal(JSON.parse(sessionStorage.getItem('cart') as string) || '');
  emailtosendto = signal('');
  bookedService = signal(
    JSON.parse(sessionStorage.getItem('serviceBooked') as string) || ''
  );

  openDialog(kind: string, mailTo: string) {
    const dialogWindow = document.getElementById(kind) as HTMLDialogElement;
    this.emailtosendto.set(mailTo);
    dialogWindow?.showModal();
  }

  closeDialog(kind: string) {
    const dialogWindow = document.getElementById(kind) as HTMLDialogElement;
    dialogWindow?.close();
  }

  bookService(service: any) {
    if (this.bookedService.length > 0) {
      this.bookedService.update((already) => [...already, service]);
    } else {
      this.bookedService.update(() => [service]);
    }

    sessionStorage.setItem(
      'serviceBooked',
      JSON.stringify(this.bookedService())
    );
  }

  addToCart(order: any) {
    if (this.cart().length > 0) {
      this.cart.update((cart) => [...cart, order]);
    } else {
      this.cart.update(() => [order]);
    }
    sessionStorage.setItem('cart', JSON.stringify(this.cart()));
  }

  removeFromCart(order: any, booking?: boolean) {
    if (booking) {
      this.bookedService.set([]);

      sessionStorage.setItem(
        'serviceBooked',
        JSON.stringify(this.bookedService())
      );

      return;
    }

    this.cart.update((cart) =>
      cart.filter((item: { name: any }) => item.name !== order.name)
    );

    sessionStorage.setItem('cart', JSON.stringify(this.cart()));
  }
}
