
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
    {
        src: "https://i.ibb.co.com/YB7qPfc3/nutriciously-b-M0-Bbefyiw4-unsplash.jpg",
        title: "Fresh Fruits Boost",
        desc: "Daily fruits provide vitamins, fiber, and natural energy. Try to eat a colorful plate — different colors mean different nutrients.",
        tips: [
            "Start your day with a fruit",
            "Mix fruits into breakfast bowls",
            "Prefer whole fruits over juices",
            "Eat at least 2–3 servings daily",
            "Carry an apple or banana on the go",
        ],
    },
    {
        src: "https://i.ibb.co.com/jPsvWQqL/giorgio-trovato-wv-Hrmfc1-SNw-unsplash.jpg",
        title: "Hydration Matters",
        desc: "Keep water nearby and sip throughout the day. Hydration supports digestion, skin, and energy levels.",
        tips: [
            "Carry a reusable bottle",
            "Add lemon or mint for flavor",
            "Set hourly water reminders",
            "Drink before meals to aid digestion",
            "Limit sugary drinks",
        ],
    },
    {
        src: "https://i.ibb.co.com/XkZt48RB/vitalii-pavlyshynets-kc-RFW-Hje8-Y-unsplash.jpg",
        title: "Balanced Meals",
        desc: "Combine lean protein, whole grains, and veggies for steady energy and better focus.",
        tips: [
            "Plate half veggies",
            "Choose whole grains",
            "Include a protein source",
            "Avoid processed food often",
            "Don’t skip breakfast",
        ],
    },
    {
        src: "https://i.ibb.co.com/zTR3xctC/crystalweed-cannabis-RSj-YNW5n-is-unsplash.jpg",
        title: "Mindful Breaks",
        desc: "Short walks, deep breaths, or light stretching reset your mind and reduce stress.",
        tips: [
            "Take a 5-min walk every hour",
            "Try box breathing: 4-4-4-4",
            "Stand and stretch during breaks",
            "Practice gratitude journaling",
            "Limit screen exposure during breaks",
        ],
    },
];


const gridImages = [
    "https://i.ibb.co.com/8nNB3Lf0/marek-studzinski-SRk-Yy-Z5y-Pks-unsplash.jpg",
    "https://i.ibb.co.com/ZpT6PFVB/hong-nguyen-5o-Ubh-Jh8-Rm-U-unsplash.jpg",
    "https://i.ibb.co.com/WW7sRpqX/mikey-frost-d-M7-JCx-Pvr8o-unsplash.jpg",
    "https://i.ibb.co.com/hF8BZypt/fotos-Go3c1g-PM0-Sk-unsplash.jpg",
];


const doctorTips = [
    {
        src: "https://i.ibb.co.com/vCw3RJ3J/usman-yousaf-MJ-BZMPu-WYE-unsplash.jpg",
        title: "Regular Checkups",
        desc: "Visiting your doctor regularly helps detect health issues early and keeps you on track with preventive care.",
        tips: [
            "Schedule yearly health checkups",
            "Get blood pressure monitored",
            "Don’t skip dental visits",
        ],
    },
    {
        src: "https://i.ibb.co.com/rKpRdL7C/nappy-Ma9dbw-SEego-unsplash.jpg",
        title: "Mental Health Matters",
        desc: "Taking care of your mental well-being is as important as physical health.",
        tips: [
            "Talk openly about stress",
            "Don’t hesitate to seek therapy",
            "Practice mindfulness daily",
        ],
    },
    {
        src: "https://i.ibb.co.com/Q3wj2Mks/immo-wegmann-f0h8-EId-TXWo-unsplash.jpg",
        title: "Nutrition Guidance",
        desc: "Consult doctors or nutritionists before starting strict diets or supplements.",
        tips: [
            "Avoid self-prescribing medicine",
            "Balance food groups in meals",
            "Stay hydrated daily",
        ],
    },
    {
        src: "https://i.ibb.co.com/DHhJ2K2r/fr0ggy5-Wk1ii-Nt-YAv-E-unsplash.jpg",
        title: "Exercise & Mobility",
        desc: "Doctors recommend daily movement to improve cardiovascular and muscular health.",
        tips: [
            "Do at least 30 mins of exercise",
            "Focus on posture",
            "Consult physio for pain",
        ],
    },
    {
        src: "https://i.ibb.co.com/YB6VQ9Yj/usman-yousaf-fy8-Wm-FBIa-Rs-unsplash.jpg",
        title: "Vaccinations & Safety",
        desc: "Immunizations protect you and the community from diseases.",
        tips: [
            "Stay updated on vaccines",
            "Follow travel-related precautions",
            "Keep emergency contacts ready",
        ],
    },
];

export default function HealthTips() {
  

    return (
        <div className="relative overflow-hidden max-w-7xl mx-auto p-6">
            <header className="mb-8 text-center" data-aos="fade-down">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    Health & Fruit Tips
                </h1>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                    Discover simple daily habits and health tips — crafted with fruits, fitness, and mindful living, all styled responsively with smooth AOS animations.
                </p>

            </header>

            <main className="space-y-12">

                {items.map((it, idx) => (
                    <section
                        key={idx}
                        className={`flex flex-col md:flex-row items-center gap-6 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                        data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src={it.src}
                                alt={it.title}
                                className="w-full h-64 md:h-80 object-cover rounded-2xl"
                                onError={(e) => (e.currentTarget.style.opacity = "0.75")}
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                                <h2 className="text-2xl font-bold mb-2">{it.title}</h2>
                                <p className="text-gray-700 mb-4">{it.desc}</p>

                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    {it.tips.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                ))}

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="zoom-in">
                    {gridImages.map((src, idx) => (
                        <div key={idx} className="overflow-hidden rounded-2xl">
                            <img
                                src={src}
                                alt={`Health Grid ${idx + 1}`}
                                className="w-full h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </section>



                <section className="space-y-12 mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" data-aos="fade-up">
                        Doctor’s Health Tips
                    </h2>

                    {doctorTips.map((doc, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col md:flex-row items-center gap-6 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                        >
                            <div className="w-full md:w-1/2">
                                <img
                                    src={doc.src}
                                    alt={doc.title}
                                    className="w-full h-64 md:h-80 object-cover rounded-2xl"
                                />
                            </div>

                            <div className="w-full md:w-1/2">
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                                    <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                                    <p className="text-gray-700 mb-4">{doc.desc}</p>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                        {doc.tips.map((t, i) => (
                                            <li key={i}>{t}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

            </main>




            <footer
                className="mt-12 text-center text-sm text-gray-500"
                data-aos="fade-up"
            >
                Made with — Stay healthy & active.
            </footer>
        </div>
    );
}
