let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total1 = document.getElementById("total1");
let total2 = document.getElementById("total2");
let total3 = document.getElementById("total3");
let total4 = document.getElementById("total4");
const allCard = document.getElementById("allCard");
//console.log(allCard.children.length);

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const RejectedFilterBtn = document.getElementById("Rejected-filter-btn");

const filteredSection = document.getElementById("filtered-section");
const blankSection = document.getElementById("blank-section");

const mainContainer = document.querySelector("main");
console.log(mainContainer);

function calculateCount() {
  total1.innerText = allCard.children.length;
  total2.innerText = interviewList.length;
  total3.innerText = rejectedList.length;
  total4.innerText = rejectedList.length + interviewList.length;
}

calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.add("bg-gray-300", "text-black");
  interviewFilterBtn.classList.add("bg-gray-300", "text-black");
  RejectedFilterBtn.classList.add("bg-gray-300", "text-black");

  allFilterBtn.classList.remove("bg-black", "text-white");
  interviewFilterBtn.classList.remove("bg-black", "text-white");
  RejectedFilterBtn.classList.remove("bg-black", "text-white");

  console.log(id);

  const selected = document.getElementById(id);
  currentStatus = id;
  console.log(selected);
  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  if (id == "interview-filter-btn") {
    allCard.classList.add("hidden");
    blankSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterviwe();
  } else if (id == "all-filter-btn") {
    blankSection.classList.add("hidden");
    allCard.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  } else if (id == "Rejected-filter-btn") {
    allCard.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejected();
    blankSection.classList.add("hidden");
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const class1 = parentNode.querySelector(".class1").innerText;
    const class2 = parentNode.querySelector(".class2").innerText;
    const class3 = parentNode.querySelector(".class3").innerText;
    const class4 = parentNode.querySelector(".class4").innerText;
    const class5 = parentNode.querySelector(".class5").innerText;
    const class6 = parentNode.querySelector(".class6").innerText;
    const class7 = parentNode.querySelector(".class7").innerText;
    parentNode.querySelector(".class4").innerText = "INTERVIEW";
    const cardInfo = {
      class1,
      class2,
      class3,
      class4: "INTERVIEW",
      class5,
      class6,
      class7,
    };
    //console.log(cardInfo);
    const interviewListExist = interviewList.find(
      (item) => item.class1 == cardInfo.class1,
    );

    if (!interviewListExist) {
      interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.class1 != cardInfo.class1,
    );
    calculateCount();
    // if (currentStatus == "interview-filter-btn") {
    //   renderInterviwe();
    // }
    if (currentStatus == "Rejected-filter-btn") {
      renderRejected();
    }
    //renderInterviwe();
  } else if (event.target.classList.contains("reject-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const class1 = parentNode.querySelector(".class1").innerText;
    const class2 = parentNode.querySelector(".class2").innerText;
    const class3 = parentNode.querySelector(".class3").innerText;
    const class4 = parentNode.querySelector(".class4").innerText;
    const class5 = parentNode.querySelector(".class5").innerText;
    const class6 = parentNode.querySelector(".class6").innerText;
    const class7 = parentNode.querySelector(".class7").innerText;
    parentNode.querySelector(".class4").innerText = "REJECTED";
    const cardInfo = {
      class1,
      class2,
      class3,
      class4: "REJECTED",
      class5,
      class6,
      class7,
    };
    //console.log(cardInfo);
    const rejectedListExist = rejectedList.find(
      (item) => item.class1 == cardInfo.class1,
    );

    if (!rejectedListExist) {
      rejectedList.push(cardInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.class1 != cardInfo.class1,
    );

    if (currentStatus == "interview-filter-btn") {
      renderInterviwe();
    }

    calculateCount();
  }

  //console.log(interviewList);
});

function renderInterviwe() {
  filteredSection.innerHTML = "";
  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement("div");
    div.className =
      "card1 w-[1110px] h-[300px] bg-[#FFFFFF] p-6  flex justify-between rounded-md mt-4 pb-4";
    div.innerHTML = `<div>
                        <div>
                            <h1 class="class1 font-semibold text-[18px] text-[#002C5C]">${interview.class1}</h1>
                            <p class=" class2 font-normal text-[16px] text-[#64748B mt-1 ]">${interview.class2}</p>
                        </div>
                        <div>
                            <p class="class3 font-normal text-[14px] text-[#64748B] mt-5">${interview.class3}</p>
                        </div>
                        <p class="class4 btn uppercase border-3 border-[#10B981] text-[#10B981] mt-5 status-btn">${interview.class4}</p>
                        <p class="class5 notes font-normal text-[14px] text-[#323B49] mt-2">${interview.class5}</p>
                        <div>
                            <button id="btn-1"
                                class="class6 interview-btn border-3 border-[#10B981] text-[#10B981] btn uppercase mt-5 mr-2 w-[100px] h-9">${interview.class6}</button>
                            <button class="class7 reject-btn btn border-3 border-[#EF4444] text-[#EF4444] uppercase mt-5 w-[100px] h-9">${interview.class7}</button>
                        </div>
                    </div>



                    <div>
                        <button class="deleteBtn btn-delete"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
    
    `;

    filteredSection.appendChild(div);
  }
}

function renderRejected() {
  filteredSection.innerHTML = "";
  for (let rejected of rejectedList) {
    console.log(rejected);
    let div = document.createElement("div");
    div.className =
      "card1 w-[1110px] h-[300px] bg-[#FFFFFF] p-6  flex justify-between rounded-md mt-4 pb-4";
    div.innerHTML = `<div>
                        <div>
                            <h1 class="class1 font-semibold text-[18px] text-[#002C5C]">${rejected.class1}</h1>
                            <p class=" class2 font-normal text-[16px] text-[#64748B mt-1 ]">${rejected.class2}</p>
                        </div>
                        <div>
                            <p class="class3 font-normal text-[14px] text-[#64748B] mt-5">${rejected.class3}</p>
                        </div>
                        <p class="class4 btn border-3 border-[#EF4444] text-[#EF4444] uppercase mt-5 status-btn">${rejected.class4}</p>
                        <p class="class5 notes font-normal text-[14px] text-[#323B49] mt-2">${rejected.class5}</p>
                        <div>
                            <button id="btn-1"
                                class="class6 interview-btn border-3 border-[#10B981] text-[#10B981] btn uppercase mt-5 mr-2 w-[100px] h-9">${rejected.class6}</button>
                            <button class="class7 reject-btn btn border-3 border-[#EF4444] text-[#EF4444] uppercase mt-5 w-[100px] h-9">${rejected.class7}</button>
                        </div>
                    </div>



                    <div>
                        <button class="deleteBtn btn-delete"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
    
    `;

    filteredSection.appendChild(div);
  }
}

// document
//   .getElementById("interview-filter-btn")
//   .addEventListener("click", function () {
//     const blankSection = document.getElementById("blank-section");
//     if (interviewList == 0 || rejectedList == 0) {
//       blankSection.classList.remove("hidden");
//     } else {
//     }
//   });
document
  .getElementById("interview-filter-btn")
  .addEventListener("click", function () {
    if (interviewList == 0) {
      blankSection.classList.remove("hidden");
    }
  });
document
  .getElementById("Rejected-filter-btn")
  .addEventListener("click", function () {
    if (rejectedList == 0) {
      blankSection.classList.remove("hidden");
    }
  });
