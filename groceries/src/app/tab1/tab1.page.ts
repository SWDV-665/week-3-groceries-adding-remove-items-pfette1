import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 3
    },
    {
      name: "Apples",
      quantity: 2
    },
    {
      name: "Oranges",
      quantity: 2
    }
  ]

  public alertButtons = [
    {
      text: 'Cancel',
      handler: (data: any) => {
      }
    },
    {
      text: 'Save',
      handler: (item: any) => {
        this.items.push(item);
      }
}
  ];
  public alertInputs = [
    {
      name: 'name',
      placeholder: 'Name',
    },
    {
      name: 'quantity',
      type: 'number',
      placeholder: 'Quantity',
      min: 1,
      max: 100,
    }
  ];

  constructor(private toastController: ToastController) {}

  async removeItem(item: any, index: number) {
    console.log(item, index);
    const toast = await this.toastController.create({
      message: index + ' successfully removed',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();

    this.items.splice(index, 1);
  }

  addItem() {
    
  }

}
