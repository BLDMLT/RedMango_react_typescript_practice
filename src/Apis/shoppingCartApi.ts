import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const shoppingCartApi = createApi({
  reducerPath: 'shoppingCartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redmangoapipractice.azurewebsites.net/api/"
  }),
  tagTypes: ["shoppingCarts"], 
  endpoints: (builder) => ({
    getShoppingCart : builder.query({
      query: (userId) => ({
        url: "shoppingCart",
        params: {
          userId: userId
        }
      }),
      providesTags: ["shoppingCarts"]
    }),
    updateShoppingCart : builder.mutation({
      query: ({
        menuItemId,
        updateQuantityBy,
        userId
      }) => ({
        url: "shoppingCart",
        method: "POST",
        params: {
          menuItemId,
          updateQuantityBy,
          userId
        }
      })
    })
  })
})

export const { useGetShoppingCartQuery, useUpdateShoppingCartMutation} = shoppingCartApi;
export default shoppingCartApi;