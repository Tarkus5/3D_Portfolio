import React from 'react';
import { Link } from "react-router-dom";
import { arrow } from '../assets/icons';
import { useTranslation } from "react-i18next";

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
);

const HomeInfo = ({ currentStage }) => {
    const { t } = useTranslation("global");

    const renderContent = () => {
        switch (currentStage) {
            case 1:
                return (
                    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
                        {t("HomeInfoComponent.greeting")}, <span className="font-semibold">{t("HomeInfoComponent.name")}</span> 👋
                        <br />
                        {t("HomeInfoComponent.description")}
                    </h1>
                );
            case 2:
                return (
                    <InfoBox
                        text={t("HomeInfoComponent.about")}
                        link="/about"
                        btnText={t("HomeInfoComponent.aboutCTA")}
                    />
                );
            case 3:
                return (
                    <InfoBox
                        text={t("HomeInfoComponent.projects")}
                        link="/projects"
                        btnText={t("HomeInfoComponent.projectsCTA")}
                    />
                );
            case 4:
                return (
                    <InfoBox
                        text={t("HomeInfoComponent.contact")}
                        link="/contact"
                        btnText={t("HomeInfoComponent.contactCTA")}
                    />
                );
            default:
                return null;
        }
    };

    return renderContent();
};

export default HomeInfo;
