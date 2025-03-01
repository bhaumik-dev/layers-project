"use client";
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
    { name: "Quantum", image: quantumLogo, width: "auto", height: "auto" },
    { name: "Acme Corp", image: acmeLogo, width: "auto", height: "auto" },
    {
        name: "Echo Valley",
        image: echoValleyLogo,
        width: "auto",
        height: "auto",
    },
    { name: "Pulse", image: pulseLogo, width: "auto", height: "auto" },
    { name: "Outside", image: outsideLogo, width: "auto", height: "auto" },
    { name: "Apex", image: apexLogo, width: "auto", height: "auto" },
    { name: "Celestial", image: celestialLogo, width: "auto", height: "auto" },
    { name: "Twice", image: twiceLogo, width: "auto", height: "auto" },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-xl text-white/50">
                    Already chosen by market leaders
                </h3>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right, transparent, black_10%,black_90%, transparent)]">
                    <motion.div
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex flex-none gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {logos.map((logo) => (
                                    <Image
                                        src={logo.image}
                                        key={logo.image}
                                        alt={logo.name}
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
