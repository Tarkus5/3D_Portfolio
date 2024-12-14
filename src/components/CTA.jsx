import React from 'react'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const CTA = () => {
    const { t, i18n } = useTranslation("global")

    return (
        <section className='cta'>
            <p className='cta-text'>
                { t("CTA.question") } <br className='sm:block hidden' /> { t("CTA.message") }
            </p>
            <Link to='/contact' className='btn'>{ t("CTA.button") }</Link>
        </section>
    )
}
export default CTA
