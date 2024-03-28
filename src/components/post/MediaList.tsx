interface ImageProp {
  secure_url: string;
  resource_type: "image" | "video";
  public_id: string;
}
export default function MediaList({ media }: { media: ImageProp[] }) {
  const length = media.length;
  if (length < 3) {
    return (
      <div className="grid grid-cols-3 grid-rows-2 gap-0.5">
        {media.map((item, i) => (
          <div
            className={`hover:brightness-75 transition-all cursor-pointer 
          ${length < 3 ? "col-span-3" : "col-span-1"} 
          ${
            length == 1
              ? "row-span-2"
              : length == 2
              ? "row-span-1"
              : "row-span-2"
          }`}
            key={i}
          >
            <img
              src={item.secure_url}
              className="h-full w-full object-cover"
              alt="Post"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  } else if (length < 4) {
    return (
      <div className="grid grid-cols-6 grid-rows-8 gap-0.5">
        {media.map((item, index) => (
          <div
            className={`hover:brightness-75 transition-all cursor-pointer 
            ${index == 0 ? "col-span-6" : "col-span-3"}
            ${index == 0 ? "row-span-5" : "row-span-3"}
          `}
            key={index}
          >
            <img
              src={item.secure_url}
              className="h-full w-full object-cover"
              alt="Post"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  } else if (length < 5) {
    return (
      <div className="grid grid-cols-6 grid-rows-8 gap-0.5">
        {media.map((item, index) => (
          <div
            className={`hover:brightness-75 transition-all cursor-pointer
            ${index == 0 ? "col-span-6" : "col-span-2"}
            ${index == 0 ? "row-span-5" : "row-span-3"}
            
          `}
            key={index}
          >
            <img
              src={item.secure_url}
              className="h-full w-full object-cover"
              alt="Post"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  } else if (length < 6) {
    return (
      <div className="grid grid-cols-6 grid-rows-4 gap-0.5">
        {media.map((item, index) => (
          <div
            className={`hover:brightness-75 transition-all cursor-pointer 
            ${index < 2 ? "col-span-3" : "col-span-2"}
            row-span-2`}
            key={index}
          >
            <img
              src={item.secure_url}
              className="h-full w-full object-cover"
              alt="Post"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-6 grid-rows-4 gap-0.5">
        {media.slice(0, 5).map((item, index) => (
          <div
            className={`relative hover:brightness-75 transition-all cursor-pointer 
            ${index < 2 ? "col-span-3" : "col-span-2"}
            row-span-2`}
            key={index}
          >
            <img
              src={item.secure_url}
              className="h-full w-full object-cover "
              alt="Post"
              loading="lazy"
            />
            {index === 4 && (
              <span className="absolute z-10 top-0 left-0 h-full w-full flex text-white text-xl bg-black bg-opacity-30 justify-center items-center">
                +{length - 5}
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }
}
