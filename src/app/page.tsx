import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/f42d45c1-295e-4365-acdb-bebca9575bf8-lpnei4.jpg",
  "https://utfs.io/f/3ad8acf4-9071-4600-8d02-af5931d9e091-lpnekp.jpg",
  "https://utfs.io/f/e43e6e11-4f8a-4f29-ba84-7ccfa1f11940-lpneeo.jpg",
  "https://utfs.io/f/581c820a-d7f7-4fe9-abb8-52797862cc04-lpnefj.jpg",
  "https://utfs.io/f/43e88d26-69b4-40d8-b0a5-bd4ab7effa05-lpneh9.jpg",
  "https://utfs.io/f/f34dc061-8e4c-4b4c-b004-d55016b06115-lpnelk.jpg",
  "https://utfs.io/f/9cf34a9d-9585-4847-86cf-3c644b2856de-xt52k7.jpg",
  "https://utfs.io/f/665a8b2e-1111-4d65-b2c8-ade264b9340d-xt52l2.jpg",
  "https://utfs.io/f/984b8542-8b13-4594-9420-5f221f2e5635-xt52jc.jpg",
  "https://utfs.io/f/12820ed5-cc39-4bb0-a4bf-93ab862dadc9-lpneiz.jpg",
  "https://utfs.io/f/9143dd4c-d7c2-4be8-a6c7-b5950561111b-lpnege.jpg",
  "https://utfs.io/f/3e9f3215-d33c-4b5e-b836-4abe36fbfab8-lpneju.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-4">
            {/* <Image src={image.url} width={48} height={48} alt="image"/> */}
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
