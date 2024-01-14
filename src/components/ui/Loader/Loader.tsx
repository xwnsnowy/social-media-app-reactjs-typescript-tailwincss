import images from "@/assets/images";

const Loader = () => {
  return (
    <div className="flex-center w-full">
      <img src={images.loader} alt="Loader" width={24} height={24} />
    </div>
  );
};

export default Loader;
