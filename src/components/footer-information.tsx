import { Separator } from "@/components/ui/separator";
import { formatTime } from "@/utils/formatTime";
import Image from "next/image";

interface FooterInformationProps {
  speed: any;
  sensation: any;
  humidity: any;
  sunrise: any;
  sunset: any;
}

const FooterInformation = ({
  speed = "...",
  sensation = "...",
  humidity = "...",
  sunrise = "...",
  sunset = "...",
}: FooterInformationProps) => {
  return (
    <div className="flex flex-col bg-white absolute inset-x-0 bottom-0 p-10 rounded-t-3xl">
      <div className="flex justify-between mb-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-400">Vento</p>
          <p className="font-bold">{Math.round(speed * 3.6)} KM</p>
        </div>
        <div>
          <Separator orientation="vertical" />
        </div>

        <div className="flex flex-col items-center">
          <p className="text-gray-400">Sensação</p>
          <p className="font-bold">{sensation} °C</p>
        </div>
        <div>
          <Separator orientation="vertical" />
        </div>

        <div className="flex flex-col items-center">
          <p className="text-gray-400">Umidade</p>
          <p className="font-bold">{humidity} %</p>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <p className="text-gray-400">
            <Image src={"/assets/sunrise.svg"} alt="" width={30} height={30} />
          </p>
          <p className="font-bold">{formatTime(sunrise)}</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-gray-400">
            <Image src={"/assets/sunset.svg"} alt="" width={30} height={30} />
          </p>
          <p className="font-bold">{formatTime(sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterInformation;
