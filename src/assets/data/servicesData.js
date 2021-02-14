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
    subtitle: 'Lorem Ipsum text about the importance of frontend developement.',
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
    subtitle: 'Lorem Ipsum text about the importance of frontend developement.',
    /*Intro paragraph */
    paragraph1: {
        title: ['UI/UX', 'Design'], 
        a: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interest- ing to engage your audience.'
    },
    paragraph2: {
        title: ['Why', 'Adobe?'],
        a: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.',
        b: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.'
    },
    paragraph3: {
        title: ['Other', 'Design', 'Tools'],
        a: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.'
    },
    paragraph4: {
        title: ['Color','Scheme'],
        a: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.',
        b: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.',
        c: 'Lorem Ipsum text about the importance of frontend development. Blah blah take up more space make it long and interesting to engage your audience.'
    },
    images: {header: wireframe, secondary: connected, logo: adobe, toola: unsplash, toolb: colormind}
}