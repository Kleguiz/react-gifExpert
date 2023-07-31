export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=K0iazIoPGjGdVJJ31KIOI1QK59L9t6U4&q=${category}&limit=5`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
