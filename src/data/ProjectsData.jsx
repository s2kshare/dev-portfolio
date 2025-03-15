import JudgeImage from "../assets/Judge.png";
import JosBeautyBalmImage from "../assets/Josbeautybalm.png";
import MSONEFRAMERSIMAGE from "../assets/MSONEFRAMERS.gif";
import DJHeroImage from "../assets/DJHero.png";

export default {
    "Judge Project": {
        title: "Judge Project",
        desc: "A full-stack automated grading system designed to streamline the assessment of student submissions. The project features a front-end built with Vite and React, and a backend powered by ASP.NET 8 with Docker integration. It supports multiple programming languages including Python, Java, and C#, executing code in sandboxed Docker containers. Students can submit their code, which is compiled, executed, and graded automatically, with results saved to a database. The system is designed to manage users, papers, labs, and submissions, making it a powerful tool for educational institutions to automate grading and feedback.",
        image: JudgeImage,
        languages: ["C#", "Python", "React", "JS", "Docker"],
    },
    "Jo's Beauty Balm": {
        title: "Jo's Beauty Balm",
        desc: "This is the first website I have managed to build for a client. I got some experience in understanding needs, implementing those needs in a timely manner, and catering to a requested design.",
        source: "https://www.josbeautybalm.co.nz",
        image: JosBeautyBalmImage,
        languages: [],
    },
    "MS ONE FRAMERS": {
        title: "MSONEFRAMERS",
        desc: "The swiss army knife of creating one frame adjustment layers with fixed presets. This project was built upon the frustration found while creating a music video for a client. Creating an adjustment layer and applying effects became a tedious process, so, I developed a JSX plugin compatible with Adobe After Effects and Adobe Premiere Pro.",
        github: "https://github.com/s2kshare/MSONEFRAMERS",
        image: MSONEFRAMERSIMAGE,
        languages: ["JSX", "HTML", "CSS", "JS", "React"],
    },
    "DJ Hero Controller MIDI Integration": {
        title: "DJ Hero Controller MIDI Integration",
        desc: "Enables a DJ Hero Controller (PS3 version) to send MIDI messages for FL Studio, allowing it to control parameters such as Fruity Scratcher or other MIDI-mapped functions. The script converts DirectInput signals into MIDI events using pygame and mido.",
        github: "https://github.com/s2kshare/DJHeroControllerMIDI",
        image: DJHeroImage,
        languages: ["Python", "MIDI"],
    },
};
