// grants.js
document.addEventListener("DOMContentLoaded", () => {
    const data = {
        "active": [
            {
                title: "COMBINI: connecting COmplementary Medicine evidence and BIological kNowledge to support Integrative Health",
                role: "Principal Investigator (Kilicoglu/Zhang/Tao)",
                agency: "NIH/NCCIH U01AT012871",
                dates: "09/2024 - 08/2029"
            },
            {
                title: "Racial disparities in access to kidney transplantation",
                role: "Principal Investigator",
                agency: "NIH/NIDDK R01DK115629",
                dates: "04/2024 - 03/2029"
            },
            {
                title: "Midwest Disease Modeling and Analytics Preparedness Center (MDAP)",
                role: "Co-Investigator (NLP lead)",
                agency: "CDC",
                dates: "00/2023 - 08/2028"
            },
            {
                title: "Mining minority enriched AllofUs data for innovative ethnic specific risk prediction modeling",
                role: "Principal Investigator",
                agency: "NIH/NIHMD 1R21MD019134-01 (PI: Zhang/Wang/Hou)",
                dates: "09/2023 – 05/2025"
            },
            {
                title: "SCH: A New Computational Framework for Learning from Imbalanced Biomedical Data",
                role: "Principal Investigator",
                agency: "NIH/NCI 1R01CA287413-01 (PI: Sun/Cui/Zhang)",
                dates: "08/2023 – 07/2027"
            },
            {
                title: "A Translational Informatics Framework to Mine Efficacy and Safety of Dietary Supplements",
                role: "Principal Investigator",
                agency: "NIH/NCCIH 2R01AT009457-05A1 (PI: Zhang)",
                dates: "01/2023 – 11/2027",
                cost: "Total cost: $3.1 million"
            },
            {
                title: "AI driven modifications of a mobile food record to enhance capture of dietary intake",
                role: "Co-Principal Investigator (Chow/Zhang)",
                agency: "MnDRIVE UMII",
                dates: "01/2023 – 01/2024"
            },
            {
                title: "Imbalanced Learning of Medical NLP",
                role: "Co-Principal Investigator (Sun/Zhang)",
                agency: "CISCO",
                dates: "12/2022 – 12/2023"
            },
            {
                title: "Detecting synergistic effects of pharmacological and non-pharmacological interventions for AD/ADRD",
                role: "Principal Investigator",
                agency: "NIH/NIA 1R01AG078154-01 (PI: Zhang/Xu)",
                dates: "09/2022 – 05/2027",
                cost: "Total cost: $3.9 million"
            }
        ],
        "completed": [
            {
                title: "Post-Acute Sequelae of SARS-CoV-2 Infection Initiative: NYU Langone Health Clinical Science Core, Data Resource Core, and PASC Biorepository Core",
                role: "Co-Investigator (leading NLP efforts at UMN site)",
                agency: "NIH/NHLBI OT2HL161847-01 (PI: Katz/Horwitz/Troxel)",
                dates: "10/2021 – 05/2022"
            },
            {
                title: "Use of a Mobile Food Record, Enhanced by a Novel Artificial Intelligence-Based Informatics Framework, to Expand Capture of Dietary Intake",
                role: "Co-Principal Investigator",
                agency: "Institute for Diabetes, Obesity and Metabolism",
                dates: "12/2021 – 11/2023"
            },
            {
                title: "Identifying Dietary Supplement Effects on Alzheimer's Disease using Electronic Health Records",
                role: "Principal Investigator",
                agency: "NIH/NIA 3R01AT009457-04S1 (PI: Zhang)",
                dates: "07/2020 – 03/2022"
            },
            {
                title: "Discovering Supplement Adverse Events and Drug-Supplement Interaction from Social Media",
                role: "Principal Investigator",
                agency: "NIH/ODS 3R01AT009457-03S1 (PI: Zhang)",
                dates: "04/2019 – 03/2020"
            },
            {
                title: "University of Minnesota Clinical and Translational Science Institute (UMN CTSI)",
                role: "Co-investigator",
                agency: "NIH/NCATS 1UL1TR002494 (PI: Blazar)",
                dates: "03/2018 – 02/2023"
            },
            {
                title: "An Informatics Framework for Discovery and Ascertainment of Drug-Supplement Interactions",
                role: "Principal Investigator",
                agency: "NIH/NCCIH 1R01AT009457 (PI: Zhang)",
                dates: "04/2017 – 03/2022"
            },
            {
                title: "Discovery and Visualization of New Information from Clinical Reports",
                role: "Co-Investigator",
                agency: "AHRQ 1R01HS022085 (PI: Melton‑Meaux)",
                dates: "09/2013 – 08/2018"
            },
            {
                title: "Creating a 21st Century Precision Medicine in Intensive Care Unit",
                role: "Co-Investigator",
                agency: "College of Pharmacy (Skaar)",
                dates: "10/2017 – 09/2019"
            },
            {
                title: "NYHA Classification Determination from Electronic Health Records for Medtronic CRT Patients",
                role: "Co-Investigator",
                agency: "Medtronic Inc. (Aliferis/Speedie)",
                dates: "11/2017 – 09/2018"
            },
            {
                title: "Using Electronic Health Records to Validate Literature Discovery-Based Drug-Drug Interactions",
                role: "Principal Investigator",
                agency: "University of Minnesota Office of the Vice President for Research Grant‑in‑Aid",
                dates: "01/2016 – 06/2017"
            },
            {
                title: "Improving Breast Cancer Survivors’ Disease Management Outcomes through Smartphone Apps and Online Health Community",
                role: "Co-Investigator",
                agency: "University of Minnesota Office of the Vice President for Research Grant‑in‑Aid (PI: Gao)",
                dates: "07/2016 – 01/2018"
            },
            {
                title: "Large‑scale discovery of drug‑supplements interactions in biomedical literature",
                role: "Principal Investigator",
                agency: "University of Minnesota Informatics Institute On the Horizon Grant",
                dates: "07/2014 – 07/2015"
            }
        ]
    };

    const render = (sectionId, list) => {
        const container = document.getElementById(sectionId);
        list.forEach(grant => {
            const card = document.createElement('div');
            card.className = 'grant-card';
            card.innerHTML = `
        <h3>${grant.title}</h3>
        <p><span class="grant-role">Role:</span> ${grant.role}</p>
        <p><span class="grant-agency">Agency:</span> ${grant.agency}</p>
        <p><span class="grant-dates">Dates:</span> ${grant.dates}</p>
        ${grant.cost ? `<p><span class="grant-cost">${grant.cost}</span></p>` : ''}
      `;
            container.appendChild(card);
        });
    };

    render('active-grants', data.active);
    render('completed-grants', data.completed);
});
