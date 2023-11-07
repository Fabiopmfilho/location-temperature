import Image from "next/image";

interface AwaitInformationBlockProps {
  src: string;
  alt: string;
  description: string;
}

const AwaitInformationBlock = ({ src, alt, description }: AwaitInformationBlockProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image src={src} alt={alt} width={200} height={200} />
      <p>{description}</p>
    </div>
  );
};

export default AwaitInformationBlock;
