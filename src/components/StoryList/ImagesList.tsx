interface ImagesListProps {
  images: string[];
}

const ImagesList = ({ images }: ImagesListProps) => {
  const maxImagesToShow = 5;

  return (
    <div className="flex gap-1">
      {images.slice(0, maxImagesToShow).map((image: string, index: number) => {
        if (index === maxImagesToShow - 1 && images.length > maxImagesToShow) {
          const remainingImagesCount = images.length - maxImagesToShow + 1;
          return (
            <div
              className="w-7 h-12 rounded bg-[#ebebeb;] flex items-center justify-center"
              key={image || index}
            >
              <span>+{remainingImagesCount}</span>
            </div>
          );
        } else {
          return (
            <div className="w-7 h-12 rounded" key={image || index}>
              <img
                src={image}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ImagesList;
