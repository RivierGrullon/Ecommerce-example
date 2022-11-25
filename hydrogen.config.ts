import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'too-corporation-americas.myshopify.com',
    storefrontToken: 'e1e23e9002fab53ae6435638dee519fc',
    storefrontApiVersion: '2022-07',
  },
  routes: '/src/pages'
});
