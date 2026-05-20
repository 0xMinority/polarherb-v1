const regulatoryItems = [
    ["Ingredient Category", "Botanical / Herbal Ingredient"],
    ["Claim Boundary", "Structure-function positioning preferred"],
    ["Market Entry Risk", "Medium"],
    ["Documentation Need", "Identity, safety, evidence package"],
  ];
  
  export function RegulatoryOutlook() {
    return (
      <div className="mt-14 border border-white/[0.06] bg-[#0A141D] p-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D7DCE2]/35">
          Regulatory Outlook
        </p>
  
        <h3 className="mt-4 text-[24px] tracking-[-0.04em] text-[#F3F1EA]">
          Market-entry and claim-positioning overview
        </h3>
  
        <div className="mt-8 grid grid-cols-1 gap-[1px] bg-white/[0.05] lg:grid-cols-2">
          {regulatoryItems.map(([label, value]) => (
            <div key={label} className="bg-[#071016] p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
                {label}
              </p>
  
              <p className="mt-4 text-[16px] leading-7 text-[#F3F1EA]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }