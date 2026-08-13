"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import {
  Agent_Projects,
  aiAgentTechnologyData,
  aiSolutionsData,
  ApproachStepFive,
  ApproachStepFour,
  ApproachStepOne,
  ApproachStepThree,
  ApproachStepTwo,
} from "../../components/data";
import { ArrowRight, Download } from "lucide-react";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import ProblemCard from "../../../../components/ProblemCard";
import Image from "next/image";
import { CardShowcase } from "../../../../components";
import Discover from "../../components/Discover";
import Assess from "../../components/Assess";
import GlowPanel from "../../../component/GlowPanel";
import Strategy from "../../components/Strategy";
import IconCard from "../../../../components/card-showcase/IconCard";
import AI_Solutions from "../../../uiComponents/AI_Solutions";
import Execution_Plan from "../../../uiComponents/Execution_Plan";
import { ai_agents_designed } from "./data";

const page = () => {
  const problems = [
    {
      title:
        "Browse the web, query databases, call APIs, and write/execute code",
    },
    {
      title:
        "Break a complex goal into sub-tasks and orchestrate them in sequence",
    },
    {
      title:
        "YDecide when to ask a human for input and when to proceed autonomously",
    },
    {
      title:
        "Maintain long-term memory across sessions and learn from feedback",
    },
  ];
  const industries = [
    {
      id: 1,
      name: "Finance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
        >
          <path
            d="M4.01562 34.1438V14.0598C4.01562 12.9945 4.43882 11.9728 5.19212 11.2195C5.94542 10.4662 6.96711 10.043 8.03243 10.043H40.1669C41.2322 10.043 42.2539 10.4662 43.0072 11.2195C43.7605 11.9728 44.1837 12.9945 44.1837 14.0598V34.1438C44.1837 35.2091 43.7605 36.2308 43.0072 36.9841C42.2539 37.7374 41.2322 38.1606 40.1669 38.1606H8.03243C6.96711 38.1606 5.94542 37.7374 5.19212 36.9841C4.43882 36.2308 4.01563 35.2091 4.01562 34.1438Z"
            stroke="white"
            strokeWidth="3.01261"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.1561 24.1234L37.1762 24.1013M11.0469 24.1234L11.067 24.1013M24.1015 30.1285C22.5035 30.1285 20.971 29.4938 19.841 28.3638C18.7111 27.2339 18.0763 25.7013 18.0763 24.1033C18.0763 22.5054 18.7111 20.9728 19.841 19.8429C20.971 18.7129 22.5035 18.0781 24.1015 18.0781C25.6995 18.0781 27.232 18.7129 28.362 19.8429C29.4919 20.9728 30.1267 22.5054 30.1267 24.1033C30.1267 25.7013 29.4919 27.2339 28.362 28.3638C27.232 29.4938 25.6995 30.1285 24.1015 30.1285Z"
            stroke="white"
            strokeWidth="3.01261"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Real Estate",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
        >
          <path
            d="M27.7079 41.7815C27.8364 41.8324 27.9522 41.8578 28.0553 41.8578C28.1584 41.8578 28.2742 41.8324 28.4028 41.7815L40.0837 38.1825C40.0435 37.5719 39.8614 37.1321 39.5374 36.8629C39.2107 36.5938 38.8418 36.4593 38.4307 36.4593H28.9009C28.052 36.4593 27.2821 36.4258 26.5912 36.3588C25.9003 36.2919 25.194 36.1326 24.4723 35.8808L21.0299 34.7722C20.7554 34.6811 20.5579 34.5004 20.4374 34.2299C20.3169 33.9595 20.3022 33.6917 20.3933 33.4266C20.4843 33.1615 20.6557 32.9673 20.9074 32.8441C21.1591 32.7209 21.4256 32.7055 21.7068 32.7979L24.8198 33.9247C25.4651 34.1442 26.1801 34.2848 26.9648 34.3464C27.748 34.408 28.7181 34.4428 29.8749 34.4508H30.3971C30.3971 33.8242 30.2813 33.3181 30.0497 32.9325C29.818 32.5469 29.488 32.2778 29.0595 32.1251L17.5032 27.8834C17.4268 27.8579 17.3559 27.8392 17.2903 27.8271C17.2247 27.8151 17.1544 27.8084 17.0794 27.8071H12.8617V37.4635L27.7079 41.7815ZM27.1957 43.7658L12.8617 39.5723C12.6703 40.3649 12.2652 40.9969 11.6467 41.4682C11.0281 41.9395 10.3519 42.1752 9.61817 42.1752H8.0717C7.17997 42.1752 6.41677 41.8572 5.78212 41.2212C5.14612 40.5865 4.82812 39.8233 4.82812 38.9316V29.0402C4.82812 28.1485 5.14545 27.3853 5.78011 26.7506C6.4161 26.1146 7.17997 25.7966 8.0717 25.7966H17.0352C17.2227 25.7966 17.4148 25.8181 17.6116 25.8609C17.8098 25.9024 17.9939 25.952 18.1639 26.0095L29.7705 30.2613C30.4895 30.5345 31.1081 31.0252 31.6263 31.7335C32.1458 32.4418 32.4055 33.3469 32.4055 34.4488H38.4307C39.6398 34.4488 40.5663 34.8271 41.2104 35.5836C41.8544 36.3414 42.1764 37.3021 42.1764 38.4657C42.1764 38.8673 42.068 39.2061 41.851 39.4819C41.6341 39.7577 41.3161 39.9659 40.8971 40.1065L29.0796 43.7518C28.7877 43.8348 28.4798 43.883 28.1557 43.8964C27.8317 43.9098 27.511 43.8656 27.1937 43.7638M6.83653 38.9296C6.83653 39.2911 6.95235 39.5877 7.18398 39.8193C7.41562 40.0509 7.71152 40.1668 8.0717 40.1668H9.61817C9.97834 40.1668 10.2742 40.0704 10.5059 39.8776C10.7375 39.6848 10.8533 39.3688 10.8533 38.9296V27.8071H8.0717C7.71152 27.8071 7.41562 27.9229 7.18398 28.1545C6.95235 28.3861 6.83653 28.6827 6.83653 29.0442V38.9296ZM28.0814 6.23277C28.4028 6.33855 28.708 6.4865 28.9973 6.67663L38.8083 13.6639C39.2408 13.9544 39.5755 14.3394 39.8125 14.8187C40.0495 15.2967 40.168 15.7934 40.168 16.3089V28.6566C40.168 28.9418 40.0716 29.1801 39.8788 29.3716C39.686 29.5631 39.447 29.6595 39.1618 29.6608C38.8766 29.6621 38.6383 29.5657 38.4468 29.3716C38.2553 29.1775 38.1596 28.9398 38.1596 28.6586V16.2587C38.1596 16.0525 38.1147 15.8597 38.025 15.6803C37.934 15.4995 37.7988 15.3449 37.6193 15.2164L27.8083 8.37976C27.6021 8.22578 27.3705 8.14879 27.1134 8.14879C26.8563 8.14879 26.6247 8.22578 26.4185 8.37976L16.6074 15.2164C16.4267 15.3449 16.2914 15.4989 16.2017 15.6783C16.112 15.8604 16.0672 16.0552 16.0672 16.2627V20.0084C16.0672 20.2923 15.9708 20.5306 15.7779 20.7234C15.5851 20.9162 15.3461 21.0126 15.0609 21.0126C14.7758 21.0126 14.5374 20.9162 14.346 20.7234C14.1545 20.5306 14.0588 20.2916 14.0588 20.0064V16.3109C14.0588 15.7941 14.1772 15.2967 14.4142 14.8187C14.6512 14.3394 14.986 13.9544 15.4184 13.6639L25.2295 6.67663C25.52 6.4865 25.8233 6.33922 26.1393 6.23478C26.454 6.13034 26.776 6.07812 27.1053 6.07812C27.4347 6.07812 27.7601 6.12834 28.0814 6.23277ZM25.6713 16.7106C25.8347 16.5486 25.9164 16.3591 25.9164 16.1422C25.9164 15.9253 25.8354 15.7365 25.6734 15.5759C25.5113 15.4152 25.3219 15.3335 25.105 15.3308C24.8881 15.3282 24.6986 15.4098 24.5366 15.5759C24.3746 15.7419 24.2942 15.9307 24.2956 16.1422C24.2969 16.3538 24.3773 16.5433 24.5366 16.7106C24.6959 16.878 24.8854 16.959 25.105 16.9536C25.3246 16.9483 25.514 16.8679 25.6734 16.7126M29.6902 16.7126C29.8508 16.5493 29.9312 16.3591 29.9312 16.1422C29.9312 15.9253 29.8508 15.7365 29.6902 15.5759C29.5281 15.4125 29.3387 15.3308 29.1218 15.3308C28.9049 15.3308 28.7154 15.4125 28.5534 15.5759C28.3927 15.7379 28.3124 15.9267 28.3124 16.1422C28.3124 16.3578 28.3927 16.5473 28.5534 16.7106C28.7154 16.8726 28.9049 16.9536 29.1218 16.9536C29.3387 16.9536 29.5281 16.8733 29.6902 16.7126ZM25.6734 20.7294C25.834 20.5661 25.9144 20.376 25.9144 20.159C25.9144 19.9421 25.834 19.7533 25.6734 19.5927C25.5113 19.4293 25.3219 19.3477 25.105 19.3477C24.8881 19.3477 24.6986 19.4293 24.5366 19.5927C24.3759 19.7547 24.2956 19.9435 24.2956 20.159C24.2956 20.3746 24.3759 20.5641 24.5366 20.7274C24.6986 20.8894 24.8881 20.9704 25.105 20.9704C25.3219 20.9704 25.5113 20.8901 25.6734 20.7294ZM29.6902 20.7294C29.8508 20.5661 29.9312 20.376 29.9312 20.159C29.9312 19.9421 29.8508 19.7533 29.6902 19.5927C29.5281 19.4293 29.3387 19.3477 29.1218 19.3477C28.9049 19.3477 28.7154 19.4293 28.5534 19.5927C28.3927 19.7547 28.3124 19.9435 28.3124 20.159C28.3124 20.3746 28.3927 20.5641 28.5534 20.7274C28.7154 20.8894 28.9049 20.9704 29.1218 20.9704C29.3387 20.9704 29.5281 20.8901 29.6902 20.7294Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Healthcare",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
        >
          <path
            d="M36.1484 40.1706L43.8286 32.4904C44.0546 32.2647 44.1818 31.9584 44.1821 31.6389V21.0907C44.1821 20.2917 43.8647 19.5255 43.2997 18.9605C42.7347 18.3955 41.9684 18.0781 41.1694 18.0781C40.3705 18.0781 39.6042 18.3955 39.0392 18.9605C38.4742 19.5255 38.1568 20.2917 38.1568 21.0907V30.1285"
            stroke="white"
            strokeWidth="3.01261"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.1501 32.137L37.8733 30.4137C37.9642 30.3236 38.0362 30.2163 38.0852 30.098C38.1342 29.9797 38.1591 29.8529 38.1585 29.7249C38.1571 29.5445 38.1061 29.368 38.0112 29.2146C37.9163 29.0613 37.781 28.9369 37.6202 28.8552L36.7305 28.4114C35.9767 28.0345 35.1235 27.9042 34.2916 28.039C33.4597 28.1738 32.6913 28.5669 32.0951 29.1625L30.2976 30.96C29.5443 31.7131 29.1209 32.7347 29.1207 33.7999V40.1706M12.0492 40.1706L4.3691 32.4904C4.14305 32.2647 4.01591 31.9584 4.01562 31.6389V21.0907C4.01562 20.2917 4.33302 19.5255 4.898 18.9605C5.46297 18.3955 6.22924 18.0781 7.02823 18.0781C7.82722 18.0781 8.59349 18.3955 9.15847 18.9605C9.72344 19.5255 10.0408 20.2917 10.0408 21.0907V30.1285"
            stroke="white"
            strokeWidth="3.01261"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0475 32.136L10.3243 30.4128C10.1443 30.2283 10.0422 29.9816 10.0391 29.7239C10.0391 29.3564 10.2479 29.021 10.5773 28.8543L11.467 28.4104C12.2208 28.0335 13.074 27.9033 13.9059 28.0381C14.7378 28.1729 15.5063 28.5659 16.1024 29.1616L17.9 30.9591C18.6533 31.7122 19.0767 32.7337 19.0769 33.799V40.1696M27.4459 24.1024H20.7499V19.4168H16.0643V12.7208H20.7499V8.03516H27.4459V12.7208H32.1315V19.4168H27.4459V24.1024Z"
            stroke="white"
            strokeWidth="3.01261"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Media & Publishing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
        >
          <path
            d="M41.094 6.92291C40.5809 4.50178 38.4239 2.89305 35.9144 3.01858C32.8817 3.17021 28.1328 3.52269 21.4438 4.33107C14.7558 5.13945 10.0612 5.92775 7.08072 6.50215C4.6144 6.97714 2.9183 9.05182 3.01571 11.5232C3.12215 14.2245 3.40634 18.3086 4.10928 23.9441C4.42762 26.4928 4.75097 28.7141 5.06127 30.6271"
            stroke="white"
            strokeWidth="3.01261"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.46339 40.1266C5.68331 42.6833 7.67866 44.5922 10.2384 44.765C13.3363 44.9738 18.2037 45.1897 25.1036 45.1897C32.0024 45.1897 36.8708 44.9738 39.9688 44.765C42.5295 44.5922 44.5238 42.6833 44.7438 40.1266C44.9707 37.4815 45.1876 33.537 45.1876 28.1183C45.1876 22.6996 44.9707 18.7561 44.7438 16.1101C44.5238 13.5534 42.5285 11.6444 39.9688 11.4717C36.8708 11.2628 32.0034 11.0469 25.1036 11.0469C18.2047 11.0469 13.3363 11.2628 10.2384 11.4717C7.67765 11.6444 5.68331 13.5534 5.46339 16.1101C5.23644 18.7551 5.01953 22.6996 5.01953 28.1183C5.01953 33.537 5.23644 37.4815 5.46339 40.1266Z"
            stroke="white"
            strokeWidth="3.01261"
            strokeLinejoin="round"
          />
          <path
            d="M19.0805 19.0781H11.0469M19.0805 31.1286H11.0469M39.1645 37.1538H11.0469M19.0805 25.1033H11.0469"
            stroke="white"
            strokeWidth="3.01261"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.193 28.9429C25.2794 30.6571 26.5818 31.9595 28.296 32.0459C29.2912 32.0961 30.5625 32.1333 32.1351 32.1333C33.4153 32.1363 34.6954 32.1072 35.9741 32.0459C37.6873 31.9595 38.9907 30.6571 39.0771 28.9429C39.1273 27.9478 39.1645 26.6764 39.1645 25.1039C39.1675 23.824 39.1384 22.5442 39.0771 21.2658C38.9907 19.5516 37.6883 18.2482 35.9741 18.1628C34.6954 18.1012 33.4153 18.0717 32.1351 18.0744C30.8552 18.0714 29.5754 18.1005 28.297 18.1618C26.5828 18.2482 25.2794 19.5506 25.194 21.2648C25.1324 22.5435 25.1029 23.8236 25.1056 25.1039C25.1056 26.6764 25.1438 27.9478 25.193 28.9429Z"
            stroke="white"
            strokeWidth="3.01261"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      name: "Legal",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
        >
          <path
            d="M20.0822 23.3506L10.1908 34.9893C9.87732 35.3586 9.49064 35.6589 9.05518 35.871C8.61973 36.0832 8.14498 36.2027 7.66096 36.222C7.17694 36.2412 6.6942 36.1598 6.24326 35.9829C5.79233 35.806 5.38302 35.5374 5.04122 35.1942C4.69807 34.851 4.42969 34.4406 4.25299 33.9886C4.07629 33.5366 3.9951 33.053 4.01454 32.5681C4.03397 32.0832 4.15361 31.6076 4.36591 31.1712C4.57821 30.7348 4.87858 30.3471 5.24809 30.0326L16.8587 20.1211"
            stroke="white"
            strokeWidth="3.01261"
            strokeLinejoin="round"
          />
          <path
            d="M36.1483 20.2193L26.2027 30.187M19.9847 4.01953L10.0391 13.9892M40.1651 23.4167L44.1819 20.1229M40.1651 30.0043L44.1819 32.1994M22.0935 44.1836H42.1735M24.5538 44.1836C25.6604 42.1993 26.4879 38.4054 30.4083 38.1925C31.5732 38.1283 32.7581 38.1283 33.923 38.1925C37.8414 38.4054 38.6729 42.1993 39.7815 44.1836M18.7415 5.26675L11.2843 12.742C11.2843 12.742 15.0139 17.7269 18.7435 21.4645C22.4751 25.2022 27.4479 28.9418 27.4479 28.9418L34.9071 21.4645C34.9071 21.4645 31.1775 16.4817 27.4479 12.742C23.7183 9.0064 18.7415 5.26675 18.7415 5.26675Z"
            stroke="white"
            strokeWidth="3.01261"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="overflow-hidden">
      <section>
        <HeroSection
          badgeText="AI Agents & Automation"
          title="AI Agents that Take Action, Not Just Instructions."
          description="We design and deploy production-ready AI agents that can make decisions, interact with systems, and automate complex workflows with minimal human intervention."
          image="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613040/Gloitel/what%20we%20do/AI_Agents_Automation_pjmzaj.png"
          imageAlt="Hero Image"
          video="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
          primaryButton={{
            href: "/contact",
            text: "Discuss Your Automation Use Case",
          }}
          secondaryButton={{
            href: "/case-studies",
            text: "Explore Agentic AI",
           icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
),
          }}
        />
      </section>

      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full -mt-10  gap-6.5 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="How AI Agents Work" />
            </span>
            <MiddleSectionHeads
              SectionHead="AI Agents that Think through Tasks and Execute them"
              SectionSubHead=" "
              SectionDescription="Unlike traditional AI assistants, agents can interact with systems, break 
down complex objectives, and take actions across multiple steps to 
achieve outcomes."
            />
          </div>
        </div>
        <div className="relative h-[400px] mb-16 overflow-hidden w-[80%]  mx-auto">
          <Image
            src="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613039/Gloitel/what%20we%20do/How_AI_Agents_Work_zed02c.png"
            alt="Problem"
            fill
            className="object-cover rounded-2xl h-full w-full  bg-white"
          />
        </div>

        <section className="grid grid-cols-1 mb-10  gap-6 md:grid-cols-2 w-[80%] mx-auto ">
          {problems.map((item, index) => (
            <ProblemCard key={index} title={item.title} />
          ))}
        </section>
      </section>
      <section className="h-full ">
        <div className="flex flex-col mt-40 items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-10 w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="What We Build" />
            </span>
            <MiddleSectionHeads
              SectionHead="AI Agents Designed for Real Business Workflows"
              SectionSubHead=""
              SectionDescription="We design and build production-ready generative AI solutions - from intelligent assistants and document processing systems to RAG platforms, workflow automation, and private LLM deployments."
            />
          </div>
          <section className="w-[90%] mt-20 mx-auto ">
            <CardShowcase
              items={ai_agents_designed}
              showDivider={true}
              showStepBadge={false}
              cardClassName="max-h-[411px] max-w-[350px]  "
              gridClassName="h-full"
              titleClassName="text-[28px] "
              descriptionClassName="text-[16px] leading-6 mt-5 text-description "
              iconClassName=""
            />
          </section>
        </div>
      </section>
      <section className="my-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-10 w-full mb-52 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="Industries We Serve" />
            </span>
            <MiddleSectionHeads
              SectionHead="AI Agents Driving Results Across Industries."
              SectionSubHead=" "
              SectionDescription="From finance and healthcare to legal and real estate, we deploy AI agents that automate workflows, streamline operations, and support 
faster decision-making."
            />
          </div>
        </div>

        <div className="flex flex-wrap -mt-20 gap-6 justify-center">
          {industries.map((item) => (
            <IconCard
              key={item.id}
              name={item.name}
              // logo={item.logo}
              icontype={true}
              Icon={item.icon}
            />
          ))}
        </div>
      </section>
      <section>
        <AI_Solutions
          badge={aiAgentTechnologyData.badge}
          title={aiAgentTechnologyData.title}
          description={aiAgentTechnologyData.description}
          tabs={aiAgentTechnologyData.tabs}
          technologies={aiAgentTechnologyData.technologies}
        />
      </section>
      <section className="flex flex-col mt-20 items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="gap-6.5 flex flex-col -mt-10  w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="How We Approach Agent Design" />
          </span>
          <MiddleSectionHeads
            SectionHead="A Structured Approach to Building Production-Ready AI Agents."
            SectionSubHead=""
            SectionDescription="Every successful agent starts with a clear process. From workflow 
analysis and tool design to testing and supervision, we follow a structured methodology to build agents that perform in real-world environments."
          />
        </div>
        <section className="w-full md:w-[80%]  mx-auto">
          <Discover
            badgeText={ApproachStepOne.badgeText}
            title={ApproachStepOne.title}
            description={ApproachStepOne.description}
            buttonText={ApproachStepOne.buttonText}
            buttonLink={ApproachStepOne.buttonLink}
            image={ApproachStepOne.image}
            imageAlt={ApproachStepOne.imageAlt}
          />
          <Assess
            badgeText={ApproachStepTwo.badgeText}
            title={ApproachStepTwo.title}
            description={ApproachStepTwo.description}
            buttonText={ApproachStepTwo.buttonText}
            buttonLink={ApproachStepTwo.buttonLink}
            image={ApproachStepTwo.image}
            imageAlt={ApproachStepTwo.imageAlt}
          />
          <Discover
            badgeText={ApproachStepThree.badgeText}
            title={ApproachStepThree.title}
            description={ApproachStepThree.description}
            buttonText={ApproachStepThree.buttonText}
            buttonLink={ApproachStepThree.buttonLink}
            image={ApproachStepThree.image}
            imageAlt={ApproachStepThree.imageAlt}
          />
          <Assess
            badgeText={ApproachStepFour.badgeText}
            title={ApproachStepFour.title}
            description={ApproachStepFour.description}
            buttonText={ApproachStepFour.buttonText}
            buttonLink={ApproachStepFour.buttonLink}
            image={ApproachStepFour.image}
            imageAlt={ApproachStepFour.imageAlt}
          />
          <Discover
            badgeText={ApproachStepFive.badgeText}
            title={ApproachStepFive.title}
            description={ApproachStepFive.description}
            buttonText={ApproachStepFive.buttonText}
            buttonLink={ApproachStepFive.buttonLink}
            image={ApproachStepFive.image}
            imageAlt={ApproachStepFive.imageAlt}
          />
        </section>
      </section>
      <section>
        <GlowPanel />
        <Strategy
          cardData={Agent_Projects}
          SectionHead={"The Challenges that Derail Agent Initiatives"}
          SectionSubHead={""}
          SectionDescription={
            "Building AI agents is not just about models and automation. Without the right processes, oversight, observability, and safeguards, even promising agent initiatives can struggle to deliver results in production."
          }
          StrategyBadgeText={"What Makes Agent Projects Fail"}
        />
      </section>
      <section>
        <Execution_Plan
          badgeText="Move Beyond Reactive AI"
          title="Deploy Agents that 
Think, Decide, and Act"
          description="From multi-agent orchestration to autonomous workflow execution, we design 
AI systems that operate reliably, securely, and with the right level of human oversight."
          buttonText="Design Your Agent System with Us"
          buttonLink="/contact"
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
