import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2025+",
            title: "Backend Developer",
            company: "Citibank",
            type: "Jul 2025 – Present",
            description: "Built multi-tenant Python services (FastAPI, Celery, PostgreSQL) reconciling Plaid bank transactions against QuickBooks Online. Rules-driven matching with Redis-cached GL rules auto-matches 93% of transactions; added pre-posting validation after tracing $32K in incorrect entries, and a RAG pipeline with 82% accountant acceptance."
        },
        {
            year: "2021-2023",
            title: "Backend Developer",
            company: "Rlogical Techsoft",
            type: "May 2021 – Jun 2023",
            description: "Built a Kafka and Celery pipeline syncing 50,000+ ERP events daily, cutting latency by 30%. Secured 20+ REST endpoints with JWT, OAuth2, and RBAC, and integrated Stripe and Twilio for 3 enterprise clients, reducing manual effort by 40%."
        },
        {
            year: "2020-2021",
            title: "Backend Developer",
            company: "Maxgen Technologies",
            type: "Sep 2020 – Apr 2021",
            description: "Built Python ETL and validation pipelines processing 120,000+ records daily, cutting manual effort by 60%. Automated CI/CD with GitHub Actions, added Grafana monitoring, and maintained 90% test coverage."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-full min-h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 0 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;