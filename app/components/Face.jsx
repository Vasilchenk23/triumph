import Image from "next/image";

const Face = () => {
  return (
    <div className="bg-[#77040B] h-[210px] w-full flex items-center justify-center px-8">
      <Image
        src="/img/logo.svg"
        width={600}
        height={163}
        alt="face"
      />
    </div>
  );
};

export default Face;
