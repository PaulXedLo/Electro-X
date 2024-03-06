import { useState } from "react";

export default function FrequentlyAsked() {
  const [showAccord, setShowAccord] = useState(null);

  const handleAccordionClick = (index) => {
    setShowAccord((prevShowAccord) =>
      prevShowAccord === index ? null : index
    );
  };

  const accordionItems = [
    {
      id: 1,
      question: "What is ElectroX?",
      content: (
        <>
          <p className="text-gray-500 dark:text-gray-400" id="accordion-text">
            Morbi euismod tincidunt orci. Pellentesque ullamcorper elit
            ullamcorper, sodales quam vitae, venenatis nibh. Integer hendrerit
            eget eros in ornare. Aenean et nunc neque
          </p>
        </>
      ),
    },
    {
      id: 2,
      question: "Do you accept refunds?",
      content: (
        <>
          <p
            className="mb-2 text-gray-500 dark:text-gray-400"
            id="accordion-text"
          >
            Duis semper quis leo sit amet dignissim. odio consectetur mattis.
            Sed volutpat semper magna ac viverra. Nullam volutpat sed metus eu
            iaculis.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              prices
            </a>{" "}
          </p>
        </>
      ),
    },
    {
      id: 3,
      question: "Who created ElectroX",
      content: (
        <>
          <p
            className="mb-2 text-gray-500 dark:text-gray-400"
            id="accordion-text"
          >
            Sed eu felis odio. Quisque dictum aliquet sem, at porta tortor
            condimentum lacinia. Donec congue orci et bibendum elementum.
            Maecenas pellentesque ut mi efficitur viverra. Vestibulum dui
            tellus, elementum id sapien ac, pretium hendrerit leo. Curabitur
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="faq">
      <h1 className="faqtext">Frequently Asked Questions</h1>
      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {accordionItems.map((item) => (
          <div key={item.id}>
            <h2 id={`accordion-flush-heading-${item.id}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 ${
                  showAccord === item.id ? "active" : ""
                }`}
                onClick={() => handleAccordionClick(item.id)}
                aria-expanded={showAccord === item.id}
                aria-controls={`accordion-flush-body-${item.id}`}
              >
                <span>{item.question}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-180 shrink-0 ${
                    showAccord === item.id ? "open" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-flush-body-${item.id}`}
              className={`py-5 border-b border-gray-200 dark:border-gray-700 ${
                showAccord === item.id ? "block" : "hidden"
              }`}
              aria-labelledby={`accordion-flush-heading-${item.id}`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
