// people.js
document.addEventListener("DOMContentLoaded", function () {
    const data = {
        "Principal Investigator": [
            {
                name: "Rui Zhang, PhD, FACMI, FIAHSI, FAMIA",
                role: "Professor & Founding Chief, Division of Computational Health Sciences",
                image: "" // placeholder
            }
        ],
        "Research Scientist & Postdoctoral Associate": [
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
            { name: "Huixue Zhou", role: "PhD Candidate in Health Informatics", image: "" },
            { name: "Yongkang Xiao", role: "PhD Student in Health Informatics", image: "" },
            { name: "Meijia Song", role: "PhD Student in Nursing Informatics", image: "" },
            { name: "Zaifu Zhan", role: "PhD Student in ECE", image: "" },
            { name: "Yifan Wu", role: "PhD Student in Bioinformatics and Computational Biology", image: "" }
        ],
        "Master Students": [
            { name: "Navanshu Khare", role: "Master Student (Data Science)", image: "" },
            { name: "Shifa Siddiqui", role: "Master Student (Data Science)", image: "" },
            { name: "SriHarshitha Anuganti", role: "Master Student (Data Science)", image: "" }
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

    Object.entries(data).forEach(([sectionTitle, items]) => {
        const sec = document.createElement("section");
        const h2 = document.createElement("h2");
        h2.textContent = sectionTitle;
        sec.appendChild(h2);

        if (sectionTitle !== "Alumni") {
            const grid = document.createElement("div");
            grid.className = "person-grid";
            items.forEach((p) => {
                const card = document.createElement("div");
                card.className = "person-card";
                card.innerHTML = `
          <div class="person-photo">${p.image ? `<img src="${p.image}" alt="${p.name}">` : ""}</div>
          <div class="person-info">
            <h3>${p.name}</h3>
            <p>${p.role}</p>
          </div>`;
                grid.appendChild(card);
            });
            sec.appendChild(grid);
        } else {
            Object.entries(items).forEach(([subGroup, list]) => {
                const sub = document.createElement("div");
                sub.innerHTML = `<h3>${subGroup}</h3><ul>${list.map(name => `<li>${name}</li>`).join('')}</ul>`;
                sec.appendChild(sub);
            });
        }

        container.appendChild(sec);
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}