interface LiProps {
  text1: string;
  text2: string;
}

const Li = ({ text1, text2 }: LiProps) => {
  return (
    <li className={`flex flex-col space-y-2`}>
      <span
        className={`border-l-4 border-primary pl-3 text-sm text-justify md:text-lg`}
      >
        {text1}
      </span>
      <span
        className={`ml-5 border-b border-ascent max-w-max text-ascent-5 text-xs md:text-sm`}
      >
        {text2}
      </span>
    </li>
  );
};

const Functions = () => {
  return (
    <section id="functions" className="container p-5 mb-5">
      <h3 className="prose font-bold text-primary tracking-widest uppercase md:mt-5 mb-3 md:text-2xl">
        <span className="border-b border-ascent-5">LEGISLATIVE FUNCTIONS</span>
      </h3>
      <h5 className="-mt-2 mb-4 text-ascent font-bold text-xs md:text-sm tracking-wide">
        BILLS/MOTIONS MOVED
      </h5>
      <div>
        <ul className="md:w-[85%] xl:w-[75%] space-y-5">
          <Li
            text1="A BILL FOR AN ACT TO ESTABLISH FEDERAL COLLEGE OF EDUCATION ILORIN, KWARA STATE, TO STATE COLLEGE OF AWAITING SECOND PROVIDE FULL-TIME COURSES TEACHING, INSTRUCTION"
            text2="SOLE SPONSORSHIP"
          />
          <Li
            text1="A BILL FOR AN ACT TO PROVIDE THE LEGAL FRAMEWORK TO ESTABLISH THE FEDERAL MEDICAL CENTRE FUFU, KWARA STATE, TO PROVIDE FOR THE MANNER OF RUNNING THE HOSPITAL, INCLUDING ESTABLISHMENT BOARD OF THE MANAGEMENT, CHIEF MEDICAL DIRECTOR AND OTHER STAFF, AND TO PROVIDE FOR THE DISCIPLINE OF STAFF AND FOR RELATED MATTERS. "
            text2="SOLE SPONSORSHIP"
          />
          <Li
            text1="A BILL FOR NATIONAL AGENCY FOR TECHNOLOGY INCUBATION ( ESTABLISHMENT) ACT, 2020"
            text2="SOLE SPONSORSHIP"
          />
          <Li
            text1="A BILL FOR AN ACT TO REPEAL THE NATIONAL MANPOWER BOARD ACT AND TO RE-ENACT THE NATIONAL MANPOWER COORDINATION BOARD ACT TO AMONG OTHER THINGS DETERMINE AND ADVISE THE GOVERNMENT ON THE NATION'S MANPOWER NEEDS IN ALL OCCUPATIONS"
            text2="SOLE SPONSORSHIP"
          />
          <Li
            text1="A MOTION ON A MATTER OF URGENT PUBLIC IMPORTANCE ON FLOOD DISASTER AND EROSION IN ILORIN EAST AND SOUTH FEDERAL CONSTITUENCY, KWARA STATE"
            text2="SOLE SPONSORSHIP"
          />
          <Li
            text1="A MOTION ON THE NEED TO ENSURE PROMPT AND FREE TREATMENT OF CHILDREN LIVING WITH CANCER IN NIGERIA."
            text2="SOLE SPONSORSHIP"
          />
          <Li
            text1="A MOTION ON A MATTER OF URGENT PUBLIC IMPORTANCE ON THE URGENT NEED TO SECURE THE RELEASE AND SAVE THE SOUl OF MISS FARIDAH ABDULSAMIU AND OTHER NIGERIANS LANGUISHING IN VARIOUS DETENTION CAMPS IN LIBYA."
            text2="SOLE SPONSORSHIP"
          />
          <Li
            text1="A MOTION OF NEED FOR MOP-UP OF GRAINS THROUGH MASS PURCHASE TO SUSTAIN AGRICULTURAL PRODUCTION DURING THE RAINY SEASON."
            text2="CO-SPONSORSHIP WITH OTHER HONORABLE MEMBERS."
          />
        </ul>
      </div>
    </section>
  );
};

export default Functions;
