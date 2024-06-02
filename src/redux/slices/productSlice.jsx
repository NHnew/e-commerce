import { apiSlice } from "../slices/apiSlices";

const productSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `products`,
            providesTags: ['Product'],
        }),

        getProductsById: builder.query({
            query: (id) => `products/${id}`,
            providesTags: ['Product'],
        })
    })
});
export const {
    useGetProductsQuery,
    useGetProductsByIdQuery
} = productSlice;