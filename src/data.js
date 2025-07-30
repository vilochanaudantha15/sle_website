import deduruOya1 from './assets/deduruoya1.jpg';
import deduruOya2 from './assets/deduruoya2.jpg';
import deduruOya3 from './assets/deduruoya3.jpg';
import deduruOya4 from './assets/deduruoya4.jpg';
import deduruOya5 from './assets/deduruoya5.jpg';
import deduruOya6 from './assets/deduruoya6.jpg';
import deduruOya7 from './assets/deduruOya7.jpg';
import deduruOya8 from './assets/deduruOya8.jpg';
import deduruOya9 from './assets/deduruOya9.jpg';
import deduruOya10 from './assets/deduruOya10.jpg';
import deduruOya11 from './assets/deduruOya11.jpg';
import kumbalgamuwa1 from './assets/kumbalgamuwa1.jpg';
import kumbalgamuwa2 from './assets/kumbalgamuwa3.jpg';
import kumbalgamuwa3 from './assets/kumbalgamuwa5.jpg';
import kumbalgamuwa4 from './assets/kum.jpeg';
import sle1 from './assets/sle1.jpg';
import sle2 from './assets/sle3.jpg'
import sle3 from './assets/sle4.jpg'
import sle4 from './assets/sle5.jpg'
import sle5 from './assets/slee2.jpg'
import biomed1 from './assets/biomed1.jpg'
import biomeed2 from './assets/biomeed2.jpg'
export const cards = [
  {
    id: 1,
    title: "Deduru Oya",
    desc: "Mini Hydro Power Plant",
    img: "http://124.43.4.17:3000/assets/deduruoya3-RTq2dKKI.jpg",
  },
  {
    id: 2,
    title: "Kumbalgamuwa",
    desc: "Mini Hydro Plant",
    img: "http://124.43.4.17:3000/assets/kumbalnew-BBkLRrvG.jpg",
  },
  {
    id: 3,
    title: "Biomed",
    desc: "Mini Hydro Plant",
    img: "",
  },
  {
    id: 4,
    title: "MEMP",
    desc: "Production Plant",
    img: "http://124.43.4.17:3000/assets/memmp-background-DvTLsyFW.jpg",
  },
  {
    id: 5,
    title: "SCALP",
    desc: "Aluminium Recycling",
    img: "http://124.43.4.17:3000/uploads/1751723194875.jpg",
  },
  {
    id: 6,
    title: "Solar",
    desc: "Solar Power Development",
    img: "http://124.43.4.17:3000/uploads/1738579302101.png",
  },
  {
    id: 7,
    title: "Upper Samanala",
    desc: "Upper Samanala",
    img: "	http://124.43.4.17:3000/uploads/1751857822078.jpeg",
  },
  {
    id: 8,
    title: "Weganthale",
    desc: "Weganthale",
    img: "https://images.pexels.com/photos/15032623/pexels-photo-15032623.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];


// data.js
export const powerPlants = [
  {
    id: 1,
    title: "Head Office",
    desc: "",
    type: "Hydroelectric",
    capacity: "10 MW",
    location: "Sri Lanka",
    coordinates: { lat: 7.5, lng: 80.5 },
    commissioningDate: "2018",
    operator: "National Power Corp",
    description: "A small-scale hydroelectric plant harnessing the Deduru Oya river flow to generate clean energy for the local region.",
    images: [
      [sle1],
      [sle2],
      [sle3],
      [sle4],
      [sle5],
    ],
    specifications: {
      turbineType: "Kaplan",
      head: "15m",
      flowRate: "8 m³/s"
    },
    status: "Operational"
  },
  {
    id: 2,
    title: "Deduru Oya",
    desc: "Mini Hydro Power Plant",
    type: "Hydroelectric",
    capacity: "10 MW",
    location: "Sri Lanka",
    coordinates: { lat: 7.5, lng: 80.5 },
    commissioningDate: "2018",
    operator: "National Power Corp",
    description: "A small-scale hydroelectric plant harnessing the Deduru Oya river flow to generate clean energy for the local region.",
    images: [
      [deduruOya1],
      [deduruOya2],
      [deduruOya3],
      [deduruOya4],
      [deduruOya5],
      [deduruOya6],
      [deduruOya7],
      [deduruOya8],
      [deduruOya9],
      [deduruOya10],
      [deduruOya11]
    ],
    specifications: {
      turbineType: "Kaplan",
      head: "15m",
      flowRate: "8 m³/s"
    },
    status: "Operational"
  },
  {
    id: 3,
    title: "Kumbalgamuwa",
    desc: "Mini Hydro Plant",
    type: "Hydroelectric",
    capacity: "8 MW",
    location: "Sri Lanka",
    coordinates: { lat: 6.8, lng: 80.2 },
    commissioningDate: "2017",
    operator: "Green Energy Lanka",
    description: "Compact hydroelectric facility providing renewable energy to rural communities.",
    images: [
      [kumbalgamuwa1],
      [kumbalgamuwa2],
      [kumbalgamuwa3],
      [kumbalgamuwa4]
    ],
    specifications: {
      turbineType: "Pelton",
      head: "20m",
      flowRate: "5 m³/s"
    },
    status: "Operational"
  },
  {
    id: 4,
    title: "Biomed",
    desc: "Mini Hydro Plant",
    type: "Hydroelectric",
    capacity: "12 MW",
    location: "Sri Lanka",
    coordinates: { lat: 6.8, lng: 80.2 },
    commissioningDate: "2019",
    operator: "BioEnergy Solutions",
    description: "Eco-friendly hydro plant with minimal environmental impact.",
    images: [
      "http://124.43.4.17:3000/assets/Biomed_6-B1tHqz3W.jpeg",
      [biomed1],
      [biomeed2]
      
    ],
    specifications: {
      turbineType: "Francis",
      head: "18m",
      flowRate: "7 m³/s"
    },
    status: "Operational"
  },
  {
    id: 5,
    title: "MEMP",
    desc: "Production Plant",
    type: "Thermal",
    capacity: "50 MW",
    location: "Sri Lanka",
    coordinates: { lat: 6.9, lng: 79.9 },
    commissioningDate: "2015",
    operator: "National Power Corp",
    description: "Medium-scale thermal power plant providing base load power to the grid.",
    images: [
      "http://124.43.4.17:3000/assets/memmp-background-DvTLsyFW.jpg"
    ],
    specifications: {
      fuelType: "Diesel",
      efficiency: "35%",
      coolingSystem: "Water-cooled"
    },
    status: "Operational"
  },
  {
    id: 6,
    title: "SCALP",
    desc: "Aluminium Recycling",
    type: "Solar",
    capacity: "5 MW",
    location: "Sri Lanka",
    coordinates: { lat: 6.0, lng: 80.2 },
    commissioningDate: "2020",
    operator: "Solar Lanka",
    description: "Small-scale solar photovoltaic plant with battery storage.",
    images: [
      "http://124.43.4.17:3000/uploads/1751723194875.jpg",
      
    ],
    specifications: {
      panelType: "Polycrystalline",
      inverterType: "String",
      storageCapacity: "2 MWh"
    },
    status: "Operational"
  },
  {
    id: 7,
    title: "Solar",
    desc: "Solar Power Development",
    type: "Solar",
    capacity: "15 MW",
    location: "Sri Lanka",
    coordinates: { lat: 7.1, lng: 80.0 },
    commissioningDate: "2021",
    operator: "SunPower Lanka",
    description: "Medium-scale solar farm with tracking system for increased efficiency.",
    images: [
      "http://124.43.4.17:3000/uploads/1738579302101.png"
    ],
    specifications: {
      panelType: "Monocrystalline",
      trackingSystem: "Single-axis",
      efficiency: "19%"
    },
    status: "Operational"
  },
  {
    id: 8,
    title: "Upper Samanala",
    desc: "Upper Samanala",
    type: "Hydroelectric",
    capacity: "120 MW",
    location: "Sri Lanka",
    coordinates: { lat: 6.7, lng: 80.8 },
    commissioningDate: "2012",
    operator: "National Power Corp",
    description: "Large hydroelectric dam with significant power generation capacity.",
    images: [
      "data:image/jpeg;base64,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",
      "https://example.com/hydro7.jpg"
    ],
    specifications: {
      turbineType: "Francis",
      head: "150m",
      reservoirCapacity: "50 million m³"
    },
    status: "Operational"
  },
  {
    id: 9,
    title: "Weganthale",
    desc: "Weganthale",
    type: "Thermal",
    capacity: "30 MW",
    location: "Sri Lanka",
    coordinates: { lat: 7.3, lng: 80.6 },
    commissioningDate: "2016",
    operator: "Lanka Power Gen",
    description: "Combined cycle power plant with improved efficiency.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Q8N1PyxACPt49rbk26pZvYYFLhfGit3C0w&s"
    ],
    specifications: {
      fuelType: "Natural Gas",
      efficiency: "45%",
      combinedCycle: true
    },
    status: "Operational"
  }
];


export const projects = [
  {
    id: 1,
    img: "http://124.43.4.17:3000/assets/kumbalnew-BBkLRrvG.jpg",
    pp: "",
    cat: "Kumbalgamuwa",
    username: "Mr Chandu",
  },
  {
    id: 2,
    img: "http://124.43.4.17:3000/uploads/1751857822078.jpeg",
    pp: "",
    cat: "Kumbalgamuwa",
    username: "",
  },
  {
    id: 3,
    img: "http://124.43.4.17:3000/uploads/1751723194875.jpg",
    pp: "",
    cat: "",
    username: "Emmett Potter",
  },
  {
    id: 4,
    img: "http://124.43.4.17:3000/assets/Biomed_6-B1tHqz3W.jpeg",
    pp: "",
    cat: "Biomed",
    username: "Mr Gayantha",
  },
  {
    id: 5,
    img: "http://124.43.4.17:3000/assets/deduruoya3-RTq2dKKI.jpg",
    pp: "",
    cat: "Deduru Oya",
    username: "Mr Hemal",
  },
  {
    id: 6,
    img: "http://124.43.4.17:3000/uploads/1751723194875.jpg",
    pp: "",
    cat: "",
    username: "",
  },
  {
    id: 7,
    img: "http://124.43.4.17:3000/assets/Biomed_6-B1tHqz3W.jpeg",
    pp: "",
    cat: " ",
    username: " ",
  },
  {
    id: 8,
    img: "http://124.43.4.17:3000/assets/kumbalnew-BBkLRrvG.jpg",
    pp: "",
    cat: " ",
    username: " ",
  },
];

export const gigs = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will create ai art character from your images and prompts",
    price: 59,
    star: 5,
    username: "Anna Bell",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will create ultra high quality character art with ai",
    price: 79,
    star: 5,
    username: "Lannie Coleman",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will creating unique ai generated artworks mid journey ai artist",
    price: 112,
    star: 5,
    username: "Carol Steve",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will create custom ai generated artwork using your photos",
    price: 99,
    star: 4,
    username: "Don Weber",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will recreate your dreams in high quality pictures",
    price: 59,
    star: 5,
    username: "Audrey Richards",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will create ai digital art illustration hyper realistic painting",
    price: 79,
    star: 4,
    username: "Walton Shepard ",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will generate images with your prompts using ai dalle",
    price: 89,
    star: 5,
    username: "Waverly Schaefer",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "I will create custom art using midjourney generator",
    price: 110,
    star: 4,
    username: "Wilton Hunt",
  },
];
