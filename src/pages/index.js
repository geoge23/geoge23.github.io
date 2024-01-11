import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import GcsLogo from '../assets/gcs.svg';
import Headline from '../components/Headline';
import TextSection from '../components/TextSection';

/**
 * @param {HTMLDivElement} node 
 */
const callbackFunc = (node) => {
    if (!node) return;

    const children = node.children;
    for (let child of children) {
        child.style.opacity = 0;
        child.style.transform = 'translateY(20px)';
        child.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
    }

    let time = 200;
    for (let child of children) {
        setTimeout(() => {
            node.style.opacity = 1;
            child.style.opacity = 1;
            child.style.transform = 'translateY(0px)';
        }, time);
        time += 150;
    }
}

export default function Index() {

    const callbackRef = useCallback(callbackFunc, []);

    return (
        <>
            <Helmet>
                <title>George Parks</title>
                <meta name="description" content="George Parks is a computer science + public policy major at Georgia Tech, working at the intersection of government and novel technologies."></meta>
                <meta name="keywords" content="george parks, george, parks, software, georgia tech, ga tech, computer science, public policy, government, student government, developer, atlanta, georgia, upwork, gtri, linkedin, github, email"></meta>
                <meta name="author" content="George Parks"></meta>
            </Helmet>
            <main ref={callbackRef} className="max-w-[800px] md:p-0 p-10 mx-auto md:mb-32 mb-10 homepage-main" style={{
                opacity: 0,
            }}>
                <section className='md:mt-28 mt-16'>
                    <img src={GcsLogo} className='aspect-square h-24' alt="GCS Logo" />
                    <h1 className='text-[2.5rem] md:max-w-none max-w-64 leading-10 mt-2 -mb-2'>Hey, I&apos;m George Parks</h1>
                    <p className='text-3xl mt-3'>A computer scientist + public policy advocate</p>
                    <hr className='border-black md:w-96 w-1/3 mt-8'></hr>
                </section>
                <TextSection className='mt-16'>
                    I’m a sophomore computer science + public policy major at <a href="https://gatech.edu">Georgia Tech</a>, working at the intersection of government and novel
                    technologies.
                </TextSection>
                <TextSection>
                    I'm currently managing technology and media for a <a href="https://gosam.org">Georgia State House campaign</a>, and I'm developing
                    a <a href="http://paragonfellowship.org">fellowship</a> to increase student involvement in local technology policy.
                </TextSection>
                <TextSection>
                    I'm also the team lead on a Georgia Tech SGA development project to improve the queueing experience
                    for students at career fairs and other large events.
                </TextSection>
                <TextSection>
                    I previously worked as a SDE intern at <a href="https://www.gtri.gatech.edu/laboratories/electro-optical-systems-laboratory">GTRI</a>,
                    as well as a Top-Rated Freelancer on <a href="https://www.upwork.com/freelancers/~01722f50762199c085">Upwork</a>.
                    I'm also a member of the Electronic Frontier Foundation, an avid hiker, and a lifelong tinkerer and builder.
                </TextSection>
                <Headline>
                    Want to get in contact?
                </Headline>
                <TextSection className="mt-4">
                    Send me an email at <a href="mailto:george.parks@gatech.edu">george.parks@gatech.edu</a>
                    <br />
                    or call or text <a href="tel:4044878173">(404) 487 8173</a>
                </TextSection>
                <TextSection>
                    You can also connect with me on <a href="https://www.linkedin.com/in/george-parks/">LinkedIn</a> or
                    check out my <a href="https://github.com/geoge23">GitHub</a>
                </TextSection>
                <TextSection>
                    For legal or business inquiries, email <a href="mailto:business@georgeparks.me">business@georgeparks.me</a>
                </TextSection>
            </main>
        </>
    )
}