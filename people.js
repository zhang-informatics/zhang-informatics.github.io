document.addEventListener("DOMContentLoaded", function () {
    const data = {
        "Principal Investigator": [
            {
                name: "Rui Zhang, PhD, FACMI, FIAHSI, FAMIA",
                role: "Professor & Founding Chief, Division of Computational Health Sciences",
                image: "assets/rui_zhang.png",
                bio: `Dr. Zhang is a Professor in the Department of Surgery and Founding Chief of the Division of Computational Health Sciences. 
                He is an internationally recognized expert in health informatics and clinical NLP. His research interests include clinical and consumer health NLP, knowledge graph construction, and real-world evidence generation. 
                He is a Fellow of the American College of Medical Informatics (FACMI), International Academy of Health Sciences Informatics (FIAHSI), and American Medical Informatics Association (FAMIA).`
            }
        ],
        "Research Scientist": [
            { name: "Yu Hou, PhD", role: "Research Scientist", image: "assets/yu_hou.png" },
            { name: "Xiaoyi Chen", role: "Research Scientist", image: "assets/xiaoyi_chen.jpg" },
            { name: "Shuang Zhou, PhD", role: "Postdoctoral Associate", image: "" },
            { name: "Jia Li, PhD", role: "Postdoctoral Associate", image: "" },
            { name: "Jun Wang", role: "Postdoctoral Associate", image: "" },
            { name: "Kai Yu", role: "Postdoctoral Associate", image: "" },
            { name: "Min Zeng", role: "Postdoctoral Associate", image: "" }
        ],
        "Programmer": [
            { name: "Jeremy Yeung", role: "Programmer", image: "" }
        ],
        "PhD Students": [
            { name: "Huixue Zhou", role: "PhD Candidate", image: "" },
            { name: "Yongkang Xiao", role: "PhD Student", image: "" },
            { name: "Meijia Song", role: "PhD Student", image: "" },
            { name: "Zaifu Zhan", role: "PhD Student", image: "" },
            { name: "Yifan Wu", role: "PhD Student", image: "" }
        ],
        "Master Students": [
            { name: "Navanshu Khare", role: "MS Student", image: "" },
            { name: "Shifa Siddiqui", role: "MS Student", image: "" },
            { name: "SriHarshitha Anuganti", role: "MS Student", image: "" }
        ],
        "Alumni": {
            "Programmer": ["Mingchen Li, MS", "Datlon Schutter, BA", "Jake Vasilakes, MS"],
            "Postdoctoral Associate": ["Mousumi Roy, PhD", "Rubina Rizvi, MD, PhD"],
            "PhD Students": ["Han Yang, MS", "Sicheng Zhou, PhD", "Zhecheng Sheng, MS", "Yadan Fan, PhD", "David Marc, PhD", "Anu Bompelli, MS"],
            "PharmD/MHI Students": ["Yifan Li, PharmD/MHI", "Yuqi Zhou, PharmD/MHI"],
            "Master Students": ["Ruyuan Wan, MS", "Esha Singh, MS", "Thao Nguyen, MS", "Wendi Zhao, MD, MHI", "Miao Yu, MS", "Nivedha Manohar, MHI", "Xi Chen, MS", "Gopal Sarda, MS", "Mian Li, MS"],
            "Undergraduate Students": ["Yoonkwon (Dominic) Yi, BS", "Yutong Li, BS", "Devin (Dingwei) Deng, BS", "Yuanhao Ruan, BS"],
            "High School Students": ["Athena Wang", "Andrew Wang", "Nathan Wu", "Andrew Yang", "Caroline Zeng", "Alex Cheng", "Samuel Aronson"]
        }
    };

    const container = document.getElementById("people-container");

    Object.entries(data).forEach(([sectionTitle, members]) => {
        const section = document.createElement("section");
        section.innerHTML = `<h2>${sectionTitle}</h2>`;

        if (sectionTitle !== "Alumni") {
            const grid = document.createElement("div");
            grid.className = "person-grid";

            members.forEach((p) => {
                const card = document.createElement("div");
                if (sectionTitle === "Principal Investigator" && p.name.includes("Rui Zhang")) {
                    card.className = "person-card-horizontal";
                    card.innerHTML = `
            <div class="person-photo-large">${p.image ? `<img src="${p.image}" alt="${p.name}">` : ""}</div>
            <div class="person-bio">
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
              <p class="bio-text">${p.bio}</p>
            </div>`;
                } else {
                    card.className = "person-card";
                    card.innerHTML = `
            <div class="person-photo">${p.image ? `<img src="${p.image}" alt="${p.name}">` : ""}</div>
            <div class="person-info">
              <h3>${p.name}</h3>
              <p>${p.role}</p>
            </div>`;
                }
                grid.appendChild(card);
            });
            section.appendChild(grid);
        } else {
            Object.entries(members).forEach(([subgroup, names]) => {
                const sub = document.createElement("div");
                sub.innerHTML = `<h3>${subgroup}</h3><ul>${names.map(n => `<li>${n}</li>`).join('')}</ul>`;
                section.appendChild(sub);
            });
        }

        container.appendChild(section);
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
