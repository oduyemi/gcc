import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

import { dbConnect } from "./utils/db";
import Meeting from "./models/meeting.model";


const meetings = [
    // {
    //   title: "Sunday School Meeting",
    //   description: "Weekly Bible Study",
    //   category: "fellowship",
    //   type: "recurring",
    //   frequency: "weekly",
    //   dayOfWeek: 0, // Sunday
    //   time: "10:00 AM - 10:30 AM",
    //   isOnline: false,
    //   sortOrder: 1,
    //   image:"https://res.cloudinary.com/dymd1jkbl/image/upload/v1782916055/gcc/events/celibration_uwsdie.jpg",
    // },
  
    {
      title: "Sunday Celebration Gathering",
      description: "Weekly Worship Service",
      category: "service",
      type: "recurring",
      frequency: "weekly",
      dayOfWeek: 0, // Sunday
      time: "10:30 AM - 12:30 PM",
      isOnline: false,
      sortOrder: 2,
      image:"https://res.cloudinary.com/dymd1jkbl/image/upload/v1782916055/gcc/events/celibration_uwsdie.jpg"
    },
  
    {
      title: "Home Cell Meeting",
      description: "Connect • Grow • Fellowship",
      category: "fellowship",
      type: "recurring",
      frequency: "weekly",
      dayOfWeek: 2, // Tuesday
      time: "6:00 PM - 7:00 PM",
      isOnline: true,
      location: "Zoom",
      sortOrder: 3,
      image: "https://res.cloudinary.com/dymd1jkbl/image/upload/v1782300975/gcc/events/homecell_zpkarf.jpg"
    },
  
    {
      title: "Hour of Encounter",
      description: "Prayer Meeting Via Zoom",
      category: "prayer",
      type: "recurring",
      frequency: "weekly",
      dayOfWeek: 5, // Friday
      time: "6:00 PM - 7:00 PM",
      isOnline: true,
      location: "Zoom",
      sortOrder: 4,
      image:"https://res.cloudinary.com/dymd1jkbl/image/upload/v1782916055/gcc/events/encounter_kmkojo.jpg"
    },
  
    {
        title: "Ladies Meeting",
        description: "Women's Ministry Gathering",
        category: "fellowship",
        type: "recurring",
        frequency: "monthly",
        dayOfWeek: 6,
        weekOfMonth: "third",
        time: "12:15 PM",
        isOnline: false,
        sortOrder: 5,
    },

    {
        title: "Youth Meeting",
        description: "Physical Youth Meeting",
        category: "fellowship",
        type: "recurring",
        frequency: "monthly",
        dayOfWeek: 6,
        weekOfMonth: "first",
        time: "12:15 PM",
        isOnline: false,
        sortOrder: 6,
        image: "https://res.cloudinary.com/dymd1jkbl/image/upload/v1782300975/gcc/events/youthmeeting_erbcqh.jpg"
    },

    {
        title: "Youth Meeting",
        description: "Physical Youth Meeting",
        category: "fellowship",
        type: "recurring",
        frequency: "monthly",
        dayOfWeek: 6,
        weekOfMonth: "last",
        time: "12:15 PM",
        isOnline: false,
        sortOrder: 7,
        image: "https://res.cloudinary.com/dymd1jkbl/image/upload/v1782300975/gcc/events/youthmeeting_erbcqh.jpg"
    },
  
    {
      title: "Men's Meeting",
      description: "Men's Ministry Gathering",
      category: "fellowship",
      type: "recurring",
      frequency: "monthly",
      dayOfWeek: 6, // Saturday
      weekOfMonth: "last",
      time: "12:15 PM",
      isOnline: false,
      sortOrder: 8,
    },
  
    {
      title: "Jabez Moment",
      description: "Interchurch Prayer Gathering",
      category: "prayer",
      type: "recurring",
      frequency: "monthly",
      dayOfWeek: 5, // Friday
      weekOfMonth: "last",
      time: "6:00 PM - 7:30 PM",
      isOnline: false,
      sortOrder: 9,
      image: "https://res.cloudinary.com/dymd1jkbl/image/upload/v1782300975/gcc/events/jabez_fgcv6x.jpg"
    },

    {
        title: "Prayer & Praise Service",
        description: "Special Church Prayer and Praise Service",
        category: "special",
        type: "special",
        startDate: new Date("2026-05-03"),
        time: "10:30 AM",
        isOnline: false,
        sortOrder: 10,
      },
      
      {
        title: "Father's Day Service",
        description: "Special Father's Day Celebration Service",
        category: "special",
        type: "special",
        startDate: new Date("2026-06-21"),
        time: "10:30 AM",
        isOnline: false,
        sortOrder: 11,
      },
      
      {
        title: "Fasting & Prayer Week",
        description: "Evening Session. Church-wide Fasting and Prayer Week",
        category: "special",
        type: "special",
        startDate: new Date("2026-06-29"),
        endDate: new Date("2026-07-03"),
        time: "05:30 AM",
        isOnline: false,
        sortOrder: 12,
        image:"https://res.cloudinary.com/dymd1jkbl/image/upload/v1782916317/gcc/events/fasting_wxk6o6.jpg"
      },

      {
        title: "Fasting & Prayer Week",
        description: "Morning Session. Church-wide Fasting and Prayer Week",
        category: "special",
        type: "special",
        startDate: new Date("2026-06-29"),
        endDate: new Date("2026-07-03"),
        time: "06:00 PM",
        isOnline: false,
        sortOrder: 13,
        image:"https://res.cloudinary.com/dymd1jkbl/image/upload/v1782916317/gcc/events/fasting_wxk6o6.jpg"
      },
      
      {
        title: "Praise Experience",
        description: "Special Worship and Praise Gathering",
        category: "special",
        type: "special",
        startDate: new Date("2026-07-05"),
        time: "10:30 AM",
        isOnline: false,
        sortOrder: 14,
      }
  ];

async function seedMeetings() {
  await dbConnect();

  await Meeting.deleteMany({});

  await Meeting.insertMany(meetings);

  console.log("Meetings seeded successfully");
  process.exit(0);
}

seedMeetings().catch(console.error);