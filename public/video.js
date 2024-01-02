const studentData = [
  {
    sId: 1,
    sName: "Financial Services (Specialization)",
    sImg: "../assets/student-learning/financial-services.webp",
    sYTLink: "7D08685M5qA",
  },
  {
    sId: 2,
    sName: "Experience Excellence",
    sImg: "../assets/student-learning/financial-excellance.webp",
    sYTLink: "QYaYreGyhFo",
  },
  {
    sId: 3,
    sName: "Walkthrough Oasis of Knowledge",
    sImg: "../assets/student-learning/business-analytics.webp",
    sYTLink: "SoJizpDancY",
  },
  {
    sId: 4,
    sName: "Program Highlights",
    sImg: "../assets/student-learning/img4.1.webp",
    sYTLink: "TvtYgnWHdKg",
  },
];

let output = studentData.map(showData).join("");
let list = document.querySelector(".list");
list.innerHTML = output;

function showData(studentData) {
  let listItems = `
      <div class="flex flex-col max-w-xs w-80  rounded-md">
        <div class="flex cursor-pointer relative items-center justify-center flex-col w-full rounded-md"
            onclick="openPopup('${studentData.sYTLink}')">
            <div class="absolute flex w-10 items-center justify-center h-fit z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-32 h-32 text-white">
                    <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full absolute z-10 bottom-2 left-2">
                <span
                    class="w-fit bg-white text-brand-red px-2 py-1 rounded-md font-bold text-xs">${studentData.sName}</span>
            </div>
            <div class="flex w-full">
                <img class="object-contain rounded-md w-full grayscale hover:grayscale-0"
                    src=${studentData.sImg} alt="" />
            </div>
        </div>
      </div>
    `;
  return listItems;
}
