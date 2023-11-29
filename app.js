// ===============================
// Array data
//Accordion Cards data
const cardData = [
  {
    title: "Customize your online store",
    description:
      "Choose a theme and add your logo, colors, and images to reflect your brand.",
    buttonLabel: "Customize options",
    buttonLabelTwo: "",
    imageUrl: "https://crushingit.tech/hackathon-assets/payment.png",
    state: "active",
  },
  {
    title: "Add your first product",
    description:
      "Write a description, add photos, and set pricing for the products you plan to sell.",
    buttonLabel: "Add product",
    buttonLabelTwo: "Import product",
    imageUrl: "https://crushingit.tech/hackathon-assets/product.png",
    state: "",
  },
  {
    title: "Add a custom domain",
    description:
      "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
    buttonLabel: "Add domain",
    buttonLabelTwo: "",
    imageUrl: "https://crushingit.tech/hackathon-assets/website.png",
    state: "",
  },
  {
    title: "Name your store",
    description:
      "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.",
    buttonLabel: "Name store",
    buttonLabelTwo: "",
    imageUrl: "https://crushingit.tech/hackathon-assets/customise-store.png",
    state: "",
  },
  {
    title: "Set up a payment provider",
    description:
      "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.",
    buttonLabel: "Set up payment",
    buttonLabelTwo: "",
    imageUrl: "https://crushingit.tech/hackathon-assets/name-store.png",
    state: "",
  },
];
// Looping through the array to create card components
const cards = cardData.map(
  (card, index) =>
    `
<article class="article ${card.state} flex" key=${index}>
  <aside class="" >
    
      <button class="loading-btn" aria-label="Check the ${card.title} button">
        <span id="loading-status" aria-live="polite" aria-label="" ></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
          fill="#fff"
          class="loading"
          id="display"
          aria-hidden="true"
          role="img"
        >
          <circle
            cx="16"
            cy="16"
            r="12"
            stroke="#8A8A8A"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="4 6"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 28 28"
          fill="none"
          class="hide loading-styles"
          id="loading"
          aria-hidden="true"
          role="img"
        >
          <path
            d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
            stroke="#1C181D"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="40"
          height="40"
          id="loaded"
          class="hide loaded-styles"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="#303030"></circle>
          <path
            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
            fill="#fff"
          ></path>
        </svg>
      </button>
    <div class="card flex-col" aria-label=${card.title} >
      <button class="btn-title text-13-semibold text-dark card-text-button "  role="button"  > ${
        card.title
      } </button>
      <div class="text-13-medium" >
        <p>${card.description} </P>
        <a href="#" class=" card-span-button text-14-semibold" role="link" >Learn more</a>
      </div>
      <div class="card-buttons" role="group" aria-label="Card Buttons">
        <button class="button-1 flex text-light text-12-semibold gap rounded-sm card-text-button" role="button"> ${
          card.buttonLabel
        } </button>
        <button class="button-3 flex text-dark text-12-semibold rounded-sm card-text-button ${
          !card.buttonLabelTwo && "hide"
        } "  role="button" >
          ${card.buttonLabelTwo}
         </button>
      </div>
    </div>
  </aside>
  <img src=${card.imageUrl} alt=${card.title} />
</article>
`
);
// Menu List Data array
const menuListData = [
  "Help Center",
  "Changelog",
  "Community forums",
  "Hire a Shopify Partner",
  "Keyboard shortcuts",
];
// Looping throught the array to create button Components
const menuBtns = menuListData.map(
  (menu) =>
    ` <li> <button class="dropdown menu-dropdown-button flex rounded text-13-regular text-dark" role="menuitem">${menu}</button> </li> `
);
// Looping throught the array to create
// End of arrray data
// ==================================

const app = () => {
  window.addEventListener("DOMContentLoaded", () => {
    const menuList = document.querySelector("#menu-list");
    const cardsContainer = document.querySelector("#cards-container");

    // dynamically setting page content on load
    menuList.innerHTML = menuBtns.join("");
    cardsContainer.innerHTML = cards.join("");

    // Handling the when alert button is  clicked
    const handleAlertTrigger = (event) => {
      event.stopPropagation();
      // Hide the menu modal if alert is open
      menuModal.classList.add("hide");
      alertTrigger.ariaExpanded = "true";
      // toggles the alert on and off
      alertModal.classList.toggle("hide");
      const isShown = alertModal.classList.contains("hide");
      // if the alert is open then close
      isShown
        ? closeModal(alertModal)
        : openModal(alertTrigger, alertModal, alertItems);
    };
    // handling when menu button is clicked
    const handleMenuTrigger = (event) => {
      event.stopPropagation();
      // hide the alert modal when menu is open
      alertModal.classList.add("hide");
      menuTrigger.ariaExpanded = "true";

      // const isShown = menuTrigger.attributes["aria-expanded"].value === "true";
      const isShown = !menuModal.classList.contains("hide");

      menuModal.classList.toggle("hide");
      // if menu is  open the close it otherwise open it
      if (isShown) {
        closeModal(menuTrigger);
      } else {
        openModal(menuTrigger, menuModal, menuItems);
      }
    };
    // function that handles opening and closing of modal
    const closeModal = (btn) => {
      btn.ariaExpanded = "false";
      btn.focus();
    };
    const openModal = (btn, modal, modalItems) => {
      // focus on the first item on the screen
      modalItems.item(0).focus();
      // close the modal with escape key
      modal.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
          modal.classList.add("hide");
          btn.ariaExpanded = "false";
        }
      });
      // navigate modal section by keypress
      modalItems.forEach((item, index) => {
        item.addEventListener("keyup", (event) => {
          handleNavigation(event, index, modalItems);
        });
      });
    };
    // this function handles navigation wih arrow keys
    const handleNavigation = (event, index, modalItems) => {
      // hadling the buttons positions
      const isLastMenuItem = modalItems.length - 1 === index;
      const isFirstMenuItem = index === 0;
      const nextItem = modalItems.item(index + 1);
      const previousItem = modalItems.item(index - 1);
      // if the user pressed arrow left/down focus on the next item
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        // if last item focus on the first
        if (isLastMenuItem) {
          menuItems.item(0).focus();
          return;
        }
        // focus on the next item
        nextItem.focus();
      }
      // if the user pressed arrow up/left focus on the previous item
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        // if on the first item focus on the last
        if (isFirstMenuItem) {
          menuItems.item(menuItems.length - 1).focus();
          return;
        }
        previousItem.focus();
      }
    };

    // close the alert when you click outside
    const alertOutClick = (event) => {
      if (!alertModal.classList.contains("hide")) {
        if (
          !alertModal.contains(event.target) &&
          event.target !== menuTrigger
        ) {
          alertModal.classList.add("hide");
          alertTrigger.ariaExpanded = "false";
        }
      }
    };
    // closes the menu when you click outside
    const menuOutClick = (event) => {
      if (!menuModal.classList.contains("hide")) {
        if (event.target !== menuTrigger && event.target !== alertTrigger) {
          menuModal.classList.add("hide");
          menuTrigger.ariaExpanded = "false";
        }
      }
    };

    // add Animation to the button
    addAnimation = (article) => {
      const displaySvg = article.querySelector("#display");
      const loadingSvg = article.querySelector("#loading");
      const loadedSvg = article.querySelector("#loaded");
      const loadingStatus = article.querySelector("#loading-status");

      loadingStatus.ariaLabel = "Loading please wait";
      displaySvg.classList.add("hide");
      loadingSvg.classList.remove("hide");
      setTimeout(() => {
        loadingSvg.classList.add("hide");
        loadedSvg.classList.remove("hide");
        loadingStatus.ariaLabel =
          article.querySelector(".btn-title").textContent + "Marked as Checked";
      }, 1000);
    };
    // remove animation from the button
    removeAnimation = (article) => {
      const displaySvg = article.querySelector("#display");
      const loadingSvg = article.querySelector("#loading");
      const loadedSvg = article.querySelector("#loaded");
      const loadingStatus = article.querySelector("#loading-status");

      loadedSvg.classList.add("hide");
      loadingSvg.classList.remove("hide");
      setTimeout(() => {
        loadingSvg.classList.add("hide");
        displaySvg.classList.remove("hide");
        loadingStatus.ariaLabel =
          article.querySelector(".btn-title").textContent +
          "Marked as  Unchecked";
      }, 1000);
    };

    // Getting menu components
    const menuTrigger = document.querySelector("#menu-button");
    const menuModal = document.querySelector("#menu");
    const menuItems = menuModal.querySelectorAll("[role='menuitem']");

    // Getting the Alert components
    const alertTrigger = document.querySelector("#alert-button");
    const alertModal = document.querySelector("#alert");
    const alertItems = alertModal.querySelectorAll("[role='menuitem']");

    // Disable the form and remove focus
    const formAction = document.querySelector("form");
    // form actions to prevent any default actions
    formAction.addEventListener("submit", (event) => {
      event.preventDefault();
      formAction.querySelector("input").blur();
    });

    alertItems.forEach((item) => {
      item.addEventListener("click", () => alertModal.classList.add("hide"));
    });

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        window.open("https://admin.shopify.com", "_blank");
      });
    });

    alertTrigger.addEventListener("click", handleAlertTrigger);
    menuTrigger.addEventListener("click", (event) => handleMenuTrigger(event));
    document.addEventListener("click", (event) => {
      alertOutClick(event);
      menuOutClick(event);
    });

    // End of Modal functions
    // ====================================
    const planBtns = document.querySelectorAll(".plan-button");
    const planBanner = document.querySelector("#plan");

    planBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.ariaLabel = "Plan banner is closed";
        planBanner.classList.add("hide");
      });
    });

    // The articles section
    const articles = document.querySelectorAll(".article");
    const progressNum = document.querySelector("#progress-count");
    let progressCount = document.getElementsByClassName("added").length;
    // const progressBar = document.querySelector(".progress");
    const loadingBtns = document.querySelectorAll(".loading-btn");

    // navigate around the loading buttons
    loadingBtns.forEach((item, index) => {
      item.addEventListener("keyup", (event) =>
        handleNavigation(event, index, loadingBtns)
      );
    });

    articles.forEach((article, index) => {
      const loadingBtn = article.querySelector(".loading-btn");
      const textBtn = article.querySelector(".btn-title");

      // ======== functions for hadling toggling check
      // set current as active remove active from others
      const removeActiveFromOthers = () => {
        // looping through each active from other articles asides the current
        articles.forEach((item) => {
          if (item !== article) {
            const btn = item.querySelector(".btn-title");
            btn.setAttribute("tabindex", "0");
            item.classList.remove("active");
          }
        });
        article.classList.add("active");
        textBtn.setAttribute("tabindex", "-1");
      };

      // disable the focus for the current button by setting its tab index to -1
      const disableTextBtnForCurrent = (current) => {
        if (current.classList.contains("active")) {
          const textBtn = current.querySelector(".btn-title");
          textBtn.setAttribute("tabindex", "-1");
          articles.forEach((item) => {
            if (item !== current) {
              const btn = item.querySelector(".btn-title");
              btn.setAttribute("tabindex", "0");
            }
          });
        }
      };

      // Set the next item as active as it activates the current article and jumps to the next one
      const complete = (element) => {
        const itemTextBtn = element.querySelector(".btn-title");
        articles.forEach((item) => {
          if (element !== item) {
            item.classList.remove("active");
            item.querySelector(".loading-btn").blur();
          }
        });
        disableTextBtnForCurrent(element);
        element.classList.add("active");
        element.querySelector(".loading-btn").focus();
      };
      // find next incomplete step using this function
      const findIncompleteStep = (startIndex, endIndex) => {
        for (
          let i = startIndex;
          i !== endIndex;
          i += startIndex < endIndex ? 1 : -1
        ) {
          const step = articles.item(i);
          if (step && !step.classList.contains("completed")) {
            return step;
          }
        }
        return null;
      };

      // function to mark article as added
      const markArticleAsAdded = (item) => {
        complete(item);
        loadingBtn.classList.add("added");
        article.classList.add("completed");
        addAnimation(article);
      };
      // this function activate the next item on the list
      const activateNextStep = () => {
        // getting the next incomplete step
        const nextIncompleteStep = findIncompleteStep(
          index + 1,
          articles.length
        );
        // getting the previous incomplete step
        const prevIncompleteStep = findIncompleteStep(index - 1, -1);
        // Checking for next incomplete step
        if (nextIncompleteStep) {
          markArticleAsAdded(nextIncompleteStep);
        }
        // Handling the previous complete step
        else if (prevIncompleteStep) {
          markArticleAsAdded(prevIncompleteStep);
        } else {
          loadingBtn.classList.toggle("added");
          article.classList.toggle("completed");
          if (loadingBtn.classList.contains("added")) {
            disableTextBtnForCurrent(article);
            addAnimation(article);
          } else {
            disableTextBtnForCurrent(article);
            removeActive();
          }
        }
        // Reset the first click the second click
        isFirstClick = true;
      };
      // remove completed step from the article
      const removeActive = () => {
        loadingBtn.classList.remove("added");
        article.classList.remove("completed");
        removeAnimation(article);
      };
      // handle clicking on the  of the loading button
      const handleCheckBoxClick = () => {
        const isActive = article.classList.contains("active");
        if (isActive) {
          isFirstClick = false;
        }
        if (isFirstClick) {
          if (loadingBtn.classList.contains("added")) {
            // check if article is completed then uncomplete it
            removeActive();
            disableTextBtnForCurrent();
          } else {
            removeActiveFromOthers();
            disableTextBtnForCurrent();
            isFirstClick = false;
          }
          // if user clicks for the second time
        } else if (!isFirstClick) {
          activateNextStep();
          disableTextBtnForCurrent();
          isFirstClick = true;
        }
        updateCount();
        // check if article is active to place or remove focus from its text button
      };
      // to update the count and progress bar
      const updateCount = () => {
        const newCount = document.getElementsByClassName("added").length;
        const progressBar = document.querySelector(".progress");
        if (newCount !== progressCount) {
          progressCount = newCount;
        }
        progressNum.textContent = progressCount;

        progressBar.setAttribute("aria-valuenow", progressCount);
        progressBar.setAttribute(
          "aria-valuetext",
          `${progressCount} out of 5 completed`
        );
        progressBar.style.width = `${progressCount * 20}%`;
      };
      // setting the first click variable to true
      let isFirstClick = true;
      // checking for the button that is clicked
      textBtn.addEventListener("click", () => {
        loadingBtn.focus();
        removeActiveFromOthers();
        // check if article is active to place or remove focus from its text button
      });
      loadingBtn.addEventListener("click", handleCheckBoxClick);
    });

    // ================== Guide button to toggle the cards open and close

    const guideBtn = document.getElementById("guide-button");
    guideBtn.addEventListener("click", () => {
      guideBtn.classList.toggle("rotate");
      cardsContainer.classList.toggle("remove");
      // Handling proper listening if the menu is either toggled on or off
      cardsContainer.classList.contains("remove")
        ? (guideBtn.ariaLabel = "The checklist menu is toggled off ")
        : (guideBtn.ariaLabel = "The checklist menu is toggled on ");
    });
  });
};

app();
