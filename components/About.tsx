import Image from "next/image";
const About = () => {
  return (
    <section
      id="about"
      className="container p-5 w-[90%] bg-gray-50 min-h-[100px] -mt-3 md:-mt-5 xl:-mt-8 mb-6 shadow-md rounded-md flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:gap-x-5"
    >
      <div className="relative md:w-[40%] justify-self-center">
        <img
          src="/images/cook2.jpg"
          width="100%"
          height="100%"
          //   objectFit="contain"
          //   layout="fill"
        />
      </div>
      <div className="md:w-[60%] mt-5 md:mt-0">
        <h3 className="prose font-bold text-primary tracking-widest uppercase md:mt-5 mb-3 md:text-2xl">
          <span className="border-b border-ascent-3">About</span>
        </h3>
        <div className="space-y-4 text-justify pb-6">
          <p className="prose text-sm md:text-lg">
            It's with a great pleasure to welcome each and every like mind
            individuals to this platform.
          </p>
          <p className="prose text-sm md:text-lg">
            It's purposely created to promote all the Giant Stride of
            Infrastructural Projects across the Ilorin East and South beyond
            being facilitated by{" "}
            <span className="font-bold">Hon Abdulganiyu Cook Olododo</span>,
            series of impactful empowerment programme, and the Legislative
            activities of Hon Abdulganiyu Saka Cook Olododo, Member representing
            Ilorin East and South federal Constituency in halloween chamber, as
            well as other related activities to his personality and any peice
            information that will positively and effective be helpful in
            promoting our great party, (APC).
          </p>
          <p className="prose text-sm md:text-lg">
            This will also serve as communication channel for a smooth
            interactive discuss to achieve a political goals of Hon Abdulganiyu
            Cook Olododo and his distance future political actualisation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
