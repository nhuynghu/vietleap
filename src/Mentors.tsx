type Mentor = {
  name: string;
  affiliation: string;
  focus: string;
  photo: string;
  // "contain" for cut-out portraits (transparent background), "cover" for regular photos
  fit: "contain" | "cover";
};

const MENTORS: Mentor[] = [
  {
    name: "Nguyen Phuc Canh",
    affiliation: "University of Economics Ho Chi Minh City, VN",
    focus: "Institutional economics, macroeconomic policy and its impacts, environmental and energy economics.",
    photo: "/mentors/nguyen-phuc-canh.png",
    fit: "contain",
  },
  {
    name: "Nguyen Tien Viet",
    affiliation: "London School of Economics, UK",
    focus: "Economic and political issues related to growth, technology, the environment, and energy, with a current focus on the economics of clean energy and digital technologies in the twin transitions.",
    photo: "/mentors/nguyen-tien-viet.png",
    fit: "contain",
  },
  {
    name: "Nguyen Van Phuc",
    affiliation: "Western Sydney University, VN",
    focus: "Econometrics, policy analysis, the application of AI to teaching, research, and solving practical business problems; research in corporate finance and financial technology, including the adoption of central bank digital currencies (CBDCs).",
    photo: "/mentors/nguyen-van-phuc.png",
    fit: "contain",
  },
  {
    name: "Dang Hoang Nhat Tam",
    affiliation: "University of Economics Ho Chi Minh City, VN",
    focus: "Macroeconomics, energy economics and uncertainty measurement, including geopolitical risk and fiscal policy uncertainty.",
    photo: "/mentors/dang-hoang-nhat-tam.png",
    fit: "contain",
  },
  {
    name: "Nguyen Tri Dung",
    affiliation: "Coventry University, UK",
    focus: "Macroeconomics, behavioral economics and financial economics. Former National Manager of a macroeconomic policy project at the Economic Committee of the National Assembly.",
    photo: "/mentors/nguyen-tri-dung.png",
    fit: "contain",
  },
  {
    name: "Karan Vishwanath",
    affiliation: "University of Leicester, UK",
    focus: "Corporate governance and corporate finance, exploring how executive characteristics and compensation influence corporate decision-making and outcomes; environmental, social, and governance (ESG), corporate social responsibility (CSR), and mergers and acquisitions (M&A)",
    photo: "/mentors/karan-vishwanath.png",
    fit: "contain",
  },
  {
    name: "Le Minh Phuong",
    affiliation: "Vin University, VN",
    focus: "Economic growth and inequality in the distribution of income and wealth, with an applied orientation toward policy design and advocacy.",
    photo: "/mentors/le-minh-phuong.png",
    fit: "cover",
  },
  {
    name: "Luu Duc Canh",
    affiliation: "Tasco, VN",
    focus: "Data engineering: large-scale data platforms, from cloud lakehouse on GCP to on-premises Apache Iceberg, data modeling and governance.",
    photo: "/mentors/luu-duc-canh.png",
    fit: "cover",
  },
  {
    name: "Dinh Xuan Phan Anh",
    affiliation: "FiinGroup, VN",
    focus: "Data analyst and engineer behind the FiinQuant Python library, the Alpha Radar trading alert bot and an AI agent chatbot for stock market statistics.",
    photo: "/mentors/dinh-xuan-phan-anh.png",
    fit: "cover",
  },
];

export default function Mentors() {
  return (
    <section id="mentors" className="pb-28 px-6 bg-[#0f1e38]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <div className="tag bg-[#ff3d6b]/10 text-[#ff3d6b] border border-[#ff3d6b]/30 inline-block mb-4">Mentors</div>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] uppercase leading-none text-white">
            Meet the Mentors
          </h2>
          <p className="text-[#7a7a9a] max-w-2xl mx-auto mt-4">
            Experts from academia and industry who advise your team during the challenge. They help you sharpen your question, check your approach and react to your findings. The final decisions stay with your team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENTORS.map((m) => (
            <div key={m.name} className="bg-[#0a1628] border border-white/10 rounded-2xl overflow-hidden card-hover flex flex-col">
              <div className="h-64 bg-gradient-to-br from-[#5b4fff]/30 via-[#0066ff]/15 to-[#00e5ff]/10 flex items-end justify-center">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className={
                    m.fit === "cover"
                      ? "w-full h-full object-cover object-top"
                      : "h-full w-auto max-w-full object-contain object-bottom"
                  }
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-black text-xl text-white uppercase tracking-wide mb-1">{m.name}</h3>
                <p className="font-mono text-[#00e5ff] text-xs uppercase tracking-widest mb-3">{m.affiliation}</p>
                <p className="text-[#7a7a9a] text-sm leading-relaxed">{m.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
