// Central story configuration for the cinematic, scroll-based homepage.
// This structure maps each scene's media, type, text prompts, and design themes.
// You can easily swap out file paths or edit display texts here.

export const storyScenes = [
  {
    id: "scene-01",
    name: "School Arrival",
    media: "/story/scene-01-school.mp4",
    fallbackMedia: "/story/v1.mp4", // Fallback to existing files for testing if scene-01 is missing
    type: "video",
    theme: "school", // warm / nostalgic
    textSegments: [
      { text: "12 YEARS.", start: 0, end: 0.3 },
      { text: "THOUSANDS OF LESSONS.", start: 0.35, end: 0.65 },
      { text: "ONE JOURNEY.", start: 0.7, end: 0.95 }
    ],
    height: "300vh" // Total scroll height for this scene
  },
  {
    id: "scene-02",
    name: "Classroom",
    media: "/story/scene-02-classroom.mp4",
    fallbackMedia: "/story/v2.mp4",
    type: "video",
    theme: "school", // warm / nostalgic
    textSegments: [
      { text: "THOUSANDS OF LESSONS.", start: 0, end: 0.45 },
      { text: "COUNTLESS MEMORIES.", start: 0.5, end: 0.95 }
    ],
    height: "200vh"
  },
  {
    id: "scene-03",
    name: "Empty Classroom",
    media: "/story/scene-03-empty-classroom.jpg",
    fallbackMedia: "/school.png",
    type: "image",
    theme: "school", // warm / nostalgic (quiet and nostalgic)
    textSegments: [
      { text: "AND THEN...", start: 0, end: 0.45 },
      { text: "THE LAST BELL RINGS.", start: 0.5, end: 0.95 }
    ],
    height: "250vh"
  },
  {
    id: "scene-04",
    name: "Corridor Walk",
    media: "/story/scene-04-corridor.mp4",
    fallbackMedia: "/story/v3.mp4",
    type: "video",
    theme: "school", // warm / nostalgic
    textSegments: [
      { text: "THE SCHOOL DAYS END.", start: 0.1, end: 0.9 }
    ],
    height: "200vh"
  },
  {
    id: "scene-05",
    name: "School Gate Exit",
    media: "/story/scene-05-school-gate.mp4",
    fallbackMedia: "/story/v4.mp4",
    type: "video",
    theme: "school-gate", // Transition color temp warm to cool
    textSegments: [
      { text: "AND THE REAL JOURNEY BEGINS.", start: 0.1, end: 0.9 }
    ],
    height: "250vh"
  },
  {
    id: "scene-06",
    name: "Unknown Road",
    media: "/story/scene-06-unknown-road.mp4",
    fallbackMedia: "/story/v1.mp4",
    type: "video",
    theme: "unknown", // cool / blue
    textSegments: [
      { text: "BUT WHERE DO YOU GO FROM HERE?", start: 0.1, end: 0.9 }
    ],
    height: "200vh"
  },
  {
    id: "scene-07",
    name: "Crossroads of Choice",
    media: "/story/scene-07-crossroads.mp4",
    fallbackMedia: "/story/v2.mp4",
    type: "video",
    theme: "unknown", // cool / blue
    textSegments: [
      { text: "SCIENCE.", start: 0, end: 0.15 },
      { text: "TECHNOLOGY.", start: 0.15, end: 0.3 },
      { text: "MEDICINE.", start: 0.3, end: 0.45 },
      { text: "DESIGN.", start: 0.45, end: 0.6 },
      { text: "BUSINESS.", start: 0.6, end: 0.72 },
      { text: "CREATIVE.", start: 0.72, end: 0.84 },
      { text: "SO MANY POSSIBILITIES. SO MANY QUESTIONS.", start: 0.86, end: 0.98 }
    ],
    height: "400vh"
  },
  {
    id: "scene-08",
    name: "Advice and Pressure",
    media: "/story/scene-08-pressure.mp4",
    fallbackMedia: "/story/v3.mp4",
    type: "video",
    theme: "pressure", // dark / muted
    textSegments: [
      { text: "EVERYONE HAS AN ANSWER.", start: 0, end: 0.3 },
      { text: "YOUR PARENTS. YOUR TEACHERS. YOUR FRIENDS.", start: 0.35, end: 0.75 },
      { text: "BUT...", start: 0.8, end: 0.95 }
    ],
    height: "300vh"
  },
  {
    id: "scene-09",
    name: "Alone with the Question",
    media: "/story/scene-09-alone.mp4",
    fallbackMedia: "/story/v4.mp4",
    type: "video",
    theme: "pressure", // dark / muted / darkened
    textSegments: [
      { text: "WHAT DO YOU WANT?", start: 0, end: 0.45 },
      { text: "THAT'S THE QUESTION THAT MATTERS.", start: 0.5, end: 0.95 }
    ],
    height: "300vh"
  },
  {
    id: "scene-10",
    name: "Self Discovery",
    media: "/story/scene-10-discovery.mp4",
    fallbackMedia: "/story/v1.mp4",
    type: "video",
    theme: "discovery", // slightly brighter
    textSegments: [
      { text: "YOUR FUTURE SHOULDN'T BE A GUESS.", start: 0, end: 0.45 },
      { text: "IT SHOULD BE DISCOVERED.", start: 0.5, end: 0.95 }
    ],
    showQuizCTA: true, // Trigger TAKE THE CAREER QUIZ button
    height: "250vh"
  },
  {
    id: "scene-11",
    name: "Career Categories Intro",
    media: "/story/scene-11-careers.mp4",
    fallbackMedia: "/story/v2.mp4",
    type: "video",
    theme: "discovery",
    textSegments: [
      { text: "EXPLORE WHAT'S POSSIBLE.", start: 0.1, end: 0.9 }
    ],
    height: "150vh"
  },
  {
    id: "scene-12",
    name: "Linear Career Path Myth",
    media: "/story/scene-12-career-path.mp4",
    fallbackMedia: "/story/v3.mp4",
    type: "video",
    theme: "discovery",
    textSegments: [
      { text: "YOUR PATH ISN'T LINEAR.", start: 0, end: 0.45 },
      { text: "WE HELP YOU FIND YOUR NEXT STEP.", start: 0.5, end: 0.95 }
    ],
    height: "200vh"
  },
  {
    id: "scene-13",
    name: "Future Horizon",
    media: "/story/scene-13-future.mp4",
    fallbackMedia: "/story/v4.mp4",
    type: "video",
    theme: "future", // warm gold / sunrise
    textSegments: [
      { text: "YOUR FUTURE STARTS HERE.", start: 0, end: 0.45 },
      { text: "NOT SOMEONE ELSE'S FUTURE.", start: 0.5, end: 0.95 }
    ],
    showFinalCTA: true, // Trigger final DISCOVER YOUR PATH button
    height: "250vh"
  }
];
