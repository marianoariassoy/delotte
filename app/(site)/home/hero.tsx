import Title from "@/components/title";

type Data = {
  title: string;
  text: string;
};

const hero = ({ data }: { data: Data }) => {
  return (
    <div className="flex flex-col gap-y-20">
      <Title title="" subtitle={data.text} />
      <video
        className="w-full aspect-square md:aspect-video object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/no-video.avif"
      >
        <source src="/videos/landing-hero-h264.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default hero;
