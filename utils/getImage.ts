// export default async function getImages() {
//   // const query = `https://pixabay.com/api/?key=${process.env.PIXABAY_API}&q=yellow+flowers&image_type=photo`;
//   // const query =
//   // 'https://pixabay.com/api/?key=37962886-4d6a75cf13b01bb34ce8d3ea5&q=yellow+flowers&image_type=photo&pretty=true';
//   const res = await fetch(
//     `https://pixabay.com/api/?key=${process.env.PIXABAY_API}&q=yellow+flowers&image_type=photo&pretty=true`
//   );
//   if (!res.ok) {
//     throw new Error('failed to get image');
//   }
//   return await res.json();
// }
