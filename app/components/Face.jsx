import Image from "next/image";

const Face = () => {
  return (
    <div className="bg-[#77040B] h-[210px] w-full flex items-center justify-center px-8">
      <Image
        src="/img/logo.svg"
        width={800}
        height={163}
        alt="face"
        className="w-full h-auto max-w-[100%] max-h-[100%]"
      />
    </div>
  );
};

export default Face;
