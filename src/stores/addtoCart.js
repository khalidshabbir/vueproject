import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', {
  state: () => ({
    // items: [],
    items: useStorage('items', [])

  }),
  getters: {

    cartItems: (state) => state.items,
    cartTotal: (state) => state.items,
  },
  actions: {
   
      addToCart(item) {
        // console.log(this.items)
        const existingItem = this.items.find((i) => i.id === item.id);
    
        if (existingItem) {
          const q=existingItem.quantity;
          const itemq=item.quantity.value;
          
          existingItem.quantity =(parseInt(q)+itemq);
        } else {
          // Item does not exist, add it to the cart
          this.items.push(item);
        }
      
    },
    removeItem(item) {
      const index = this.items.findIndex((i) => i.cartId == item);
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },

  },
})

