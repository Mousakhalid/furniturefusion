import React from 'react'
import { client } from '@/lib/client'
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(client);

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product']`)
  return res
}

const page = async () => {
  const data = await getProductData();
  console.log(data)
  return (
    <div>

      {
        data.map((item:any) => (
          item.name
        ))
      }
    </div>
  )
}

export default page