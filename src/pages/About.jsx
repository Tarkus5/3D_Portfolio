/* eslint-disable react/jsx-key */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import CTA from "../components/CTA.jsx";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <section className="max-container">
      <h1 className="head-text">
        {t("AboutComponent.greeting")}{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {t("AboutComponent.name")}
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>{t("AboutComponent.description")}</p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">{t("AboutComponent.mySkills")}</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  title={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-16 pb-8">
        <h3 className="subhead-text">{t("AboutComponent.workExperience")}</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>{t("AboutComponent.workExperienceDescription")}</p>
        </div>
      </div>
      <div className="mt-8 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={t(experience.date)}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[50%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
              }}
              iconStyle={{ background: experience.iconBg }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {t(point)}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};
export default About;
