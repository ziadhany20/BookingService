// {
//     "price": 1000,
//     "imageUrl": "https://images.pexels.com/photos/25037488/pexels-photo-25037488/free-photo-of-a-man-sitting-on-a-bench-outside-of-a-shop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "description": "Description For Package",
//     "discount": 0,
//     "title": "Package1",
//     "isTopDeal": true
// }
export default interface Package {
    price: number,
    imageUr: string,
    description: string,
    discount: number,
    title: string,
    isTopDeal: boolean
}