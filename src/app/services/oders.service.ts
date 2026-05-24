import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OdersService {
  // constructor() {}
  private isBrowser!: boolean
  cart = signal<any>([]);
  bookedService = signal<any>([]);


constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  this.isBrowser = isPlatformBrowser(platformId)

  afterNextRender(() => {
    if (this.isBrowser) {
      this.cart.set(JSON.parse(sessionStorage.getItem('cart') as string) || '');
      this.bookedService.set(JSON.parse(sessionStorage.getItem('serviceBooked') as string) || '');
    }
  })
}


  emailtosendto = signal('');


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
    if(this.isBrowser){
      sessionStorage.setItem(
        'serviceBooked',
        JSON.stringify(this.bookedService())
      );
    }
  }

  addToCart(order: any) {
    if (this.cart().length > 0) {
      this.cart.update((cart) => [...cart, order]);
    } else {
      this.cart.update(() => [order]);
    }
    if(this.isBrowser){
    sessionStorage.setItem('cart', JSON.stringify(this.cart()));
    }
  }

  removeFromCart(order: any, booking?: boolean) {
    if (booking) {
      this.bookedService.set([]);
      if(this.isBrowser){
      sessionStorage.setItem(
        'serviceBooked',
        JSON.stringify(this.bookedService())
      );
    }

      return;
    }

    this.cart.update((cart) =>
      cart.filter((item: { name: any }) => item.name !== order.name)
    );
    if(this.isBrowser){
    sessionStorage.setItem('cart', JSON.stringify(this.cart()))
  }
  }
}
