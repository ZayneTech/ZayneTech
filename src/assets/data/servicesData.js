/* frontend images */
import planning from '../svgs/Frontend planning.svg';
import thinker from '../svgs/thinkertwo.svg';
import reactLogo from '../svgs/ReactLogo.svg';

/* backend images */
import database from "../svgs/databaseserver.svg";
import map from '../svgs/Map.svg';
import node from '../svgs/nodejslogo.svg'
import mongo from '../svgs/mongodb.svg';
import postgres from '../svgs/postgresql-inc.svg';

/*design images */
import wireframe from "../svgs/wireframe.svg";
import connected from "../svgs/connected.svg";
import adobe from '../svgs/Adobexd.svg';
import unsplash from "../svgs/unspashlogo.svg";
import colormind from '../svgs/Colormind logo.svg'


export const frontend = {
    service: 'frontend',
    /* color theme */
    theme: 'blue',
    /* Header text */
    title: 'Frontend Development',
    subtitle: 'Engaging websites that are fun to navigate',
    paragraph1: {
        title: ['React', 'Development'], 
        a: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interest- ing to engage your audience.'
    },
    paragraph2: {
        title: ['Why', 'React?'],
        a: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.',
        b: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.',
        c: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.',
    },
    images: {header: planning, secondary: thinker, logo: reactLogo}
}


export const backend = {
    service: 'backend',
    /* color theme */
    theme: 'green',
    /* Header text */
    title: 'Backend Development',
    subtitle: 'Lorem Ipsum text about the importance of frontend developement.',
    /*Intro paragraph */
    paragraph1: {
        title: ['Node', 'Devlopment'], 
        a: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interest- ing to engage your audience.'
    },
    paragraph2: {
        title: ['Why', 'Node?'],
        a: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.',
        b: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.'
    },
    paragraph3: {
        title: ['','Database', 'Development'],
        a: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.'
    },
    paragraph4: {
        title: ['API', 'Development'],
        a: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.',
        b: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.',
        c: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.'
    },
    images: {header: database, secondary: map, logo: node, toola: mongo, toolb: postgres}
}


export const design = {
    service: 'design',
    /* color theme */
    theme: 'pink',
    /* Header text */
    title: 'UI/UX Design',
    subtitle: 'Designed specifically for you to help you reach your goals',
    /*Intro paragraph */
    paragraph1: {
        title: ['UI/UX', 'Design'], 
        a: `A great User Interface(UI) and User Experience(UX) on your website can be extrmeley important for the success of your business.`
    },
    paragraph2: {
        title: ['Why', 'Adobe?'],
        a: 'We choose to use AdobeXD for our designs because their platform is one of the best. With the power of AdobeXD our designs are only limited to what we can imagine.',
        b: 'They are constantly improving their software with updates, which allows us developers to push the boundaries of our designs in ways never seen before.'
    },
    paragraph3: {
        title: ['Other', 'Design', 'Tools'],
        a: `If you don't have pictures or a coolor scheme to provide we have you covered.We use great tools such as unsplash and colormind to provide quality pictures and color schemes.`
    },
    paragraph4: {
        title: ['Color','Scheme'],
        a:  `The color scheme of your website can say a lot about your company's personality. Without the right fit you can give off the wrong impressions to your audience.`,
        b: 'The first thing people notice when they visit a site for the first time is the color. A well defined color scheme with the right contrasts can draw people into your website faster than you think. ',
        c: `We make it our job to dedicate the time to learn about your business, and find the right color scheme for you.`
    },
    images: {header: wireframe, secondary: connected, logo: adobe, toola: unsplash, toolb: colormind}
}