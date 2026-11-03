"use client"

import { AnimatedButton } from "@/components/common/AnimatedButton"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowUpRight,
  CheckCircle,
  CheckCircleIcon,
  Cloud,
  Code2,
  Database,
  HeartHandshake,
  Layers,
  Layout,
  Lightbulb,
  LineChart,
  MessageSquare,
  MousePointerClick,
  Palette,
  Rocket,
  Search,
  Server,
  Smartphone,
  Sparkle,
  TestTube2,
  TrendingUp,
  Trophy,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import HowItsWork from "../components/how-its-work"

import { cn } from "@/lib/utils"
// import { default as stage1, default as stage2, default as stage3, default as stage4, default as stage5, default as stage6, default as stage7 } from "@/public/images/demo/web-content.jpg"

import stage1 from "@/public/images/demo/idea-3.jpg";
import stage2 from "@/public/images/demo/design.avif";
import stage3 from "@/public/images/demo/devlopment.avif";
import stage4 from "@/public/images/demo/web-content.jpg";
import stage5 from "@/public/images/demo/testing.avif";
import stage6 from "@/public/images/demo/deploy.avif";
import stage7 from "@/public/images/demo/seo-graphic.jpg";
import ContactForm from "../components/contact-from"

type Item = {
  title: string;
  description?: string;
  details?: { label: string; description: string }[];
  pros?: string;
  cons?: string;
};

type Stage = {
  title: string;
  items: Item[];
};

const pageContent: Stage[] = [
  {
    title: "Idea & Planning",
    items: [
      { title: "Conceptualization", description: "Define the problem your app solves and identify the target audience." },
      { title: "Market Research", description: "Analyze competitors, user needs, and industry trends to validate your app idea." },
      { title: "Feature List", description: "Outline the core features and functionality required for the first release." },
      { title: "Monetization Strategy", description: "Decide whether the app will be free, paid, subscription-based, or include in-app purchases." },
    ],
  },
  {
    title: "Design",
    items: [
      { title: "Wireframing", description: "Create low-fidelity layouts to define screen structure, navigation, and user flow." },
      { title: "UI/UX Design", description: "Design high-fidelity interfaces using tools like Figma, Sketch, or Adobe XD while following platform design guidelines." },
      { title: "Visual Assets", description: "Prepare icons, splash screens, illustrations, and branding assets for the application." },
    ],
  },
  {
    title: "Choosing the Development Approach",
    items: [
      {
        title: "Native Development",
        details: [
          { label: "Android", description: "Developed in Java or Kotlin using Android Studio." },
          { label: "iOS", description: "Developed in Swift or Objective-C using Xcode." },
          { label: "Pros", description: "Optimal performance and full access to device features." },
          { label: "Cons", description: "Separate codebases for each platform." },
        ],
        // pros: "Optimal performance and full access to device features.",
        // cons: "Separate codebases for each platform.",
      },
      {
        title: "Cross-Platform Development",
        details: [
          { label: "React Native", description: "Uses JavaScript and allows for shared code across both iOS and Android." },
          { label: "Flutter", description: "Uses Dart and also supports cross-platform development." },
          { label: "Xamarin", description: "Uses C# and .NET for cross-platform apps." },
          { label: "Pros", description: "One codebase for both platforms." },
          { label: "Cons", description: "May lack full access to some native features and slightly lower performance compared to native apps." },
        ],
      },
      {
        title: "Progressive Web Apps (PWAs)",
        description: "Web-based apps that behave like mobile apps. They are developed using HTML, CSS, and JavaScript.",
        details: [
          { label: "Pros", description: "Can run on any platform and don't need to be installed from an app store." },
          { label: "Cons", description: "Limited access to device features and offline functionality." },
        ],
      },
    ],
  },
  {
    title: "Development",
    items: [
      { title: "Frontend Development", description: "Build the user interface and implement the client-side functionality users interact with." },
      { title: "Backend Development", description: "Develop server-side services such as authentication, APIs, cloud storage, and business logic using technologies like Node.js, Django, Ruby on Rails, or Spring Boot." },
      { title: "API Integration", description: "Connect the application with backend services or third-party platforms using REST or GraphQL APIs." },
      { title: "Database", description: "Store application data using databases such as Firebase, MongoDB, PostgreSQL, or MySQL." },
    ],
  },
  {
    title: "Testing",
    items: [
      { title: "Unit Testing", description: "Verify that individual components work correctly in isolation." },
      { title: "Integration Testing", description: "Ensure different modules communicate and function together as expected." },
      { title: "UI Testing", description: "Automate interface testing to validate user interactions and workflows." },
      { title: "Manual Testing", description: "Perform exploratory testing to identify usability issues and unexpected bugs." },
      { title: "Beta Testing", description: "Release the app to a limited audience to gather feedback before the public launch." },
    ],
  },
  {
    title: "Deployment",
    items: [
      { title: "App Store Submission (iOS)", description: "Publish the app through App Store Connect while meeting Apple's review guidelines." },
      { title: "Google Play Submission (Android)", description: "Submit the app to Google Play Console and ensure compliance with Google's policies." },
      { title: "App Versioning", description: "Manage version numbers, release notes, and update cycles for future releases." },
    ],
  },
  {
    title: "Post-Launch & Maintenance",
    items: [
      { title: "Bug Fixes", description: "Resolve issues reported by users and improve application stability." },
      { title: "Updates", description: "Release regular updates with new features, optimizations, and OS compatibility improvements." },
      { title: "Analytics", description: "Monitor user behavior, engagement, and retention using analytics platforms like Firebase Analytics or Mixpanel." },
      { title: "User Feedback", description: "Review user feedback and app store ratings to continuously improve the user experience." },
    ],
  },
];

const stageIcons = [Lightbulb, Palette, Layers, Code2, TestTube2, Rocket, LineChart];
const stageImages = [stage1, stage2, stage3, stage4, stage5, stage6, stage7];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceCategory {
  title: string;
  icon: string;
  description: string;
  items: ServiceItem[];
}

const appDevelopmentServices: ServiceCategory[] = [
  {
    title: "App Strategy and Consulting",
    icon: '/images/icons/consult.png',
    description:
      "Develop a clear strategy and roadmap to transform your app idea into a successful digital product.",
    items: [
      {
        title: "Market Research",
        description: "Understanding the competitive landscape and target audience.",
      },
      {
        title: "Business Analysis",
        description:
          "Identifying the best features, functionalities, and technologies to support business goals.",
      },
      {
        title: "App Roadmap",
        description:
          "Developing a detailed plan that outlines the app's purpose, features, and project timeline.",
      },
    ],
  },
  {
    title: "App UI/UX Design",
    icon: '/images/icons/customize.png',
    description:
      "Create intuitive, visually appealing, and user-focused mobile app experiences.",
    items: [
      {
        title: "Wireframing & Prototyping",
        description:
          "Designing the layout and flow of the app, creating wireframes and prototypes to visualize the user interface (UI) and experience (UX).",
      },
      {
        title: "User-Centered Design",
        description:
          "Ensuring the app is intuitive, easy to navigate, and meets the needs of the target audience.",
      },
      {
        title: "Visual Design",
        description:
          "Crafting the overall look and feel, including graphics, typography, and branding elements.",
      },
    ],
  },
  {
    title: "Native Mobile App Development",
    icon: '/images/icons/web-mobile.png',
    description:
      "Build high-performance mobile applications optimized for iOS and Android platforms.",
    items: [
      {
        title: "iOS Development",
        description:
          "Building apps specifically for iPhones and iPads using Swift or Objective-C.",
      },
      {
        title: "Android Development",
        description: "Developing apps for Android devices using Kotlin or Java.",
      },
      {
        title: "Platform-Specific Development",
        description:
          "Optimizing apps for the native experience, taking full advantage of platform-specific features like notifications, GPS, camera, and others.",
      },
    ],
  },
  {
    title: "Cross-Platform Mobile App Development",
    icon: '/images/icons/cross-platform.png',
    description:
      "Develop apps for multiple platforms using a single codebase to reduce development time and cost.",
    items: [
      {
        title: "React Native",
        description:
          "Using JavaScript to create apps that work on both iOS and Android with a single codebase.",
      },
      {
        title: "Flutter",
        description:
          "A UI toolkit from Google that enables developers to build natively compiled apps from a single codebase, using the Dart programming language.",
      },
      {
        title: "Xamarin",
        description:
          "A Microsoft framework that allows developers to use C# to write apps for both iOS and Android.",
      },
      {
        title: "Ionic",
        description:
          "A framework that builds mobile apps with HTML, CSS, and JavaScript, optimized for performance and user experience.",
      },
      {
        title: "Benefits",
        description:
          "Cross-platform development helps save time and costs by maintaining one codebase while delivering apps across multiple platforms.",
      },
    ],
  },
  {
    title: "Backend Development and API Integration",
    icon: '/images/icons/integration.png',
    description:
      "Build secure, scalable backend systems and seamlessly integrate third-party services.",
    items: [
      {
        title: "Backend-as-a-Service (BaaS)",
        description:
          "Setting up scalable backend solutions using cloud services like Firebase, AWS, or Microsoft Azure.",
      },
      {
        title: "Custom Backends",
        description:
          "Developing custom server-side architectures using frameworks like Node.js, Django, Ruby on Rails, and Spring Boot.",
      },
      {
        title: "APIs & Integrations",
        description:
          "Integrating third-party services (e.g., payment gateways, social media, cloud storage) using RESTful or GraphQL APIs.",
      },
    ],
  },
  {
    title: "App Testing and Quality Assurance",
    icon: '/images/icons/ux.png',
    description:
      "Ensure your application is reliable, secure, and performs flawlessly before launch.",
    items: [
      {
        title: "Automated Testing",
        description:
          "Using tools like JUnit, Appium, and Selenium to test the functionality of the app.",
      },
      {
        title: "Manual Testing",
        description:
          "Real users test the app to ensure it meets usability and functional requirements.",
      },
      {
        title: "Performance Testing",
        description:
          "Ensuring that the app performs well under different conditions, such as low network speed or high load.",
      },
      {
        title: "Security Testing",
        description:
          "Identifying and fixing vulnerabilities to ensure the app is secure for users and their data.",
      },
    ],
  },
  {
    title: "App Deployment",
    icon: '/images/icons/product.png',
    description:
      "Launch your app efficiently with optimized store listings and production-ready infrastructure.",
    items: [
      {
        title: "App Store Optimization (ASO)",
        description:
          "Optimizing your app's title, description, and keywords to improve visibility in app stores like the Apple App Store and Google Play Store.",
      },
      {
        title: "App Store Submission",
        description:
          "Helping with the process of submitting the app for review and approval from the app stores, including meeting guidelines and requirements.",
      },
      {
        title: "Deployment on Servers",
        description:
          "Deploying the backend and databases, setting up production environments.",
      },
    ],
  },
  {
    title: "App Maintenance and Updates",
    icon: '/images/icons/support.png',
    description:
      "Keep your app secure, optimized, and up to date with continuous improvements.",
    items: [
      {
        title: "Bug Fixes",
        description: "Regularly updating the app to fix bugs or issues that may arise.",
      },
      {
        title: "App Optimization",
        description:
          "Monitoring app performance, ensuring it runs smoothly across all devices and operating systems.",
      },
      {
        title: "Feature Updates",
        description:
          "Adding new features or enhancing existing ones based on user feedback and market demand.",
      },
      {
        title: "OS Compatibility",
        description:
          "Updating the app when new versions of iOS or Android are released to ensure compatibility.",
      },
    ],
  },
  {
    title: "App Marketing and Monetization Strategy",
    icon: '/images/icons/cost-effect.png',
    description:
      "Maximize user acquisition, engagement, and revenue with effective marketing and monetization strategies.",
    items: [
      {
        title: "User Acquisition Strategy",
        description:
          "Developing strategies to attract users, including in-app advertisements, push notifications, referral programs, etc.",
      },
      {
        title: "App Monetization",
        description:
          "Offering services like in-app purchases, subscriptions, ads, and premium features.",
      },
      {
        title: "Analytics Integration",
        description:
          "Integrating tools like Google Analytics, Mixpanel, or Firebase Analytics to track user engagement and behaviors.",
      },
    ],
  },
];

const capabilitiesData = [
  {
    id: "ios-development",
    title: "iOS App Development",
    content:
      "Our custom mobile app development expertise includes building world-class iOS apps. We approach each project with unique, bespoke solutions to ensure your digital product addresses your business needs. Our highly experienced iOS developers are proficient in a wide range of programming languages and platforms, from Swift to Objective-C. We also create both native and cross-platform iOS applications, so no project is beyond our broad technical capabilities.",
    // Unsplash image of a developer working on Apple/Mac ecosystem
    image: "/images/demo/ios.jpg",
  },
  {
    id: "native-development",
    title: "Native app development",
    content:
      "Native development is considered the 'first class' development option as native apps interact directly with the device APIs, are actively supported by the manufacturer and do not have any limitations when it comes to access to platform features. Our native mobile app developers find this option to have greater overall performance, more consistent feel, better app store compliance and better accessibility support. Digital Fueled IT Pvt Ltd. app developers are proficient in creating native apps with a range of languages from Objective C and Swift to Kotlin and Java.",
    // Unsplash image showing mobile app interface/code
    image: "/images/demo/native-app.png",
  },
  {
    id: "cross-platform",
    title: "Cross platform app development",
    content:
      "Due to native development limiting a single codebase to a single platform, frameworks were created to allow developers to support multiple platforms with a single codebase. This means that one codebase could produce apps which run on iOS and Android. Our cross platform app developers find this option to be simpler to maintain, allows no feature drift between platforms and allows a faster time to market. Digital Fueled IT Pvt Ltd. mobile experts use cross platform frameworks such as React and Flutter.",
    // Unsplash image showing multiple devices or collaborative coding
    image: "/images/demo/cross-platform.png",
  },
]

const whyBuildData = [
  {
    title: "Increased Customer Loyalty",
    description:
      "Apps host loyalty programmes with exclusive benefits. Incentives like exclusive member pricing encourage repeat purchases and increase retention.",
    icon: HeartHandshake,
  },
  {
    title: "Increased Revenue",
    description:
      "Mobile customers are up to 3x more valuable. Streamline the purchasing process, making it quicker and easier to buy products or services.",
    icon: TrendingUp,
  },
  {
    title: "Improved Customer Insights",
    description:
      "Collect invaluable data on user behaviour, preferences, and demographics to tailor your products and meet customer needs more effectively.",
    icon: Search,
  },
  {
    title: "More Efficient Communication",
    description:
      "Facilitate two-way communication allowing for rapid feedback, support, and assistance, fostering a stronger relationship with your base.",
    icon: MessageSquare,
  },
  {
    title: "Enhanced User Experience",
    description:
      "Custom-built apps provide a highly intuitive experience compared to standard websites, ensuring users have a positive interaction with your brand.",
    icon: Layout,
  },
  {
    title: "Competitive Advantage",
    description:
      "Having a well-designed, functional mobile app gives you a significant edge over competitors. Optimization is crucial for standing out.",
    icon: Trophy,
  },
]

function MobileAppDevelopment() {
  const [activeItem, setActiveItem] = useState(capabilitiesData[0].id)

  const currentData =
    capabilitiesData.find((item) => item.id === activeItem) ||
    capabilitiesData[0]


  const [activeTab, setActiveTab] = useState(0)

  const stack = [
    {
      category: "Languages",
      icon: <Layout className="h-4 w-4" />,
      desc: "Creating responsive, highly interactive user interfaces.",
      techs: [
        {
          name: "Swift",
          logo: "https://cdn.simpleicons.org/swift/F05138",
        },
        {
          name: "Kotlin",
          logo: "https://cdn.simpleicons.org/kotlin/7F52FF",
        },
        {
          name: "Java",
          logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
        },
        {
          name: "Dart",
          logo: "https://cdn.simpleicons.org/dart/0175C2",
        },
        {
          name: "JavaScript ",
          logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
        },
      ],
    },
    {
      category: "Frameworks & Platforms",
      icon: <Server className="h-4 w-4" />,
      desc: "Robust, scalable, and secure server-side logic.",
      techs: [
        {
          name: "Flutter",
          logo: "https://cdn.simpleicons.org/flutter/02569B",
        },
        {
          name: "React Native",
          logo: "https://cdn.simpleicons.org/react/65ADF1",
        },
        { name: "Xamarin", logo: "/images/icons/xamarin.webp" },
        {
          name: "Ionic",
          logo: "https://cdn.simpleicons.org/ionic/3880FF",
        },
      ],
    },
    {
      category: "IDEs",
      icon: <Smartphone className="h-4 w-4" />,
      desc: "Native and cross-platform mobile experiences.",
      techs: [
        {
          name: "Android Studio",
          logo: "https://cdn.simpleicons.org/android/3DDC84",
        },
        {
          name: "Xcode",
          logo: "https://cdn.simpleicons.org/xcode/147EFB",
        },
        {
          name: "Visual Studio Code",
          logo: "/images/icons/vs-code.png",
        },
        {
          name: "IntelliJ IDEA",
          logo: "https://cdn.simpleicons.org/intellijidea/000000",
        },
      ],
    },
    // {
    //   category: "Databases",
    //   icon: <Palette className="h-4 w-4" />,
    //   desc: "Global infrastructure and deployment pipelines.",
    //   techs: [
    //     { name: "Firebase", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
    //     {
    //       name: "Sketch",
    //       logo: "https://cdn.simpleicons.org/sketch/F7B500",
    //     },
    //     {
    //       name: "Adobe XD",
    //       logo: "/images/icons/xd.png",
    //     },
    //     {
    //       name: "Adobe Photoshop",
    //       logo: "/images/icons/psd.png",
    //     },
    //   ],
    // },
    {
      category: "Databases",
      icon: <Database className="h-4 w-4" />,
      desc: "High-performance data storage and retrieval.",
      techs: [
        {
          name: "PostgreSQL",
          logo: "https://cdn.simpleicons.org/postgresql/4169E1",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.simpleicons.org/mongodb/47A248",
        },
        {
          name: "MySQL",
          logo: "https://cdn.simpleicons.org/mysql/4479A1",
        },
        {
          name: "GraphQL",
          logo: "https://cdn.simpleicons.org/graphql/E10098",
        },
      ],
    },
    {
      category: "Cloud",
      icon: <Cloud className="h-4 w-4" />,
      desc: "Global infrastructure and deployment pipelines.",
      techs: [
        { name: "AWS", logo: "/images/icons/aws.svg" },
        {
          name: "Google Cloud",
          logo: "https://cdn.simpleicons.org/googlecloud/4285F4",
        },
        {
          name: "Azure",
          logo: "/images/icons/azure.png",
        },
        {
          name: "Vercel",
          logo: "https://cdn.simpleicons.org/vercel/000000",
        },
      ],
    },
    {
      category: "Testing Tools",
      icon: <MousePointerClick className="h-4 w-4" />,
      desc: "Global infrastructure and deployment pipelines.",
      techs: [
        { name: "Jest", logo: "https://cdn.simpleicons.org/jest/C21325" },
        {
          name: "Appium",
          logo: "https://cdn.simpleicons.org/appium/EE376D",
        },
        {
          name: "Selenium",
          logo: "https://cdn.simpleicons.org/appium/43B02A",
        },
      ],
    },
  ]

  return (
    <>
      <div className="bg-[url('/images/bg3.avif')] bg-cover bg-no-repeat pt-14 pb-4 lg:py-20">
        <div className="container">
          {/* Animated Container */}
          <motion.div
            className="grid lg:grid-cols-7 lg:gap-x-10 gap-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <div className="lg:col-span-4 lg:pr-10">
              <div className="flex h-full flex-col items-start justify-center gap-4 md:gap-6">
                {/* Tag */}
                <motion.span
                  className="mb-2 md:mb-0 flex items-center gap-2 rounded-full px-2 py-1.5 text-[13px] text-white ring-1 ring-[#fff3]"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  <Sparkle
                    size={18}
                    className="fill-orange-600 stroke-orange-600"
                  />
                  Custom Mobile Applications
                </motion.span>

                {/* Headline */}
                <motion.h1
                  className="font-geist text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-none font-semibold text-white capitalize"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  Mobile App{" "}
                  <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                    Development.
                  </span>
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                  className="md:text-lg font-medium text-white"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  Get Your Brand in People’s Pocket with Our Expert Mobile App Development Services. We understand the importance of an engaging and appealing mobile application and aim to provide the best user experience.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  <Link
                    href="/enquiry"
                    className="group relative mt-6 flex w-max items-center justify-center gap-2 overflow-hidden rounded-full bg-transparent px-10 py-4 text-sm leading-tight font-semibold text-white ring ring-[#ffffff85] transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    Book a Quote
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="relative lg:col-span-3"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              <span className="hidden animate-bounce2 hover-box absolute top-1 left-[calc(100%-24px-140px)] z-1! lg:flex h-20 w-40 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md">
                <svg
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 850.394 850.394"
                  className="flex size-20 items-center justify-center object-contain object-center"
                >
                  <g transform="matrix(1,0,0,1,75,75)">
                    <path
                      fill="#ffffff"
                      d="M38.168 605.224c38.746 36.328 88.25 37.375 131.218 41.098 46.746 4.023 96.383 5.973 151.727 5.973 86.379-.336 193.648-3.93 278.722-14.055 133.813-7.652 119.871-161.563 122.48-262.918-.098-64.793-1.145-133.578-12.523-199.613-10.605-73.551-57.887-109.535-120.301-110.512-138.175-11.738-298.402-12.359-434.304 1.707C64.667 72.396 3.086 107.095-6.992 209.649c-11.996 105.582-6.609 220.488 6.777 308.727 4.613 28.695 11.758 61.434 38.383 86.848z"
                      opacity="1"
                      data-original="#ffffff"
                      className=""
                    ></path>
                    <path
                      fill="#68182b"
                      d="M64.589 577.536c27.867 26.594 71.848 27.547 108.07 30.66 85.004 7.309 170.832 6.754 256.032 3.723 39.184-1.391 78.359-3.48 117.429-6.73 15.574-1.297 31.145-2.781 46.668-4.645 17.105-2.051 34.871-3.699 49.254-14.172 14.863-10.82 22.539-27.086 28.668-43.922 7.391-21.008 8.621-44.766 10.25-66.777 2.48-33.352 3.137-66.852 3.094-100.293-.102-64.094-1.063-129.852-11.973-193.18-4.758-27.652-15.234-57.867-42.727-70.242-15.23-6.855-32.426-7.625-48.852-9.141-15.797-1.465-31.617-2.578-47.449-3.523-83.729-4.961-167.878-5.715-251.695-2.762-40.684 1.438-81.395 3.793-121.848 8.395-36.348 4.133-79.102 7.195-103.672 38.066-16.406 20.617-21.488 46.254-24.902 71.73-4.324 32.32-5.59 65.027-5.887 97.613-.605 66.516 1.945 134.188 12.52 199.969 3.79 23.591 8.977 48.012 27.02 65.231z"
                      opacity="1"
                      data-original="#68182b"
                      className=""
                    ></path>
                    <path
                      fill="#ffc522"
                      d="M307.323 495.396c5.137-41.395 15.313-81.941 26.902-121.953 7.02-24.23 13.164-55.063 27.196-76.57 6.91-8.156 12.367-13.797 24.027-14.063 12.32-.281 16.172 5.188 14.109 16.961-13.035 68.215-33.625 136.246-55.696 202.027-3.891 11.227-10.719 17.863-22.77 17.555-13.943-.364-14.939-12.961-13.768-23.957zM457.894 314.849c1.285-6.535.27-9.316 6.434-6.316 17.625 8.859 138.698 74.797 115.667 98.68-34.102 35.359-74.159 63.379-117.05 86.957-8.523 4.57-6.578-21.691-6.344-27.129.582-13.277 5.098-18.848 16.012-25.059 18.359-9.992 47.601-21.195 44.851-46.707-2.309-21.41-35.972-31.219-51.437-40.574-9.016-5.938-9.766-14.738-9.906-24.824-.07-5.075.797-10.079 1.773-15.028z"
                      opacity="1"
                      data-original="#ffc522"
                    ></path>
                    <path
                      fill="#e5e5e5"
                      d="M662.346 329.579c-.57-22.918-1.523-45.844-3.039-68.738-.793-11.871-2.137-12.582-15.684-13.309-192.737-10.453-386.445-10.496-579.011 3.031-15.516 1.094-16.348.613-17.078 14.469-1.675 31.352-1.773 62.801-1.035 94.184.793 33.578 2.57 67.156 5.711 100.598 2.219 23.68 4.66 47.719 10.406 70.855 2.398 9.637 5.828 19.031 12.141 26.867 11.137 13.832 28.523 19.809 45.359 23.191 35.617 7.152 73.098 8.379 109.301 9.988 82.688 3.664 165.696 2.305 248.34-2.051 33.879-1.789 67.772-4.094 101.522-7.688 13.984-1.488 30.016-1.859 43.02-7.488 15.418-6.672 22.621-21.688 28.066-36.648 2.781-7.891 4.313-16.199 5.605-24.445 4.094-26.109 5.293-54.02 6.168-80.926 1.103-33.948 1.056-67.933.208-101.89zm-449.659 71.899c4.547 11.391 29.242 19.262 39.18 25.035 20.336 12.742 23.941 35.973 21.352 58.691-1.113 9.777-.836 21.813-10.277 27.621-9.004 5.543-16.664 5.313-25.82.453-29.055-15.863-57.328-33.398-82.852-54.598-14.121-11.715-53.703-36.426-53.418-57.461.336-24.777 29.445-43.004 47.164-56.773 27.387-21.285 56.281-39.23 87.309-54.754 9.238-4.469 16.137-6.117 25.758-1.773 9.211 4.152 10.719 21.914 11.945 30.199 3.086 20.988-.25 40.645-17.535 53.34a11.318 11.318 0 0 1-2.141 1.668c-6.681 3.98-44.392 19.035-40.665 28.352zm207.211-96.102c-13.031 68.211-33.625 136.246-55.691 202.023-7.332 21.152-23.497 35.227-46.7 32.645-23.59-2.625-33.637-22.578-31.277-44.648 5.742-46.285 16.578-91.863 30.305-136.414 5.738-18.645 10.672-40.738 19.363-59.48 7.484-16.145 27.965-46.016 63.911-35.793 19.581 5.562 23.355 23.022 20.089 41.667zm135.437 152.855c-25.773 20.48-52.894 38.301-81.737 54.16-9.805 5.246-17.602 6.523-27.496.434-9.609-5.914-9.797-19.223-10.422-29.254-1.648-26.34 2.809-46.434 26.281-59.809 5.789-3.145 42.309-19.406 32.734-27.789-11.422-10-26.426-15.262-39.32-23.051-20.27-13.371-23.16-36.594-18.691-59.27 2.023-10.25 3.797-22.352 14.25-27.07 8.535-3.863 16.301-.035 24.047 3.73 30.453 15.32 60.085 32.676 86.452 54.449 17.422 14.383 46.418 31.449 46.766 56.457.296 20.568-38.806 45.842-52.864 57.013z"
                      opacity="1"
                      data-original="#e5e5e5"
                      className=""
                    ></path>
                    <path
                      fill="#ffc522"
                      d="M240.663 310.669c7.148-3.805 9.445-1.004 10.578 4.438.719 3.395 1.168 6.84 1.496 10.293 1.086 11.293.078 22.906-10.039 29.508-17.836 10.656-48.84 19.234-51.43 43.281-2.648 24.625 33.547 37.004 49.945 46.543 8.129 5.082 9.914 11.234 11.09 20.641.211 1.688.348 12.641-.602 20.797-1.105 9.406-4.969 8.363-10.414 5.293-41.246-23.184-78.449-50.652-112.148-84.156-21.874-21.771 82.438-81.228 111.524-96.638zM411.64 160.95c3.52-4.113 10.086-5.434 15.074-3.5 5.703 2.199 9.09 7.414 8.945 13.523-.145 3.297-1.168 6.344-3.234 8.914-2.223 2.75-5.578 4.125-9.02 4.469-5.867.586-11.582-2.648-13.969-8.063-2.217-5.042-1.401-11.132 2.204-15.343z"
                      opacity="1"
                      data-original="#ffc522"
                    ></path>
                    <path
                      fill="#ff7a0d"
                      d="M489.476 160.95c3.52-4.113 10.086-5.434 15.074-3.5 5.703 2.199 9.089 7.414 8.944 13.523-.144 3.297-1.167 6.344-3.233 8.914-2.223 2.75-5.578 4.125-9.02 4.469-5.867.586-11.582-2.648-13.969-8.063-2.218-5.042-1.401-11.132 2.204-15.343z"
                      opacity="1"
                      data-original="#ff7a0d"
                    ></path>
                    <path
                      fill="#ff2e60"
                      d="M655.608 215.333c-1.563-15.883-3.664-31.84-8.156-47.074-4.164-14.141-10.848-28.371-24.211-35.832-12.828-7.16-29.207-7.277-43.543-8.59-33.008-3.031-66.137-4.727-99.253-5.926-82.238-2.98-164.79-2.883-246.954 1.945-36.211 2.121-72.691 4.793-108.477 10.867-17.977 3.055-36.586 8.332-49.602 21.828-9.078 9.398-13.496 19.301-16.777 30.289-2.605 8.699-4.516 17.613-5.973 26.625-3.633 22.629-1.621 20.934 20.098 19.445 189.074-12.906 379.227-12.781 568.429-2.605 10.654.575 15.54.403 14.419-10.972zm-213.651-26.258c-6.805 7.945-19.488 10.496-29.125 6.77-11.008-4.25-17.551-14.324-17.277-26.137.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.359 5.117 26.973 15.57 4.292 9.739 2.714 21.504-4.251 29.637zm77.835 0c-6.804 7.945-19.487 10.496-29.124 6.77-11.008-4.25-17.551-14.324-17.277-26.137.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.358 5.117 26.972 15.57 4.292 9.739 2.714 21.504-4.251 29.637zm77.703-.133c-6.805 7.945-19.484 10.496-29.121 6.773-11.012-4.254-17.555-14.324-17.277-26.137.289-6.355 2.254-12.242 6.262-17.215 4.289-5.297 10.762-7.969 17.414-8.625 11.332-1.137 22.359 5.113 26.973 15.566 4.292 9.74 2.718 21.506-4.251 29.638z"
                      opacity="1"
                      data-original="#ff2e60"
                    ></path>
                    <path
                      fill="#00ebed"
                      d="M567.311 160.95c3.52-4.113 10.086-5.434 15.074-3.5 5.703 2.199 9.09 7.414 8.945 13.523-.145 3.297-1.168 6.344-3.234 8.914-2.223 2.75-5.578 4.125-9.02 4.469-5.867.586-11.582-2.648-13.969-8.063-2.218-5.042-1.401-11.132 2.204-15.343z"
                      opacity="1"
                      data-original="#00ebed"
                    ></path>
                    <path
                      fill="#ef6200"
                      d="M512.179 169.235c-.543 7.73-6.863 11.871-14.313 10.586-5.859-1.008-9.023-6.301-9.672-11.746-.281-2.379.152-4.543.938-6.586-3.25 4.188-3.992 9.961-1.859 14.805 2.387 5.414 8.102 8.648 13.969 8.063 3.441-.344 6.797-1.719 9.02-4.469 2.066-2.57 3.09-5.617 3.233-8.914.074-3.059-.737-5.891-2.284-8.238.718 1.878 1.152 3.89.968 6.499z"
                      opacity="1"
                      data-original="#ef6200"
                    ></path>
                    <path
                      fill="#19bfbb"
                      d="M591.331 170.974c.078-3.25-.902-6.203-2.648-8.629.719 1.563 1.172 3.305 1.121 5.512-.148 6.047-5.426 9.828-11.004 10.27-4.645.371-8.957-2.027-11.16-6.063-1.891-3.488-1.602-7.488-.289-11.141-.012.008-.027.012-.039.027-3.605 4.211-4.422 10.301-2.203 15.344 2.387 5.414 8.102 8.648 13.969 8.063 3.441-.344 6.797-1.719 9.02-4.469 2.065-2.571 3.088-5.617 3.233-8.914z"
                      opacity="1"
                      data-original="#19bfbb"
                    ></path>
                    <path
                      fill="#6cfffb"
                      d="M571.702 163.044c-1.457 5.32 5.992 7.211 10.934 5.398 2.676-.98 3.125-3.375 2.176-5.359-2.774-5.801-12.11-3.672-13.11-.039z"
                      opacity="1"
                      data-original="#6cfffb"
                    ></path>
                    <g fill="#ffa222">
                      <path
                        d="M409.437 176.294c2.387 5.414 8.102 8.648 13.969 8.063 3.441-.344 6.797-1.719 9.02-4.469 2.066-2.57 3.09-5.617 3.234-8.914a14.888 14.888 0 0 0-.559-4.434c-.113 1.508-.391 3.004-1.109 4.488-2.496 5.141-8.699 8.199-14.258 7.391-5.121-.746-7.883-5.586-9.273-10.027a16.99 16.99 0 0 1-.738-4.398c-1.848 3.823-2.02 8.366-.286 12.3zM129.14 407.306c33.699 33.504 70.902 60.973 112.148 84.156 5.445 3.07 9.309 4.113 10.414-5.293.707-6.086.813-13.73.73-17.918-3.043 7.293-8.191 12.492-18.047 9.781-15.637-4.297-29.367-16.945-41.926-26.57-21.156-16.215-55.98-37.09-59.984-65.25-6.511 8.449-8.589 15.863-3.335 21.094zM343.519 483.583c-5.762 15.484-12.324 26.578-22.129 35.754 11.859.188 18.617-6.414 22.473-17.539 22.071-65.781 42.661-133.813 55.696-202.027 1.641-9.379-.555-14.699-7.715-16.352 5.281 16.281-6.055 47.723-8.707 58.395-5.871 23.727-10.5 47.668-16.926 71.27a820.957 820.957 0 0 1-22.692 70.499zM227.491 354.634c-11.246 6.961-23.699 12.059-32.016 22.703-5.59 7.16-6.832 17.438-4.102 26.203-.219-1.727-.305-3.492-.105-5.352 2.59-24.047 33.594-32.625 51.43-43.281 10.117-6.602 11.125-18.215 10.039-29.508a115.38 115.38 0 0 0-.488-4.156c-.27 1.785-.586 3.543-.863 5.352-2.117 13.57-13.203 21.422-23.895 28.039zM456.121 329.876c.141 10.086.891 18.887 9.906 24.824 15.465 9.355 49.128 19.164 51.437 40.574.039.387.008.738.039 1.121 1.109-4.793.613-9.93-2.328-15.176-6.542-11.68-15.878-18.027-27.511-24.27-8.352-4.484-16.07-8.648-23.164-15.102-4.59-4.188-6.598-10.555-8.047-17.055-.16 1.689-.359 3.377-.332 5.084zM462.945 494.169c42.891-23.578 82.948-51.598 117.05-86.957 5.082-5.273 3.129-12.59-3.164-20.895-4.152 24.191-28.168 39.238-47.402 53.957-11.828 9.051-24.112 17.504-36.413 25.887-10.5 7.168-26.359 17.477-36.637 5.523-.375 9.231-.43 26.239 6.566 22.485z"
                        fill="#ffa222"
                        opacity="1"
                        data-original="#ffa222"
                      ></path>
                    </g>
                    <path
                      fill="#fbe134"
                      d="M420.414 161.134c-3.309 1.402-4.391 4.965-2.168 7.559 2.008 2.355 5.699 3.152 8.707 1.961 1.273-.508 2.313-1.762 2.836-3.16 1.363-3.61-2.949-9.075-9.375-6.36zM201.288 338.142c10.23-5.484 20.281-11.277 30.508-16.762 6.355-3.414 12.695-5.668 19.094-7.633-1.242-4.496-3.711-6.547-10.227-3.078-17.383 9.207-61.621 34.152-89.75 57.383 16.797-9.938 33.137-20.672 50.375-29.91zM307.323 495.396c-.75 7.063-.559 14.742 3.328 19.461 2.91-26.539 6.25-52.59 12.402-79.031 5.984-25.707 12.621-51.316 20.586-76.488 6.762-21.387 16.727-55.941 33.512-75.137-6.426 2.176-10.707 6.746-15.73 12.672-14.032 21.508-20.176 52.34-27.196 76.57-11.589 40.011-21.765 80.558-26.902 121.953zM457.844 315.157c10.301.766 20.84 8.258 29.258 13.027a1735.765 1735.765 0 0 1 37.862 22.094c14.887 8.945 29.461 17.871 43.875 27.137-28.613-28.203-92.116-62.652-104.511-68.883-6.164-3-5.148-.219-6.434 6.316-.019.106-.031.204-.05.309z"
                      opacity="1"
                      data-original="#fbe134"
                    ></path>
                    <path
                      fill="#ea0f4d"
                      d="M649.983 178.185c.391 19.488-4.559 36.422-29.563 36.086-44.094-.594-88.219-3.613-132.327-4.523-68.246-1.402-136.524-1.164-204.758.793-42 1.211-83.965 3.207-125.902 5.852-11.793.746-23.617 1.324-35.391 2.34-14.898 1.285-29.781 3.43-44.535-.191-13.902-3.414-18.258-17.988-19.727-32.383a213.779 213.779 0 0 0-5.117 23.309c-3.633 22.629-1.621 20.934 20.098 19.445 189.074-12.906 379.227-12.781 568.429-2.605 10.652.574 15.539.402 14.418-10.973-1.226-12.471-2.836-24.975-5.625-37.15z"
                      opacity="1"
                      data-original="#ea0f4d"
                    ></path>
                    <path
                      fill="#ea0f4d"
                      d="M445.957 152.181c-7.223-11.297-23.914-14.473-35.766-9.438-13.594 5.781-19.422 19.035-15.406 33.195.938 3.297 2.398 5.84 4.191 7.883-2.293-4.16-3.539-8.945-3.422-14.113.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.359 5.117 26.973 15.57 3.172 7.191 3.117 15.477.078 22.605 6.535-8.483 5.664-20.487-.328-29.862zM472.488 175.938c1.004 3.52 2.59 6.215 4.563 8.32-2.445-4.254-3.785-9.203-3.66-14.551.293-6.352 2.258-12.238 6.266-17.211 4.289-5.297 10.762-7.969 17.414-8.629 11.332-1.133 22.358 5.117 26.972 15.57 3.133 7.105 3.105 15.281.172 22.355 6.309-8.473 5.379-20.332-.555-29.613-7.223-11.297-23.913-14.473-35.765-9.438-13.594 5.783-19.419 19.037-15.407 33.197zM565.69 142.743c-13.594 5.781-19.422 19.035-15.406 33.195.988 3.488 2.566 6.156 4.508 8.254-2.477-4.266-3.82-9.242-3.695-14.613.289-6.355 2.254-12.242 6.262-17.215 4.289-5.297 10.762-7.969 17.414-8.625 11.332-1.137 22.359 5.113 26.973 15.566 3.191 7.238 3.125 15.59.027 22.75 6.547-8.484 5.684-20.492-.316-29.875-7.224-11.296-23.915-14.472-35.767-9.437z"
                      opacity="1"
                      data-original="#ea0f4d"
                    ></path>
                    <path
                      fill="#ff6699"
                      d="M347.648 139.485c-80.434-4.898-175.977 4.188-222.156 12.98-16.777 3.195-26.367 11.508-31.301 19.84-10.586 17.891-4.305 25.848 11.301 28.523 10.559 1.801 23.75-.238 32.563-.539 25.637-.879 117.012-6.961 220.403-9.434 11.852-.289 15.266-21.668 11.457-36.203-3.302-12.655-8.525-14.331-22.267-15.167z"
                      opacity="1"
                      data-original="#ff6699"
                    ></path>
                    <path
                      fill="#c6c6c6"
                      d="M268.136 284.571c-14.375-15.016-34.324-.305-49.098 7.035-29.676 14.738-57.414 33.121-83.258 53.801-15.656 12.523-35.602 27.855-38.41 49.082-.82 6.191 2.305 11.938 6.074 16.75-1.633-3.387-2.641-6.75-2.594-10.02.336-24.777 29.445-43.004 47.164-56.773 27.387-21.285 56.281-39.23 87.309-54.754 9.238-4.469 16.137-6.117 25.758-1.773 9.211 4.152 10.719 21.914 11.945 30.199 2.168 14.758 1.035 28.805-5.762 40.289 4.457-5.184 8.012-11.176 10.199-18.051 4.673-14.679 1.966-44-9.327-55.785zM608.514 385.419c-11.469-20.52-32.168-35.805-50.453-49.965-18.863-14.609-39.281-27-60.163-38.465-15.066-8.277-33.813-21.961-51.512-13.742-15.668 7.277-15.176 32.871-14.512 46.77.531 11.078 3.633 19.945 9.066 27.367-6.914-12.656-7.297-28.313-4.258-43.73 2.023-10.25 3.797-22.352 14.25-27.07 8.535-3.863 16.301-.035 24.047 3.73 30.453 15.32 60.085 32.676 86.452 54.449 17.422 14.383 46.418 31.449 46.766 56.457.047 3.211-.953 6.547-2.582 9.914 5.927-7.106 8.946-14.91 2.899-25.715zM421.371 279.622c-4.688-24.438-33.664-27.871-53.645-19.301-24.504 10.508-36.192 34.328-44.891 58.25-9.445 25.965-15.848 53.223-22.281 80.051-7.363 30.711-15.035 62.578-17.336 94.156-.766 10.508.996 19.469 5.473 25.215-2.508-6.758-3.324-14.527-2.461-22.598 5.742-46.285 16.578-91.863 30.305-136.414 5.738-18.645 10.672-40.738 19.363-59.48 7.484-16.145 27.965-46.016 63.911-35.793 16.992 4.824 22.055 18.621 20.973 34.363 1.108-6.261 1.71-12.617.589-18.449zM137.98 446.243a420.016 420.016 0 0 1-7.527-5.863c.457.445.898.918 1.359 1.352 2.015 1.917 4.086 3.324 6.168 4.511z"
                      opacity="1"
                      data-original="#c6c6c6"
                      className=""
                    ></path>
                    <path
                      fill="#c6c6c6"
                      d="M47.839 310.548c-.574-6.492-.949-13.141-1.32-19.82-.632 22.828-.55 45.676-.02 68.488.793 33.578 2.57 67.156 5.711 100.598 2.219 23.68 4.66 47.719 10.406 70.855 2.398 9.637 5.828 19.031 12.141 26.867 11.137 13.832 28.523 19.809 45.359 23.191 35.617 7.152 73.098 8.379 109.301 9.988 82.688 3.664 165.696 2.305 248.34-2.051 33.879-1.789 67.772-4.094 101.522-7.688 13.984-1.488 30.016-1.859 43.02-7.488 15.418-6.672 22.621-21.688 28.066-36.648 2.781-7.891 4.313-16.199 5.605-24.445 4.094-26.109 5.293-54.02 6.168-80.926.793-24.449.977-48.926.707-73.395-1.379 23.672-3.488 47.289-6.816 70.816-4.477 31.594-3.727 63.949-14.273 94.449-11.098 32.094-36.793 42.457-67.789 46.301-24.738 3.063-49.656 4.797-74.53 6.371a2678.345 2678.345 0 0 1-207.961 5.059c-33.32-.488-66.656-1.781-99.871-4.551-27.699-2.313-56.781-4.883-83.148-14.203-31.059-10.984-36.754-42.023-41.16-70.953-4.832-31.727-8.148-63.691-11.395-95.609-2.891-28.382-5.551-56.788-8.063-85.206z"
                      opacity="1"
                      data-original="#c6c6c6"
                      className=""
                    ></path>
                    <path
                      fill="#f4f4f4"
                      d="M337.417 543.228c27.508-12.164 36.598-46.504 44.118-72.926 8.426-29.57 16-59.539 23.625-89.324 6.289-24.563 13.051-50.066 14.734-75.59-13.035 68.211-33.621 136.238-55.688 202.012-7.332 21.152-23.497 35.227-46.7 32.645-8.391-.938-15.035-4.086-20.051-8.723 8.993 12.081 23.868 19.019 39.962 11.906zM157.843 253.009c62.938-2.008 125.934-2.617 188.906-2.98 56.649-.32 113.321-.414 169.964.762 26.859.551 53.859.551 80.668 2.227 23.289 1.465 46.559 6.012 62.563 19.523-.23-3.902-.383-7.805-.637-11.699-.793-11.871-2.137-12.582-15.684-13.309-192.737-10.453-386.445-10.496-579.011 3.031-14.941 1.055-16.254.777-16.984 13.125 34.594-11.102 75.621-9.571 110.215-10.68zM266.773 433.224c-6.625-6.406-14.094-10.996-22.117-15.477-10.301-5.758-27.508-11.848-28.418-23.777-2.898 2.676-4.449 5.258-3.551 7.508 4.547 11.391 29.242 19.262 39.18 25.035 20.336 12.742 23.941 35.973 21.352 58.691-1.113 9.777-.836 21.813-10.277 27.621-9.004 5.543-16.664 5.313-25.82.453-29.055-15.863-57.328-33.398-82.852-54.598-10.105-8.387-33.195-23.434-45.438-39.023 7.441 16.188 27.008 29.801 38.918 39.273 14.469 11.516 29.652 22.129 45.004 32.434 16.109 10.809 33.023 23.711 51.93 29.148 30.973 8.91 33.629-33.051 32.926-52.879-.396-11.214-2.369-26.21-10.837-34.409zM435.105 505.919c13 43.031 79.569-13.383 95.765-24.215 21.109-14.105 40.66-30.117 59.273-47.34 5.953-5.512 10.238-11.34 12.156-17.543-11.402 16.449-36.332 32.961-46.965 41.41-25.773 20.48-52.894 38.301-81.737 54.16-9.805 5.246-17.602 6.523-27.496.434-9.609-5.914-9.797-19.223-10.422-29.254-1.648-26.34 2.809-46.434 26.281-59.809 5.789-3.145 42.309-19.406 32.734-27.789a65.227 65.227 0 0 0-4.66-3.691c-.684 13.816-29.113 26.063-36.359 30.934-7.66 5.148-13.086 12.043-17.449 20.059-9.875 18.109-6.808 43.796-1.121 62.644z"
                      opacity="1"
                      data-original="#f4f4f4"
                      className=""
                    ></path>
                  </g>
                </svg>
              </span>
              <div className="flex h-full items-center overflow-hidden">
                <Image
                  src="/images/demo/phone-image-3.png"
                  alt="web development"
                  width={600}
                  height={600}
                  className="rounded-md"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <section className="pt-16 pb-14 lg:pt-24 lg:pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
            <div className="relative mx-auto h-[300px] sm:h-[400px] md:h-[450px] w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
              {/* Large Image */}
              <div className="absolute h-full top-0 left-0 w-[95%] lg:w-[85%]">
                <Image
                  src="/images/demo/mobile-app.avif"
                  alt="coding image"
                  width={600}
                  height={800}
                  className="h-full w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="absolute -bottom-8 left-2 sm:-bottom-12 sm:left-6 md:-bottom-16 md:left-8 z-20">
                <svg
                  viewBox="0 0 200 200"
                  className="h-28 w-28 sm:h-36 sm:w-36 md:h-[184px] md:w-[184px] animate-[spin_15s_linear_infinite] rounded-full bg-white"
                >
                  {/* Outer Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="88"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="1.5"
                  />

                  {/* Inner Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="52"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="1.5"
                  />

                  <defs>
                    <path
                      id="circleText"
                      d="
              M100,100
              m-72,0
              a72,72 0 1,1 144,0
              a72,72 0 1,1 -144,0
            "
                    />
                  </defs>

                  <text
                    fill="#f97316"
                    fontSize="11"
                    letterSpacing="4"
                    fontWeight="600"
                  >
                    <textPath href="#circleText" className="uppercase">
                      Best Mobile App Development • Digital Fueled •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-4xl text-orange-500">
                  <ArrowUpRight />
                </div>
              </div>

              {/* Small Image */}
              <div className="absolute right-0 -bottom-6 sm:-bottom-8 md:-bottom-10 z-10 w-[45%] sm:w-[50%] md:w-[46%] rounded-2xl ring-4 ring-white">
                <Image
                  src="/images/demo/mobile-app-2.avif"
                  alt="coding image"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
                Professional Mobile App Development Solutions
              </h2>
              <p className="mb-6 md:mb-8">
                Mobile app development involves the creation of software applications that run on mobile devices like smartphones and tablets. This process can be broken down into several key stages, from initial idea and design to development, testing, and deployment. The app can be built for various plat-forms, primarily iOS and Android.
              </p>
              <AnimatedButton href="/enquiry">Enquire Now</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-24">
        <div className="container">
          <h2 className="mb-8 md:mb-12 lg:text-center font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
            Our Mobile App Development <br className="hidden lg:block" />Process Overview
          </h2>
          <div className="relative mt-10 lg:mt-20">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-orange-500/50 md:-translate-x-1/2" aria-hidden />
            <div className="space-y-12 md:space-y-24">
              {pageContent.map((stage, i) => (
                <TimelineStage key={stage.title} index={i} stage={stage} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/images/demo/coding-bg-3.png')] bg-cover bg-center bg-no-repeat py-10 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-0">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-white md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
              Key Technologies & Tools for Mobile <br className="hidden lg:block" />App Development
            </h2>
          </div>
          <div className="flex flex-col gap-10 lg:gap-12">
            {/* Vertical Tabs */}
            <div className="no-scrollbar flex w-full shrink-0 lg:justify-center gap-4 overflow-x-auto px-1 py-1 pb-4 lg:pb-0">
              {stack.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`custom-border-white-2 backdrop-blur-2xl flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium whitespace-nowrap transition-all lg:whitespace-normal ${activeTab === idx
                    ? "bg-white text-orange-500 shadow-sm"
                    : "text-white hover:bg-white hover:text-slate-900"
                    }`}
                >
                  {item.icon}
                  {item.category}
                </button>
              ))}
            </div>

            {/* Tab Content Panel */}
            <div className="min-h-75 flex-1 rounded-xl border border-slate-200/80 bg-white p-4 lg:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-full flex-col items-center"
                >
                  <h4 className="mb-8 font-geist text-2xl font-semibold tracking-tight text-center text-slate-900">
                    {stack[activeTab].category} Technologies
                  </h4>
                  {/* <p className="mb-8 max-w-lg">{stack[activeTab].desc}</p> */}

                  <div className={cn("grid w-full grid-cols-2 gap-3 md:gap-5 lg:gap-8", stack[activeTab].techs.length > 4 ? "md:grid-cols-5" : " sm:grid-cols-4")}>
                    {stack[activeTab].techs.map((tech, i) => (
                      <div
                        key={i}
                        className="group flex cursor-default flex-col items-center justify-center rounded-xl bg-slate-50/50 p-6 text-center ring ring-border transition-all hover:bg-white hover:shadow-sm hover:ring-orange-500"
                      >
                        <span className="mb-3 block size-14">
                          <img
                            src={tech.logo}
                            alt="icons"
                            width={100}
                            height={100}
                            className="size-full object-contain"
                          />
                        </span>
                        <span className="font-geist font-medium text-black">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-0.5 w-8 bg-orange-500" />
              <span className="text-sm font-semibold tracking-[0.2em] text-accent">
                Core Expertise
              </span>
            </div>
            <h2 className="font-geist text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              Tailored solutions for <br />
              every ecosystem.
            </h2>
          </div>
          <div className="border-brand-900 fade-up grid w-full grid-cols-1 gap-10 border-t-2 pt-10 delay-1 lg:grid-cols-3 lg:gap-8 lg:pt-12 xl:gap-16">
            <article className="group relative flex h-full flex-col">
              <div className="mb-6 flex items-start justify-between">
                <svg
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 493 493.295"
                  className="size-12 group-hover:text-accent"
                >
                  <g>
                    <path
                      d="M74.813 151.96h256v21.337h-256zm0 0"
                      fill="#A6D864"
                      opacity="1"
                      data-original="#A6D864"
                      className=""
                    ></path>
                    <path
                      d="M42.813 354.629C19.25 354.629.148 335.527.148 311.96V194.629c0-23.567 19.102-42.668 42.664-42.668 23.567 0 42.668 19.101 42.668 42.668V311.96c0 23.566-19.101 42.668-42.668 42.668zm0-181.332c-11.782 0-21.333 9.55-21.333 21.332V311.96c0 11.781 9.551 21.336 21.332 21.336 11.786 0 21.336-9.555 21.336-21.336V194.629c0-11.781-9.55-21.332-21.335-21.332zM362.813 354.629c-23.563 0-42.665-19.102-42.665-42.668V194.629c0-23.567 19.102-42.668 42.664-42.668 23.567 0 42.668 19.101 42.668 42.668V311.96c0 23.566-19.101 42.668-42.668 42.668zm0-181.332c-11.782 0-21.333 9.55-21.333 21.332V311.96c0 11.781 9.551 21.336 21.332 21.336 11.786 0 21.336-9.555 21.336-21.336V194.629c0-11.781-9.55-21.332-21.336-21.332zm0 0"
                      fill="#A6D864"
                      opacity="1"
                      data-original="#A6D864"
                      className=""
                    ></path>
                    <path
                      d="M256.148 493.297c-23.566 0-42.668-19.106-42.668-42.668v-53.332h-21.332v53.332c0 23.562-19.101 42.668-42.668 42.668-23.562 0-42.667-19.106-42.667-42.668v-53.332H96.148c-17.675 0-32-14.328-32-32V162.629c0-76.582 62.082-138.668 138.665-138.668 76.585 0 138.667 62.086 138.667 138.668v202.668c0 17.672-14.328 32-32 32h-10.668v53.332c0 23.562-19.101 42.668-42.664 42.668zM170.812 375.96h64v74.668c0 11.781 9.555 21.332 21.336 21.332s21.332-9.55 21.332-21.332V375.96h32c5.891 0 10.668-4.773 10.668-10.664V162.629c0-64.8-52.53-117.332-117.336-117.332-64.8 0-117.332 52.531-117.332 117.332v202.668c0 5.89 4.778 10.664 10.668 10.664h32v74.668c0 11.781 9.551 21.332 21.332 21.332s21.332-9.55 21.332-21.332zm0 0"
                      fill="#A6D864"
                      opacity="1"
                      data-original="#A6D864"
                      className=""
                    ></path>
                    <path
                      d="M160.148 98.629h-21.335v21.332h21.335zM266.813 98.629H245.48v21.332h21.333zM103.363 12.21 121.066.313l29.547 43.97-17.707 11.898zM254.785 43.934 284.31 0l17.714 11.906L272.5 55.84zm0 0"
                      fill="#A6D864"
                      opacity="1"
                      data-original="#A6D864"
                      className=""
                    ></path>
                  </g>
                </svg>
              </div>

              <h2 className="text-brand-900 mb-4 font-geist text-xl font-semibold transition-transform duration-500 group-hover:-translate-y-1 lg:text-[1.75rem]">
                Android App Development
              </h2>

              <div className="mt-auto">
                <p className="text-base leading-relaxed text-gray-900">
                  We Are The Best App Development Company In Delhi-NCR That
                  Brings Digital Ideas To Life. Our Development Process Is
                  Unlike The Company That Focuses On Simplification. For Us,
                  Your Message Is The Most Important. Our Team Of Highly Skilled
                  Developers With Decades Of Experience In Dedicated Industries
                  Handle Your Application Idea From Beginning To End. With Our
                  Mobile App Development Services, You Get Next Generous
                  Solutions That Are Sustainable And Technical.
                </p>
              </div>
            </article>

            <article className="group fade-up relative flex h-full flex-col border-t border-gray-200 pt-10 delay-2 lg:border-t-0 lg:pt-0">
              <div className="mb-6 flex items-start justify-between">
                <svg
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 490 490.667"
                  className="size-12 group-hover:text-accent"
                >
                  <g>
                    <path
                      d="M213.535 117.332h-10.668v-10.664C202.867 36.934 239.801 0 309.535 0H320.2v10.668c0 69.73-36.933 106.664-106.664 106.664zm84.93-95.598c-46.399 3.2-70.664 27.465-74 74 47.203-3.199 70.933-26.933 74-74zM298.867 490.668a106.668 106.668 0 0 1-49.332-12.133 76.125 76.125 0 0 0-71.867 0 106.695 106.695 0 0 1-49.336 12.133c-71.73 0-128-98.402-128-224 0-76.402 57.469-138.668 128-138.668 13.207 0 26.324 2.207 38.8 6.535l39.602 13.73a21.442 21.442 0 0 0 14 0l39.465-13.73A118.66 118.66 0 0 1 298.867 128c38.531 0 74.531 18.535 99.067 50.8l9.332 12.4-14.934 4.265c-38.344 11.05-63.883 47.23-61.45 87.062 2.43 39.832 32.18 72.637 71.583 78.938l12.137 2-3.735 11.734c-22.133 71.2-65.199 115.469-112 115.469zM213.535 448a99.547 99.547 0 0 1 45.863 11.602 84.125 84.125 0 0 0 39.47 9.73c34.933 0 68.132-34 88.132-89.465-45.93-12.887-77.621-54.832-77.465-102.535.184-41.477 24.278-79.125 61.863-96.664-19.597-20-45.332-31.336-72.53-31.336a97.172 97.172 0 0 0-31.735 5.336l-39.598 13.73a42.894 42.894 0 0 1-27.867 0l-39.734-13.73a97.069 97.069 0 0 0-31.735-5.336c-58.8 0-106.664 52.668-106.664 117.336 0 109.867 48.797 202.664 106.664 202.664a84.02 84.02 0 0 0 39.469-9.73A99.55 99.55 0 0 1 213.535 448zm0 0"
                      fill="#000000"
                      opacity="1"
                      data-original="#000000"
                      className=""
                    ></path>
                  </g>
                </svg>
              </div>

              <h2 className="text-brand-900 mb-4 font-geist text-xl font-semibold transition-transform duration-500 group-hover:-translate-y-1 lg:text-[1.75rem]">
                iOS App Development
              </h2>

              <div className="mt-auto space-y-4">
                <p className="text-base leading-relaxed text-gray-900">
                  Our custom mobile app development expertise includes building
                  world-class iOS apps. We approach each project with unique,
                  bespoke solutions to ensure your digital product addresses
                  your business needs.
                </p>
                <p className="text-base leading-relaxed text-gray-900">
                  Our highly experienced iOS developers are proficient in a wide
                  range of programming languages and platforms, from Swift to
                  Objective-C. We also create both native and cross-platform iOS
                  applications, so no project is beyond our broad technical
                  capabilities.
                </p>
              </div>
            </article>

            <article className="group fade-up relative flex h-full flex-col border-t border-gray-200 pt-10 delay-3 lg:border-t-0 lg:pt-0">
              <div className="mb-6 flex items-start justify-between">
                <svg
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                  className="size-12 group-hover:text-accent"
                >
                  <g>
                    <path
                      d="M13.5 24h-11A2.503 2.503 0 0 1 0 21.5v-19C0 1.122 1.121 0 2.5 0h11C14.879 0 16 1.122 16 2.5v1a.5.5 0 0 1-1 0v-1c0-.827-.673-1.5-1.5-1.5h-11C1.673 1 1 1.673 1 2.5v19c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-1a.5.5 0 0 1 1 0v1c0 1.378-1.121 2.5-2.5 2.5z"
                      fill="#F26D1F"
                      opacity="1"
                      data-original="#F26D1F"
                      className=""
                    ></path>
                    <path
                      d="M10 3H6c-.827 0-1.5-.673-1.5-1.5A.5.5 0 0 0 4 1H3a.5.5 0 0 1 0-1h1c.827 0 1.5.673 1.5 1.5A.5.5 0 0 0 6 2h4a.5.5 0 0 0 .5-.5c0-.827.673-1.5 1.5-1.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5c0 .827-.673 1.5-1.5 1.5zM16.5 15c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.121 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"
                      fill="#F26D1F"
                      opacity="1"
                      data-original="#F26D1F"
                      className=""
                    ></path>
                    <path
                      d="M17.298 19h-1.596a.996.996 0 0 1-.994-.901l-.128-1.271a4.696 4.696 0 0 1-.865-.503l-1.167.527a.997.997 0 0 1-1.278-.411l-.797-1.381a.996.996 0 0 1 .281-1.312l1.03-.74c-.02-.155-.034-.327-.034-.507s.015-.353.034-.507l-1.03-.74a.997.997 0 0 1-.281-1.313l.797-1.38a.998.998 0 0 1 1.277-.412l1.168.528c.273-.2.562-.368.865-.503l.128-1.274a.996.996 0 0 1 .994-.9h1.596c.516 0 .943.387.994.901l.128 1.271c.303.135.593.304.865.503l1.167-.527a.998.998 0 0 1 1.278.411l.797 1.381a.996.996 0 0 1-.281 1.312l-1.03.74c.02.155.034.327.034.507s-.015.353-.034.507l1.03.74c.419.302.54.867.281 1.313l-.797 1.38a1 1 0 0 1-1.277.412l-1.168-.528c-.273.2-.562.368-.865.503l-.128 1.274a.996.996 0 0 1-.994.9zm-3.513-3.755a.5.5 0 0 1 .321.117c.339.284.714.501 1.113.647.18.066.307.229.325.42L15.702 18h1.596l.157-1.571a.501.501 0 0 1 .325-.42 3.745 3.745 0 0 0 1.113-.647.498.498 0 0 1 .527-.072l1.443.652.798-1.381-1.278-.918a.503.503 0 0 1-.2-.493c.037-.211.066-.426.066-.648s-.029-.437-.066-.648a.503.503 0 0 1 .2-.493l1.278-.918-.796-1.383-1.444.651a.5.5 0 0 1-.527-.072 3.7 3.7 0 0 0-1.113-.647.498.498 0 0 1-.325-.42L17.298 7h-1.596l-.157 1.571a.501.501 0 0 1-.325.42 3.745 3.745 0 0 0-1.113.647.498.498 0 0 1-.527.072l-1.443-.652-.798 1.381 1.278.918a.503.503 0 0 1 .2.493c-.037.211-.066.426-.066.648s.029.437.066.648a.503.503 0 0 1-.2.493l-1.278.918.797 1.381 1.444-.651a.526.526 0 0 1 .205-.042z"
                      fill="#F26D1F"
                      opacity="1"
                      data-original="#F26D1F"
                      className=""
                    ></path>
                  </g>
                </svg>
              </div>

              <h2 className="text-brand-900 mb-4 font-geist text-xl font-semibold transition-transform duration-500 group-hover:-translate-y-1 lg:text-[1.75rem]">
                App Consultancy
              </h2>

              <div className="mt-auto space-y-4">
                <p className="text-base leading-relaxed text-gray-900">
                  We understand that your existing teams and platforms may
                  sometimes require extra support and direction. Our team of 250
                  mobile app development experts are able to help you define
                  your vision, scale your ambitions and advise you on
                  improvements, additions or adjustments that could be made to
                  your team or product.
                </p>
                <p className="text-base leading-relaxed text-gray-900">
                  If your project needs rescuing, you can call on Digital Fueled
                  IT Pvt Ltd. to swiftly put you back on track with our app
                  consultancy services.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section> */}

      {/* <section className="py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative h-100 w-full overflow-hidden rounded-xl bg-slate-100 lg:h-full">
              <img
                key={currentData.image}
                src={currentData.image}
                alt={currentData.title}
                className="absolute inset-0 h-full w-full animate-in object-cover duration-700 fade-in"
              />
            </div>

            <div className="flex flex-col space-y-8 py-4">
              <div>
                <h2 className="font-geist text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                  Our Technical Capabilities.
                </h2>
                <p className="mx-auto mt-6 text-lg">
                  Digital Fueled IT Pvt Ltd. experts develop apps across native,
                  cross-platform, and hybrid frameworks to match your precise
                  requirements.
                </p>
              </div>
              <Accordion
                type="single"
                value={activeItem}
                onValueChange={(value) => {
                  if (value) setActiveItem(value)
                }}
                className="w-full space-y-4"
              >
                {capabilitiesData.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-b border-gray-200 py-2"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium text-black transition-colors hover:text-accent hover:no-underline md:text-xl">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-normal text-gray-400 md:text-base">
                          0{index + 1}
                        </span>
                        {item.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 text-base leading-relaxed text-gray-900 md:text-base">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="bg-[#090909] py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="font-geist text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Why build a mobile app <br className="hidden md:block" />
              for your business?
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
          >
            {whyBuildData.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    } as const,
                  },
                }}
                className="group relative overflow-hidden rounded-xl bg-white p-10 transition-all duration-300 hover:bg-[#fcfcfc]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 font-geist text-xl font-semibold text-black">
                  {item.title}
                </h3>
                <p className="font-geist text-base leading-relaxed text-gray-900">
                  {item.description}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
      {/* <TechStackSection /> */}
      <section className="py-10 lg:py-24">
        <div className="container">
          <h2 className="mb-8 md:mb-12 font-geist text-center text-[28px] leading-[1.2] font-semibold tracking-tight text-slate-900 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none capitalize">
            Here's a breakdown of the mobile app development services that
            agencies and developers offer
          </h2>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {appDevelopmentServices.map((service, i) => {
              return (
                <article
                  key={service.title}
                  style={{ animationDelay: `${i * 70}ms` }}
                  className="group relative animate-fade-in overflow-hidden rounded-xl ring ring-slate-200/80 bg-gray-50 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:ring-orange-500 hover:shadow-xl hover:shadow-orange-200/60"
                >
                  <div className="mb-5 flex flex-col items-start gap-4">
                    <span className="flex size-14 items-center justify-center">
                      <Image src={service.icon} alt={service.title} width={100} height={100} className="object-contain size-full" />
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mb-6 text-base">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item.title}
                      >
                        <div className="flex items-start gap-2.5">
                          <CheckCircle size={14} className="text-orange-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-slate-900">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <HowItsWork />
      <ContactForm />
    </>
  )
}

export default MobileAppDevelopment


function TimelineStage({ index, stage }: { index: number; stage: Stage }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = stageIcons[index];
  const image = stageImages[index];
  const left = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid md:grid-cols-2 gap-6 md:gap-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      {/* dot */}
      <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping" />
          <div className="relative h-5 w-5 rounded-full bg-orange-500" />
        </div>
      </div>

      {/* Header + image */}
      <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
        <div className={`inline-flex items-center gap-6 ${left ? "md:flex-row-reverse" : ""}`}>
          <div className="h-12 w-12 rounded-lg bg-blue-50 ring ring-border shadow-soft inline-flex items-center justify-center shrink-0">
            <Icon className="h-5 w-5 text-accent" />
          </div>
          <div className={left ? "md:text-right" : ""}>
            <div className="text-xs font-semibold text-accent tracking-widest uppercase">
              Stage {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold lg:text-4xl">{stage.title}</h3>
          </div>
        </div>

        <div className="mt-12 group relative overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" aria-hidden />
          <Image
            src={image}
            alt={`${stage.title} illustration`}
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Items list */}
      <div className={`pl-12 md:pl-0 ${left ? "md:col-start-2 md:pl-12" : "md:row-start-1 md:pr-12"}`}>
        <ul className="space-y-4">
          {stage.items.map((item, i) => (
            <li
              key={item.title}
              className="group rounded-xl ring ring-border p-5 hover:ring-accent/40 hover:-translate-y-1 hover:shadow-lg transition-all"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-accent shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl mb-2 font-semibold text-slate-900">{item.title}</h2>
                  {item.description && (
                    <p className="text-black">
                      {item.description}
                    </p>
                  )}
                  {item.details && (
                    <ul className="mt-3 space-y-1.5">
                      {item.details.map((d) => (
                        <li key={d.label} className="">
                          <span className="font-semibold text-foreground">{d.label}:</span> {d.description}
                        </li>
                      ))}
                    </ul>
                  )}
                  {(item.pros || item.cons) && (
                    <div className="mt-3 grid sm:grid-cols-2 gap-2">
                      {item.pros && (
                        <div className="rounded-xl bg-accent/5 border border-accent/15 px-3 py-2 text-xs">
                          <div className="font-semibold text-accent uppercase tracking-wide text-[10px] mb-0.5">Pros</div>
                          <div className="text-muted-foreground leading-relaxed">{item.pros}</div>
                        </div>
                      )}
                      {item.cons && (
                        <div className="rounded-xl bg-muted/60 border border-border px-3 py-2 text-xs">
                          <div className="font-semibold uppercase tracking-wide text-[10px] mb-0.5">Cons</div>
                          <div className="text-muted-foreground leading-relaxed">{item.cons}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}