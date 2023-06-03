import React from 'react'
import { client } from '@/lib/client'
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(client);

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product']`)
  return res
}
interface ProductsMap {
  slug: string,
  _type: string,
  name: string,
  details: string,
  images: string,
  price: number,

}
const page = async () => {
  const data: ProductsMap[] = await getProductData();
  console.log(data)
  return (
    <div>

      {
        data.map(item => (
          item.name
        ))
      }
    </div>
  )
}

export default page